"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// index.ts
var skaui_treeview_exports = {};
__export(skaui_treeview_exports, {
  File: () => File,
  Folder: () => Folder,
  TreeView: () => TreeView,
  Treeview: () => TreeView_default
});
module.exports = __toCommonJS(skaui_treeview_exports);

// ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// src/TreeView.tsx
var import_react9 = __toESM(require("react"));

// ../../node_modules/.pnpm/@react-aria+utils@3.13.1_react@18.2.0/node_modules/@react-aria/utils/dist/module.js
var import_react3 = __toESM(require("react"));

// ../../node_modules/.pnpm/@react-aria+ssr@3.2.0_react@18.2.0/node_modules/@react-aria/ssr/dist/module.js
var import_react = __toESM(require("react"));
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $704cf1d3b684cc5c$exports = {};
$parcel$export($704cf1d3b684cc5c$exports, "SSRProvider", () => $704cf1d3b684cc5c$export$9f8ac96af4b1b2ae);
$parcel$export($704cf1d3b684cc5c$exports, "useSSRSafeId", () => $704cf1d3b684cc5c$export$619500959fc48b26);
$parcel$export($704cf1d3b684cc5c$exports, "useIsSSR", () => $704cf1d3b684cc5c$export$535bd6ca7f90a273);
var $704cf1d3b684cc5c$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $704cf1d3b684cc5c$var$SSRContext = /* @__PURE__ */ import_react.default.createContext($704cf1d3b684cc5c$var$defaultContext);
function $704cf1d3b684cc5c$export$9f8ac96af4b1b2ae(props) {
  let cur = (0, import_react.useContext)($704cf1d3b684cc5c$var$SSRContext);
  let value = (0, import_react.useMemo)(
    () => ({
      prefix: cur === $704cf1d3b684cc5c$var$defaultContext ? "" : `${cur.prefix}-${++cur.current}`,
      current: 0
    }),
    [
      cur
    ]
  );
  return /* @__PURE__ */ import_react.default.createElement($704cf1d3b684cc5c$var$SSRContext.Provider, {
    value
  }, props.children);
}
var $704cf1d3b684cc5c$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
function $704cf1d3b684cc5c$export$619500959fc48b26(defaultId) {
  let ctx = (0, import_react.useContext)($704cf1d3b684cc5c$var$SSRContext);
  if (ctx === $704cf1d3b684cc5c$var$defaultContext && !$704cf1d3b684cc5c$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  return (0, import_react.useMemo)(
    () => defaultId || `react-aria${ctx.prefix}-${++ctx.current}`,
    [
      defaultId
    ]
  );
}
function $704cf1d3b684cc5c$export$535bd6ca7f90a273() {
  let cur = (0, import_react.useContext)($704cf1d3b684cc5c$var$SSRContext);
  let isInSSRContext = cur !== $704cf1d3b684cc5c$var$defaultContext;
  let [isSSR, setIsSSR] = (0, import_react.useState)(isInSSRContext);
  if (typeof window !== "undefined" && isInSSRContext)
    (0, import_react.useLayoutEffect)(() => {
      setIsSSR(false);
    }, []);
  return isSSR;
}

// ../../node_modules/.pnpm/@react-stately+utils@3.5.0_react@18.2.0/node_modules/@react-stately/utils/dist/module.js
var import_react2 = require("react");
function $parcel$export2(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $458b0a5536c1a7cf$exports = {};
$parcel$export2($458b0a5536c1a7cf$exports, "useControlledState", () => $458b0a5536c1a7cf$export$40bfa8c7b0832715);
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value1, defaultValue, onChange) {
  let [stateValue, setStateValue] = (0, import_react2.useState)(value1 || defaultValue);
  let ref = (0, import_react2.useRef)(value1 !== void 0);
  let wasControlled = ref.current;
  let isControlled = value1 !== void 0;
  let stateRef = (0, import_react2.useRef)(stateValue);
  if (wasControlled !== isControlled)
    console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
  ref.current = isControlled;
  let setValue = (0, import_react2.useCallback)((value2, ...args) => {
    let onChangeCaller = (value, ...onChangeArgs) => {
      if (onChange) {
        if (!Object.is(stateRef.current, value))
          onChange(value, ...onChangeArgs);
      }
      if (!isControlled)
        stateRef.current = value;
    };
    if (typeof value2 === "function") {
      console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
      let updateFunction = (oldValue, ...functionArgs) => {
        let interceptedValue = value2(isControlled ? stateRef.current : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled)
          return interceptedValue;
        return oldValue;
      };
      setStateValue(updateFunction);
    } else {
      if (!isControlled)
        setStateValue(value2);
      onChangeCaller(value2, ...args);
    }
  }, [
    isControlled,
    onChange
  ]);
  if (isControlled)
    stateRef.current = value1;
  else
    value1 = stateValue;
  return [
    value1,
    setValue
  ];
}
var $9446cca9a3875146$exports = {};
$parcel$export2($9446cca9a3875146$exports, "clamp", () => $9446cca9a3875146$export$7d15b64cf5a3a4c4);
$parcel$export2($9446cca9a3875146$exports, "snapValueToStep", () => $9446cca9a3875146$export$cb6e0bb50bc19463);
$parcel$export2($9446cca9a3875146$exports, "toFixedNumber", () => $9446cca9a3875146$export$b6268554fba451f);
function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
  let newValue = Math.min(Math.max(value, min), max);
  return newValue;
}
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
  let remainder = (value - (isNaN(min) ? 0 : min)) % step;
  let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
  if (!isNaN(min)) {
    if (snappedValue < min)
      snappedValue = min;
    else if (!isNaN(max) && snappedValue > max)
      snappedValue = min + Math.floor((max - min) / step) * step;
  } else if (!isNaN(max) && snappedValue > max)
    snappedValue = Math.floor(max / step) * step;
  let string = step.toString();
  let index = string.indexOf(".");
  let precision = index >= 0 ? string.length - index : 0;
  if (precision > 0) {
    let pow = Math.pow(10, precision);
    snappedValue = Math.round(snappedValue * pow) / pow;
  }
  return snappedValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base = 10) {
  const pow = Math.pow(base, digits);
  return Math.round(value * pow) / pow;
}

