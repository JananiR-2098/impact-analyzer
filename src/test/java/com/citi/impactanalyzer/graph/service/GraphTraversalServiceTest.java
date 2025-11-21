package com.citi.impactanalyzer.graph.service;

import com.citi.impactanalyzer.graph.domain.GraphNode;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.LinkedHashSet;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class GraphTraversalServiceTest {

    @InjectMocks
    GraphTraversalService traversalService;

    private GraphNode createMockNode(String name, Collection<GraphNode> dependencies) {
        GraphNode node = mock(GraphNode.class);
        when(node.getName()).thenReturn(name);
        // ensure we return a Set because GraphNode.getDependencies() has Set return type
        if (dependencies == null) {
            when(node.getDependencies()).thenReturn(null);
        } else if (dependencies instanceof Set) {
            when(node.getDependencies()).thenReturn((Set<GraphNode>) dependencies);
        } else {
            // preserve insertion order when converting list -> LinkedHashSet
            when(node.getDependencies()).thenReturn(new LinkedHashSet<>(dependencies));
        }
        return node;
    }

    @Test
    void testTraverseDFS_SingleNode_NoDependencies() {
        String nodeName = "A";
        GraphNode nodeA = createMockNode(nodeName, Collections.emptySet());

        Set<String> result = traversalService.traverseDFS(nodeA);

        assertEquals(1, result.size());
        assertTrue(result.contains(nodeName));
        assertEquals(List.of("A"), result.stream().toList());
    }

    @Test
    void testTraverseDFS_LinearChain() {
        GraphNode nodeC = createMockNode("C", Collections.emptySet());
        GraphNode nodeB = createMockNode("B", new LinkedHashSet<>(List.of(nodeC)));
        GraphNode nodeA = createMockNode("A", new LinkedHashSet<>(List.of(nodeB)));

        Set<String> result = traversalService.traverseDFS(nodeA);

        assertEquals(3, result.size());
        assertEquals(List.of("A", "B", "C"), result.stream().toList());
    }

    @Test
    void testTraverseDFS_WithFork() {
        GraphNode nodeC = createMockNode("C", Collections.emptySet());
        GraphNode nodeB = createMockNode("B", Collections.emptySet());
        GraphNode nodeA = createMockNode("A", new LinkedHashSet<>(List.of(nodeB, nodeC)));

        Set<String> result = traversalService.traverseDFS(nodeA);

        assertEquals(3, result.size());
        assertEquals(List.of("A", "B", "C"), result.stream().toList());
    }

    @Test
    void testTraverseDFS_WithCycle() {
        GraphNode nodeA = mock(GraphNode.class);
        GraphNode nodeB = createMockNode("B", new LinkedHashSet<GraphNode>(List.of(nodeA)));

        when(nodeA.getName()).thenReturn("A");
        when(nodeA.getDependencies()).thenReturn(new LinkedHashSet<>(List.of(nodeB)));

        Set<String> result = traversalService.traverseDFS(nodeA);

        assertEquals(2, result.size());
        assertEquals(List.of("A", "B"), result.stream().toList());
    }

    @Test
    void testTraverseDFS_GraphWithDiamondDependency() {
        GraphNode nodeD = createMockNode("D", Collections.emptySet());
        GraphNode nodeC = createMockNode("C", new LinkedHashSet<>(List.of(nodeD)));
        GraphNode nodeB = createMockNode("B", new LinkedHashSet<>(List.of(nodeD)));
        GraphNode nodeA = createMockNode("A", new LinkedHashSet<>(List.of(nodeB, nodeC)));

        Set<String> result = traversalService.traverseDFS(nodeA);

        assertEquals(4, result.size());
        assertEquals(List.of("A", "B", "D", "C"), result.stream().toList());
    }

    @Test
    void testTraverseDFS_StartNodeIsNull() {
        Set<String> result = traversalService.traverseDFS(null);

        assertTrue(result.isEmpty());
    }

    @Test
    void testTraverseDFS_NodeDependenciesAreNull() {
        GraphNode nodeB = mock(GraphNode.class);
        when(nodeB.getName()).thenReturn("B");
        when(nodeB.getDependencies()).thenReturn(null);

        GraphNode nodeA = createMockNode("A", new LinkedHashSet<>(List.of(nodeB)));

        Set<String> result = traversalService.traverseDFS(nodeA);

        assertEquals(2, result.size());
        assertEquals(List.of("A", "B"), result.stream().toList());
    }
}
