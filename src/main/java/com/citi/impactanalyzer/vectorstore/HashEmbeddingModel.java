package com.citi.impactanalyzer.vectorstore;

import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

@Component
public class HashEmbeddingModel implements EmbeddingModel {

    private static final int VECTOR_SIZE = 64;

    @Override
    public float[] embed(String text) {
        float[] vector = new float[VECTOR_SIZE];
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(text.getBytes(StandardCharsets.UTF_8));

            for (int i = 0; i < VECTOR_SIZE; i++) {
                vector[i] = (hash[i % hash.length] & 0xFF) / 255.0f;
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return vector;
    }
}
