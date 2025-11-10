package com.citi.impactanalyzer.graph.controller;

import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import com.citi.impactanalyzer.graph.domain.GraphNode;
import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.service.GraphService;
import com.citi.impactanalyzer.graph.service.GraphTraversalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/graph")
public class GraphTraversalController {

    private final GraphService graphService;
    private final GraphTraversalService traversalService;

    public GraphTraversalController(GraphService graphService, GraphTraversalService traversalService) {
        this.graphService = graphService;
        this.traversalService = traversalService;
    }

    @GetMapping("/impactedModules")
    public ResponseEntity<?> getImpactedModulesNgx(@RequestParam String node) {
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
            buildNgxLinks(start, visited, links);
        }

        List<NgxGraphResponse.NgxNode> nodes = visited.stream()
                .map(NgxGraphResponse.NgxNode::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new NgxGraphResponse(nodes, links));
    }

    private void buildNgxLinks(GraphNode node, Set<String> visited, List<NgxGraphResponse.NgxLink> links) {
        if (node == null || visited.contains(node.getName())) return;
        visited.add(node.getName());
        for (GraphNode dep : node.getDependencies()) {
            links.add(new NgxGraphResponse.NgxLink(node.getName(), dep.getName()));
            buildNgxLinks(dep, visited, links);
        }
    }
}
