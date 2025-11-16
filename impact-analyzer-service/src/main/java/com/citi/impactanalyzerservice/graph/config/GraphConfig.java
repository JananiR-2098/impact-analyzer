package com.citi.impactanalyzerservice.graph.config;

import com.citi.impactanalyzerservice.graph.domain.DependencyGraph;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GraphConfig {

    @Bean
    public DependencyGraph dependencyGraph() {
        return new DependencyGraph();
    }
}
