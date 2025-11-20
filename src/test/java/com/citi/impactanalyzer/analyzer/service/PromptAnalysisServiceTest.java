package com.citi.impactanalyzer.analyzer.service;

import dev.langchain4j.model.embedding.EmbeddingModel;
import dev.langchain4j.store.embedding.EmbeddingStore;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import java.io.IOException;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class PromptAnalysisServiceTest {

    private PromptAnalysisService service;
    private Assistant mockAssistant;
    private EmbeddingStore<?> mockEmbeddingStore;

    String testSessionId = "test";

    @BeforeEach
    void setUp() {
        service = new PromptAnalysisService();

        ReflectionTestUtils.setField(service, "graphJsonPath", "src/test/resources/test-graph.json");
        ReflectionTestUtils.setField(service, "projectId", "test-project");
        ReflectionTestUtils.setField(service, "location", "us-central1");
        ReflectionTestUtils.setField(service, "modelName", "gemini-test-model");

        mockAssistant = mock(Assistant.class);
        EmbeddingModel mockEmbeddingModel = mock(EmbeddingModel.class);
        @SuppressWarnings("unchecked")
        EmbeddingStore<?> tmpStore = mock(EmbeddingStore.class);
        mockEmbeddingStore = tmpStore;

        ReflectionTestUtils.setField(service, "assistant", mockAssistant);
        ReflectionTestUtils.setField(service, "embeddingModel", mockEmbeddingModel);
        ReflectionTestUtils.setField(service, "embeddingStore", mockEmbeddingStore);
    }

    @Test
    void testFindNodeFromPrompt_returnsAssistantResponse() {
        String prompt = "Find impacted class for Adding Address functionality in Owner";
        when(mockAssistant.chat(anyString(), anyString())).thenReturn("Owner");
        java.util.List<String> result = service.findNodeFromPrompt(testSessionId, prompt);
        assertEquals(java.util.List.of("Owner"), result);
        verify(mockAssistant, times(1)).chat(anyString(), anyString());
    }

    @Test
    void testFindNodeFromPrompt_returnsMultipleNodes() {
        String prompt = "Find impacted classes for Adding Address functionality in Owner";
        when(mockAssistant.chat(anyString(), anyString())).thenReturn("Owner, Address");
        java.util.List<String> result = service.findNodeFromPrompt(testSessionId, prompt);
        assertEquals(java.util.List.of("Owner", "Address"), result);
        verify(mockAssistant, times(1)).chat(anyString(), anyString());
    }

    @Test
    void testChatWithAssistant_staticMethod() {
        when(mockAssistant.chat(anyString(), anyString())).thenReturn("Owner");
        java.util.List<String> result = Collections.singletonList(service.chatWithAssistant(testSessionId, "Customer prompt"));
        assertEquals(java.util.List.of("Owner"), result);
        verify(mockAssistant, times(1)).chat(anyString(), anyString());
    }

    @Test
    void testChatWithAssistant_staticMethodMultipleNodes() {
        when(mockAssistant.chat(anyString(), anyString())).thenReturn("Owner, Address");
        String result = service.chatWithAssistant(testSessionId, "Customer prompt");
        assertEquals("Owner, Address", result);
        verify(mockAssistant, times(1)).chat(anyString(), anyString());
    }

    @Test
    void testLoadEmbeddingStore_handlesMissingFile() throws IOException {
        ReflectionTestUtils.setField(service, "graphJsonPath", "nonexistent.json");
        service.init();
        verifyNoInteractions(mockEmbeddingStore);
    }

    @Test
    void testGetTestPlan_returnsAssistantResponse() {
        when(mockAssistant.chat(anyString(), anyString())).thenReturn("Generated Test Plan");
        String result = service.getTestPlan(testSessionId, "Adding Address functionality");
        assertEquals("Generated Test Plan", result);
        verify(mockAssistant, times(1)).chat(anyString(), anyString());
    }

    @Test
    void getTestPlanWithImpactedFileJsonReturnsGeneratedTestPlan() {
        when(mockAssistant.chat(anyString(), anyString())).thenReturn("Generated Test Plan");
        var result = service.getTestPlan("Adding Address functionality", "{\"nodes\":[]}");
        assertEquals("Generated Test Plan", result);
        verify(mockAssistant, times(1)).chat(anyString(), anyString());
    }

}