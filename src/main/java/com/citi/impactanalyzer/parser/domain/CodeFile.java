package com.citi.impactanalyzer.parser.domain;

public class CodeFile {

    public enum Type { CODE, SQL }

    private final Type type;
    private final String language; // for CODE files
    private final String content;
    private final String dialect;  // for SQL files

    public CodeFile(Type type, String language, String content, String dialect) {
        this.type = type;
        this.language = language;
        this.content = content;
        this.dialect = dialect;
    }

    public Type getType() {
        return type;
    }

    public String getLanguage() {
        return language;
    }

    public String getContent() {
        return content;
    }

    public String getDialect() {
        return dialect;
    }
}
