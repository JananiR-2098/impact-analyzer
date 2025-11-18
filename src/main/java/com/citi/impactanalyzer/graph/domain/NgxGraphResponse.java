package com.citi.impactanalyzer.graph.domain;

import java.util.List;

public class NgxGraphResponse {

    private final List<NgxNode> nodes;
    private final List<NgxLink> links;
    private final List<NgxTestPlan> testPlans;

    public NgxGraphResponse(List<NgxNode> nodes, List<NgxLink> links, List<NgxTestPlan> testPlans) {
        this.nodes = nodes != null ? nodes : List.of();
        this.links = links != null ? links : List.of();
        this.testPlans = testPlans != null ? testPlans : List.of();
    }

    public List<NgxNode> getNodes() { return nodes; }
    public List<NgxLink> getLinks() { return links; }
    public List<NgxTestPlan> getTestPlans() { return testPlans;}


    public static class NgxNode {
        private final String id;
        private final String label;

        public NgxNode(String id) {
            this(id, id);
        }

        public NgxNode(String id, String label) {
            this.id = id;
            this.label = label;
        }

        public String getId() { return id; }
        public String getLabel() { return label; }
    }

    public static class NgxLink {
        private final String source;
        private final String target;
        private final String label;
        private final boolean critical;

        public NgxLink(String source, String target) {
            this(source, target, "depends", false);
        }

        public NgxLink(String source, String target, String label) {
            this(source, target, label, false);
        }

        public NgxLink(String source, String target, String label, boolean critical) {
            this.source = source;
            this.target = target;
            this.label = label;
            this.critical = critical;
        }

        public String getSource() { return source; }
        public String getTarget() { return target; }
        public String getLabel() { return label; }
        public boolean isCritical() { return critical; }
    }

    public static class NgxTestPlan {
        private final String Title;
        private final String testPlan;

        public NgxTestPlan(String title, String testPlan) {
            Title = title;
            this.testPlan = testPlan;
        }
        public String getTitle() { return Title; }
        public String getTestPlan() { return testPlan; }
    }
}
