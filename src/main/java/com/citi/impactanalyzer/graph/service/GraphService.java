package com.citi.impactanalyzer.graph.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import com.citi.impactanalyzer.graph.domain.GraphNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.Iterator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class GraphService {

    private static final Logger logger = LoggerFactory.getLogger(GraphService.class);

    private final DependencyGraph graph;

    @Value("${graph.json.path}")
    private String graphJsonPath;

    // Use constructor injection so the shared DependencyGraph bean (if present) is used.
    public GraphService(DependencyGraph graph) {
        this.graph = graph;
    }

    public DependencyGraph getGraph() {
        return graph;
    }

    @PostConstruct
    public void init() throws Exception {
        logger.info("GraphService init...");

        if (graphJsonPath == null || graphJsonPath.isBlank()) {
            logger.warn("graph.json.path is not configured; skipping graph build");
            return;
        }

        File jsonFile = new File(graphJsonPath);
        if (!jsonFile.exists()) {
            throw new RuntimeException("Graph JSON file not found at: " + graphJsonPath);
        }

        buildGraphFromJson(jsonFile);

        for (GraphNode node : graph.getAllNodes()) {
            logger.debug("Loaded graph node: {}", node.getName());
        }
        logger.info("Finished building graph; nodeCount={}", graph.getAllNodes().size());
    }

    public void buildGraphFromJson(File jsonFile) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(jsonFile);

        if (root == null) {
            logger.warn("Parsed JSON root is null");
            return;
        }

        if (!root.isArray()) {
            logger.warn("Expected JSON root to be an array of nodes but it is: {}", root.getNodeType());
            return;
        }

        String[] fields = {"calls", "reads", "writes", "extends", "implements", "uses_type"};

        for (JsonNode node : root) {
            if (node == null || !node.has("source")) {
                logger.debug("Skipping JSON node without 'source' field: {}", node);
                continue;
            }

            String source = node.get("source").asText();
            if (source == null || source.isBlank()) {
                logger.debug("Skipping JSON node with empty 'source': {}", node);
                continue;
            }

            // Fields to create dependencies
            for (String field : fields) {
                // require the field to exist and be an array
                if (!node.has(field) || node.get(field) == null || !node.get(field).isArray()) continue;

                Iterator<JsonNode> it = node.get(field).elements();
                while (it.hasNext()) {
                    JsonNode t = it.next();
                    if (t == null || t.isNull()) continue;
                    String target = t.asText();
                    if (target == null || target.isBlank()) continue;
                    graph.addDependency(source, target);
                }
            }
        }
    }
}
