import { GraphResponse } from "./graph-response";

export interface PromptResponse {
  graphResponse: any;
  promptMessage: string;
  graphData: GraphResponse;
  testPlan: string;
}