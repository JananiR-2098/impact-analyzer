package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.service.GraphService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.anyString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

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

    @Test
    void testGetImpactedModules() throws Exception {
        java.util.List<String> mockNodes = java.util.Collections.singletonList("OrderService");
        Mockito.when(promptAnalysisService.findNodeFromPrompt(anyString())).thenReturn(mockNodes);
        Mockito.when(graphService.getImpactedModulesNgx(mockNodes)).thenReturn("ImpactedModulesResult");

        mockMvc.perform(post("/promptAnalyzer/impactedModules")
                        .content("Find impacted modules for OrderService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("ImpactedModulesResult"));
    }

    @Test
    void testGetTestPlan() throws Exception {
        Mockito.when(promptAnalysisService.getTestPlan(anyString())).thenReturn("Generated Test Plan");

        mockMvc.perform(post("/promptAnalyzer/testPlan")
                        .content("Generate test plan for PaymentService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("Generated Test Plan"));
    }
}
