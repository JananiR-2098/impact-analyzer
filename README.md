# MIA (Markets Solution Sculptors-Impact Analyzer)

## Overview
MIA (Markets Solution Sculptors-Impact Analyzer) is an AI-powered code analysis platform that helps developers, architects, and QA teams understand the impact of code changes across large, complex codebases. Leveraging advanced LLMs (Vertex AI, LangChain4j), it extracts dependencies, builds a navigable dependency graph, and provides prompt-driven impact analysis and automated test plan generation. The platform features a modern Angular UI for visualization and a robust Spring Boot backend for orchestration and analysis.

---

## Key Features
- **Automated Dependency Extraction:** Scans source code and uses LLMs to extract dependencies, generating a JSON graph.
- **Impact Analysis:** Accepts natural language prompts to identify impacted modules and generate test plans.
- **Graph Visualization:** Interactive UI to explore dependencies and impact paths.
- **Test Plan Generation:** AI-powered generation of test plans for impacted modules.
- **Download as PDF:** Option to download the dependency graph and test plan as PDF documents for sharing and offline review.
- **In-memory VectorDB Storage:** Uses VectorDB as an in-memory store to efficiently store and retrieve the graph JSON for fast analysis.
- **Chat Memory:** Maintains chat memory per session to provide conversational continuity and context-aware responses.
- **RESTful API:** Endpoints for impact analysis, graph traversal, and test plan generation.
- **Pluggable AI Integration:** Supports LangChain4j and Vertex AI for advanced code analysis.
- **Configurable Cloning:** Can auto-clone target repositories for analysis.

---

## Technical Stack

### Backend
- **Language:** Java 17
- **Framework:** Spring Boot 3.5.7
- **AI Integration:** Spring AI (Vertex AI Gemini, Core, BOM), LangChain4j (core, embeddings, Vertex AI Gemini)
- **Code Analysis:** JavaParser
- **Git Operations:** Eclipse JGit
- **Testing:** JUnit Platform, Spring Boot Starter Test
- **Development Tools:** Spring Boot DevTools

### Frontend
- **Framework:** Angular 20.x (core, material, cdk, forms, router)
- **Build Tools:** Angular CLI, Build, Compiler
- **Visualization:** @swimlane/ngx-charts, @swimlane/ngx-graph, d3
- **PDF & Image Export:** html2canvas, jspdf
- **Markdown Support:** marked
- **Reactive Programming:** rxjs
- **Language:** TypeScript 5.9.2
- **Testing:** Jasmine, Karma
- **Code Formatting:** Prettier

### Other
- **Dependency Management:** Gradle (backend), npm (frontend)
- **Diagramming:** draw.io (for architecture diagrams)
- **In-memory Storage:** VectorDB Embedding Model (semantic code search, graph storage)

---

## Architecture

The architecture of MIA (Markets Solution Sculptors-Impact-Analyzer) is designed for modularity, scalability, and seamless AI integration. Here’s how the system works:

- **User/Developer:** Interacts with the system via the Angular UI, submitting prompts or requests for impact analysis and test plan generation.
- **Angular UI:** Modern, interactive interface for visualizing dependency graphs, submitting prompts, and downloading reports. Communicates with the backend via REST APIs.
- **Spring Boot Backend:** Orchestrates the analysis workflow. Receives requests from the UI, manages session and chat memory, and coordinates code parsing, aggregation, and AI interactions.
- **Parser & Aggregator:** Scans the source code, builds prompts, and prepares data for analysis. Utilizes LLMs and embedding models for advanced code understanding.
- **LLM Integration (Vertex AI, LangChain4j):** Processes prompts and code context to extract dependencies, analyze impact, and generate test plans. Embedding models and VectorDB are used for semantic search and fast retrieval.
- **VectorDB (In-memory Store):** Stores the dependency graph JSON and supports fast, scalable graph queries and semantic search operations.
- **Dependency Graph Service:** Loads, manages, and updates the dependency graph in memory, supporting incremental updates and real-time analysis.
- **Prompt Analysis Service:** Handles prompt-driven impact analysis, test plan generation, and maintains chat memory for session continuity.
- **Controllers:** Expose REST endpoints for graph traversal, impact analysis, and test plan generation.
- **Storage:** Dependency graph and analysis results are stored as JSON files and can be exported as PDF reports.

**Data Flow:**
1. User submits a prompt or request via the UI.
2. UI sends the request to the backend REST API.
3. Backend parses the code, aggregates context, and interacts with LLMs/VectorDB.
4. Dependency graph is updated and stored in memory (VectorDB).
5. Impact analysis and test plan are generated and returned to the UI.
6. User can visualize results, download reports as PDF, and continue the session with chat memory.

**Solution Diagram:**
![High-Level Architecture](solution_diagram_updated_demo.jpg)
*Diagram created using draw.io*

---

## Setup & Execution

### Prerequisites
- Java 11+ (on PATH)
- Node.js & npm (for frontend)
- Git (for repo cloning)
- (Optional) Google Cloud credentials for Vertex AI

### Backend
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd impact-analyzer
   ```
2. **Configure properties:**
   - Edit `src/main/resources/application.properties` as needed (LLM, repo, aggregation, etc.)
3. **Build the backend:**
   ```powershell
   gradlew.bat build
   ```
4. **Run the backend:**
   ```powershell
   gradlew.bat bootRun
   ```
   - Main class: `com.citi.impactanalyzer.ImpactAnalyzerApplication`
   - Service runs at: `http://localhost:8081` (default)
