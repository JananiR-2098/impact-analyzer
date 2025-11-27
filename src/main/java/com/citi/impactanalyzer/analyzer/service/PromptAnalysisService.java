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
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class PromptAnalysisService {

    private static final Logger logger = LoggerFactory.getLogger(PromptAnalysisService.class);

    // Increased max results for better context retrieval for complex analysis
    private static final int MAX_RESULTS = 20;
    private static final double MIN_SCORE = 0.75;
    private static final int CHAT_MEMORY_SIZE = 100;

    // Pattern to aggressively match and extract the JSON content inside the markdown code block.
    // It captures content between ```json and ```, non-greedily.
    private static final Pattern JSON_BLOCK_PATTERN = Pattern.compile("```json\\s*([\\s\\S]*?)\\s*```", Pattern.CASE_INSENSITIVE);

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
                // Storing the entire dependency node JSON as the text segment
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

    /**
     * Generates a comprehensive impact analysis report, including an impacted dependency graph,
     * a corresponding test plan, and repository identification, in a unified JSON format.
     *
     * @param sessionId The unique ID for chat memory.
     * @param changeRequest The user's prompt describing the change.
     * @return A JSON string containing the 'graphs' array, 'testPlan' object, and 'repo' object.
     */
    public String generateImpactAnalysisReport(String sessionId, String changeRequest) {
        var prompt = buildGraphAndTestPlanPrompt(changeRequest);
        var assistantResponse = chatWithAssistant(sessionId, prompt);
        logger.info("User Change Request: {}", changeRequest);
        logger.info("Assistant Response: {}", assistantResponse);
        // The chatWithAssistant now ensures the output is only the clean JSON block.
        return assistantResponse;
    }

    private String buildGraphAndTestPlanPrompt(String userPrompt) {
        // Updated prompt instructions for accurate repository identification and the requested nested 'repo' object format.
        return """
                You are an expert software architect, impact analyst, and test plan generator.
                
                You will receive a user query describing a change request: "%s"
                
                Your task is a three-part process, resulting in a single JSON object:
                
                1. **Impact Analysis & Graph Generation**:
                    - Analyze the provided context (from the embedding store, which contains Java project structure nodes/dependencies).
                    - Identify the *directly and indirectly impacted* packages/classes (nodes) and their immediate dependencies (links).
                    - Map these impacted nodes and their connecting links into the required **JSON format for ngx-graph visualization**.
                    - Group the nodes and links into logical clusters within the 'graphs' array.
                    - Set **"critical": true** for any node or link that is directly affected or crucial to the change.
                
                2. **Test Plan Generation**:
                    - Based on the identified impacted classes, generate a comprehensive TEST PLAN.
                    - The plan must cover **Unit Tests**, **Integration Tests**, and potential **System/API Tests**.
                    - The test plan content should be formatted using Markdown for readability.
                
                3. **Repository Identification**:
                    - **Crucially, infer the name of the repository from the full package names in the context** (e.g., if a node ID is `evrentan.examples.springbootprojectexample.dto.Customer`, the repository name is `springbootprojectexample`). Use this inferred name for the 'repo' field value. If inference is impossible, use "unknown-repository".
                
                **REQUIRED OUTPUT FORMAT**:
                Return ONLY a single, valid JSON object that strictly conforms to the following structure. Do NOT include any text, explanation, or markdown *before* or *after* the JSON block, and specifically exclude any metadata like `responseTime`.
                
                ```json
                {
                    "graphs": [
                        {
                            "nodes": [
                                {
                                    "id": "full.package.ClassName",
                                    "label": "ClassName",
                                    "critical": true
                                },
                                // ... more nodes
                            ],
                            "links": [
                                {
                                    "source": "full.package.SourceClass",
                                    "target": "full.package.TargetClass",
                                    "label": "depends",
                                    "critical": false
                                },
                                // ... more links
                            ]
                        }
                        // ... potentially more graph objects for different clusters
                    ],
                    "testPlan": {
                        "title": "Test Plan for Change Request: [Brief Summary]",
                        "testPlan": "The generated test plan content in **Markdown** format."
                    },
                    "repo": {
                        "title": "Repo",
                        "repo": "The inferred repository name (e.g., spring-boot-project-example)"
                    }
                }
                ```
                """.formatted(userPrompt);
    }

    public String chatWithAssistant(String sessionId, String message) {
        // Use a placeholder ID if sessionId is null/empty for stateful chat memory
        String chatId = (sessionId == null || sessionId.isEmpty()) ? "default_session" : sessionId;

        var reply = createAssistant().chat(chatId, message).trim();

        // New robust JSON extraction logic to remove all surrounding text and boilerplate.
        return extractJsonBlock(reply);
    }

    /**
     * Extracts the content within the first found JSON markdown code block (```json...```).
     * @param reply The full LLM response string.
     * @return The clean JSON string, or the original reply if no block is found.
     */
    private String extractJsonBlock(String reply) {
        Matcher matcher = JSON_BLOCK_PATTERN.matcher(reply);
        if (matcher.find()) {
            // Return only the captured group (the clean JSON content)
            return matcher.group(1).trim();
        }
        // Fallback: If the model returned a clean JSON without the code fence, return the reply.
        // If it still contains unwanted boilerplate, it will be visible for further tuning.
        return reply;
    }
}