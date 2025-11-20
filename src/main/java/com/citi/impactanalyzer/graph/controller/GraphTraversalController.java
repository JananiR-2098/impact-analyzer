package com.citi.impactanalyzer.graph.controller;

import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import com.citi.impactanalyzer.graph.domain.EdgeMetadata;
import com.citi.impactanalyzer.graph.domain.GraphNode;
import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.service.GraphService;
import com.citi.impactanalyzer.vectorstore.InMemoryVectorStore;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/promptAnalyzer")
public class GraphTraversalController {

    private final GraphService graphService;
    private final InMemoryVectorStore vectorStore;

    public GraphTraversalController(
            GraphService graphService,
            InMemoryVectorStore vectorStore
    ) {
        this.graphService = graphService;
        this.vectorStore = vectorStore;
    }

    @GetMapping("/vector/ids")
    public ResponseEntity<?> getVectorIds() {
        return ResponseEntity.ok(vectorStore.getAllIds());
    }

    @GetMapping("/vector/count")
    public ResponseEntity<?> getVectorCount() {
        return ResponseEntity.ok(Map.of("count", vectorStore.size()));
    }

    @GetMapping("/vector/{id}")
    public ResponseEntity<?> getVector(@PathVariable String id) {
        float[] vector = vectorStore.get(id);
        if (vector == null) {
            return ResponseEntity.status(404).body(Map.of(
                    "id", id,
                    "exists", false,
                    "error", "No vector found for this id"
            ));
        }
        return ResponseEntity.ok(Map.of(
                "id", id,
                "vector", vector,
                "exists", true
        ));
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
            buildNgxLinks(start, visited, links, graph);
        }

        List<NgxGraphResponse.NgxNode> nodes = visited.stream()
                .map(NgxGraphResponse.NgxNode::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new NgxGraphResponse(nodes, links));
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
