package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.service.GraphService;
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
        List<String> nodes = promptAnalysisService.findNodeFromPrompt(prompt);
        Object impactedModules = graphService.getImpactedModulesNgx(nodes);
        // If the result is a single NgxGraphResponse, attach test plan
        if (impactedModules instanceof NgxGraphResponse response) {
            var impactJson = new ObjectMapper()
                    .writerWithDefaultPrettyPrinter()
                    .writeValueAsString(impactedModules);
            String testPlan;
            try {
                testPlan = promptAnalysisService.getTestPlan(impactJson, prompt);
            } catch (IOException e) {
                testPlan = "Error generating test plan: " + e.getMessage();
            }
            var testPlans = List.of(new NgxGraphResponse.NgxTestPlan("Test Plan", testPlan));
            var impactedModulesWithTestPlan = new NgxGraphResponse(
                    response.getNodes(),
                    response.getLinks(),
                    testPlans
            );
            return ResponseEntity.ok(impactedModulesWithTestPlan);
        }
        // If the result is NgxGraphMultiResponse, attach test plan to each graph
        if (impactedModules instanceof com.citi.impactanalyzer.graph.domain.NgxGraphMultiResponse multiResponse) {
            var mapper = new ObjectMapper().writerWithDefaultPrettyPrinter();
            var graphsWithTestPlan = multiResponse.getGraphs().stream().map(graph -> {
                String testPlan;
                try {
                    var impactJson = mapper.writeValueAsString(graph);
                    testPlan = promptAnalysisService.getTestPlan(impactJson, prompt);
                } catch (IOException e) {
                    testPlan = "Error generating test plan: " + e.getMessage();
                }
                var testPlans = List.of(new NgxGraphResponse.NgxTestPlan("Test Plan", testPlan));
                return new NgxGraphResponse(graph.getNodes(), graph.getLinks(), testPlans);
            }).toList();
            return ResponseEntity.ok(new com.citi.impactanalyzer.graph.domain.NgxGraphMultiResponse(graphsWithTestPlan));
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
