package com.citi.impactanalyzerservice.vectorstore;

public interface EmbeddingModel {
    float[] embed(String text);
}
