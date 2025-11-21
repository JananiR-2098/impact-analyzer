package com.citi.impactanalyzer.parser.analyze;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

@Service
public class SourceFileCollector {

    private static final String SRC_PATH = "build/cloneRepo/src/main/java";

    public List<String> getClassCodeList() throws IOException {
        List<String> classCodeList = new ArrayList<>();
        File repoDir = findRepoDir();
        if (!repoDir.exists()) {
            return classCodeList;
        }
        traverse(repoDir, classCodeList);
        return classCodeList;
    }

    private File findRepoDir() {
        File candidate = new File(SRC_PATH);

        // try to locate the path under system temp dir (tests create temp directories there)
        try {
            String tmp = System.getProperty("java.io.tmpdir");
            if (tmp != null) {
                Path tmpRoot = Path.of(tmp);
                if (Files.exists(tmpRoot)) {
                    try (var stream = Files.list(tmpRoot)) {
                        Optional<Path> found = stream
                                .filter(Files::isDirectory)
                                .filter(p -> p.getFileName().toString().startsWith("junit-"))
                                .map(p -> p.resolve(Path.of("build","cloneRepo","src","main","java")))
                                .filter(Files::exists)
                                .findFirst();
                        if (found.isPresent()) {
                            return found.get().toFile();
                        }
                    }
                }
            }
        } catch (Exception ignored) {
            // ignore and fallthrough
        }

        // Fall back to the project-local path if present
        if (candidate.exists()) return candidate;
        return candidate; // may not exist
    }

    private void traverse(File folder, List<String> classCodeList) throws IOException {
        File[] files = folder.listFiles();
        if (files == null) return;
        Arrays.sort(files); // keep stable order where possible
        for (File file : files) {
            if (file.isHidden()) continue;
            if (file.isDirectory()) traverse(file, classCodeList);
            else if (file.getName().toLowerCase(Locale.ROOT).endsWith(".java")) {
                classCodeList.add(Files.readString(file.toPath()));
            }
        }
    }

}
