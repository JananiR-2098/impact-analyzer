package com.citi.impactanalyzerservice.graph.domain;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class DependencyGraph {

    private final Map<String, GraphNode> nodes;
    private final Map<String, Map<String, EdgeMetadata>> edgeMetadata = new ConcurrentHashMap<>();

    public DependencyGraph() {
        this.nodes = new ConcurrentHashMap<>();
    }

    public GraphNode getNode(String nodeName) {
        return nodes.get(nodeName);
    }

    public Set<GraphNode> findNodes(String partialName) {
        if (partialName == null) return Collections.emptySet();
        String lower = partialName.toLowerCase();
        return nodes.entrySet().stream()
                .filter(e -> e.getKey().toLowerCase().contains(lower))
                .map(Map.Entry::getValue)
                .collect(Collectors.toSet());
    }

    public void addDependency(String source, String target) {
        Objects.requireNonNull(source, "source cannot be null");
        Objects.requireNonNull(target, "target cannot be null");
        nodes.computeIfAbsent(source, GraphNode::new)
                .addDependency(nodes.computeIfAbsent(target, GraphNode::new));
        edgeMetadata.computeIfAbsent(source, s -> new ConcurrentHashMap<>()).computeIfAbsent(target, t -> new EdgeMetadata());
    }

    public Collection<GraphNode> getAllNodes() {
        return nodes.values();
    }

    public int nodeCount() {
        return nodes.size();
    }

    public long edgeCount() {
        return nodes.values().stream().mapToLong(n -> n.getDependencies().size()).sum();
    }

    public Map<String, Set<String>> snapshot() {
        Map<String, Set<String>> snap = new HashMap<>();
        for (Map.Entry<String, GraphNode> e : nodes.entrySet()) {
            snap.put(e.getKey(), Collections.unmodifiableSet(
                    e.getValue().getDependencies().stream().map(GraphNode::getName).collect(Collectors.toSet())
            ));
        }
        return Collections.unmodifiableMap(snap);
    }

    public EdgeMetadata getEdgeMetadata(String source, String target) {
        Map<String, EdgeMetadata> m = edgeMetadata.get(source);
        if (m == null) return null;
        return m.get(target);
    }

    public Map<String, Map<String, EdgeMetadata>> getAllEdgeMetadata() {
        return Collections.unmodifiableMap(edgeMetadata);
    }
}
