package com.citi.impactanalyzer.vectorstore;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class JsonVectorizer {

    private final ObjectMapper mapper = new ObjectMapper();
    private final EmbeddingModel embeddingModel;

    public JsonVectorizer(EmbeddingModel embeddingModel) {
        this.embeddingModel = embeddingModel;
    }

    public float[] vectorize(JsonNode node) {
        try {
            String normalized = mapper.writeValueAsString(node);
            return embeddingModel.embed(normalized);
        } catch (Exception e) {
            throw new RuntimeException("Failed to vectorize JSON", e);
        }
    }
}
