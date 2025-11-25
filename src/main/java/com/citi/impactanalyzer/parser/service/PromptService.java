package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class PromptService {

    private static final Logger logger = LoggerFactory.getLogger(PromptService.class);
    // Removed AUTO_DETECT_ALL constant and related logic for simplicity

    private final ChatClientService chatService;

    public PromptService(ChatClientService chatService) {
        this.chatService = chatService;

    }

    /**
     * Analyze code dependencies for Java, Python, Go, JS/TS
     */
    public String analyzeCodeDependencies(String code, String language) {
        String prompt = buildCodePrompt(code, language);
        return chatService.sendPrompt(prompt);
    }

    /**
     * Analyze SQL dependencies (flat list)
     */
    public String analyzeSqlDependencies(String sql, String dialect) {
        String prompt = buildSqlPrompt(sql, dialect, false);
        return chatService.sendPrompt(prompt);
    }

    /**
     * Analyze and group SQL dependencies by source and relation type
     */
    public String analyzeAndGroupSqlDependencies(String sql, String dialect) {
        String prompt = buildSqlPrompt(sql, dialect, true);
        return chatService.sendPrompt(prompt);
    }

    // ⭐ SIMPLIFIED buildCodePrompt implementation
    private String buildCodePrompt(String code, String language) {
        // Use a generic placeholder base package for examples.
        String exampleBasePackage = "com.app.example";

        return String.format("""
    You are a %s class dependency analyzer.

    Given the following %s code:

    %s

    Output strictly valid JSON only, without backticks, markdown, or extra explanation.
    JSON must start with '[' and end with ']'.
    Do not include any other text or field.

    Each JSON object must represent a class-level dependency and must have:
    - "source": fully qualified **class or interface name** (e.g., %s.service.MyService)
    - "relation": one of CALLS, READS, WRITES, IMPLEMENTS, EXTENDS, USES_TYPE, ANNOTATED_WITH, THROWS, CALLS_CONSTRUCTOR, IMPORTS, DEPENDS_ON_PACKAGE
    - "target": fully qualified **class, interface, or annotation name** (e.g., %s.repo.Helper)

    ### CRUCIAL FILTERING RULES ###
    - **Crucially, 'source' and 'target' MUST be the fully qualified CLASS or INTERFACE name.**
    - **Class-Level Aggregation:** If a method/field in Class A has a relation with Class B, report the relation between Class A and Class B.
    - **Filter External/Framework Classes:** DO NOT include dependencies where the target starts with: java.*, javax.*, jakarta.*, org.springframework.*, or other common third-party libraries, **unless** the relation is IMPLEMENTS or EXTENDS (structural dependencies are always kept).

    Example output:
    [
      {"source": "%s.service.MyService", "relation": "CALLS", "target": "%s.repo.Helper"},
      {"source": "%s.model.Pet", "relation": "EXTENDS", "target": "org.springframework.data.repository.Repository"}
    ]
    """, language, language, code, exampleBasePackage, exampleBasePackage, exampleBasePackage, exampleBasePackage, exampleBasePackage);
    }


    // The extractBasePackageFromCode method has been commented out/removed for simplicity

    /**
     * Builds prompt for SQL (Oracle, Sybase)
     */
    private String buildSqlPrompt(String sql, String dialect, boolean grouped) {
        if (!grouped) {
            // Default flat list format
            return String.format("""
                    You are a %s SQL analyzer.
                    
                    Given the following %s SQL code:
                    
                    %s
                    
                    Output strictly valid JSON only, without backticks, markdown, or extra explanation.
                    JSON must start with '[' and end with ']'.
                    
                    Each JSON object must have:
                    - source: fully qualified table, view, column, or procedure
                    - relation: one of READS, WRITES, CALLS, DEPENDS_ON_VIEW, DEPENDS_ON_PROCEDURE, USES_TYPE
                    - target: fully qualified table, view, column, procedure, or type
                    
                    Example output:
                    [
                      {"source":"HR.EMPLOYEES.SALARY","relation":"READS","target":"HR.EMPLOYEES"},
                      {"source":"HR.PAYROLL_PROC","relation":"CALLS","target":"HR.TAX_PROC"}
                    ]
                    """, dialect, dialect, sql);
        }

        // Grouped output by source + all relations
        return String.format("""
                You are a %s SQL analyzer.
                
                Given the following %s SQL code:
                
                %s
                
                Output strictly valid JSON only, without backticks, markdown, or extra explanation.
                JSON must start with '[' and end with ']'.
                
                Each JSON object must have:
                - "source": fully qualified table, view, column, or procedure
                - "relation": one of READS, WRITES, CALLS, DEPENDS_ON_VIEW, DEPENDS_ON_PROCEDURE, USES_TYPE
                - "target": fully qualified table, view, column, procedure, or type
                
                Then, group all relations by their "source".
                For each source, include arrays for each relation type found (calls, reads, writes, depends_on_view, depends_on_procedure, uses_type).
                
                Example:
                [
                  {
                    "source": "HR.PAYROLL_PROC",
                    "calls": ["HR.TAX_PROC", "HR.BONUS_PROC"],
                    "reads": ["HR.EMPLOYEES"],
                    "writes": ["HR.PAYROLL_LOG"]
                  },
                  {
                    "source": "HR.ATTENDANCE_PROC",
                    "calls": ["HR.LOG_PROC"]
                  }
                ]
                """, dialect, dialect, sql);
    }
}