package com.citi.impactanalyzer.vectorstore;

public interface EmbeddingModel {
    float[] embed(String text);
}
