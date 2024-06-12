import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form
} from "/build/_shared/chunk-FLJDCTDX.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-QKHIKN7J.js";
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

// app/styles/register.css
var register_default = "/build/_assets/register-7CA2RTTD.css";

// app/routes/register.tsx
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
}
var links = () => {
  return [{
    rel: "stylesheet",
    href: register_default
  }];
};
var Register = () => {
  _s();
  const [email, setEmail] = (0, import_react2.useState)("");
  const [password, setPassword] = (0, import_react2.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react2.useState)("");
  const [formError, setFormError] = (0, import_react2.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error", children: formError }, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 73,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "loginForm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "title", children: "Registere" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email", className: "input" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Password", className: "input" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "confirmPassword", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), placeholder: "Confirm Password", className: "input" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Register" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
};
_s(Register, "hOdEV7CzA82FVqOsVTslEpZmkK8=");
_c = Register;
var register_default2 = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  register_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/register-U2W7MMMA.js.map
