package com.citi.impactanalyzerservice.parser.analyze;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.*;

@Service
public class SourceFileCollector {

    private static final String SRC_PATH = "build/cloneRepo/src/main/java";

    public List<String> getClassCodeList() throws IOException {
        List<String> classCodeList = new ArrayList<>();
        File repoDir = new File(SRC_PATH);
        traverse(repoDir, classCodeList);
        return classCodeList;
    }

    private void traverse(File folder, List<String> classCodeList) throws IOException {
        for (File file : Objects.requireNonNull(folder.listFiles())) {
            if (file.isDirectory()) traverse(file, classCodeList);
            else if (file.getName().endsWith(".java")) {
                classCodeList.add(Files.readString(file.toPath()));
            }
        }
    }

}

