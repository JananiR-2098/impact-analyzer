package com.citi.impactanalyzer.graph.domain;

import java.util.List;

public class NgxGraphMultiResponse {
    private final List<NgxGraphResponse> graphs;
    private final NgxTestPlan testPlan;
    private final NgxRepo repo;

    public NgxGraphMultiResponse(List<NgxGraphResponse> graphs, NgxTestPlan testPlan, NgxRepo repo) {
        this.graphs = graphs != null ? graphs : List.of();
        this.testPlan = testPlan;
        this.repo = repo;
    }

    public List<NgxGraphResponse> getGraphs() {
        return graphs;
    }

    public NgxTestPlan getTestPlan() {
        return testPlan;
    }

    public NgxRepo getRepo() {
        return repo;
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

    public static class NgxRepo {
        private final String Title;
        private final String repo;

        public NgxRepo(String title, String repo) {
            this.Title = title;
            this.repo = repo;
        }

        public String getTitle() {
            return Title;
        }

        public String getRepo() {
            return repo;
        }
    }
}
