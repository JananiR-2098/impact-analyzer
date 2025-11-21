package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzer.parser.domain.CodeFile;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.io.TempDir;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
class CodeFileScannerServiceTest {

    @TempDir
    Path tempDir;

    @Mock
    DependencyAnalyzerProperties properties;

    @InjectMocks
    CodeFileScannerService scannerService;

    private final String MOCK_JAVA_CONTENT = "package com.app; class A {}";
    private final long MAX_SIZE = 10000;

    @BeforeEach
    void setUp() {
        org.mockito.Mockito.lenient().when(properties.getFileScannerMaxFileSizeBytes()).thenReturn(MAX_SIZE);
        org.mockito.Mockito.lenient().when(properties.getFileScannerExcludes()).thenReturn(List.of("target", ".git", "node_modules"));
    }

    private void createFile(Path dir, String name, String content) throws IOException {
        Path filePath = dir.resolve(name);
        Files.writeString(filePath, content);
    }

    @Test
    void testScanDirectory_NonExistentRoot() throws IOException {
        Path nonExistent = tempDir.resolve("nonexistent");
        List<CodeFile> result = scannerService.scanDirectory(nonExistent);

        assertTrue(result.isEmpty());
    }

    @Test
    void testScanDirectory_ExclusionPattern() throws IOException {
        Path targetDir = tempDir.resolve("target");
        Files.createDirectories(targetDir);
        createFile(targetDir, "excluded.java", MOCK_JAVA_CONTENT);

        Path srcDir = tempDir.resolve("src");
        Files.createDirectories(srcDir);
        createFile(srcDir, "included.java", MOCK_JAVA_CONTENT);

        List<CodeFile> result = scannerService.scanDirectory(tempDir);

        assertEquals(1, result.size());
        assertEquals("java", result.get(0).getLanguage());
    }

    @Test
    void testScanDirectory_FileTooLarge() throws IOException {
        long largeSize = MAX_SIZE + 1;

        Path largeFile = tempDir.resolve("large.java");
        Files.write(largeFile, new byte[(int) largeSize]);

        Path smallFile = tempDir.resolve("small.java");
        Files.writeString(smallFile, "small");

        List<CodeFile> result = scannerService.scanDirectory(tempDir);

        assertEquals(1, result.size());
        assertTrue(result.get(0).getContent().contains("small"));
    }

    @Test
    void testScanDirectory_CodeFileDetection() throws IOException {
        createFile(tempDir, "Test.java", MOCK_JAVA_CONTENT);
        createFile(tempDir, "script.js", "function a(){}");
        createFile(tempDir, "script.ts", "const b: number = 1;");
        createFile(tempDir, "main.py", "print('hello')");
        createFile(tempDir, "app.go", "package main");

        List<CodeFile> result = scannerService.scanDirectory(tempDir);

        assertEquals(5, result.size());
        assertTrue(result.stream().anyMatch(f -> f.getLanguage().equals("java")));
        assertTrue(result.stream().anyMatch(f -> f.getLanguage().equals("javascript")));
        assertTrue(result.stream().anyMatch(f -> f.getLanguage().equals("typescript")));
        assertTrue(result.stream().anyMatch(f -> f.getLanguage().equals("python")));
        assertTrue(result.stream().anyMatch(f -> f.getLanguage().equals("go")));
    }

    @Test
    void testScanDirectory_SqlFileDetection() throws IOException {
        String mysqlContent = "CREATE TABLE users; -- mysql";
        String oracleContent = "SELECT sysdate FROM dual;";

        createFile(tempDir, "data.sql", mysqlContent);
        createFile(tempDir, "schema.sql", oracleContent);

        List<CodeFile> result = scannerService.scanDirectory(tempDir);

        assertEquals(2, result.size());
        assertTrue(result.stream().anyMatch(f -> f.getDialect() != null && f.getDialect().equals("mysql")));
        assertTrue(result.stream().anyMatch(f -> f.getDialect() != null && f.getDialect().equals("unknown")));
    }

    @Test
    void testScanDirectory_MixedFiles() throws IOException {
        createFile(tempDir, "a.java", MOCK_JAVA_CONTENT);
        String MOCK_SQL_CONTENT = "SELECT * FROM dual -- mysql";
        createFile(tempDir, "b.sql", MOCK_SQL_CONTENT);
        createFile(tempDir, "c.txt", "just plain text");

        Path excludedDir = tempDir.resolve(".git");
        Files.createDirectories(excludedDir);
        createFile(excludedDir, "d.java", "should be skipped");

        List<CodeFile> result = scannerService.scanDirectory(tempDir);

        assertEquals(2, result.size());
        assertTrue(result.stream().anyMatch(f -> f.getType() == CodeFile.Type.CODE && f.getLanguage().equals("java")));
        assertTrue(result.stream().anyMatch(f -> f.getType() == CodeFile.Type.SQL && f.getDialect().equals("mysql")));
    }
}