package com.citi.impactanalyzer.parser.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
@ConfigurationProperties(prefix = "analyzer")
public class DependencyAnalyzerProperties {

    private String baseDir; // moved default to application.properties

    private List<String> languages = new ArrayList<>(); // populated from properties

    private List<String> sqlDialects = new ArrayList<>(); // populated from properties

    private Map<String, String> paths = new HashMap<>();

    // New configurable properties (defaults moved to application.properties)
    private String basePackage;

    private boolean cloneEnabled;
    private String cloneRepoUrl;
    private String cloneBranch;
    private String cloneLocalPath;

    private long fileScannerMaxFileSizeBytes;
    private List<String> fileScannerExcludes = new ArrayList<>();

    private boolean dependencyAggregationEnabled;
    private boolean dependencyAggregationAsync;

    // Chat/LLM properties
    private long chatTimeoutMs;
    private int chatRetryCount;
    private long chatRetryDelayMs;

    // Graph/criticality properties
    private int graphCriticalInDegreeThreshold = 5; // default
    private boolean graphMarkCrossPackageCritical = true; // default

    public String getBaseDir() {
        return baseDir;
    }

    public void setBaseDir(String baseDir) {
        this.baseDir = baseDir;
    }

    public List<String> getLanguages() {
        return languages;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }

    public List<String> getSqlDialects() {
        return sqlDialects;
    }

    public void setSqlDialects(List<String> sqlDialects) {
        this.sqlDialects = sqlDialects;
    }

    public Map<String, String> getPaths() {
        return paths;
    }

    public void setPaths(Map<String, String> paths) {
        this.paths = paths;
    }

    // 🔹 Helper method to get subpath for a language
    public String getPathForLanguage(String lang) {
        return paths.get(lang);
    }

    // New getters/setters
    public String getBasePackage() {
        return basePackage;
    }

    public void setBasePackage(String basePackage) {
        this.basePackage = basePackage;
    }

    public boolean isCloneEnabled() {
        return cloneEnabled;
    }

    public void setCloneEnabled(boolean cloneEnabled) {
        this.cloneEnabled = cloneEnabled;
    }

    public String getCloneRepoUrl() {
        return cloneRepoUrl;
    }

    public void setCloneRepoUrl(String cloneRepoUrl) {
        this.cloneRepoUrl = cloneRepoUrl;
    }

    public String getCloneBranch() {
        return cloneBranch;
    }

    public void setCloneBranch(String cloneBranch) {
        this.cloneBranch = cloneBranch;
    }

    public String getCloneLocalPath() {
        return cloneLocalPath;
    }

    public void setCloneLocalPath(String cloneLocalPath) {
        this.cloneLocalPath = cloneLocalPath;
    }

    public long getFileScannerMaxFileSizeBytes() {
        return fileScannerMaxFileSizeBytes;
    }

    public void setFileScannerMaxFileSizeBytes(long fileScannerMaxFileSizeBytes) {
        this.fileScannerMaxFileSizeBytes = fileScannerMaxFileSizeBytes;
    }

    public List<String> getFileScannerExcludes() {
        return fileScannerExcludes;
    }

    public void setFileScannerExcludes(List<String> fileScannerExcludes) {
        this.fileScannerExcludes = fileScannerExcludes;
    }

    public boolean isDependencyAggregationEnabled() {
        return dependencyAggregationEnabled;
    }

    public void setDependencyAggregationEnabled(boolean dependencyAggregationEnabled) {
        this.dependencyAggregationEnabled = dependencyAggregationEnabled;
    }

    public boolean isDependencyAggregationAsync() {
        return dependencyAggregationAsync;
    }

    public void setDependencyAggregationAsync(boolean dependencyAggregationAsync) {
        this.dependencyAggregationAsync = dependencyAggregationAsync;
    }

    public long getChatTimeoutMs() {
        return chatTimeoutMs;
    }

    public void setChatTimeoutMs(long chatTimeoutMs) {
        this.chatTimeoutMs = chatTimeoutMs;
    }

    public int getChatRetryCount() {
        return chatRetryCount;
    }

    public void setChatRetryCount(int chatRetryCount) {
        this.chatRetryCount = chatRetryCount;
    }

    public long getChatRetryDelayMs() {
        return chatRetryDelayMs;
    }

    public void setChatRetryDelayMs(long chatRetryDelayMs) {
        this.chatRetryDelayMs = chatRetryDelayMs;
    }

    // Graph/criticality getters/setters
    public int getGraphCriticalInDegreeThreshold() {
        return graphCriticalInDegreeThreshold;
    }

    public void setGraphCriticalInDegreeThreshold(int graphCriticalInDegreeThreshold) {
        this.graphCriticalInDegreeThreshold = graphCriticalInDegreeThreshold;
    }

    public boolean isGraphMarkCrossPackageCritical() {
        return graphMarkCrossPackageCritical;
    }

    public void setGraphMarkCrossPackageCritical(boolean graphMarkCrossPackageCritical) {
        this.graphMarkCrossPackageCritical = graphMarkCrossPackageCritical;
    }
}
