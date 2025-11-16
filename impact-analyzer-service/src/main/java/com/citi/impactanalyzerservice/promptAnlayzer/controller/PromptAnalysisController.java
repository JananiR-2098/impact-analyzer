package com.citi.impactanalyzerservice.promptAnlayzer.controller;

import com.citi.impactanalyzerservice.graph.domain.DependencyGraph;
import com.citi.impactanalyzerservice.graph.domain.EdgeMetadata;
import com.citi.impactanalyzerservice.graph.domain.GraphNode;
import com.citi.impactanalyzerservice.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzerservice.graph.service.GraphService;
import com.citi.impactanalyzerservice.promptAnlayzer.service.PromptAnalysisService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

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
        System.out.println("node" + node);
        if (node == null || node.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "node query parameter is required"));
        }

        DependencyGraph graph = graphService.getGraph();
        Set<GraphNode> startNodes = graph.findNodes(node);
        if (startNodes.isEmpty())
            return ResponseEntity.status(404).body(Map.of("error", "No matching node found for: " + node));

        Set<String> visited = new HashSet<>();
        List<NgxGraphResponse.NgxLink> links = new ArrayList<>();
        for (GraphNode start : startNodes) {
            buildNgxLinks(start, visited, links, graph);
        }

        List<NgxGraphResponse.NgxNode> nodes = visited.stream()
                .map(NgxGraphResponse.NgxNode::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new NgxGraphResponse(nodes, links));
    }

    @PostMapping("/getTestPlanBasedOnPrompt")
    public ResponseEntity<?> geTestPlanBasedOnPrompt(@RequestBody String prompt) throws Exception {
        String testPlan = promptAnalysisService.getTestPlan(prompt);
        return ResponseEntity.ok(testPlan);
    }

    private void buildNgxLinks(GraphNode node, Set<String> visited, List<NgxGraphResponse.NgxLink> links, DependencyGraph graph) {
        if (node == null || visited.contains(node.getName())) return;
        visited.add(node.getName());
        for (GraphNode dep : node.getDependencies()) {
            EdgeMetadata meta = graph.getEdgeMetadata(node.getName(), dep.getName());
            boolean critical = meta != null && meta.isCritical();
            links.add(new NgxGraphResponse.NgxLink(node.getName(), dep.getName(), "depends", critical));
            buildNgxLinks(dep, visited, links, graph);
        }
    }
}
