package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Answers;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.ai.chat.client.ChatClient;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ChatClientServiceTest {

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    ChatClient chatClient;
    @Mock
    DependencyAnalyzerProperties properties;

    @InjectMocks
    ChatClientService chatClientService;

    private final String TEST_PROMPT = "Analyze this code";

    @BeforeEach
    void setUp() {
        // lenient because not every test asserts retry behavior
        Mockito.lenient().when(properties.getChatRetryCount()).thenReturn(2);
        Mockito.lenient().when(properties.getChatRetryDelayMs()).thenReturn(10L);
    }

    @Test
    void testSendPrompt_SuccessOnFirstAttempt() {
        chatClientService.sendPrompt(TEST_PROMPT);

        verify(chatClient, times(1)).prompt();
    }

    @Test
    void testSendPrompt_FailsAfterAllRetries() {
        when(chatClient.prompt()).thenThrow(new RuntimeException("Failure 1"));

        assertThrows(RuntimeException.class, () -> chatClientService.sendPrompt(TEST_PROMPT));

        verify(chatClient, times(3)).prompt();
    }

    @Test
    void testSendPrompt_ZeroRetries() {
        when(properties.getChatRetryCount()).thenReturn(0);

        chatClientService.sendPrompt(TEST_PROMPT);

        verify(chatClient, times(1)).prompt();
    }

    @Test
    void testSendPrompt_ZeroRetries_ImmediateFailure() {
        when(properties.getChatRetryCount()).thenReturn(0);
        when(chatClient.prompt()).thenThrow(new RuntimeException("Immediate Failure"));

        assertThrows(RuntimeException.class, () -> chatClientService.sendPrompt(TEST_PROMPT));

        verify(chatClient, times(1)).prompt();
    }
}
