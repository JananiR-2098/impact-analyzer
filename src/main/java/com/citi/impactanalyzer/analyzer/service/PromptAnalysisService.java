package com.citi.impactanalyzer.analyzer.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.langchain4j.data.document.Document;
import dev.langchain4j.data.document.splitter.DocumentSplitters;
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
import dev.langchain4j.store.embedding.EmbeddingStoreIngestor;
import dev.langchain4j.store.embedding.inmemory.InMemoryEmbeddingStore;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Objects;

@Service
public class PromptAnalysisService {

    private static final Logger logger = LoggerFactory.getLogger(PromptAnalysisService.class);

    @Value("${graph.json.path}")
    private String graphJsonPath;

    private static final String PROJECT = "lateral-journey-477814-q0";
    private static final String LOCATION = "us-central1";
    private static final String MODEL_NAME = "gemini-2.5-flash";

    Assistant assistant;

    @PostConstruct
    public void init() throws IOException {
        assistant = createAssistant();
    }

    public String findNodeFromPrompt(String userPrompt) throws IOException {
        return getResponseFromAssistant(assistant, userPrompt);
    }

    private Assistant createAssistant() throws IOException {
        EmbeddingModel embeddingModel = new AllMiniLmL6V2QuantizedEmbeddingModel();
        EmbeddingStore<TextSegment> embeddingStore = new InMemoryEmbeddingStore<>();

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree( new File(graphJsonPath));
        String dependencyGraph = Objects.toString(root);

        Document document = Document.from(Objects.toString(dependencyGraph));

        EmbeddingStoreIngestor ingestor = EmbeddingStoreIngestor.builder()
                .documentSplitter(DocumentSplitters.recursive(300, 0))
                .embeddingModel(embeddingModel)
                .embeddingStore(embeddingStore)
                .build();
        ingestor.ingest(document);

        QueryTransformer queryTransformer = new CompressingQueryTransformer(VertexAiGeminiChatModel.builder()
                .project(PROJECT)
                .location(LOCATION)
                .modelName(MODEL_NAME)
                .build());

        ContentRetriever contentRetriever = EmbeddingStoreContentRetriever.builder()
                .embeddingStore(embeddingStore)
                .embeddingModel(embeddingModel)
                .maxResults(2)
                .minScore(0.6)
                .build();

        RetrievalAugmentor retrievalAugmentor = DefaultRetrievalAugmentor.builder()
                .queryTransformer(queryTransformer)
                .contentRetriever(contentRetriever)
                .build();


        return AiServices.builder(Assistant.class)
                .chatModel(VertexAiGeminiChatModel.builder()
                        .project(PROJECT)
                        .location(LOCATION)
                        .modelName(MODEL_NAME)
                        .build())
                .retrievalAugmentor(retrievalAugmentor)
                .chatMemory(MessageWindowChatMemory.withMaxMessages(10))
                .build();
    }

    public static String getResponseFromAssistant(Assistant assistant, String userPrompt) {
        String userQuery = String.format("""
        You are a JSON code analyzer.

        You have to Analyze and give only one relevant impacted class name for userPrompt '%s'
        """, userPrompt);
        String assistantResponse = assistant.chat(userQuery);
        logger.info("User = {} ", userQuery);
        logger.info("Assistant ={} ", assistantResponse);
        return assistantResponse;
    }

    public String getTestPlan(String prompt) throws IOException {
        Assistant assistant = createAssistant();
        String userQuery = " Analyze and give for " + prompt;
        String answer = assistant.chat(userQuery);
        logger.info("User = {} ", userQuery);
        logger.info("Assistant ={} ", answer);
        return answer;
    }
}
