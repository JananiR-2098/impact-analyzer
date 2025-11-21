package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.service.GraphService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

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
    // NgxGraphResponse constructor takes two lists (nodes, links)
    NgxGraphResponse mockResponse = new NgxGraphResponse(List.of(), List.of());
    List<String> mockNodes = java.util.Collections.singletonList("OrderService");

    @Test
    void testGetImpactedModules() throws Exception {
        when(promptAnalysisService.findNodeFromPrompt(anyString(), anyString())).thenReturn(mockNodes);
        when(promptAnalysisService.getTestPlan(anyString(), anyString())).thenReturn("Generated Test Plan");
        when(graphService.getImpactedModulesNgx(mockNodes, "Generated Test Plan")).thenReturn("ImpactedModulesResult");

        mockMvc.perform(post("/promptAnalyzer/impactedModules")
                        .param("sessionId", "testCohortValue")
                        .content("Find impacted modules for OrderService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("ImpactedModulesResult"));
    }

    @Test
    void testGetTestPlan() throws Exception {
        when(promptAnalysisService.getTestPlan(anyString(), anyString())).thenReturn("Generated Test Plan");

        mockMvc.perform(post("/promptAnalyzer/testPlan")
                        .param("sessionId", "testCohortValue")
                        .content("Generate test plan for PaymentService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("Generated Test Plan"));
    }

    @Test
    void getImpactedModulesReturnsOriginalResponseWhenNotNgxGraphResponse() throws Exception {
        when(promptAnalysisService.findNodeFromPrompt(anyString(), anyString())).thenReturn(mockNodes);
        // ensure the controller's testPlan call is stubbed so the graphService call has the expected second argument
        when(promptAnalysisService.getTestPlan(anyString(), anyString())).thenReturn("Generated Test Plan");
        when(graphService.getImpactedModulesNgx(mockNodes, "Generated Test Plan")).thenReturn("NonNgxGraphResponse");

        mockMvc.perform(post("/promptAnalyzer/impactedModules")
                        .content("Find impacted modules for OrderService")
                        .param("sessionId", "testCohortValue")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("NonNgxGraphResponse"));
    }
}
