package com.citi.impactanalyzer.graph.service;

import com.citi.impactanalyzer.graph.domain.GraphNode;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class GraphTraversalServiceTest {

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Returns empty set when starting node is null in DFS traversal")
    void returnsEmptySetWhenStartingNodeIsNullInDFSTraversal() {
        GraphTraversalService service = new GraphTraversalService();
        Set<String> result = service.traverseDFS(null);
        assertTrue(result.isEmpty());
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Returns visited nodes in correct order for DFS traversal")
    void returnsVisitedNodesInCorrectOrderForDFSTraversal() {
        GraphNode nodeA = new GraphNode("A");
        GraphNode nodeB = new GraphNode("B");
        GraphNode nodeC = new GraphNode("C");
        nodeA.addDependency(nodeB);
        nodeB.addDependency(nodeC);

        GraphTraversalService service = new GraphTraversalService();
        Set<String> result = service.traverseDFS(nodeA);

        assertEquals(Set.of("A", "B", "C"), result);
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Returns empty set when starting node is null in BFS traversal")
    void returnsEmptySetWhenStartingNodeIsNullInBFSTraversal() {
        GraphTraversalService service = new GraphTraversalService();
        Set<String> result = service.traverseBFS(null);
        assertTrue(result.isEmpty());
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Returns visited nodes in correct order for BFS traversal")
    void returnsVisitedNodesInCorrectOrderForBFSTraversal() {
        GraphNode nodeA = new GraphNode("A");
        GraphNode nodeB = new GraphNode("B");
        GraphNode nodeC = new GraphNode("C");
        nodeA.addDependency(nodeB);
        nodeB.addDependency(nodeC);

        GraphTraversalService service = new GraphTraversalService();
        Set<String> result = service.traverseBFS(nodeA);

        assertEquals(Set.of("A", "B", "C"), result);
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Handles cyclic dependencies gracefully in DFS traversal")
    void handlesCyclicDependenciesGracefullyInDFSTraversal() {
        GraphNode nodeA = new GraphNode("A");
        GraphNode nodeB = new GraphNode("B");
        nodeA.addDependency(nodeB);
        nodeB.addDependency(nodeA);

        GraphTraversalService service = new GraphTraversalService();
        Set<String> result = service.traverseDFS(nodeA);

        assertEquals(Set.of("A", "B"), result);
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Handles cyclic dependencies gracefully in BFS traversal")
    void handlesCyclicDependenciesGracefullyInBFSTraversal() {
        GraphNode nodeA = new GraphNode("A");
        GraphNode nodeB = new GraphNode("B");
        nodeA.addDependency(nodeB);
        nodeB.addDependency(nodeA);

        GraphTraversalService service = new GraphTraversalService();
        Set<String> result = service.traverseBFS(nodeA);

        assertEquals(Set.of("A", "B"), result);
    }
}