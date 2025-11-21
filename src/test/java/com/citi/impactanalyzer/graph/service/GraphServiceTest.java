package com.citi.impactanalyzer.graph.service;

import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import com.citi.impactanalyzer.graph.domain.GraphNode;
import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzer.parser.service.DependencyAggregationService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.io.File;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GraphServiceTest {

    @Mock
    private DependencyGraph mockGraph;

    @Mock
    private DependencyAggregationService mockAggregationService;

    @Mock
    private DependencyAnalyzerProperties mockAnalyzerProperties;

    @InjectMocks
    private GraphService graphService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("Returns graph when getGraph is called")
    void returnsGraphWhenGetGraphIsCalled() {
        assertNotNull(graphService.getGraph());
    }

    @Test
    @DisplayName("Skips graph initialization when graphJsonPath is not configured")
    void skipsGraphInitializationWhenGraphJsonPathIsNotConfigured() throws Exception {
        when(mockAnalyzerProperties.isDependencyAggregationEnabled()).thenReturn(false);
        graphService.init();
        verify(mockAggregationService, never()).generateDependencyGraph();
        verify(mockGraph, never()).addDependency(anyString(), anyString());
    }

    @Test
    @DisplayName("Handles missing JSON file gracefully during initialization")
    void handlesMissingJsonFileGracefullyDuringInitialization() throws Exception {
        when(mockAnalyzerProperties.isDependencyAggregationEnabled()).thenReturn(false);
        graphService.init();
        File jsonFile = new File("nonexistent.json");
        assertFalse(jsonFile.exists());
    }

    @Test
    @DisplayName("Builds graph from valid JSON input")
    void buildsGraphFromValidJsonInput() throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        String json = "[{\"source\": \"A\", \"calls\": [\"B\"]}]";
        JsonNode root = mapper.readTree(json);

        graphService.buildGraphFromJson(root);

        verify(mockGraph).addDependency("A", "B");
    }

    @Test
    @DisplayName("Skips vectorization when root JSON is null")
    void skipsVectorizationWhenRootJsonIsNull() {
        graphService.vectorizeGraphNodes(null);
        verifyNoInteractions(mockGraph);
    }

    @Nested
    @DisplayName("getImpactedModulesNgx")
    class GetImpactedModulesNgxTests {

        @Test
        @DisplayName("Returns bad request when nodes parameter is empty")
        void returnsBadRequestWhenNodesParameterIsEmpty() {
            var response = graphService.getImpactedModulesNgx(List.of(), "Test Plan");
            assertEquals(400, ((ResponseEntity<?>) response).getStatusCodeValue());
        }

        @Test
        @DisplayName("Returns 404 when no matching nodes are found")
        void returns404WhenNoMatchingNodesAreFound() {
            when(mockGraph.findNodes(anyString())).thenReturn(Set.of());
            var response = graphService.getImpactedModulesNgx(List.of("NonExistentNode"), "Test Plan");
            assertEquals(404, ((ResponseEntity<?>) response).getStatusCodeValue());
        }
    }
}
