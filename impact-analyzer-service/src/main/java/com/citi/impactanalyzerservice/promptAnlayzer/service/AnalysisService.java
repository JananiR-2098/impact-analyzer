package com.citi.impactanalyzerservice.promptAnlayzer.service;

import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.vertexai.gemini.VertexAiGeminiChatModel;
import dev.langchain4j.service.AiServices;
import dev.langchain4j.service.UserMessage;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class AnalysisService {


    private static final String PROJECT = "lateral-journey-477814-q0";
    private static final String LOCATION = "us-central1";
    private static final String MODEL_NAME = "gemini-2.5-flash";
    private static final String DEPENDENCY_FILE = "dependency-graph.json";
    private final ChatModel model;
    private final TextGenerator generator;

    interface TextGenerator {
        @UserMessage("{{it}}")
        String generate(String text);
    }

    public AnalysisService() {
        this.model = VertexAiGeminiChatModel.builder()
                .project(PROJECT)
                .location(LOCATION)
                .modelName(MODEL_NAME)
                .logRequests(true)
                .logResponses(true)
                .build();
        this.generator = AiServices.create(TextGenerator.class, model);
    }

    public String findNodeFromPrompt(String input) throws IOException {
        String jsonContent = readJsonFile(DEPENDENCY_FILE);
//        String input =" Adding address line1 and line2 to owner";
        String prompt = "Analyze and give only one relevant impacted class name based on the following text" + input
                +" in JSON " + jsonContent;
        System.out.println("prompt:::"+ prompt);
       return (generator.generate(prompt));
}

    private static String readJsonFile(String filePath) throws IOException {
        return Files.readString(Paths.get(filePath));
    }
}
