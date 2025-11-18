package com.citi.impactanalyzer.graph.service;

import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import com.citi.impactanalyzer.graph.domain.EdgeMetadata;
import com.citi.impactanalyzer.graph.domain.GraphNode;
import com.citi.impactanalyzer.parser.service.DependencyAggregationService;
import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;

import com.citi.impactanalyzer.vectorstore.JsonVectorizer;
import com.citi.impactanalyzer.vectorstore.InMemoryVectorStore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.*;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class GraphService {

    private static final Logger logger = LoggerFactory.getLogger(GraphService.class);

    private final DependencyGraph graph;

    @Value("${graph.json.path}")
    private String graphJsonPath;

    private final DependencyAggregationService aggregationService;
    private final DependencyAnalyzerProperties analyzerProperties;

    @Autowired
    private JsonVectorizer jsonVectorizer;

    @Autowired
    private InMemoryVectorStore vectorStore;

    public GraphService(
            DependencyGraph graph,
            DependencyAggregationService aggregationService,
            DependencyAnalyzerProperties analyzerProperties
    ) {
        this.graph = graph;
        this.aggregationService = aggregationService;
        this.analyzerProperties = analyzerProperties;
    }

    public DependencyGraph getGraph() {
        return graph;
    }

    @PostConstruct
    public void init() throws Exception {
        logger.info("GraphService init...");

        // Trigger dependency aggregation from here if enabled in properties
        if (analyzerProperties.isDependencyAggregationEnabled()) {
            logger.info("Dependency aggregation is enabled - invoking aggregation from GraphService");
            try {
                aggregationService.generateDependencyGraph();
            } catch (Exception e) {
                logger.error("Dependency aggregation failed when invoked from GraphService", e);
            }
        } else {
            logger.info("Dependency aggregation disabled via properties; skipping aggregation invocation from GraphService");
        }

        if (graphJsonPath == null || graphJsonPath.isBlank()) {
            logger.warn("graph.json.path is not configured; skipping graph build");
            return;
        }

        File jsonFile = new File(graphJsonPath);
        if (!jsonFile.exists()) {
            logger.warn("Graph JSON file not found at: {} - will skip building graph", graphJsonPath);
            return;
        }

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(jsonFile);

        buildGraphFromJson(root);
        computeEdgeCriticality();
        vectorizeGraphNodes(root);

        for (GraphNode node : graph.getAllNodes()) {
            logger.debug("Loaded graph node: {}", node.getName());
        }
        logger.info("Finished building graph; nodeCount={}", graph.getAllNodes().size());
    }

    public void buildGraphFromJson(JsonNode root) {
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

            for (String field : fields) {
                if (!node.has(field) || node.get(field) == null || !node.get(field).isArray())
                    continue;

                for (JsonNode t : node.get(field)) {
                    if (t == null || t.isNull()) continue;
                    String target = t.asText();
                    if (target == null || target.isBlank()) continue;

                    graph.addDependency(source, target);
                }
            }
        }
    }

    public void vectorizeGraphNodes(JsonNode root) {
        logger.info("Starting vectorization of graph nodes...");

        if (root == null || !root.isArray()) {
            logger.warn("Cannot vectorize: root JSON is not an array");
            return;
        }

        int count = 0;
        for (JsonNode node : root) {
            if (!node.has("source"))
                continue;

            String id = node.get("source").asText();
            if (id == null || id.isBlank())
                continue;

            try {
                float[] vector = jsonVectorizer.vectorize(node);
                vectorStore.save(id, vector);

                logger.debug("Vector stored for {}", id);
                count++;

            } catch (Exception e) {
                logger.error("Vectorization failed for node: {}", id, e);
            }
        }

        logger.info("Vectorization complete. Total vectors stored: {}", count);
    }

    private void computeEdgeCriticality() {
        int inDegreeThreshold = analyzerProperties.getGraphCriticalInDegreeThreshold();
        boolean markCrossPackage = analyzerProperties.isGraphMarkCrossPackageCritical();

        Map<String, Integer> inDegree = new HashMap<>();
        for (GraphNode n : graph.getAllNodes()) {
            for (GraphNode dep : n.getDependencies()) {
                inDegree.put(dep.getName(), inDegree.getOrDefault(dep.getName(), 0) + 1);
            }
        }

        for (GraphNode n : graph.getAllNodes()) {
            String src = n.getName();
            for (GraphNode dep : n.getDependencies()) {
                String tgt = dep.getName();
                EdgeMetadata meta = graph.getEdgeMetadata(src, tgt);
                if (meta == null) continue;

                int deg = inDegree.getOrDefault(tgt, 0);
                if (deg >= inDegreeThreshold) {
                    meta.setCritical(true);
                }

                if (markCrossPackage) {
                    String srcTop = topLevelPackage(src);
                    String tgtTop = topLevelPackage(tgt);
                    if (!srcTop.equals(tgtTop)) {
                        meta.setCritical(true);
                    }
                }
            }
        }

        logger.info("Edge criticality computed. edges={}", graph.edgeCount());
    }

    private String topLevelPackage(String fqName) {
        if (fqName == null) return "";
        int idx = fqName.indexOf('.');
        if (idx < 0) return fqName;
        return fqName.substring(0, idx);
    }

    public Object getImpactedModulesNgx(@RequestParam String node) {
        if (node == null || node.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "node query parameter is required"));
        }

        DependencyGraph graph = getGraph();
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
        return new NgxGraphResponse(nodes, links, null);
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
