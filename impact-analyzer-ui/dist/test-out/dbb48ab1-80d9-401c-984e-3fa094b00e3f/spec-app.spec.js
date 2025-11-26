import {
  MatIconModule,
  MatSidenavModule,
  SidebarComponent,
  Title,
  init_icon,
  init_platform_browser,
  init_sidebar,
  init_sidenav
} from "./chunk-NWRTRRGA.js";
import "./chunk-KUSPHE5X.js";
import "./chunk-ETWESAIJ.js";
import {
  Chatservice,
  init_chatservice
} from "./chunk-YOLOB6E4.js";
import "./chunk-2JYLQ5V4.js";
import {
  Sharedservice,
  init_sharedservice
} from "./chunk-DZTESG6R.js";
import "./chunk-CXVR4RNQ.js";
import {
  CommonModule,
  Location,
  getDOM,
  init_common
} from "./chunk-YTZC332H.js";
import "./chunk-76VL7ASK.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  Host,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgModuleFactory$1,
  Observable,
  Optional,
  Output,
  PendingTasksInternal,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TestBed,
  ViewChild,
  ViewContainerRef,
  __decorate,
  afterNextRender,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  concat,
  concatMap,
  core_exports,
  createEnvironmentInjector,
  defaultIfEmpty,
  defer,
  filter,
  finalize,
  first,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  input,
  isInjectable,
  isNgModule,
  isObservable,
  isPromise,
  isStandalone,
  isSubscribable,
  last,
  map,
  mergeMap,
  of,
  pipe,
  provideZonelessChangeDetection,
  refCount,
  reflectComponentType,
  resolveComponentResources,
  runInInjectionContext,
  scan,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  untracked,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-SUDYP63D.js";
