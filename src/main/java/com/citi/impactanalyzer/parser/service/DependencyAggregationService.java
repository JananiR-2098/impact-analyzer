package com.citi.impactanalyzer.parser.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzer.parser.domain.CodeFile;
import com.citi.impactanalyzer.parser.domain.CodeFile.Type;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DependencyAggregationService {

    private static final Logger logger = LoggerFactory.getLogger(DependencyAggregationService.class);

    private final DependencyExtractionService dependencyService;
    private final CodeFileScannerService fileScanner;
    private final ObjectMapper mapper;
    private final DependencyAnalyzerProperties properties;
    private final BasePackageDetectorService basePackageDetector;

    public DependencyAggregationService(DependencyExtractionService dependencyService,
                                        CodeFileScannerService fileScanner,
                                        ObjectMapper mapper,
                                        DependencyAnalyzerProperties properties,
                                        BasePackageDetectorService basePackageDetector) {
        this.dependencyService = dependencyService;
        this.fileScanner = fileScanner;
        this.mapper = mapper;
        this.properties = properties;
        this.basePackageDetector = basePackageDetector;
    }

    public void generateDependencyGraph() {
        long startTime = System.currentTimeMillis();

        try {
            List<CodeFile> allFiles = scanFiles();
            detectAndSetBasePackage(allFiles);

            List<Object> allDependencies = processFiles(allFiles);

            writeDependencyGraph(allDependencies);

            logDuration(startTime);

        } catch (IOException e) {
             logger.error("IO error while generating dependency graph", e);
        } catch (Exception e) {
              logger.error("Unexpected error while generating dependency graph", e);
        }
    }

    private List<CodeFile> scanFiles() throws IOException {
        List<CodeFile> allFiles = new ArrayList<>();
        String baseDir = properties.getBaseDir() != null ? properties.getBaseDir() : "build/cloneRepo";
        Path rootDir = Path.of(baseDir);

        scanLanguagePaths(allFiles, baseDir);
        scanSqlPath(allFiles, baseDir);

        if (allFiles.isEmpty()) {
            logger.warn("No files found in language-specific folders. Scanning entire repo...");
            allFiles.addAll(fileScanner.scanDirectory(rootDir));
        }
        return allFiles;
    }

    private void scanLanguagePaths(List<CodeFile> allFiles, String baseDir) throws IOException {
        List<String> languages = properties.getLanguages();
        if (languages == null) {
            return;
        }

        for (String lang : languages) {
            String subPath = properties.getPathForLanguage(lang);
            if (subPath != null && !subPath.isBlank()) {
                Path langPath = Path.of(baseDir, subPath);
                logger.info("Scanning path for language [{}]: {}", lang, langPath);
                allFiles.addAll(fileScanner.scanDirectory(langPath));
            } else {
                logger.debug("No specific path configured for language: {}", lang);
            }
        }
    }

    private void scanSqlPath(List<CodeFile> allFiles, String baseDir) throws IOException {
        Map<String, String> paths = properties.getPaths();
        if (paths == null || !paths.containsKey("sql")) {
            return;
        }

        String sqlPath = paths.get("sql");
        Path sqlDir = Path.of(baseDir, sqlPath);
        logger.info("Scanning SQL path: {}", sqlDir);
        allFiles.addAll(fileScanner.scanDirectory(sqlDir));
    }

    private void detectAndSetBasePackage(List<CodeFile> allFiles) {
        String configuredBasePackage = properties.getBasePackage();
        if (configuredBasePackage != null && !configuredBasePackage.isBlank()) {
            logger.info("Using configured base package: {}", configuredBasePackage);
            return;
        }

        logger.info("Base package not configured. Auto-detecting from scanned files...");
        String detectedPackage = basePackageDetector.detectBasePackage(allFiles);

        if (detectedPackage != null && !detectedPackage.isBlank()) {
            logger.info("Auto-detected base package: {}", detectedPackage);
            properties.setBasePackage(detectedPackage);
        } else {
            logger.warn("Could not auto-detect base package. Using all packages.");
        }
    }

    private void logDuration(long startTime) {
        long endTime = System.currentTimeMillis();
        double durationSec = (endTime - startTime) / 1000.0;
        logger.info("Total time taken to generate dependency file: {} seconds", durationSec);
    }


    private List<Object> processFiles(List<CodeFile> codeFiles) throws IOException {
        List<Object> allDependencies = new ArrayList<>();
        int processedCount = 0;
        int skippedCount = 0;

        logger.info("Starting to process {} files for dependency analysis", codeFiles.size());

        for (CodeFile file : codeFiles) {
            logger.debug("Processing: {} language: {}", file, file.getLanguage());

            if (shouldSkipFile(file)) {
                skippedCount++;
                continue;
            }

            try {
                allDependencies.addAll(analyzeAndParseDependencies(file));
                processedCount++;
            } catch (RuntimeException e) {
                logger.error("Failed to analyze file {}: {}", file.getType(), e.getMessage());
                skippedCount++;
            }
        }

        logger.info("File processing complete. Processed: {}, Skipped: {}, Total dependencies: {}",
                processedCount, skippedCount, allDependencies.size());

        return allDependencies;
    }

    private boolean shouldSkipFile(CodeFile file) {
        if (file.getType() == Type.CODE && !properties.getLanguages().contains(file.getLanguage())) {
            logger.debug("Skipping unsupported language: {}", file.getLanguage());
            return true;
        }

        if (file.getType() == Type.SQL && !properties.getSqlDialects().contains(file.getDialect())) {
            logger.debug("Skipping unsupported SQL dialect: {}", file.getDialect());
            return true;
        }
        return false;
    }

     private List<Object> analyzeAndParseDependencies(CodeFile file) throws IOException {
        String rawOutput = (file.getType() == Type.SQL)
                ? dependencyService.analyzeSqlDependencies(file.getContent(), file.getDialect())
                : dependencyService.analyzeCodeDependencies(file.getContent(), file.getLanguage());

        String depsJson = sanitizeLlmOutput(rawOutput);
        List<Object> dependencies = mapper.readValue(depsJson, new TypeReference<>() {});

        logger.info("File processed - found {} dependencies. Content length: {} chars", dependencies.size(),
                file.getContent() != null ? file.getContent().length() : 0);

        return dependencies;
    }

    private void writeDependencyGraph(List<Object> allDependencies) throws IOException {
        File output = new File("build/analysis/dependency-graph.json");
        ensureParentDirectoryExists(output);

        String repoName = extractRepoName();
        Map<String, Object> outputWrapper = new HashMap<>();
        outputWrapper.put("repo", repoName != null ? repoName : "");
        outputWrapper.put("dependencies", allDependencies);

        try (FileWriter fw = new FileWriter(output)) {
            mapper.writerWithDefaultPrettyPrinter().writeValue(fw, outputWrapper);
        }

        logger.info("Dependency graph JSON generated at: {} (repo={})", output.getAbsolutePath(), repoName);
    }

    private void ensureParentDirectoryExists(File file) {
        File parent = file.getParentFile();
        if (parent != null && !parent.exists()) {
            boolean created = parent.mkdirs();
            if (!created) {
                logger.warn("Could not create directories for output path: {}", parent.getAbsolutePath());
            }
        }
    }

    // --- Unchanged Methods ---

    private String sanitizeLlmOutput(String raw) {
        if (raw == null || raw.isEmpty()) {
            return "[]";
        }

        String sanitized = raw.replaceAll("(?m)^```.*$", "");
        int start = sanitized.indexOf('[');
        int end = sanitized.lastIndexOf(']');
        if (start >= 0 && end >= start) {
            sanitized = sanitized.substring(start, end + 1);
        } else {
            sanitized = "[]";
        }

        return sanitized.trim();
    }

    private String extractRepoName() {
        try {
            String url = properties.getCloneRepoUrl();
            if (url != null && !url.isBlank()) {
                String cleaned = url.replaceAll("\\.git$", "");
                int lastSlash = Math.max(cleaned.lastIndexOf('/'), cleaned.lastIndexOf('\\'));
                if (lastSlash >= 0 && lastSlash < cleaned.length() - 1) {
                    return cleaned.substring(lastSlash + 1);
                }
                return cleaned;
            }

            String local = properties.getCloneLocalPath();
            if (local != null && !local.isBlank()) {
                Path p = Path.of(local);
                return p.getFileName().toString();
            }

            String baseDir = properties.getBaseDir();
            if (baseDir != null && !baseDir.isBlank()) {
                Path p = Path.of(baseDir);
                return p.getFileName().toString();
            }
        } catch (Exception e) {
            logger.debug("Failed to extract repo name: {}", e.getMessage());
        }
        return null;
    }
}