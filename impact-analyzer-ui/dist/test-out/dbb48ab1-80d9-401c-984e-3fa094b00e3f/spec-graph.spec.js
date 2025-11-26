import {
  Graph,
  init_graph
} from "./chunk-ETWESAIJ.js";
import "./chunk-YTZC332H.js";
import "./chunk-76VL7ASK.js";
import {
  TestBed,
  init_testing
} from "./chunk-SUDYP63D.js";
import {
  __async,
  __commonJS
} from "./chunk-GGUFBIL7.js";

// src/app/graph/graph.spec.ts
var require_graph_spec = __commonJS({
  "src/app/graph/graph.spec.ts"(exports) {
    init_testing();
    init_graph();
    describe("Graph", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Graph]
        }).compileComponents();
        fixture = TestBed.createComponent(Graph);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_graph_spec();
//# sourceMappingURL=spec-graph.spec.js.map
