package com.citi.impactanalyzer.vectorstore;

import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class InMemoryVectorStore {

    private final Map<String, float[]> vectors = new HashMap<>();

    public void save(String id, float[] vector) {
        vectors.put(id, vector);
    }

    public float[] get(String id) {
        return vectors.get(id);
    }

    public Set<String> getAllIds() {
        return vectors.keySet();
    }

    /*public Map<String, float[]> getAll() {
        return vectors;
    }*/

    public int size() {
        return vectors.size();
    }
}
