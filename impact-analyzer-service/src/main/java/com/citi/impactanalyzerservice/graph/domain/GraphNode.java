package com.citi.impactanalyzerservice.graph.domain;

import java.util.Collections;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class GraphNode {

    private final String name;

    private final Set<GraphNode> dependencies;

    public GraphNode(String name) {
        this.name = name;
        this.dependencies = Collections.newSetFromMap(new ConcurrentHashMap<>());
    }

    public String getName() {
        return name;
    }

    public Set<GraphNode> getDependencies() {
        return Collections.unmodifiableSet(dependencies);
    }

    public void addDependency(GraphNode node) {
        dependencies.add(node);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GraphNode graphNode = (GraphNode) o;
        return Objects.equals(name, graphNode.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "GraphNode{" + name + '}';
    }

}
