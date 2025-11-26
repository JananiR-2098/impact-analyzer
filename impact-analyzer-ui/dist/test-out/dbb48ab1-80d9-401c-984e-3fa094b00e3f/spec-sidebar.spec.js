import {
  SidebarComponent,
  init_sidebar
} from "./chunk-NWRTRRGA.js";
import "./chunk-KUSPHE5X.js";
import "./chunk-ETWESAIJ.js";
import "./chunk-2JYLQ5V4.js";
import "./chunk-DZTESG6R.js";
import "./chunk-CXVR4RNQ.js";
import "./chunk-YTZC332H.js";
import "./chunk-76VL7ASK.js";
import {
  TestBed,
  init_testing
} from "./chunk-SUDYP63D.js";
import "./chunk-2X73HGYV.js";
import {
  __async,
  __commonJS
} from "./chunk-GGUFBIL7.js";

// src/app/sidebar/sidebar.spec.ts
var require_sidebar_spec = __commonJS({
  "src/app/sidebar/sidebar.spec.ts"(exports) {
    init_testing();
    init_sidebar();
    describe("SidebarComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [SidebarComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_sidebar_spec();
//# sourceMappingURL=spec-sidebar.spec.js.map
