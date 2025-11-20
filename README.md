Impact Analyzer
===============

What this project does
----------------------
Impact Analyzer builds a dependency graph for a codebase by scanning source files, calling an LLM-based analyser to extract dependencies, writing a JSON dependency graph, and loading that JSON into an in-memory graph for traversal and visualization.

Quick status
------------
- Dependency aggregation (scan -> LLM -> JSON) is implemented in `com.citi.impactanalyzer.parser.service.DependencyAggregationService` and is invoked at startup by `com.citi.impactanalyzer.parser.init.DependencyAggregationInitializer` by default.
- The in-memory graph is represented by `com.citi.impactanalyzer.graph.domain.DependencyGraph` and populated by `GraphService.buildGraphFromJson(File)` after the JSON is generated.
- The HTTP API exposes endpoints under `/graph` (see `GraphTraversalController`).
- Impact analysis and prompt-based queries are handled by the analyzer package:
  - `com.citi.impactanalyzer.analyzer.service.PromptAnalysisService` provides core logic for prompt analysis and test plan generation.
  - `com.citi.impactanalyzer.analyzer.controller.PromptAnalysisController` exposes REST endpoints for impact analysis and test plan generation under `/promptAnalyzer`.
- The frontend UI is built with Angular and communicates with the backend APIs for graph visualization and impact analysis.
- AI integration is achieved using LangChain4j and Vertex AI for advanced code analysis and prompt handling.

Quick local setup (for new developers)
-------------------------------------
This section gives a minimal, practical set of steps so a new developer can run the project locally and iterate quickly.

Prerequisites
- Java 11+ installed and available on PATH.
- Git (optional, used if you enable automatic cloning).
- (Optional) Access to an LLM provider if you want to run the real LLM-based dependency extraction. If you don't have LLM access, you can disable aggregation and place a pre-generated JSON in `build/analysis/dependency-graph.json`.
- If you use Vertex AI or other Google Cloud services locally, set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to point to your service account JSON key file.
   - Create or download a JSON key for a service account with the required Vertex AI permissions and save it somewhere secure on your machine (example: `C:\keys\vertex-key.json` or `/home/user/.keys/vertex-key.json`).
   - Windows GUI ("Edit environment variable for your account")
     - Variable name: GOOGLE_APPLICATION_CREDENTIALS
     - Variable value: C:\keys\vertex-key.json

1) Clone the repo (if you haven't already)

```bash
git clone <your-repo-url>
cd impact-analyzer
```

2) Inspect / tune properties
- Open `src/main/resources/application.properties`. Defaults are provided for the analyzer settings (see `analyzer.*` keys).
- Key properties you may want to change for local development:
  - `analyzer.clone-enabled` (default: false) — enable to auto-clone the configured repo on startup.
  - `analyzer.clone-repo-url` / `analyzer.clone-branch` / `analyzer.clone-local-path` — repository settings for cloning.
  - `analyzer.base-package` — the project's base package used in LLM prompts (set to your codebase root package for best results).
  - `analyzer.dependency-aggregation-async` — true to run aggregation in background and let the app start immediately; false to block until aggregation completes.

3) (Optional) Enable cloning and run
- To let the app clone a sample repo on startup (useful for first-time runs), set `analyzer.clone-enabled=true` in `application.properties` or pass it on the command line (example below).

4) Run the app using Gradle wrapper (Windows cmd.exe)

Run with defaults (no cloning unless enabled in properties):

```bat
cd "C:\Users\IdeaProjects\impact-analyzer"
gradlew.bat build
gradlew.bat bootRun
```

Run and enable cloning via command-line args (one-liner):

```bat
gradlew.bat bootRun --args="--analyzer.clone-enabled=true --analyzer.clone-repo-url=https://github.com/your-org/your-repo --analyzer.dependency-aggregation-async=false"
```

If you want to disable aggregation (for example, when you don't have an LLM configured):

```bat
gradlew.bat bootRun --args="--analyzer.dependency-aggregation-enabled=false"
```

5) What to expect on startup
- If cloning is enabled, the configured repo will be cloned/pulled into `build/cloneRepo` (configurable).
- If aggregation is enabled, the application will scan files, call the LLM for dependency extraction, write `build/analysis/dependency-graph.json`, and then load that JSON into the in-memory graph.
- If `analyzer.dependency-aggregation-async=true` the app will start while aggregation runs in the background. If false, startup will wait for aggregation to finish.

