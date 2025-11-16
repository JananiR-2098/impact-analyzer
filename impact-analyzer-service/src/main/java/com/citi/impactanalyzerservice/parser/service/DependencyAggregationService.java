package com.citi.impactanalyzerservice.parser.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.citi.impactanalyzerservice.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzerservice.parser.domain.CodeFile;
import com.citi.impactanalyzerservice.parser.domain.CodeFile.Type;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class DependencyAggregationService {

    private static final Logger logger = LoggerFactory.getLogger(DependencyAggregationService.class);

    private final DependencyExtractionService dependencyService;
    private final CodeFileScannerService fileScanner;
    private final ObjectMapper mapper;
    private final DependencyAnalyzerProperties properties;

    public DependencyAggregationService(DependencyExtractionService dependencyService,
                                        CodeFileScannerService fileScanner,
                                        ObjectMapper mapper,
                                        DependencyAnalyzerProperties properties) {
        this.dependencyService = dependencyService;
        this.fileScanner = fileScanner;
        this.mapper = mapper;
        this.properties = properties;
    }

    public void generateDependencyGraph() {
        long startTime = System.currentTimeMillis(); // ⏱️ Start timer

        try {
            List<CodeFile> allFiles = new ArrayList<>();
            String baseDir = properties.getBaseDir() != null ? properties.getBaseDir() : "build/cloneRepo";

            // 🔹 Scan for each supported language in its specific folder
            if (properties.getLanguages() != null) {
                for (String lang : properties.getLanguages()) {
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


            Map<String, String> paths = properties.getPaths();
            if (paths != null && paths.containsKey("sql")) {
                String sqlPath = paths.get("sql");
                Path sqlDir = Path.of(baseDir, sqlPath);
                logger.info("Scanning SQL path: {}", sqlDir);
                allFiles.addAll(fileScanner.scanDirectory(sqlDir));
            }


            if (allFiles.isEmpty()) {
                logger.warn("No files found in language-specific folders. Scanning entire repo...");
                Path rootDir = Path.of(baseDir);
                allFiles = fileScanner.scanDirectory(rootDir);
            }

            processFiles(allFiles);


            long endTime = System.currentTimeMillis();
            double durationSec = (endTime - startTime) / 1000.0;
            logger.info("Total time taken to generate dependency file: {} seconds", durationSec);

        } catch (Exception e) {
            logger.error("Error while generating dependency graph", e);
        }
    }

    private void processFiles(List<CodeFile> codeFiles) throws Exception {
        List<Object> allDependencies = new ArrayList<>();

        for (CodeFile file : codeFiles) {
            logger.debug("Processing: {} language: {}", file, file.getLanguage());

            if (file.getType() == Type.CODE && !properties.getLanguages().contains(file.getLanguage())) {
                logger.debug("Skipping unsupported language: {}", file.getLanguage());
                continue;
            }

            if (file.getType() == Type.SQL && !properties.getSqlDialects().contains(file.getDialect())) {
                logger.debug("Skipping unsupported SQL dialect: {}", file.getDialect());
                continue;
            }

            String rawOutput;
            if (file.getType() == Type.SQL) {
                rawOutput = dependencyService.analyzeSqlDependencies(file.getContent(), file.getDialect());
            } else {
                rawOutput = dependencyService.analyzeCodeDependencies(file.getContent(), file.getLanguage());
            }

            String depsJson = sanitizeLlmOutput(rawOutput);
            List<Object> dependencies = mapper.readValue(depsJson, new TypeReference<>() {
            });
            logger.debug("dependencies: {}", dependencies);
            allDependencies.addAll(dependencies);
        }

        File output = new File("build/analysis/dependency-graph.json");
        File parent = output.getParentFile();
        if (parent != null && !parent.exists()) {
            boolean created = parent.mkdirs();
            if (!created) {
                logger.warn("Could not create directories for output path: {}", parent.getAbsolutePath());
            }
        }

        try (FileWriter fw = new FileWriter(output)) {
            mapper.writerWithDefaultPrettyPrinter().writeValue(fw, allDependencies);
        }

        logger.info("Dependency graph JSON generated at: {}", output.getAbsolutePath());
    }

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
}
