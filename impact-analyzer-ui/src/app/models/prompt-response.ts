import { GraphResponse } from "./graph-response";
import { Testplan } from "./testplan";

export interface PromptResponse {
  graphs: GraphResponse[];
  testPlan: Testplan;
}