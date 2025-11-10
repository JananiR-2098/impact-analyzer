package com.citi.impactanalyzer.parser.clone;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import jakarta.annotation.PostConstruct;
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

    private final DependencyAnalyzerProperties properties;

    public RepositoryCloneService(DependencyAnalyzerProperties properties) {
        this.properties = properties;
    }

    @PostConstruct
    public void init(){
        if (!properties.isCloneEnabled()) {
            logger.info("Repository clone disabled via configuration (analyzer.clone-enabled=false)");
            return;
        }

        String repoUrl = properties.getCloneRepoUrl();
        String branch = properties.getCloneBranch();
        File repoDir = new File(properties.getCloneLocalPath());

        int attempts = 0;
        int maxAttempts = 3;
        while (attempts < maxAttempts) {
            attempts++;
            try {
                if (repoDir.exists() && new File(repoDir, ".git").exists()) {
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
                } else {
                    logger.info("Cloning repository from {} to {}", repoUrl, repoDir.getAbsolutePath());
                    Git.cloneRepository()
                            .setURI(repoUrl)
                            .setBranch(branch)
                            .setDirectory(repoDir)
                            .call()
                            .close();
                    logger.info("Clone completed successfully");
                }

                // success
                break;

            } catch (GitAPIException | IOException e) {
                logger.error("Git operation failed on attempt {}/{}: {}", attempts, maxAttempts, e.getMessage());
                if (attempts >= maxAttempts) {
                    logger.error("Exceeded max clone attempts; continuing without cloned repo", e);
                } else {
                    try {
                        Thread.sleep(1000L * attempts);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        logger.warn("Interrupted while waiting to retry clone");
                        break;
                    }
                }
            } catch (URISyntaxException e) {
                logger.error("Invalid repository URL: {}", repoUrl, e);
                break;
            }
        }
    }
}

