package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.service.GraphService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> getImpactedModules(@RequestParam String sessionId, @RequestBody String prompt) {
        logger.info("Received request to analyze impacted modules for prompt: {}", prompt);
        List<String> nodes = promptAnalysisService.findNodeFromPrompt(sessionId, prompt);
        String testPlan = promptAnalysisService.getTestPlan(sessionId, prompt);
        Object impactedModules = graphService.getImpactedModulesNgx(nodes, testPlan);
        return ResponseEntity.ok(impactedModules);
    }

    @PostMapping("/testPlan")
    public ResponseEntity<String> getTestPlan(@RequestParam String sessionId, @RequestBody String prompt) {
        String testPlan = promptAnalysisService.getTestPlan(sessionId, prompt);
        return ResponseEntity.ok(testPlan);
    }
}
