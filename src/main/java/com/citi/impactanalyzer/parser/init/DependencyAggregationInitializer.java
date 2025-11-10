package com.citi.impactanalyzer.parser.init;

import com.citi.impactanalyzer.graph.service.GraphService;
import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import com.citi.impactanalyzer.parser.service.DependencyAggregationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.concurrent.CompletableFuture;

@Component("dependencyAggregationInitializer")
public class DependencyAggregationInitializer {

    private static final Logger logger = LoggerFactory.getLogger(DependencyAggregationInitializer.class);

    private final DependencyAggregationService aggregationService;
    private final GraphService graphService;
    private final DependencyAnalyzerProperties properties;

    @Value("${graph.json.path:build/analysis/dependency-graph.json}")
    private String graphJsonPath;

    public DependencyAggregationInitializer(DependencyAggregationService aggregationService, GraphService graphService, DependencyAnalyzerProperties properties) {
        this.aggregationService = aggregationService;
        this.graphService = graphService;
        this.properties = properties;
    }

    @PostConstruct
    public void init() {
        if (!properties.isDependencyAggregationEnabled()) {
            logger.info("Dependency aggregation disabled via configuration (analyzer.dependency-aggregation-enabled=false)");
            return;
        }

        if (properties.isDependencyAggregationAsync()) {
            logger.info("Starting dependency aggregation asynchronously");
            CompletableFuture.runAsync(() -> runAggregationAndBuild());
        } else {
            logger.info("Starting dependency aggregation synchronously");
            runAggregationAndBuild();
        }
    }

    private void runAggregationAndBuild() {
        try {
            aggregationService.generateDependencyGraph();
            logger.info("Dependency aggregation completed; attempting to build in-memory graph from JSON: {}", graphJsonPath);

            File jsonFile = new File(graphJsonPath);
            if (jsonFile.exists() && jsonFile.length() > 0) {
                graphService.buildGraphFromJson(jsonFile);
                logger.info("In-memory graph successfully built from JSON.");
            } else {
                logger.warn("Dependency JSON not found or empty at {} after aggregation; skipping graph build", graphJsonPath);
            }

        } catch (Exception e) {
            logger.error("Dependency aggregation initializer failed", e);
        }
    }
}
