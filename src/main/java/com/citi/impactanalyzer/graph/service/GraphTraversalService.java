package com.citi.impactanalyzer.graph.service;

import com.citi.impactanalyzer.graph.domain.GraphNode;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GraphTraversalService {

    public Set<String> traverseDFS(GraphNode start) {
        Set<String> visited = new LinkedHashSet<>();
        dfsHelper(start, visited);
        return visited;
    }

    private void dfsHelper(GraphNode node, Set<String> visited) {
        if (node == null || visited.contains(node.getName())) return;

        visited.add(node.getName());
        Collection<GraphNode> deps = node.getDependencies();
        if (deps != null) {
            for (GraphNode dep : deps) {
                dfsHelper(dep, visited);
            }
        }
    }

    public Set<String> traverseBFS(GraphNode start) {
        Set<String> visited = new LinkedHashSet<>();
        if (start == null) return visited;

        Queue<GraphNode> queue = new LinkedList<>();
        queue.add(start);

        while (!queue.isEmpty()) {
            GraphNode current = queue.poll();
            if (!visited.contains(current.getName())) {
                visited.add(current.getName());
                if (current.getDependencies() != null) {
                    queue.addAll(current.getDependencies());
                }
            }
        }

        return visited;
    }
}