// ../../node_modules/.pnpm/@react-aria+utils@3.13.1_react@18.2.0/node_modules/@react-aria/utils/dist/module.js
function $parcel$export3(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $bdb11010cef70236$exports = {};
$parcel$export3($bdb11010cef70236$exports, "useId", () => $bdb11010cef70236$export$f680877a34711e37);
$parcel$export3($bdb11010cef70236$exports, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f842629);
$parcel$export3($bdb11010cef70236$exports, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb8);
var $f0a04ccd8dbdd83b$exports = {};
$parcel$export3($f0a04ccd8dbdd83b$exports, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== "undefined" ? import_react3.default.useLayoutEffect : () => {
};
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = (0, import_react3.useState)(defaultId);
  let nextId = (0, import_react3.useRef)(null);
  let res = $704cf1d3b684cc5c$export$619500959fc48b26(value);
  let updateValue = (0, import_react3.useCallback)((val) => {
    nextId.current = val;
  }, []);
  $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let r2 = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r2);
    };
  }, [
    res
  ]);
  (0, import_react3.useEffect)(() => {
    let newId = nextId.current;
    if (newId) {
      nextId.current = null;
      setValue(newId);
    }
  });
  return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB)
    return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
  let id = $bdb11010cef70236$export$f680877a34711e37();
  let [resolvedId, setResolvedId] = $1dbecbe27a04f9af$export$14d238f342723f25(id);
  let updateId = (0, import_react3.useCallback)(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : null;
    });
  }, [
    id,
    setResolvedId
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updateId, [
    id,
    updateId,
    ...depArray
  ]);
  return resolvedId;
}
var $ff5963eb1fccf552$exports = {};
$parcel$export3($ff5963eb1fccf552$exports, "chain", () => $ff5963eb1fccf552$export$e08e3b67e392101e);
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks)
      if (typeof callback === "function")
        callback(...args);
  };
}
var $3ef42575df84b30b$exports = {};
$parcel$export3($3ef42575df84b30b$exports, "mergeProps", () => $3ef42575df84b30b$export$9d1611c77c2fe928);
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i = 1; i < args.length; i++) {
    let props = args[i];
    for (let key in props) {
      let a = result[key];
      let b = props[key];
      if (typeof a === "function" && typeof b === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90)
        result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string")
        result[key] = clsx_m_default(a, b);
      else if (key === "id" && a && b)
        result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);
      else
        result[key] = b !== void 0 ? b : a;
    }
  }
  return result;
}
var $5dc95899b306f630$exports = {};
$parcel$export3($5dc95899b306f630$exports, "mergeRefs", () => $5dc95899b306f630$export$c9058316764c140e);
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
  return (value) => {
    for (let ref of refs) {
      if (typeof ref === "function")
        ref(value);
      else if (ref != null)
        ref.current = value;
    }
  };
}
var $65484d02dcb7eb3e$exports = {};
$parcel$export3($65484d02dcb7eb3e$exports, "filterDOMProps", () => $65484d02dcb7eb3e$export$457c3d6518dd4c6f);
var $65484d02dcb7eb3e$var$DOMPropNames = /* @__PURE__ */ new Set([
  "id"
]);
var $65484d02dcb7eb3e$var$labelablePropNames = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
var $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
  let { labelable, propNames } = opts;
  let filteredProps = {};
  for (const prop in props)
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop)))
      filteredProps[prop] = props[prop];
  return filteredProps;
}
var $7215afc6de606d6b$exports = {};
$parcel$export3($7215afc6de606d6b$exports, "focusWithoutScrolling", () => $7215afc6de606d6b$export$de79e2c695e052f3);
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
var $ab71dadb03a6fb2e$exports = {};
$parcel$export3($ab71dadb03a6fb2e$exports, "getOffset", () => $ab71dadb03a6fb2e$export$622cea445a1c5b7d);
function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = "horizontal") {
  let rect = element.getBoundingClientRect();
  if (reverse)
    return orientation === "horizontal" ? rect.right : rect.bottom;
  return orientation === "horizontal" ? rect.left : rect.top;
}
var $103b0e103f1b5952$exports = {};
$parcel$export3($103b0e103f1b5952$exports, "clamp", () => $9446cca9a3875146$export$7d15b64cf5a3a4c4);
$parcel$export3($103b0e103f1b5952$exports, "snapValueToStep", () => $9446cca9a3875146$export$cb6e0bb50bc19463);
var $bbed8b41f857bcc0$exports = {};
$parcel$export3($bbed8b41f857bcc0$exports, "runAfterTransition", () => $bbed8b41f857bcc0$export$24490316f764c430);
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  let onTransitionStart = (e) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties)
      return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0)
      fn();
    else
      $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}
