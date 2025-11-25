package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.transport.URIish;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@Service
public class RepositoryCloneService {

    private static final Logger logger = LoggerFactory.getLogger(RepositoryCloneService.class);
    private static final int MAX_ATTEMPTS = 3;

    private final DependencyAnalyzerProperties properties;

    public RepositoryCloneService(DependencyAnalyzerProperties properties) {
        this.properties = properties;
    }

    public void cloneRepo() {
        if (!properties.isCloneEnabled()) {
            logger.info("Repository clone disabled via configuration (analyzer.clone-enabled=false)");
            return;
        }

        String repoUrl = properties.getCloneRepoUrl();
        File repoDir = new File(properties.getCloneLocalPath());

        for (int attempts = 1; true; attempts++) {
            try {
                if (isExistingRepository(repoDir)) {
                    updateExistingRepo(repoDir, repoUrl);
                } else {
                    cloneNewRepo(repoDir, repoUrl, properties.getCloneBranch());
                }

                return;
            } catch (URISyntaxException e) {
                logger.error("Invalid repository URL: {}", repoUrl, e);
                return;
            } catch (GitAPIException | IOException e) {
                handleGitFailure(attempts, repoUrl, e);
                if (attempts >= MAX_ATTEMPTS) {
                    return;
                }
            }
        }
    }

    private boolean isExistingRepository(File repoDir) {
        return repoDir.exists() && new File(repoDir, ".git").exists();
    }


    private void updateExistingRepo(File repoDir, String repoUrl) throws IOException, GitAPIException, URISyntaxException {
        try (Git git = Git.open(repoDir)) {
            String remoteUrl = git.getRepository().getConfig().getString("remote", "origin", "url");

            if (remoteUrl == null || remoteUrl.isEmpty()) {
                git.remoteAdd()
                        .setName("origin")
                        .setUri(new URIish(repoUrl))
                        .call();
            }

            logger.info("Pulling latest changes from {}", repoUrl);
            git.pull().call();
        }
    }


    private void cloneNewRepo(File repoDir, String repoUrl, String branch) throws GitAPIException {
        logger.info("Cloning repository from {} to {}", repoUrl, repoDir.getAbsolutePath());
        Git.cloneRepository()
                .setURI(repoUrl)
                .setBranch(branch)
                .setDirectory(repoDir)
                .call()
                .close();
        logger.info("Clone completed successfully");
    }


    private void handleGitFailure(int attempts, String repoUrl, Exception e) {
        logger.error("Git operation failed on attempt {}/{}: {}", attempts, MAX_ATTEMPTS, e.getMessage());

        if (attempts >= MAX_ATTEMPTS) {
            logger.error("Exceeded max clone attempts for {}; continuing without cloned repo", repoUrl, e);
        } else {
            try {

                Thread.sleep(1000L * attempts);
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
                logger.warn("Interrupted while waiting to retry clone");
                throw new RepositoryCloneException("Clone retry interrupted.", ie);
            }
        }
    }
}


class RepositoryCloneException extends RuntimeException {
    public RepositoryCloneException(String message, Throwable cause) {
        super(message, cause);
    }
}