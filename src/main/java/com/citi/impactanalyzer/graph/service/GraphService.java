package com.citi.impactanalyzer.graph.service;

import com.citi.impactanalyzer.graph.domain.NgxGraphResponse;
import com.citi.impactanalyzer.graph.domain.NgxGraphMultiResponse;
import com.citi.impactanalyzer.parser.service.RepositoryCloneService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import com.citi.impactanalyzer.graph.domain.EdgeMetadata;
import com.citi.impactanalyzer.graph.domain.GraphNode;
import com.citi.impactanalyzer.parser.service.DependencyAggregationService;
import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class GraphService {

    private static final Logger logger = LoggerFactory.getLogger(GraphService.class);

    private final DependencyGraph graph;

    private String repoName;

    @Value("${graph.json.path}")
    private String graphJsonPath;

    private final DependencyAggregationService aggregationService;
    private final DependencyAnalyzerProperties analyzerProperties;
    RepositoryCloneService repositoryCloneService;

    public GraphService(
            DependencyGraph graph,
            DependencyAggregationService aggregationService,
            DependencyAnalyzerProperties analyzerProperties, RepositoryCloneService repositoryCloneService
    ) {
        this.graph = graph;
        this.aggregationService = aggregationService;
        this.analyzerProperties = analyzerProperties;
        this.repositoryCloneService=repositoryCloneService;
    }

    public DependencyGraph getGraph() {
        return graph;
    }

    @PostConstruct
    public void init() throws Exception {
        logger.info("GraphService init...");
        logger.info("Cloning repo...");
        repositoryCloneService.cloneRepo();
        logger.info("Clone completed...");

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
        JsonNode dependencies = root.get("dependencies");
        repoName = root.get("repo").asText();

        buildGraphFromJson(dependencies);
        computeEdgeCriticality();

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

        logger.info("Processing {} dependency entries from JSON", root.size());
        Set<String> uniqueSources = new HashSet<>();
        int totalDependencies = 0;

        for (JsonNode node : root) {
            if (node == null) continue;

            if (node.has("source") && node.has("relation") && node.has("target")) {
                String source = node.get("source").asText();
                String relation = node.get("relation").asText();
                String target = node.get("target").asText();

                if (source != null && !source.isBlank() && target != null && !target.isBlank()) {
                    uniqueSources.add(source);
                    graph.addDependency(source, target);
                    totalDependencies++;

                }
                continue;
            }

            if (node.has("source")) {
                String source = node.get("source").asText();
                if (source == null || source.isBlank()) {
                    logger.debug("Skipping JSON node with empty 'source'");
                    continue;
                }

                uniqueSources.add(source);
                String[] fields = {"CALLS", "READS", "WRITES", "IMPLEMENTS", "EXTENDS", "USES_TYPE", "ANNOTATED_WITH", "THROWS", "CALLS_CONSTRUCTOR", "IMPORTS", "DEPENDS_ON_PACKAGE"};

                for (String field : fields) {
                    if (!node.has(field) || node.get(field) == null || !node.get(field).isArray())
                        continue;

                    for (JsonNode t : node.get(field)) {
                        if (t == null || t.isNull()) continue;
                        String target = t.asText();
                        if (target == null || target.isBlank()) continue;

                        graph.addDependency(source, target);
                        totalDependencies++;
                        logger.debug("Added dependency: {} --[{}]--> {}", source, field, target);
                    }
                }
            }
        }

        logger.info("Finished building graph from JSON. Unique sources: {}, Total dependencies added: {}", uniqueSources.size(), totalDependencies);
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

    public Object getImpactedModulesNgx(List<String> nodes, String testPlan) {
        if (nodes == null || nodes.isEmpty() || nodes.stream().allMatch(s -> s == null || s.isBlank())) {
            return ResponseEntity.badRequest().body(Map.of("error", "nodes parameter is required"));
        }

        DependencyGraph graph = getGraph();
        Set<String> processed = new HashSet<>();
        List<NgxGraphResponse> graphs = new ArrayList<>();
        for (String node : nodes) {
            if (node != null && !node.isBlank()) {
                Set<String> visited = new HashSet<>();
                List<NgxGraphResponse.NgxLink> links = new ArrayList<>();
                Set<GraphNode> startNodes = graph.findNodes(node);
                for (GraphNode start : startNodes) {
                    buildNgxLinks(start, visited, links, graph);
                }
                Set<String> newNodes = new HashSet<>(visited);
                newNodes.removeAll(processed);
                if (!newNodes.isEmpty()) {
                    List<NgxGraphResponse.NgxNode> resultNodes = newNodes.stream()
                            .map(name -> new NgxGraphResponse.NgxNode(name, getSimpleClassName(name), isNodeCritical(node, name)))
                            .toList();
                    graphs.add(new NgxGraphResponse(resultNodes, links));
                    processed.addAll(newNodes);
                }
            }
        }
        if (graphs.isEmpty()) {
            return ResponseEntity.status(404).body(Map.of("error", "No matching nodes found for: " + nodes));
        }
        logger.info("graphs.size(): {}", graphs.size());
        return new NgxGraphMultiResponse(graphs, new NgxGraphMultiResponse.NgxTestPlan("Test Plan", testPlan),
                new NgxGraphMultiResponse.NgxRepo("Repo", repoName ));
    }

    private boolean isNodeCritical(String impactedNode, String nodeName) {
        if (impactedNode == null || nodeName == null) return false;
        return nodeName.contains(impactedNode.toLowerCase());
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

    private String getSimpleClassName(String fullName) {
        if (fullName == null) return null;
        int lastDot = fullName.lastIndexOf('.');
        return lastDot >= 0 ? fullName.substring(lastDot + 1) : fullName;
    }
}