var $9cc09df9fd7676be$exports = {};
$parcel$export3($9cc09df9fd7676be$exports, "useDrag1D", () => $9cc09df9fd7676be$export$7bbed75feba39706);
var $9cc09df9fd7676be$var$draggingElements = [];
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
  console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
  let { containerRef, reverse, orientation, onHover, onDrag, onPositionChange, onIncrement, onDecrement, onIncrementToMax, onDecrementToMin, onCollapseToggle } = props;
  let getPosition = (e) => orientation === "horizontal" ? e.clientX : e.clientY;
  let getNextOffset = (e) => {
    let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
    let mouseOffset = getPosition(e);
    let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
    return nextOffset;
  };
  let dragging = (0, import_react3.useRef)(false);
  let prevPosition = (0, import_react3.useRef)(0);
  let handlers = (0, import_react3.useRef)({
    onPositionChange,
    onDrag
  });
  handlers.current.onDrag = onDrag;
  handlers.current.onPositionChange = onPositionChange;
  let onMouseDragged = (e) => {
    e.preventDefault();
    let nextOffset = getNextOffset(e);
    if (!dragging.current) {
      dragging.current = true;
      if (handlers.current.onDrag)
        handlers.current.onDrag(true);
      if (handlers.current.onPositionChange)
        handlers.current.onPositionChange(nextOffset);
    }
    if (prevPosition.current === nextOffset)
      return;
    prevPosition.current = nextOffset;
    if (onPositionChange)
      onPositionChange(nextOffset);
  };
  let onMouseUp = (e) => {
    const target = e.target;
    dragging.current = false;
    let nextOffset = getNextOffset(e);
    if (handlers.current.onDrag)
      handlers.current.onDrag(false);
    if (handlers.current.onPositionChange)
      handlers.current.onPositionChange(nextOffset);
    $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
    window.removeEventListener("mouseup", onMouseUp, false);
    window.removeEventListener("mousemove", onMouseDragged, false);
  };
  let onMouseDown = (e) => {
    const target = e.currentTarget;
    if ($9cc09df9fd7676be$var$draggingElements.some(
      (elt) => target.contains(elt)
    ))
      return;
    $9cc09df9fd7676be$var$draggingElements.push(target);
    window.addEventListener("mousemove", onMouseDragged, false);
    window.addEventListener("mouseup", onMouseUp, false);
  };
  let onMouseEnter = () => {
    if (onHover)
      onHover(true);
  };
  let onMouseOut = () => {
    if (onHover)
      onHover(false);
  };
  let onKeyDown = (e) => {
    switch (e.key) {
      case "Left":
      case "ArrowLeft":
        if (orientation === "horizontal") {
          e.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Up":
      case "ArrowUp":
        if (orientation === "vertical") {
          e.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Right":
      case "ArrowRight":
        if (orientation === "horizontal") {
          e.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Down":
      case "ArrowDown":
        if (orientation === "vertical") {
          e.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Home":
        e.preventDefault();
        if (onDecrementToMin)
          onDecrementToMin();
        break;
      case "End":
        e.preventDefault();
        if (onIncrementToMax)
          onIncrementToMax();
        break;
      case "Enter":
        e.preventDefault();
        if (onCollapseToggle)
          onCollapseToggle();
        break;
    }
  };
  return {
    onMouseDown,
    onMouseEnter,
    onMouseOut,
    onKeyDown
  };
}
var $03deb23ff14920c4$exports = {};
$parcel$export3($03deb23ff14920c4$exports, "useGlobalListeners", () => $03deb23ff14920c4$export$4eaf04e54aa8eed6);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react3.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react3.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react3.useCallback)((eventTarget, type, listener, options) => {
    var ref;
    let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react3.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react3.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
var $313b98861ee5dd6c$exports = {};
$parcel$export3($313b98861ee5dd6c$exports, "useLabels", () => $313b98861ee5dd6c$export$d6875122194c7b44);
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = $bdb11010cef70236$export$f680877a34711e37(id);
  if (labelledBy && label) {
    let ids = /* @__PURE__ */ new Set([
      ...labelledBy.trim().split(/\s+/),
      id
    ]);
    labelledBy = [
      ...ids
    ].join(" ");
  } else if (labelledBy)
    labelledBy = labelledBy.trim().split(/\s+/).join(" ");
  if (!label && !labelledBy && defaultLabel)
    label = defaultLabel;
  return {
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy
  };
}
var $df56164dff5785e2$exports = {};
$parcel$export3($df56164dff5785e2$exports, "useObjectRef", () => $df56164dff5785e2$export$4338b53315abf666);
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react3.useRef)();
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (!forwardedRef)
      return;
    if (typeof forwardedRef === "function")
      forwardedRef(objRef.current);
    else
      forwardedRef.current = objRef.current;
  }, [
    forwardedRef
  ]);
  return objRef;
}
var $4f58c5f72bcf79f7$exports = {};
$parcel$export3($4f58c5f72bcf79f7$exports, "useUpdateEffect", () => $4f58c5f72bcf79f7$export$496315a1608d9602);
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
  const isInitialMount = (0, import_react3.useRef)(true);
  (0, import_react3.useEffect)(() => {
    if (isInitialMount.current)
      isInitialMount.current = false;
    else
      effect();
  }, dependencies);
}
var $9daab02d461809db$exports = {};
$parcel$export3($9daab02d461809db$exports, "useResizeObserver", () => $9daab02d461809db$export$683480f191c0e3ea);
function $9daab02d461809db$var$hasResizeObserver() {
  return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
  const { ref, onResize } = options;
  (0, import_react3.useEffect)(() => {
    let element = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!element)
      return;
    if (!$9daab02d461809db$var$hasResizeObserver()) {
      window.addEventListener("resize", onResize, false);
      return () => {
        window.removeEventListener("resize", onResize, false);
      };
    } else {
      const resizeObserverInstance = new window.ResizeObserver((entries) => {
        if (!entries.length)
          return;
        onResize();
      });
      resizeObserverInstance.observe(element);
      return () => {
        if (element)
          resizeObserverInstance.unobserve(element);
      };
    }
  }, [
    onResize,
    ref
  ]);
}
var $e7801be82b4b2a53$exports = {};
$parcel$export3($e7801be82b4b2a53$exports, "useSyncRef", () => $e7801be82b4b2a53$export$4debdb1a3f0fa79e);
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [
    context,
    ref
  ]);
}
var $62d8ded9296f3872$exports = {};
$parcel$export3($62d8ded9296f3872$exports, "getScrollParent", () => $62d8ded9296f3872$export$cfa2225e87938781);
function $62d8ded9296f3872$export$cfa2225e87938781(node) {
  while (node && !$62d8ded9296f3872$var$isScrollable(node))
    node = node.parentElement;
  return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$var$isScrollable(node) {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
var $5df64b3807dc15ee$exports = {};
$parcel$export3($5df64b3807dc15ee$exports, "useViewportSize", () => $5df64b3807dc15ee$export$d699905dd57c73ca);
var $5df64b3807dc15ee$var$visualViewport = typeof window !== "undefined" && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
  let [size1, setSize] = (0, import_react3.useState)(
    () => $5df64b3807dc15ee$var$getViewportSize()
  );
  (0, import_react3.useEffect)(() => {
    let onResize = () => {
      setSize((size) => {
        let newSize = $5df64b3807dc15ee$var$getViewportSize();
        if (newSize.width === size.width && newSize.height === size.height)
          return size;
        return newSize;
      });
    };
    if (!$5df64b3807dc15ee$var$visualViewport)
      window.addEventListener("resize", onResize);
    else
      $5df64b3807dc15ee$var$visualViewport.addEventListener("resize", onResize);
    return () => {
      if (!$5df64b3807dc15ee$var$visualViewport)
        window.removeEventListener("resize", onResize);
      else
        $5df64b3807dc15ee$var$visualViewport.removeEventListener("resize", onResize);
    };
  }, []);
  return size1;
}
function $5df64b3807dc15ee$var$getViewportSize() {
  return {
    width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
    height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
  };
}
var $ef06256079686ba0$exports = {};
$parcel$export3($ef06256079686ba0$exports, "useDescription", () => $ef06256079686ba0$export$f8aeda7b10753fa1);
var $ef06256079686ba0$var$descriptionId = 0;
var $ef06256079686ba0$var$descriptionNodes = /* @__PURE__ */ new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
  let [id1, setId] = (0, import_react3.useState)(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (!description)
      return;
    let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
    if (!desc) {
      let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
      setId(id);
      let node = document.createElement("div");
      node.id = id;
      node.style.display = "none";
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $ef06256079686ba0$var$descriptionNodes.set(description, desc);
    } else
      setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (--desc.refCount === 0) {
        desc.element.remove();
        $ef06256079686ba0$var$descriptionNodes.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id1 : void 0
  };
}
var $c87311424ea30a05$exports = {};
$parcel$export3($c87311424ea30a05$exports, "isMac", () => $c87311424ea30a05$export$9ac100e40613ea10);
$parcel$export3($c87311424ea30a05$exports, "isIPhone", () => $c87311424ea30a05$export$186c6964ca17d99);
$parcel$export3($c87311424ea30a05$exports, "isIPad", () => $c87311424ea30a05$export$7bef049ce92e4224);
$parcel$export3($c87311424ea30a05$exports, "isIOS", () => $c87311424ea30a05$export$fedb369cb70207f1);
$parcel$export3($c87311424ea30a05$exports, "isAppleDevice", () => $c87311424ea30a05$export$e1865c3bedcd822b);
$parcel$export3($c87311424ea30a05$exports, "isWebKit", () => $c87311424ea30a05$export$78551043582a6a98);
$parcel$export3($c87311424ea30a05$exports, "isChrome", () => $c87311424ea30a05$export$6446a186d09e379e);
$parcel$export3($c87311424ea30a05$exports, "isAndroid", () => $c87311424ea30a05$export$a11b0059900ceec8);
function $c87311424ea30a05$var$testUserAgent(re) {
  var ref;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((ref = window.navigator["userAgentData"]) === null || ref === void 0 ? void 0 : ref.brands.some(
    (brand) => re.test(brand.brand)
  )) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  return typeof window !== "undefined" && window.navigator != null ? re.test((window.navigator["userAgentData"] || window.navigator).platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
var $e9faafb641e167db$exports = {};
$parcel$export3($e9faafb641e167db$exports, "useEvent", () => $e9faafb641e167db$export$90fc3a17d93f704c);
function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler1, options) {
  let handlerRef = (0, import_react3.useRef)(handler1);
  handlerRef.current = handler1;
  let isDisabled = handler1 == null;
  (0, import_react3.useEffect)(() => {
    if (isDisabled)
      return;
    let element = ref.current;
    let handler = (e) => handlerRef.current.call(this, e);
    element.addEventListener(event, handler, options);
    return () => {
      element.removeEventListener(event, handler, options);
    };
  }, [
    ref,
    event,
    options,
    isDisabled
  ]);
}
var $1dbecbe27a04f9af$exports = {};
$parcel$export3($1dbecbe27a04f9af$exports, "useValueEffect", () => $1dbecbe27a04f9af$export$14d238f342723f25);
function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
  let [value, setValue] = (0, import_react3.useState)(defaultValue);
  let valueRef = (0, import_react3.useRef)(value);
  let effect = (0, import_react3.useRef)(null);
  valueRef.current = value;
  let nextRef = (0, import_react3.useRef)(null);
  nextRef.current = () => {
    let newValue = effect.current.next();
    if (newValue.done) {
      effect.current = null;
      return;
    }
    if (value === newValue.value)
      nextRef.current();
    else
      setValue(newValue.value);
  };
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (effect.current)
      nextRef.current();
  });
  let queue = (0, import_react3.useCallback)((fn) => {
    effect.current = fn(valueRef.current);
    nextRef.current();
  }, [
    effect,
    nextRef
  ]);
  return [
    value,
    queue
  ];
}
var $2f04cbc44ee30ce0$exports = {};
$parcel$export3($2f04cbc44ee30ce0$exports, "scrollIntoView", () => $2f04cbc44ee30ce0$export$53a0910f038337bd);
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
  let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
  let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x = scrollView.scrollLeft;
  let y = scrollView.scrollTop;
  let maxX = x + scrollView.offsetWidth;
  let maxY = y + scrollView.offsetHeight;
  if (offsetX <= x)
    x = offsetX;
  else if (offsetX + width > maxX)
    x += offsetX + width - maxX;
  if (offsetY <= y)
    y = offsetY;
  else if (offsetY + height > maxY)
    y += offsetY + height - maxY;
  scrollView.scrollLeft = x;
  scrollView.scrollTop = y;
}
function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
  const prop = axis === "left" ? "offsetLeft" : "offsetTop";
  let sum = 0;
  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor)
      break;
    else if (child.offsetParent.contains(ancestor)) {
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }
  return sum;
}

// ../../node_modules/.pnpm/@react-aria+focus@3.6.1_react@18.2.0/node_modules/@react-aria/focus/dist/module.js
var import_react5 = __toESM(require("react"));

