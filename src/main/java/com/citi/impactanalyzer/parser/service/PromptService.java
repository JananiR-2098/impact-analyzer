package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.springframework.stereotype.Service;

@Service
public class PromptService {

    private final ChatClientService chatService;
    private final DependencyAnalyzerProperties properties;

    public PromptService(ChatClientService chatService, DependencyAnalyzerProperties properties) {
        this.chatService = chatService;
        this.properties = properties;
    }

    /**
     * Analyze code dependencies for Java, Python, Go, JS/TS
     */
    public String analyzeCodeDependencies(String code, String language) {
        String prompt = buildCodePrompt(code, language, false);
        return chatService.sendPrompt(prompt);
    }

    /**
     * Analyze and group code dependencies by source and relation type
     */
    public String analyzeAndGroupCodeDependencies(String code, String language) {
        String prompt = buildCodePrompt(code, language, true);
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

    /**
     * Builds prompt for code (Java, Python, Go, JS/TS)
     */
    private String buildCodePrompt(String code, String language, boolean grouped) {
        String basePackage = properties.getBasePackage();

        String common = String.format("""
        You are a %s code analyzer.

        Given the following %s code:

        %s

        Output strictly valid JSON only, without backticks, markdown, or extra explanation.
        JSON must start with '[' and end with ']'.
        Do not include any other text or field.

        Each JSON object must have:
        - "source": fully qualified class, method, function, or variable
        - "relation": one of CALLS, READS, WRITES, IMPLEMENTS, EXTENDS, USES_TYPE, ANNOTATED_WITH, THROWS, CALLS_CONSTRUCTOR, IMPORTS, DEPENDS_ON_PACKAGE
        - "target": fully qualified class, method, function, variable, type, annotation, or package/module

        ⚠️ Important filtering rules:
        - Include ONLY dependencies that belong to the application's own package namespace.
        - The application's base package is: %s
        - DO NOT include any dependency that starts with:
          java.*, javax.*, jakarta.*, org.springframework.*, com.fasterxml.*, or any third-party library.
        - Ignore annotations, persistence mappings, and framework imports.
        """, language, language, code, basePackage);

        if (!grouped) {
            return common + String.format("""
            
            Example output:
            [
              {"source": "%s.service.MyService.methodA()", "relation": "CALLS", "target": "%s.repo.Helper.doWork()"}
            ]

            Ensure your output passes JSON.parse() validation.
            """, basePackage, basePackage);
        } else {
            return common + String.format("""
            
            Then, group all relations by their "source". For each source, include arrays for each relation type found.

            Example output:
            [
              {
                "source": "%s.service.EmployeeService",
                "calls": ["%s.repo.EmployeeRepo.save()"],
                "reads": ["%s.model.Employee"],
                "writes": ["%s.model.Payroll"],
                "implements": ["%s.api.EmployeeAPI"]
              }
            ]

            Ensure your output passes JSON.parse() validation.
            """, basePackage, basePackage, basePackage, basePackage, basePackage);
        }
    }

    /**
     * Builds prompt for SQL (Oracle, Sybase)
     */
    private String buildSqlPrompt(String sql, String dialect, boolean grouped) {
        String basePackage = properties.getBasePackage();
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

