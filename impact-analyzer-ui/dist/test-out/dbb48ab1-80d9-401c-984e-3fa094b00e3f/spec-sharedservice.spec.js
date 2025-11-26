import {
  Sharedservice,
  init_sharedservice
} from "./chunk-DZTESG6R.js";
import {
  TestBed,
  init_testing
} from "./chunk-SUDYP63D.js";
import "./chunk-GGUFBIL7.js";

// src/app/services/sharedservice.spec.ts
init_testing();
init_sharedservice();
describe("Sharedservice", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharedservice);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should emit data via openPanelold", (done) => {
    const testMsg = [
      { sender: "user", text: "Hello", timestamp: /* @__PURE__ */ new Date() }
    ];
    service.panelData$.subscribe((data) => {
      expect(data).toEqual(testMsg);
      done();
    });
    service.openPanelold(testMsg);
  });
  it("should emit data via openPanel", (done) => {
    const testData = { graphData: [], testPlan: "plan" };
    service.panelData$.subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });
    service.openPanel(testData);
  });
});
//# sourceMappingURL=spec-sharedservice.spec.js.map
