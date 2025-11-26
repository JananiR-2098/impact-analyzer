import {
  Injectable,
  Subject,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-SUDYP63D.js";
import {
  __esm
} from "./chunk-GGUFBIL7.js";

// src/app/services/sharedservice.ts
var Sharedservice;
var init_sharedservice = __esm({
  "src/app/services/sharedservice.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    Sharedservice = class Sharedservice2 {
      panelDataSource = new Subject();
      panelData$ = this.panelDataSource.asObservable();
      panelOutputSource = new Subject();
      panelOutput$ = this.panelOutputSource.asObservable();
      openPanelold(msg) {
        this.panelDataSource.next(msg);
      }
      openPanel(data) {
        console.log("Shared Service - Opening panel with data:", data);
        this.panelDataSource.next(data);
      }
    };
    Sharedservice = __decorate([
      Injectable({ providedIn: "root" })
    ], Sharedservice);
  }
});

export {
  Sharedservice,
  init_sharedservice
};
//# sourceMappingURL=chunk-DZTESG6R.js.map
