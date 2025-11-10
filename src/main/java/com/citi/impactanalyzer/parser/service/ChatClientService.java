package com.citi.impactanalyzer.parser.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;

@Service
public class ChatClientService {

    private static final Logger logger = LoggerFactory.getLogger(ChatClientService.class);

    private final ChatClient chatClient;
    private final DependencyAnalyzerProperties properties;

    public ChatClientService(ChatClient chatClient, DependencyAnalyzerProperties properties) {
        this.chatClient = chatClient;
        this.properties = properties;
    }

    public String sendPrompt(String prompt) {
        int maxAttempts = Math.max(1, properties.getChatRetryCount() + 1);
        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                logger.debug("Sending prompt to ChatClient (attempt {}/{})", attempt, maxAttempts);
                return chatClient.prompt()
                        .user(prompt)
                        .call()
                        .content();
            } catch (Exception e) {
                logger.warn("Chat client call failed on attempt {}/{}: {}", attempt, maxAttempts, e.getMessage());
                if (attempt >= maxAttempts) {
                    logger.error("Chat client call failed after {} attempts", attempt, e);
                    throw new RuntimeException("Chat client failed", e);
                }
                try {
                    Thread.sleep(properties.getChatRetryDelayMs());
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new RuntimeException("Interrupted while retrying chat client", ie);
                }
            }
        }
        throw new RuntimeException("Chat client failed after retries");
    }
}

