package com.citi.impactanalyzer.graph.domain;

public class EdgeMetadata {
    private boolean critical;

    public EdgeMetadata() {
        this.critical = false;
    }

    public boolean isCritical() {
        return critical;
    }

    public void setCritical(boolean critical) {
        this.critical = critical;
    }

}

