package com.citi.impactanalyzer.graph.domain;

import java.util.List;

public class NgxGraphResponse {

    private final List<NgxNode> nodes;
    private final List<NgxLink> links;

    public NgxGraphResponse(List<NgxNode> nodes, List<NgxLink> links) {
        this.nodes = nodes != null ? nodes : List.of();
        this.links = links != null ? links : List.of();
    }

    public List<NgxNode> getNodes() { return nodes; }
    public List<NgxLink> getLinks() { return links; }

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

        public NgxLink(String source, String target) {
            this(source, target, "depends");
        }

        public NgxLink(String source, String target, String label) {
            this.source = source;
            this.target = target;
            this.label = label;
        }

        public String getSource() { return source; }
        public String getTarget() { return target; }
        public String getLabel() { return label; }
    }
}
