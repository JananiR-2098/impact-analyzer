package com.citi.impactanalyzer.graph.config;

import com.citi.impactanalyzer.graph.domain.DependencyGraph;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GraphConfig {

    @Bean
    public DependencyGraph dependencyGraph() {
        return new DependencyGraph();
    }
}
