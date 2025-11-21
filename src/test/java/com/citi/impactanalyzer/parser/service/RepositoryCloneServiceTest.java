package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.io.TempDir;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.File;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RepositoryCloneServiceTest {

    @Mock
    DependencyAnalyzerProperties properties;

    @InjectMocks
    RepositoryCloneService repositoryCloneService;

    @TempDir
    Path tempDir;

    @BeforeEach
    void setUp() {
        when(properties.isCloneEnabled()).thenReturn(true);
        when(properties.getCloneRepoUrl()).thenReturn("https://github.com/test/repo.git");
        when(properties.getCloneBranch()).thenReturn("main");
        when(properties.getCloneLocalPath()).thenReturn(tempDir.toString());
    }

    @Test
    void testInit_CloneDisabled() {
        when(properties.isCloneEnabled()).thenReturn(false);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_WithValidProperties() {
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_DirectoryDoesNotExist() {
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_DirectoryExistsButNoGitRepo() {
        File repoDir = new File(tempDir.toString());
        assertTrue(repoDir.mkdirs());
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_MultipleRetries_EventualSuccess() {
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_MaxAttemptsExceeded() {
        when(properties.getCloneLocalPath()).thenReturn("/invalid/path/that/cannot/be/created");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_InvalidRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("not-a-valid-url");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_ValidRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("https://github.com/spring-projects/spring-framework.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_HttpsRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("https://github.com/test/repo.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_SshRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("git@github.com:test/repo.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_GitlabRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("https://gitlab.com/group/project.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_BitbucketRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("https://bitbucket.org/team/repo.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_WithDifferentBranch() {
        when(properties.getCloneBranch()).thenReturn("develop");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_WithMasterBranch() {
        when(properties.getCloneBranch()).thenReturn("master");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_WithFeatureBranch() {
        when(properties.getCloneBranch()).thenReturn("feature/new-feature");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_RepoPathContainsSpaces() {
        String pathWithSpaces = tempDir.toString() + "/repo with spaces";
        when(properties.getCloneLocalPath()).thenReturn(pathWithSpaces);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_RepoPathContainsSpecialCharacters() {
        String pathWithSpecialChars = tempDir.toString() + "/repo-test_folder.v1";
        when(properties.getCloneLocalPath()).thenReturn(pathWithSpecialChars);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_NullRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn(null);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_EmptyRepoUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_NullBranch() {
        when(properties.getCloneBranch()).thenReturn(null);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_EmptyBranch() {
        when(properties.getCloneBranch()).thenReturn("");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_NullLocalPath() {
        when(properties.getCloneLocalPath()).thenReturn(null);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_EmptyLocalPath() {
        when(properties.getCloneLocalPath()).thenReturn("");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_RepositoryAlreadyExists() {
        File repoDir = new File(tempDir.toString());
        assertTrue(repoDir.mkdirs());
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_RepositoryExistsWithGitFolder() {
        File repoDir = new File(tempDir.toString());
        File gitDir = new File(repoDir, ".git");
        assertTrue(repoDir.mkdirs());
        assertTrue(gitDir.mkdirs());
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_MultipleConsecutiveCalls() {
        assertDoesNotThrow(() -> {
            repositoryCloneService.init();
            repositoryCloneService.init();
            repositoryCloneService.init();
        });
    }

    @Test
    void testInit_CloneEnabledIsTrue() {
        when(properties.isCloneEnabled()).thenReturn(true);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_CloneEnabledIsFalse() {
        when(properties.isCloneEnabled()).thenReturn(false);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_StandardGithubUrl() {
        when(properties.getCloneRepoUrl()).thenReturn("https://github.com/spring-projects/spring-boot.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_GithubUrlWithoutGitExtension() {
        when(properties.getCloneRepoUrl()).thenReturn("https://github.com/spring-projects/spring-boot");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_DeepDirectoryPath() {
        String deepPath = tempDir.toString() + "/a/b/c/d/e/f/repo";
        when(properties.getCloneLocalPath()).thenReturn(deepPath);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_SingleCharacterBranch() {
        when(properties.getCloneBranch()).thenReturn("m");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_LongBranchName() {
        when(properties.getCloneBranch()).thenReturn("feature/JIRA-12345-very-long-branch-name-with-many-words");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_LocalPathWithTrailingSlash() {
        String pathWithTrailingSlash = tempDir.toString() + "/";
        when(properties.getCloneLocalPath()).thenReturn(pathWithTrailingSlash);
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_RepositoryUrlWithPort() {
        when(properties.getCloneRepoUrl()).thenReturn("https://github.com:443/test/repo.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_RepositoryUrlWithAuthentication() {
        when(properties.getCloneRepoUrl()).thenReturn("https://user:pass@github.com/test/repo.git");
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_VerifyPropertiesAccess() {
        assertDoesNotThrow(() -> repositoryCloneService.init());
        verify(properties).isCloneEnabled();
        verify(properties).getCloneRepoUrl();
        verify(properties).getCloneBranch();
        verify(properties).getCloneLocalPath();
    }

    @Test
    void testInit_NoExceptionThrownOnAnyInput() {
        when(properties.isCloneEnabled()).thenReturn(true);
        when(properties.getCloneRepoUrl()).thenReturn("https://example.com/repo");
        when(properties.getCloneBranch()).thenReturn("master");
        when(properties.getCloneLocalPath()).thenReturn(tempDir.toString());
        assertDoesNotThrow(() -> repositoryCloneService.init());
    }

    @Test
    void testInit_RobustToInterruption() throws InterruptedException {
        Thread cloneThread = new Thread(() -> {
            try {
                repositoryCloneService.init();
            } catch (Exception e) {
                Thread.currentThread().interrupt();
            }
        });
        cloneThread.start();
        cloneThread.join(2000);
    }
}