// ../../node_modules/.pnpm/@react-aria+interactions@3.9.1_react@18.2.0/node_modules/@react-aria/interactions/dist/module.js
var import_react4 = __toESM(require("react"));
function $parcel$export4(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $3b117e43dc0ca95d$exports = {};
$parcel$export4($3b117e43dc0ca95d$exports, "Pressable", () => $3b117e43dc0ca95d$export$27c701ed9e449e99);
var $f6c31cce2adf654f$exports = {};
$parcel$export4($f6c31cce2adf654f$exports, "usePress", () => $f6c31cce2adf654f$export$45712eceda6fad21);
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    if ($14c0b72509d70225$var$state === "default") {
      $14c0b72509d70225$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
      document.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    if ($14c0b72509d70225$var$state !== "disabled")
      return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      $bbed8b41f857bcc0$export$24490316f764c430(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          if (document.documentElement.style.webkitUserSelect === "none")
            document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
    let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
    if (target.style.userSelect === "none")
      target.style.userSelect = targetOldUserSelect;
    if (target.getAttribute("style") === "")
      target.removeAttribute("style");
    $14c0b72509d70225$var$modifiedElementMap.delete(target);
  }
}
function $8a9cb279dc87e130$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react4.useRef)({
    isFocused: false,
    onBlur,
    observer: null
  });
  stateRef.current.onBlur = onBlur;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  return (0, import_react4.useCallback)((e1) => {
    if (e1.target instanceof HTMLButtonElement || e1.target instanceof HTMLInputElement || e1.target instanceof HTMLTextAreaElement || e1.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e1.target;
      let onBlurHandler = (e) => {
        var _current, ref;
        stateRef.current.isFocused = false;
        if (target.disabled)
          (ref = (_current = stateRef.current).onBlur) === null || ref === void 0 ? void 0 : ref.call(_current, new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          stateRef.current.observer.disconnect();
          target.dispatchEvent(new FocusEvent("blur"));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, []);
}
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = import_react4.default.createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react4.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
  if (context) {
    let { register, ...contextProps } = context;
    props = $3ef42575df84b30b$export$9d1611c77c2fe928(contextProps, props);
    register();
  }
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, props.ref);
  return props;
}
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    ref: _,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let propsRef = (0, import_react4.useRef)(null);
  propsRef.current = {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = (0, import_react4.useState)(false);
  let ref = (0, import_react4.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let pressProps1 = (0, import_react4.useMemo)(() => {
    let state = ref.current;
    let triggerPressStart = (originalEvent, pointerType) => {
      let { onPressStart, onPressChange, isDisabled } = propsRef.current;
      if (isDisabled || state.didFirePressStart)
        return;
      if (onPressStart)
        onPressStart({
          type: "pressstart",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      if (onPressChange)
        onPressChange(true);
      state.didFirePressStart = true;
      setPressed(true);
    };
    let triggerPressEnd = (originalEvent, pointerType, wasPressed = true) => {
      let { onPressEnd, onPressChange, onPress, isDisabled } = propsRef.current;
      if (!state.didFirePressStart)
        return;
      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;
      if (onPressEnd)
        onPressEnd({
          type: "pressend",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      if (onPressChange)
        onPressChange(false);
      setPressed(false);
      if (onPress && wasPressed && !isDisabled)
        onPress({
          type: "press",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
    };
    let triggerPressUp = (originalEvent, pointerType) => {
      let { onPressUp, isDisabled } = propsRef.current;
      if (isDisabled)
        return;
      if (onPressUp)
        onPressUp({
          type: "pressup",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
    };
    let cancel = (e) => {
      if (state.isPressed) {
        if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
      }
    };
    let pressProps = {
      onKeyDown(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target))
            e.preventDefault();
          e.stopPropagation();
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            triggerPressStart(e, "keyboard");
            addGlobalListener(document, "keyup", onKeyUp, false);
          }
        }
      },
      onKeyUp(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target))
          triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard");
      },
      onClick(e) {
        if (e && !e.currentTarget.contains(e.target))
          return;
        if (e && e.button === 0) {
          e.stopPropagation();
          if (isDisabled1)
            e.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === "virtual" || $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent))) {
            if (!isDisabled1 && !preventFocusOnPress)
              $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
            triggerPressStart(e, "virtual");
            triggerPressUp(e, "virtual");
            triggerPressEnd(e, "virtual");
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }
    };
    let onKeyUp = (e) => {
      if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e)) {
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target))
          e.preventDefault();
        e.stopPropagation();
        state.isPressed = false;
        let target = e.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (state.target.contains(target) && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute("role") === "link")
          state.target.click();
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps.onPointerDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target))
          return;
        if ($f6c31cce2adf654f$var$isVirtualPointerEvent(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget))
          e.preventDefault();
        state.pointerType = e.pointerType;
        e.stopPropagation();
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!isDisabled1 && !preventFocusOnPress)
            $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$16a4697467175487(state.target);
          triggerPressStart(e, state.pointerType);
          addGlobalListener(document, "pointermove", onPointerMove, false);
          addGlobalListener(document, "pointerup", onPointerUp, false);
          addGlobalListener(document, "pointercancel", onPointerCancel, false);
        }
      };
      pressProps.onMouseDown = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        if (e.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget))
            e.preventDefault();
          e.stopPropagation();
        }
      };
      pressProps.onPointerUp = (e) => {
        if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual")
          return;
        if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget))
          triggerPressUp(e, state.pointerType || e.pointerType);
      };
      let onPointerMove = (e) => {
        if (e.pointerId !== state.activePointerId)
          return;
        if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
          if ($f6c31cce2adf654f$var$isOverTarget(e, state.target))
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
          else if (state.isOverTarget)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        }
      };
      let onPointerCancel = (e) => {
        cancel(e);
      };
      pressProps.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        cancel(e);
      };
    } else {
      pressProps.onMouseDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target))
          return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget))
          e.preventDefault();
        e.stopPropagation();
        if (state.ignoreEmulatedMouseEvents)
          return;
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
        triggerPressStart(e, state.pointerType);
        addGlobalListener(document, "mouseup", onMouseUp, false);
      };
      pressProps.onMouseEnter = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        e.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e, state.pointerType);
        }
      };
      pressProps.onMouseLeave = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        e.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e);
        }
      };
      pressProps.onMouseUp = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e.button === 0)
          triggerPressUp(e, state.pointerType);
      };
      let onMouseUp = (e) => {
        if (e.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if ($f6c31cce2adf654f$var$isOverTarget(e, state.target))
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
        else if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps.onTouchStart = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        e.stopPropagation();
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$16a4697467175487(state.target);
        triggerPressStart(e, state.pointerType);
        addGlobalListener(window, "scroll", onScroll, true);
      };
      pressProps.onTouchMove = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        e.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e);
        }
      };
      pressProps.onTouchEnd = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        e.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
          triggerPressEnd(e, state.pointerType);
        } else if (state.isOverTarget)
          triggerPressEnd(e, state.pointerType, false);
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        removeAllGlobalListeners();
      };
      pressProps.onTouchCancel = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        e.stopPropagation();
        if (state.isPressed)
          cancel(e);
      };
      let onScroll = (e) => {
        if (state.isPressed && e.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target))
          return;
        cancel(e);
      };
    }
    return pressProps;
  }, [
    addGlobalListener,
    isDisabled1,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress
  ]);
  (0, import_react4.useEffect)(() => {
    return () => {
      if (!allowTextSelectionOnPress)
        $14c0b72509d70225$export$b0d6fa1ab32e3295(ref.current.target);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, pressProps1)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event) {
  const { key, code, target } = event;
  const element = target;
  const { tagName, isContentEditable } = element;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true && (!$f6c31cce2adf654f$var$isHTMLAnchorLink(element) || role === "button" && key !== "Enter") && !(role === "link" && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0)
    return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
  if (a.left > b.right || b.left > a.right)
    return false;
  if (a.top > b.bottom || b.top > a.bottom)
    return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !target.draggable;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target) {
  return !((target.tagName === "INPUT" || target.tagName === "BUTTON") && target.type === "submit");
}
function $f6c31cce2adf654f$var$isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = /* @__PURE__ */ import_react4.default.forwardRef(({ children, ...props }, ref) => {
  let newRef = (0, import_react4.useRef)();
  ref = ref !== null && ref !== void 0 ? ref : newRef;
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    ...props,
    ref
  });
  let child = import_react4.default.Children.only(children);
  return /* @__PURE__ */ import_react4.default.cloneElement(
    child,
    {
      ref,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(child.props, pressProps)
    }
  );
});
var $f1ab8c75478c6f73$exports = {};
$parcel$export4($f1ab8c75478c6f73$exports, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b8);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = /* @__PURE__ */ import_react4.default.forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react4.useRef)(false);
  let prevContext = (0, import_react4.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
  let context = $3ef42575df84b30b$export$9d1611c77c2fe928(prevContext || {}, {
    ...props,
    ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),
    register() {
      isRegistered.current = true;
      if (prevContext)
        prevContext.register();
    }
  });
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(prevContext, ref);
  (0, import_react4.useEffect)(() => {
    if (!isRegistered.current)
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
  }, []);
  return /* @__PURE__ */ import_react4.default.createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb5.Provider, {
    value: context
  }, children);
});
var $a1ea59d68270f0dd$exports = {};
$parcel$export4($a1ea59d68270f0dd$exports, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e6);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react4.useCallback)((e) => {
    if (e.target === e.currentTarget) {
      if (onBlurProp)
        onBlurProp(e);
      if (onFocusChange)
        onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  const onFocus = (0, import_react4.useCallback)((e) => {
    if (e.target === e.currentTarget) {
      if (onFocusProp)
        onFocusProp(e);
      if (onFocusChange)
        onFocusChange(true);
      onSyntheticFocus(e);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : null
    }
  };
}
var $507fabe10e71c6fb$exports = {};
$parcel$export4($507fabe10e71c6fb$exports, "isFocusVisible", () => $507fabe10e71c6fb$export$b9b3dfddab17db27);
$parcel$export4($507fabe10e71c6fb$exports, "getInteractionModality", () => $507fabe10e71c6fb$export$630ff653c5ada6a9);
$parcel$export4($507fabe10e71c6fb$exports, "setInteractionModality", () => $507fabe10e71c6fb$export$8397ddfc504fdb9a);
$parcel$export4($507fabe10e71c6fb$exports, "useInteractionModality", () => $507fabe10e71c6fb$export$98e20ec92f614cfe);
$parcel$export4($507fabe10e71c6fb$exports, "useFocusVisible", () => $507fabe10e71c6fb$export$ffd9e5021c1fb2d6);
$parcel$export4($507fabe10e71c6fb$exports, "useFocusVisibleListener", () => $507fabe10e71c6fb$export$ec71b4b83ac08ec3);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e);
}
function $507fabe10e71c6fb$var$isValidKey(e) {
  return !(e.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
  if ($8a9cb279dc87e130$export$60278871457622de(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
  if (e.target === window || e.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
  if (typeof window === "undefined" || $507fabe10e71c6fb$var$hasSetupGlobalListeners)
    return;
  let focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  document.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  window.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  window.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    document.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  else
    document.addEventListener("DOMContentLoaded", $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
  $507fabe10e71c6fb$var$currentModality = modality;
  $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  let [modality, setModality] = (0, import_react4.useState)($507fabe10e71c6fb$var$currentModality);
  (0, import_react4.useEffect)(() => {
    let handler = () => {
      setModality($507fabe10e71c6fb$var$currentModality);
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, []);
  return modality;
}
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  return !(isTextInput && modality === "keyboard" && e instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
  let { isTextInput, autoFocus } = props;
  let [isFocusVisibleState, setFocusVisible] = (0, import_react4.useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3(($507fabe10e71c6fb$export$b9b3dfddab17db272) => {
    setFocusVisible($507fabe10e71c6fb$export$b9b3dfddab17db272);
  }, [
    isTextInput
  ], {
    isTextInput
  });
  return {
    isFocusVisible: isFocusVisibleState
  };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react4.useEffect)(() => {
    let handler = (modality, e) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e))
        return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
var $9ab94262bd0047c7$exports = {};
$parcel$export4($9ab94262bd0047c7$exports, "useFocusWithin", () => $9ab94262bd0047c7$export$420e68273165f4ec);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react4.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react4.useCallback)((e) => {
    if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin)
        onBlurWithin(e);
      if (onFocusWithinChange)
        onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus = (0, import_react4.useCallback)((e) => {
    if (!state.current.isFocusWithin) {
      if (onFocusWithin)
        onFocusWithin(e);
      if (onFocusWithinChange)
        onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled)
    return {
      focusWithinProps: {
        onFocus: null,
        onBlur: null
      }
    };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
var $6179b936705e76d3$exports = {};
$parcel$export4($6179b936705e76d3$exports, "useHover", () => $6179b936705e76d3$export$ae780daf29e6d456);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
  if (e.pointerType === "touch")
    $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else
    document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else
      document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react4.useState)(false);
  let state = (0, import_react4.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react4.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps: hoverProps1, triggerHoverEnd: triggerHoverEnd1 } = (0, import_react4.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart)
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered)
        return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd)
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(false);
      setHovered(false);
    };
    let hoverProps = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps.onPointerEnter = (e) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse")
          return;
        triggerHoverStart(e, e.pointerType);
      };
      hoverProps.onPointerLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target))
          triggerHoverEnd(e, e.pointerType);
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps.onMouseEnter = (e) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps.onMouseLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target))
          triggerHoverEnd(e, "mouse");
      };
    }
    return {
      hoverProps,
      triggerHoverEnd
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state
  ]);
  (0, import_react4.useEffect)(() => {
    if (isDisabled)
      triggerHoverEnd1({
        currentTarget: state.target
      }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps: hoverProps1,
    isHovered
  };
}
var $e0b6e0b68ec7f50f$exports = {};
$parcel$export4($e0b6e0b68ec7f50f$exports, "useInteractOutside", () => $e0b6e0b68ec7f50f$export$872b660ac5a1ff98);
function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
  let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
  let stateRef = (0, import_react4.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
    onInteractOutside,
    onInteractOutsideStart
  });
  let state = stateRef.current;
  state.onInteractOutside = onInteractOutside;
  state.onInteractOutsideStart = onInteractOutsideStart;
  (0, import_react4.useEffect)(() => {
    if (isDisabled)
      return;
    let onPointerDown = (e) => {
      if ($e0b6e0b68ec7f50f$var$isValidEvent(e, ref) && state.onInteractOutside) {
        if (state.onInteractOutsideStart)
          state.onInteractOutsideStart(e);
        state.isPointerDown = true;
      }
    };
    if (typeof PointerEvent !== "undefined") {
      let onPointerUp = (e) => {
        if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e);
        }
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      document.addEventListener("pointerup", onPointerUp, true);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown, true);
        document.removeEventListener("pointerup", onPointerUp, true);
      };
    } else {
      let onMouseUp = (e) => {
        if (state.ignoreEmulatedMouseEvents)
          state.ignoreEmulatedMouseEvents = false;
        else if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e);
        }
      };
      let onTouchEnd = (e) => {
        state.ignoreEmulatedMouseEvents = true;
        if (state.onInteractOutside && state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e);
        }
      };
      document.addEventListener("mousedown", onPointerDown, true);
      document.addEventListener("mouseup", onMouseUp, true);
      document.addEventListener("touchstart", onPointerDown, true);
      document.addEventListener("touchend", onTouchEnd, true);
      return () => {
        document.removeEventListener("mousedown", onPointerDown, true);
        document.removeEventListener("mouseup", onMouseUp, true);
        document.removeEventListener("touchstart", onPointerDown, true);
        document.removeEventListener("touchend", onTouchEnd, true);
      };
    }
  }, [
    ref,
    state,
    isDisabled
  ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
  if (event.button > 0)
    return false;
  if (event.target) {
    const ownerDocument = event.target.ownerDocument;
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target))
      return false;
  }
  return ref.current && !ref.current.contains(event.target);
}
var $46d819fcbaf35654$exports = {};
$parcel$export4($46d819fcbaf35654$exports, "useKeyboard", () => $46d819fcbaf35654$export$8f71654801c2f7cd);
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
  if (!handler)
    return;
  let shouldStopPropagation = true;
  return (e) => {
    let event = {
      ...e,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        shouldStopPropagation = false;
      }
    };
    handler(event);
    if (shouldStopPropagation)
      e.stopPropagation();
  };
}
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyDown),
      onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyUp)
    }
  };
}
var $e8a7022cf87cba2a$exports = {};
$parcel$export4($e8a7022cf87cba2a$exports, "useMove", () => $e8a7022cf87cba2a$export$36da96379f79f245);
function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
  let { onMoveStart, onMove, onMoveEnd } = props;
  let state = (0, import_react4.useRef)({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let moveProps1 = (0, import_react4.useMemo)(() => {
    let moveProps = {};
    let start = () => {
      $14c0b72509d70225$export$16a4697467175487();
      state.current.didMove = false;
    };
    let move = (originalEvent, pointerType, deltaX, deltaY) => {
      if (deltaX === 0 && deltaY === 0)
        return;
      if (!state.current.didMove) {
        state.current.didMove = true;
        onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
          type: "movestart",
          pointerType,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      }
      onMove({
        type: "move",
        pointerType,
        deltaX,
        deltaY,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
    };
    let end = (originalEvent, pointerType) => {
      $14c0b72509d70225$export$b0d6fa1ab32e3295();
      if (state.current.didMove)
        onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
          type: "moveend",
          pointerType,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
    };
    if (typeof PointerEvent === "undefined") {
      let onMouseMove = (e) => {
        if (e.button === 0) {
          move(e, "mouse", e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
        }
      };
      let onMouseUp = (e) => {
        if (e.button === 0) {
          end(e, "mouse");
          removeGlobalListener(window, "mousemove", onMouseMove, false);
          removeGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      moveProps.onMouseDown = (e) => {
        if (e.button === 0) {
          start();
          e.stopPropagation();
          e.preventDefault();
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          addGlobalListener(window, "mousemove", onMouseMove, false);
          addGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      let onTouchMove = (e) => {
        let touch = [
          ...e.changedTouches
        ].findIndex(
          ({ identifier }) => identifier === state.current.id
        );
        if (touch >= 0) {
          let { pageX, pageY } = e.changedTouches[touch];
          move(e, "touch", pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX,
            pageY
          };
        }
      };
      let onTouchEnd = (e) => {
        let touch = [
          ...e.changedTouches
        ].findIndex(
          ({ identifier }) => identifier === state.current.id
        );
        if (touch >= 0) {
          end(e, "touch");
          state.current.id = null;
          removeGlobalListener(window, "touchmove", onTouchMove);
          removeGlobalListener(window, "touchend", onTouchEnd);
          removeGlobalListener(window, "touchcancel", onTouchEnd);
        }
      };
      moveProps.onTouchStart = (e) => {
        if (e.changedTouches.length === 0 || state.current.id != null)
          return;
        let { pageX, pageY, identifier } = e.changedTouches[0];
        start();
        e.stopPropagation();
        e.preventDefault();
        state.current.lastPosition = {
          pageX,
          pageY
        };
        state.current.id = identifier;
        addGlobalListener(window, "touchmove", onTouchMove, false);
        addGlobalListener(window, "touchend", onTouchEnd, false);
        addGlobalListener(window, "touchcancel", onTouchEnd, false);
      };
    } else {
      let onPointerMove = (e) => {
        if (e.pointerId === state.current.id) {
          let pointerType = e.pointerType || "mouse";
          move(e, pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.current.id) {
          let pointerType = e.pointerType || "mouse";
          end(e, pointerType);
          state.current.id = null;
          removeGlobalListener(window, "pointermove", onPointerMove, false);
          removeGlobalListener(window, "pointerup", onPointerUp, false);
          removeGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
      moveProps.onPointerDown = (e) => {
        if (e.button === 0 && state.current.id == null) {
          start();
          e.stopPropagation();
          e.preventDefault();
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          state.current.id = e.pointerId;
          addGlobalListener(window, "pointermove", onPointerMove, false);
          addGlobalListener(window, "pointerup", onPointerUp, false);
          addGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
    }
    let triggerKeyboardMove = (e, deltaX, deltaY) => {
      start();
      move(e, "keyboard", deltaX, deltaY);
      end(e, "keyboard");
    };
    moveProps.onKeyDown = (e) => {
      switch (e.key) {
        case "Left":
        case "ArrowLeft":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, -1, 0);
          break;
        case "Right":
        case "ArrowRight":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 1, 0);
          break;
        case "Up":
        case "ArrowUp":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 0, -1);
          break;
        case "Down":
        case "ArrowDown":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 0, 1);
          break;
      }
    };
    return moveProps;
  }, [
    state,
    onMoveStart,
    onMove,
    onMoveEnd,
    addGlobalListener,
    removeGlobalListener
  ]);
  return {
    moveProps: moveProps1
  };
}
var $7d0a636d7a4dcefd$exports = {};
$parcel$export4($7d0a636d7a4dcefd$exports, "useScrollWheel", () => $7d0a636d7a4dcefd$export$2123ff2b87c81ca);
function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
  let { onScroll, isDisabled } = props;
  let onScrollHandler = (0, import_react4.useCallback)((e) => {
    if (e.ctrlKey)
      return;
    e.preventDefault();
    e.stopPropagation();
    if (onScroll)
      onScroll({
        deltaX: e.deltaX,
        deltaY: e.deltaY
      });
  }, [
    onScroll
  ]);
  $e9faafb641e167db$export$90fc3a17d93f704c(ref, "wheel", isDisabled ? null : onScrollHandler);
}
var $8a26561d2877236e$exports = {};
$parcel$export4($8a26561d2877236e$exports, "useLongPress", () => $8a26561d2877236e$export$c24ed0104d07eab9);
var $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
  let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
  const timeRef = (0, import_react4.useRef)(null);
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled,
    onPressStart(e1) {
      if (e1.pointerType === "mouse" || e1.pointerType === "touch") {
        if (onLongPressStart)
          onLongPressStart({
            ...e1,
            type: "longpressstart"
          });
        timeRef.current = setTimeout(() => {
          e1.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          }));
          if (onLongPress)
            onLongPress({
              ...e1,
              type: "longpress"
            });
          timeRef.current = null;
        }, threshold);
        if (e1.pointerType === "touch") {
          let onContextMenu = (e) => {
            e.preventDefault();
          };
          addGlobalListener(e1.target, "contextmenu", onContextMenu, {
            once: true
          });
          addGlobalListener(window, "pointerup", () => {
            setTimeout(() => {
              removeGlobalListener(e1.target, "contextmenu", onContextMenu);
            }, 30);
          }, {
            once: true
          });
        }
      }
    },
    onPressEnd(e) {
      if (timeRef.current)
        clearTimeout(timeRef.current);
      if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch"))
        onLongPressEnd({
          ...e,
          type: "longpressend"
        });
    }
  });
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : null);
  return {
    longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, descriptionProps)
  };
}

