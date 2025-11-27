package com.citi.impactanalyzer.analyzer.controller;

import com.citi.impactanalyzer.analyzer.service.PromptAnalysisService;
import com.citi.impactanalyzer.graph.service.GraphService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
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


    /**
     * Generates an impact analysis report (dependency graph, test plan, and repo name)
     * based on the user's prompt and returns the result as a raw JSON string.
     *
     * @param sessionId The current chat session ID for context memory.
     * @param prompt The user's change request description.
     * @return A ResponseEntity containing the raw JSON string of the analysis report.
     * @throws IOException If there's an issue with I/O during analysis.
     */
    @PostMapping("/impactedModules")
    public ResponseEntity<String> getImpactedDependenciesJson(@RequestParam String sessionId, @RequestBody String prompt) throws IOException {
        logger.info("Received request to get impacted dependency JSON for prompt: {} sessionId: {}", prompt, sessionId);

        // Start timing the execution
        long startTimeNano = System.nanoTime();

        // Generate the core analysis report (JSON string containing graphs and test plan)
        String impactedJson = promptAnalysisService.generateImpactAnalysisReport(sessionId, prompt);

        // Calculate the elapsed time in seconds for logging purposes
        long endTimeNano = System.nanoTime();
        double durationSeconds = (endTimeNano - startTimeNano) / 1_000_000_000.0;

        logger.info("Impact analysis report generation completed in {} seconds.", durationSeconds);

        // Directly return the generated JSON string in the response body
        // The Content-Type will automatically be application/json since it's a String response from a @RestController
        return ResponseEntity.ok(impactedJson);
    }
}