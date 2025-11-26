import {
  HttpClient,
  init_http
} from "./chunk-2JYLQ5V4.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-SUDYP63D.js";
import {
  __esm
} from "./chunk-GGUFBIL7.js";

// src/app/services/chatservice.ts
var Chatservice;
var init_chatservice = __esm({
  "src/app/services/chatservice.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    Chatservice = class Chatservice2 {
      http;
      API_URL = "http://localhost:8080/api/chat/impactanalyser";
      constructor(http) {
        this.http = http;
      }
      sendToBackend(msg) {
        return this.http.post(this.API_URL, { text: msg });
      }
      getPromptResponse(msg) {
        return this.http.post(this.API_URL + "?sessionId=131242", { text: msg });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Chatservice = __decorate([
      Injectable({ providedIn: "root" })
    ], Chatservice);
  }
});

export {
  Chatservice,
  init_chatservice
};
//# sourceMappingURL=chunk-YOLOB6E4.js.map