// ../../node_modules/.pnpm/@react-aria+focus@3.6.1_react@18.2.0/node_modules/@react-aria/focus/dist/module.js
function $parcel$export5(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $9bf71ea28793e738$exports = {};
$parcel$export5($9bf71ea28793e738$exports, "FocusScope", () => $9bf71ea28793e738$export$20e40289641fbbb6);
$parcel$export5($9bf71ea28793e738$exports, "useFocusManager", () => $9bf71ea28793e738$export$10c5169755ce7bd7);
$parcel$export5($9bf71ea28793e738$exports, "getFocusableTreeWalker", () => $9bf71ea28793e738$export$2d6ec8fc375ceafa);
$parcel$export5($9bf71ea28793e738$exports, "createFocusManager", () => $9bf71ea28793e738$export$c5251b9e124bf29);
var $6a99195332edec8b$exports = {};
$parcel$export5($6a99195332edec8b$exports, "focusSafely", () => $6a99195332edec8b$export$80f3e147d781571c);
function $6a99195332edec8b$export$80f3e147d781571c(element) {
  if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "virtual") {
    let lastFocusedElement = document.activeElement;
    $bbed8b41f857bcc0$export$24490316f764c430(() => {
      if (document.activeElement === lastFocusedElement && document.contains(element))
        $7215afc6de606d6b$export$de79e2c695e052f3(element);
    });
  } else
    $7215afc6de606d6b$export$de79e2c695e052f3(element);
}
function $645f2e67b85a24c9$var$isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement))
    return false;
  let { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const { getComputedStyle } = element.ownerDocument.defaultView;
    let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
  return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}
