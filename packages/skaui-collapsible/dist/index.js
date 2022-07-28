"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"(exports, module2) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames2.default = classNames2;
        module2.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// index.ts
var skaui_collapsible_exports = {};
__export(skaui_collapsible_exports, {
  Collapsible: () => Collapsible_default
});
module.exports = __toCommonJS(skaui_collapsible_exports);

// src/Collapsible.tsx
var import_classnames = __toESM(require_classnames());
var import_react3 = __toESM(require("react"));

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require("react"));

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require("react"));
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/fi/index.esm.js
function FiChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "6 9 12 15 18 9" } }] })(props);
}

// src/Collapsible.tsx
var Collapsible = (props) => {
  const {
    className,
    children,
    open: _open = false,
    title,
    transition,
    ...rest
  } = props;
  const [open, setOpen] = import_react3.default.useState(_open);
  const [height, setHeight] = import_react3.default.useState(
    open ? void 0 : 0
  );
  function handleToggle() {
    setOpen(!open);
  }
  const ref = import_react3.default.useRef(null);
  import_react3.default.useEffect(() => {
    if (!height || !open || !ref.current)
      return void 0;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height + 32);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, open]);
  import_react3.default.useEffect(() => {
    var _a;
    if (open) {
      setHeight((_a = ref.current) == null ? void 0 : _a.getBoundingClientRect().height);
    } else
      setHeight(0);
  }, [open]);
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: (0, import_classnames.default)("collapsible", className),
    ...rest
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    onClick: handleToggle,
    className: "collapsible-title"
  }, /* @__PURE__ */ import_react3.default.createElement("span", null, title), /* @__PURE__ */ import_react3.default.createElement("span", null, /* @__PURE__ */ import_react3.default.createElement(FiChevronDown, {
    className: (0, import_classnames.default)("w-5 h-5 transition-transform duration-300", [
      open && "-rotate-180"
    ])
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: (0, import_classnames.default)("collapsible-content-wrapper"),
    style: { height }
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    ref,
    className: "collapsible-content-content"
  }, children)));
};
var Collapsible_default = Collapsible;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Collapsible
});
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
