import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form
} from "/build/_shared/chunk-QBCH37WN.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-MAWQAWWW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/register.tsx
var import_react2 = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\register.tsx"
  );
  import.meta.hot.lastModified = "1717235318444.2869";
}
var Register = () => {
  _s();
  const [email, setEmail] = (0, import_react2.useState)("");
  const [password, setPassword] = (0, import_react2.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react2.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Register" }, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Password" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "confirmPassword", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), placeholder: "Confirm Password" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Register" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_s(Register, "aQoIR8WEyeY0VOX5aa1/CZeLkXM=");
_c = Register;
var register_default = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  register_default as default
};
//# sourceMappingURL=/build/routes/register-TK43PQTG.js.map
