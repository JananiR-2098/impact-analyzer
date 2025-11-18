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

@Service
public class PromptAnalysisService {

    private static final Logger logger = LoggerFactory.getLogger(PromptAnalysisService.class);

    private static final int MAX_RESULTS = 2;
    private static final double MIN_SCORE = 0.6;
    private static final int CHAT_MEMORY_SIZE = 10;

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
        this.assistant = createAssistant();
        loadEmbeddingStore();
    }

    private void loadEmbeddingStore() throws IOException {
        logger.info("Loading EmbeddingStore from {}", graphJsonPath);

        File jsonFile = new File(graphJsonPath);
        if (!jsonFile.exists()) {
            logger.warn("Graph JSON file not found at: {} - skipping embedding store build", graphJsonPath);
            return;
        }

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(jsonFile);

        if (root == null || !root.isArray()) {
            logger.warn("Invalid JSON format: root is not an array");
            return;
        }

        int count = 0;
        for (JsonNode node : root) {
            if (!node.has("source")) continue;

            String id = node.get("source").asText();
            if (id == null || id.isBlank()) continue;

            try {
                TextSegment textSegment = TextSegment.from(node.toString());
                Embedding embedding = embeddingModel.embed(node.toString()).content();
                embeddingStore.add(embedding, textSegment);
                count++;
            } catch (Exception e) {
                logger.error("Vectorization failed for node: {}", id, e);
            }
        }

        logger.info("Successfully vectorized {} nodes into embedding store", count);
    }

    public String findNodeFromPrompt(String userPrompt) {
        return getResponseFromAssistant(assistant, userPrompt);
    }

    private Assistant createAssistant() {
        logger.info("Creating Assistant...");

        QueryTransformer queryTransformer = new CompressingQueryTransformer(
                VertexAiGeminiChatModel.builder()
                        .project(projectId)
                        .location(location)
                        .modelName(modelName)
                        .build()
        );

        ContentRetriever contentRetriever = EmbeddingStoreContentRetriever.builder()
                .embeddingStore(embeddingStore)
                .embeddingModel(embeddingModel)
                .maxResults(MAX_RESULTS)
                .minScore(MIN_SCORE)
                .build();

        RetrievalAugmentor retrievalAugmentor = DefaultRetrievalAugmentor.builder()
                .queryTransformer(queryTransformer)
                .contentRetriever(contentRetriever)
                .build();

        return AiServices.builder(Assistant.class)
                .chatModel(VertexAiGeminiChatModel.builder()
                        .project(projectId)
                        .location(location)
                        .modelName(modelName)
                        .build())
                .retrievalAugmentor(retrievalAugmentor)
                .chatMemory(MessageWindowChatMemory.withMaxMessages(CHAT_MEMORY_SIZE))
                .build();
    }

    public static String getResponseFromAssistant(Assistant assistant, String userPrompt) {
        String userQuery = String.format("""
                You are a JSON code analyzer.
                Analyze the following JSON input carefully. %s
                Identify the single most relevant impacted class name.
                Return only the class name as plain text, with no explanation or additional formatting.
                """, userPrompt);

        String assistantResponse = assistant.chat(userQuery);
        logger.info("User Query: {}", userPrompt);
        logger.info("Assistant Response: {}", assistantResponse);
        return assistantResponse;
    }

    public String getTestPlan(String prompt) {
        String userQuery = "Analyze and provide test plan for: " + prompt;
        String answer = assistant.chat(userQuery);
        logger.info("User Query: {}", userQuery);
        logger.info("Assistant Response: {}", answer);
        return answer;
    }
}
