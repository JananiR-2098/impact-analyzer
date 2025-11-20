package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.domain.CodeFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class BasePackageDetectorService {

    private static final Logger logger = LoggerFactory.getLogger(BasePackageDetectorService.class);
    private static final Pattern JAVA_PACKAGE_PATTERN = Pattern.compile("^\\s*package\\s+([a-zA-Z0-9_.]+)\\s*;");

    public String extractPackageFromJavaCode(String javaCode) {
        if (javaCode == null || javaCode.isBlank()) {
            return null;
        }

        Matcher matcher = JAVA_PACKAGE_PATTERN.matcher(javaCode);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return null;
    }


    public String detectBasePackage(List<CodeFile> codeFiles) {
        if (codeFiles == null || codeFiles.isEmpty()) {
            logger.warn("No code files provided for base package detection");
            return null;
        }

        Set<String> packages = new HashSet<>();

        for (CodeFile file : codeFiles) {
            if (file.getType() == CodeFile.Type.CODE && "java".equalsIgnoreCase(file.getLanguage())) {
                String pkg = extractPackageFromJavaCode(file.getContent());
                if (pkg != null && !pkg.isBlank()) {
                    packages.add(pkg);
                    logger.debug("Extracted package: {}", pkg);
                }
            }
        }

        if (packages.isEmpty()) {
            logger.warn("No packages found in scanned Java files");
            return null;
        }

        logger.info("Found {} unique packages in scanned files", packages.size());

        // Find the common base package (longest common prefix)
        String basePackage = findCommonBasePackage(packages);
        logger.info("Detected base package: {}", basePackage);

        return basePackage;
    }


    private String findCommonBasePackage(Set<String> packages) {
        if (packages == null || packages.isEmpty()) {
            return null;
        }

        List<String> sortedPackages = new ArrayList<>(packages);
        if (sortedPackages.size() == 1) {
            // Single package - use it as is
            return sortedPackages.get(0);
        }

        // Sort packages to find common prefix
        sortedPackages.sort(String::compareTo);

        String first = sortedPackages.get(0);
        String last = sortedPackages.get(sortedPackages.size() - 1);

        // Find common prefix between first and last
        StringBuilder commonPrefix = new StringBuilder();
        String[] firstParts = first.split("\\.");
        String[] lastParts = last.split("\\.");

        int minLength = Math.min(firstParts.length, lastParts.length);
        for (int i = 0; i < minLength; i++) {
            if (firstParts[i].equals(lastParts[i])) {
                if (!commonPrefix.isEmpty()) {
                    commonPrefix.append(".");
                }
                commonPrefix.append(firstParts[i]);
            } else {
                break;
            }
        }

        if (commonPrefix.isEmpty()) {
            logger.warn("No common base package found. Using first package: {}", first);
            return first;
        }

        return commonPrefix.toString();
    }
}

