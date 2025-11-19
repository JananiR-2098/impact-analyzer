package com.citi.impactanalyzer.graph.domain;

import java.util.List;

public class NgxGraphMultiResponse {
    private final List<NgxGraphResponse> graphs;

    public NgxGraphMultiResponse(List<NgxGraphResponse> graphs) {
        this.graphs = graphs != null ? graphs : List.of();
    }

    public List<NgxGraphResponse> getGraphs() {
        return graphs;
    }
}
