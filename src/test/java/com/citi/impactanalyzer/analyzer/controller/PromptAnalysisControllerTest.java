package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.service.GraphService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(PromptAnalysisController.class)
class PromptAnalysisControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PromptAnalysisService promptAnalysisService;

    @MockBean
    private GraphService graphService;

    private final String testJson = "{\"nodes\":[],\"links\":[],\"testPlans\":[{\"title\":\"Test Plan\",\"testPlan\":\"Generated Test Plan\"}]}";

    @Test
    void testGetImpactedModules() throws Exception {
        // Mock service responses
        when(promptAnalysisService.findNodeFromPrompt(anyString())).thenReturn("OrderService");
        when(graphService.getImpactedModulesNgx("OrderService")).thenReturn("ImpactedModulesResult");
        NgxGraphResponse mockResponse = new NgxGraphResponse(List.of(), List.of(), List.of());
        when(graphService.getImpactedModulesNgx("OrderService")).thenReturn(mockResponse);
        when(promptAnalysisService.getTestPlan(anyString(), anyString())).thenReturn("Generated Test Plan");

        mockMvc.perform(post("/promptAnalyzer/impactedModules")
                        .content("Find impacted modules for OrderService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().json(testJson));
    }

    @Test
    void testGetTestPlan() throws Exception {
        when(promptAnalysisService.getTestPlan(anyString())).thenReturn("Generated Test Plan");

        mockMvc.perform(post("/promptAnalyzer/testPlan")
                        .content("Generate test plan for PaymentService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("Generated Test Plan"));
    }

    @Test
    void getImpactedModulesReturnsOriginalResponseWhenNotNgxGraphResponse() throws Exception {
        when(promptAnalysisService.findNodeFromPrompt(anyString())).thenReturn("OrderService");
        when(graphService.getImpactedModulesNgx("OrderService")).thenReturn("NonNgxGraphResponse");

        mockMvc.perform(post("/promptAnalyzer/impactedModules")
                        .content("Find impacted modules for OrderService")
                        .contentType(MediaType.TEXT_PLAIN))
                .andExpect(status().isOk())
                .andExpect(content().string("NonNgxGraphResponse"));
    }
}
