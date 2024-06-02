import {
  useLoaderData
} from "/build/_shared/chunk-QBCH37WN.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-MAWQAWWW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/projects.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\projects.tsx"
  );
  import.meta.hot.lastModified = "1717235557382.5198";
}
var Projects = () => {
  _s();
  const projects = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Projects" }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: project.name }, project.id, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 38,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(Projects, "pNHO6jlNbuLxDJQHzm/1qRQE/nw=", false, function() {
  return [useLoaderData];
});
_c = Projects;
var projects_default = Projects;
var _c;
$RefreshReg$(_c, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  projects_default as default
};
//# sourceMappingURL=/build/routes/projects-3FGX42WQ.js.map
