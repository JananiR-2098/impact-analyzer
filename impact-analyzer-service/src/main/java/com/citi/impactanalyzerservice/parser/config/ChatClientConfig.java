package com.citi.impactanalyzerservice.parser.config;

import org.springframework.ai.chat.client.ChatClient;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatClientConfig {

    @Bean
    public ChatClient chatClient(ChatModel chatModel) { // Inject your ChatModel

        return ChatClient.builder(chatModel).build();
    }
}