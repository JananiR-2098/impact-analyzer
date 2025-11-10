package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.springframework.stereotype.Service;

@Service
public class DependencyExtractionService {

    private final PromptService promptService;
    private final DependencyAnalyzerProperties properties;

    public DependencyExtractionService(PromptService promptService,
                                       DependencyAnalyzerProperties properties) {
        this.promptService = promptService;
        this.properties = properties;
    }

    public String analyzeCodeDependencies(String code, String language) {
        if (!properties.getLanguages().contains(language)) {
            throw new IllegalArgumentException("Unsupported language: " + language);
        }
        return promptService.analyzeAndGroupCodeDependencies(code, language);
    }

    public String analyzeSqlDependencies(String sql, String dialect) {
        if (!properties.getSqlDialects().contains(dialect)) {
            throw new IllegalArgumentException("Unsupported SQL dialect: " + dialect);
        }
        return promptService.analyzeAndGroupSqlDependencies(sql, dialect);
    }
}
