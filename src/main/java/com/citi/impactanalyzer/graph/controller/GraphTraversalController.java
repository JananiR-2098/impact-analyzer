package com.citi.impactanalyzer.graph.controller;

import com.citi.impactanalyzer.graph.service.GraphService;
import com.citi.impactanalyzer.vectorstore.InMemoryVectorStore;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/graph")
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
    public ResponseEntity<?> getImpactedModulesNgx(@RequestParam List<String> nodes) {
        return ResponseEntity.ok(graphService.getImpactedModulesNgx(nodes, null));
    }
}
