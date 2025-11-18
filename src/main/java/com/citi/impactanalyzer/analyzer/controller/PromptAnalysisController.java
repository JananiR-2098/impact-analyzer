package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.service.GraphService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/promptAnalyzer")
public class PromptAnalysisController {

    private final PromptAnalysisService promptAnalysisService;
    private final GraphService graphService;

    public PromptAnalysisController(
            PromptAnalysisService promptAnalysisService,
            GraphService graphService
    ) {
        this.promptAnalysisService = promptAnalysisService;
        this.graphService = graphService;
    }

    @PostMapping("/getImpactedModulesBasedOnPrompt")
    public ResponseEntity<?> getImpactedModulesBasedOnPrompt(@RequestBody String prompt) throws Exception {
        String node = promptAnalysisService.findNodeFromPrompt(prompt);
        return ResponseEntity.ok(graphService.getImpactedModulesNgx(node));
    }

    @PostMapping("/getTestPlanBasedOnPrompt")
    public ResponseEntity<?> geTestPlanBasedOnPrompt(@RequestBody String prompt) throws Exception {
        String testPlan = promptAnalysisService.getTestPlan(prompt);
        return ResponseEntity.ok(testPlan);
    }
}