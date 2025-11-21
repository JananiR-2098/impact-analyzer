package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class DependencyExtractionServiceTest {

    @Mock
    PromptService promptService;
    @Mock
    DependencyAnalyzerProperties properties;

    @InjectMocks
    DependencyExtractionService extractionService;

    private final String MOCK_CODE = "public class A {}";
    private final String MOCK_SQL = "SELECT * FROM B;";
    private final String MOCK_RESULT = "[{\"source\":\"A\",\"target\":\"B\"}]";

    @BeforeEach
    void setUp() {
        when(properties.getLanguages()).thenReturn(List.of("java", "javascript"));
        when(properties.getSqlDialects()).thenReturn(List.of("mysql", "postgresql"));
    }

    @Test
    void testAnalyzeCodeDependencies_SupportedLanguage_Success() {
        when(promptService.analyzeAndGroupCodeDependencies(MOCK_CODE, "java")).thenReturn(MOCK_RESULT);
        String result = extractionService.analyzeCodeDependencies(MOCK_CODE, "java");
        assertEquals(MOCK_RESULT, result);
    }

    @Test
    void testAnalyzeCodeDependencies_UnsupportedLanguage_ThrowsException() {
        assertThrows(IllegalArgumentException.class, () -> extractionService.analyzeCodeDependencies(MOCK_CODE, "python"));
    }

    @Test
    void testAnalyzeSqlDependencies_SupportedDialect_Success() {
        when(promptService.analyzeAndGroupSqlDependencies(MOCK_SQL, "mysql")).thenReturn(MOCK_RESULT);
        String result = extractionService.analyzeSqlDependencies(MOCK_SQL, "mysql");
        assertEquals(MOCK_RESULT, result);
    }

    @Test
    void testAnalyzeSqlDependencies_UnsupportedDialect_ThrowsException() {
        assertThrows(IllegalArgumentException.class, () -> extractionService.analyzeSqlDependencies(MOCK_SQL, "oracle"));
    }

    @Test
    void testAnalyzeCodeDependencies_SupportedButDifferentLanguage() {
        when(promptService.analyzeAndGroupCodeDependencies(MOCK_CODE, "javascript")).thenReturn(MOCK_RESULT);
        String result = extractionService.analyzeCodeDependencies(MOCK_CODE, "javascript");
        assertEquals(MOCK_RESULT, result);
    }

    @Test
    void testAnalyzeSqlDependencies_SupportedButDifferentDialect() {
        when(promptService.analyzeAndGroupSqlDependencies(MOCK_SQL, "postgresql")).thenReturn(MOCK_RESULT);
        String result = extractionService.analyzeSqlDependencies(MOCK_SQL, "postgresql");
        assertEquals(MOCK_RESULT, result);
    }
}