package com.citi.impactanalyzer.parser.exception;

public class ChatClientCommunicationException extends RuntimeException {
    public ChatClientCommunicationException(String message) {
        super(message);
    }
    public ChatClientCommunicationException(String message, Throwable cause) {
        super(message, cause);
    }
}