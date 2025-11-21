import { GraphResponse } from "./graph-response";
import { Testplan } from "./testplan";
import { RepoName } from "./reponame";


export interface PromptResponse {
  graphs: GraphResponse[];
  testPlan: Testplan;
  repo: RepoName;
}