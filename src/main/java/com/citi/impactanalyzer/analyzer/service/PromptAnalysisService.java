package com.citi.impactanalyzer.analyzer.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.langchain4j.data.embedding.Embedding;
import dev.langchain4j.data.segment.TextSegment;
import dev.langchain4j.memory.chat.MessageWindowChatMemory;
import dev.langchain4j.model.embedding.EmbeddingModel;
import dev.langchain4j.model.embedding.onnx.allminilml6v2q.AllMiniLmL6V2QuantizedEmbeddingModel;
import dev.langchain4j.model.vertexai.gemini.VertexAiGeminiChatModel;
import dev.langchain4j.rag.DefaultRetrievalAugmentor;
import dev.langchain4j.rag.RetrievalAugmentor;
import dev.langchain4j.rag.content.retriever.ContentRetriever;
import dev.langchain4j.rag.content.retriever.EmbeddingStoreContentRetriever;
import dev.langchain4j.rag.query.transformer.CompressingQueryTransformer;
import dev.langchain4j.rag.query.transformer.QueryTransformer;
import dev.langchain4j.service.AiServices;
import dev.langchain4j.store.embedding.EmbeddingStore;
import dev.langchain4j.store.embedding.inmemory.InMemoryEmbeddingStore;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class PromptAnalysisService {

    private static final Logger logger = LoggerFactory.getLogger(PromptAnalysisService.class);

    private static final int MAX_RESULTS = 2;
    private static final double MIN_SCORE = 0.75;
    private static final int CHAT_MEMORY_SIZE = 100;

    @Value("${graph.json.path}")
    private String graphJsonPath;

    @Value("${spring.ai.vertex.ai.gemini.project-id}")
    private String projectId;

    @Value("${spring.ai.vertex.ai.gemini.location}")
    private String location;

    @Value("${spring.ai.vertex.ai.gemini.chat.options.model}")
    private String modelName;

    private Assistant assistant;

    private final EmbeddingModel embeddingModel = new AllMiniLmL6V2QuantizedEmbeddingModel();
    private final EmbeddingStore<TextSegment> embeddingStore = new InMemoryEmbeddingStore<>();


    @PostConstruct
    public void init() throws IOException {
        logger.info("Initializing PromptAnalysisService...");
        loadEmbeddingStore();
    }

    private void loadEmbeddingStore() throws IOException {
        logger.info("Loading EmbeddingStore from {}", graphJsonPath);

        File jsonFile = new File(graphJsonPath);
        if (!jsonFile.exists()) {
            logger.warn("Graph JSON file not found at: {}. Skipping embedding load.", graphJsonPath);
            return;
        }

        JsonNode root = new ObjectMapper().readTree(jsonFile);
        JsonNode dependencies = root.get("dependencies");

        if (dependencies == null || !dependencies.isArray()) {
            logger.warn("Invalid graph JSON — expected top-level array.");
            return;
        }

        int count = 0;

        for (JsonNode node : dependencies) {
            if (!node.has("source")) continue;

            var id = node.path("source").asText(null);
            if (id == null || id.isBlank()) continue;

            try {
                var text = node.toString();
                TextSegment segment = TextSegment.from(text);
                Embedding embedding = embeddingModel.embed(text).content();
                embeddingStore.add(embedding, segment);
                count++;
            } catch (Exception ex) {
                logger.error("Failed vectorizing node with source={}", id, ex);
            }
        }

        logger.info("Embedded {} nodes into store", count);
    }

    private Assistant createAssistant() {
        if (assistant != null) return assistant;

        logger.info("Creating Assistant...");

        var chatModel = buildChatModel();
        var aug = buildRetrievalAugmentor();

        assistant = AiServices.builder(Assistant.class)
                .chatModel(chatModel)
                .retrievalAugmentor(aug)
                .chatMemoryProvider(id -> MessageWindowChatMemory.withMaxMessages(CHAT_MEMORY_SIZE))
                .build();

        return assistant;
    }

    private VertexAiGeminiChatModel buildChatModel() {
        return VertexAiGeminiChatModel.builder()
                .project(projectId)
                .location(location)
                .modelName(modelName)
                .build();
    }

    private RetrievalAugmentor buildRetrievalAugmentor() {
        QueryTransformer transformer = new CompressingQueryTransformer(buildChatModel());

        ContentRetriever retriever = EmbeddingStoreContentRetriever.builder()
                .embeddingStore(embeddingStore)
                .embeddingModel(embeddingModel)
                .maxResults(MAX_RESULTS)
                .minScore(MIN_SCORE)
                .build();

        return DefaultRetrievalAugmentor.builder()
                .queryTransformer(transformer)
                .contentRetriever(retriever)
                .build();
    }

    public List<String> findNodeFromPrompt(String sessionId, String userPrompt) {
        var prompt = buildImpactAnalysisPrompt(userPrompt);
        var assistantResponse = chatWithAssistant(sessionId, prompt);
        logger.info("User Query: {}", userPrompt);
        logger.info("Assistant Response: {}", assistantResponse);
        return extractClassList(assistantResponse);
    }

    public String getTestPlan(String sessionId, String prompt) {
        var query = "Analyze and provide test plan for: " + prompt;
        return chatWithAssistant(sessionId, query);
    }

    public String getTestPlan(String changeRequest, String sessionId, String impactedFileJson) throws IOException {
        var prompt = buildTestPlanPrompt(changeRequest, impactedFileJson);
        return chatWithAssistant(sessionId, prompt);
    }

    private String buildImpactAnalysisPrompt(String userPrompt) {
        return """
                You are an expert software architect and impact analyst.
                
                You will receive a user query describing a change request. %s
                
                Your task:
                - Analyze the embedding store representing a Java project structure (packages, classes, methods, dependencies, etc.).
                - Identify and return the relevant class names that will be impacted by the change request.
                - DO NOT invent class names.
                - Exclude test classes.
                - Return only the class names present in embedding store also exclude package name as plain text, separated by commas, with no explanation or additional formatting.
                """.formatted(userPrompt);
    }

    private String buildTestPlanPrompt(String changeRequest, String nodes) {
        return """
            You are a software test plan generator.
            You will receive a codebase converted into JSON format containing the impacted files for the changes the developer wants to make.
            Analyse the repository structure, functionality, public methods, and potential risks.
    
            Your task:
            - Generate a complete TEST PLAN for the impacted files in the JSON.
            - The test plan should include unit tests, integration tests, and system tests.
            - Include only relevant test cases that directly relate to the changes.
            - DO NOT give generic test cases unrelated to the changes.  
            - Prioritize critical functionalities and edge cases.
            - Provide the test plan in a structured format with clear sections and bullet points.
            - DO NOT include date in your test plan.
            - Here are the impacted class names seperated by commas: %s
            - Here are the changes the developer wants to make to the code: %s";
            - Return test plan for the class names present in embedding store 
            """.formatted(nodes, changeRequest);
    }

    private List<String> extractClassList(String response) {
        List<String> nodes = new ArrayList<>();
        if (response == null || response.isBlank()) return nodes;

        for (String entry : response.split(",")) {
            var trimmed = entry.trim();
            if (!trimmed.isEmpty()) nodes.add(trimmed);
        }
        return nodes;
    }

    public String chatWithAssistant(String sessionId, String message) {
        var reply = createAssistant().chat(sessionId, message).trim();
        int echoIndex = reply.lastIndexOf(message);
        return (echoIndex > 0) ? reply.substring(echoIndex).trim() : reply;
    }
}
