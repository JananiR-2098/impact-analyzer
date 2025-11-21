package com.citi.impactanalyzer.graph.domain;

import java.util.List;

public class NgxGraphMultiResponse {
    private final List<NgxGraphResponse> graphs;
    private final NgxTestPlan testPlan;

    public NgxGraphMultiResponse(List<NgxGraphResponse> graphs, NgxTestPlan testPlan) {
        this.graphs = graphs != null ? graphs : List.of();
        this.testPlan = testPlan;
    }

    public List<NgxGraphResponse> getGraphs() {
        return graphs;
    }

    public NgxTestPlan getTestPlan() {
        return testPlan;
    }

    public static class NgxTestPlan {
        private final String Title;
        private final String testPlan;

        public NgxTestPlan(String title, String testPlan) {
            Title = title;
            this.testPlan = testPlan;
        }

        public String getTitle() {
            return Title;
        }

        public String getTestPlan() {
            return testPlan;
        }
    }
}
