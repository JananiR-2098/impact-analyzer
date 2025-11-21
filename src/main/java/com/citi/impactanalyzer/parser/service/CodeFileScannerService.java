package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzer.parser.domain.CodeFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.*;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Service
public class CodeFileScannerService {

    private static final Logger logger = LoggerFactory.getLogger(CodeFileScannerService.class);

    private final DependencyAnalyzerProperties properties;

    public CodeFileScannerService(DependencyAnalyzerProperties properties) {
        this.properties = properties;
    }

    public List<CodeFile> scanDirectory(Path rootDir) throws IOException {
        List<CodeFile> codeFiles = new ArrayList<>();

        if (rootDir == null || !Files.exists(rootDir)) {
            logger.warn("Root directory for scanning does not exist: {}", rootDir);
            return codeFiles;
        }

        try (Stream<Path> paths = Files.walk(rootDir)) {
            paths.filter(Files::isRegularFile)
                    .forEach(file -> {
                        try {
                            // exclude common folders
                            for (String ex : properties.getFileScannerExcludes()) {
                                if (file.toString().contains(FileSystems.getDefault().getSeparator() + ex + FileSystems.getDefault().getSeparator())) {
                                    return;
                                }
                            }

                            long size = Files.size(file);
                            if (size > properties.getFileScannerMaxFileSizeBytes()) {
                                logger.debug("Skipping large file {} ({} bytes)", file, size);
                                return;
                            }

                            String content = readFileSafely(file);

                             if (isCodeFile(file)) {
                                String language = detectLanguage(file);
                                codeFiles.add(new CodeFile(CodeFile.Type.CODE, language, content, null));
                            } else if (isSqlFile(file)) {
                                String dialect = detectSqlDialect(content);
                                codeFiles.add(new CodeFile(CodeFile.Type.SQL, null, content, dialect));
                            }

                        } catch (IOException e) {
                            logger.warn("Failed to read file: {} - {}", file, e.getMessage());
                        }
                    });
        }

        return codeFiles;
    }

    private String readFileSafely(Path file) throws IOException {
        byte[] bytes = Files.readAllBytes(file);
        CharsetDecoder decoder = StandardCharsets.UTF_8.newDecoder()
                .onMalformedInput(CodingErrorAction.REPLACE)
                .onUnmappableCharacter(CodingErrorAction.REPLACE);
        return decoder.decode(ByteBuffer.wrap(bytes)).toString();
    }

    // Placeholder methods – implement your logic
    private boolean isCodeFile(Path file) {
        String name = file.toString().toLowerCase();
        return name.endsWith(".java") || name.endsWith(".py") || name.endsWith(".js") || name.endsWith(".ts") || name.endsWith(".go");
    }

    private boolean isSqlFile(Path file) {
        return file.toString().toLowerCase().endsWith(".sql");
    }

    private String detectLanguage(Path file) {
        String name = file.toString().toLowerCase();
        if (name.endsWith(".java")) return "java";
        if (name.endsWith(".py")) return "python";
        if (name.endsWith(".js")) return "javascript";
        if (name.endsWith(".ts")) return "typescript";
        if (name.endsWith(".go")) return "go";
        return "unknown";
    }

    private String detectSqlDialect(String content) {
        // Very naive detection; improve as needed
        String lower = content.toLowerCase();
        if (lower.contains("oracle")) return "oracle";
        if (lower.contains("mysql")) return "mysql";
        return "unknown";
    }
}
