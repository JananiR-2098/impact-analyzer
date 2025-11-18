package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.service.GraphService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/promptAnalyzer")
public class PromptAnalysisController {

    private static final Logger logger = LoggerFactory.getLogger(PromptAnalysisController.class);

    private final PromptAnalysisService promptAnalysisService;
    private final GraphService graphService;

    public PromptAnalysisController(PromptAnalysisService promptAnalysisService,
                                    GraphService graphService) {
        this.promptAnalysisService = promptAnalysisService;
        this.graphService = graphService;
    }

    @PostMapping("/impactedModules")
    public ResponseEntity<?> getImpactedModules(@RequestBody String prompt) throws IOException {
        logger.info("Received request to analyze impacted modules for prompt: {}", prompt);
        String node = promptAnalysisService.findNodeFromPrompt(prompt);
        var impactedModules = graphService.getImpactedModulesNgx(node);
        if(impactedModules instanceof NgxGraphResponse response) {
            var impactJson = new ObjectMapper()
                    .writerWithDefaultPrettyPrinter()
                    .writeValueAsString(impactedModules);
            var testPlan = promptAnalysisService.getTestPlan(impactJson, prompt);
            var testPlans = List.of(new NgxGraphResponse.NgxTestPlan
                    ("Test Plan", testPlan));
            var impactedModulesWithTestPlan = new NgxGraphResponse(
                    response.getNodes(),
                    response.getLinks(),
                    testPlans
            );
            return ResponseEntity.ok( impactedModulesWithTestPlan);
        }
        return ResponseEntity.ok(impactedModules);
    }

    @PostMapping("/testPlan")
    public ResponseEntity<String> getTestPlan(@RequestBody String prompt) {
        logger.info("Received request to generate test plan for prompt: {}", prompt);
        String testPlan = promptAnalysisService.getTestPlan(prompt);
        return ResponseEntity.ok(testPlan);
    }
}
