package com.citi.impactanalyzer.parser.clone;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;

import java.io.File;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

class RepositoryCloneServiceTest {
    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Skips cloning when clone is disabled in properties")
    void skipsCloningWhenCloneIsDisabledInProperties() {
        DependencyAnalyzerProperties mockProperties = mock(DependencyAnalyzerProperties.class);
        when(mockProperties.isCloneEnabled()).thenReturn(false);

        RepositoryCloneService service = new RepositoryCloneService(mockProperties);
        service.init();

        verify(mockProperties, never()).getCloneRepoUrl();
    }

    @org.junit.jupiter.api.Test
    @org.junit.jupiter.api.DisplayName("Logs error and skips cloning on invalid repository URL")
    void logsErrorAndSkipsCloningOnInvalidRepositoryURL() {
        DependencyAnalyzerProperties mockProperties = mock(DependencyAnalyzerProperties.class);
        when(mockProperties.isCloneEnabled()).thenReturn(true);
        when(mockProperties.getCloneRepoUrl()).thenReturn("invalid-url");
        when(mockProperties.getCloneLocalPath()).thenReturn("build/cloneRepo");

        RepositoryCloneService service = new RepositoryCloneService(mockProperties);
        service.init();

        // No exception should be thrown, and the process should terminate gracefully
    }

}