import "./chunk-2X73HGYV.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-GGUFBIL7.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '<main class="main">\r\n    <div class="content">\r\n    <div class="container">\r\n        <div class="left-section" style="padding: 20px; display: flex; justify-content: center;">\r\n          <app-input-prompt [style.width.px]="chatBoxWidth" (messageSent)="onChatBoxMessageSent()">\r\n\r\n          </app-input-prompt>\r\n        </div>\r\n\r\n        <div class="right-section">\r\n          <app-sidebar></app-sidebar>\r\n        </div>\r\n\r\n      </div>\r\n\r\n  </div>\r\n</main>\r\n\r\n\r\n<router-outlet />\r\n';
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n.container {\n  display: flex;\n  height: 100vh;\n  min-height: 100vh;\n}\n.app-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b6b,\n      #a855f7 60%);\n  color: white;\n}\n.app-header-title {\n  font-weight: 600;\n}\n.left-section,\n.right-section {\n  flex: 1 1 50%;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// node_modules/@angular/router/fesm2022/router2.mjs
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return { consumed: segments.slice(0, parts.length), posParams };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i]))
      return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments))
    return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren)
    return false;
  for (const c in containee.children) {
    if (!container.children[c])
      return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams))
      return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths))
      return false;
    if (containee.hasChildren())
      return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams))
      return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths))
      return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams))
      return false;
    for (const c in containee.children) {
      if (!container.children[c])
        return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current))
      return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams))
      return false;
    if (!container.children[PRIMARY_OUTLET])
      return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length)
    return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], { [PRIMARY_OUTLET]: rootCandidate }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, { outlets }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") ;
        else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return { [PRIMARY_OUTLET]: commands };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = { match: false, pathIndex: 0, commandIndex: 0 };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length)
      return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0)
      break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path))
        return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path))
        return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo) {
      if (route.component || route.loadComponent) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
      }
      if (route.canMatch || route.canActivate) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and ${route.canMatch ? "canMatch" : "canActivate"} cannot be used together.Redirects happen before guards are executed.`);
      }
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes, outletName) {
  const sortedConfig = routes.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot)
    return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector)
      return route._loadedInjector;
    if (route?._injector)
      return route._injector;
  }
  return null;
}
function findNode(value, node) {
  if (value === node.value)
    return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2)
      return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value)
    return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const { routeConfig } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), { children }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
function redirectingNavigationError(urlSerializer, redirect) {
  const { redirectTo, navigationBehaviorOptions } = isUrlTree(redirect) ? { redirectTo: redirect, navigationBehaviorOptions: void 0 } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0)
    return null;
  return { node: p, guards: canActivateChild };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || isRedirect(result)) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const { targetSnapshot, currentSnapshot, guards: { canActivateChecks, canDeactivateChecks } } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), { guardsResult: true }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), { guardsResult })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0)
    return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0)
    return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (typeof result === "boolean")
      return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0)
    return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
function getRedirectResult(redirectTo, currentSnapshot, injector) {
  if (typeof redirectTo === "string") {
    return of(redirectTo);
  }
  const redirectToFn = redirectTo;
  const { queryParams, fragment, routeConfig, url, outlet, params, data, title } = currentSnapshot;
  return wrapIntoObservable(runInInjectionContext(injector, () => redirectToFn({ params, data, queryParams, fragment, routeConfig, url, outlet, title })));
}
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res)
    return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return { segmentGroup: s2, slicedSegments: [] };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return { segmentGroup: s2, slicedSegments };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return { segmentGroup: s, slicedSegments };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
  const res = {};
  for (const r of routes) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET)
      return -1;
    if (b.value.outlet === PRIMARY_OUTLET)
      return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({ state: targetSnapshot, tree: urlAfterRedirects }) => {
    return __spreadProps(__spreadValues({}, t), { targetSnapshot, urlAfterRedirects });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const { targetSnapshot, guards: { canActivateChecks } } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return defer(() => {
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
      futureARS._resolvedData = resolvedData;
      futureARS.data = __spreadValues(__spreadValues({}, futureARS.data), resolvedData);
      return null;
    }));
  });
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), map(() => data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(runInInjectionContext(parentInjector, () => route.loadChildren())).pipe(map(maybeUnwrapDefaultExport), switchMap(maybeResolveResources), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], { optional: true, self: true }).flat();
    }
    const routes = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes, route.path, requireStandaloneComponents);
    return { routes, injector };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input2) {
  return isWrappedDefaultExport(input2) ? input2["default"] : input2;
}
function maybeResolveResources(value) {
  if (typeof fetch === "function") {
    return resolveComponentResources(fetch).catch((error) => {
      console.error(error);
      return Promise.resolve();
    }).then(() => value);
  }
  return of(value);
}
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return 0;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? 2 : 1;
  }), filter(
    (result) => result !== 2
    /* NavigationResult.REDIRECTING */
  ), take(1)).subscribe(() => {
    action();
  });
}
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
var PRIMARY_OUTLET, RouteTitleKey, ParamsAsMap, pathCompareMap, paramCompareMap, UrlTree, UrlSegmentGroup, UrlSegment, UrlSerializer, DefaultUrlSerializer, DEFAULT_SERIALIZER, SEGMENT_RE, MATRIX_PARAM_SEGMENT_RE, QUERY_PARAM_RE, QUERY_PARAM_VALUE_RE, UrlParser, Navigation, Position, IMPERATIVE_NAVIGATION, EventType, RouterEvent, NavigationStart, NavigationEnd, NavigationCancellationCode, NavigationSkippedCode, NavigationCancel, NavigationSkipped, NavigationError, RoutesRecognized, GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd, RouteConfigLoadStart, RouteConfigLoadEnd, ChildActivationStart, ChildActivationEnd, ActivationStart, ActivationEnd, BeforeActivateRoutes, RedirectRequest, OutletContext, ChildrenOutletContexts, Tree, TreeNode, RouterState, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, ROUTER_OUTLET_DATA, RouterOutlet, OutletInjector, INPUT_BINDER, RoutedComponentInputBinder, \u0275EmptyOutletComponent, RedirectCommand, NAVIGATION_CANCELING_ERROR, warnedAboutUnsupportedInputBinding, activateRoutes, ActivateRoutes, CanActivate, CanDeactivate, INITIAL_VALUE, NoMatch, AbsoluteRedirect, ApplyRedirects, noMatch, NoLeftoversInUrl, MAX_ALLOWED_REDIRECTS, Recognizer, TitleStrategy, DefaultTitleStrategy, ROUTER_CONFIGURATION, ROUTES, RouterConfigLoader, UrlHandlingStrategy, DefaultUrlHandlingStrategy, CREATE_VIEW_TRANSITION, VIEW_TRANSITION_OPTIONS, NAVIGATION_ERROR_HANDLER, NavigationTransitions, RouteReuseStrategy, BaseRouteReuseStrategy, DefaultRouteReuseStrategy, StateManager, HistoryStateManager, exactMatchOptions, subsetMatchOptions, Router;
var init_router2 = __esm({
  "node_modules/@angular/router/fesm2022/router2.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_platform_browser();
    PRIMARY_OUTLET = "primary";
    RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
    ParamsAsMap = class {
      params;
      constructor(params) {
        this.params = params || {};
      }
      has(name) {
        return Object.prototype.hasOwnProperty.call(this.params, name);
      }
      get(name) {
        if (this.has(name)) {
          const v = this.params[name];
          return Array.isArray(v) ? v[0] : v;
        }
        return null;
      }
      getAll(name) {
        if (this.has(name)) {
          const v = this.params[name];
          return Array.isArray(v) ? v : [v];
        }
        return [];
      }
      get keys() {
        return Object.keys(this.params);
      }
    };
    pathCompareMap = {
      "exact": equalSegmentGroups,
      "subset": containsSegmentGroup
    };
    paramCompareMap = {
      "exact": equalParams,
      "subset": containsParams,
      "ignored": () => true
    };
    UrlTree = class {
      root;
      queryParams;
      fragment;
      /** @internal */
      _queryParamMap;
      constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (root.segments.length > 0) {
            throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
          }
        }
      }
      get queryParamMap() {
        this._queryParamMap ??= convertToParamMap(this.queryParams);
        return this._queryParamMap;
      }
      /** @docsNotRequired */
      toString() {
        return DEFAULT_SERIALIZER.serialize(this);
      }
    };
    UrlSegmentGroup = class {
      segments;
      children;
      /** The parent node in the url tree */
      parent = null;
      constructor(segments, children) {
        this.segments = segments;
        this.children = children;
        Object.values(children).forEach((v) => v.parent = this);
      }
      /** Whether the segment has child segments */
      hasChildren() {
        return this.numberOfChildren > 0;
      }
      /** Number of child segments */
      get numberOfChildren() {
        return Object.keys(this.children).length;
      }
      /** @docsNotRequired */
      toString() {
        return serializePaths(this);
      }
    };
    UrlSegment = class {
      path;
      parameters;
      /** @internal */
      _parameterMap;
      constructor(path, parameters) {
        this.path = path;
        this.parameters = parameters;
      }
      get parameterMap() {
        this._parameterMap ??= convertToParamMap(this.parameters);
        return this._parameterMap;
      }
      /** @docsNotRequired */
      toString() {
        return serializePath(this);
      }
    };
    UrlSerializer = class _UrlSerializer {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _UrlSerializer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _UrlSerializer, providedIn: "root", useFactory: () => new DefaultUrlSerializer() });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: UrlSerializer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => new DefaultUrlSerializer() }]
    }] });
    DefaultUrlSerializer = class {
      /** Parses a url into a `UrlTree` */
      parse(url) {
        const p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
      }
      /** Converts a `UrlTree` into a url */
      serialize(tree2) {
        const segment = `/${serializeSegment(tree2.root, true)}`;
        const query = serializeQueryParams(tree2.queryParams);
        const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
        return `${segment}${query}${fragment}`;
      }
    };
    DEFAULT_SERIALIZER = new DefaultUrlSerializer();
    SEGMENT_RE = /^[^\/()?;#]+/;
    MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
    QUERY_PARAM_RE = /^[^=?&#]+/;
    QUERY_PARAM_VALUE_RE = /^[^&#]+/;
    UrlParser = class {
      url;
      remaining;
      constructor(url) {
        this.url = url;
        this.remaining = url;
      }
      parseRootSegment() {
        this.consumeOptional("/");
        if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
          return new UrlSegmentGroup([], {});
        }
        return new UrlSegmentGroup([], this.parseChildren());
      }
      parseQueryParams() {
        const params = {};
        if (this.consumeOptional("?")) {
          do {
            this.parseQueryParam(params);
          } while (this.consumeOptional("&"));
        }
        return params;
      }
      parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
      }
      parseChildren() {
        if (this.remaining === "") {
          return {};
        }
        this.consumeOptional("/");
        const segments = [];
        if (!this.peekStartsWith("(")) {
          segments.push(this.parseSegment());
        }
        while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
          this.capture("/");
          segments.push(this.parseSegment());
        }
        let children = {};
        if (this.peekStartsWith("/(")) {
          this.capture("/");
          children = this.parseParens(true);
        }
        let res = {};
        if (this.peekStartsWith("(")) {
          res = this.parseParens(false);
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
          res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
      }
      // parse a segment with its matrix parameters
      // ie `name;k1=v1;k2`
      parseSegment() {
        const path = matchSegments(this.remaining);
        if (path === "" && this.peekStartsWith(";")) {
          throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
      }
      parseMatrixParams() {
        const params = {};
        while (this.consumeOptional(";")) {
          this.parseParam(params);
        }
        return params;
      }
      parseParam(params) {
        const key = matchMatrixKeySegments(this.remaining);
        if (!key) {
          return;
        }
        this.capture(key);
        let value = "";
        if (this.consumeOptional("=")) {
          const valueMatch = matchSegments(this.remaining);
          if (valueMatch) {
            value = valueMatch;
            this.capture(value);
          }
        }
        params[decode(key)] = decode(value);
      }
      // Parse a single query parameter `name[=value]`
      parseQueryParam(params) {
        const key = matchQueryParams(this.remaining);
        if (!key) {
          return;
        }
        this.capture(key);
        let value = "";
        if (this.consumeOptional("=")) {
          const valueMatch = matchUrlQueryParamValue(this.remaining);
          if (valueMatch) {
            value = valueMatch;
            this.capture(value);
          }
        }
        const decodedKey = decodeQuery(key);
        const decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
          let currentVal = params[decodedKey];
          if (!Array.isArray(currentVal)) {
            currentVal = [currentVal];
            params[decodedKey] = currentVal;
          }
          currentVal.push(decodedVal);
        } else {
          params[decodedKey] = decodedVal;
        }
      }
      // parse `(a/b//outlet_name:c/d)`
      parseParens(allowPrimary) {
        const segments = {};
        this.capture("(");
        while (!this.consumeOptional(")") && this.remaining.length > 0) {
          const path = matchSegments(this.remaining);
          const next = this.remaining[path.length];
          if (next !== "/" && next !== ")" && next !== ";") {
            throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
          }
          let outletName;
          if (path.indexOf(":") > -1) {
            outletName = path.slice(0, path.indexOf(":"));
            this.capture(outletName);
            this.capture(":");
          } else if (allowPrimary) {
            outletName = PRIMARY_OUTLET;
          }
          const children = this.parseChildren();
          segments[outletName ?? PRIMARY_OUTLET] = Object.keys(children).length === 1 && children[PRIMARY_OUTLET] ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
          this.consumeOptional("//");
        }
        return segments;
      }
      peekStartsWith(str) {
        return this.remaining.startsWith(str);
      }
      // Consumes the prefix when it is present and returns whether it has been consumed
      consumeOptional(str) {
        if (this.peekStartsWith(str)) {
          this.remaining = this.remaining.substring(str.length);
          return true;
        }
        return false;
      }
      capture(str) {
        if (!this.consumeOptional(str)) {
          throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
        }
      }
    };
    Navigation = class {
      isAbsolute;
      numberOfDoubleDots;
      commands;
      constructor(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
          throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
        }
        const cmdWithOutlet = commands.find(isCommandWithOutlets);
        if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
          throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
        }
      }
      toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
      }
    };
    Position = class {
      segmentGroup;
      processChildren;
      index;
      constructor(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
      }
    };
    IMPERATIVE_NAVIGATION = "imperative";
    (function(EventType2) {
      EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
      EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
      EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
      EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
      EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
      EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
      EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
      EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
      EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
      EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
      EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
      EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
      EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
      EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
      EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
      EventType2[EventType2["Scroll"] = 15] = "Scroll";
      EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
    })(EventType || (EventType = {}));
    RouterEvent = class {
      id;
      url;
      constructor(id, url) {
        this.id = id;
        this.url = url;
      }
    };
    NavigationStart = class extends RouterEvent {
      type = EventType.NavigationStart;
      /**
       * Identifies the call or event that triggered the navigation.
       * An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`.
       *
       * @see {@link NavigationEnd}
       * @see {@link NavigationCancel}
       * @see {@link NavigationError}
       */
      navigationTrigger;
      /**
       * The navigation state that was previously supplied to the `pushState` call,
       * when the navigation is triggered by a `popstate` event. Otherwise null.
       *
       * The state object is defined by `NavigationExtras`, and contains any
       * developer-defined state value, as well as a unique ID that
       * the router assigns to every router transition/navigation.
       *
       * From the perspective of the router, the router never "goes back".
       * When the user clicks on the back button in the browser,
       * a new navigation ID is created.
       *
       * Use the ID in this previous-state object to differentiate between a newly created
       * state and one returned to by a `popstate` event, so that you can restore some
       * remembered state, such as scroll position.
       *
       */
      restoredState;
      constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
        super(id, url);
        this.navigationTrigger = navigationTrigger;
        this.restoredState = restoredState;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
      }
    };
    NavigationEnd = class extends RouterEvent {
      urlAfterRedirects;
      type = EventType.NavigationEnd;
      constructor(id, url, urlAfterRedirects) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
      }
    };
    (function(NavigationCancellationCode2) {
      NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
      NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
      NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
      NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
      NavigationCancellationCode2[NavigationCancellationCode2["Aborted"] = 4] = "Aborted";
    })(NavigationCancellationCode || (NavigationCancellationCode = {}));
    (function(NavigationSkippedCode2) {
      NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
      NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
    })(NavigationSkippedCode || (NavigationSkippedCode = {}));
    NavigationCancel = class extends RouterEvent {
      reason;
      code;
      type = EventType.NavigationCancel;
      constructor(id, url, reason, code) {
        super(id, url);
        this.reason = reason;
        this.code = code;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
      }
    };
    NavigationSkipped = class extends RouterEvent {
      reason;
      code;
      type = EventType.NavigationSkipped;
      constructor(id, url, reason, code) {
        super(id, url);
        this.reason = reason;
        this.code = code;
      }
    };
    NavigationError = class extends RouterEvent {
      error;
      target;
      type = EventType.NavigationError;
      constructor(id, url, error, target) {
        super(id, url);
        this.error = error;
        this.target = target;
      }
      /** @docsNotRequired */
      toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
      }
    };
    RoutesRecognized = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.RoutesRecognized;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      /** @docsNotRequired */
      toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    GuardsCheckStart = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.GuardsCheckStart;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    GuardsCheckEnd = class extends RouterEvent {
      urlAfterRedirects;
      state;
      shouldActivate;
      type = EventType.GuardsCheckEnd;
      constructor(id, url, urlAfterRedirects, state, shouldActivate) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
        this.shouldActivate = shouldActivate;
      }
      toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
      }
    };
    ResolveStart = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.ResolveStart;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    ResolveEnd = class extends RouterEvent {
      urlAfterRedirects;
      state;
      type = EventType.ResolveEnd;
      constructor(id, url, urlAfterRedirects, state) {
        super(id, url);
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
      }
      toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    };
    RouteConfigLoadStart = class {
      route;
      type = EventType.RouteConfigLoadStart;
      constructor(route) {
        this.route = route;
      }
      toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`;
      }
    };
    RouteConfigLoadEnd = class {
      route;
      type = EventType.RouteConfigLoadEnd;
      constructor(route) {
        this.route = route;
      }
      toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`;
      }
    };
    ChildActivationStart = class {
      snapshot;
      type = EventType.ChildActivationStart;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ChildActivationStart(path: '${path}')`;
      }
    };
    ChildActivationEnd = class {
      snapshot;
      type = EventType.ChildActivationEnd;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ChildActivationEnd(path: '${path}')`;
      }
    };
    ActivationStart = class {
      snapshot;
      type = EventType.ActivationStart;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ActivationStart(path: '${path}')`;
      }
    };
    ActivationEnd = class {
      snapshot;
      type = EventType.ActivationEnd;
      constructor(snapshot) {
        this.snapshot = snapshot;
      }
      toString() {
        const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
        return `ActivationEnd(path: '${path}')`;
      }
    };
    BeforeActivateRoutes = class {
    };
    RedirectRequest = class {
      url;
      navigationBehaviorOptions;
      constructor(url, navigationBehaviorOptions) {
        this.url = url;
        this.navigationBehaviorOptions = navigationBehaviorOptions;
      }
    };
    OutletContext = class {
      rootInjector;
      outlet = null;
      route = null;
      children;
      attachRef = null;
      get injector() {
        return getClosestRouteInjector(this.route?.snapshot) ?? this.rootInjector;
      }
      constructor(rootInjector) {
        this.rootInjector = rootInjector;
        this.children = new ChildrenOutletContexts(this.rootInjector);
      }
    };
    ChildrenOutletContexts = class _ChildrenOutletContexts {
      rootInjector;
      // contexts for child outlets, by name.
      contexts = /* @__PURE__ */ new Map();
      /** @docs-private */
      constructor(rootInjector) {
        this.rootInjector = rootInjector;
      }
      /** Called when a `RouterOutlet` directive is instantiated */
      onChildOutletCreated(childName, outlet) {
        const context = this.getOrCreateContext(childName);
        context.outlet = outlet;
        this.contexts.set(childName, context);
      }
      /**
       * Called when a `RouterOutlet` directive is destroyed.
       * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
       * re-created later.
       */
      onChildOutletDestroyed(childName) {
        const context = this.getContext(childName);
        if (context) {
          context.outlet = null;
          context.attachRef = null;
        }
      }
      /**
       * Called when the corresponding route is deactivated during navigation.
       * Because the component get destroyed, all children outlet are destroyed.
       */
      onOutletDeactivated() {
        const contexts = this.contexts;
        this.contexts = /* @__PURE__ */ new Map();
        return contexts;
      }
      onOutletReAttached(contexts) {
        this.contexts = contexts;
      }
      getOrCreateContext(childName) {
        let context = this.getContext(childName);
        if (!context) {
          context = new OutletContext(this.rootInjector);
          this.contexts.set(childName, context);
        }
        return context;
      }
      getContext(childName) {
        return this.contexts.get(childName) || null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _ChildrenOutletContexts, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _ChildrenOutletContexts, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: ChildrenOutletContexts, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    Tree = class {
      /** @internal */
      _root;
      constructor(root) {
        this._root = root;
      }
      get root() {
        return this._root.value;
      }
      /**
       * @internal
       */
      parent(t) {
        const p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
      }
      /**
       * @internal
       */
      children(t) {
        const n = findNode(t, this._root);
        return n ? n.children.map((t2) => t2.value) : [];
      }
      /**
       * @internal
       */
      firstChild(t) {
        const n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
      }
      /**
       * @internal
       */
      siblings(t) {
        const p = findPath(t, this._root);
        if (p.length < 2)
          return [];
        const c = p[p.length - 2].children.map((c2) => c2.value);
        return c.filter((cc) => cc !== t);
      }
      /**
       * @internal
       */
      pathFromRoot(t) {
        return findPath(t, this._root).map((s) => s.value);
      }
    };
    TreeNode = class {
      value;
      children;
      constructor(value, children) {
        this.value = value;
        this.children = children;
      }
      toString() {
        return `TreeNode(${this.value})`;
      }
    };
    RouterState = class extends Tree {
      snapshot;
      /** @internal */
      constructor(root, snapshot) {
        super(root);
        this.snapshot = snapshot;
        setRouterState(this, root);
      }
      toString() {
        return this.snapshot.toString();
      }
    };
    ActivatedRoute = class {
      urlSubject;
      paramsSubject;
      queryParamsSubject;
      fragmentSubject;
      dataSubject;
      outlet;
      component;
      /** The current snapshot of this route */
      snapshot;
      /** @internal */
      _futureSnapshot;
      /** @internal */
      _routerState;
      /** @internal */
      _paramMap;
      /** @internal */
      _queryParamMap;
      /** An Observable of the resolved route title */
      title;
      /** An observable of the URL segments matched by this route. */
      url;
      /** An observable of the matrix parameters scoped to this route. */
      params;
      /** An observable of the query parameters shared by all the routes. */
      queryParams;
      /** An observable of the URL fragment shared by all the routes. */
      fragment;
      /** An observable of the static and resolved data of this route. */
      data;
      /** @internal */
      constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
        this.urlSubject = urlSubject;
        this.paramsSubject = paramsSubject;
        this.queryParamsSubject = queryParamsSubject;
        this.fragmentSubject = fragmentSubject;
        this.dataSubject = dataSubject;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
        this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
        this.url = urlSubject;
        this.params = paramsSubject;
        this.queryParams = queryParamsSubject;
        this.fragment = fragmentSubject;
        this.data = dataSubject;
      }
      /** The configuration used to match this route. */
      get routeConfig() {
        return this._futureSnapshot.routeConfig;
      }
      /** The root of the router state. */
      get root() {
        return this._routerState.root;
      }
      /** The parent of this route in the router state tree. */
      get parent() {
        return this._routerState.parent(this);
      }
      /** The first child of this route in the router state tree. */
      get firstChild() {
        return this._routerState.firstChild(this);
      }
      /** The children of this route in the router state tree. */
      get children() {
        return this._routerState.children(this);
      }
      /** The path from the root of the router state tree to this route. */
      get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
      }
      /**
       * An Observable that contains a map of the required and optional parameters
       * specific to the route.
       * The map supports retrieving single and multiple values from the same parameter.
       */
      get paramMap() {
        this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
        return this._paramMap;
      }
      /**
       * An Observable that contains a map of the query parameters available to all routes.
       * The map supports retrieving single and multiple values from the query parameter.
       */
      get queryParamMap() {
        this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
        return this._queryParamMap;
      }
      toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
      }
    };
    ActivatedRouteSnapshot = class {
      url;
      params;
      queryParams;
      fragment;
      data;
      outlet;
      component;
      /** The configuration used to match this route **/
      routeConfig;
      /** @internal */
      _resolve;
      /** @internal */
      _resolvedData;
      /** @internal */
      _routerState;
      /** @internal */
      _paramMap;
      /** @internal */
      _queryParamMap;
      /** The resolved route title */
      get title() {
        return this.data?.[RouteTitleKey];
      }
      /** @internal */
      constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this.routeConfig = routeConfig;
        this._resolve = resolve;
      }
      /** The root of the router state */
      get root() {
        return this._routerState.root;
      }
      /** The parent of this route in the router state tree */
      get parent() {
        return this._routerState.parent(this);
      }
      /** The first child of this route in the router state tree */
      get firstChild() {
        return this._routerState.firstChild(this);
      }
      /** The children of this route in the router state tree */
      get children() {
        return this._routerState.children(this);
      }
      /** The path from the root of the router state tree to this route */
      get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
      }
      get paramMap() {
        this._paramMap ??= convertToParamMap(this.params);
        return this._paramMap;
      }
      get queryParamMap() {
        this._queryParamMap ??= convertToParamMap(this.queryParams);
        return this._queryParamMap;
      }
      toString() {
        const url = this.url.map((segment) => segment.toString()).join("/");
        const matched = this.routeConfig ? this.routeConfig.path : "";
        return `Route(url:'${url}', path:'${matched}')`;
      }
    };
    RouterStateSnapshot = class extends Tree {
      url;
      /** @internal */
      constructor(url, root) {
        super(root);
        this.url = url;
        setRouterState(this, root);
      }
      toString() {
        return serializeNode(this._root);
      }
    };
    ROUTER_OUTLET_DATA = new InjectionToken(ngDevMode ? "RouterOutlet data" : "");
    RouterOutlet = class _RouterOutlet {
      activated = null;
      /** @internal */
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      /**
       * The name of the outlet
       *
       */
      name = PRIMARY_OUTLET;
      activateEvents = new EventEmitter();
      deactivateEvents = new EventEmitter();
      /**
       * Emits an attached component instance when the `RouteReuseStrategy` instructs to re-attach a
       * previously detached subtree.
       **/
      attachEvents = new EventEmitter();
      /**
       * Emits a detached component instance when the `RouteReuseStrategy` instructs to detach the
       * subtree.
       */
      detachEvents = new EventEmitter();
      /**
       * Data that will be provided to the child injector through the `ROUTER_OUTLET_DATA` token.
       *
       * When unset, the value of the token is `undefined` by default.
       */
      routerOutletData = input(...ngDevMode ? [void 0, { debugName: "routerOutletData" }] : []);
      parentContexts = inject(ChildrenOutletContexts);
      location = inject(ViewContainerRef);
      changeDetector = inject(ChangeDetectorRef);
      inputBinder = inject(INPUT_BINDER, { optional: true });
      /** @docs-private */
      supportsBindingToComponentInputs = true;
      /** @docs-private */
      ngOnChanges(changes) {
        if (changes["name"]) {
          const { firstChange, previousValue } = changes["name"];
          if (firstChange) {
            return;
          }
          if (this.isTrackedInParentContexts(previousValue)) {
            this.deactivate();
            this.parentContexts.onChildOutletDestroyed(previousValue);
          }
          this.initializeOutletWithName();
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.isTrackedInParentContexts(this.name)) {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(outletName) {
        return this.parentContexts.getContext(outletName)?.outlet === this;
      }
      /** @docs-private */
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        this.parentContexts.onChildOutletCreated(this.name, this);
        if (this.activated) {
          return;
        }
        const context = this.parentContexts.getContext(this.name);
        if (context?.route) {
          if (context.attachRef) {
            this.attach(context.attachRef, context.route);
          } else {
            this.activateWith(context.route, context.injector);
          }
        }
      }
      get isActivated() {
        return !!this.activated;
      }
      /**
       * @returns The currently activated component instance.
       * @throws An error if the outlet is not activated.
       */
      get component() {
        if (!this.activated)
          throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated)
          throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
        return this._activatedRoute;
      }
      get activatedRouteData() {
        if (this._activatedRoute) {
          return this._activatedRoute.snapshot.data;
        }
        return {};
      }
      /**
       * Called when the `RouteReuseStrategy` instructs to detach the subtree
       */
      detach() {
        if (!this.activated)
          throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
        this.location.detach();
        const cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        this.detachEvents.emit(cmp.instance);
        return cmp;
      }
      /**
       * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
       */
      attach(ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
        this.inputBinder?.bindActivatedRouteToOutletComponent(this);
        this.attachEvents.emit(ref.instance);
      }
      deactivate() {
        if (this.activated) {
          const c = this.component;
          this.activated.destroy();
          this.activated = null;
          this._activatedRoute = null;
          this.deactivateEvents.emit(c);
        }
      }
      activateWith(activatedRoute, environmentInjector) {
        if (this.isActivated) {
          throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
        }
        this._activatedRoute = activatedRoute;
        const location = this.location;
        const snapshot = activatedRoute.snapshot;
        const component = snapshot.component;
        const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
        const injector = new OutletInjector(activatedRoute, childContexts, location.injector, this.routerOutletData);
        this.activated = location.createComponent(component, {
          index: location.length,
          injector,
          environmentInjector
        });
        this.changeDetector.markForCheck();
        this.inputBinder?.bindActivatedRouteToOutletComponent(this);
        this.activateEvents.emit(this.activated.instance);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RouterOutlet, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.3.12", type: _RouterOutlet, isStandalone: true, selector: "router-outlet", inputs: { name: { classPropertyName: "name", publicName: "name", isSignal: false, isRequired: false, transformFunction: null }, routerOutletData: { classPropertyName: "routerOutletData", publicName: "routerOutletData", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RouterOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "router-outlet",
        exportAs: "outlet"
      }]
    }], propDecorators: { name: [{
      type: Input
    }], activateEvents: [{
      type: Output,
      args: ["activate"]
    }], deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }], attachEvents: [{
      type: Output,
      args: ["attach"]
    }], detachEvents: [{
      type: Output,
      args: ["detach"]
    }], routerOutletData: [{ type: Input, args: [{ isSignal: true, alias: "routerOutletData", required: false }] }] } });
    OutletInjector = class {
      route;
      childContexts;
      parent;
      outletData;
      constructor(route, childContexts, parent, outletData) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
        this.outletData = outletData;
      }
      get(token, notFoundValue) {
        if (token === ActivatedRoute) {
          return this.route;
        }
        if (token === ChildrenOutletContexts) {
          return this.childContexts;
        }
        if (token === ROUTER_OUTLET_DATA) {
          return this.outletData;
        }
        return this.parent.get(token, notFoundValue);
      }
    };
    INPUT_BINDER = new InjectionToken("");
    RoutedComponentInputBinder = class _RoutedComponentInputBinder {
      outletDataSubscriptions = /* @__PURE__ */ new Map();
      bindActivatedRouteToOutletComponent(outlet) {
        this.unsubscribeFromRouteData(outlet);
        this.subscribeToRouteData(outlet);
      }
      unsubscribeFromRouteData(outlet) {
        this.outletDataSubscriptions.get(outlet)?.unsubscribe();
        this.outletDataSubscriptions.delete(outlet);
      }
      subscribeToRouteData(outlet) {
        const { activatedRoute } = outlet;
        const dataSubscription = combineLatest([
          activatedRoute.queryParams,
          activatedRoute.params,
          activatedRoute.data
        ]).pipe(switchMap(([queryParams, params, data], index) => {
          data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
          if (index === 0) {
            return of(data);
          }
          return Promise.resolve(data);
        })).subscribe((data) => {
          if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
            this.unsubscribeFromRouteData(outlet);
            return;
          }
          const mirror = reflectComponentType(activatedRoute.component);
          if (!mirror) {
            this.unsubscribeFromRouteData(outlet);
            return;
          }
          for (const { templateName } of mirror.inputs) {
            outlet.activatedComponentRef.setInput(templateName, data[templateName]);
          }
        });
        this.outletDataSubscriptions.set(outlet, dataSubscription);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RoutedComponentInputBinder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RoutedComponentInputBinder });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RoutedComponentInputBinder, decorators: [{
      type: Injectable
    }] });
    \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _\u0275EmptyOutletComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.12", type: _\u0275EmptyOutletComponent, isStandalone: true, selector: "ng-component", exportAs: ["emptyRouterOutlet"], ngImport: core_exports, template: `<router-outlet/>`, isInline: true, dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: \u0275EmptyOutletComponent, decorators: [{
      type: Component,
      args: [{
        template: `<router-outlet/>`,
        imports: [RouterOutlet],
        // Used to avoid component ID collisions with user code.
        exportAs: "emptyRouterOutlet"
      }]
    }] });
    RedirectCommand = class {
      redirectTo;
      navigationBehaviorOptions;
      constructor(redirectTo, navigationBehaviorOptions) {
        this.redirectTo = redirectTo;
        this.navigationBehaviorOptions = navigationBehaviorOptions;
      }
    };
    NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
    warnedAboutUnsupportedInputBinding = false;
    activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
      new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
      return t;
    });
    ActivateRoutes = class {
      routeReuseStrategy;
      futureState;
      currState;
      forwardEvent;
      inputBindingEnabled;
      constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
        this.routeReuseStrategy = routeReuseStrategy;
        this.futureState = futureState;
        this.currState = currState;
        this.forwardEvent = forwardEvent;
        this.inputBindingEnabled = inputBindingEnabled;
      }
      activate(parentContexts) {
        const futureRoot = this.futureState._root;
        const currRoot = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
        advanceActivatedRoute(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentContexts);
      }
      // De-activate the child route that are not re-used for the future state
      deactivateChildRoutes(futureNode, currNode, contexts) {
        const children = nodeChildrenAsMap(currNode);
        futureNode.children.forEach((futureChild) => {
          const childOutletName = futureChild.value.outlet;
          this.deactivateRoutes(futureChild, children[childOutletName], contexts);
          delete children[childOutletName];
        });
        Object.values(children).forEach((v) => {
          this.deactivateRouteAndItsChildren(v, contexts);
        });
      }
      deactivateRoutes(futureNode, currNode, parentContext) {
        const future = futureNode.value;
        const curr = currNode ? currNode.value : null;
        if (future === curr) {
          if (future.component) {
            const context = parentContext.getContext(future.outlet);
            if (context) {
              this.deactivateChildRoutes(futureNode, currNode, context.children);
            }
          } else {
            this.deactivateChildRoutes(futureNode, currNode, parentContext);
          }
        } else {
          if (curr) {
            this.deactivateRouteAndItsChildren(currNode, parentContext);
          }
        }
      }
      deactivateRouteAndItsChildren(route, parentContexts) {
        if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
          this.detachAndStoreRouteSubtree(route, parentContexts);
        } else {
          this.deactivateRouteAndOutlet(route, parentContexts);
        }
      }
      detachAndStoreRouteSubtree(route, parentContexts) {
        const context = parentContexts.getContext(route.value.outlet);
        const contexts = context && route.value.component ? context.children : parentContexts;
        const children = nodeChildrenAsMap(route);
        for (const treeNode of Object.values(children)) {
          this.deactivateRouteAndItsChildren(treeNode, contexts);
        }
        if (context && context.outlet) {
          const componentRef = context.outlet.detach();
          const contexts2 = context.children.onOutletDeactivated();
          this.routeReuseStrategy.store(route.value.snapshot, { componentRef, route, contexts: contexts2 });
        }
      }
      deactivateRouteAndOutlet(route, parentContexts) {
        const context = parentContexts.getContext(route.value.outlet);
        const contexts = context && route.value.component ? context.children : parentContexts;
        const children = nodeChildrenAsMap(route);
        for (const treeNode of Object.values(children)) {
          this.deactivateRouteAndItsChildren(treeNode, contexts);
        }
        if (context) {
          if (context.outlet) {
            context.outlet.deactivate();
            context.children.onOutletDeactivated();
          }
          context.attachRef = null;
          context.route = null;
        }
      }
      activateChildRoutes(futureNode, currNode, contexts) {
        const children = nodeChildrenAsMap(currNode);
        futureNode.children.forEach((c) => {
          this.activateRoutes(c, children[c.value.outlet], contexts);
          this.forwardEvent(new ActivationEnd(c.value.snapshot));
        });
        if (futureNode.children.length) {
          this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
        }
      }
      activateRoutes(futureNode, currNode, parentContexts) {
        const future = futureNode.value;
        const curr = currNode ? currNode.value : null;
        advanceActivatedRoute(future);
        if (future === curr) {
          if (future.component) {
            const context = parentContexts.getOrCreateContext(future.outlet);
            this.activateChildRoutes(futureNode, currNode, context.children);
          } else {
            this.activateChildRoutes(futureNode, currNode, parentContexts);
          }
        } else {
          if (future.component) {
            const context = parentContexts.getOrCreateContext(future.outlet);
            if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
              const stored = this.routeReuseStrategy.retrieve(future.snapshot);
              this.routeReuseStrategy.store(future.snapshot, null);
              context.children.onOutletReAttached(stored.contexts);
              context.attachRef = stored.componentRef;
              context.route = stored.route.value;
              if (context.outlet) {
                context.outlet.attach(stored.componentRef, stored.route.value);
              }
              advanceActivatedRoute(stored.route.value);
              this.activateChildRoutes(futureNode, null, context.children);
            } else {
              context.attachRef = null;
              context.route = future;
              if (context.outlet) {
                context.outlet.activateWith(future, context.injector);
              }
              this.activateChildRoutes(futureNode, null, context.children);
            }
          } else {
            this.activateChildRoutes(futureNode, null, parentContexts);
          }
        }
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const context = parentContexts.getOrCreateContext(future.outlet);
          const outlet = context.outlet;
          if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
            console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
            warnedAboutUnsupportedInputBinding = true;
          }
        }
      }
    };
    CanActivate = class {
      path;
      route;
      constructor(path) {
        this.path = path;
        this.route = this.path[this.path.length - 1];
      }
    };
    CanDeactivate = class {
      component;
      route;
      constructor(component, route) {
        this.component = component;
        this.route = route;
      }
    };
    INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
    NoMatch = class {
      segmentGroup;
      constructor(segmentGroup) {
        this.segmentGroup = segmentGroup || null;
      }
    };
    AbsoluteRedirect = class extends Error {
      urlTree;
      constructor(urlTree) {
        super();
        this.urlTree = urlTree;
      }
    };
    ApplyRedirects = class {
      urlSerializer;
      urlTree;
      constructor(urlSerializer, urlTree) {
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
      }
      lineralizeSegments(route, urlTree) {
        let res = [];
        let c = urlTree.root;
        while (true) {
          res = res.concat(c.segments);
          if (c.numberOfChildren === 0) {
            return of(res);
          }
          if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
            return namedOutletsRedirect(`${route.redirectTo}`);
          }
          c = c.children[PRIMARY_OUTLET];
        }
      }
      applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
        return getRedirectResult(redirectTo, currentSnapshot, injector).pipe(map((redirect) => {
          if (redirect instanceof UrlTree) {
            throw new AbsoluteRedirect(redirect);
          }
          const newTree = this.applyRedirectCreateUrlTree(redirect, this.urlSerializer.parse(redirect), segments, posParams);
          if (redirect[0] === "/") {
            throw new AbsoluteRedirect(newTree);
          }
          return newTree;
        }));
      }
      applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
        const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
      }
      createQueryParams(redirectToParams, actualParams) {
        const res = {};
        Object.entries(redirectToParams).forEach(([k, v]) => {
          const copySourceValue = typeof v === "string" && v[0] === ":";
          if (copySourceValue) {
            const sourceName = v.substring(1);
            res[k] = actualParams[sourceName];
          } else {
            res[k] = v;
          }
        });
        return res;
      }
      createSegmentGroup(redirectTo, group, segments, posParams) {
        const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        let children = {};
        Object.entries(group.children).forEach(([name, child]) => {
          children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new UrlSegmentGroup(updatedSegments, children);
      }
      createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
        return redirectToSegments.map((s) => s.path[0] === ":" ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
      }
      findPosParam(redirectTo, redirectToUrlSegment, posParams) {
        const pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
          throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
        return pos;
      }
      findOrReturn(redirectToUrlSegment, actualSegments) {
        let idx = 0;
        for (const s of actualSegments) {
          if (s.path === redirectToUrlSegment.path) {
            actualSegments.splice(idx);
            return s;
          }
          idx++;
        }
        return redirectToUrlSegment;
      }
    };
    noMatch = {
      matched: false,
      consumedSegments: [],
      remainingSegments: [],
      parameters: {},
      positionalParamSegments: {}
    };
    NoLeftoversInUrl = class {
    };
    MAX_ALLOWED_REDIRECTS = 31;
    Recognizer = class {
      injector;
      configLoader;
      rootComponentType;
      config;
      urlTree;
      paramsInheritanceStrategy;
      urlSerializer;
      applyRedirects;
      absoluteRedirectCount = 0;
      allowRedirects = true;
      constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
        this.injector = injector;
        this.configLoader = configLoader;
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.paramsInheritanceStrategy = paramsInheritanceStrategy;
        this.urlSerializer = urlSerializer;
        this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
      }
      noMatchError(e) {
        return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
      }
      recognize() {
        const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
        return this.match(rootSegmentGroup).pipe(map(({ children, rootSnapshot }) => {
          const rootNode = new TreeNode(rootSnapshot, children);
          const routeState = new RouterStateSnapshot("", rootNode);
          const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
          tree2.queryParams = this.urlTree.queryParams;
          routeState.url = this.urlSerializer.serialize(tree2);
          return { state: routeState, tree: tree2 };
        }));
      }
      match(rootSegmentGroup) {
        const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {});
        return this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot).pipe(map((children) => {
          return { children, rootSnapshot };
        }), catchError((e) => {
          if (e instanceof AbsoluteRedirect) {
            this.urlTree = e.urlTree;
            return this.match(e.urlTree.root);
          }
          if (e instanceof NoMatch) {
            throw this.noMatchError(e);
          }
          throw e;
        }));
      }
      processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(injector, config, segmentGroup, parentRoute);
        }
        return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute).pipe(map((child) => child instanceof TreeNode ? [child] : []));
      }
      /**
       * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
       * we cannot find a match for _any_ of the children.
       *
       * @param config - The `Routes` to match against
       * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
       *     config.
       */
      processChildren(injector, config, segmentGroup, parentRoute) {
        const childOutlets = [];
        for (const child of Object.keys(segmentGroup.children)) {
          if (child === "primary") {
            childOutlets.unshift(child);
          } else {
            childOutlets.push(child);
          }
        }
        return from(childOutlets).pipe(concatMap((childOutlet) => {
          const child = segmentGroup.children[childOutlet];
          const sortedConfig = sortByMatchingOutlets(config, childOutlet);
          return this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
        }), scan((children, outletChildren) => {
          children.push(...outletChildren);
          return children;
        }), defaultIfEmpty(null), last(), mergeMap((children) => {
          if (children === null)
            return noMatch$1(segmentGroup);
          const mergedChildren = mergeEmptyPathMatches(children);
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            checkOutletNameUniqueness(mergedChildren);
          }
          sortActivatedRouteSnapshots(mergedChildren);
          return of(mergedChildren);
        }));
      }
      processSegment(injector, routes, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
        return from(routes).pipe(concatMap((r) => {
          return this.processSegmentAgainstRoute(r._injector ?? injector, routes, r, segmentGroup, segments, outlet, allowRedirects, parentRoute).pipe(catchError((e) => {
            if (e instanceof NoMatch) {
              return of(null);
            }
            throw e;
          }));
        }), first((x) => !!x), catchError((e) => {
          if (isEmptyError(e)) {
            if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
              return of(new NoLeftoversInUrl());
            }
            return noMatch$1(segmentGroup);
          }
          throw e;
        }));
      }
      processSegmentAgainstRoute(injector, routes, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
        if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
          return noMatch$1(rawSegment);
        }
        if (route.redirectTo === void 0) {
          return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
        }
        if (this.allowRedirects && allowRedirects) {
          return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes, route, segments, outlet, parentRoute);
        }
        return noMatch$1(rawSegment);
      }
      expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet, parentRoute) {
        const { matched, parameters, consumedSegments, positionalParamSegments, remainingSegments } = match(segmentGroup, route, segments);
        if (!matched)
          return noMatch$1(segmentGroup);
        if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
          this.absoluteRedirectCount++;
          if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
            if (ngDevMode) {
              throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
            }
            this.allowRedirects = false;
          }
        }
        const currentSnapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const inherited = getInherited(currentSnapshot, parentRoute, this.paramsInheritanceStrategy);
        currentSnapshot.params = Object.freeze(inherited.params);
        currentSnapshot.data = Object.freeze(inherited.data);
        const newTree$ = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, currentSnapshot, injector);
        return newTree$.pipe(switchMap((newTree) => this.applyRedirects.lineralizeSegments(route, newTree)), mergeMap((newSegments) => {
          return this.processSegment(injector, routes, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
        }));
      }
      matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
        const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
        if (route.path === "**") {
          rawSegment.children = {};
        }
        return matchResult.pipe(switchMap((result) => {
          if (!result.matched) {
            return noMatch$1(rawSegment);
          }
          injector = route._injector ?? injector;
          return this.getChildConfig(injector, route, segments).pipe(switchMap(({ routes: childConfig }) => {
            const childInjector = route._loadedInjector ?? injector;
            const { parameters, consumedSegments, remainingSegments } = result;
            const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
            const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
            snapshot.params = Object.freeze(inherited.params);
            snapshot.data = Object.freeze(inherited.data);
            const { segmentGroup, slicedSegments } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
              return this.processChildren(childInjector, childConfig, segmentGroup, snapshot).pipe(map((children) => {
                return new TreeNode(snapshot, children);
              }));
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
              return of(new TreeNode(snapshot, []));
            }
            const matchedOnOutlet = getOutlet(route) === outlet;
            return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot).pipe(map((child) => {
              return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
            }));
          }));
        }));
      }
      getChildConfig(injector, route, segments) {
        if (route.children) {
          return of({ routes: route.children, injector });
        }
        if (route.loadChildren) {
          if (route._loadedRoutes !== void 0) {
            return of({ routes: route._loadedRoutes, injector: route._loadedInjector });
          }
          return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
            if (shouldLoadResult) {
              return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
                route._loadedRoutes = cfg.routes;
                route._loadedInjector = cfg.injector;
              }));
            }
            return canLoadFails(route);
          }));
        }
        return of({ routes: [], injector });
      }
    };
    TitleStrategy = class _TitleStrategy {
      /**
       * @returns The `title` of the deepest primary route.
       */
      buildTitle(snapshot) {
        let pageTitle;
        let route = snapshot.root;
        while (route !== void 0) {
          pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
          route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
        }
        return pageTitle;
      }
      /**
       * Given an `ActivatedRouteSnapshot`, returns the final value of the
       * `Route.title` property, which can either be a static string or a resolved value.
       */
      getResolvedTitleForRoute(snapshot) {
        return snapshot.data[RouteTitleKey];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _TitleStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _TitleStrategy, providedIn: "root", useFactory: () => inject(DefaultTitleStrategy) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: TitleStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(DefaultTitleStrategy) }]
    }] });
    DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
      title;
      constructor(title) {
        super();
        this.title = title;
      }
      /**
       * Sets the title of the browser to the given value.
       *
       * @param title The `pageTitle` from the deepest primary route.
       */
      updateTitle(snapshot) {
        const title = this.buildTitle(snapshot);
        if (title !== void 0) {
          this.title.setTitle(title);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _DefaultTitleStrategy, deps: [{ token: Title }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _DefaultTitleStrategy, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: DefaultTitleStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: Title }] });
    ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
      providedIn: "root",
      factory: () => ({})
    });
    ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
    RouterConfigLoader = class _RouterConfigLoader {
      componentLoaders = /* @__PURE__ */ new WeakMap();
      childrenLoaders = /* @__PURE__ */ new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = inject(Compiler);
      loadComponent(injector, route) {
        if (this.componentLoaders.get(route)) {
          return this.componentLoaders.get(route);
        } else if (route._loadedComponent) {
          return of(route._loadedComponent);
        }
        if (this.onLoadStartListener) {
          this.onLoadStartListener(route);
        }
        const loadRunner = wrapIntoObservable(runInInjectionContext(injector, () => route.loadComponent())).pipe(map(maybeUnwrapDefaultExport), switchMap(maybeResolveResources), tap((component) => {
          if (this.onLoadEndListener) {
            this.onLoadEndListener(route);
          }
          (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
          route._loadedComponent = component;
        }), finalize(() => {
          this.componentLoaders.delete(route);
        }));
        const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
        this.componentLoaders.set(route, loader);
        return loader;
      }
      loadChildren(parentInjector, route) {
        if (this.childrenLoaders.get(route)) {
          return this.childrenLoaders.get(route);
        } else if (route._loadedRoutes) {
          return of({ routes: route._loadedRoutes, injector: route._loadedInjector });
        }
        if (this.onLoadStartListener) {
          this.onLoadStartListener(route);
        }
        const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
        const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
          this.childrenLoaders.delete(route);
        }));
        const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
        this.childrenLoaders.set(route, loader);
        return loader;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RouterConfigLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RouterConfigLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RouterConfigLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    UrlHandlingStrategy = class _UrlHandlingStrategy {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _UrlHandlingStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _UrlHandlingStrategy, providedIn: "root", useFactory: () => inject(DefaultUrlHandlingStrategy) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: UrlHandlingStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(DefaultUrlHandlingStrategy) }]
    }] });
    DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
      shouldProcessUrl(url) {
        return true;
      }
      extract(url) {
        return url;
      }
      merge(newUrlPart, wholeUrl) {
        return newUrlPart;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _DefaultUrlHandlingStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _DefaultUrlHandlingStrategy, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: DefaultUrlHandlingStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
    VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
    NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
    NavigationTransitions = class _NavigationTransitions {
      // Some G3 targets expect the navigation object to be mutated (and not getting a new reference on changes).
      currentNavigation = signal(null, ...ngDevMode ? [{ debugName: "currentNavigation", equal: () => false }] : [{ equal: () => false }]);
      currentTransition = null;
      lastSuccessfulNavigation = null;
      /**
       * These events are used to communicate back to the Router about the state of the transition. The
       * Router wants to respond to these events in various ways. Because the `NavigationTransition`
       * class is not public, this event subject is not publicly exposed.
       */
      events = new Subject();
      /**
       * Used to abort the current transition with an error.
       */
      transitionAbortWithErrorSubject = new Subject();
      configLoader = inject(RouterConfigLoader);
      environmentInjector = inject(EnvironmentInjector);
      destroyRef = inject(DestroyRef);
      urlSerializer = inject(UrlSerializer);
      rootContexts = inject(ChildrenOutletContexts);
      location = inject(Location);
      inputBindingEnabled = inject(INPUT_BINDER, { optional: true }) !== null;
      titleStrategy = inject(TitleStrategy);
      options = inject(ROUTER_CONFIGURATION, { optional: true }) || {};
      paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
      urlHandlingStrategy = inject(UrlHandlingStrategy);
      createViewTransition = inject(CREATE_VIEW_TRANSITION, { optional: true });
      navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, { optional: true });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      /**
       * Hook that enables you to pause navigation after the preactivation phase.
       * Used by `RouterModule`.
       *
       * @internal
       */
      afterPreactivation = () => of(void 0);
      /** @internal */
      rootComponentType = null;
      destroyed = false;
      constructor() {
        const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
        const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
        this.configLoader.onLoadEndListener = onLoadEnd;
        this.configLoader.onLoadStartListener = onLoadStart;
        this.destroyRef.onDestroy(() => {
          this.destroyed = true;
        });
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(request) {
        const id = ++this.navigationId;
        untracked(() => {
          this.transitions?.next(__spreadProps(__spreadValues({}, request), {
            extractedUrl: this.urlHandlingStrategy.extract(request.rawUrl),
            targetSnapshot: null,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
            abortController: new AbortController(),
            id
          }));
        });
      }
      setupNavigations(router) {
        this.transitions = new BehaviorSubject(null);
        return this.transitions.pipe(
          filter((t) => t !== null),
          // Using switchMap so we cancel executing navigations when a new one comes in
          switchMap((overallTransitionState) => {
            let completedOrAborted = false;
            return of(overallTransitionState).pipe(
              switchMap((t) => {
                if (this.navigationId > overallTransitionState.id) {
                  const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
                  this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
                  return EMPTY;
                }
                this.currentTransition = overallTransitionState;
                this.currentNavigation.set({
                  id: t.id,
                  initialUrl: t.rawUrl,
                  extractedUrl: t.extractedUrl,
                  targetBrowserUrl: typeof t.extras.browserUrl === "string" ? this.urlSerializer.parse(t.extras.browserUrl) : t.extras.browserUrl,
                  trigger: t.source,
                  extras: t.extras,
                  previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                    previousNavigation: null
                  }),
                  abort: () => t.abortController.abort()
                });
                const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
                const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
                if (!urlTransition && onSameUrlNavigation !== "reload") {
                  const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
                  this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
                  t.resolve(false);
                  return EMPTY;
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
                  return of(t).pipe(
                    // Fire NavigationStart event
                    switchMap((t2) => {
                      this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                      if (t2.id !== this.navigationId) {
                        return EMPTY;
                      }
                      return Promise.resolve(t2);
                    }),
                    // Recognize
                    recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                    // Update URL if in `eager` update mode
                    tap((t2) => {
                      overallTransitionState.targetSnapshot = t2.targetSnapshot;
                      overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                      this.currentNavigation.update((nav) => {
                        nav.finalUrl = t2.urlAfterRedirects;
                        return nav;
                      });
                      const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                      this.events.next(routesRecognized);
                    })
                  );
                } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
                  const { id, extractedUrl, source, restoredState, extras } = t;
                  const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
                  this.events.next(navStart);
                  const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
                  this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                    targetSnapshot,
                    urlAfterRedirects: extractedUrl,
                    extras: __spreadProps(__spreadValues({}, extras), { skipLocationChange: false, replaceUrl: false })
                  });
                  this.currentNavigation.update((nav) => {
                    nav.finalUrl = extractedUrl;
                    return nav;
                  });
                  return of(overallTransitionState);
                } else {
                  const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
                  this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
                  t.resolve(false);
                  return EMPTY;
                }
              }),
              // --- GUARDS ---
              tap((t) => {
                const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
                this.events.next(guardsStart);
              }),
              map((t) => {
                this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                  guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
                });
                return overallTransitionState;
              }),
              checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
              tap((t) => {
                overallTransitionState.guardsResult = t.guardsResult;
                if (t.guardsResult && typeof t.guardsResult !== "boolean") {
                  throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
                }
                const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                this.events.next(guardsEnd);
              }),
              filter((t) => {
                if (!t.guardsResult) {
                  this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
                  return false;
                }
                return true;
              }),
              // --- RESOLVE ---
              switchTap((t) => {
                if (t.guards.canActivateChecks.length === 0) {
                  return void 0;
                }
                return of(t).pipe(tap((t2) => {
                  const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(resolveStart);
                }), switchMap((t2) => {
                  let dataResolved = false;
                  return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                    next: () => dataResolved = true,
                    complete: () => {
                      if (!dataResolved) {
                        this.cancelNavigationTransition(t2, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                      }
                    }
                  }));
                }), tap((t2) => {
                  const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(resolveEnd);
                }));
              }),
              // --- LOAD COMPONENTS ---
              switchTap((t) => {
                const loadComponents = (route) => {
                  const loaders = [];
                  if (route.routeConfig?.loadComponent) {
                    const injector = getClosestRouteInjector(route) ?? this.environmentInjector;
                    loaders.push(this.configLoader.loadComponent(injector, route.routeConfig).pipe(tap((loadedComponent) => {
                      route.component = loadedComponent;
                    }), map(() => void 0)));
                  }
                  for (const child of route.children) {
                    loaders.push(...loadComponents(child));
                  }
                  return loaders;
                };
                return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
              }),
              switchTap(() => this.afterPreactivation()),
              switchMap(() => {
                const { currentSnapshot, targetSnapshot } = overallTransitionState;
                const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
                return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
              }),
              map((t) => {
                const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), { targetRouterState });
                this.currentNavigation.update((nav) => {
                  nav.targetRouterState = targetRouterState;
                  return nav;
                });
                return overallTransitionState;
              }),
              tap(() => {
                this.events.next(new BeforeActivateRoutes());
              }),
              activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
              // Ensure that if some observable used to drive the transition doesn't
              // complete, the navigation still finalizes This should never happen, but
              // this is done as a safety measure to avoid surfacing this error (#49567).
              take(1),
              takeUntil(new Observable((subscriber) => {
                const abortSignal = overallTransitionState.abortController.signal;
                const handler = () => subscriber.next();
                abortSignal.addEventListener("abort", handler);
                return () => abortSignal.removeEventListener("abort", handler);
              }).pipe(
                // Ignore aborts if we are already completed, canceled, or are in the activation stage (we have targetRouterState)
                filter(() => !completedOrAborted && !overallTransitionState.targetRouterState),
                tap(() => {
                  this.cancelNavigationTransition(overallTransitionState, overallTransitionState.abortController.signal.reason + "", NavigationCancellationCode.Aborted);
                })
              )),
              tap({
                next: (t) => {
                  completedOrAborted = true;
                  this.lastSuccessfulNavigation = untracked(this.currentNavigation);
                  this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
                  this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
                  t.resolve(true);
                },
                complete: () => {
                  completedOrAborted = true;
                }
              }),
              // There used to be a lot more logic happening directly within the
              // transition Observable. Some of this logic has been refactored out to
              // other places but there may still be errors that happen there. This gives
              // us a way to cancel the transition from the outside. This may also be
              // required in the future to support something like the abort signal of the
              // Navigation API where the navigation gets aborted from outside the
              // transition.
              takeUntil(this.transitionAbortWithErrorSubject.pipe(tap((err) => {
                throw err;
              }))),
              finalize(() => {
                if (!completedOrAborted) {
                  const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
                  this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
                }
                if (this.currentTransition?.id === overallTransitionState.id) {
                  this.currentNavigation.set(null);
                  this.currentTransition = null;
                }
              }),
              catchError((e) => {
                if (this.destroyed) {
                  overallTransitionState.resolve(false);
                  return EMPTY;
                }
                completedOrAborted = true;
                if (isNavigationCancelingError(e)) {
                  this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
                  if (!isRedirectingNavigationCancelingError(e)) {
                    overallTransitionState.resolve(false);
                  } else {
                    this.events.next(new RedirectRequest(e.url, e.navigationBehaviorOptions));
                  }
                } else {
                  const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0);
                  try {
                    const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
                    if (navigationErrorHandlerResult instanceof RedirectCommand) {
                      const { message, cancellationCode } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
                      this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
                      this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
                    } else {
                      this.events.next(navigationError);
                      throw e;
                    }
                  } catch (ee) {
                    if (this.options.resolveNavigationPromiseOnError) {
                      overallTransitionState.resolve(false);
                    } else {
                      overallTransitionState.reject(ee);
                    }
                  }
                }
                return EMPTY;
              })
            );
          })
        );
      }
      cancelNavigationTransition(t, reason, code) {
        const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
        this.events.next(navCancel);
        t.resolve(false);
      }
      /**
       * @returns Whether we're navigating to somewhere that is not what the Router is
       * currently set to.
       */
      isUpdatingInternalState() {
        return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
      }
      /**
       * @returns Whether we're updating the browser URL to something new (navigation is going
       * to somewhere not displayed in the URL bar and we will update the URL
       * bar if navigation succeeds).
       */
      isUpdatedBrowserUrl() {
        const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
        const currentNavigation = untracked(this.currentNavigation);
        const targetBrowserUrl = currentNavigation?.targetBrowserUrl ?? currentNavigation?.extractedUrl;
        return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !currentNavigation?.extras.skipLocationChange;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NavigationTransitions, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NavigationTransitions, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NavigationTransitions, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    RouteReuseStrategy = class _RouteReuseStrategy {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RouteReuseStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RouteReuseStrategy, providedIn: "root", useFactory: () => inject(DefaultRouteReuseStrategy) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RouteReuseStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(DefaultRouteReuseStrategy) }]
    }] });
    BaseRouteReuseStrategy = class {
      /**
       * Whether the given route should detach for later reuse.
       * Always returns false for `BaseRouteReuseStrategy`.
       * */
      shouldDetach(route) {
        return false;
      }
      /**
       * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
       */
      store(route, detachedTree) {
      }
      /** Returns `false`, meaning the route (and its subtree) is never reattached */
      shouldAttach(route) {
        return false;
      }
      /** Returns `null` because this strategy does not store routes for later re-use. */
      retrieve(route) {
        return null;
      }
      /**
       * Determines if a route should be reused.
       * This strategy returns `true` when the future route config and current route config are
       * identical.
       */
      shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig;
      }
    };
    DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _DefaultRouteReuseStrategy, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _DefaultRouteReuseStrategy, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: DefaultRouteReuseStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    StateManager = class _StateManager {
      urlSerializer = inject(UrlSerializer);
      options = inject(ROUTER_CONFIGURATION, { optional: true }) || {};
      canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
      location = inject(Location);
      urlHandlingStrategy = inject(UrlHandlingStrategy);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      currentUrlTree = new UrlTree();
      /**
       * Returns the currently activated `UrlTree`.
       *
       * This `UrlTree` shows only URLs that the `Router` is configured to handle (through
       * `UrlHandlingStrategy`).
       *
       * The value is set after finding the route config tree to activate but before activating the
       * route.
       */
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      /**
       * Returns a `UrlTree` that is represents what the browser is actually showing.
       *
       * In the life of a navigation transition:
       * 1. When a navigation begins, the raw `UrlTree` is updated to the full URL that's being
       * navigated to.
       * 2. During a navigation, redirects are applied, which might only apply to _part_ of the URL (due
       * to `UrlHandlingStrategy`).
       * 3. Just before activation, the raw `UrlTree` is updated to include the redirects on top of the
       * original raw URL.
       *
       * Note that this is _only_ here to support `UrlHandlingStrategy.extract` and
       * `UrlHandlingStrategy.shouldProcessUrl`. Without those APIs, the current `UrlTree` would not
       * deviated from the raw `UrlTree`.
       *
       * For `extract`, a raw `UrlTree` is needed because `extract` may only return part
       * of the navigation URL. Thus, the current `UrlTree` may only represent _part_ of the browser
       * URL. When a navigation gets cancelled and the router needs to reset the URL or a new navigation
       * occurs, it needs to know the _whole_ browser URL, not just the part handled by
       * `UrlHandlingStrategy`.
       * For `shouldProcessUrl`, when the return is `false`, the router ignores the navigation but
       * still updates the raw `UrlTree` with the assumption that the navigation was caused by the
       * location change listener due to a URL update by the AngularJS router. In this case, the router
       * still need to know what the browser's URL is for future navigations.
       */
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      createBrowserPath({ finalUrl, initialUrl, targetBrowserUrl }) {
        const rawUrl = finalUrl !== void 0 ? this.urlHandlingStrategy.merge(finalUrl, initialUrl) : initialUrl;
        const url = targetBrowserUrl ?? rawUrl;
        const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
        return path;
      }
      commitTransition({ targetRouterState, finalUrl, initialUrl }) {
        if (finalUrl && targetRouterState) {
          this.currentUrlTree = finalUrl;
          this.rawUrlTree = this.urlHandlingStrategy.merge(finalUrl, initialUrl);
          this.routerState = targetRouterState;
        } else {
          this.rawUrlTree = initialUrl;
        }
      }
      routerState = createEmptyState(null);
      /** Returns the current RouterState. */
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      updateStateMemento() {
        this.stateMemento = this.createStateMemento();
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState
        };
      }
      resetInternalState({ finalUrl }) {
        this.routerState = this.stateMemento.routerState;
        this.currentUrlTree = this.stateMemento.currentUrlTree;
        this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _StateManager, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _StateManager, providedIn: "root", useFactory: () => inject(HistoryStateManager) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: StateManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(HistoryStateManager) }]
    }] });
    HistoryStateManager = class _HistoryStateManager extends StateManager {
      /**
       * The id of the currently active page in the router.
       * Updated to the transition's target id on a successful navigation.
       *
       * This is used to track what page the router last activated. When an attempted navigation fails,
       * the router can then use this to compute how to restore the state back to the previously active
       * page.
       */
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      /**
       * The ɵrouterPageId of whatever page is currently active in the browser history. This is
       * important for computing the target page id for new navigations because we need to ensure each
       * page id in the browser history is 1 more than the previous entry.
       */
      get browserPageId() {
        if (this.canceledNavigationResolution !== "computed") {
          return this.currentPageId;
        }
        return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
      }
      registerNonRouterCurrentEntryChangeListener(listener) {
        return this.location.subscribe((event) => {
          if (event["type"] === "popstate") {
            setTimeout(() => {
              listener(event["url"], event.state, "popstate");
            });
          }
        });
      }
      handleRouterEvent(e, currentTransition) {
        if (e instanceof NavigationStart) {
          this.updateStateMemento();
        } else if (e instanceof NavigationSkipped) {
          this.commitTransition(currentTransition);
        } else if (e instanceof RoutesRecognized) {
          if (this.urlUpdateStrategy === "eager") {
            if (!currentTransition.extras.skipLocationChange) {
              this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
            }
          }
        } else if (e instanceof BeforeActivateRoutes) {
          this.commitTransition(currentTransition);
          if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
            this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
          }
        } else if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.SupersededByNewNavigation && e.code !== NavigationCancellationCode.Redirect) {
          this.restoreHistory(currentTransition);
        } else if (e instanceof NavigationError) {
          this.restoreHistory(currentTransition, true);
        } else if (e instanceof NavigationEnd) {
          this.lastSuccessfulId = e.id;
          this.currentPageId = this.browserPageId;
        }
      }
      setBrowserUrl(path, { extras, id }) {
        const { replaceUrl, state } = extras;
        if (this.location.isCurrentPathEqualTo(path) || !!replaceUrl) {
          const currentBrowserPageId = this.browserPageId;
          const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, currentBrowserPageId));
          this.location.replaceState(path, "", newState);
        } else {
          const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, this.browserPageId + 1));
          this.location.go(path, "", newState);
        }
      }
      /**
       * Performs the necessary rollback action to restore the browser URL to the
       * state before the transition.
       */
      restoreHistory(navigation, restoringFromCaughtError = false) {
        if (this.canceledNavigationResolution === "computed") {
          const currentBrowserPageId = this.browserPageId;
          const targetPagePosition = this.currentPageId - currentBrowserPageId;
          if (targetPagePosition !== 0) {
            this.location.historyGo(targetPagePosition);
          } else if (this.getCurrentUrlTree() === navigation.finalUrl && targetPagePosition === 0) {
            this.resetInternalState(navigation);
            this.resetUrlToCurrentUrlTree();
          } else ;
        } else if (this.canceledNavigationResolution === "replace") {
          if (restoringFromCaughtError) {
            this.resetInternalState(navigation);
          }
          this.resetUrlToCurrentUrlTree();
        }
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
      }
      generateNgRouterState(navigationId, routerPageId) {
        if (this.canceledNavigationResolution === "computed") {
          return { navigationId, \u0275routerPageId: routerPageId };
        }
        return { navigationId };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _HistoryStateManager, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _HistoryStateManager, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: HistoryStateManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    exactMatchOptions = {
      paths: "exact",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "exact"
    };
    subsetMatchOptions = {
      paths: "subset",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "subset"
    };
    Router = class _Router {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = false;
      nonRouterCurrentEntryChangeSubscription;
      console = inject(Console);
      stateManager = inject(StateManager);
      options = inject(ROUTER_CONFIGURATION, { optional: true }) || {};
      pendingTasks = inject(PendingTasksInternal);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      navigationTransitions = inject(NavigationTransitions);
      urlSerializer = inject(UrlSerializer);
      location = inject(Location);
      urlHandlingStrategy = inject(UrlHandlingStrategy);
      injector = inject(EnvironmentInjector);
      /**
       * The private `Subject` type for the public events exposed in the getter. This is used internally
       * to push events to. The separate field allows us to expose separate types in the public API
       * (i.e., an Observable rather than the Subject).
       */
      _events = new Subject();
      /**
       * An event stream for routing events.
       */
      get events() {
        return this._events;
      }
      /**
       * The current state of routing in this NgModule.
       */
      get routerState() {
        return this.stateManager.getRouterState();
      }
      /**
       * True if at least one navigation event has occurred,
       * false otherwise.
       */
      navigated = false;
      /**
       * A strategy for re-using routes.
       *
       * @deprecated Configure using `providers` instead:
       *   `{provide: RouteReuseStrategy, useClass: MyStrategy}`.
       */
      routeReuseStrategy = inject(RouteReuseStrategy);
      /**
       * How to handle a navigation request to the current URL.
       *
       *
       * @deprecated Configure this through `provideRouter` or `RouterModule.forRoot` instead.
       * @see {@link withRouterConfig}
       * @see {@link provideRouter}
       * @see {@link RouterModule}
       */
      onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      config = inject(ROUTES, { optional: true })?.flat() ?? [];
      /**
       * Indicates whether the application has opted in to binding Router data to component inputs.
       *
       * This option is enabled by the `withComponentInputBinding` feature of `provideRouter` or
       * `bindToComponentInputs` in the `ExtraOptions` of `RouterModule.forRoot`.
       */
      componentInputBindingEnabled = !!inject(INPUT_BINDER, { optional: true });
      /**
       * Signal of the current `Navigation` object when the router is navigating, and `null` when idle.
       *
       * Note: The current navigation becomes to null after the NavigationEnd event is emitted.
       */
      currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
      constructor() {
        this.resetConfig(this.config);
        this.navigationTransitions.setupNavigations(this).subscribe({
          error: (e) => {
            this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
          }
        });
        this.subscribeToNavigationEvents();
      }
      eventsSubscription = new Subscription();
      subscribeToNavigationEvents() {
        const subscription = this.navigationTransitions.events.subscribe((e) => {
          try {
            const currentTransition = this.navigationTransitions.currentTransition;
            const currentNavigation = untracked(this.navigationTransitions.currentNavigation);
            if (currentTransition !== null && currentNavigation !== null) {
              this.stateManager.handleRouterEvent(e, currentNavigation);
              if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
                this.navigated = true;
              } else if (e instanceof NavigationEnd) {
                this.navigated = true;
              } else if (e instanceof RedirectRequest) {
                const opts = e.navigationBehaviorOptions;
                const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
                const extras = __spreadValues({
                  browserUrl: currentTransition.extras.browserUrl,
                  info: currentTransition.extras.info,
                  skipLocationChange: currentTransition.extras.skipLocationChange,
                  // The URL is already updated at this point if we have 'eager' URL
                  // updates or if the navigation was triggered by the browser (back
                  // button, URL bar, etc). We want to replace that item in history
                  // if the navigation is rejected.
                  replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
                }, opts);
                this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
                  resolve: currentTransition.resolve,
                  reject: currentTransition.reject,
                  promise: currentTransition.promise
                });
              }
            }
            if (isPublicRouterEvent(e)) {
              this._events.next(e);
            }
          } catch (e2) {
            this.navigationTransitions.transitionAbortWithErrorSubject.next(e2);
          }
        });
        this.eventsSubscription.add(subscription);
      }
      /** @internal */
      resetRootComponentType(rootComponentType) {
        this.routerState.root.component = rootComponentType;
        this.navigationTransitions.rootComponentType = rootComponentType;
      }
      /**
       * Sets up the location change listener and performs the initial navigation.
       */
      initialNavigation() {
        this.setUpLocationChangeListener();
        if (!this.navigationTransitions.hasRequestedNavigation) {
          this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
        }
      }
      /**
       * Sets up the location change listener. This listener detects navigations triggered from outside
       * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
       * navigation so that the correct events, guards, etc. are triggered.
       */
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state, source) => {
          this.navigateToSyncWithBrowser(url, source, state);
        });
      }
      /**
       * Schedules a router navigation to synchronize Router state with the browser state.
       *
       * This is done as a response to a popstate event and the initial navigation. These
       * two scenarios represent times when the browser URL/state has been updated and
       * the Router needs to respond to ensure its internal state matches.
       */
      navigateToSyncWithBrowser(url, source, state) {
        const extras = { replaceUrl: true };
        const restoredState = state?.navigationId ? state : null;
        if (state) {
          const stateCopy = __spreadValues({}, state);
          delete stateCopy.navigationId;
          delete stateCopy.\u0275routerPageId;
          if (Object.keys(stateCopy).length !== 0) {
            extras.state = stateCopy;
          }
        }
        const urlTree = this.parseUrl(url);
        this.scheduleNavigation(urlTree, source, restoredState, extras).catch((e) => {
          if (this.disposed) {
            return;
          }
          this.injector.get(INTERNAL_APPLICATION_ERROR_HANDLER)(e);
        });
      }
      /** The current URL. */
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      /**
       * Returns the current `Navigation` object when the router is navigating,
       * and `null` when idle.
       *
       * @deprecated 20.2 Use the `currentNavigation` signal instead.
       */
      getCurrentNavigation() {
        return untracked(this.navigationTransitions.currentNavigation);
      }
      /**
       * The `Navigation` object of the most recent navigation to succeed and `null` if there
       *     has not been a successful navigation yet.
       */
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      /**
       * Resets the route configuration used for navigation and generating links.
       *
       * @param config The route array for the new configuration.
       *
       * @usageNotes
       *
       * ```ts
       * router.resetConfig([
       *  { path: 'team/:id', component: TeamCmp, children: [
       *    { path: 'simple', component: SimpleCmp },
       *    { path: 'user/:name', component: UserCmp }
       *  ]}
       * ]);
       * ```
       */
      resetConfig(config) {
        (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
        this.config = config.map(standardizeConfig);
        this.navigated = false;
      }
      /** @docs-private */
      ngOnDestroy() {
        this.dispose();
      }
      /** Disposes of the router. */
      dispose() {
        this._events.unsubscribe();
        this.navigationTransitions.complete();
        if (this.nonRouterCurrentEntryChangeSubscription) {
          this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
          this.nonRouterCurrentEntryChangeSubscription = void 0;
        }
        this.disposed = true;
        this.eventsSubscription.unsubscribe();
      }
      /**
       * Appends URL segments to the current URL tree to create a new URL tree.
       *
       * @param commands An array of URL fragments with which to construct the new URL tree.
       * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
       * segments, followed by the parameters for each segment.
       * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
       * property of the options object, if supplied.
       * @param navigationExtras Options that control the navigation strategy.
       * @returns The new URL tree.
       *
       * @usageNotes
       *
       * ```
       * // create /team/33/user/11
       * router.createUrlTree(['/team', 33, 'user', 11]);
       *
       * // create /team/33;expand=true/user/11
       * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
       *
       * // you can collapse static segments like this (this works only with the first passed-in value):
       * router.createUrlTree(['/team/33/user', userId]);
       *
       * // If the first segment can contain slashes, and you do not want the router to split it,
       * // you can do the following:
       * router.createUrlTree([{segmentPath: '/one/two'}]);
       *
       * // create /team/33/(user/11//right:chat)
       * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
       *
       * // remove the right secondary node
       * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
       *
       * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
       *
       * // navigate to /team/33/user/11/details
       * router.createUrlTree(['details'], {relativeTo: route});
       *
       * // navigate to /team/33/user/22
       * router.createUrlTree(['../22'], {relativeTo: route});
       *
       * // navigate to /team/44/user/22
       * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
       *
       * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
       * tree should be created relative to the root.
       * ```
       */
      createUrlTree(commands, navigationExtras = {}) {
        const { relativeTo, queryParams, fragment, queryParamsHandling, preserveFragment } = navigationExtras;
        const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        let q = null;
        switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
            break;
          case "preserve":
            q = this.currentUrlTree.queryParams;
            break;
          default:
            q = queryParams || null;
        }
        if (q !== null) {
          q = this.removeEmptyProps(q);
        }
        let relativeToUrlSegmentGroup;
        try {
          const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
          relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
        } catch (e) {
          if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
            commands = [];
          }
          relativeToUrlSegmentGroup = this.currentUrlTree.root;
        }
        return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
      }
      /**
       * Navigates to a view using an absolute route path.
       *
       * @param url An absolute path for a defined route. The function does not apply any delta to the
       *     current URL.
       * @param extras An object containing properties that modify the navigation strategy.
       *
       * @returns A Promise that resolves to 'true' when navigation succeeds,
       * to 'false' when navigation fails, or is rejected on error.
       *
       * @usageNotes
       *
       * The following calls request navigation to an absolute path.
       *
       * ```ts
       * router.navigateByUrl("/team/33/user/11");
       *
       * // Navigate without updating the URL
       * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
       * ```
       *
       * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
       *
       */
      navigateByUrl(url, extras = {
        skipLocationChange: false
      }) {
        const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
        const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
        return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
      }
      /**
       * Navigate based on the provided array of commands and a starting point.
       * If no starting route is provided, the navigation is absolute.
       *
       * @param commands An array of URL fragments with which to construct the target URL.
       * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
       * segments, followed by the parameters for each segment.
       * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
       * of the options object, if supplied.
       * @param extras An options object that determines how the URL should be constructed or
       *     interpreted.
       *
       * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
       *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
       * not `true`.
       *
       * @usageNotes
       *
       * The following calls request navigation to a dynamic route path relative to the current URL.
       *
       * ```ts
       * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
       *
       * // Navigate without updating the URL, overriding the default behavior
       * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
       * ```
       *
       * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
       *
       */
      navigate(commands, extras = { skipLocationChange: false }) {
        validateCommands(commands);
        return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
      }
      /** Serializes a `UrlTree` into a string */
      serializeUrl(url) {
        return this.urlSerializer.serialize(url);
      }
      /** Parses a string into a `UrlTree` */
      parseUrl(url) {
        try {
          return this.urlSerializer.parse(url);
        } catch (e) {
          this.console.warn(formatRuntimeError(4018, ngDevMode && `Error parsing URL ${url}. Falling back to '/' instead. 
` + e));
          return this.urlSerializer.parse("/");
        }
      }
      isActive(url, matchOptions) {
        let options;
        if (matchOptions === true) {
          options = __spreadValues({}, exactMatchOptions);
        } else if (matchOptions === false) {
          options = __spreadValues({}, subsetMatchOptions);
        } else {
          options = matchOptions;
        }
        if (isUrlTree(url)) {
          return containsTree(this.currentUrlTree, url, options);
        }
        const urlTree = this.parseUrl(url);
        return containsTree(this.currentUrlTree, urlTree, options);
      }
      removeEmptyProps(params) {
        return Object.entries(params).reduce((result, [key, value]) => {
          if (value !== null && value !== void 0) {
            result[key] = value;
          }
          return result;
        }, {});
      }
      scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
        if (this.disposed) {
          return Promise.resolve(false);
        }
        let resolve;
        let reject;
        let promise;
        if (priorPromise) {
          resolve = priorPromise.resolve;
          reject = priorPromise.reject;
          promise = priorPromise.promise;
        } else {
          promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
          });
        }
        const taskId = this.pendingTasks.add();
        afterNextNavigation(this, () => {
          queueMicrotask(() => this.pendingTasks.remove(taskId));
        });
        this.navigationTransitions.handleNavigationRequest({
          source,
          restoredState,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.currentUrlTree,
          rawUrl,
          extras,
          resolve,
          reject,
          promise,
          currentSnapshot: this.routerState.snapshot,
          currentRouterState: this.routerState
        });
        return promise.catch((e) => {
          return Promise.reject(e);
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _Router, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _Router, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: Router, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/router/fesm2022/router.mjs
var init_router = __esm({
  "node_modules/@angular/router/fesm2022/router.mjs"() {
    "use strict";
    init_router2();
  }
});

// angular:jit:template:src\app\input-prompt\input-prompt.component.html
var input_prompt_component_default;
var init_input_prompt_component = __esm({
  "angular:jit:template:src\\app\\input-prompt\\input-prompt.component.html"() {
    input_prompt_component_default = `<div class="chat-container">\r
    <div class="chat-header">\r
        <div class="chat-header__title">Impact Analyzer Chat Window</div> \r
    </div>\r
\r
    <div class="messages-container" #messagesContainer>\r
        <div *ngFor="let message of messages" \r
            class="message" \r
            [ngClass]="{'user-message': message.sender === 'user', 'bot-message': message.sender === 'Mia'}">\r
          <div class="message-content">\r
            <span class="sender-name">{{ message.sender ==='user' ? 'You'\r
                : 'Mia'}}: </span>\r
            <span>{{ message.text }}</span>\r
            <span class="timestamp">{{formatTimestamp(message.timestamp) }} </span>\r
          </div>\r
        </div>\r
    </div>\r
\r
    <div class="chat-input-area">\r
        <input type="text" \r
            [(ngModel)]="newMessage"\r
            (keyup.enter)="sendMessage()"\r
            placeholder="Share your requirement..." \r
            class="chat-input">\r
        <button mat-icon-button color="primary" (click)="sendMessage()" aria-label="Send Message"> \r
            <mat-icon>send</mat-icon>\r
        </button>\r
    </div>\r
</div>`;
  }
});

// angular:jit:style:src\app\input-prompt\input-prompt.component.css
var input_prompt_component_default2;
var init_input_prompt_component2 = __esm({
  "angular:jit:style:src\\app\\input-prompt\\input-prompt.component.css"() {
    input_prompt_component_default2 = '/* src/app/input-prompt/input-prompt.component.css */\n.chat-container {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 10px;\n  top: 2vh;\n  width: 40vw;\n  height: 96vh;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background-color: #fff;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  font-family:\n    Inter,\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    Arial;\n}\n.chat-header {\n  padding: 15px 20px;\n  background:\n    linear-gradient(\n      90deg,\n      #63b9d8,\n      #676f6c 60%);\n  border-bottom: 1px solid #e0e0e0;\n  color: #333;\n  font-size: 1.1em;\n  font-weight: bold;\n}\n.chat-header__title {\n  font-weight: 600;\n}\n.messages-container {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 15px 20px;\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: column;\n}\n.message {\n  margin-bottom: 10px;\n  padding: 8px 12px;\n  border-radius: 15px;\n  max-width: 80%;\n  word-wrap: break-word;\n  font-size: 0.95em;\n  line-height: 1.4;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.user-message {\n  align-self: flex-end;\n  background: #e0f7fa;\n  color: #212121;\n}\n.bot-message {\n  align-self: flex-start;\n  background: #f1f1f1;\n  color: #333;\n}\n.sender-name {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.timestamp {\n  font-size: 0.75em;\n  color: #757575;\n  margin-left: 10px;\n  white-space: nowrap;\n}\n.chat-input-area {\n  display: flex;\n  padding: 15px 20px;\n  border-top: 1px solid #e0e0e0;\n  background-color: #f5f5f5;\n  align-items: center;\n}\n.chat-input {\n  flex-grow: 1;\n  padding: 10px 15px;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  font-size: 1em;\n  margin-right: 10px;\n  outline: none;\n}\n.chat-input.focus {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n/*# sourceMappingURL=input-prompt.component.css.map */\n';
  }
});

// node_modules/@angular/forms/fesm2022/forms.mjs
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? { "min": { "min": min, "actual": control.value } } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? { "max": { "max": max, "actual": control.value } } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? { "required": true } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : { "required": true };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : { "email": true };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? { "minlength": { "requiredLength": minLength, "actualLength": length } } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return { "maxlength": { "requiredLength": maxLength, "actualLength": length } };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : { "pattern": { "requiredPattern": regexStr, "actualValue": value } };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : ((c) => validator.validate(c));
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, { emitModelToViewChange: false });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var BaseControlValueAccessor, BuiltInControlValueAccessor, NG_VALUE_ACCESSOR, CHECKBOX_VALUE_ACCESSOR, CheckboxControlValueAccessor, DEFAULT_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NG_VALIDATORS, NG_ASYNC_VALIDATORS, EMAIL_REGEXP, AbstractControlDirective, ControlContainer, NgControl, AbstractControlStatus, ngControlStatusHost, ngGroupStatusHost, NgControlStatus, NgControlStatusGroup, formControlNameExample, formGroupNameExample, formArrayNameExample, ngModelGroupExample, ngModelWithFormGroupExample, disabledAttrWarning, asyncValidatorsDroppedWithOptsWarning, VALID, INVALID, PENDING, DISABLED, ControlEvent, ValueChangeEvent, PristineChangeEvent, TouchedChangeEvent, StatusChangeEvent, FormSubmittedEvent, FormResetEvent, AbstractControl, FormGroup, FormRecord, CALL_SET_DISABLED_STATE, setDisabledStateDefault, formDirectiveProvider$1, resolvedPromise$1, NgForm, FormControl, isFormControl, AbstractFormGroupDirective, modelGroupProvider, NgModelGroup, formControlBinding$1, resolvedPromise, NgModel, \u0275NgNoValidate, NUMBER_VALUE_ACCESSOR, NumberValueAccessor, RADIO_VALUE_ACCESSOR, RadioControlRegistry, RadioControlValueAccessor, RANGE_VALUE_ACCESSOR, RangeValueAccessor, NG_MODEL_WITH_FORM_CONTROL_WARNING, formControlBinding, FormControlDirective, formDirectiveProvider, FormGroupDirective, formGroupNameProvider, FormGroupName, formArrayNameProvider, FormArrayName, controlNameBinding, FormControlName, SELECT_VALUE_ACCESSOR, SelectControlValueAccessor, NgSelectOption, SELECT_MULTIPLE_VALUE_ACCESSOR, SelectMultipleControlValueAccessor, \u0275NgSelectMultipleOption, AbstractValidatorDirective, MAX_VALIDATOR, MaxValidator, MIN_VALIDATOR, MinValidator, REQUIRED_VALIDATOR, CHECKBOX_REQUIRED_VALIDATOR, RequiredValidator, CheckboxRequiredValidator, EMAIL_VALIDATOR, EmailValidator, MIN_LENGTH_VALIDATOR, MinLengthValidator, MAX_LENGTH_VALIDATOR, MaxLengthValidator, PATTERN_VALIDATOR, PatternValidator, SHARED_FORM_DIRECTIVES, TEMPLATE_DRIVEN_DIRECTIVES, REACTIVE_DRIVEN_DIRECTIVES, \u0275InternalFormsSharedModule, FormArray, FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, FormsModule, ReactiveFormsModule;
var init_forms = __esm({
  "node_modules/@angular/forms/fesm2022/forms.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    init_operators();
    BaseControlValueAccessor = class _BaseControlValueAccessor {
      _renderer;
      _elementRef;
      /**
       * The registered callback function called when a change or input event occurs on the input
       * element.
       * @docs-private
       */
      onChange = (_) => {
      };
      /**
       * The registered callback function called when a blur event occurs on the input element.
       * @docs-private
       */
      onTouched = () => {
      };
      constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
      }
      /**
       * Helper method that sets a property on a target element using the current Renderer
       * implementation.
       * @docs-private
       */
      setProperty(key, value) {
        this._renderer.setProperty(this._elementRef.nativeElement, key, value);
      }
      /**
       * Registers a function called when the control is touched.
       * @docs-private
       */
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = fn;
      }
      /**
       * Sets the "disabled" property on the range input element.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.setProperty("disabled", isDisabled);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _BaseControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _BaseControlValueAccessor, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: BaseControlValueAccessor, decorators: [{
      type: Directive
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }] });
    BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _BuiltInControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _BuiltInControlValueAccessor, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: BuiltInControlValueAccessor, decorators: [{
      type: Directive
    }] });
    NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
    CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxControlValueAccessor),
      multi: true
    };
    CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "checked" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("checked", value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _CheckboxControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _CheckboxControlValueAccessor, isStandalone: false, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]", host: { listeners: { "change": "onChange($any($event.target).checked)", "blur": "onTouched()" } }, providers: [CHECKBOX_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: CheckboxControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
        host: { "(change)": "onChange($any($event.target).checked)", "(blur)": "onTouched()" },
        providers: [CHECKBOX_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultValueAccessor),
      multi: true
    };
    COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
    DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
      _compositionMode;
      /** Whether the user is creating a composition string (IME events). */
      _composing = false;
      constructor(renderer, elementRef, _compositionMode) {
        super(renderer, elementRef);
        this._compositionMode = _compositionMode;
        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /** @internal */
      _handleInput(value) {
        if (!this._compositionMode || this._compositionMode && !this._composing) {
          this.onChange(value);
        }
      }
      /** @internal */
      _compositionStart() {
        this._composing = true;
      }
      /** @internal */
      _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _DefaultValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: COMPOSITION_BUFFER_MODE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _DefaultValueAccessor, isStandalone: false, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]", host: { listeners: { "input": "_handleInput($any($event.target).value)", "blur": "onTouched()", "compositionstart": "_compositionStart()", "compositionend": "_compositionEnd($any($event.target).value)" } }, providers: [DEFAULT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: DefaultValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngModel],[formControl],[formControlName]',
        host: {
          "(input)": "_handleInput($any($event.target).value)",
          "(blur)": "onTouched()",
          "(compositionstart)": "_compositionStart()",
          "(compositionend)": "_compositionEnd($any($event.target).value)"
        },
        providers: [DEFAULT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }] }] });
    NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
    NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
    EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    AbstractControlDirective = class {
      /**
       * @description
       * Reports the value of the control if it is present, otherwise null.
       */
      get value() {
        return this.control ? this.control.value : null;
      }
      /**
       * @description
       * Reports whether the control is valid. A control is considered valid if no
       * validation errors exist with the current value.
       * If the control is not present, null is returned.
       */
      get valid() {
        return this.control ? this.control.valid : null;
      }
      /**
       * @description
       * Reports whether the control is invalid, meaning that an error exists in the input value.
       * If the control is not present, null is returned.
       */
      get invalid() {
        return this.control ? this.control.invalid : null;
      }
      /**
       * @description
       * Reports whether a control is pending, meaning that async validation is occurring and
       * errors are not yet available for the input value. If the control is not present, null is
       * returned.
       */
      get pending() {
        return this.control ? this.control.pending : null;
      }
      /**
       * @description
       * Reports whether the control is disabled, meaning that the control is disabled
       * in the UI and is exempt from validation checks and excluded from aggregate
       * values of ancestor controls. If the control is not present, null is returned.
       */
      get disabled() {
        return this.control ? this.control.disabled : null;
      }
      /**
       * @description
       * Reports whether the control is enabled, meaning that the control is included in ancestor
       * calculations of validity or value. If the control is not present, null is returned.
       */
      get enabled() {
        return this.control ? this.control.enabled : null;
      }
      /**
       * @description
       * Reports the control's validation errors. If the control is not present, null is returned.
       */
      get errors() {
        return this.control ? this.control.errors : null;
      }
      /**
       * @description
       * Reports whether the control is pristine, meaning that the user has not yet changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get pristine() {
        return this.control ? this.control.pristine : null;
      }
      /**
       * @description
       * Reports whether the control is dirty, meaning that the user has changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get dirty() {
        return this.control ? this.control.dirty : null;
      }
      /**
       * @description
       * Reports whether the control is touched, meaning that the user has triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get touched() {
        return this.control ? this.control.touched : null;
      }
      /**
       * @description
       * Reports the validation status of the control. Possible values include:
       * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
       * If the control is not present, null is returned.
       */
      get status() {
        return this.control ? this.control.status : null;
      }
      /**
       * @description
       * Reports whether the control is untouched, meaning that the user has not yet triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get untouched() {
        return this.control ? this.control.untouched : null;
      }
      /**
       * @description
       * Returns a multicasting observable that emits a validation status whenever it is
       * calculated for the control. If the control is not present, null is returned.
       */
      get statusChanges() {
        return this.control ? this.control.statusChanges : null;
      }
      /**
       * @description
       * Returns a multicasting observable of value changes for the control that emits every time the
       * value of the control changes in the UI or programmatically.
       * If the control is not present, null is returned.
       */
      get valueChanges() {
        return this.control ? this.control.valueChanges : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return null;
      }
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       */
      _composedAsyncValidatorFn;
      /**
       * Set of synchronous validators as they were provided while calling `setValidators` function.
       * @internal
       */
      _rawValidators = [];
      /**
       * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
       * function.
       * @internal
       */
      _rawAsyncValidators = [];
      /**
       * Sets synchronous validators for this directive.
       * @internal
       */
      _setValidators(validators) {
        this._rawValidators = validators || [];
        this._composedValidatorFn = composeValidators(this._rawValidators);
      }
      /**
       * Sets asynchronous validators for this directive.
       * @internal
       */
      _setAsyncValidators(validators) {
        this._rawAsyncValidators = validators || [];
        this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
      }
      /**
       * @description
       * Synchronous validator function composed of all the synchronous validators registered with this
       * directive.
       */
      get validator() {
        return this._composedValidatorFn || null;
      }
      /**
       * @description
       * Asynchronous validator function composed of all the asynchronous validators registered with
       * this directive.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
      }
      /*
       * The set of callbacks to be invoked when directive instance is being destroyed.
       */
      _onDestroyCallbacks = [];
      /**
       * Internal function to register callbacks that should be invoked
       * when directive instance is being destroyed.
       * @internal
       */
      _registerOnDestroy(fn) {
        this._onDestroyCallbacks.push(fn);
      }
      /**
       * Internal function to invoke all registered "on destroy" callbacks.
       * Note: calling this function also clears the list of callbacks.
       * @internal
       */
      _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach((fn) => fn());
        this._onDestroyCallbacks = [];
      }
      /**
       * @description
       * Resets the control with the provided value if the control is present.
       */
      reset(value = void 0) {
        if (this.control)
          this.control.reset(value);
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
      }
    };
    ControlContainer = class extends AbstractControlDirective {
      /**
       * @description
       * The name for the control
       */
      name;
      /**
       * @description
       * The top-level form directive for the control.
       */
      get formDirective() {
        return null;
      }
      /**
       * @description
       * The path to this group.
       */
      get path() {
        return null;
      }
    };
    NgControl = class extends AbstractControlDirective {
      /**
       * @description
       * The parent form for the control.
       *
       * @internal
       */
      _parent = null;
      /**
       * @description
       * The name for the control
       */
      name = null;
      /**
       * @description
       * The value accessor for the control
       */
      valueAccessor = null;
    };
    AbstractControlStatus = class {
      _cd;
      constructor(cd) {
        this._cd = cd;
      }
      get isTouched() {
        this._cd?.control?._touched?.();
        return !!this._cd?.control?.touched;
      }
      get isUntouched() {
        return !!this._cd?.control?.untouched;
      }
      get isPristine() {
        this._cd?.control?._pristine?.();
        return !!this._cd?.control?.pristine;
      }
      get isDirty() {
        return !!this._cd?.control?.dirty;
      }
      get isValid() {
        this._cd?.control?._status?.();
        return !!this._cd?.control?.valid;
      }
      get isInvalid() {
        return !!this._cd?.control?.invalid;
      }
      get isPending() {
        return !!this._cd?.control?.pending;
      }
      get isSubmitted() {
        this._cd?._submitted?.();
        return !!this._cd?.submitted;
      }
    };
    ngControlStatusHost = {
      "[class.ng-untouched]": "isUntouched",
      "[class.ng-touched]": "isTouched",
      "[class.ng-pristine]": "isPristine",
      "[class.ng-dirty]": "isDirty",
      "[class.ng-valid]": "isValid",
      "[class.ng-invalid]": "isInvalid",
      "[class.ng-pending]": "isPending"
    };
    ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
      "[class.ng-submitted]": "isSubmitted"
    });
    NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NgControlStatus, deps: [{ token: NgControl, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _NgControlStatus, isStandalone: false, selector: "[formControlName],[ngModel],[formControl]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NgControlStatus, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName],[ngModel],[formControl]",
        host: ngControlStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: NgControl, decorators: [{
      type: Self
    }] }] });
    NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NgControlStatusGroup, deps: [{ token: ControlContainer, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _NgControlStatusGroup, isStandalone: false, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending", "class.ng-submitted": "isSubmitted" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NgControlStatusGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
        host: ngGroupStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Self
    }] }] });
    formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
    formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
    formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
    ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
    ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
    disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
    asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
    VALID = "VALID";
    INVALID = "INVALID";
    PENDING = "PENDING";
    DISABLED = "DISABLED";
    ControlEvent = class {
    };
    ValueChangeEvent = class extends ControlEvent {
      value;
      source;
      constructor(value, source) {
        super();
        this.value = value;
        this.source = source;
      }
    };
    PristineChangeEvent = class extends ControlEvent {
      pristine;
      source;
      constructor(pristine, source) {
        super();
        this.pristine = pristine;
        this.source = source;
      }
    };
    TouchedChangeEvent = class extends ControlEvent {
      touched;
      source;
      constructor(touched, source) {
        super();
        this.touched = touched;
        this.source = source;
      }
    };
    StatusChangeEvent = class extends ControlEvent {
      status;
      source;
      constructor(status, source) {
        super();
        this.status = status;
        this.source = source;
      }
    };
    FormSubmittedEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    FormResetEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    AbstractControl = class {
      /** @internal */
      _pendingDirty = false;
      /**
       * Indicates that a control has its own pending asynchronous validation in progress.
       * It also stores if the control should emit events when the validation status changes.
       *
       * @internal
       */
      _hasOwnPendingAsyncValidator = null;
      /** @internal */
      _pendingTouched = false;
      /** @internal */
      _onCollectionChange = () => {
      };
      /** @internal */
      _updateOn;
      _parent = null;
      _asyncValidationSubscription;
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       *
       * @internal
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       *
       * @internal
       */
      _composedAsyncValidatorFn;
      /**
       * Synchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setValidators` function
       *  - while calling the setter on the `validator` field (e.g. `control.validator = validatorFn`)
       *
       * @internal
       */
      _rawValidators;
      /**
       * Asynchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setAsyncValidators` function
       *  - while calling the setter on the `asyncValidator` field (e.g. `control.asyncValidator =
       * asyncValidatorFn`)
       *
       * @internal
       */
      _rawAsyncValidators;
      /**
       * The current value of the control.
       *
       * * For a `FormControl`, the current value.
       * * For an enabled `FormGroup`, the values of enabled controls as an object
       * with a key-value pair for each member of the group.
       * * For a disabled `FormGroup`, the values of all controls as an object
       * with a key-value pair for each member of the group.
       * * For a `FormArray`, the values of enabled controls as an array.
       *
       */
      value;
      /**
       * Initialize the AbstractControl instance.
       *
       * @param validators The function or array of functions that is used to determine the validity of
       *     this control synchronously.
       * @param asyncValidators The function or array of functions that is used to determine validity of
       *     this control asynchronously.
       */
      constructor(validators, asyncValidators) {
        this._assignValidators(validators);
        this._assignAsyncValidators(asyncValidators);
      }
      /**
       * Returns the function that is used to determine the validity of this control synchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get validator() {
        return this._composedValidatorFn;
      }
      set validator(validatorFn) {
        this._rawValidators = this._composedValidatorFn = validatorFn;
      }
      /**
       * Returns the function that is used to determine the validity of this control asynchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn;
      }
      set asyncValidator(asyncValidatorFn) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
      }
      /**
       * The parent control.
       */
      get parent() {
        return this._parent;
      }
      /**
       * The validation status of the control.
       *
       * @see {@link FormControlStatus}
       *
       * These status values are mutually exclusive, so a control cannot be
       * both valid AND invalid or invalid AND disabled.
       */
      get status() {
        return untracked(this.statusReactive);
      }
      set status(v) {
        untracked(() => this.statusReactive.set(v));
      }
      /** @internal */
      _status = computed(() => this.statusReactive(), ...ngDevMode ? [{ debugName: "_status" }] : []);
      statusReactive = signal(void 0, ...ngDevMode ? [{ debugName: "statusReactive" }] : []);
      /**
       * A control is `valid` when its `status` is `VALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control has passed all of its validation tests,
       * false otherwise.
       */
      get valid() {
        return this.status === VALID;
      }
      /**
       * A control is `invalid` when its `status` is `INVALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control has failed one or more of its validation checks,
       * false otherwise.
       */
      get invalid() {
        return this.status === INVALID;
      }
      /**
       * A control is `pending` when its `status` is `PENDING`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control is in the process of conducting a validation check,
       * false otherwise.
       */
      get pending() {
        return this.status == PENDING;
      }
      /**
       * A control is `disabled` when its `status` is `DISABLED`.
       *
       * Disabled controls are exempt from validation checks and
       * are not included in the aggregate value of their ancestor
       * controls.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control is disabled, false otherwise.
       */
      get disabled() {
        return this.status === DISABLED;
      }
      /**
       * A control is `enabled` as long as its `status` is not `DISABLED`.
       *
       * @returns True if the control has any status other than 'DISABLED',
       * false if the status is 'DISABLED'.
       *
       * @see {@link AbstractControl.status}
       *
       */
      get enabled() {
        return this.status !== DISABLED;
      }
      /**
       * An object containing any errors generated by failing validation,
       * or null if there are no errors.
       */
      errors;
      /**
       * A control is `pristine` if the user has not yet changed
       * the value in the UI.
       *
       * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get pristine() {
        return untracked(this.pristineReactive);
      }
      set pristine(v) {
        untracked(() => this.pristineReactive.set(v));
      }
      /** @internal */
      _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{ debugName: "_pristine" }] : []);
      pristineReactive = signal(true, ...ngDevMode ? [{ debugName: "pristineReactive" }] : []);
      /**
       * A control is `dirty` if the user has changed the value
       * in the UI.
       *
       * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get dirty() {
        return !this.pristine;
      }
      /**
       * True if the control is marked as `touched`.
       *
       * A control is marked `touched` once the user has triggered
       * a `blur` event on it.
       */
      get touched() {
        return untracked(this.touchedReactive);
      }
      set touched(v) {
        untracked(() => this.touchedReactive.set(v));
      }
      /** @internal */
      _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{ debugName: "_touched" }] : []);
      touchedReactive = signal(false, ...ngDevMode ? [{ debugName: "touchedReactive" }] : []);
      /**
       * True if the control has not been marked as touched
       *
       * A control is `untouched` if the user has not yet triggered
       * a `blur` event on it.
       */
      get untouched() {
        return !this.touched;
      }
      /**
       * Exposed as observable, see below.
       *
       * @internal
       */
      _events = new Subject();
      /**
       * A multicasting observable that emits an event every time the state of the control changes.
       * It emits for value, status, pristine or touched changes.
       *
       * **Note**: On value change, the emit happens right after a value of this control is updated. The
       * value of a parent control (for example if this FormControl is a part of a FormGroup) is updated
       * later, so accessing a value of a parent control (using the `value` property) from the callback
       * of this event might result in getting a value that has not been updated yet. Subscribe to the
       * `events` of the parent control instead.
       * For other event types, the events are emitted after the parent control has been updated.
       *
       * @see [Unified control state change events](guide/forms/reactive-forms#unified-control-state-change-events)
       */
      events = this._events.asObservable();
      /**
       * A multicasting observable that emits an event every time the value of the control changes, in
       * the UI or programmatically. It also emits an event each time you call enable() or disable()
       * without passing along {emitEvent: false} as a function argument.
       *
       * **Note**: the emit happens right after a value of this control is updated. The value of a
       * parent control (for example if this FormControl is a part of a FormGroup) is updated later, so
       * accessing a value of a parent control (using the `value` property) from the callback of this
       * event might result in getting a value that has not been updated yet. Subscribe to the
       * `valueChanges` event of the parent control instead.
       */
      valueChanges;
      /**
       * A multicasting observable that emits an event every time the validation `status` of the control
       * recalculates.
       *
       * @see {@link FormControlStatus}
       * @see {@link AbstractControl.status}
       */
      statusChanges;
      /**
       * Reports the update strategy of the `AbstractControl` (meaning
       * the event on which the control updates itself).
       * Possible values: `'change'` | `'blur'` | `'submit'`
       * Default value: `'change'`
       */
      get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
      }
      /**
       * Sets the synchronous validators that are active on this control.  Calling
       * this overwrites any existing synchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addValidators()` method instead.
       */
      setValidators(validators) {
        this._assignValidators(validators);
      }
      /**
       * Sets the asynchronous validators that are active on this control. Calling this
       * overwrites any existing asynchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addAsyncValidators()` method instead.
       */
      setAsyncValidators(validators) {
        this._assignAsyncValidators(validators);
      }
      /**
       * Add a synchronous validator or validators to this control, without affecting other validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect. If duplicate validator functions
       * are present in the `validators` array, only the first instance would be added to a form
       * control.
       *
       * @param validators The new validator function or functions to add to this control.
       */
      addValidators(validators) {
        this.setValidators(addValidators(validators, this._rawValidators));
      }
      /**
       * Add an asynchronous validator or validators to this control, without affecting other
       * validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect.
       *
       * @param validators The new asynchronous validator function or functions to add to this control.
       */
      addAsyncValidators(validators) {
        this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Remove a synchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found,
       * it is ignored.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<string | null>('', Validators.required);
       * ctrl.removeValidators(Validators.required);
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<string | null>('', minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       *
       * ctrl.removeValidators(minValidator);
       * ```
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The validator or validators to remove.
       */
      removeValidators(validators) {
        this.setValidators(removeValidators(validators, this._rawValidators));
      }
      /**
       * Remove an asynchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found, it
       * is ignored.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The asynchronous validator or validators to remove.
       */
      removeAsyncValidators(validators) {
        this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Check whether a synchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<number | null>(0, Validators.required);
       * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<number | null>(0, minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       * ```
       *
       * @param validator The validator to check for presence. Compared by function reference.
       * @returns Whether the provided validator was found on this control.
       */
      hasValidator(validator) {
        return hasValidator(this._rawValidators, validator);
      }
      /**
       * Check whether an asynchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @param validator The asynchronous validator to check for presence. Compared by function
       *     reference.
       * @returns Whether the provided asynchronous validator was found on this control.
       */
      hasAsyncValidator(validator) {
        return hasValidator(this._rawAsyncValidators, validator);
      }
      /**
       * Empties out the synchronous validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearValidators() {
        this.validator = null;
      }
      /**
       * Empties out the async validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearAsyncValidators() {
        this.asyncValidator = null;
      }
      markAsTouched(opts = {}) {
        const changed = this.touched === false;
        this.touched = true;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(true, sourceControl));
        }
      }
      /**
       * Marks the control and all its descendant controls as `dirty`.
       * @see {@link markAsDirty()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `PristineChangeEvent` with the `pristine` property being `false`.
       * When false, no events are emitted.
       */
      markAllAsDirty(opts = {}) {
        this.markAsDirty({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsDirty(opts));
      }
      /**
       * Marks the control and all its descendant controls as `touched`.
       * @see {@link markAsTouched()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
       * When false, no events are emitted.
       */
      markAllAsTouched(opts = {}) {
        this.markAsTouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsTouched(opts));
      }
      markAsUntouched(opts = {}) {
        const changed = this.touched === true;
        this.touched = false;
        this._pendingTouched = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsUntouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(false, sourceControl));
        }
      }
      markAsDirty(opts = {}) {
        const changed = this.pristine === true;
        this.pristine = false;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(false, sourceControl));
        }
      }
      markAsPristine(opts = {}) {
        const changed = this.pristine === false;
        this.pristine = true;
        this._pendingDirty = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsPristine({ onlySelf: true, emitEvent: opts.emitEvent });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(true, sourceControl));
        }
      }
      markAsPending(opts = {}) {
        this.status = PENDING;
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      disable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild((control) => {
          control.disable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this._updateValue();
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(true));
      }
      /**
       * Enables the control. This means the control is included in validation checks and
       * the aggregate value of its parent. Its status recalculates based on its value and
       * its validators.
       *
       * By default, if the control has children, all children are enabled.
       *
       * @see {@link AbstractControl.status}
       *
       * @param opts Configure options that control how the control propagates changes and
       * emits events when marked as untouched
       * * `onlySelf`: When true, mark only this control. When false or not supplied,
       * marks all direct ancestors. Default is false.
       * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
       * `valueChanges` and `events`
       * observables emit events with the latest status and value when the control is enabled.
       * When false, no events are emitted.
       */
      enable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = VALID;
        this._forEachChild((control) => {
          control.enable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(false));
      }
      _updateAncestors(opts, sourceControl) {
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(opts);
          if (!opts.skipPristineCheck) {
            this._parent._updatePristine({}, sourceControl);
          }
          this._parent._updateTouched({}, sourceControl);
        }
      }
      /**
       * Sets the parent of the control
       *
       * @param parent The new parent.
       */
      setParent(parent) {
        this._parent = parent;
      }
      /**
       * The raw value of this control. For most control implementations, the raw value will include
       * disabled children.
       */
      getRawValue() {
        return this.value;
      }
      updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
          const shouldHaveEmitted = this._cancelExistingSubscription();
          this.errors = this._runValidator();
          this.status = this._calculateStatus();
          if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
          }
        }
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      /** @internal */
      _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
      }
      _setInitialStatus() {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
      }
      _runValidator() {
        return this.validator ? this.validator(this) : null;
      }
      _runAsyncValidator(shouldHaveEmitted, emitEvent) {
        if (this.asyncValidator) {
          this.status = PENDING;
          this._hasOwnPendingAsyncValidator = {
            emitEvent: emitEvent !== false,
            shouldHaveEmitted: shouldHaveEmitted !== false
          };
          const obs = toObservable(this.asyncValidator(this));
          this._asyncValidationSubscription = obs.subscribe((errors) => {
            this._hasOwnPendingAsyncValidator = null;
            this.setErrors(errors, { emitEvent, shouldHaveEmitted });
          });
        }
      }
      _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
          this._asyncValidationSubscription.unsubscribe();
          const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
          this._hasOwnPendingAsyncValidator = null;
          return shouldHaveEmitted;
        }
        return false;
      }
      setErrors(errors, opts = {}) {
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
      }
      /**
       * Retrieves a child control given the control's name or path.
       *
       * @param path A dot-delimited string or array of string/number values that define the path to the
       * control. If a string is provided, passing it as a string literal will result in improved type
       * information. Likewise, if an array is provided, passing it `as const` will cause improved type
       * information to be available.
       *
       * @usageNotes
       * ### Retrieve a nested control
       *
       * For example, to get a `name` control nested within a `person` sub-group:
       *
       * * `this.form.get('person.name');`
       *
       * -OR-
       *
       * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
       *
       * ### Retrieve a control in a FormArray
       *
       * When accessing an element inside a FormArray, you can use an element index.
       * For example, to get a `price` control from the first element in an `items` array you can use:
       *
       * * `this.form.get('items.0.price');`
       *
       * -OR-
       *
       * * `this.form.get(['items', 0, 'price']);`
       */
      get(path) {
        let currPath = path;
        if (currPath == null)
          return null;
        if (!Array.isArray(currPath))
          currPath = currPath.split(".");
        if (currPath.length === 0)
          return null;
        return currPath.reduce((control, name) => control && control._find(name), this);
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
      }
      /**
       * Retrieves the top-level ancestor of this control.
       */
      get root() {
        let x = this;
        while (x._parent) {
          x = x._parent;
        }
        return x;
      }
      /** @internal */
      _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
        this.status = this._calculateStatus();
        if (emitEvent) {
          this.statusChanges.emit(this.status);
        }
        if (emitEvent || shouldHaveEmitted) {
          this._events.next(new StatusChangeEvent(this.status, changedControl));
        }
        if (this._parent) {
          this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
        }
      }
      /** @internal */
      _initObservables() {
        this.valueChanges = new EventEmitter();
        this.statusChanges = new EventEmitter();
      }
      _calculateStatus() {
        if (this._allControlsDisabled())
          return DISABLED;
        if (this.errors)
          return INVALID;
        if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
          return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
          return INVALID;
        return VALID;
      }
      /** @internal */
      _anyControlsHaveStatus(status) {
        return this._anyControls((control) => control.status === status);
      }
      /** @internal */
      _anyControlsDirty() {
        return this._anyControls((control) => control.dirty);
      }
      /** @internal */
      _anyControlsTouched() {
        return this._anyControls((control) => control.touched);
      }
      /** @internal */
      _updatePristine(opts, changedControl) {
        const newPristine = !this._anyControlsDirty();
        const changed = this.pristine !== newPristine;
        this.pristine = newPristine;
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, changedControl);
        }
        if (changed) {
          this._events.next(new PristineChangeEvent(this.pristine, changedControl));
        }
      }
      /** @internal */
      _updateTouched(opts = {}, changedControl) {
        this.touched = this._anyControlsTouched();
        this._events.next(new TouchedChangeEvent(this.touched, changedControl));
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, changedControl);
        }
      }
      /** @internal */
      _onDisabledChange = [];
      /** @internal */
      _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
      }
      /** @internal */
      _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
          this._updateOn = opts.updateOn;
        }
      }
      /**
       * Check to see if parent has been marked artificially dirty.
       *
       * @internal
       */
      _parentMarkedDirty(onlySelf) {
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
      }
      /** @internal */
      _find(name) {
        return null;
      }
      /**
       * Internal implementation of the `setValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignValidators(validators) {
        this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedValidatorFn = coerceToValidator(this._rawValidators);
      }
      /**
       * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignAsyncValidators(validators) {
        this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
      }
    };
    FormGroup = class extends AbstractControl {
      /**
       * Creates a new `FormGroup` instance.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
          // so we set `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      registerControl(name, control) {
        if (this.controls[name])
          return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
      }
      addControl(name, control, options = {}) {
        this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Remove a control from this group. In a strongly-typed group, required controls cannot be
       * removed.
       *
       * This method also updates the value and validity of the control.
       *
       * @param name The control name to remove from the collection
       * @param options Specifies whether this FormGroup instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       */
      removeControl(name, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      setControl(name, control, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        if (control)
          this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
      }
      /**
       * Sets the value of the `FormGroup`. It accepts an object that matches
       * the structure of the group, with control names as keys.
       *
       * @usageNotes
       * ### Set the complete value for the form group
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl(),
       *   last: new FormControl()
       * });
       *
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.setValue({first: 'Nancy', last: 'Drew'});
       * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
       * ```
       *
       * @throws When strict checks fail, such as setting the value of a control
       * that doesn't exist or if you exclude a value of a control that does exist.
       *
       * @param value The new value for the control that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes
       * and emits events after the value changes.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, true, value);
        Object.keys(value).forEach((name) => {
          assertControlPresent(this, true, name);
          this.controls[name].setValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormGroup`. It accepts an object with control
       * names as keys, and does its best to match the values to the correct controls
       * in the group.
       *
       * It accepts both super-sets and sub-sets of the group without throwing an error.
       *
       * @usageNotes
       * ### Patch the value for a form group
       *
       * ```ts
       * const form = new FormGroup({
       *    first: new FormControl(),
       *    last: new FormControl()
       * });
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.patchValue({first: 'Nancy'});
       * console.log(form.value);   // {first: 'Nancy', last: null}
       * ```
       *
       * @param value The object that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes and
       * emits events after the value is patched.
       * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
       * true.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control value
       * is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        Object.keys(value).forEach((name) => {
          const control = this.controls[name];
          if (control) {
            control.patchValue(
              /* Guaranteed to be present, due to the outer forEach. */
              value[name],
              { onlySelf: true, emitEvent: options.emitEvent }
            );
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
       * the value of all descendants to their default values, or null if no defaults were provided.
       *
       * You reset to a specific form state by passing in a map of states
       * that matches the structure of your form, with control names as keys. The state
       * is a standalone value or a form state object with both a value and a disabled
       * status.
       *
       * @param value Resets the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param options Configuration options that determine how the control propagates changes
       * and emits events when the group is reset.
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * @usageNotes
       *
       * ### Reset the form group values
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * console.log(form.value);  // {first: 'first name', last: 'last name'}
       *
       * form.reset({ first: 'name', last: 'last name' });
       *
       * console.log(form.value);  // {first: 'name', last: 'last name'}
       * ```
       *
       * ### Reset the form group values and disabled status
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * form.reset({
       *   first: {value: 'name', disabled: true},
       *   last: 'last'
       * });
       *
       * console.log(form.value);  // {last: 'last'}
       * console.log(form.get('first').status);  // 'DISABLED'
       * ```
       */
      reset(value = {}, options = {}) {
        this._forEachChild((control, name) => {
          control.reset(value ? value[name] : null, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      /**
       * The aggregate value of the `FormGroup`, including any disabled controls.
       *
       * Retrieves all values regardless of disabled status.
       */
      getRawValue() {
        return this._reduceChildren({}, (acc, control, name) => {
          acc[name] = control.getRawValue();
          return acc;
        });
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
          return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        Object.keys(this.controls).forEach((key) => {
          const control = this.controls[key];
          control && cb(control, key);
        });
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => {
          control.setParent(this);
          control._registerOnCollectionChange(this._onCollectionChange);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this._reduceValue();
      }
      /** @internal */
      _anyControls(condition) {
        for (const [controlName, control] of Object.entries(this.controls)) {
          if (this.contains(controlName) && condition(control)) {
            return true;
          }
        }
        return false;
      }
      /** @internal */
      _reduceValue() {
        let acc = {};
        return this._reduceChildren(acc, (acc2, control, name) => {
          if (control.enabled || this.disabled) {
            acc2[name] = control.value;
          }
          return acc2;
        });
      }
      /** @internal */
      _reduceChildren(initValue, fn) {
        let res = initValue;
        this._forEachChild((control, name) => {
          res = fn(res, control, name);
        });
        return res;
      }
      /** @internal */
      _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
          if (this.controls[controlName].enabled) {
            return false;
          }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
      }
      /** @internal */
      _find(name) {
        return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
      }
    };
    FormRecord = class extends FormGroup {
    };
    CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
      providedIn: "root",
      factory: () => setDisabledStateDefault
    });
    setDisabledStateDefault = "always";
    formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    };
    resolvedPromise$1 = (() => Promise.resolve())();
    NgForm = class _NgForm extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Returns whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this.submittedReactive);
      }
      /** @internal */
      _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
      submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "submittedReactive" }] : []);
      _directives = /* @__PURE__ */ new Set();
      /**
       * @description
       * The `FormGroup` instance created for this form.
       */
      form;
      /**
       * @description
       * Event emitter for the "ngSubmit" event
       */
      ngSubmit = new EventEmitter();
      /**
       * @description
       * Tracks options for the `NgForm` instance.
       *
       * **updateOn**: Sets the default `updateOn` value for all child `NgModels` below it
       * unless explicitly set by a child `NgModel` using `ngModelOptions`). Defaults to 'change'.
       * Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
      }
      /** @docs-private */
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      /**
       * @description
       * The directive instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * The internal `FormGroup` instance.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it is always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Returns a map of the controls in this group.
       */
      get controls() {
        return this.form.controls;
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `NgModel` directive instance.
       */
      addControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          dir.control = container.registerControl(dir.name, dir.control);
          setUpControl(dir.control, dir, this.callSetDisabledState);
          dir.control.updateValueAndValidity({ emitEvent: false });
          this._directives.add(dir);
        });
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `NgModel` directive.
       *
       * @param dir The `NgModel` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `NgModel` instance from the internal list of directives
       *
       * @param dir The `NgModel` directive instance.
       */
      removeControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
          this._directives.delete(dir);
        });
      }
      /**
       * @description
       * Adds a new `NgModelGroup` directive instance to the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      addFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          const group = new FormGroup({});
          setUpFormContainer(group, dir);
          container.registerControl(dir.name, group);
          group.updateValueAndValidity({ emitEvent: false });
        });
      }
      /**
       * @description
       * Removes the `NgModelGroup` directive instance from the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      removeFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
        });
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `NgControl` directive.
       *
       * @param dir The `NgControl` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        resolvedPromise$1.then(() => {
          const ctrl = this.form.get(dir.path);
          ctrl.setValue(value);
        });
      }
      /**
       * @description
       * Sets the value for this `FormGroup`.
       *
       * @param value The new value
       */
      setValue(value) {
        this.control.setValue(value);
      }
      /**
       * @description
       * Method called when the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this.submittedReactive.set(true);
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form.
       */
      resetForm(value = void 0) {
        this.form.reset(value);
        this.submittedReactive.set(false);
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.form._updateOn = this.options.updateOn;
        }
      }
      _findContainer(path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NgForm, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _NgForm, isStandalone: false, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: { options: ["ngFormOptions", "options"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider$1], exportAs: ["ngForm"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NgForm, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
        providers: [formDirectiveProvider$1],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        outputs: ["ngSubmit"],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { options: [{
      type: Input,
      args: ["ngFormOptions"]
    }] } });
    FormControl = class FormControl2 extends AbstractControl {
      /** @publicApi */
      defaultValue = null;
      /** @internal */
      _onChange = [];
      /** @internal */
      _pendingValue;
      /** @internal */
      _pendingChange = false;
      constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set
          // `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
        if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
          if (isFormControlState(formState)) {
            this.defaultValue = formState.value;
          } else {
            this.defaultValue = formState;
          }
        }
      }
      setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
          this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
      }
      patchValue(value, options = {}) {
        this.setValue(value, options);
      }
      reset(formState = this.defaultValue, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      /**  @internal */
      _updateValue() {
      }
      /**  @internal */
      _anyControls(condition) {
        return false;
      }
      /**  @internal */
      _allControlsDisabled() {
        return this.disabled;
      }
      registerOnChange(fn) {
        this._onChange.push(fn);
      }
      /** @internal */
      _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
      }
      registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
      }
      /** @internal */
      _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
      }
      /** @internal */
      _forEachChild(cb) {
      }
      /** @internal */
      _syncPendingControls() {
        if (this.updateOn === "submit") {
          if (this._pendingDirty)
            this.markAsDirty();
          if (this._pendingTouched)
            this.markAsTouched();
          if (this._pendingChange) {
            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
            return true;
          }
        }
        return false;
      }
      _applyFormState(formState) {
        if (isFormControlState(formState)) {
          this.value = this._pendingValue = formState.value;
          formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) : this.enable({ onlySelf: true, emitEvent: false });
        } else {
          this.value = this._pendingValue = formState;
        }
      }
    };
    isFormControl = (control) => control instanceof FormControl;
    AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
      /**
       * @description
       * The parent control for the group
       *
       * @internal
       */
      _parent;
      /** @docs-private */
      ngOnInit() {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeFormGroup(this);
        }
      }
      /**
       * @description
       * The `FormGroup` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormGroup(this);
      }
      /**
       * @description
       * The path to this group from the top-level directive.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /** @internal */
      _checkParentType() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _AbstractFormGroupDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _AbstractFormGroupDirective, isStandalone: false, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: AbstractFormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: false
      }]
    }] });
    modelGroupProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgModelGroup)
    };
    NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `NgModelGroup` bound to the directive. The name corresponds
       * to a key in the parent `NgForm`.
       */
      name = "";
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw modelGroupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NgModelGroup, deps: [{ token: ControlContainer, host: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _NgModelGroup, isStandalone: false, selector: "[ngModelGroup]", inputs: { name: ["ngModelGroup", "name"] }, providers: [modelGroupProvider], exportAs: ["ngModelGroup"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NgModelGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModelGroup]",
        providers: [modelGroupProvider],
        exportAs: "ngModelGroup",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["ngModelGroup"]
    }] } });
    formControlBinding$1 = {
      provide: NgControl,
      useExisting: forwardRef(() => NgModel)
    };
    resolvedPromise = (() => Promise.resolve())();
    NgModel = class _NgModel extends NgControl {
      _changeDetectorRef;
      callSetDisabledState;
      control = new FormControl();
      // At runtime we coerce arbitrary values assigned to the "disabled" input to a "boolean".
      // This is not reflected in the type of the property because outside of templates, consumers
      // should only deal with booleans. In templates, a string is allowed for convenience and to
      // match the native "disabled attribute" semantics which can be observed on input elements.
      // This static member tells the compiler that values of type "string" can also be assigned
      // to the input in a template.
      /** @docs-private */
      static ngAcceptInputType_isDisabled;
      /** @internal */
      _registered = false;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the name bound to the directive. If a parent form exists, it
       * uses this name as a key to retrieve this control's value.
       */
      name = "";
      /**
       * @description
       * Tracks whether the control is disabled.
       */
      isDisabled;
      /**
       * @description
       * Tracks the value bound to this directive.
       */
      model;
      /**
       * @description
       * Tracks the configuration options for this `ngModel` instance.
       *
       * **name**: An alternative to setting the name attribute on the form control element. See
       * the [example](api/forms/NgModel#using-ngmodel-on-a-standalone-control) for using `NgModel`
       * as a standalone control.
       *
       * **standalone**: When set to true, the `ngModel` will not register itself with its parent form,
       * and acts as if it's not in the form. Defaults to false. If no parent form exists, this option
       * has no effect.
       *
       * **updateOn**: Defines the event upon which the form control value and validity update.
       * Defaults to 'change'. Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      /**
       * @description
       * Event emitter for producing the `ngModelChange` event after
       * the view model updates.
       */
      update = new EventEmitter();
      constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.callSetDisabledState = callSetDisabledState;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered || "name" in changes) {
          if (this._registered) {
            this._checkName();
            if (this.formDirective) {
              const oldName = changes["name"].previousValue;
              this.formDirective.removeControl({ name: oldName, path: this._getPath(oldName) });
            }
          }
          this._setUpControl();
        }
        if ("isDisabled" in changes) {
          this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          this._updateValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return this._getPath(this.name);
      }
      /**
       * @description
       * The top-level directive for this control if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value emitted by `ngModelChange`.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
        this._registered = true;
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.control._updateOn = this.options.updateOn;
        }
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        setUpControl(this.control, this, this.callSetDisabledState);
        this.control.updateValueAndValidity({ emitEvent: false });
      }
      _checkForErrors() {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
          checkParentType$1(this._parent);
        }
        this._checkName();
      }
      _checkName() {
        if (this.options && this.options.name)
          this.name = this.options.name;
        if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw missingNameException();
        }
      }
      _updateValue(value) {
        resolvedPromise.then(() => {
          this.control.setValue(value, { emitViewToModelChange: false });
          this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(changes) {
        const disabledValue = changes["isDisabled"].currentValue;
        const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
        resolvedPromise.then(() => {
          if (isDisabled && !this.control.disabled) {
            this.control.disable();
          } else if (!isDisabled && this.control.disabled) {
            this.control.enable();
          }
          this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(controlName) {
        return this._parent ? controlPath(controlName, this._parent) : [controlName];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NgModel, deps: [{ token: ControlContainer, host: true, optional: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: ChangeDetectorRef, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _NgModel, isStandalone: false, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: { name: "name", isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"], options: ["ngModelOptions", "options"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding$1], exportAs: ["ngModel"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NgModel, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModel]:not([formControlName]):not([formControl])",
        providers: [formControlBinding$1],
        exportAs: "ngModel",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: ChangeDetectorRef, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { name: [{
      type: Input
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], options: [{
      type: Input,
      args: ["ngModelOptions"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    \u0275NgNoValidate = class _\u0275NgNoValidate {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _\u0275NgNoValidate, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _\u0275NgNoValidate, isStandalone: false, selector: "form:not([ngNoForm]):not([ngNativeValidate])", host: { attributes: { "novalidate": "" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: \u0275NgNoValidate, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([ngNativeValidate])",
        host: { "novalidate": "" },
        standalone: false
      }]
    }] });
    NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberValueAccessor),
      multi: true
    };
    NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NumberValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _NumberValueAccessor, isStandalone: false, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]", host: { listeners: { "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [NUMBER_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NumberValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
        host: { "(input)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [NUMBER_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioControlValueAccessor),
      multi: true
    };
    RadioControlRegistry = class _RadioControlRegistry {
      _accessors = [];
      /**
       * @description
       * Adds a control to the internal registry. For internal use only.
       */
      add(control, accessor) {
        this._accessors.push([control, accessor]);
      }
      /**
       * @description
       * Removes a control from the internal registry. For internal use only.
       */
      remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
          if (this._accessors[i][1] === accessor) {
            this._accessors.splice(i, 1);
            return;
          }
        }
      }
      /**
       * @description
       * Selects a radio button. For internal use only.
       */
      select(accessor) {
        this._accessors.forEach((c) => {
          if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
            c[1].fireUncheck(accessor.value);
          }
        });
      }
      _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
          return false;
        return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RadioControlRegistry, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RadioControlRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RadioControlRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
      _registry;
      _injector;
      /** @internal */
      _state;
      /** @internal */
      _control;
      /** @internal */
      _fn;
      setDisabledStateFired = false;
      /**
       * The registered callback function called when a change event occurs on the input element.
       * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
       * to override the `onChange` function (which expects 1 argument) in the parent
       * `BaseControlValueAccessor` class.
       * @docs-private
       */
      onChange = () => {
      };
      /**
       * @description
       * Tracks the name of the radio input element.
       */
      name;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       */
      formControlName;
      /**
       * @description
       * Tracks the value of the radio input element
       */
      value;
      callSetDisabledState = inject(CALL_SET_DISABLED_STATE, { optional: true }) ?? setDisabledStateDefault;
      constructor(renderer, elementRef, _registry, _injector) {
        super(renderer, elementRef);
        this._registry = _registry;
        this._injector = _injector;
      }
      /** @docs-private */
      ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
      }
      /** @docs-private */
      ngOnDestroy() {
        this._registry.remove(this);
      }
      /**
       * Sets the "checked" property value on the radio input element.
       * @docs-private
       */
      writeValue(value) {
        this._state = value === this.value;
        this.setProperty("checked", this._state);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this._fn = fn;
        this.onChange = () => {
          fn(this.value);
          this._registry.select(this);
        };
      }
      /** @docs-private */
      setDisabledState(isDisabled) {
        if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
          this.setProperty("disabled", isDisabled);
        }
        this.setDisabledStateFired = true;
      }
      /**
       * Sets the "value" on the radio input element and unchecks it.
       *
       * @param value
       */
      fireUncheck(value) {
        this.writeValue(value);
      }
      _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwNameError();
        }
        if (!this.name && this.formControlName)
          this.name = this.formControlName;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RadioControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: RadioControlRegistry }, { token: Injector }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _RadioControlValueAccessor, isStandalone: false, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: { name: "name", formControlName: "formControlName", value: "value" }, host: { listeners: { "change": "onChange()", "blur": "onTouched()" } }, providers: [RADIO_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RadioControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
        host: { "(change)": "onChange()", "(blur)": "onTouched()" },
        providers: [RADIO_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: RadioControlRegistry }, { type: Injector }], propDecorators: { name: [{
      type: Input
    }], formControlName: [{
      type: Input
    }], value: [{
      type: Input
    }] } });
    RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeValueAccessor),
      multi: true
    };
    RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("value", parseFloat(value));
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RangeValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _RangeValueAccessor, isStandalone: false, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]", host: { listeners: { "change": "onChange($any($event.target).value)", "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [RANGE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RangeValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
        host: {
          "(change)": "onChange($any($event.target).value)",
          "(input)": "onChange($any($event.target).value)",
          "(blur)": "onTouched()"
        },
        providers: [RANGE_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
    formControlBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlDirective)
    };
    FormControlDirective = class _FormControlDirective extends NgControl {
      _ngModelWarningConfig;
      callSetDisabledState;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      form;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular `FormControlDirective` instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
          const previousForm = changes["form"].previousValue;
          if (previousForm) {
            cleanUpControl(
              previousForm,
              this,
              /* validateControlPresenceOnChange */
              false
            );
          }
          setUpControl(this.form, this, this.callSetDisabledState);
          this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
          }
          this.form.setValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpControl(
            this.form,
            this,
            /* validateControlPresenceOnChange */
            false
          );
        }
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * The `FormControl` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _isControlChanged(changes) {
        return changes.hasOwnProperty("form");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormControlDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _FormControlDirective, isStandalone: false, selector: "[formControl]", inputs: { form: ["formControl", "form"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: FormControlDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControl]",
        providers: [formControlBinding],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formControl"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective)
    };
    FormGroupDirective = class _FormGroupDirective extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Reports whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this._submittedReactive);
      }
      // TODO(atscott): Remove once invalid API usage is cleaned up internally
      set submitted(value) {
        this._submittedReactive.set(value);
      }
      /** @internal */
      _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
      _submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "_submittedReactive" }] : []);
      /**
       * Reference to an old form group input value, which is needed to cleanup
       * old instance in case it was replaced with a new one.
       */
      _oldForm;
      /**
       * Callback that should be invoked when controls in FormGroup or FormArray collection change
       * (added or removed). This callback triggers corresponding DOM updates.
       */
      _onCollectionChange = () => this._updateDomValue();
      /**
       * @description
       * Tracks the list of added `FormControlName` instances
       */
      directives = [];
      /**
       * @description
       * Tracks the `FormGroup` bound to this directive.
       */
      form = null;
      /**
       * @description
       * Emits an event when the form submission has been triggered.
       */
      ngSubmit = new EventEmitter();
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this.form) {
          throw missingFormException();
        }
        if (changes.hasOwnProperty("form")) {
          this._updateValidators();
          this._updateDomValue();
          this._updateRegistrations();
          this._oldForm = this.form;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpValidators(this.form, this);
          if (this.form._onCollectionChange === this._onCollectionChange) {
            this.form._registerOnCollectionChange(() => {
            });
          }
        }
      }
      /**
       * @description
       * Returns this directive's instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * Returns the `FormGroup` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `FormControlName` directive instance.
       */
      addControl(dir) {
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir, this.callSetDisabledState);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `FormControlName` directive
       *
       * @param dir The `FormControlName` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `FormControlName` instance from the internal list of directives
       *
       * @param dir The `FormControlName` directive instance.
       */
      removeControl(dir) {
        cleanUpControl(
          dir.control || null,
          dir,
          /* validateControlPresenceOnChange */
          false
        );
        removeListItem$1(this.directives, dir);
      }
      /**
       * Adds a new `FormGroupName` directive instance to the form.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      addFormGroup(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      removeFormGroup(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
       *
       * @param dir The `FormGroupName` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      addFormArray(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      removeFormArray(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      getFormArray(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `FormControlName` directive.
       *
       * @param dir The `FormControlName` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        const ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
      }
      /**
       * @description
       * Method called with the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this._submittedReactive.set(true);
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form, `undefined` by default
       */
      resetForm(value = void 0, options = {}) {
        this.form.reset(value, options);
        this._submittedReactive.set(false);
      }
      /** @internal */
      _updateDomValue() {
        this.directives.forEach((dir) => {
          const oldCtrl = dir.control;
          const newCtrl = this.form.get(dir.path);
          if (oldCtrl !== newCtrl) {
            cleanUpControl(oldCtrl || null, dir);
            if (isFormControl(newCtrl)) {
              setUpControl(newCtrl, dir, this.callSetDisabledState);
              dir.control = newCtrl;
            }
          }
        });
        this.form._updateTreeValidity({ emitEvent: false });
      }
      _setUpFormContainer(dir) {
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
      }
      _cleanUpFormContainer(dir) {
        if (this.form) {
          const ctrl = this.form.get(dir.path);
          if (ctrl) {
            const isControlUpdated = cleanUpFormContainer(ctrl, dir);
            if (isControlUpdated) {
              ctrl.updateValueAndValidity({ emitEvent: false });
            }
          }
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange);
        if (this._oldForm) {
          this._oldForm._registerOnCollectionChange(() => {
          });
        }
      }
      _updateValidators() {
        setUpValidators(this.form, this);
        if (this._oldForm) {
          cleanUpValidators(this._oldForm, this);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormGroupDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _FormGroupDirective, isStandalone: false, selector: "[formGroup]", inputs: { form: ["formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: FormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroup]",
        providers: [formDirectiveProvider],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formGroup"]
    }], ngSubmit: [{
      type: Output
    }] } });
    formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupName)
    };
    FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `FormGroup` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form groups to be bound
       * to indices when iterating over groups in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw groupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormGroupName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _FormGroupName, isStandalone: false, selector: "[formGroupName]", inputs: { name: ["formGroupName", "name"] }, providers: [formGroupNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: FormGroupName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName]",
        providers: [formGroupNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formGroupName"]
    }] } });
    formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormArrayName)
    };
    FormArrayName = class _FormArrayName extends ControlContainer {
      /** @internal */
      _parent;
      /**
       * @description
       * Tracks the name of the `FormArray` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form arrays to be bound
       * to indices when iterating over arrays in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /**
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       * @throws If the directive does not have a valid parent.
       * @docs-private
       */
      ngOnInit() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw arrayParentException();
        }
        this.formDirective.addFormArray(this);
      }
      /**
       * A lifecycle method called before the directive's instance is destroyed. For internal use only.
       * @docs-private
       */
      ngOnDestroy() {
        this.formDirective?.removeFormArray(this);
      }
      /**
       * @description
       * The `FormArray` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormArray(this);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormArrayName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _FormArrayName, isStandalone: false, selector: "[formArrayName]", inputs: { name: ["formArrayName", "name"] }, providers: [formArrayNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: FormArrayName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formArrayName]",
        providers: [formArrayNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formArrayName"]
    }] } });
    controlNameBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlName)
    };
    FormControlName = class _FormControlName extends NgControl {
      _ngModelWarningConfig;
      _added = false;
      /**
       * Internal reference to the view model value.
       * @internal
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      control;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form controls to be bound
       * to indices when iterating over controls in a `FormArray`.
       */
      name = null;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular FormControlName instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (!this._added)
          this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
          }
          this.viewModel = this.model;
          this.formDirective.updateModel(this, this.model);
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeControl(this);
        }
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _setUpControl() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          checkParentType(this._parent, this.name);
        }
        this.control = this.formDirective.addControl(this);
        this._added = true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormControlName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _FormControlName, isStandalone: false, selector: "[formControlName]", inputs: { name: ["formControlName", "name"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [controlNameBinding], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: FormControlName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName]",
        providers: [controlNameBinding],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formControlName"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlValueAccessor),
      multi: true
    };
    SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
      /** @docs-private */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      // We need this because we might be in the process of destroying the root
      // injector, which is marked as destroyed before running destroy hooks.
      // Attempting to use afterNextRender with the node injector would evntually
      // run into that already destroyed injector.
      appRefInjector = inject(ApplicationRef).injector;
      destroyRef = inject(DestroyRef);
      cdr = inject(ChangeDetectorRef);
      _queuedWrite = false;
      /**
       * This is needed to efficiently set the select value when adding/removing options. If
       * writeValue is instead called for every added/removed option, this results in exponentially
       * more _compareValue calls than the number of option elements (issue #41330).
       *
       * Secondly, calling writeValue when rendering individual option elements instead of after they
       * are all rendered caused an issue in Safari and IE 11 where the first option element failed
       * to be deselected when no option matched the select ngModel. This was because Angular would
       * set the select element's value property before appending the option's child text node to the
       * DOM (issue #14505).
       *
       * Finally, this approach is necessary to avoid an issue with delayed element removal when
       * using the animations module (in all browsers). Otherwise when a selected option is removed
       * (so no option matches the ngModel anymore), Angular would change the select element value
       * before actually removing the option from the DOM. Then when the option is finally removed
       * from the DOM, the browser would change the select value to that of the first option, even
       * though it doesn't match the ngModel (issue #18430).
       *
       * @internal
       */
      _writeValueAfterRender() {
        if (this._queuedWrite || this.appRefInjector.destroyed) {
          return;
        }
        this._queuedWrite = true;
        afterNextRender({
          write: () => {
            if (this.destroyRef.destroyed) {
              return;
            }
            this._queuedWrite = false;
            this.writeValue(this.value);
          }
        }, { injector: this.appRefInjector });
      }
      /**
       * Sets the "value" property on the select element.
       * @docs-private
       */
      writeValue(value) {
        this.cdr.markForCheck();
        this.value = value;
        const id = this._getOptionId(value);
        const valueString = _buildValueString$1(id, value);
        this.setProperty("value", valueString);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (valueString) => {
          this.value = this._getOptionValue(valueString);
          fn(this.value);
        };
      }
      /** @internal */
      _registerOption() {
        return (this._idCounter++).toString();
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id), value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _SelectControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _SelectControlValueAccessor, isStandalone: false, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [SELECT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: SelectControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
        host: { "(change)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [SELECT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    NgSelectOption = class _NgSelectOption {
      _element;
      _renderer;
      _select;
      /**
       * @description
       * ID of the option element
       */
      id;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
          this.id = this._select._registerOption();
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select._writeValueAfterRender();
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        this._setElementValue(value);
        if (this._select)
          this._select._writeValueAfterRender();
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select._writeValueAfterRender();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NgSelectOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _NgSelectOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NgSelectOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
      multi: true
    };
    SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * The current value.
       * @docs-private
       */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      /**
       * Sets the "value" property on one or of more of the select's options.
       * @docs-private
       */
      writeValue(value) {
        this.value = value;
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
          const ids = value.map((v) => this._getOptionId(v));
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(ids.indexOf(o.toString()) > -1);
          };
        } else {
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(false);
          };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
      }
      /**
       * Registers a function called when the control value changes
       * and writes an array of the selected options.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (element) => {
          const selected = [];
          const selectedOptions = element.selectedOptions;
          if (selectedOptions !== void 0) {
            const options = selectedOptions;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              const val = this._getOptionValue(opt.value);
              selected.push(val);
            }
          } else {
            const options = element.options;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              if (opt.selected) {
                const val = this._getOptionValue(opt.value);
                selected.push(val);
              }
            }
          }
          this.value = selected;
          fn(selected);
        };
      }
      /** @internal */
      _registerOption(value) {
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id)._value, value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _SelectMultipleControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _SelectMultipleControlValueAccessor, isStandalone: false, selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($event.target)", "blur": "onTouched()" } }, providers: [SELECT_MULTIPLE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: SelectMultipleControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
        host: { "(change)": "onChange($event.target)", "(blur)": "onTouched()" },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
      _element;
      _renderer;
      _select;
      id;
      /** @internal */
      _value;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._value = value;
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        if (this._select) {
          this._value = value;
          this._setElementValue(_buildValueString(this.id, value));
          this._select.writeValue(this._select.value);
        } else {
          this._setElementValue(value);
        }
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @internal */
      _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, "selected", selected);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select.writeValue(this._select.value);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _\u0275NgSelectMultipleOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectMultipleControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _\u0275NgSelectMultipleOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: \u0275NgSelectMultipleOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectMultipleControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    AbstractValidatorDirective = class _AbstractValidatorDirective {
      _validator = nullValidator;
      _onChange;
      /**
       * A flag that tracks whether this validator is enabled.
       *
       * Marking it `internal` (vs `protected`), so that this flag can be used in host bindings of
       * directive classes that extend this base class.
       * @internal
       */
      _enabled;
      /** @docs-private */
      ngOnChanges(changes) {
        if (this.inputName in changes) {
          const input2 = this.normalizeInput(changes[this.inputName].currentValue);
          this._enabled = this.enabled(input2);
          this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
          if (this._onChange) {
            this._onChange();
          }
        }
      }
      /** @docs-private */
      validate(control) {
        return this._validator(control);
      }
      /** @docs-private */
      registerOnValidatorChange(fn) {
        this._onChange = fn;
      }
      /**
       * @description
       * Determines whether this validator should be active or not based on an input.
       * Base class implementation checks whether an input is defined (if the value is different from
       * `null` and `undefined`). Validator classes that extend this base class can override this
       * function with the logic specific to a particular validator directive.
       */
      enabled(input2) {
        return input2 != null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _AbstractValidatorDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _AbstractValidatorDirective, isStandalone: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: AbstractValidatorDirective, decorators: [{
      type: Directive
    }] });
    MAX_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxValidator),
      multi: true
    };
    MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the max bound to this directive.
       */
      max;
      /** @internal */
      inputName = "max";
      /** @internal */
      normalizeInput = (input2) => toFloat(input2);
      /** @internal */
      createValidator = (max) => maxValidator(max);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _MaxValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _MaxValidator, isStandalone: false, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: { max: "max" }, host: { properties: { "attr.max": "_enabled ? max : null" } }, providers: [MAX_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: MaxValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
        providers: [MAX_VALIDATOR],
        host: { "[attr.max]": "_enabled ? max : null" },
        standalone: false
      }]
    }], propDecorators: { max: [{
      type: Input
    }] } });
    MIN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinValidator),
      multi: true
    };
    MinValidator = class _MinValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the min bound to this directive.
       */
      min;
      /** @internal */
      inputName = "min";
      /** @internal */
      normalizeInput = (input2) => toFloat(input2);
      /** @internal */
      createValidator = (min) => minValidator(min);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _MinValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _MinValidator, isStandalone: false, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: { min: "min" }, host: { properties: { "attr.min": "_enabled ? min : null" } }, providers: [MIN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: MinValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
        providers: [MIN_VALIDATOR],
        host: { "[attr.min]": "_enabled ? min : null" },
        standalone: false
      }]
    }], propDecorators: { min: [{
      type: Input
    }] } });
    REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RequiredValidator),
      multi: true
    };
    CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxRequiredValidator),
      multi: true
    };
    RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the required attribute bound to this directive.
       */
      required;
      /** @internal */
      inputName = "required";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input2) => requiredValidator;
      /** @docs-private */
      enabled(input2) {
        return input2;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _RequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _RequiredValidator, isStandalone: false, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: { required: "required" }, host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: RequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
        providers: [REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }], propDecorators: { required: [{
      type: Input
    }] } });
    CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
      /** @internal */
      createValidator = (input2) => requiredTrueValidator;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _CheckboxRequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _CheckboxRequiredValidator, isStandalone: false, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]", host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [CHECKBOX_REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: CheckboxRequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }] });
    EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    };
    EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the email attribute bound to this directive.
       */
      email;
      /** @internal */
      inputName = "email";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input2) => emailValidator;
      /** @docs-private */
      enabled(input2) {
        return input2;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _EmailValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _EmailValidator, isStandalone: false, selector: "[email][formControlName],[email][formControl],[email][ngModel]", inputs: { email: "email" }, providers: [EMAIL_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: EmailValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[email][formControlName],[email][formControl],[email][ngModel]",
        providers: [EMAIL_VALIDATOR],
        standalone: false
      }]
    }], propDecorators: { email: [{
      type: Input
    }] } });
    MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinLengthValidator),
      multi: true
    };
    MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the minimum length bound to this directive.
       */
      minlength;
      /** @internal */
      inputName = "minlength";
      /** @internal */
      normalizeInput = (input2) => toInteger(input2);
      /** @internal */
      createValidator = (minlength) => minLengthValidator(minlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _MinLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _MinLengthValidator, isStandalone: false, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: { minlength: "minlength" }, host: { properties: { "attr.minlength": "_enabled ? minlength : null" } }, providers: [MIN_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: MinLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
        providers: [MIN_LENGTH_VALIDATOR],
        host: { "[attr.minlength]": "_enabled ? minlength : null" },
        standalone: false
      }]
    }], propDecorators: { minlength: [{
      type: Input
    }] } });
    MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxLengthValidator),
      multi: true
    };
    MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the maximum length bound to this directive.
       */
      maxlength;
      /** @internal */
      inputName = "maxlength";
      /** @internal */
      normalizeInput = (input2) => toInteger(input2);
      /** @internal */
      createValidator = (maxlength) => maxLengthValidator(maxlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _MaxLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _MaxLengthValidator, isStandalone: false, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: { maxlength: "maxlength" }, host: { properties: { "attr.maxlength": "_enabled ? maxlength : null" } }, providers: [MAX_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: MaxLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
        providers: [MAX_LENGTH_VALIDATOR],
        host: { "[attr.maxlength]": "_enabled ? maxlength : null" },
        standalone: false
      }]
    }], propDecorators: { maxlength: [{
      type: Input
    }] } });
    PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PatternValidator),
      multi: true
    };
    PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the pattern bound to this directive.
       */
      pattern;
      // This input is always defined, since the name matches selector.
      /** @internal */
      inputName = "pattern";
      /** @internal */
      normalizeInput = (input2) => input2;
      /** @internal */
      createValidator = (input2) => patternValidator(input2);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _PatternValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.12", type: _PatternValidator, isStandalone: false, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: { pattern: "pattern" }, host: { properties: { "attr.pattern": "_enabled ? pattern : null" } }, providers: [PATTERN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: PatternValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
        providers: [PATTERN_VALIDATOR],
        host: { "[attr.pattern]": "_enabled ? pattern : null" },
        standalone: false
      }]
    }], propDecorators: { pattern: [{
      type: Input
    }] } });
    SHARED_FORM_DIRECTIVES = [
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      RangeValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      SelectMultipleControlValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      MinLengthValidator,
      MaxLengthValidator,
      PatternValidator,
      CheckboxRequiredValidator,
      EmailValidator,
      MinValidator,
      MaxValidator
    ];
    TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    REACTIVE_DRIVEN_DIRECTIVES = [
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName
    ];
    \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, declarations: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ], exports: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _\u0275InternalFormsSharedModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: \u0275InternalFormsSharedModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
      }]
    }] });
    FormArray = class extends AbstractControl {
      /**
       * Creates a new `FormArray` instance.
       *
       * @param controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
          // to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
       *     around from the back, and if index is greatly negative (less than `-length`), the result is
       * undefined. This behavior is the same as `Array.at(index)`.
       */
      at(index) {
        return this.controls[this._adjustIndex(index)];
      }
      /**
       * Insert a new `AbstractControl` at the end of the array.
       *
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is added.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       *
       * NOTE: Pushing to the FormArray will not mark it dirty. If you want to mark if dirty, call `markAsDirty()`.
       */
      push(control, options = {}) {
        if (Array.isArray(control)) {
          control.forEach((ctrl) => {
            this.controls.push(ctrl);
            this._registerControl(ctrl);
          });
        } else {
          this.controls.push(control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Insert a new `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to insert the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
       * This behavior is the same as `Array.splice(index, 0, control)`.
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is inserted.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       *
       * NOTE: Inserting to the FormArray will not mark it dirty. If you want to mark if dirty, call `markAsDirty()`.
       */
      insert(index, control, options = {}) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Remove the control at the given `index` in the array.
       *
       * @param index Index in the array to remove the control.  If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), removes the first
       *     element. This behavior is the same as `Array.splice(index, 1)`.
       * @param options Specifies whether this FormArray instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       *
       * NOTE: Removing the FormArray will not mark it dirty. If you want to mark if dirty, call `markAsDirty()`.
       */
      removeAt(index, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Replace an existing control.
       *
       * @param index Index in the array to replace the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
       *     element. This behavior is the same as `Array.splice(index, 1, control)`.
       * @param control The `AbstractControl` control to replace the existing control
       * @param options Specifies whether this FormArray instance should emit events after an
       *     existing control is replaced with a new one.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * replaced with a new one. When false, no events are emitted.
       */
      setControl(index, control, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        if (control) {
          this.controls.splice(adjustedIndex, 0, control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Length of the control array.
       */
      get length() {
        return this.controls.length;
      }
      /**
       * Sets the value of the `FormArray`. It accepts an array that matches
       * the structure of the control.
       *
       * This method performs strict checks, and throws an error if you try
       * to set the value of a control that doesn't exist or if you exclude the
       * value of a control.
       *
       * @usageNotes
       * ### Set the values for the controls in the form array
       *
       * ```ts
       * const arr = new FormArray([
       *   new FormControl(),
       *   new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.setValue(['Nancy', 'Drew']);
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, false, value);
        value.forEach((newValue, index) => {
          assertControlPresent(this, false, index);
          this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormArray`. It accepts an array that matches the
       * structure of the control, and does its best to match the values to the correct
       * controls in the group.
       *
       * It accepts both super-sets and sub-sets of the array without throwing an error.
       *
       * @usageNotes
       * ### Patch the values for controls in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.patchValue(['Nancy']);
       * console.log(arr.value);   // ['Nancy', null]
       * ```
       *
       * @param value Array of latest values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control
       * value is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        value.forEach((newValue, index) => {
          if (this.at(index)) {
            this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
       * value of all descendants to null or null maps.
       *
       * You reset to a specific form state by passing in an array of states
       * that matches the structure of the control. The state is a standalone value
       * or a form state object with both a value and a disabled status.
       *
       * @usageNotes
       * ### Reset the values in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * arr.reset(['name', 'last name']);
       *
       * console.log(arr.value);  // ['name', 'last name']
       * ```
       *
       * ### Reset the values in a form array and the disabled status for the first control
       *
       * ```ts
       * arr.reset([
       *   {value: 'name', disabled: true},
       *   'last'
       * ]);
       *
       * console.log(arr.value);  // ['last']
       * console.log(arr.at(0).status);  // 'DISABLED'
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      reset(value = [], options = {}) {
        this._forEachChild((control, index) => {
          control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      /**
       * The aggregate value of the array, including any disabled controls.
       *
       * Reports all values regardless of disabled status.
       */
      getRawValue() {
        return this.controls.map((control) => control.getRawValue());
      }
      /**
       * Remove all controls in the `FormArray`.
       *
       * @param options Specifies whether this FormArray instance should emit events after all
       *     controls are removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when all controls
       * in this FormArray instance are removed. When false, no events are emitted.
       *
       * @usageNotes
       * ### Remove all elements from a FormArray
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.length);  // 2
       *
       * arr.clear();
       * console.log(arr.length);  // 0
       * ```
       *
       * It's a simpler and more efficient alternative to removing all elements one by one:
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       *
       * while (arr.length) {
       *    arr.removeAt(0);
       * }
       * ```
       */
      clear(options = {}) {
        if (this.controls.length < 1)
          return;
        this._forEachChild((control) => control._registerOnCollectionChange(() => {
        }));
        this.controls.splice(0);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Adjusts a negative index by summing it with the length of the array. For very negative
       * indices, the result may remain negative.
       * @internal
       */
      _adjustIndex(index) {
        return index < 0 ? index + this.length : index;
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this.controls.reduce((updated, child) => {
          return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        this.controls.forEach((control, index) => {
          cb(control, index);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
      }
      /** @internal */
      _anyControls(condition) {
        return this.controls.some((control) => control.enabled && condition(control));
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => this._registerControl(control));
      }
      /** @internal */
      _allControlsDisabled() {
        for (const control of this.controls) {
          if (control.enabled)
            return false;
        }
        return this.controls.length > 0 || this.disabled;
      }
      _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
      }
      /** @internal */
      _find(name) {
        return this.at(name) ?? null;
      }
    };
    FormBuilder = class _FormBuilder {
      useNonNullable = false;
      /**
       * @description
       * Returns a FormBuilder in which automatically constructed `FormControl` elements
       * have `{nonNullable: true}` and are non-nullable.
       *
       * **Constructing non-nullable controls**
       *
       * When constructing a control, it will be non-nullable, and will reset to its initial value.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.control('Alex'); // FormControl<string>
       * name.reset();
       * console.log(name); // 'Alex'
       * ```
       *
       * **Constructing non-nullable groups or arrays**
       *
       * When constructing a group or array, all automatically created inner controls will be
       * non-nullable, and will reset to their initial values.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
       * name.reset();
       * console.log(name); // {who: 'Alex'}
       * ```
       * **Constructing *nullable* fields on groups or arrays**
       *
       * It is still possible to have a nullable field. In particular, any `FormControl` which is
       * *already* constructed will not be altered. For example:
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * // FormGroup<{who: FormControl<string|null>}>
       * let name = nnfb.group({who: new FormControl('Alex')});
       * name.reset(); console.log(name); // {who: null}
       * ```
       *
       * Because the inner control is constructed explicitly by the caller, the builder has
       * no control over how it is created, and cannot exclude the `null`.
       */
      get nonNullable() {
        const nnfb = new _FormBuilder();
        nnfb.useNonNullable = true;
        return nnfb;
      }
      group(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        let newOptions = {};
        if (isAbstractControlOptions(options)) {
          newOptions = options;
        } else if (options !== null) {
          newOptions.validators = options.validator;
          newOptions.asyncValidators = options.asyncValidator;
        }
        return new FormGroup(reducedControls, newOptions);
      }
      /**
       * @description
       * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
       * containing all the keys and corresponding inner control types.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param options Configuration options object for the `FormRecord`. The object should have the
       * `AbstractControlOptions` type and might contain the following fields:
       * * `validators`: A synchronous validator function, or an array of validator functions.
       * * `asyncValidators`: A single async validator or array of async validator functions.
       * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
       * | submit').
       */
      record(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        return new FormRecord(reducedControls, options);
      }
      /**
       * @description
       * Constructs a new `FormControl` with the given state, validators and options. Sets
       * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
       * control will be nullable. Accepts a single generic argument, which is the type  of the
       * control's value.
       *
       * @param formState Initializes the control with an initial state value, or
       * with an object that contains both a value and a disabled status.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or a `FormControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator
       * functions.
       *
       * @usageNotes
       *
       * ### Initialize a control as disabled
       *
       * The following example returns a control with an initial value in a disabled state.
       *
       * {@example forms/ts/formBuilder/form_builder_example.ts region='disabled-control'}
       */
      control(formState, validatorOrOpts, asyncValidator) {
        let newOptions = {};
        if (!this.useNonNullable) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        if (isAbstractControlOptions(validatorOrOpts)) {
          newOptions = validatorOrOpts;
        } else {
          newOptions.validators = validatorOrOpts;
          newOptions.asyncValidators = asyncValidator;
        }
        return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), { nonNullable: true }));
      }
      /**
       * Constructs a new `FormArray` from the given array of configurations,
       * validators and options. Accepts a single generic argument, which is the type of each control
       * inside the array.
       *
       * @param controls An array of child controls or control configs. Each child control is given an
       *     index when it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
       *     `AbstractControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions.
       */
      array(controls, validatorOrOpts, asyncValidator) {
        const createdControls = controls.map((c) => this._createControl(c));
        return new FormArray(createdControls, validatorOrOpts, asyncValidator);
      }
      /** @internal */
      _reduceControls(controls) {
        const createdControls = {};
        Object.keys(controls).forEach((controlName) => {
          createdControls[controlName] = this._createControl(controls[controlName]);
        });
        return createdControls;
      }
      /** @internal */
      _createControl(controls) {
        if (controls instanceof FormControl) {
          return controls;
        } else if (controls instanceof AbstractControl) {
          return controls;
        } else if (Array.isArray(controls)) {
          const value = controls[0];
          const validator = controls.length > 1 ? controls[1] : null;
          const asyncValidator = controls.length > 2 ? controls[2] : null;
          return this.control(value, validator, asyncValidator);
        } else {
          return this.control(controls);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: FormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    NonNullableFormBuilder = class _NonNullableFormBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NonNullableFormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _NonNullableFormBuilder, providedIn: "root", useFactory: () => inject(FormBuilder).nonNullable });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: NonNullableFormBuilder, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root",
        useFactory: () => inject(FormBuilder).nonNullable
      }]
    }] });
    UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
      group(controlsConfig, options = null) {
        return super.group(controlsConfig, options);
      }
      /**
       * Like `FormBuilder#control`, except the resulting control is untyped.
       */
      control(formState, validatorOrOpts, asyncValidator) {
        return super.control(formState, validatorOrOpts, asyncValidator);
      }
      /**
       * Like `FormBuilder#array`, except the resulting array is untyped.
       */
      array(controlsConfig, validatorOrOpts, asyncValidator) {
        return super.array(controlsConfig, validatorOrOpts, asyncValidator);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _UntypedFormBuilder, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _UntypedFormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: UntypedFormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    FormsModule = class _FormsModule {
      /**
       * @description
       * Provides options for configuring the forms module.
       *
       * @param opts An object of configuration options
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _FormsModule,
          providers: [
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: core_exports, type: _FormsModule, declarations: [NgModel, NgModelGroup, NgForm], exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _FormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: FormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
      }]
    }] });
    ReactiveFormsModule = class _ReactiveFormsModule {
      /**
       * @description
       * Provides options for configuring the reactive forms module.
       *
       * @param opts An object of configuration options
       * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
       * binding is used with reactive form directives.
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _ReactiveFormsModule,
          providers: [
            {
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl ?? "always"
            },
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _ReactiveFormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: core_exports, type: _ReactiveFormsModule, declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: _ReactiveFormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: core_exports, type: ReactiveFormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
      }]
    }] });
  }
});

// src/app/input-prompt/input-prompt.component.ts
var InputPromptComponent;
var init_input_prompt_component3 = __esm({
  "src/app/input-prompt/input-prompt.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_input_prompt_component();
    init_input_prompt_component2();
    init_core();
    init_common();
    init_forms();
    init_icon();
    init_chatservice();
    init_sharedservice();
    InputPromptComponent = class InputPromptComponent2 {
      chatService;
      sharedservice;
      messageSent = new EventEmitter();
      constructor(chatService, sharedservice) {
        this.chatService = chatService;
        this.sharedservice = sharedservice;
      }
      messagesContainer;
      messages = [];
      newMessage = "";
      shouldScrollToBottom = false;
      ngOnInit() {
        this.messages = [
          { text: "Hello! I am Mia, your AI assistant. How can I help you today?", sender: "Mia", timestamp: /* @__PURE__ */ new Date() }
        ];
        this.shouldScrollToBottom = true;
      }
      ngAfterViewChecked() {
        if (this.shouldScrollToBottom) {
          this.scrollToBottom();
          this.shouldScrollToBottom = false;
        }
      }
      sendMessage() {
        if (this.newMessage.trim()) {
          const v = this.newMessage.trim();
          if (!v)
            return;
          this.messages.push({ text: this.newMessage.trim(), sender: "user", timestamp: /* @__PURE__ */ new Date() });
          this.newMessage = "";
          this.shouldScrollToBottom = true;
          this.messageSent.emit();
          this.messages.push({ text: "Analyzing your requirement and evaluating impacted files. The impacted files and test plan are currently being generated. Please wait\u2026", sender: "Mia", timestamp: /* @__PURE__ */ new Date() });
          this.shouldScrollToBottom = true;
          this.chatService.getPromptResponse(v).subscribe((response) => {
            console.log("Received response from backend:", response);
            const graphData = response.graphs;
            const testPlan = response.testPlan;
            this.sharedservice.openPanel({
              graphData,
              testPlan: testPlan.testPlan
            });
          });
        }
      }
      scrollToBottom() {
        try {
          this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        } catch (err) {
          console.error("Error scrolling to bottom:", err);
        }
      }
      formatTimestamp(date) {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      }
      static ctorParameters = () => [
        { type: Chatservice },
        { type: Sharedservice }
      ];
      static propDecorators = {
        messageSent: [{ type: Output }],
        messagesContainer: [{ type: ViewChild, args: ["messagesContainer"] }]
      };
    };
    InputPromptComponent = __decorate([
      Component({
        selector: "app-input-prompt",
        standalone: true,
        imports: [CommonModule, FormsModule, MatIconModule],
        template: input_prompt_component_default,
        styles: [input_prompt_component_default2]
      })
    ], InputPromptComponent);
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_input_prompt_component3();
    init_sidebar();
    init_sidenav();
    init_sharedservice();
    App = class App2 {
      shared;
      chatBoxWidth = 300;
      minChatBoxWidth = 200;
      maxChatBoxWidth = 600;
      autoShrinkWidth = 250;
      isSidebarOpen = false;
      rightSidenav;
      constructor(shared) {
        this.shared = shared;
      }
      title = signal("impact-analyzer-ui");
      sidebarToggle(isOpen) {
        this.isSidebarOpen = isOpen;
      }
      openSidebar(data) {
        console.log("Sidebar open event:", data);
        this.isSidebarOpen = true;
      }
      //Resize chatbox
      onChatBoxMessageSent() {
        if (this.chatBoxWidth > this.autoShrinkWidth) {
          this.chatBoxWidth = this.autoShrinkWidth;
          console.log("Chatbox resized after message sent");
        }
      }
      static ctorParameters = () => [
        { type: Sharedservice }
      ];
      static propDecorators = {
        rightSidenav: [{ type: ViewChild, args: ["rightSidenav"] }]
      };
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [
          RouterOutlet,
          InputPromptComponent,
          SidebarComponent,
          MatSidenavModule
        ],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, impact-analyzer-ui");
      });
    });
  }
});
export default require_app_spec();
/*! Bundled license information:

@angular/router/fesm2022/router2.mjs:
@angular/router/fesm2022/router.mjs:
@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v20.3.12
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-app.spec.js.map