var $9bf71ea28793e738$var$FocusContext = /* @__PURE__ */ import_react5.default.createContext(null);
var $9bf71ea28793e738$var$activeScope = null;
var $9bf71ea28793e738$var$scopes = /* @__PURE__ */ new Map();
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
  let { children, contain, restoreFocus, autoFocus } = props;
  let startRef = (0, import_react5.useRef)();
  let endRef = (0, import_react5.useRef)();
  let scopeRef = (0, import_react5.useRef)([]);
  let ctx = (0, import_react5.useContext)($9bf71ea28793e738$var$FocusContext);
  let parentScope = ctx === null || ctx === void 0 ? void 0 : ctx.scopeRef;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let node = startRef.current.nextSibling;
    let nodes = [];
    while (node && node !== endRef.current) {
      nodes.push(node);
      node = node.nextSibling;
    }
    scopeRef.current = nodes;
  }, [
    children,
    parentScope
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    $9bf71ea28793e738$var$scopes.set(scopeRef, parentScope);
    return () => {
      if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$var$scopes.has(parentScope)))
        $9bf71ea28793e738$var$activeScope = parentScope;
      $9bf71ea28793e738$var$scopes.delete(scopeRef);
    };
  }, [
    scopeRef,
    parentScope
  ]);
  $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
  $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
  $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
  let focusManager = $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef);
  return /* @__PURE__ */ import_react5.default.createElement($9bf71ea28793e738$var$FocusContext.Provider, {
    value: {
      scopeRef,
      focusManager
    }
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    "data-focus-scope-start": true,
    hidden: true,
    ref: startRef
  }), children, /* @__PURE__ */ import_react5.default.createElement("span", {
    "data-focus-scope-end": true,
    hidden: true,
    ref: endRef
  }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
  var ref;
  return (ref = (0, import_react5.useContext)($9bf71ea28793e738$var$FocusContext)) === null || ref === void 0 ? void 0 : ref.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
  return {
    focusNext(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[0].previousElementSibling;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let nextNode = walker.nextNode();
      if (!nextNode && wrap) {
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
      }
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusPrevious(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[scope.length - 1].nextElementSibling;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let previousNode = walker.previousNode();
      if (!previousNode && wrap) {
        walker.currentNode = sentinel;
        previousNode = walker.previousNode();
      }
      if (previousNode)
        $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },
    focusFirst(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = scope[0].previousElementSibling;
      let nextNode = walker.nextNode();
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusLast(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = scope[scope.length - 1].nextElementSibling;
      let previousNode = walker.previousNode();
      if (previousNode)
        $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    }
  };
}
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
  return scope[0].parentElement;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
  let focusedNode = (0, import_react5.useRef)();
  let raf = (0, import_react5.useRef)(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let scope1 = scopeRef.current;
    if (!contain)
      return;
    let onKeyDown = (e) => {
      if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || scopeRef !== $9bf71ea28793e738$var$activeScope)
        return;
      let focusedElement = document.activeElement;
      let scope = scopeRef.current;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope))
        return;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: true
      }, scope);
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!nextElement) {
        walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
        nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      }
      e.preventDefault();
      if (nextElement)
        $9bf71ea28793e738$var$focusElement(nextElement, true);
    };
    let onFocus = (e) => {
      if (!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) {
        $9bf71ea28793e738$var$activeScope = scopeRef;
        focusedNode.current = e.target;
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
        if (focusedNode.current)
          focusedNode.current.focus();
        else if ($9bf71ea28793e738$var$activeScope)
          $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope)
        focusedNode.current = e.target;
    };
    let onBlur = (e) => {
      raf.current = requestAnimationFrame(() => {
        if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
          $9bf71ea28793e738$var$activeScope = scopeRef;
          focusedNode.current = e.target;
          focusedNode.current.focus();
        }
      });
    };
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("focusin", onFocus, false);
    scope1.forEach(
      (element) => element.addEventListener("focusin", onFocus, false)
    );
    scope1.forEach(
      (element) => element.addEventListener("focusout", onBlur, false)
    );
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
      document.removeEventListener("focusin", onFocus, false);
      scope1.forEach(
        (element) => element.removeEventListener("focusin", onFocus, false)
      );
      scope1.forEach(
        (element) => element.removeEventListener("focusout", onBlur, false)
      );
    };
  }, [
    scopeRef,
    contain
  ]);
  (0, import_react5.useEffect)(() => {
    return () => cancelAnimationFrame(raf.current);
  }, [
    raf
  ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
  for (let scope of $9bf71ea28793e738$var$scopes.keys()) {
    if ($9bf71ea28793e738$var$isElementInScope(element, scope.current))
      return true;
  }
  return false;
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  return scope.some(
    (node) => node.contains(element)
  );
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope) {
  for (let s of $9bf71ea28793e738$var$scopes.keys()) {
    if ((s === scope || $9bf71ea28793e738$var$isAncestorScope(scope, s)) && $9bf71ea28793e738$var$isElementInScope(element, s.current))
      return true;
  }
  return false;
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
  let parent = $9bf71ea28793e738$var$scopes.get(scope);
  if (!parent)
    return false;
  if (parent === ancestor)
    return true;
  return $9bf71ea28793e738$var$isAncestorScope(ancestor, parent);
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
  if (element != null && !scroll)
    try {
      $6a99195332edec8b$export$80f3e147d781571c(element);
    } catch (err) {
    }
  else if (element != null)
    try {
      element.focus();
    } catch (err1) {
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope) {
  let sentinel = scope[0].previousElementSibling;
  let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
    tabbable: true
  }, scope);
  walker.currentNode = sentinel;
  $9bf71ea28793e738$var$focusElement(walker.nextNode());
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
  const autoFocusRef = import_react5.default.useRef(autoFocus);
  (0, import_react5.useEffect)(() => {
    if (autoFocusRef.current) {
      $9bf71ea28793e738$var$activeScope = scopeRef;
      if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current))
        $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
    }
    autoFocusRef.current = false;
  }, []);
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
  const nodeToRestoreRef = (0, import_react5.useRef)(typeof document !== "undefined" ? document.activeElement : null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let nodeToRestore = nodeToRestoreRef.current;
    if (!restoreFocus)
      return;
    let onKeyDown = (e) => {
      if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey)
        return;
      let focusedElement = document.activeElement;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current))
        return;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
        tabbable: true
      });
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body)
        nodeToRestore = null;
      if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
        walker.currentNode = nodeToRestore;
        do
          nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
        while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
        e.preventDefault();
        e.stopPropagation();
        if (nextElement)
          $9bf71ea28793e738$var$focusElement(nextElement, true);
        else if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore))
          focusedElement.blur();
        else
          $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
      }
    };
    if (!contain)
      document.addEventListener("keydown", onKeyDown, true);
    return () => {
      if (!contain)
        document.removeEventListener("keydown", onKeyDown, true);
      if (restoreFocus && nodeToRestore && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current))
        requestAnimationFrame(() => {
          if (document.body.contains(nodeToRestore))
            $9bf71ea28793e738$var$focusElement(nodeToRestore);
        });
    };
  }, [
    scopeRef,
    restoreFocus,
    contain
  ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
  let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var ref;
      if (opts === null || opts === void 0 ? void 0 : (ref = opts.from) === null || ref === void 0 ? void 0 : ref.contains(node))
        return NodeFilter.FILTER_REJECT;
      if (node.matches(selector) && $645f2e67b85a24c9$export$e989c0fffaa6b27a(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node)))
        return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts === null || opts === void 0 ? void 0 : opts.from)
    walker.currentNode = opts.from;
  return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
  return {
    focusNext(opts = {}) {
      let root = ref.current;
      if (!root)
        return;
      let { from, tabbable = defaultOptions.tabbable, wrap = defaultOptions.wrap, accept = defaultOptions.accept } = opts;
      let node = from || document.activeElement;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable,
        accept
      });
      if (root.contains(node))
        walker.currentNode = node;
      let nextNode = walker.nextNode();
      if (!nextNode && wrap) {
        walker.currentNode = root;
        nextNode = walker.nextNode();
      }
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusPrevious(opts = defaultOptions) {
      let root = ref.current;
      if (!root)
        return;
      let { from, tabbable = defaultOptions.tabbable, wrap = defaultOptions.wrap, accept = defaultOptions.accept } = opts;
      let node = from || document.activeElement;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable,
        accept
      });
      if (root.contains(node))
        walker.currentNode = node;
      else {
        let next = $9bf71ea28793e738$var$last(walker);
        if (next)
          $9bf71ea28793e738$var$focusElement(next, true);
        return next;
      }
      let previousNode = walker.previousNode();
      if (!previousNode && wrap) {
        walker.currentNode = root;
        previousNode = $9bf71ea28793e738$var$last(walker);
      }
      if (previousNode)
        $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },
    focusFirst(opts = defaultOptions) {
      let root = ref.current;
      if (!root)
        return;
      let { tabbable = defaultOptions.tabbable, accept = defaultOptions.accept } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable,
        accept
      });
      let nextNode = walker.nextNode();
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusLast(opts = defaultOptions) {
      let root = ref.current;
      if (!root)
        return;
      let { tabbable = defaultOptions.tabbable, accept = defaultOptions.accept } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable,
        accept
      });
      let next = $9bf71ea28793e738$var$last(walker);
      if (next)
        $9bf71ea28793e738$var$focusElement(next, true);
      return next;
    }
  };
}
function $9bf71ea28793e738$var$last(walker) {
  let next;
  let last;
  do {
    last = walker.lastChild();
    if (last)
      next = last;
  } while (last);
  return next;
}
var $907718708eab68af$exports = {};
$parcel$export5($907718708eab68af$exports, "FocusRing", () => $907718708eab68af$export$1a38b4ad7f578e1d);
var $f7dceffc5ad7768b$exports = {};
$parcel$export5($f7dceffc5ad7768b$exports, "useFocusRing", () => $f7dceffc5ad7768b$export$4e328f61c538687f);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react5.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  });
  let [isFocused1, setFocused] = (0, import_react5.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react5.useState)(
    () => state.current.isFocused && state.current.isFocusVisible
  );
  let updateState = (0, import_react5.useCallback)(
    () => setFocusVisible(state.current.isFocused && state.current.isFocusVisible),
    []
  );
  let onFocusChange = (0, import_react5.useCallback)((isFocused) => {
    state.current.isFocused = isFocused;
    setFocused(isFocused);
    updateState();
  }, [
    updateState
  ]);
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused: isFocused1,
    isFocusVisible: state.current.isFocused && isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
  let { children, focusClass, focusRingClass } = props;
  let { isFocused, isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f(props);
  let child = import_react5.default.Children.only(children);
  return /* @__PURE__ */ import_react5.default.cloneElement(child, $3ef42575df84b30b$export$9d1611c77c2fe928(child.props, {
    ...focusProps,
    className: clsx_m_default({
      [focusClass || ""]: isFocused,
      [focusRingClass || ""]: isFocusVisible
    })
  }));
}
var $e6afbd83fe6ebbd2$exports = {};
$parcel$export5($e6afbd83fe6ebbd2$exports, "FocusableProvider", () => $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5);
$parcel$export5($e6afbd83fe6ebbd2$exports, "useFocusable", () => $e6afbd83fe6ebbd2$export$4c014de7c8940b4c);
var $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ import_react5.default.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = (0, import_react5.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let context = {
    ...otherProps,
    ref
  };
  return /* @__PURE__ */ import_react5.default.createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /* @__PURE__ */ import_react5.default.forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
  let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = (0, import_react5.useRef)(props.autoFocus);
  (0, import_react5.useEffect)(() => {
    if (autoFocusRef.current && domRef.current)
      $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  return {
    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
      ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }, interactionProps)
  };
}

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var import_react7 = __toESM(require("react"));

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/lib/esm/iconContext.js
var import_react6 = __toESM(require("react"));
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react6.default.createContext && import_react6.default.createContext(DefaultContext);

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
    return import_react7.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react7.default.createElement(IconBase, __assign({
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
    return import_react7.default.createElement("svg", __assign({
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
    }), title && import_react7.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react7.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/ai/index.esm.js
function AiOutlineFile(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z" } }] })(props);
}
function AiOutlineMinusSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attr": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] })(props);
}
function AiOutlinePlusSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attr": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] })(props);
}

// ../../node_modules/.pnpm/react-icons@4.4.0_react@18.2.0/node_modules/react-icons/bs/index.esm.js
function BsFolder(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" } }] })(props);
}

// src/TreeContext.ts
var import_react8 = require("react");
var TreeContext = (0, import_react8.createContext)(0);
var TreeContextProvider = TreeContext.Provider;
var useTree = () => (0, import_react8.useContext)(TreeContext);

// src/TreeView.tsx
var import_framer_motion = require("framer-motion");

// src/TreeView.module.css
var _default = {};

// src/TreeView.tsx
var TreeView = import_react9.default.memo(
  ({ children, title }) => {
    return /* @__PURE__ */ import_react9.default.createElement($9bf71ea28793e738$export$20e40289641fbbb6, null, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: _default.treeviewtemp
    }, title && /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "text-base font-bold mb-4"
    }, title), children));
  }
);
TreeView.displayName = "SKA UI - TreeView";
var Folder = import_react9.default.memo(
  ({ children, name, open, defaultOpen = false }) => {
    const depth = useTree();
    const [isOpen, setIsOpen] = import_react9.default.useState(defaultOpen);
    const ref = import_react9.default.useRef(null);
    const { focusProps, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
    const onKeyDown = (e) => {
      switch (e.key) {
        case "Enter":
          setIsOpen(!isOpen);
          break;
      }
    };
    return /* @__PURE__ */ import_react9.default.createElement(TreeContextProvider, {
      value: 1 + depth
    }, /* @__PURE__ */ import_react9.default.createElement("li", {
      ...focusProps,
      tabIndex: 0,
      onKeyDown,
      className: clsx_m_default("treeview-folder", {
        "treeview-folder-open": isOpen || open,
        "treeview-folder-focused": isFocusVisible
      })
    }, /* @__PURE__ */ import_react9.default.createElement("a", {
      className: clsx_m_default("treeview-folder-label"),
      title: name,
      onClick: () => setIsOpen((open2) => !open2)
    }, Array.from(Array(depth)).map((_e, i) => {
      return /* @__PURE__ */ import_react9.default.createElement("span", {
        key: i,
        className: "treeview-indent treeview-indent-folder"
      });
    }), /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "treeview-folder-label"
    }, /* @__PURE__ */ import_react9.default.createElement("span", {
      className: clsx_m_default("treeview-folder-label-status treeview-icons", {
        "treeview-folder-label-status-disabled": open
      })
    }, open || isOpen ? /* @__PURE__ */ import_react9.default.createElement(AiOutlineMinusSquare, {
      className: "align-middle"
    }) : /* @__PURE__ */ import_react9.default.createElement(AiOutlinePlusSquare, null)), /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "treeview-folder-label-icon"
    }, /* @__PURE__ */ import_react9.default.createElement(BsFolder, {
      className: "treeview-icons"
    })), /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "treeview-folder-label-name"
    }, name))), /* @__PURE__ */ import_react9.default.createElement(import_framer_motion.AnimatePresence, null, open || isOpen && /* @__PURE__ */ import_react9.default.createElement(import_framer_motion.motion.ul, {
      initial: { height: 0 },
      animate: { height: "auto" },
      exit: { height: 0 },
      transition: { duration: 0.1, ease: "linear" },
      ref,
      className: "treeview-folder-children overflow-hidden"
    }, children))));
  }
);
Folder.displayName = "SKA UI - TreeView/Folder";
var File = import_react9.default.memo(
  ({ name, active, isSelected, icon }) => {
    const depth = useTree();
    const ref = import_react9.default.useRef(null);
    const [selected] = import_react9.default.useState(isSelected);
    const { focusProps, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
    let iconClone;
    if (icon) {
      iconClone = import_react9.default.cloneElement(icon, {
        className: "treeview-icons"
      });
    }
    return /* @__PURE__ */ import_react9.default.createElement("li", {
      ...focusProps,
      ref,
      tabIndex: 0,
      className: clsx_m_default("treeview-file", {
        "treeview-file-active": active,
        "treeview-file-focused": isFocusVisible,
        "treeview-file-selected": selected
      })
    }, /* @__PURE__ */ import_react9.default.createElement("a", {
      title: name
    }, Array.from(Array(depth)).map((_e, i) => {
      return /* @__PURE__ */ import_react9.default.createElement("span", {
        className: "treeview-indent treeview-indent-file",
        key: i
      });
    })), /* @__PURE__ */ import_react9.default.createElement("div", {
      className: clsx_m_default("treeview-file-label")
    }, /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "treeview-file-label-icon "
    }, icon ? iconClone : /* @__PURE__ */ import_react9.default.createElement(AiOutlineFile, {
      className: "treeview-icons"
    })), /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "treeview-file-label-name"
    }, name)));
  }
);
File.displayName = "SKA UI - TreeView/File";
var TreeView_default = TreeView;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  File,
  Folder,
  TreeView,
  Treeview
});