6) Inspect outputs and use the API
- **Generated Outputs:**
  - Dependency graph JSON: `build/analysis/dependency-graph.json`
  - NGX graph JSON for Impacted modules: Generated dynamically via the `/promptAnalyzer/impactedModules` endpoint.

- **API Endpoints:**
  - **Analyze Impacted Modules and Generate Test Plan:**
    - **Endpoint:** `/promptAnalyzer/impactedModules`
    - **Method:** `POST`
    - **Parameters:**
      - `sessionId` (query param): Unique session identifier.
      - `prompt` (body): The textual prompt to analyze.
    - **Response:** JSON object containing impacted modules and test plans.

- **Example Usage:**
  ```bash
  curl -X POST "http://localhost:8080/promptAnalyzer/impactedModules?sessionId=12345" \
       -H "Content-Type: application/json" \
       -d '{"prompt": "Analyze the impact of changing ServiceA"}'
  ```

Troubleshooting
- If the app fails at the LLM call step:
  - Disable aggregation temporarily: `--analyzer.dependency-aggregation-enabled=false` and restart.
  - Alternatively, add a dependency JSON at `build/analysis/dependency-graph.json` and restart; the GraphService will load it.
- If cloning fails due to network or authentication problems, set `analyzer.clone-enabled=false` and clone the repo manually outside the app into the configured `analyzer.clone-local-path`.
- If files are skipped by the scanner, check `analyzer.file-scanner-excludes` and `analyzer.file-scanner-max-file-size-bytes` settings.

Development tips
- Run in your IDE: open the project and run `com.citi.impactanalyzer.ImpactAnalyzerApplication`.
- For debugging LLM prompts, set `analyzer.dependency-aggregation-enabled=false` and call `PromptService` methods from unit tests or a small main to inspect raw outputs before sanitization.
- To avoid costs while iterating, keep `analyzer.dependency-aggregation-enabled=false` and work with a static `dependency-graph.json` sample.

Configuration (where to change things)
- `src/main/resources/application.properties` (defaults and example values)
- Per-environment overrides: consider creating `application-dev.properties` and `application-prod.properties` and setting profiles.

Where to look in the code
---------------------
- **Graph Service:**
  - `com.citi.impactanalyzer.graph.service.GraphService`
    - Provides methods to retrieve impacted modules and manage the dependency graph.

- **Graph Domain:**
  - `com.citi.impactanalyzer.graph.domain.NgxGraphResponse`
    - Represents the structure of the graph response, including nodes, links, and test plans.

- Parser / aggregation:
  - `com.citi.impactanalyzer.parser.clone.RepositoryCloneService` (optional, opt-in clone)
  - `com.citi.impactanalyzer.parser.service.CodeFileScannerService` (file discovery & reading)
  - `com.citi.impactanalyzer.parser.service.PromptService` (builds prompts)
  - `com.citi.impactanalyzer.parser.service.ChatClientService` (centralized chat client calls, retries)
  - `com.citi.impactanalyzer.parser.service.DependencyAggregationService` (aggregates dependencies & writes JSON)
  - `com.citi.impactanalyzer.parser.service.DependencyExtractionService` (validates and forwards content to LLM/prompt service)
  - `com.citi.impactanalyzer.parser.init.DependencyAggregationInitializer` (startup orchestration)

- Prompt Analyser   
- **Prompt Analysis Controller:**
    - `com.citi.impactanalyzer.analyzer.controller.PromptAnalysisController`
      - Exposes REST API endpoints for analyzing impacted modules and generating test plans.
      - Coordinates with `PromptAnalysisService` and `GraphService` to process requests.

  **Prompt Analysis Service:**
    - `com.citi.impactanalyzer.analyzer.service.PromptAnalysisService`
      - Handles the core logic for analyzing prompts and identifying impacted modules.
      - Integrates with the dependency graph and test plan generation.

Technologies Used
----------------

#### Backend
- **Java**:
  - Spring Boot for application development.
  - JUnit and Mockito for testing.
  - SLF4J for logging.
  - Jackson for JSON processing.
  - LangChain4j for AI-related functionalities.

- **Build Tool**:
  - Gradle for dependency management and build automation.

#### Frontend
- **Angular**:
  - Angular framework (version 20.x) for building the user interface.
  - Angular Material for UI components.

#### Additional Tools and Libraries
- **AI Integration**:
  - LangChain4j for embedding models and AI services.
  - Vertex AI for AI-based analysis.
