/* @ds-bundle: {"namespace":"RBSystem","components":[{"name":"Badge","sourcePath":"components/core/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch/Switch.jsx"},{"name":"StepRail","sourcePath":"components/navigation/StepRail/StepRail.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge/Badge.jsx":"56987a18d8e3","components/core/Badge/Badge.d.ts":"a17cf1a5a9a0","components/core/Badge/Badge.prompt.md":"d1ff1bd3f002","components/core/Button/Button.jsx":"2d0b75e67b9b","components/core/Button/Button.d.ts":"8c81630d2c98","components/core/Button/Button.prompt.md":"70bf5e659fc7","components/core/Card/Card.jsx":"9c44aa218510","components/core/Card/Card.d.ts":"704287b84210","components/core/Card/Card.prompt.md":"b52d755da940","components/core/IconButton/IconButton.jsx":"20c03c58c242","components/core/IconButton/IconButton.d.ts":"d99850240790","components/core/IconButton/IconButton.prompt.md":"a464afe613b0","components/core/Tag/Tag.jsx":"848362c15954","components/core/Tag/Tag.d.ts":"916236458075","components/core/Tag/Tag.prompt.md":"0d348c8b8d89","components/forms/Checkbox/Checkbox.jsx":"5af3ff625476","components/forms/Checkbox/Checkbox.d.ts":"5207e2806519","components/forms/Checkbox/Checkbox.prompt.md":"a1087dce17cc","components/forms/Input/Input.jsx":"69d55c15c446","components/forms/Input/Input.d.ts":"efae745f32bb","components/forms/Input/Input.prompt.md":"74d9760c7aba","components/forms/Radio/Radio.jsx":"a5dcc2b6c0b7","components/forms/Radio/Radio.d.ts":"a30c4d5cd06e","components/forms/Radio/Radio.prompt.md":"ff4cbad6c39d","components/forms/Select/Select.jsx":"bc0c6b67b3c0","components/forms/Select/Select.d.ts":"a621bb1426ee","components/forms/Select/Select.prompt.md":"133a9cd716d0","components/forms/Switch/Switch.jsx":"22bd473fc6d6","components/forms/Switch/Switch.d.ts":"c3379bfd8ce9","components/forms/Switch/Switch.prompt.md":"3cf20deea678","components/navigation/StepRail/StepRail.jsx":"77e2c3805bd3","components/navigation/StepRail/StepRail.d.ts":"753f4847d062","components/navigation/StepRail/StepRail.prompt.md":"f84e9badd940","components/navigation/Tabs/Tabs.jsx":"faa5a737b312","components/navigation/Tabs/Tabs.d.ts":"5f65e5ccf13c","components/navigation/Tabs/Tabs.prompt.md":"ddbac806e4ce","components/feedback/Dialog/Dialog.jsx":"f5a79eeb259e","components/feedback/Dialog/Dialog.d.ts":"08d485e27de0","components/feedback/Dialog/Dialog.prompt.md":"5ca1d243c509","components/feedback/Toast/Toast.jsx":"d75767eec886","components/feedback/Toast/Toast.d.ts":"06e7998ba8a8","components/feedback/Toast/Toast.prompt.md":"3192d12ca789","components/feedback/Tooltip/Tooltip.jsx":"a895370d5df4","components/feedback/Tooltip/Tooltip.d.ts":"052e6e82d1a1","components/feedback/Tooltip/Tooltip.prompt.md":"72376f5f6e15"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
var RBSystem = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .ds-sync/.pkg-entry.mjs
  var pkg_entry_exports = {};
  __export(pkg_entry_exports, {
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Dialog: () => Dialog,
    IconButton: () => IconButton,
    Input: () => Input,
    Radio: () => Radio,
    Select: () => Select,
    StepRail: () => StepRail,
    Switch: () => Switch,
    Tabs: () => Tabs,
    Tag: () => Tag,
    Toast: () => Toast,
    Tooltip: () => Tooltip
  });
  init_define_import_meta_env();

  // components/core/Badge.jsx
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());
  function Badge({ tone = "neutral", dot = false, style, children, ...rest }) {
    const tones = {
      neutral: { color: "var(--rb-gray-300)", border: "var(--rb-gray-600)" },
      accent: { color: "var(--rb-yellow-500)", border: "var(--rb-yellow-700)" },
      ok: { color: "var(--rb-signal-ok)", border: "#3f6b2c" },
      warn: { color: "var(--rb-signal-warn)", border: "#8a5f1e" },
      error: { color: "var(--rb-signal-error)", border: "#8a2b2b" },
      info: { color: "var(--rb-signal-info)", border: "#2b5f8a" }
    };
    const t = tones[tone];
    return /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--rb-space-2)",
          padding: "3px 10px",
          borderRadius: "var(--rb-radius-sm)",
          border: `1px solid ${t.border}`,
          color: t.color,
          background: "transparent",
          fontFamily: "var(--rb-font-mono)",
          fontSize: "var(--rb-text-2xs)",
          letterSpacing: "var(--rb-tracking-label)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          ...style
        },
        ...rest
      },
      dot ? /* @__PURE__ */ import_react.default.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: t.color } }) : null,
      children
    );
  }

  // components/core/Button.jsx
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim());
  var SIZES = {
    sm: { padding: "6px 14px", fontSize: "var(--rb-text-xs)" },
    md: { padding: "10px 22px", fontSize: "var(--rb-text-sm)" },
    lg: { padding: "14px 30px", fontSize: "var(--rb-text-base)" }
  };
  function Button({
    variant = "primary",
    size = "md",
    glow = false,
    disabled = false,
    fullWidth = false,
    iconLeft,
    iconRight,
    style,
    children,
    ...rest
  }) {
    const base = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--rb-space-2)",
      fontFamily: "var(--rb-font-display)",
      fontWeight: "var(--rb-weight-bold)",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      border: "1px solid transparent",
      borderRadius: "var(--rb-radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--rb-duration-fast) var(--rb-ease-out), color var(--rb-duration-fast) var(--rb-ease-out), box-shadow var(--rb-duration-base) var(--rb-ease-out)",
      width: fullWidth ? "100%" : "auto",
      ...SIZES[size]
    };
    const variants = {
      primary: {
        background: "var(--rb-action-primary-bg)",
        color: "var(--rb-action-primary-fg)",
        boxShadow: glow ? "var(--rb-glow-md)" : "none"
      },
      secondary: {
        background: "transparent",
        color: "var(--rb-action-secondary-fg)",
        borderColor: "var(--rb-action-secondary-border)"
      },
      ghost: {
        background: "transparent",
        color: "var(--rb-action-ghost-fg)"
      },
      danger: {
        background: "transparent",
        color: "var(--rb-signal-error)",
        borderColor: "var(--rb-signal-error)"
      }
    };
    const disabledStyle = disabled ? { background: "var(--rb-action-disabled-bg)", color: "var(--rb-action-disabled-fg)", borderColor: "transparent", boxShadow: "none" } : null;
    return /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        disabled,
        style: { ...base, ...variants[variant], ...disabledStyle, ...style },
        ...rest
      },
      iconLeft,
      children,
      iconRight
    );
  }

  // components/core/Card.jsx
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim());
  function Card({ variant = "default", chamfer = false, label, title, footer, style, children, ...rest }) {
    const variants = {
      default: { background: "var(--rb-surface-card)", border: "var(--rb-border-hairline)", boxShadow: "none" },
      raised: { background: "var(--rb-surface-raised)", border: "var(--rb-border-default)", boxShadow: "var(--rb-shadow-raised)" },
      accent: { background: "var(--rb-surface-card)", border: "var(--rb-border-accent)", boxShadow: "var(--rb-glow-sm)" },
      sunken: { background: "var(--rb-surface-sunken)", border: "var(--rb-border-hairline)", boxShadow: "none" }
    };
    return /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        style: {
          padding: "var(--rb-pad-card)",
          borderRadius: chamfer ? 0 : "var(--rb-radius-lg)",
          clipPath: chamfer ? "var(--rb-chamfer-md)" : "none",
          display: "flex",
          flexDirection: "column",
          gap: "var(--rb-space-3)",
          ...variants[variant],
          ...style
        },
        ...rest
      },
      label ? /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontFamily: "var(--rb-font-mono)", fontSize: "var(--rb-text-2xs)", letterSpacing: "var(--rb-tracking-label)", textTransform: "uppercase", color: "var(--rb-text-muted)" } }, label) : null,
      title ? /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontFamily: "var(--rb-font-display)", fontSize: "var(--rb-text-lg)", fontWeight: "var(--rb-weight-bold)", lineHeight: "var(--rb-leading-snug)" } }, title) : null,
      children,
      footer ? /* @__PURE__ */ import_react3.default.createElement("div", { style: { paddingTop: "var(--rb-space-3)", borderTop: "var(--rb-border-hairline)", color: "var(--rb-text-secondary)", fontSize: "var(--rb-text-xs)" } }, footer) : null
    );
  }

  // components/core/IconButton.jsx
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim());
  var SIZES2 = { sm: 28, md: 36, lg: 44 };
  function IconButton({ variant = "ghost", size = "md", label, disabled = false, style, children, ...rest }) {
    const dim = SIZES2[size];
    const variants = {
      solid: { background: "var(--rb-action-primary-bg)", color: "var(--rb-action-primary-fg)", border: "1px solid transparent" },
      outline: { background: "transparent", color: "var(--rb-yellow-500)", border: "1px solid var(--rb-yellow-500)" },
      ghost: { background: "transparent", color: "var(--rb-gray-300)", border: "1px solid var(--rb-border-subtle)" }
    };
    return /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        type: "button",
        "aria-label": label,
        title: label,
        disabled,
        style: {
          width: dim,
          height: dim,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--rb-radius-md)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.45 : 1,
          transition: "color var(--rb-duration-fast) var(--rb-ease-out), border-color var(--rb-duration-fast) var(--rb-ease-out)",
          ...variants[variant],
          ...style
        },
        ...rest
      },
      children
    );
  }

  // components/core/Tag.jsx
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim());
  function Tag({ selected = false, onRemove, style, children, ...rest }) {
    return /* @__PURE__ */ import_react5.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--rb-space-2)",
          padding: "5px 12px",
          borderRadius: "var(--rb-radius-pill)",
          border: selected ? "1px solid var(--rb-yellow-500)" : "1px solid var(--rb-border-base)",
          background: selected ? "var(--rb-yellow-500)" : "transparent",
          color: selected ? "var(--rb-black-900)" : "var(--rb-gray-300)",
          fontFamily: "var(--rb-font-mono)",
          fontSize: "var(--rb-text-xs)",
          cursor: rest.onClick ? "pointer" : "default",
          transition: "all var(--rb-duration-fast) var(--rb-ease-out)",
          ...style
        },
        ...rest
      },
      children,
      onRemove ? /* @__PURE__ */ import_react5.default.createElement(
        "button",
        {
          type: "button",
          "aria-label": "Rimuovi",
          onClick: (e) => {
            e.stopPropagation();
            onRemove(e);
          },
          style: { background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, lineHeight: 1, fontSize: 14 }
        },
        "\xD7"
      ) : null
    );
  }

  // components/forms/Checkbox.jsx
  init_define_import_meta_env();
  var import_react6 = __toESM(require_react_shim());
  function Checkbox({ label, checked, onChange, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react6.default.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: "var(--rb-space-3)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style } }, /* @__PURE__ */ import_react6.default.createElement(
      "span",
      {
        style: {
          width: 18,
          height: 18,
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--rb-radius-sm)",
          border: checked ? "1px solid var(--rb-yellow-500)" : "1px solid var(--rb-border-base)",
          background: checked ? "var(--rb-yellow-500)" : "var(--rb-surface-sunken)",
          color: "var(--rb-black-900)",
          fontSize: 13,
          lineHeight: 1,
          transition: "all var(--rb-duration-fast) var(--rb-ease-out)"
        }
      },
      checked ? "\u2713" : ""
    ), /* @__PURE__ */ import_react6.default.createElement("input", { type: "checkbox", checked, onChange, disabled, style: { position: "absolute", opacity: 0, width: 0, height: 0 }, ...rest }), /* @__PURE__ */ import_react6.default.createElement("span", { style: { fontFamily: "var(--rb-font-mono)", fontSize: "var(--rb-text-sm)", color: "var(--rb-text-secondary)" } }, label));
  }

  // components/forms/Input.jsx
  init_define_import_meta_env();
  var import_react7 = __toESM(require_react_shim());
  function Input({ label, hint, error, suffix, id, style, ...rest }) {
    const inputId = id || (label ? `in-${String(label).replace(/\s+/g, "-").toLowerCase()}` : void 0);
    const borderColor = error ? "var(--rb-signal-error)" : "var(--rb-border-base)";
    return /* @__PURE__ */ import_react7.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "var(--rb-space-2)", ...style } }, label ? /* @__PURE__ */ import_react7.default.createElement("label", { htmlFor: inputId, style: { fontFamily: "var(--rb-font-mono)", fontSize: "var(--rb-text-2xs)", letterSpacing: "var(--rb-tracking-label)", textTransform: "uppercase", color: "var(--rb-text-muted)" } }, label) : null, /* @__PURE__ */ import_react7.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--rb-space-2)", background: "var(--rb-surface-sunken)", border: `1px solid ${borderColor}`, borderRadius: "var(--rb-radius-md)", padding: "0 var(--rb-space-3)" } }, /* @__PURE__ */ import_react7.default.createElement(
      "input",
      {
        id: inputId,
        style: {
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "var(--rb-text-primary)",
          fontFamily: "var(--rb-font-mono)",
          fontSize: "var(--rb-text-sm)",
          padding: "10px 0"
        },
        ...rest
      }
    ), suffix ? /* @__PURE__ */ import_react7.default.createElement("span", { style: { color: "var(--rb-text-muted)", fontSize: "var(--rb-text-xs)" } }, suffix) : null), error ? /* @__PURE__ */ import_react7.default.createElement("div", { style: { color: "var(--rb-signal-error)", fontSize: "var(--rb-text-xs)" } }, error) : hint ? /* @__PURE__ */ import_react7.default.createElement("div", { style: { color: "var(--rb-text-muted)", fontSize: "var(--rb-text-xs)" } }, hint) : null);
  }

  // components/forms/Radio.jsx
  init_define_import_meta_env();
  var import_react8 = __toESM(require_react_shim());
  function Radio({ label, checked, onChange, name, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react8.default.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: "var(--rb-space-3)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style } }, /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          width: 18,
          height: 18,
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: checked ? "1px solid var(--rb-yellow-500)" : "1px solid var(--rb-border-base)",
          background: "var(--rb-surface-sunken)",
          transition: "border-color var(--rb-duration-fast) var(--rb-ease-out)"
        }
      },
      checked ? /* @__PURE__ */ import_react8.default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--rb-yellow-500)" } }) : null
    ), /* @__PURE__ */ import_react8.default.createElement("input", { type: "radio", name, checked, onChange, disabled, style: { position: "absolute", opacity: 0, width: 0, height: 0 }, ...rest }), /* @__PURE__ */ import_react8.default.createElement("span", { style: { fontFamily: "var(--rb-font-mono)", fontSize: "var(--rb-text-sm)", color: "var(--rb-text-secondary)" } }, label));
  }

  // components/forms/Select.jsx
  init_define_import_meta_env();
  var import_react9 = __toESM(require_react_shim());
  function Select({ label, options = [], hint, id, style, ...rest }) {
    const selectId = id || (label ? `sel-${String(label).replace(/\s+/g, "-").toLowerCase()}` : void 0);
    return /* @__PURE__ */ import_react9.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "var(--rb-space-2)", ...style } }, label ? /* @__PURE__ */ import_react9.default.createElement("label", { htmlFor: selectId, style: { fontFamily: "var(--rb-font-mono)", fontSize: "var(--rb-text-2xs)", letterSpacing: "var(--rb-tracking-label)", textTransform: "uppercase", color: "var(--rb-text-muted)" } }, label) : null, /* @__PURE__ */ import_react9.default.createElement(
      "select",
      {
        id: selectId,
        style: {
          appearance: "none",
          background: "var(--rb-surface-sunken)",
          border: "var(--rb-border-default)",
          borderRadius: "var(--rb-radius-md)",
          color: "var(--rb-text-primary)",
          fontFamily: "var(--rb-font-mono)",
          fontSize: "var(--rb-text-sm)",
          padding: "10px var(--rb-space-3)",
          cursor: "pointer"
        },
        ...rest
      },
      options.map((o) => {
        const value = typeof o === "string" ? o : o.value;
        const text = typeof o === "string" ? o : o.label;
        return /* @__PURE__ */ import_react9.default.createElement("option", { key: value, value }, text);
      })
    ), hint ? /* @__PURE__ */ import_react9.default.createElement("div", { style: { color: "var(--rb-text-muted)", fontSize: "var(--rb-text-xs)" } }, hint) : null);
  }

  // components/forms/Switch.jsx
  init_define_import_meta_env();
  var import_react10 = __toESM(require_react_shim());
  function Switch({ label, checked, onChange, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react10.default.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: "var(--rb-space-3)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style } }, /* @__PURE__ */ import_react10.default.createElement(
      "span",
      {
        style: {
          width: 40,
          height: 22,
          flexShrink: 0,
          borderRadius: "var(--rb-radius-pill)",
          background: checked ? "var(--rb-yellow-500)" : "var(--rb-gray-700)",
          border: checked ? "1px solid var(--rb-yellow-600)" : "1px solid var(--rb-border-base)",
          display: "flex",
          alignItems: "center",
          padding: 2,
          transition: "background var(--rb-duration-base) var(--rb-ease-out)"
        }
      },
      /* @__PURE__ */ import_react10.default.createElement(
        "span",
        {
          style: {
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: checked ? "var(--rb-black-900)" : "var(--rb-gray-400)",
            transform: checked ? "translateX(18px)" : "translateX(0)",
            transition: "transform var(--rb-duration-base) var(--rb-ease-out)"
          }
        }
      )
    ), /* @__PURE__ */ import_react10.default.createElement("input", { type: "checkbox", role: "switch", checked, onChange, disabled, style: { position: "absolute", opacity: 0, width: 0, height: 0 }, ...rest }), /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontFamily: "var(--rb-font-mono)", fontSize: "var(--rb-text-sm)", color: "var(--rb-text-secondary)" } }, label));
  }

  // components/navigation/StepRail.jsx
  init_define_import_meta_env();
  var import_react11 = __toESM(require_react_shim());
  function StepRail({ steps = [], current = 0, onSelect, style }) {
    return /* @__PURE__ */ import_react11.default.createElement("div", { style: { display: "flex", gap: "var(--rb-space-2)", overflowX: "auto", ...style } }, steps.map((label, i) => {
      const state = i === current ? "current" : i < current ? "done" : "todo";
      const bar = state === "current" ? "var(--rb-yellow-500)" : state === "done" ? "var(--rb-gray-500)" : "var(--rb-gray-700)";
      const text = state === "current" ? "var(--rb-yellow-500)" : "var(--rb-text-muted)";
      return /* @__PURE__ */ import_react11.default.createElement(
        "button",
        {
          key: label,
          type: "button",
          onClick: () => onSelect && onSelect(i),
          style: { background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", flexDirection: "column", gap: "var(--rb-space-2)", minWidth: 64, textAlign: "left" }
        },
        /* @__PURE__ */ import_react11.default.createElement("span", { style: { height: 4, borderRadius: 2, background: bar, transition: "background var(--rb-duration-base) var(--rb-ease-out)" } }),
        /* @__PURE__ */ import_react11.default.createElement("span", { style: { fontFamily: "var(--rb-font-mono)", fontSize: "var(--rb-text-2xs)", letterSpacing: "0.06em", color: text, whiteSpace: "nowrap" } }, String(i + 1).padStart(2, "0"), " \xB7 ", label)
      );
    }));
  }

  // components/navigation/Tabs.jsx
  init_define_import_meta_env();
  var import_react12 = __toESM(require_react_shim());
  function Tabs({ items = [], value, onChange, style }) {
    return /* @__PURE__ */ import_react12.default.createElement("div", { role: "tablist", style: { display: "flex", gap: "var(--rb-space-1)", borderBottom: "var(--rb-border-hairline)", ...style } }, items.map((it) => {
      const id = typeof it === "string" ? it : it.value;
      const text = typeof it === "string" ? it : it.label;
      const active = id === value;
      return /* @__PURE__ */ import_react12.default.createElement(
        "button",
        {
          key: id,
          role: "tab",
          "aria-selected": active,
          type: "button",
          onClick: () => onChange && onChange(id),
          style: {
            background: "transparent",
            border: "none",
            borderBottom: active ? "2px solid var(--rb-yellow-500)" : "2px solid transparent",
            color: active ? "var(--rb-yellow-500)" : "var(--rb-text-muted)",
            fontFamily: "var(--rb-font-display)",
            fontWeight: "var(--rb-weight-medium)",
            fontSize: "var(--rb-text-sm)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "10px var(--rb-space-4)",
            marginBottom: -1,
            cursor: "pointer",
            transition: "color var(--rb-duration-fast) var(--rb-ease-out)"
          }
        },
        text
      );
    }));
  }

  // components/feedback/Dialog.jsx
  init_define_import_meta_env();
  var import_react13 = __toESM(require_react_shim());
  function Dialog({ open = true, title, description, footer, onClose, style, children }) {
    if (!open) return null;
    return /* @__PURE__ */ import_react13.default.createElement("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(0,0,0,0.72)", backdropFilter: "blur(3px)", padding: "var(--rb-space-6)" } }, /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        style: {
          width: "min(440px, 100%)",
          background: "var(--rb-surface-raised)",
          border: "var(--rb-border-default)",
          borderRadius: "var(--rb-radius-lg)",
          boxShadow: "var(--rb-shadow-overlay)",
          padding: "var(--rb-space-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--rb-space-4)",
          ...style
        }
      },
      /* @__PURE__ */ import_react13.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--rb-space-4)" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { fontFamily: "var(--rb-font-display)", fontSize: "var(--rb-text-xl)", fontWeight: "var(--rb-weight-bold)" } }, title), onClose ? /* @__PURE__ */ import_react13.default.createElement("button", { type: "button", "aria-label": "Chiudi", onClick: onClose, style: { background: "none", border: "none", color: "var(--rb-text-muted)", cursor: "pointer", fontSize: 20, lineHeight: 1 } }, "\xD7") : null),
      description ? /* @__PURE__ */ import_react13.default.createElement("div", { style: { color: "var(--rb-text-secondary)", fontSize: "var(--rb-text-sm)", lineHeight: "var(--rb-leading-normal)" } }, description) : null,
      children,
      footer ? /* @__PURE__ */ import_react13.default.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: "var(--rb-space-3)", paddingTop: "var(--rb-space-2)" } }, footer) : null
    ));
  }

  // components/feedback/Toast.jsx
  init_define_import_meta_env();
  var import_react14 = __toESM(require_react_shim());
  function Toast({ tone = "neutral", title, message, onClose, style }) {
    const tones = {
      neutral: "var(--rb-gray-500)",
      ok: "var(--rb-signal-ok)",
      warn: "var(--rb-signal-warn)",
      error: "var(--rb-signal-error)",
      info: "var(--rb-signal-info)"
    };
    return /* @__PURE__ */ import_react14.default.createElement(
      "div",
      {
        role: "status",
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--rb-space-3)",
          background: "var(--rb-surface-raised)",
          border: "var(--rb-border-default)",
          borderLeft: `3px solid ${tones[tone]}`,
          borderRadius: "var(--rb-radius-md)",
          boxShadow: "var(--rb-shadow-raised)",
          padding: "var(--rb-space-3) var(--rb-space-4)",
          minWidth: 260,
          ...style
        }
      },
      /* @__PURE__ */ import_react14.default.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 2 } }, title ? /* @__PURE__ */ import_react14.default.createElement("div", { style: { fontFamily: "var(--rb-font-display)", fontSize: "var(--rb-text-sm)", fontWeight: "var(--rb-weight-bold)" } }, title) : null, message ? /* @__PURE__ */ import_react14.default.createElement("div", { style: { color: "var(--rb-text-secondary)", fontSize: "var(--rb-text-xs)" } }, message) : null),
      onClose ? /* @__PURE__ */ import_react14.default.createElement("button", { type: "button", "aria-label": "Chiudi", onClick: onClose, style: { background: "none", border: "none", color: "var(--rb-text-muted)", cursor: "pointer", fontSize: 16, lineHeight: 1 } }, "\xD7") : null
    );
  }

  // components/feedback/Tooltip.jsx
  init_define_import_meta_env();
  var import_react15 = __toESM(require_react_shim());
  function Tooltip({ content, placement = "top", style, children }) {
    const [open, setOpen] = import_react15.default.useState(false);
    const pos = {
      top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
      bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
      left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
      right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }
    };
    return /* @__PURE__ */ import_react15.default.createElement(
      "span",
      {
        style: { position: "relative", display: "inline-flex", ...style },
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false)
      },
      children,
      open ? /* @__PURE__ */ import_react15.default.createElement(
        "span",
        {
          role: "tooltip",
          style: {
            position: "absolute",
            zIndex: 20,
            whiteSpace: "nowrap",
            background: "var(--rb-yellow-500)",
            color: "var(--rb-black-900)",
            fontFamily: "var(--rb-font-mono)",
            fontSize: "var(--rb-text-2xs)",
            letterSpacing: "0.04em",
            padding: "5px 9px",
            borderRadius: "var(--rb-radius-sm)",
            ...pos[placement]
          }
        },
        content
      ) : null
    );
  }
  return __toCommonJS(pkg_entry_exports);
})();
window.RBSystem=RBSystem.__dsMainNs?Object.assign({},RBSystem,RBSystem.__dsMainNs,{__dsMainNs:undefined}):RBSystem;
