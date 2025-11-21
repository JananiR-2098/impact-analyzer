package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzer.parser.domain.CodeFile;
import com.citi.impactanalyzer.parser.domain.CodeFile.Type;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.io.TempDir;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.FileWriter;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DependencyAggregationServiceTest {

    @TempDir
    Path tempDir;

    @Mock
    DependencyExtractionService dependencyService;
    @Mock
    CodeFileScannerService fileScanner;
    @Mock
    ObjectMapper mapper;
    @Mock
    DependencyAnalyzerProperties properties;
    @Mock
    ObjectWriter objectWriter;
    @Mock
    BasePackageDetectorService basePackageDetector;

    @InjectMocks
    DependencyAggregationService aggregationService;

    @BeforeEach
    void setUp() throws Exception {
        org.mockito.Mockito.lenient().when(mapper.writerWithDefaultPrettyPrinter()).thenReturn(objectWriter);
        org.mockito.Mockito.lenient().doNothing().when(objectWriter).writeValue(any(FileWriter.class), any());
        org.mockito.Mockito.lenient().when(properties.getBaseDir()).thenReturn(tempDir.toString());
        org.mockito.Mockito.lenient().when(properties.getLanguages()).thenReturn(List.of("java"));
        org.mockito.Mockito.lenient().when(properties.getSqlDialects()).thenReturn(List.of("mysql"));
        org.mockito.Mockito.lenient().when(properties.getPathForLanguage(anyString())).thenReturn("src");
        org.mockito.Mockito.lenient().when(basePackageDetector.detectBasePackage(any())).thenReturn("com.example");
    }

    private CodeFile createCodeFile(String content, String lang, Type type, String dialect) {
        return new CodeFile(type, lang, content, dialect);
    }

    private Path getMockPath(String subPath) {
        return tempDir.resolve(subPath);
    }

    @Test
    void testGenerateDependencyGraph_SuccessfulAggregation() throws Exception {
        List<CodeFile> javaFiles = List.of(
                createCodeFile("Java code", "java", Type.CODE, null)
        );

        when(fileScanner.scanDirectory(getMockPath("src"))).thenReturn(javaFiles);
        when(dependencyService.analyzeCodeDependencies(anyString(), eq("java"))).thenReturn("```json [{\"dep\":\"A\"}] ```");

        List<Object> mockDependencies = new ArrayList<>();
        mockDependencies.add(new HashMap<>());
        when(mapper.readValue(anyString(), any(TypeReference.class))).thenReturn(mockDependencies);

        aggregationService.generateDependencyGraph();

        verify(fileScanner).scanDirectory(getMockPath("src"));
        verify(dependencyService).analyzeCodeDependencies(anyString(), eq("java"));
        verify(objectWriter).writeValue(any(FileWriter.class), anyMap());
    }

    @Test
    void testGenerateDependencyGraph_SqlScanningEnabled() throws Exception {
        Map<String, String> paths = new HashMap<>();
        paths.put("sql", "db/scripts");
        when(properties.getPaths()).thenReturn(paths);

        List<CodeFile> sqlFiles = List.of(
                createCodeFile("SQL script", "sql", Type.SQL, "mysql")
        );

        when(fileScanner.scanDirectory(getMockPath("src"))).thenReturn(Collections.emptyList());
        when(fileScanner.scanDirectory(getMockPath("db/scripts"))).thenReturn(sqlFiles);

        when(dependencyService.analyzeSqlDependencies(anyString(), eq("mysql"))).thenReturn("```json [{\"dep\":\"B\"}] ```");
        when(mapper.readValue(anyString(), any(TypeReference.class))).thenReturn(List.of(new HashMap<>()));

        aggregationService.generateDependencyGraph();

        verify(fileScanner).scanDirectory(getMockPath("db/scripts"));
        verify(dependencyService).analyzeSqlDependencies(anyString(), eq("mysql"));
        verify(objectWriter).writeValue(any(FileWriter.class), anyMap());
    }

    @Test
    void testGenerateDependencyGraph_FallbackToRootScan() throws Exception {
        when(properties.getLanguages()).thenReturn(List.of("java"));
        when(fileScanner.scanDirectory(getMockPath("src"))).thenReturn(Collections.emptyList());
        when(properties.getPaths()).thenReturn(Collections.emptyMap());

        List<CodeFile> fallbackFiles = List.of(
                createCodeFile("Fallback file", "java", Type.CODE, null)
        );
        when(fileScanner.scanDirectory(getMockPath(""))).thenReturn(fallbackFiles);

        when(dependencyService.analyzeCodeDependencies(anyString(), eq("java"))).thenReturn("[]");
        when(mapper.readValue(anyString(), any(TypeReference.class))).thenReturn(Collections.emptyList());

        aggregationService.generateDependencyGraph();

        verify(fileScanner).scanDirectory(getMockPath(""));
        verify(objectWriter).writeValue(any(FileWriter.class), anyMap());
    }
}
