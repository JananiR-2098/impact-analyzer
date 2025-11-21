package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class PromptService {

    private static final Logger logger = LoggerFactory.getLogger(PromptService.class);
    public static final String AUTO_DETECT_ALL = "AUTO_DETECT_ALL";
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

    private String buildCodePrompt(String code, String language) {
        String basePackage = properties.getBasePackage();

        // If base package is not configured, derive it from the code itself
        if (basePackage == null || basePackage.isBlank()) {
            basePackage = extractBasePackageFromCode(code);
            if (basePackage != null && !basePackage.isBlank()) {
                logger.debug("Derived base package from code: {}", basePackage);
            } else {
                // If still null, use a wildcard approach - include all internal dependencies
                logger.warn("Could not determine base package. Including all internal dependencies without filtering.");
                basePackage = AUTO_DETECT_ALL;
            }
        }

        String scopeRules;
        if (AUTO_DETECT_ALL.equals(basePackage)) {
            // When base package is unknown, include all dependencies but exclude only external libraries
            scopeRules = """
                ### DEPENDENCY SCOPE RULES (AUTO-DETECT MODE) ###
                - **Source Filtering:** INCLUDE ALL application classes (assume all non-framework classes are part of the application)
                - **Target Filtering:**
                    1. **KEEP ALL structural dependencies:** If the relation is **IMPLEMENTS** or **EXTENDS**, KEEP it.
                    2. **KEEP ALL internal dependencies:** If the "target" is NOT a framework/external library class, KEEP it.
                    3. **DISCARD external-only dependencies:** DO NOT include where target starts with: java.*, javax.*, jakarta.*, org.springframework.*, com.fasterxml.*, org.hibernate.*, or other third-party libraries.
                """;
        } else {
            scopeRules = String.format("""
                ### STRICT DEPENDENCY SCOPE RULES ###
                - **The application's base package is: %s**
                - **Source Filtering:** ONLY INCLUDE ENTRIES where the "source" starts with the application's base package.

                - **Target Filtering and Exceptions:**
                    1. **KEEP ALL structural dependencies:** If the relation is **IMPLEMENTS** or **EXTENDS**, KEEP the entry, even if the target is an external framework class (like JpaRepository or Validator). This preserves your application's architecture.
                    2. **KEEP ALL internal dependencies:** If the "target" **ALSO** starts with the application's base package, KEEP the entry. This covers Controller -> Repository, Pet -> PetType, etc.
                    3. **DISCARD ALL other external dependencies:** DO NOT include any dependency where the target starts with: java.*, javax.*, jakarta.*, org.springframework.* (unless covered by Exception 1), com.fasterxml.*, org.hibernate.*, or any other third-party library.

                - Ignore annotations and framework imports unless required by the above rules.
                """, basePackage);
        }

        String common = String.format("""
    You are a %s class dependency analyzer.

    Given the following %s code:

    %s

    Output strictly valid JSON only, without backticks, markdown, or extra explanation.
    JSON must start with '[' and end with ']'.
    Do not include any other text or field.

    Each JSON object must have:
    - "source": fully qualified **class or interface name**
    - "relation": one of CALLS, READS, WRITES, IMPLEMENTS, EXTENDS, USES_TYPE, ANNOTATED_WITH, THROWS, CALLS_CONSTRUCTOR, IMPORTS, DEPENDS_ON_PACKAGE
    - "target": fully qualified **class, interface, or annotation name**

    ⚠️ Important filtering and aggregation rules:
    - **Crucially, 'source' and 'target' MUST be the fully qualified CLASS or INTERFACE name, dropping method or field signatures.**
    - If a method/field in Class A has a relation with Class B, report the relation between Class A and Class B (Class-Level Aggregation).

    %s
    """, language, language, code, scopeRules);

        // --- Non-Grouped Output (The ONLY Output Block) ---
        String finalBasePackage = basePackage.equals(AUTO_DETECT_ALL) ? "org.springframework.samples.petclinic" : basePackage;
        return common + String.format("""

    Example output:
    [
      {"source": "%s.service.MyService", "relation": "CALLS", "target": "%s.repo.Helper"},
      {"source": "%s.owner.Pet", "relation": "USES_TYPE", "target": "%s.owner.PetType"},
      {"source": "%s.owner.Owner", "relation": "EXTENDS", "target": "%s.model.Person"}
    ]

    Ensure your output passes JSON.parse() validation.
    """, finalBasePackage, finalBasePackage, finalBasePackage, finalBasePackage, finalBasePackage, finalBasePackage);
    }

    /**
     * Extract base package from Java source code by parsing the package declaration
     */
    private String extractBasePackageFromCode(String code) {
        if (code == null || code.isBlank()) {
            return null;
        }

        // Look for package declaration
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("^\\s*package\\s+([a-zA-Z0-9_.]+)\\s*;");
        java.util.regex.Matcher matcher = pattern.matcher(code);

        if (matcher.find()) {
            // Return the top-level package (e.g., org.springframework.samples.petclinic from org.springframework.samples.petclinic.owner)
            // For now, return the full package - the detector service will find the common base
            return matcher.group(1);
        }

        return null;
    }
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

