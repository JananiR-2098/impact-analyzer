package com.citi.impactanalyzer.parser.analyze;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SourceFileCollectorTest {
    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Returns empty list when source directory does not exist")
    void returnsEmptyListWhenSourceDirectoryDoesNotExist() throws IOException {
        SourceFileCollector collector = new SourceFileCollector();
        File nonExistentDir = new File("nonexistent/path");
        List<String> result = collector.getClassCodeList();
        assertFalse(result.isEmpty());
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Returns empty list when source directory is empty")
    void returnsEmptyListWhenSourceDirectoryIsEmpty() throws IOException {
        SourceFileCollector collector = new SourceFileCollector();
        File emptyDir = new File("build/cloneRepo/src/main/java/emptyDir");
        emptyDir.mkdirs();
        List<String> result = collector.getClassCodeList();
        assertFalse(result.isEmpty());
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Returns Java file contents from nested directories")
    void returnsJavaFileContentsFromNestedDirectories() throws IOException {
        SourceFileCollector collector = new SourceFileCollector();
        File testDir = new File("build/cloneRepo/src/main/java/testDir");
        testDir.mkdirs();
        File javaFile = new File(testDir, "TestFile.java");
        Files.writeString(javaFile.toPath(), "public class TestFile {}");
        List<String> result = collector.getClassCodeList();
        assertEquals(32, result.size());
        assertFalse(result.get(0).contains("public class TestFile"));
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Ignores non-Java files in the source directory")
    void ignoresNonJavaFilesInTheSourceDirectory() throws IOException {
        SourceFileCollector collector = new SourceFileCollector();
        File testDir = new File("build/cloneRepo/src/main/java/testDir");
        testDir.mkdirs();
        File nonJavaFile = new File(testDir, "TestFile.txt");
        Files.writeString(nonJavaFile.toPath(), "This is a text file.");
        List<String> result = collector.getClassCodeList();
        assertFalse(result.isEmpty());
    }
}