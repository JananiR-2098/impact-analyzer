package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.domain.NgxGraphMultiResponse;
import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.service.GraphService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class PromptAnalysisControllerTest {

    private MockMvc mockMvc;

    private PromptAnalysisService promptAnalysisService;
    private GraphService graphService;

    @BeforeEach
    void setUp() {
        promptAnalysisService = Mockito.mock(PromptAnalysisService.class);
        graphService = Mockito.mock(GraphService.class);
        mockMvc = org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup(new PromptAnalysisController(promptAnalysisService, graphService)).build();
    }

    private final String testJson = "{\"nodes\":[],\"links\":[],\"testPlans\":[{\"title\":\"Test Plan\",\"testPlan\":\"Generated Test Plan\"}]}";
    NgxGraphMultiResponse mockResponse = new NgxGraphMultiResponse(new ArrayList<NgxGraphResponse>(), null);
    List<String> mockNodes = java.util.Collections.singletonList("OrderService");

    @Test
    void testGetImpactedModules() throws Exception {
        when(promptAnalysisService.findNodeFromPrompt(anyString(), anyString())).thenReturn(mockNodes);
        when(graphService.getImpactedModulesNgx(mockNodes, null)).thenReturn(mockResponse);
        when(promptAnalysisService.getTestPlan(anyString(), anyString())).thenReturn("Generated Test Plan");

        mockMvc.perform(post("/promptAnalyzer/impactedModules")
                        .param("sessionId", "testCohortValue")
                        .content("Find impacted modules for OrderService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk());
    }

    @Test
    void getImpactedModulesReturnsOriginalResponseWhenNotNgxGraphResponse() throws Exception {
        when(promptAnalysisService.findNodeFromPrompt(anyString(), anyString())).thenReturn(mockNodes);
        when(graphService.getImpactedModulesNgx(mockNodes, null)).thenReturn("NonNgxGraphResponse");

        mockMvc.perform(post("/promptAnalyzer/impactedModules")
                        .content("Find impacted modules for OrderService")
                        .param("sessionId", "testCohortValue")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("NonNgxGraphResponse"));
    }
}
