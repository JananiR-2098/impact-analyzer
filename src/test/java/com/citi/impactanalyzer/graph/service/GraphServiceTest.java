package com.citi.impactanalyzer.graph.service;

import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import com.citi.impactanalyzer.graph.domain.EdgeMetadata;
import com.citi.impactanalyzer.graph.domain.GraphNode;
import com.citi.impactanalyzer.graph.domain.NgxGraphMultiResponse;
import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzer.parser.service.DependencyAggregationService;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Collections;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class GraphServiceTest {

    @Mock
    DependencyAggregationService aggregationService;
    @Mock
    DependencyAnalyzerProperties analyzerProperties;
    @Mock
    DependencyGraph graph;

    @InjectMocks
    GraphService graphService;

    private final JsonNodeFactory factory = JsonNodeFactory.instance;

    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(graphService, "graphJsonPath", "test/path/graph.json");
    }

    @Test
    void testGetGraph_ReturnsInjectedGraph() {

        assertSame(graph, graphService.getGraph(), "getGraph() should return the injected DependencyGraph instance.");
    }

    @Test
    void testInit_AggregationEnabled_Success() throws Exception {
        when(analyzerProperties.isDependencyAggregationEnabled()).thenReturn(true);
        ReflectionTestUtils.setField(graphService, "graphJsonPath", null);
        graphService.init();
        verify(aggregationService, times(1)).generateDependencyGraph();
    }

    @Test
    void testInit_AggregationDisabled() throws Exception {
        when(analyzerProperties.isDependencyAggregationEnabled()).thenReturn(false);
        ReflectionTestUtils.setField(graphService, "graphJsonPath", null);
        graphService.init();
        verify(aggregationService, never()).generateDependencyGraph();
    }

    @Test
    void testBuildGraphFromJson_Format1_SourceRelationTarget() {
        ArrayNode root = factory.arrayNode();
        root.add(factory.objectNode()
                .put("source", "A")
                .put("relation", "CALLS")
                .put("target", "B"));

        graphService.buildGraphFromJson(root);


        verify(graph, times(1)).addDependency("A", "B");
    }

    @Test
    void testBuildGraphFromJson_Format2_FieldArrays() {
        ArrayNode root = factory.arrayNode();
        root.add(factory.objectNode()
                .put("source", "A")
                .set("CALLS", factory.arrayNode().add("B").add("C")));

        graphService.buildGraphFromJson(root);

        verify(graph).addDependency("A", "B");
        verify(graph).addDependency("A", "C");
        verify(graph, times(2)).addDependency(anyString(), anyString());
    }

    @Test
    void testBuildGraphFromJson_InvalidDataSkipped() {
        ArrayNode root = factory.arrayNode();
        root.add(factory.objectNode().put("source", "X").put("relation", "IMPORTS").put("target", ""));
        root.add(factory.objectNode()
                .put("source", "Y")
                .set("CALLS", factory.arrayNode().add("Z").add("")));

        root.add(factory.objectNode().put("source", "VALID").put("relation", "CALLS").put("target", "TARGET"));

        graphService.buildGraphFromJson(root);

        verify(graph).addDependency("VALID", "TARGET");
        verify(graph).addDependency("Y", "Z");
        verify(graph, times(2)).addDependency(anyString(), anyString());
    }

    @Test
    void testGetImpactedModulesNgx_NullOrEmptyNodes_ReturnsBadRequest() {
        assertTrue(graphService.getImpactedModulesNgx(null, "TP").toString().contains("400 BAD_REQUEST"));
        assertTrue(graphService.getImpactedModulesNgx(Collections.emptyList(), "TP").toString().contains("400 BAD_REQUEST"));
    }

    @Test
    void testGetImpactedModulesNgx_NoMatchingNodesFound_Returns404() {

        List<String> nodes = List.of("NonExistentNode");
        when(graph.findNodes(anyString())).thenReturn(Collections.emptySet());

        assertTrue(graphService.getImpactedModulesNgx(nodes, "TP").toString().contains("404 NOT_FOUND"));
    }

    @Test
    void testGetImpactedModulesNgx_SingleNode_Success() {
        String startName = "com.citi.ServiceA";
        String impactedName = "com.citi.ModelB";
        GraphNode startNode = mock(GraphNode.class);
        GraphNode impactedNode = mock(GraphNode.class);

        when(graph.findNodes(startName)).thenReturn(Set.of(startNode));
        when(startNode.getName()).thenReturn(startName);
        when(impactedNode.getName()).thenReturn(impactedName);
        when(startNode.getDependencies()).thenReturn(Set.of(impactedNode));
        when(impactedNode.getDependencies()).thenReturn(Collections.emptySet());
        when(graph.getEdgeMetadata(startName, impactedName)).thenReturn(new EdgeMetadata());

        Object response = graphService.getImpactedModulesNgx(List.of(startName), "TestPlan-1");

        assertInstanceOf(NgxGraphMultiResponse.class, response);
        NgxGraphMultiResponse ngxResponse = (NgxGraphMultiResponse) response;

        assertEquals(1, ngxResponse.getGraphs().size());
        assertEquals(2, ngxResponse.getGraphs().get(0).getNodes().size());
        assertEquals(1, ngxResponse.getGraphs().get(0).getLinks().size());

    }
}