5. **Run backend tests:**
   ```powershell
   gradlew.bat test
   ```
6. **Run with a specific profile (optional):**
   ```powershell
   gradlew.bat bootRun -Dspring.profiles.active=prod
   ```

### Frontend
For more details, see [impact-analyzer-ui/README.md](impact-analyzer-ui/README.md).

1. **Navigate to UI folder:**
   ```powershell
   cd impact-analyzer-ui
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```
3. **Run the frontend:**
   ```powershell
   ng serve --open
   ```
   - UI runs at: `http://localhost:4200`
4. **Build for production:**
   ```powershell
   ng build --configuration production
   ```
5. **Run frontend tests:**
   ```powershell
   ng test
   ```



## Vertex AI Setup Instructions
To enable Vertex AI integration for LLM-powered analysis:

1. **Google Cloud Account:**
   - Ensure you have a Google Cloud account with Vertex AI enabled.

2. **Create a Service Account:**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Navigate to IAM & Admin > Service Accounts.
   - Create a new service account with the Vertex AI User role (and any other required permissions).
   - Generate and download a JSON key for this service account.

3. **Set Environment Variable:**
   - On your development machine, set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the path of your service account JSON key.
   - **Windows (PowerShell):**
     ```powershell
     $env:GOOGLE_APPLICATION_CREDENTIALS="C:\path\to\vertex-key.json"
     ```
   - **Windows (System Environment Variable):**
     - Open System Properties > Environment Variables.
     - Add a new user or system variable:
       - Name: `GOOGLE_APPLICATION_CREDENTIALS`
       - Value: `C:\path\to\vertex-key.json`
   - **Linux/macOS:**
     ```bash
     export GOOGLE_APPLICATION_CREDENTIALS="/path/to/vertex-key.json"
     ```

4. **Configure application.properties:**
   - Set the relevant analyzer properties for Vertex AI in `src/main/resources/application.properties`:
     ```properties
     analyzer.llm-provider=vertexai
     analyzer.vertexai.project-id=<your-gcp-project-id>
     analyzer.vertexai.location=<vertexai-region>
     analyzer.vertexai.model=<vertexai-model-name>
     # Example: analyzer.vertexai.model=text-bison
     ```

5. **Test the Integration:**
   - Start the backend and trigger an analysis. Check logs for successful Vertex AI calls.
   - Troubleshoot authentication or permission errors as needed.

---

## Usage Guide
- **API Endpoints:**
  - `POST /promptAnalyzer/impactedModules` — Analyze impact of a prompt
  - `POST /promptAnalyzer/testPlan` — Generate test plan for impacted modules
  - `GET /graph` — Retrieve dependency graph
- **Example (Impact Analysis):**
  ```bash
  curl -X POST "http://localhost:8081/promptAnalyzer/impactedModules?sessionId=12345" \
       -H "Content-Type: application/json" \
       -d '{"prompt": "Analyze the impact of changing ServiceA"}'
  ```
- **UI:**
  - Access `http://localhost:4200` for interactive graph visualization and prompt-driven analysis.

---

## Contribution Guidelines
- Fork the repo and create feature branches (`feature/<name>`)
- Follow Java and Angular style guides
- Write unit/integration tests for new features
- Submit pull requests with clear descriptions
- Use conventional commit messages

---

## License

This project is licensed under the Apache 2.0 License. See [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0) for details.

---

## Team & Contact
**Team Name:** Market Solution Sculptors

Bhargavi Sivasankari — Team Member  
Janani R — Team Member  
Rohini Ravi — Team Member  
Kavitha M — Team Member  
Lakshmi Suryanarayanan — Team Member

---

## Troubleshooting
- If LLM calls fail, disable aggregation and use a static dependency graph JSON.
- If cloning fails, set `analyzer.clone-enabled=false` and clone manually.
- For environment issues, check Java, Node.js, and credentials.

---

## Extensibility & Future Features
This MVP is designed for extensibility. Potential future enhancements, prioritized for maximum enterprise and user impact, include:

- Integrate SSO authentication for the UI for secure, seamless access.
- Implement secure session management with automatic expiry to protect user sessions and data.
- Store chat memory per session for continuity and better user experience.
- Support webhook-based code change detection to trigger analysis automatically on code changes.
- Support on-demand code sync and re-scanning, allowing users to manually sync and re-scan codebases as needed.
- Implement incremental re-embedding of modified files for efficient updates.
- Auto-rebuild dependency graph when code updates occur to keep analysis up-to-date.
- Support more repository providers (GitHub, GitLab, Bitbucket, Azure) for broader integration.
- Support multiple repositories per project to analyze dependencies across several repositories.
- Add support for more programming languages/frameworks to expand analysis coverage.
- Provide flexible UI layout (dark mode, resizable panels) for enhanced user experience.
- Add on-click “Open in Repository” navigation for each graph node for quick code access.
- Add interactive graph controls (zoom, filter, search) to improve usability.
- Add user search history and recent analyses panel for quick access to past queries.
- Add configurable settings panel (model, temperature, language) for user customization.
- Store analysis history in a backend database for audit and review.
- Add ability to email or share analysis reports for collaboration and reporting.
- Provide a dashboard for past analyses and trends to visualize historical data and insights.

---

## Acknowledgements
- Spring Boot, Angular, Vertex AI, LangChain4j, and the open-source community.
