import {
  useLoaderData
} from "/build/_shared/chunk-FLJDCTDX.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-QKHIKN7J.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/tasks.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\tasks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\tasks.tsx"
  );
  import.meta.hot.lastModified = "1717235602289.1484";
}
var Tasks = () => {
  _s();
  const tasks = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Tasks" }, void 0, false, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: tasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: task.name }, task.id, false, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 38,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/tasks.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tasks.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(Tasks, "vnWBCFrZ+g1uJOr2+5KE27SVsrs=", false, function() {
  return [useLoaderData];
});
_c = Tasks;
var tasks_default = Tasks;
var _c;
$RefreshReg$(_c, "Tasks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  tasks_default as default
};
//# sourceMappingURL=/build/routes/tasks-3IKU7AYH.js.map
