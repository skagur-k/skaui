'use strict';

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
var skaui_button_exports = {};
__export(skaui_button_exports, {
  Button: () => Button2,
  ButtonGroup: () => ButtonGroup
});
module.exports = __toCommonJS(skaui_button_exports);

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

// ../../node_modules/.pnpm/@react-aria+button@3.5.1_react@18.2.0/node_modules/@react-aria/button/dist/module.js
function $parcel$export6(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $701a24aa0da5b062$exports = {};
$parcel$export6($701a24aa0da5b062$exports, "useButton", () => $701a24aa0da5b062$export$ea18c227d4417cc3);
function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    preventFocusOnPress,
    allowFocusWhenDisabled,
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = "button"
  } = props;
  let additionalProps;
  if (elementType === "button")
    additionalProps = {
      type,
      disabled: isDisabled
    };
  else
    additionalProps = {
      role: "button",
      tabIndex: isDisabled ? void 0 : 0,
      href: elementType === "a" && isDisabled ? void 0 : href,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    ref
  });
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  if (allowFocusWhenDisabled)
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
  let buttonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, pressProps, $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
    labelable: true
  }));
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      onClick: (e) => {
        if (deprecatedOnClick) {
          deprecatedOnClick(e);
          console.warn("onClick is deprecated, please use onPress");
        }
      }
    })
  };
}
var $55f54f7887471b58$exports = {};
$parcel$export6($55f54f7887471b58$exports, "useToggleButton", () => $55f54f7887471b58$export$51e84d46ca0bc451);
function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
  const { isSelected } = state;
  const { isPressed, buttonProps } = $701a24aa0da5b062$export$ea18c227d4417cc3({
    ...props,
    onPress: $ff5963eb1fccf552$export$e08e3b67e392101e(state.toggle, props.onPress)
  }, ref);
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(buttonProps, {
      "aria-pressed": isSelected
    })
  };
}

// ../skaui-utils/src/getValidChildren.ts
var import_react6 = __toESM(require("react"));
function getValidChildren(children) {
  return import_react6.default.Children.toArray(children).filter(
    (child) => import_react6.default.isValidElement(child)
  );
}

// ../skaui-utils/src/mergeRefs.ts
function mergeRefs(...refs) {
  return (value) => {
    for (let ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    }
  };
}

// src/button.tsx
var import_react7 = __toESM(require("react"));

// src/styles.ts
var useButtonClass = ({
  variant,
  type,
  size,
  disabled,
  loading,
  rounded
}) => {
  const variants = {
    solid: "btn-solid",
    ghost: "btn-ghost"
  };
  const types = {
    success: "btn-success",
    secondary: "btn-secondary",
    warning: "btn-warning",
    error: "btn-error",
    alert: "btn-alert"
  };
  const sizes = {
    block: "btn-block",
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg"
  };
  const classes = clsx_m_default([
    "btn",
    variant && variants[variant],
    type && types[type],
    size && sizes[size],
    disabled && "btn-disabled",
    loading && "btn-loading",
    rounded && "btn-rounded"
  ]);
  return classes;
};

// src/button.tsx
var Button = (0, import_react7.forwardRef)((props, extRef) => {
  const {
    size,
    rounded,
    variant = "solid",
    type,
    block,
    color,
    focusafterclick = true,
    icon,
    notification,
    className,
    children,
    disabled,
    loading,
    onClick,
    ...rest
  } = props;
  const buttonRef = (0, import_react7.useRef)(null);
  const [isFocused, setFocused] = (0, import_react7.useState)(false);
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: disabled || loading
  });
  const { buttonProps, isPressed } = $701a24aa0da5b062$export$ea18c227d4417cc3(
    {
      type: "submit",
      isDisabled: disabled || loading,
      onFocusChange: setFocused,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick == null ? void 0 : onClick(e);
          setFocused(true);
        }
        return e;
      },
      onPressEnd: (e) => {
        if (e.pointerType === "touch") ;
        if (e.pointerType === "mouse") {
          focusafterclick ? "" : e.target.blur();
        }
        return e;
      },
      onPressStart: (e) => {
        if (e.pointerType === "mouse") {
          setFocused(true);
        }
        return e;
      },
      onPress: (e) => {
        onClick == null ? void 0 : onClick(e);
      }
    },
    buttonRef
  );
  const classes = useButtonClass({
    variant,
    size,
    type,
    disabled,
    loading,
    rounded
  });
  return /* @__PURE__ */ import_react7.default.createElement("button", {
    ...buttonProps,
    ...hoverProps,
    "data-focus": isFocused ? "" : null,
    "data-active": isPressed ? "" : null,
    "data-hover": isHovered ? "" : null,
    "data-loading": loading ? "" : null,
    "data-color": color,
    className: clsx_m_default(
      [classes, !!icon ? !!children ? "" : "icononly" : ""],
      className
    ),
    ...rest,
    ref: mergeRefs(buttonRef, extRef)
  }, loading && /* @__PURE__ */ import_react7.default.createElement("span", null, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `btn-spinner ${loading ? "opacity-100" : "opacity-0"}`
  })), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `btn-content ${loading ? "opacity-0" : "opacity-100"}`
  }, icon && /* @__PURE__ */ import_react7.default.createElement("span", {
    className: clsx_m_default("btn-icon")
  }, icon), children), notification && /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "btn-notification"
  }));
});
Button.displayName = "Button";
var ButtonGroup = (0, import_react7.forwardRef)(
  (props, ref) => {
    const {
      size,
      color,
      variant,
      attached,
      rounded,
      disabled,
      children,
      className,
      ...rest
    } = props;
    const validChildren = getValidChildren(children);
    const copies = validChildren.map((child) => {
      return import_react7.default.cloneElement(child, {
        size: size || child.props.size,
        color: child.props.color || color,
        variant: child.props.variant || variant,
        disabled: child.props.disabled || disabled,
        rounded: child.props.rounded || rounded,
        focusafterclick: true
      });
    });
    return /* @__PURE__ */ import_react7.default.createElement("div", {
      ref,
      role: "group",
      className: clsx_m_default(
        "btn-group",
        attached && "btn-group-attached",
        rounded && "btn-group-rounded",
        className
      ),
      ...rest
    }, copies);
  }
);
ButtonGroup.displayName = "ButtonGroup";

// src/index.ts
var Button2 = Button;
Button2.Group = ButtonGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3NzckAzLjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3Nzci9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3Nzci9zcmMvU1NSUHJvdmlkZXIudHN4IiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nsc3hAMS4yLjEvbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXN0YXRlbHkrdXRpbHNAMy41LjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3Qtc3RhdGVseS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1zdGF0ZWx5L3V0aWxzL3NyYy91c2VDb250cm9sbGVkU3RhdGUudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXN0YXRlbHkrdXRpbHNAMy41LjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3Qtc3RhdGVseS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1zdGF0ZWx5L3V0aWxzL3NyYy9udW1iZXIudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvdXNlTGF5b3V0RWZmZWN0LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZUlkLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL2NoYWluLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL21lcmdlUHJvcHMudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvbWVyZ2VSZWZzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL2ZpbHRlckRPTVByb3BzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL2ZvY3VzV2l0aG91dFNjcm9sbGluZy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9nZXRPZmZzZXQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvcnVuQWZ0ZXJUcmFuc2l0aW9uLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZURyYWcxRC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VHbG9iYWxMaXN0ZW5lcnMudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvdXNlTGFiZWxzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZU9iamVjdFJlZi50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VVcGRhdGVFZmZlY3QudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvdXNlUmVzaXplT2JzZXJ2ZXIudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvdXNlU3luY1JlZi50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9nZXRTY3JvbGxQYXJlbnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvdXNlVmlld3BvcnRTaXplLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZURlc2NyaXB0aW9uLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3BsYXRmb3JtLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZUV2ZW50LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZVZhbHVlRWZmZWN0LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3Njcm9sbEludG9WaWV3LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvdGV4dFNlbGVjdGlvbi50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3V0aWxzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvY29udGV4dC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZVByZXNzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvUHJlc3NhYmxlLnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL1ByZXNzUmVzcG9uZGVyLnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZUZvY3VzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvdXNlRm9jdXNWaXNpYmxlLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvdXNlRm9jdXNXaXRoaW4udHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy91c2VIb3Zlci50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZUludGVyYWN0T3V0c2lkZS50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL2NyZWF0ZUV2ZW50SGFuZGxlci50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZUtleWJvYXJkLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvdXNlTW92ZS50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZVNjcm9sbFdoZWVsLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvdXNlTG9uZ1ByZXNzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ZvY3VzQDMuNi4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvZm9jdXMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9mb2N1cy9zcmMvZm9jdXNTYWZlbHkudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErZm9jdXNAMy42LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9mb2N1cy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ZvY3VzL3NyYy9pc0VsZW1lbnRWaXNpYmxlLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ZvY3VzQDMuNi4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvZm9jdXMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9mb2N1cy9zcmMvRm9jdXNTY29wZS50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErZm9jdXNAMy42LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9mb2N1cy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ZvY3VzL3NyYy91c2VGb2N1c1JpbmcudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErZm9jdXNAMy42LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9mb2N1cy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ZvY3VzL3NyYy9Gb2N1c1JpbmcudHN4IiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ZvY3VzQDMuNi4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvZm9jdXMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9mb2N1cy9zcmMvdXNlRm9jdXNhYmxlLnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStidXR0b25AMy41LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9idXR0b24vZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9idXR0b24vc3JjL3VzZUJ1dHRvbi50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStidXR0b25AMy41LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9idXR0b24vZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9idXR0b24vc3JjL3VzZVRvZ2dsZUJ1dHRvbi50cyIsIi4uLy4uL3NrYXVpLXV0aWxzL3NyYy9nZXRWYWxpZENoaWxkcmVuLnRzIiwiLi4vLi4vc2thdWktdXRpbHMvc3JjL21lcmdlUmVmcy50cyIsIi4uL3NyYy9idXR0b24udHN4IiwiLi4vc3JjL3N0eWxlcy50cyIsIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJCdXR0b24iLCIkODl5RTIkcmVhY3QiLCIkODl5RTIkdXNlQ29udGV4dCIsIiQ4OXlFMiR1c2VNZW1vIiwiJDg5eUUyJHVzZVN0YXRlIiwiJDg5eUUyJHVzZUxheW91dEVmZmVjdCIsIiQ2aW11aCR1c2VTdGF0ZSIsIiQ2aW11aCR1c2VSZWYiLCIkNmltdWgkdXNlQ2FsbGJhY2siLCIkMTJ1R3AkcmVhY3QiLCIkMTJ1R3AkdXNlU3RhdGUiLCIkMTJ1R3AkdXNlUmVmIiwiJDEydUdwJHVzZUNhbGxiYWNrIiwiciIsIiQxMnVHcCR1c2VFZmZlY3QiLCIkYng3U0wkdXNlUmVmIiwiJGJ4N1NMJHVzZUNhbGxiYWNrIiwiJGJ4N1NMJHJlYWN0IiwiJGJ4N1NMJHVzZUNvbnRleHQiLCIkYng3U0wkdXNlU3RhdGUiLCIkYng3U0wkdXNlTWVtbyIsIiRieDdTTCR1c2VFZmZlY3QiLCIkNTA3ZmFiZTEwZTcxYzZmYiRleHBvcnQkYjliM2RmZGRhYjE3ZGIyNyIsIiQ2bmZGQyRyZWFjdCIsIiQ2bmZGQyR1c2VSZWYiLCIkNm5mRkMkdXNlQ29udGV4dCIsIiQ2bmZGQyR1c2VFZmZlY3QiLCIkNm5mRkMkdXNlU3RhdGUiLCIkNm5mRkMkdXNlQ2FsbGJhY2siLCJpbXBvcnRfcmVhY3QiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsZ0JBQUFBO0FBQUEsRUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDaUNBLElBQU0sdUNBQWtDO0VBQ3RDLFFBQVEsT0FBTyxLQUFLLE1BQU0sS0FBSyxPQUFNLElBQUssSUFBVyxDQUFBO0VBQ3JELFNBQVM7QUFDWDtBQUVBLElBQU0sbUNBQWEsNkJBQUFDLFFBQU0sY0FBK0Isb0NBQWM7U0FXdEQsMENBQVksT0FBc0M7QUFDaEUsTUFBSSxVQUFNLGFBQUFDLFlBQVcsZ0NBQVU7QUFDL0IsTUFBSSxZQUF5QixhQUFBQztJQUFPLE9BQVE7TUFHMUMs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QyxVQUFVO0FBQzNDLGFBQU8sY0FBQUEsUUFBTSxhQUFhLE9BQU87QUFBQSxRQUNoQyxNQUFNLFFBQVEsTUFBTSxNQUFNO0FBQUEsUUFDMUIsT0FBTyxNQUFNLE1BQU0sU0FBUztBQUFBLFFBQzVCLFNBQVMsTUFBTSxNQUFNLFdBQVc7QUFBQSxRQUNoQyxVQUFVLE1BQU0sTUFBTSxZQUFZO0FBQUEsUUFDbEMsU0FBUyxNQUFNLE1BQU0sV0FBVztBQUFBLFFBQ2hDLGlCQUFpQjtBQUFBLE1BQ2xCLENBQUM7QUFBQSxJQUNGLENBQUM7QUFFRCxXQUNDLDhCQUFBQSxRQUFBLGNBQUM7QUFBQSxNQUNBO0FBQUEsTUFDQSxNQUFLO0FBQUEsTUFDTCxXQUFXO0FBQUEsUUFDVjtBQUFBLFFBQ0EsWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1g7QUFBQSxNQUNEO0FBQUEsTUFDQyxHQUFHO0FBQUEsT0FFSCxNQUNGO0FBQUEsRUFFRjtBQUNEO0FBQ0EsWUFBWSxjQUFjOzs7QUVuSjFCLElBQU05QixVQUFTO0FBRWZBLFFBQU8sUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc3JjJ1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFdlIG11c3QgYXZvaWQgYSBjaXJjdWxhciBkZXBlbmRlbmN5IHdpdGggQHJlYWN0LWFyaWEvdXRpbHMsIGFuZCB0aGlzIHVzZUxheW91dEVmZmVjdCBpc1xuLy8gZ3VhcmRlZCBieSBhIGNoZWNrIHRoYXQgaXQgb25seSBydW5zIG9uIHRoZSBjbGllbnQgc2lkZS5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBydWxlc2Rpci91c2VMYXlvdXRFZmZlY3RSdWxlXG5pbXBvcnQgUmVhY3QsIHtSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuLy8gVG8gc3VwcG9ydCBTU1IsIHRoZSBhdXRvIGluY3JlbWVudGluZyBpZCBjb3VudGVyIGlzIHN0b3JlZCBpbiBhIGNvbnRleHQuIFRoaXMgYWxsb3dzXG4vLyBpdCB0byBiZSByZXNldCBvbiBldmVyeSByZXF1ZXN0IHRvIGVuc3VyZSB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIgYXJlIGNvbnNpc3RlbnQuXG4vLyBUaGVyZSBpcyBhbHNvIGEgcHJlZml4IHN0cmluZyB0aGF0IGlzIHVzZWQgdG8gc3VwcG9ydCBhc3luYyBsb2FkaW5nIGNvbXBvbmVudHNcbi8vIEVhY2ggYXN5bmMgYm91bmRhcnkgbXVzdCBiZSB3cmFwcGVkIGluIGFuIFNTUiBwcm92aWRlciwgd2hpY2ggYXBwZW5kcyB0byB0aGUgcHJlZml4XG4vLyBhbmQgcmVzZXRzIHRoZSBjdXJyZW50IGlkIGNvdW50ZXIuIFRoaXMgZW5zdXJlcyB0aGF0IGFzeW5jIGxvYWRlZCBjb21wb25lbnRzIGhhdmVcbi8vIGNvbnNpc3RlbnQgaWRzIHJlZ2FyZGxlc3Mgb2YgdGhlIGxvYWRpbmcgb3JkZXIuXG5pbnRlcmZhY2UgU1NSQ29udGV4dFZhbHVlIHtcbiAgcHJlZml4OiBzdHJpbmcsXG4gIGN1cnJlbnQ6IG51bWJlclxufVxuXG4vLyBEZWZhdWx0IGNvbnRleHQgdmFsdWUgdG8gdXNlIGluIGNhc2UgdGhlcmUgaXMgbm8gU1NSUHJvdmlkZXIuIFRoaXMgaXMgZmluZSBmb3Jcbi8vIGNsaWVudC1vbmx5IGFwcHMuIEluIG9yZGVyIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29waWVzIG9mIFJlYWN0IEFyaWEgcG90ZW50aWFsbHlcbi8vIGJlaW5nIG9uIHRoZSBwYWdlIGF0IG9uY2UsIHRoZSBwcmVmaXggaXMgc2V0IHRvIGEgcmFuZG9tIG51bWJlci4gU1NSUHJvdmlkZXJcbi8vIHdpbGwgcmVzZXQgdGhpcyB0byB6ZXJvIGZvciBjb25zaXN0ZW5jeSBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50LCBzbyBpbiB0aGVcbi8vIFNTUiBjYXNlIG11bHRpcGxlIGNvcGllcyBvZiBSZWFjdCBBcmlhIGlzIG5vdCBzdXBwb3J0ZWQuXG5jb25zdCBkZWZhdWx0Q29udGV4dDogU1NSQ29udGV4dFZhbHVlID0ge1xuICBwcmVmaXg6IFN0cmluZyhNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMCkpLFxuICBjdXJyZW50OiAwXG59O1xuXG5jb25zdCBTU1JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTU1JDb250ZXh0VmFsdWU+KGRlZmF1bHRDb250ZXh0KTtcblxuaW50ZXJmYWNlIFNTUlByb3ZpZGVyUHJvcHMge1xuICAvKiogWW91ciBhcHBsaWNhdGlvbiBoZXJlLiAqL1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbi8qKlxuICogV2hlbiB1c2luZyBTU1Igd2l0aCBSZWFjdCBBcmlhLCBhcHBsaWNhdGlvbnMgbXVzdCBiZSB3cmFwcGVkIGluIGFuIFNTUlByb3ZpZGVyLlxuICogVGhpcyBlbnN1cmVzIHRoYXQgYXV0byBnZW5lcmF0ZWQgaWRzIGFyZSBjb25zaXN0ZW50IGJldHdlZW4gdGhlIGNsaWVudCBhbmQgc2VydmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gU1NSUHJvdmlkZXIocHJvcHM6IFNTUlByb3ZpZGVyUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGxldCBjdXIgPSB1c2VDb250ZXh0KFNTUkNvbnRleHQpO1xuICBsZXQgdmFsdWU6IFNTUkNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBTU1JQcm92aWRlciwgc3RhcnQgd2l0aCBhbiBlbXB0eSBzdHJpbmcgcHJlZml4LCBvdGhlcndpc2VcbiAgICAvLyBhcHBlbmQgYW5kIGluY3JlbWVudCB0aGUgY291bnRlci5cbiAgICBwcmVmaXg6IGN1ciA9PT0gZGVmYXVsdENvbnRleHQgPyAnJyA6IGAke2N1ci5wcmVmaXh9LSR7KytjdXIuY3VycmVudH1gLFxuICAgIGN1cnJlbnQ6IDBcbiAgfSksIFtjdXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxTU1JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9TU1JDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5sZXQgY2FuVXNlRE9NID0gQm9vbGVhbihcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93LmRvY3VtZW50ICYmXG4gIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4pO1xuXG4vKiogQHByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTU1JTYWZlSWQoZGVmYXVsdElkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGN0eCA9IHVzZUNvbnRleHQoU1NSQ29udGV4dCk7XG5cbiAgLy8gSWYgd2UgYXJlIHJlbmRlcmluZyBpbiBhIG5vbi1ET00gZW52aXJvbm1lbnQsIGFuZCB0aGVyZSdzIG5vIFNTUlByb3ZpZGVyLFxuICAvLyBwcm92aWRlIGEgd2FybmluZyB0byBoaW50IHRvIHRoZSBkZXZlbG9wZXIgdG8gYWRkIG9uZS5cbiAgaWYgKGN0eCA9PT0gZGVmYXVsdENvbnRleHQgJiYgIWNhblVzZURPTSkge1xuICAgIGNvbnNvbGUud2FybignV2hlbiBzZXJ2ZXIgcmVuZGVyaW5nLCB5b3UgbXVzdCB3cmFwIHlvdXIgYXBwbGljYXRpb24gaW4gYW4gPFNTUlByb3ZpZGVyPiB0byBlbnN1cmUgY29uc2lzdGVudCBpZHMgYXJlIGdlbmVyYXRlZCBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHNlcnZlci4nKTtcbiAgfVxuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGRlZmF1bHRJZCB8fCBgcmVhY3QtYXJpYSR7Y3R4LnByZWZpeH0tJHsrK2N0eC5jdXJyZW50fWAsIFtkZWZhdWx0SWRdKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBjdXJyZW50bHkgYmVpbmcgc2VydmVyIHNpZGUgcmVuZGVyZWQgb3JcbiAqIGh5ZHJhdGVkIG9uIHRoZSBjbGllbnQuIENhbiBiZSB1c2VkIHRvIGRlbGF5IGJyb3dzZXItc3BlY2lmaWMgcmVuZGVyaW5nXG4gKiB1bnRpbCBhZnRlciBoeWRyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1NTUigpOiBib29sZWFuIHtcbiAgbGV0IGN1ciA9IHVzZUNvbnRleHQoU1NSQ29udGV4dCk7XG4gIGxldCBpc0luU1NSQ29udGV4dCA9IGN1ciAhPT0gZGVmYXVsdENvbnRleHQ7XG4gIGxldCBbaXNTU1IsIHNldElzU1NSXSA9IHVzZVN0YXRlKGlzSW5TU1JDb250ZXh0KTtcblxuICAvLyBJZiBvbiB0aGUgY2xpZW50LCBhbmQgdGhlIGNvbXBvbmVudCB3YXMgaW5pdGlhbGx5IHNlcnZlciByZW5kZXJlZCxcbiAgLy8gdGhlbiBzY2hlZHVsZSBhIGxheW91dCBlZmZlY3QgdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgYWZ0ZXIgaHlkcmF0aW9uLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJblNTUkNvbnRleHQpIHtcbiAgICAvLyBUaGlzIGlmIHN0YXRlbWVudCB0ZWNobmljYWxseSBicmVha3MgdGhlIHJ1bGVzIG9mIGhvb2tzLCBidXQgaXMgc2FmZVxuICAgIC8vIGJlY2F1c2UgdGhlIGNvbmRpdGlvbiBuZXZlciBjaGFuZ2VzIGFmdGVyIG1vdW50aW5nLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRJc1NTUihmYWxzZSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcmV0dXJuIGlzU1NSO1xufVxuIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRyb2xsZWRTdGF0ZTxUPihcbiAgdmFsdWU6IFQsXG4gIGRlZmF1bHRWYWx1ZTogVCxcbiAgb25DaGFuZ2U6ICh2YWx1ZTogVCwgLi4uYXJnczogYW55W10pID0+IHZvaWRcbik6IFtULCAodmFsdWU6IFQsIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXSAge1xuICBsZXQgW3N0YXRlVmFsdWUsIHNldFN0YXRlVmFsdWVdID0gdXNlU3RhdGUodmFsdWUgfHwgZGVmYXVsdFZhbHVlKTtcbiAgbGV0IHJlZiA9IHVzZVJlZih2YWx1ZSAhPT0gdW5kZWZpbmVkKTtcbiAgbGV0IHdhc0NvbnRyb2xsZWQgPSByZWYuY3VycmVudDtcbiAgbGV0IGlzQ29udHJvbGxlZCA9IHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIC8vIEludGVybmFsIHN0YXRlIHJlZmVyZW5jZSBmb3IgdXNlQ2FsbGJhY2tcbiAgbGV0IHN0YXRlUmVmID0gdXNlUmVmKHN0YXRlVmFsdWUpO1xuICBpZiAod2FzQ29udHJvbGxlZCAhPT0gaXNDb250cm9sbGVkKSB7XG4gICAgY29uc29sZS53YXJuKGBXQVJOOiBBIGNvbXBvbmVudCBjaGFuZ2VkIGZyb20gJHt3YXNDb250cm9sbGVkID8gJ2NvbnRyb2xsZWQnIDogJ3VuY29udHJvbGxlZCd9IHRvICR7aXNDb250cm9sbGVkID8gJ2NvbnRyb2xsZWQnIDogJ3VuY29udHJvbGxlZCd9LmApO1xuICB9XG5cbiAgcmVmLmN1cnJlbnQgPSBpc0NvbnRyb2xsZWQ7XG5cbiAgbGV0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IG9uQ2hhbmdlQ2FsbGVyID0gKHZhbHVlLCAuLi5vbkNoYW5nZUFyZ3MpID0+IHtcbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBpZiAoIU9iamVjdC5pcyhzdGF0ZVJlZi5jdXJyZW50LCB2YWx1ZSkpIHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSwgLi4ub25DaGFuZ2VBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgc3RhdGVSZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dlIGNhbiBub3Qgc3VwcG9ydCBhIGZ1bmN0aW9uIGNhbGxiYWNrLiBTZWUgR2l0aHViIElzc3VlcyBmb3IgZGV0YWlscyBodHRwczovL2dpdGh1Yi5jb20vYWRvYmUvcmVhY3Qtc3BlY3RydW0vaXNzdWVzLzIzMjAnKTtcbiAgICAgIC8vIHRoaXMgc3VwcG9ydHMgZnVuY3Rpb25hbCB1cGRhdGVzIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCNmdW5jdGlvbmFsLXVwZGF0ZXNcbiAgICAgIC8vIHdoZW4gc29tZW9uZSB1c2luZyB1c2VDb250cm9sbGVkU3RhdGUgY2FsbHMgc2V0Q29udHJvbGxlZFN0YXRlKG15RnVuYylcbiAgICAgIC8vIHRoaXMgd2lsbCBjYWxsIG91ciB1c2VTdGF0ZSBzZXRTdGF0ZSB3aXRoIGEgZnVuY3Rpb24gYXMgd2VsbCB3aGljaCBpbnZva2VzIG15RnVuYyBhbmQgY2FsbHMgb25DaGFuZ2Ugd2l0aCB0aGUgdmFsdWUgZnJvbSBteUZ1bmNcbiAgICAgIC8vIGlmIHdlJ3JlIGluIGFuIHVuY29udHJvbGxlZCBzdGF0ZSwgdGhlbiB3ZSBhbHNvIHJldHVybiB0aGUgdmFsdWUgb2YgbXlGdW5jIHdoaWNoIHRvIHNldFN0YXRlIGxvb2tzIGFzIHRob3VnaCBpdCB3YXMganVzdCBjYWxsZWQgd2l0aCBteUZ1bmMgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgICAvLyBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gdGhlIGNvbnRyb2xsZWQgdmFsdWUsIHdoaWNoIHdvbid0IGNhdXNlIGEgcmVyZW5kZXIgYmVjYXVzZSBSZWFjdCBrbm93cyB0byBiYWlsIG91dCB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgbGV0IHVwZGF0ZUZ1bmN0aW9uID0gKG9sZFZhbHVlLCAuLi5mdW5jdGlvbkFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGludGVyY2VwdGVkVmFsdWUgPSB2YWx1ZShpc0NvbnRyb2xsZWQgPyBzdGF0ZVJlZi5jdXJyZW50IDogb2xkVmFsdWUsIC4uLmZ1bmN0aW9uQXJncyk7XG4gICAgICAgIG9uQ2hhbmdlQ2FsbGVyKGludGVyY2VwdGVkVmFsdWUsIC4uLmFyZ3MpO1xuICAgICAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgICAgIHJldHVybiBpbnRlcmNlcHRlZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgIH07XG4gICAgICBzZXRTdGF0ZVZhbHVlKHVwZGF0ZUZ1bmN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgc2V0U3RhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBvbkNoYW5nZUNhbGxlcih2YWx1ZSwgLi4uYXJncyk7XG4gICAgfVxuICB9LCBbaXNDb250cm9sbGVkLCBvbkNoYW5nZV0pO1xuXG4gIC8vIElmIGEgY29udHJvbGxlZCBjb21wb25lbnQncyB2YWx1ZSBwcm9wIGNoYW5nZXMsIHdlIG5lZWQgdG8gdXBkYXRlIHN0YXRlUmVmXG4gIGlmIChpc0NvbnRyb2xsZWQpIHtcbiAgICBzdGF0ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBzdGF0ZVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGFrZXMgYSB2YWx1ZSBhbmQgZm9yY2VzIGl0IHRvIHRoZSBjbG9zZXN0IG1pbi9tYXggaWYgaXQncyBvdXRzaWRlLiBBbHNvIGZvcmNlcyBpdCB0byB0aGUgY2xvc2VzdCB2YWxpZCBzdGVwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIgPSAtSW5maW5pdHksIG1heDogbnVtYmVyID0gSW5maW5pdHkpOiBudW1iZXIge1xuICBsZXQgbmV3VmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc25hcFZhbHVlVG9TdGVwKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgc3RlcDogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHJlbWFpbmRlciA9ICgodmFsdWUgLSAoaXNOYU4obWluKSA/IDAgOiBtaW4pKSAlIHN0ZXApO1xuICBsZXQgc25hcHBlZFZhbHVlID0gTWF0aC5hYnMocmVtYWluZGVyKSAqIDIgPj0gc3RlcFxuICAgID8gdmFsdWUgKyBNYXRoLnNpZ24ocmVtYWluZGVyKSAqIChzdGVwIC0gTWF0aC5hYnMocmVtYWluZGVyKSlcbiAgICA6IHZhbHVlIC0gcmVtYWluZGVyO1xuXG4gIGlmICghaXNOYU4obWluKSkge1xuICAgIGlmIChzbmFwcGVkVmFsdWUgPCBtaW4pIHtcbiAgICAgIHNuYXBwZWRWYWx1ZSA9IG1pbjtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihtYXgpICYmIHNuYXBwZWRWYWx1ZSA+IG1heCkge1xuICAgICAgc25hcHBlZFZhbHVlID0gbWluICsgTWF0aC5mbG9vcigobWF4IC0gbWluKSAvIHN0ZXApICogc3RlcDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzTmFOKG1heCkgJiYgc25hcHBlZFZhbHVlID4gbWF4KSB7XG4gICAgc25hcHBlZFZhbHVlID0gTWF0aC5mbG9vcihtYXggLyBzdGVwKSAqIHN0ZXA7XG4gIH1cblxuICAvLyBjb3JyZWN0IGZsb2F0aW5nIHBvaW50IGJlaGF2aW9yIGJ5IHJvdW5kaW5nIHRvIHN0ZXAgcHJlY2lzaW9uXG4gIGxldCBzdHJpbmcgPSBzdGVwLnRvU3RyaW5nKCk7XG4gIGxldCBpbmRleCA9IHN0cmluZy5pbmRleE9mKCcuJyk7XG4gIGxldCBwcmVjaXNpb24gPSBpbmRleCA+PSAwID8gc3RyaW5nLmxlbmd0aCAtIGluZGV4IDogMDtcblxuICBpZiAocHJlY2lzaW9uID4gMCkge1xuICAgIGxldCBwb3cgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICBzbmFwcGVkVmFsdWUgPSBNYXRoLnJvdW5kKHNuYXBwZWRWYWx1ZSAqIHBvdykgLyBwb3c7XG4gIH1cblxuICByZXR1cm4gc25hcHBlZFZhbHVlO1xufVxuXG4vKiBUYWtlcyBhIHZhbHVlIGFuZCByb3VuZHMgb2ZmIHRvIHRoZSBudW1iZXIgb2YgZGlnaXRzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRml4ZWROdW1iZXIodmFsdWU6IG51bWJlciwgZGlnaXRzOiBudW1iZXIsIGJhc2U6IG51bWJlciA9IDEwKTogbnVtYmVyIHtcbiAgY29uc3QgcG93ID0gTWF0aC5wb3coYmFzZSwgZGlnaXRzKTtcblxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHBvdykgLyBwb3c7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRHVyaW5nIFNTUiwgUmVhY3QgZW1pdHMgYSB3YXJuaW5nIHdoZW4gY2FsbGluZyB1c2VMYXlvdXRFZmZlY3QuXG4vLyBTaW5jZSBuZWl0aGVyIHVzZUxheW91dEVmZmVjdCBub3IgdXNlRWZmZWN0IHJ1biBvbiB0aGUgc2VydmVyLFxuLy8gd2UgY2FuIHN1cHByZXNzIHRoaXMgYnkgcmVwbGFjZSBpdCB3aXRoIGEgbm9vcCBvbiB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IHVzZUxheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0XG4gIDogKCkgPT4ge307XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdH0gZnJvbSAnLi91c2VMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHt1c2VTU1JTYWZlSWR9IGZyb20gJ0ByZWFjdC1hcmlhL3Nzcic7XG5pbXBvcnQge3VzZVZhbHVlRWZmZWN0fSBmcm9tICcuLyc7XG5cbmxldCBpZHNVcGRhdGVyTWFwOiBNYXA8c3RyaW5nLCAodjogc3RyaW5nKSA9PiB2b2lkPiA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBJZiBhIGRlZmF1bHQgaXMgbm90IHByb3ZpZGVkLCBnZW5lcmF0ZSBhbiBpZC5cbiAqIEBwYXJhbSBkZWZhdWx0SWQgLSBEZWZhdWx0IGNvbXBvbmVudCBpZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlkKGRlZmF1bHRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRJZCk7XG4gIGxldCBuZXh0SWQgPSB1c2VSZWYobnVsbCk7XG5cbiAgbGV0IHJlcyA9IHVzZVNTUlNhZmVJZCh2YWx1ZSk7XG5cbiAgbGV0IHVwZGF0ZVZhbHVlID0gdXNlQ2FsbGJhY2soKHZhbCkgPT4ge1xuICAgIG5leHRJZC5jdXJyZW50ID0gdmFsO1xuICB9LCBbXSk7XG5cbiAgaWRzVXBkYXRlck1hcC5zZXQocmVzLCB1cGRhdGVWYWx1ZSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBsZXQgciA9IHJlcztcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWRzVXBkYXRlck1hcC5kZWxldGUocik7XG4gICAgfTtcbiAgfSwgW3Jlc10pO1xuXG4gIC8vIFRoaXMgY2Fubm90IGNhdXNlIGFuIGluZmluaXRlIGxvb3AgYmVjYXVzZSB0aGUgcmVmIGlzIHVwZGF0ZWQgZmlyc3QuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuZXdJZCA9IG5leHRJZC5jdXJyZW50O1xuICAgIGlmIChuZXdJZCkge1xuICAgICAgbmV4dElkLmN1cnJlbnQgPSBudWxsO1xuICAgICAgc2V0VmFsdWUobmV3SWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIGlkcy5cbiAqIERpZmZlcmVudCBpZHMgd2lsbCB0cmlnZ2VyIGEgc2lkZS1lZmZlY3QgYW5kIHJlLXJlbmRlciBjb21wb25lbnRzIGhvb2tlZCB1cCB3aXRoIGB1c2VJZGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUlkcyhpZEE6IHN0cmluZywgaWRCOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaWRBID09PSBpZEIpIHtcbiAgICByZXR1cm4gaWRBO1xuICB9XG5cbiAgbGV0IHNldElkQSA9IGlkc1VwZGF0ZXJNYXAuZ2V0KGlkQSk7XG4gIGlmIChzZXRJZEEpIHtcbiAgICBzZXRJZEEoaWRCKTtcbiAgICByZXR1cm4gaWRCO1xuICB9XG5cbiAgbGV0IHNldElkQiA9IGlkc1VwZGF0ZXJNYXAuZ2V0KGlkQik7XG4gIGlmIChzZXRJZEIpIHtcbiAgICBzZXRJZEIoaWRBKTtcbiAgICByZXR1cm4gaWRBO1xuICB9XG5cbiAgcmV0dXJuIGlkQjtcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGdlbmVyYXRlIGFuIGlkLCBhbmQgYWZ0ZXIgcmVuZGVyLCBjaGVjayBpZiB0aGF0IGlkIGlzIHJlbmRlcmVkIHNvIHdlIGtub3dcbiAqIGlmIHdlIGNhbiB1c2UgaXQgaW4gcGxhY2VzIHN1Y2ggYXMgbGFiZWxsZWRieS5cbiAqIEBwYXJhbSBkZXBBcnJheSAtIFdoZW4gdG8gcmVjYWxjdWxhdGUgaWYgdGhlIGlkIGlzIGluIHRoZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTbG90SWQoZGVwQXJyYXk6IFJlYWRvbmx5QXJyYXk8YW55PiA9IFtdKTogc3RyaW5nIHtcbiAgbGV0IGlkID0gdXNlSWQoKTtcbiAgbGV0IFtyZXNvbHZlZElkLCBzZXRSZXNvbHZlZElkXSA9IHVzZVZhbHVlRWZmZWN0KGlkKTtcbiAgbGV0IHVwZGF0ZUlkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFJlc29sdmVkSWQoZnVuY3Rpb24gKigpIHtcbiAgICAgIHlpZWxkIGlkO1xuXG4gICAgICB5aWVsZCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgPyBpZCA6IG51bGw7XG4gICAgfSk7XG4gIH0sIFtpZCwgc2V0UmVzb2x2ZWRJZF0pO1xuXG4gIHVzZUxheW91dEVmZmVjdCh1cGRhdGVJZCwgW2lkLCB1cGRhdGVJZCwgLi4uZGVwQXJyYXldKTtcblxuICByZXR1cm4gcmVzb2x2ZWRJZDtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIENhbGxzIGFsbCBmdW5jdGlvbnMgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSBjaGFpbmVkIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhaW4oLi4uY2FsbGJhY2tzOiBhbnlbXSk6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCB7XG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBmb3IgKGxldCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Y2hhaW59IGZyb20gJy4vY2hhaW4nO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQge21lcmdlSWRzfSBmcm9tICcuL3VzZUlkJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbi8vIHRha2VuIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUxNjAzMjUwL3R5cGVzY3JpcHQtMy1wYXJhbWV0ZXItbGlzdC1pbnRlcnNlY3Rpb24tdHlwZS81MTYwNDM3OSM1MTYwNDM3OVxudHlwZSBUdXBsZVR5cGVzPFQ+ID0geyBbUCBpbiBrZXlvZiBUXTogVFtQXSB9IGV4dGVuZHMgeyBba2V5OiBudW1iZXJdOiBpbmZlciBWIH0gPyBWIDogbmV2ZXI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xudHlwZSBVbmlvblRvSW50ZXJzZWN0aW9uPFU+ID0gKFUgZXh0ZW5kcyBhbnkgPyAoazogVSkgPT4gdm9pZCA6IG5ldmVyKSBleHRlbmRzICgoazogaW5mZXIgSSkgPT4gdm9pZCkgPyBJIDogbmV2ZXI7XG5cbi8qKlxuICogTWVyZ2VzIG11bHRpcGxlIHByb3BzIG9iamVjdHMgdG9nZXRoZXIuIEV2ZW50IGhhbmRsZXJzIGFyZSBjaGFpbmVkLFxuICogY2xhc3NOYW1lcyBhcmUgY29tYmluZWQsIGFuZCBpZHMgYXJlIGRlZHVwbGljYXRlZCAtIGRpZmZlcmVudCBpZHNcbiAqIHdpbGwgdHJpZ2dlciBhIHNpZGUtZWZmZWN0IGFuZCByZS1yZW5kZXIgY29tcG9uZW50cyBob29rZWQgdXAgd2l0aCBgdXNlSWRgLlxuICogRm9yIGFsbCBvdGhlciBwcm9wcywgdGhlIGxhc3QgcHJvcCBvYmplY3Qgb3ZlcnJpZGVzIGFsbCBwcmV2aW91cyBvbmVzLlxuICogQHBhcmFtIGFyZ3MgLSBNdWx0aXBsZSBzZXRzIG9mIHByb3BzIHRvIG1lcmdlIHRvZ2V0aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VQcm9wczxUIGV4dGVuZHMgUHJvcHNbXT4oLi4uYXJnczogVCk6IFVuaW9uVG9JbnRlcnNlY3Rpb248VHVwbGVUeXBlczxUPj4ge1xuICAvLyBTdGFydCB3aXRoIGEgYmFzZSBjbG9uZSBvZiB0aGUgZmlyc3QgYXJndW1lbnQuIFRoaXMgaXMgYSBsb3QgZmFzdGVyIHRoYW4gc3RhcnRpbmdcbiAgLy8gd2l0aCBhbiBlbXB0eSBvYmplY3QgYW5kIGFkZGluZyBwcm9wZXJ0aWVzIGFzIHdlIGdvLlxuICBsZXQgcmVzdWx0OiBQcm9wcyA9IHsuLi5hcmdzWzBdfTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb3BzID0gYXJnc1tpXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGxldCBhID0gcmVzdWx0W2tleV07XG4gICAgICBsZXQgYiA9IHByb3BzW2tleV07XG5cbiAgICAgIC8vIENoYWluIGV2ZW50c1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAvLyBUaGlzIGlzIGEgbG90IGZhc3RlciB0aGFuIGEgcmVnZXguXG4gICAgICAgIGtleVswXSA9PT0gJ28nICYmXG4gICAgICAgIGtleVsxXSA9PT0gJ24nICYmXG4gICAgICAgIGtleS5jaGFyQ29kZUF0KDIpID49IC8qICdBJyAqLyA2NSAmJlxuICAgICAgICBrZXkuY2hhckNvZGVBdCgyKSA8PSAvKiAnWicgKi8gOTBcbiAgICAgICkge1xuICAgICAgICByZXN1bHRba2V5XSA9IGNoYWluKGEsIGIpO1xuXG4gICAgICAgIC8vIE1lcmdlIGNsYXNzbmFtZXMsIHNvbWV0aW1lcyBjbGFzc05hbWVzIGFyZSBlbXB0eSBzdHJpbmcgd2hpY2ggZXZhbCB0byBmYWxzZSwgc28gd2UganVzdCBuZWVkIHRvIGRvIGEgdHlwZSBjaGVja1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGtleSA9PT0gJ2NsYXNzTmFtZScgfHwga2V5ID09PSAnVU5TQUZFX2NsYXNzTmFtZScpICYmXG4gICAgICAgIHR5cGVvZiBhID09PSAnc3RyaW5nJyAmJlxuICAgICAgICB0eXBlb2YgYiA9PT0gJ3N0cmluZydcbiAgICAgICkge1xuICAgICAgICByZXN1bHRba2V5XSA9IGNsc3goYSwgYik7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2lkJyAmJiBhICYmIGIpIHtcbiAgICAgICAgcmVzdWx0LmlkID0gbWVyZ2VJZHMoYSwgYik7XG4gICAgICAgIC8vIE92ZXJyaWRlIG90aGVyc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBiICE9PSB1bmRlZmluZWQgPyBiIDogYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0IGFzIFVuaW9uVG9JbnRlcnNlY3Rpb248VHVwbGVUeXBlczxUPj47XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtGb3J3YXJkZWRSZWZ9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBNZXJnZXMgbXVsdGlwbGUgcmVmcyBpbnRvIG9uZS4gV29ya3Mgd2l0aCBlaXRoZXIgY2FsbGJhY2sgb3Igb2JqZWN0IHJlZnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnM8VD4oLi4ucmVmczogRm9yd2FyZGVkUmVmPFQ+W10pOiBGb3J3YXJkZWRSZWY8VD4ge1xuICByZXR1cm4gKHZhbHVlOiBUKSA9PiB7XG4gICAgZm9yIChsZXQgcmVmIG9mIHJlZnMpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlZih2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7QXJpYUxhYmVsaW5nUHJvcHMsIERPTVByb3BzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7SFRNTEF0dHJpYnV0ZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRE9NUHJvcE5hbWVzID0gbmV3IFNldChbXG4gICdpZCdcbl0pO1xuXG5jb25zdCBsYWJlbGFibGVQcm9wTmFtZXMgPSBuZXcgU2V0KFtcbiAgJ2FyaWEtbGFiZWwnLFxuICAnYXJpYS1sYWJlbGxlZGJ5JyxcbiAgJ2FyaWEtZGVzY3JpYmVkYnknLFxuICAnYXJpYS1kZXRhaWxzJ1xuXSk7XG5cbmludGVyZmFjZSBPcHRpb25zIHtcbiAgLyoqXG4gICAqIElmIGxhYmVsbGluZyBhc3NvY2lhdGVkIGFyaWEgcHJvcGVydGllcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIGZpbHRlci5cbiAgICovXG4gIGxhYmVsYWJsZT86IGJvb2xlYW4sXG4gIC8qKlxuICAgKiBBIFNldCBvZiBvdGhlciBwcm9wZXJ0eSBuYW1lcyB0aGF0IHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgZmlsdGVyLlxuICAgKi9cbiAgcHJvcE5hbWVzPzogU2V0PHN0cmluZz5cbn1cblxuY29uc3QgcHJvcFJlID0gL14oZGF0YS0uKikkLztcblxuLyoqXG4gKiBGaWx0ZXJzIG91dCBhbGwgcHJvcHMgdGhhdCBhcmVuJ3QgdmFsaWQgRE9NIHByb3BzIG9yIGRlZmluZWQgdmlhIG92ZXJyaWRlIHByb3Agb2JqLlxuICogQHBhcmFtIHByb3BzIC0gVGhlIGNvbXBvbmVudCBwcm9wcyB0byBiZSBmaWx0ZXJlZC5cbiAqIEBwYXJhbSBvcHRzIC0gUHJvcHMgdG8gb3ZlcnJpZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Qcm9wcyhwcm9wczogRE9NUHJvcHMgJiBBcmlhTGFiZWxpbmdQcm9wcywgb3B0czogT3B0aW9ucyA9IHt9KTogRE9NUHJvcHMgJiBBcmlhTGFiZWxpbmdQcm9wcyB7XG4gIGxldCB7bGFiZWxhYmxlLCBwcm9wTmFtZXN9ID0gb3B0cztcbiAgbGV0IGZpbHRlcmVkUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiA9IHt9O1xuXG4gIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgcHJvcCkgJiYgKFxuICAgICAgICBET01Qcm9wTmFtZXMuaGFzKHByb3ApIHx8XG4gICAgICAgIChsYWJlbGFibGUgJiYgbGFiZWxhYmxlUHJvcE5hbWVzLmhhcyhwcm9wKSkgfHxcbiAgICAgICAgcHJvcE5hbWVzPy5oYXMocHJvcCkgfHxcbiAgICAgICAgcHJvcFJlLnRlc3QocHJvcClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGZpbHRlcmVkUHJvcHNbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRQcm9wcztcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yIGVsZW1lbnQuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbi8vIEN1cnJlbnRseSBuZWNlc3NhcnkgZm9yIFNhZmFyaSBhbmQgb2xkIEVkZ2U6XG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PW1kbi1hcGlfaHRtbGVsZW1lbnRfZm9jdXNfcHJldmVudHNjcm9sbF9vcHRpb25cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4NTgzXG4vL1xuXG4vLyBPcmlnaW5hbCBsaWNlbnNpbmcgZm9yIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBOT1RJQ0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2FsdmVsbGlkby9mb2N1cy1vcHRpb25zLXBvbHlmaWxsXG5cbmludGVyZmFjZSBTY3JvbGxhYmxlRWxlbWVudCB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzY3JvbGxUb3A6IG51bWJlcixcbiAgc2Nyb2xsTGVmdDogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c1dpdGhvdXRTY3JvbGxpbmcoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgaWYgKHN1cHBvcnRzUHJldmVudFNjcm9sbCgpKSB7XG4gICAgZWxlbWVudC5mb2N1cyh7cHJldmVudFNjcm9sbDogdHJ1ZX0pO1xuICB9IGVsc2Uge1xuICAgIGxldCBzY3JvbGxhYmxlRWxlbWVudHMgPSBnZXRTY3JvbGxhYmxlRWxlbWVudHMoZWxlbWVudCk7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbihzY3JvbGxhYmxlRWxlbWVudHMpO1xuICB9XG59XG5cbmxldCBzdXBwb3J0c1ByZXZlbnRTY3JvbGxDYWNoZWQ6IGJvb2xlYW4gPSBudWxsO1xuZnVuY3Rpb24gc3VwcG9ydHNQcmV2ZW50U2Nyb2xsKCkge1xuICBpZiAoc3VwcG9ydHNQcmV2ZW50U2Nyb2xsQ2FjaGVkID09IG51bGwpIHtcbiAgICBzdXBwb3J0c1ByZXZlbnRTY3JvbGxDYWNoZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgdmFyIGZvY3VzRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9jdXNFbGVtLmZvY3VzKHtcbiAgICAgICAgZ2V0IHByZXZlbnRTY3JvbGwoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQcmV2ZW50U2Nyb2xsQ2FjaGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWdub3JlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUHJldmVudFNjcm9sbENhY2hlZDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUVsZW1lbnRzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogU2Nyb2xsYWJsZUVsZW1lbnRbXSB7XG4gIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIHZhciBzY3JvbGxhYmxlRWxlbWVudHM6IFNjcm9sbGFibGVFbGVtZW50W10gPSBbXTtcbiAgdmFyIHJvb3RTY3JvbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHBhcmVudCAhPT0gcm9vdFNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICBpZiAoXG4gICAgICBwYXJlbnQub2Zmc2V0SGVpZ2h0IDwgcGFyZW50LnNjcm9sbEhlaWdodCB8fFxuICAgICAgcGFyZW50Lm9mZnNldFdpZHRoIDwgcGFyZW50LnNjcm9sbFdpZHRoXG4gICAgKSB7XG4gICAgICBzY3JvbGxhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgIGVsZW1lbnQ6IHBhcmVudCxcbiAgICAgICAgc2Nyb2xsVG9wOiBwYXJlbnQuc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxMZWZ0OiBwYXJlbnQuc2Nyb2xsTGVmdFxuICAgICAgfSk7XG4gICAgfVxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICB9XG5cbiAgaWYgKHJvb3RTY3JvbGxpbmdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBzY3JvbGxhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICBlbGVtZW50OiByb290U2Nyb2xsaW5nRWxlbWVudCxcbiAgICAgIHNjcm9sbFRvcDogcm9vdFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdDogcm9vdFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNjcm9sbGFibGVFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcmVzdG9yZVNjcm9sbFBvc2l0aW9uKHNjcm9sbGFibGVFbGVtZW50czogU2Nyb2xsYWJsZUVsZW1lbnRbXSkge1xuICBmb3IgKGxldCB7ZWxlbWVudCwgc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0fSBvZiBzY3JvbGxhYmxlRWxlbWVudHMpIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldChlbGVtZW50LCByZXZlcnNlLCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykge1xuICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGlmIChyZXZlcnNlKSB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LnJpZ2h0IDogcmVjdC5ib3R0b207XG4gIH1cbiAgcmV0dXJuIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LmxlZnQgOiByZWN0LnRvcDtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBXZSBzdG9yZSBhIGdsb2JhbCBsaXN0IG9mIGVsZW1lbnRzIHRoYXQgYXJlIGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nLFxuLy8gbWFwcGVkIHRvIGEgc2V0IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmcgZm9yIHRoYXQgZWxlbWVudC5cbi8vIFRoaXMgaXMgbmVjZXNzYXJ5IHJhdGhlciB0aGFuIGEgc2ltcGxlIGNvdW50IG9mIHRyYW5zaXRpb25zIGJlY2F1c2Ugb2YgYnJvd3NlclxuLy8gYnVncywgZS5nLiBDaHJvbWUgc29tZXRpbWVzIGZpcmVzIGJvdGggdHJhbnNpdGlvbmVuZCBhbmQgdHJhbnNpdGlvbmNhbmNlbCByYXRoZXJcbi8vIHRoYW4gb25lIG9yIHRoZSBvdGhlci4gU28gd2UgbmVlZCB0byB0cmFjayB3aGF0J3MgYWN0dWFsbHkgdHJhbnNpdGlvbmluZyBzbyB0aGF0XG4vLyB3ZSBjYW4gaWdub3JlIHRoZXNlIGR1cGxpY2F0ZSBldmVudHMuXG5sZXQgdHJhbnNpdGlvbnNCeUVsZW1lbnQgPSBuZXcgTWFwPEV2ZW50VGFyZ2V0LCBTZXQ8c3RyaW5nPj4oKTtcblxuLy8gQSBsaXN0IG9mIGNhbGxiYWNrcyB0byBjYWxsIG9uY2UgdGhlcmUgYXJlIG5vIHRyYW5zaXRpb25pbmcgZWxlbWVudHMuXG5sZXQgdHJhbnNpdGlvbkNhbGxiYWNrcyA9IG5ldyBTZXQ8KCkgPT4gdm9pZD4oKTtcblxuZnVuY3Rpb24gc2V0dXBHbG9iYWxFdmVudHMoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBvblRyYW5zaXRpb25TdGFydCA9IChlOiBUcmFuc2l0aW9uRXZlbnQpID0+IHtcbiAgICAvLyBBZGQgdGhlIHRyYW5zaXRpb25pbmcgcHJvcGVydHkgdG8gdGhlIGxpc3QgZm9yIHRoaXMgZWxlbWVudC5cbiAgICBsZXQgdHJhbnNpdGlvbnMgPSB0cmFuc2l0aW9uc0J5RWxlbWVudC5nZXQoZS50YXJnZXQpO1xuICAgIGlmICghdHJhbnNpdGlvbnMpIHtcbiAgICAgIHRyYW5zaXRpb25zID0gbmV3IFNldCgpO1xuICAgICAgdHJhbnNpdGlvbnNCeUVsZW1lbnQuc2V0KGUudGFyZ2V0LCB0cmFuc2l0aW9ucyk7XG5cbiAgICAgIC8vIFRoZSB0cmFuc2l0aW9uY2FuY2VsIGV2ZW50IG11c3QgYmUgcmVnaXN0ZXJlZCBvbiB0aGUgZWxlbWVudCBpdHNlbGYsIHJhdGhlciB0aGFuIGFzIGEgZ2xvYmFsXG4gICAgICAvLyBldmVudC4gVGhpcyBlbmFibGVzIHVzIHRvIGhhbmRsZSB3aGVuIHRoZSBub2RlIGlzIGRlbGV0ZWQgZnJvbSB0aGUgZG9jdW1lbnQgd2hpbGUgaXQgaXMgdHJhbnNpdGlvbmluZy5cbiAgICAgIC8vIEluIHRoYXQgY2FzZSwgdGhlIGNhbmNlbCBldmVudCB3b3VsZCBoYXZlIG5vd2hlcmUgdG8gYnViYmxlIHRvIHNvIHdlIG5lZWQgdG8gaGFuZGxlIGl0IGRpcmVjdGx5LlxuICAgICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmNhbmNlbCcsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbnMuYWRkKGUucHJvcGVydHlOYW1lKTtcbiAgfTtcblxuICBsZXQgb25UcmFuc2l0aW9uRW5kID0gKGU6IFRyYW5zaXRpb25FdmVudCkgPT4ge1xuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBmcm9tIGxpc3Qgb2YgdHJhbnNpdGlvbmluZyBwcm9wZXJ0aWVzLlxuICAgIGxldCBwcm9wZXJ0aWVzID0gdHJhbnNpdGlvbnNCeUVsZW1lbnQuZ2V0KGUudGFyZ2V0KTtcbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzLmRlbGV0ZShlLnByb3BlcnR5TmFtZSk7XG5cbiAgICAvLyBJZiBlbXB0eSwgcmVtb3ZlIHRyYW5zaXRpb25jYW5jZWwgZXZlbnQsIGFuZCByZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgbGlzdCBvZiB0cmFuc2l0aW9uaW5nIGVsZW1lbnRzLlxuICAgIGlmIChwcm9wZXJ0aWVzLnNpemUgPT09IDApIHtcbiAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25jYW5jZWwnLCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgdHJhbnNpdGlvbnNCeUVsZW1lbnQuZGVsZXRlKGUudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvLyBJZiBubyB0cmFuc2l0aW9uaW5nIGVsZW1lbnRzLCBjYWxsIGFsbCBvZiB0aGUgcXVldWVkIGNhbGxiYWNrcy5cbiAgICBpZiAodHJhbnNpdGlvbnNCeUVsZW1lbnQuc2l6ZSA9PT0gMCkge1xuICAgICAgZm9yIChsZXQgY2Igb2YgdHJhbnNpdGlvbkNhbGxiYWNrcykge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uQ2FsbGJhY2tzLmNsZWFyKCk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnJ1bicsIG9uVHJhbnNpdGlvblN0YXJ0KTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kKTtcbn1cblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgIHNldHVwR2xvYmFsRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNldHVwR2xvYmFsRXZlbnRzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuQWZ0ZXJUcmFuc2l0aW9uKGZuOiAoKSA9PiB2b2lkKSB7XG4gIC8vIFdhaXQgb25lIGZyYW1lIHRvIHNlZSBpZiBhbiBhbmltYXRpb24gc3RhcnRzLCBlLmcuIGEgdHJhbnNpdGlvbiBvbiBtb3VudC5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAvLyBJZiBubyB0cmFuc2l0aW9ucyBhcmUgcnVubmluZywgY2FsbCB0aGUgZnVuY3Rpb24gaW1tZWRpYXRlbHkuXG4gICAgLy8gT3RoZXJ3aXNlLCBhZGQgaXQgdG8gYSBsaXN0IG9mIGNhbGxiYWNrcyB0byBydW4gYXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uLlxuICAgIGlmICh0cmFuc2l0aW9uc0J5RWxlbWVudC5zaXplID09PSAwKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uQ2FsbGJhY2tzLmFkZChmbik7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge2dldE9mZnNldH0gZnJvbSAnLi9nZXRPZmZzZXQnO1xuaW1wb3J0IHtPcmllbnRhdGlvbn0gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5pbXBvcnQgUmVhY3QsIHtIVE1MQXR0cmlidXRlcywgTXV0YWJsZVJlZk9iamVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBVc2VEcmFnMURQcm9wcyB7XG4gIGNvbnRhaW5lclJlZjogTXV0YWJsZVJlZk9iamVjdDxIVE1MRWxlbWVudD4sXG4gIHJldmVyc2U/OiBib29sZWFuLFxuICBvcmllbnRhdGlvbj86IE9yaWVudGF0aW9uLFxuICBvbkhvdmVyPzogKGhvdmVyZWQ6IGJvb2xlYW4pID0+IHZvaWQsXG4gIG9uRHJhZz86IChkcmFnZ2luZzogYm9vbGVhbikgPT4gdm9pZCxcbiAgb25Qb3NpdGlvbkNoYW5nZT86IChwb3NpdGlvbjogbnVtYmVyKSA9PiB2b2lkLFxuICBvbkluY3JlbWVudD86ICgpID0+IHZvaWQsXG4gIG9uRGVjcmVtZW50PzogKCkgPT4gdm9pZCxcbiAgb25JbmNyZW1lbnRUb01heD86ICgpID0+IHZvaWQsXG4gIG9uRGVjcmVtZW50VG9NaW4/OiAoKSA9PiB2b2lkLFxuICBvbkNvbGxhcHNlVG9nZ2xlPzogKCkgPT4gdm9pZFxufVxuXG4vLyBLZWVwIHRyYWNrIG9mIGVsZW1lbnRzIHRoYXQgd2UgYXJlIGN1cnJlbnRseSBoYW5kbGluZyBkcmFnZ2luZyBmb3IgdmlhIHVzZURyYWcxRC5cbi8vIElmIHRoZXJlJ3MgYW4gYW5jZXN0b3IgYW5kIGEgZGVzY2VuZGFudCBib3RoIHVzaW5nIHVzZURyYWcxRCgpLCBhbmQgdGhlIHVzZXIgc3RhcnRzXG4vLyBkcmFnZ2luZyB0aGUgZGVzY2VuZGFudCwgd2UgZG9uJ3Qgd2FudCB1c2VEcmFnMUQgZXZlbnRzIHRvIGZpcmUgZm9yIHRoZSBhbmNlc3Rvci5cbmNvbnN0IGRyYWdnaW5nRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuLy8gY3JlYXRlZCBmb3Igc3BsaXR2aWV3LCB0aGlzIHNob3VsZCBiZSByZXVzYWJsZSBmb3IgdGhpbmdzIGxpa2Ugc2xpZGVycy9kaWFsc1xuLy8gSXQgYWxzbyBoYW5kbGVzIGtleWJvYXJkIGV2ZW50cyBvbiB0aGUgdGFyZ2V0IGFsbG93aW5nIGZvciBpbmNyZW1lbnQvZGVjcmVtZW50IGJ5IGEgZ2l2ZW4gc3RlcHNpemUgYXMgd2VsbCBhcyBtaW5pZnlpbmcvbWF4aW1pemluZyBhbmQgdG9nZ2xpbmcgYmV0d2VlbiBtaW5pZmllZCBhbmQgcHJldmlvdXMgc2l6ZVxuLy8gSXQgY2FuIGFsc28gdGFrZSBhICdyZXZlcnNlJyBwYXJhbSB0byBzYXkgaWYgd2Ugc2hvdWxkIG1lYXN1cmUgZnJvbSB0aGUgcmlnaHQvYm90dG9tIGluc3RlYWQgb2YgdGhlIHRvcC9sZWZ0XG4vLyBJdCBjYW4gYWxzbyBoYW5kbGUgZWl0aGVyIGEgdmVydGljYWwgb3IgaG9yaXpvbnRhbCBtb3ZlbWVudCwgYnV0IG5vdCBib3RoIGF0IHRoZSBzYW1lIHRpbWVcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURyYWcxRChwcm9wczogVXNlRHJhZzFEUHJvcHMpOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICBjb25zb2xlLndhcm4oJ3VzZURyYWcxRCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB1c2VNb3ZlYCBpbnN0ZWFkIGh0dHBzOi8vcmVhY3Qtc3BlY3RydW0uYWRvYmUuY29tL3JlYWN0LWFyaWEvdXNlTW92ZS5odG1sJyk7XG4gIGxldCB7Y29udGFpbmVyUmVmLCByZXZlcnNlLCBvcmllbnRhdGlvbiwgb25Ib3Zlciwgb25EcmFnLCBvblBvc2l0aW9uQ2hhbmdlLCBvbkluY3JlbWVudCwgb25EZWNyZW1lbnQsIG9uSW5jcmVtZW50VG9NYXgsIG9uRGVjcmVtZW50VG9NaW4sIG9uQ29sbGFwc2VUb2dnbGV9ID0gcHJvcHM7XG4gIGxldCBnZXRQb3NpdGlvbiA9IChlKSA9PiBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gZS5jbGllbnRYIDogZS5jbGllbnRZO1xuICBsZXQgZ2V0TmV4dE9mZnNldCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lck9mZnNldCA9IGdldE9mZnNldChjb250YWluZXJSZWYuY3VycmVudCwgcmV2ZXJzZSwgb3JpZW50YXRpb24pO1xuICAgIGxldCBtb3VzZU9mZnNldCA9IGdldFBvc2l0aW9uKGUpO1xuICAgIGxldCBuZXh0T2Zmc2V0ID0gcmV2ZXJzZSA/IGNvbnRhaW5lck9mZnNldCAtIG1vdXNlT2Zmc2V0IDogbW91c2VPZmZzZXQgLSBjb250YWluZXJPZmZzZXQ7XG4gICAgcmV0dXJuIG5leHRPZmZzZXQ7XG4gIH07XG4gIGxldCBkcmFnZ2luZyA9IHVzZVJlZihmYWxzZSk7XG4gIGxldCBwcmV2UG9zaXRpb24gPSB1c2VSZWYoMCk7XG5cbiAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBoYW5kbGVycyBpbiBhIHJlZiBzbyB0aGF0IHRoZSBldmVudHMgY2FuIGFjY2VzcyB0aGVtLlxuICBsZXQgaGFuZGxlcnMgPSB1c2VSZWYoe29uUG9zaXRpb25DaGFuZ2UsIG9uRHJhZ30pO1xuICBoYW5kbGVycy5jdXJyZW50Lm9uRHJhZyA9IG9uRHJhZztcbiAgaGFuZGxlcnMuY3VycmVudC5vblBvc2l0aW9uQ2hhbmdlID0gb25Qb3NpdGlvbkNoYW5nZTtcblxuICBsZXQgb25Nb3VzZURyYWdnZWQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmV4dE9mZnNldCA9IGdldE5leHRPZmZzZXQoZSk7XG4gICAgaWYgKCFkcmFnZ2luZy5jdXJyZW50KSB7XG4gICAgICBkcmFnZ2luZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGlmIChoYW5kbGVycy5jdXJyZW50Lm9uRHJhZykge1xuICAgICAgICBoYW5kbGVycy5jdXJyZW50Lm9uRHJhZyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVycy5jdXJyZW50Lm9uUG9zaXRpb25DaGFuZ2UpIHtcbiAgICAgICAgaGFuZGxlcnMuY3VycmVudC5vblBvc2l0aW9uQ2hhbmdlKG5leHRPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJldlBvc2l0aW9uLmN1cnJlbnQgPT09IG5leHRPZmZzZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJldlBvc2l0aW9uLmN1cnJlbnQgPSBuZXh0T2Zmc2V0O1xuICAgIGlmIChvblBvc2l0aW9uQ2hhbmdlKSB7XG4gICAgICBvblBvc2l0aW9uQ2hhbmdlKG5leHRPZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgb25Nb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBkcmFnZ2luZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgbGV0IG5leHRPZmZzZXQgPSBnZXROZXh0T2Zmc2V0KGUpO1xuICAgIGlmIChoYW5kbGVycy5jdXJyZW50Lm9uRHJhZykge1xuICAgICAgaGFuZGxlcnMuY3VycmVudC5vbkRyYWcoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoaGFuZGxlcnMuY3VycmVudC5vblBvc2l0aW9uQ2hhbmdlKSB7XG4gICAgICBoYW5kbGVycy5jdXJyZW50Lm9uUG9zaXRpb25DaGFuZ2UobmV4dE9mZnNldCk7XG4gICAgfVxuXG4gICAgZHJhZ2dpbmdFbGVtZW50cy5zcGxpY2UoZHJhZ2dpbmdFbGVtZW50cy5pbmRleE9mKHRhcmdldCksIDEpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnZ2VkLCBmYWxzZSk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgaGFuZGxpbmcgZHJhZ2dpbmcgb24gYSBkZXNjZW5kYW50IHdpdGggdXNlRHJhZzFELCB0aGVuXG4gICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBoYW5kbGUgdGhlIGRyYWcgbW90aW9uIG9uIHRoaXMgdGFyZ2V0IGFzIHdlbGwuXG4gICAgaWYgKGRyYWdnaW5nRWxlbWVudHMuc29tZShlbHQgPT4gdGFyZ2V0LmNvbnRhaW5zKGVsdCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWdnaW5nRWxlbWVudHMucHVzaCh0YXJnZXQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZ2dlZCwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBpZiAob25Ib3Zlcikge1xuICAgICAgb25Ib3Zlcih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IG9uTW91c2VPdXQgPSAoKSA9PiB7XG4gICAgaWYgKG9uSG92ZXIpIHtcbiAgICAgIG9uSG92ZXIoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdMZWZ0JzpcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmIChvbkRlY3JlbWVudCAmJiAhcmV2ZXJzZSkge1xuICAgICAgICAgICAgb25EZWNyZW1lbnQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9uSW5jcmVtZW50ICYmIHJldmVyc2UpIHtcbiAgICAgICAgICAgIG9uSW5jcmVtZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVXAnOlxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAob25EZWNyZW1lbnQgJiYgIXJldmVyc2UpIHtcbiAgICAgICAgICAgIG9uRGVjcmVtZW50KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvbkluY3JlbWVudCAmJiByZXZlcnNlKSB7XG4gICAgICAgICAgICBvbkluY3JlbWVudCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1JpZ2h0JzpcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAob25JbmNyZW1lbnQgJiYgIXJldmVyc2UpIHtcbiAgICAgICAgICAgIG9uSW5jcmVtZW50KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvbkRlY3JlbWVudCAmJiByZXZlcnNlKSB7XG4gICAgICAgICAgICBvbkRlY3JlbWVudCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Rvd24nOlxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmIChvbkluY3JlbWVudCAmJiAhcmV2ZXJzZSkge1xuICAgICAgICAgICAgb25JbmNyZW1lbnQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9uRGVjcmVtZW50ICYmIHJldmVyc2UpIHtcbiAgICAgICAgICAgIG9uRGVjcmVtZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKG9uRGVjcmVtZW50VG9NaW4pIHtcbiAgICAgICAgICBvbkRlY3JlbWVudFRvTWluKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChvbkluY3JlbWVudFRvTWF4KSB7XG4gICAgICAgICAgb25JbmNyZW1lbnRUb01heCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChvbkNvbGxhcHNlVG9nZ2xlKSB7XG4gICAgICAgICAgb25Db2xsYXBzZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge29uTW91c2VEb3duLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VPdXQsIG9uS2V5RG93bn07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEdsb2JhbExpc3RlbmVycyB7XG4gIGFkZEdsb2JhbExpc3RlbmVyPEsgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwPihlbDogRXZlbnRUYXJnZXQsIHR5cGU6IEssIGxpc3RlbmVyOiAodGhpczogRG9jdW1lbnQsIGV2OiBEb2N1bWVudEV2ZW50TWFwW0tdKSA9PiBhbnksIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkLFxuICBhZGRHbG9iYWxMaXN0ZW5lcihlbDogRXZlbnRUYXJnZXQsIHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkLFxuICByZW1vdmVHbG9iYWxMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcD4oZWw6IEV2ZW50VGFyZ2V0LCB0eXBlOiBLLCBsaXN0ZW5lcjogKHRoaXM6IERvY3VtZW50LCBldjogRG9jdW1lbnRFdmVudE1hcFtLXSkgPT4gYW55LCBvcHRpb25zPzogYm9vbGVhbiB8IEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZCxcbiAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIoZWw6IEV2ZW50VGFyZ2V0LCB0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zPzogYm9vbGVhbiB8IEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZCxcbiAgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzKCk6IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdsb2JhbExpc3RlbmVycygpOiBHbG9iYWxMaXN0ZW5lcnMge1xuICBsZXQgZ2xvYmFsTGlzdGVuZXJzID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gIGxldCBhZGRHbG9iYWxMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKChldmVudFRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpID0+IHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgcmVtb3ZlIHRoZSBsaXN0ZW5lciBhZnRlciBpdCBpcyBjYWxsZWQgd2l0aCB0aGUgYG9uY2VgIG9wdGlvbi5cbiAgICBsZXQgZm4gPSBvcHRpb25zPy5vbmNlID8gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGdsb2JhbExpc3RlbmVycy5jdXJyZW50LmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICBsaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9IDogbGlzdGVuZXI7XG4gICAgZ2xvYmFsTGlzdGVuZXJzLmN1cnJlbnQuc2V0KGxpc3RlbmVyLCB7dHlwZSwgZXZlbnRUYXJnZXQsIGZuLCBvcHRpb25zfSk7XG4gICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gIH0sIFtdKTtcbiAgbGV0IHJlbW92ZUdsb2JhbExpc3RlbmVyID0gdXNlQ2FsbGJhY2soKGV2ZW50VGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGxldCBmbiA9IGdsb2JhbExpc3RlbmVycy5jdXJyZW50LmdldChsaXN0ZW5lcik/LmZuIHx8IGxpc3RlbmVyO1xuICAgIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIG9wdGlvbnMpO1xuICAgIGdsb2JhbExpc3RlbmVycy5jdXJyZW50LmRlbGV0ZShsaXN0ZW5lcik7XG4gIH0sIFtdKTtcbiAgbGV0IHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBnbG9iYWxMaXN0ZW5lcnMuY3VycmVudC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcih2YWx1ZS5ldmVudFRhcmdldCwgdmFsdWUudHlwZSwga2V5LCB2YWx1ZS5vcHRpb25zKTtcbiAgICB9KTtcbiAgfSwgW3JlbW92ZUdsb2JhbExpc3RlbmVyXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzO1xuICB9LCBbcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzXSk7XG5cbiAgcmV0dXJuIHthZGRHbG9iYWxMaXN0ZW5lciwgcmVtb3ZlR2xvYmFsTGlzdGVuZXIsIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVyc307XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtBcmlhTGFiZWxpbmdQcm9wcywgRE9NUHJvcHN9IGZyb20gJ0ByZWFjdC10eXBlcy9zaGFyZWQnO1xuaW1wb3J0IHt1c2VJZH0gZnJvbSAnLi91c2VJZCc7XG5cbi8qKlxuICogTWVyZ2VzIGFyaWEtbGFiZWwgYW5kIGFyaWEtbGFiZWxsZWRieSBpbnRvIGFyaWEtbGFiZWxsZWRieSB3aGVuIGJvdGggZXhpc3QuXG4gKiBAcGFyYW0gcHJvcHMgLSBBcmlhIGxhYmVsIHByb3BzLlxuICogQHBhcmFtIGRlZmF1bHRMYWJlbCAtIERlZmF1bHQgdmFsdWUgZm9yIGFyaWEtbGFiZWwgd2hlbiBub3QgcHJlc2VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhYmVscyhwcm9wczogRE9NUHJvcHMgJiBBcmlhTGFiZWxpbmdQcm9wcywgZGVmYXVsdExhYmVsPzogc3RyaW5nKTogRE9NUHJvcHMgJiBBcmlhTGFiZWxpbmdQcm9wcyB7XG4gIGxldCB7XG4gICAgaWQsXG4gICAgJ2FyaWEtbGFiZWwnOiBsYWJlbCxcbiAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxsZWRCeVxuICB9ID0gcHJvcHM7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYm90aCBhbiBhcmlhLWxhYmVsIGFuZCBhcmlhLWxhYmVsbGVkYnksXG4gIC8vIGNvbWJpbmUgdGhlbSBieSBwb2ludGluZyB0byB0aGUgZWxlbWVudCBpdHNlbGYuXG4gIGlkID0gdXNlSWQoaWQpO1xuICBpZiAobGFiZWxsZWRCeSAmJiBsYWJlbCkge1xuICAgIGxldCBpZHMgPSBuZXcgU2V0KFsuLi5sYWJlbGxlZEJ5LnRyaW0oKS5zcGxpdCgvXFxzKy8pLCBpZF0pO1xuICAgIGxhYmVsbGVkQnkgPSBbLi4uaWRzXS5qb2luKCcgJyk7XG4gIH0gZWxzZSBpZiAobGFiZWxsZWRCeSkge1xuICAgIGxhYmVsbGVkQnkgPSBsYWJlbGxlZEJ5LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIElmIG5vIGxhYmVscyBhcmUgcHJvdmlkZWQsIHVzZSB0aGUgZGVmYXVsdFxuICBpZiAoIWxhYmVsICYmICFsYWJlbGxlZEJ5ICYmIGRlZmF1bHRMYWJlbCkge1xuICAgIGxhYmVsID0gZGVmYXVsdExhYmVsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICAnYXJpYS1sYWJlbCc6IGxhYmVsLFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbGxlZEJ5XG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjEgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtNdXRhYmxlUmVmT2JqZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlTGF5b3V0RWZmZWN0fSBmcm9tICcuLyc7XG5cbi8qKlxuICogT2ZmZXJzIGFuIG9iamVjdCByZWYgZm9yIGEgZ2l2ZW4gY2FsbGJhY2sgcmVmIG9yIGFuIG9iamVjdCByZWYuIEVzcGVjaWFsbHlcbiAqIGhlbGZwdWwgd2hlbiBwYXNzaW5nIGZvcndhcmRlZCByZWZzIChjcmVhdGVkIHVzaW5nIGBSZWFjdC5mb3J3YXJkUmVmYCkgdG9cbiAqIFJlYWN0IEFyaWEgSG9va3MuXG4gKlxuICogQHBhcmFtIGZvcndhcmRlZFJlZiBUaGUgb3JpZ2luYWwgcmVmIGludGVuZGVkIHRvIGJlIHVzZWQuXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgcmVmIHRoYXQgdXBkYXRlcyB0aGUgZ2l2ZW4gcmVmLlxuICogQHNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZm9yd2FyZGluZy1yZWZzLmh0bWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU9iamVjdFJlZjxUPihmb3J3YXJkZWRSZWY/OiAoKGluc3RhbmNlOiBUIHwgbnVsbCkgPT4gdm9pZCkgfCBNdXRhYmxlUmVmT2JqZWN0PFQgfCBudWxsPiB8IG51bGwpOiBNdXRhYmxlUmVmT2JqZWN0PFQ+IHtcbiAgY29uc3Qgb2JqUmVmID0gdXNlUmVmPFQ+KCk7XG5cbiAgLyoqXG4gICAqIFdlJ3JlIHVzaW5nIGB1c2VMYXlvdXRFZmZlY3RgIGhlcmUgaW5zdGVhZCBvZiBgdXNlRWZmZWN0YCBiZWNhdXNlIHdlIHdhbnRcbiAgICogdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGByZWZgIHZhbHVlIGlzIHVwIHRvIGRhdGUgYmVmb3JlIG90aGVyIHBsYWNlcyBpbiB0aGVcbiAgICogdGhlIGV4ZWN1dGlvbiBjeWNsZSB0cnkgdG8gcmVhZCBpdC5cbiAgICovXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmb3J3YXJkZWRSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZvcndhcmRlZFJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9yd2FyZGVkUmVmKG9ialJlZi5jdXJyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yd2FyZGVkUmVmLmN1cnJlbnQgPSBvYmpSZWYuY3VycmVudDtcbiAgICB9XG4gIH0sIFtmb3J3YXJkZWRSZWZdKTtcblxuICByZXR1cm4gb2JqUmVmO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7RWZmZWN0Q2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbi8vIExpa2UgdXNlRWZmZWN0LCBidXQgb25seSBjYWxsZWQgZm9yIHVwZGF0ZXMgYWZ0ZXIgdGhlIGluaXRpYWwgcmVuZGVyLlxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZUVmZmVjdChlZmZlY3Q6IEVmZmVjdENhbGxiYWNrLCBkZXBlbmRlbmNpZXM6IGFueVtdKSB7XG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQpIHtcbiAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWZmZWN0KCk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgZGVwZW5kZW5jaWVzKTtcbn1cbiIsImltcG9ydCB7UmVmT2JqZWN0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gaGFzUmVzaXplT2JzZXJ2ZXIoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93LlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn1cblxudHlwZSB1c2VSZXNpemVPYnNlcnZlck9wdGlvbnNUeXBlPFQ+ID0ge1xuICByZWY6IFJlZk9iamVjdDxUPixcbiAgb25SZXNpemU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlc2l6ZU9ic2VydmVyPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4ob3B0aW9uczogdXNlUmVzaXplT2JzZXJ2ZXJPcHRpb25zVHlwZTxUPikge1xuICBjb25zdCB7cmVmLCBvblJlc2l6ZX0gPSBvcHRpb25zO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSByZWY/LmN1cnJlbnQ7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFoYXNSZXNpemVPYnNlcnZlcigpKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUsIGZhbHNlKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgZmFsc2UpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCByZXNpemVPYnNlcnZlckluc3RhbmNlID0gbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBpZiAoIWVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb25SZXNpemUoKTtcbiAgICAgIH0pO1xuICAgICAgcmVzaXplT2JzZXJ2ZXJJbnN0YW5jZS5vYnNlcnZlKGVsZW1lbnQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIHJlc2l6ZU9ic2VydmVySW5zdGFuY2UudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICB9LCBbb25SZXNpemUsIHJlZl0pO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TXV0YWJsZVJlZk9iamVjdCwgUmVmT2JqZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdH0gZnJvbSAnLi8nO1xuXG5pbnRlcmZhY2UgQ29udGV4dFZhbHVlPFQ+IHtcbiAgcmVmPzogTXV0YWJsZVJlZk9iamVjdDxUPlxufVxuXG4vLyBTeW5jcyByZWYgZnJvbSBjb250ZXh0IHdpdGggcmVmIHBhc3NlZCB0byBob29rXG5leHBvcnQgZnVuY3Rpb24gdXNlU3luY1JlZjxUPihjb250ZXh0OiBDb250ZXh0VmFsdWU8VD4sIHJlZjogUmVmT2JqZWN0PFQ+KSB7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5yZWYgJiYgcmVmKSB7XG4gICAgICBjb250ZXh0LnJlZi5jdXJyZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb250ZXh0LnJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbY29udGV4dCwgcmVmXSk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlOiBFbGVtZW50KTogRWxlbWVudCB7XG4gIHdoaWxlIChub2RlICYmICFpc1Njcm9sbGFibGUobm9kZSkpIHtcbiAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG5vZGUgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShub2RlOiBFbGVtZW50KTogYm9vbGVhbiB7XG4gIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICByZXR1cm4gLyhhdXRvfHNjcm9sbCkvLnRlc3Qoc3R5bGUub3ZlcmZsb3cgKyBzdHlsZS5vdmVyZmxvd1ggKyBzdHlsZS5vdmVyZmxvd1kpO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgVmlld3BvcnRTaXplIHtcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXJcbn1cblxuLy8gQHRzLWlnbm9yZVxubGV0IHZpc3VhbFZpZXdwb3J0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmlld3BvcnRTaXplKCk6IFZpZXdwb3J0U2l6ZSB7XG4gIGxldCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSgoKSA9PiBnZXRWaWV3cG9ydFNpemUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBVc2UgdmlzdWFsVmlld3BvcnQgYXBpIHRvIHRyYWNrIGF2YWlsYWJsZSBoZWlnaHQgZXZlbiBvbiBpT1MgdmlydHVhbCBrZXlib2FyZCBvcGVuaW5nXG4gICAgbGV0IG9uUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2V0U2l6ZShzaXplID0+IHtcbiAgICAgICAgbGV0IG5ld1NpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcbiAgICAgICAgaWYgKG5ld1NpemUud2lkdGggPT09IHNpemUud2lkdGggJiYgbmV3U2l6ZS5oZWlnaHQgPT09IHNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1NpemU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKCF2aXN1YWxWaWV3cG9ydCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzdWFsVmlld3BvcnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXZpc3VhbFZpZXdwb3J0KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aXN1YWxWaWV3cG9ydC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBzaXplO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFNpemUoKTogVmlld3BvcnRTaXplIHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogdmlzdWFsVmlld3BvcnQ/LndpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogdmlzdWFsVmlld3BvcnQ/LmhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0FyaWFMYWJlbGluZ1Byb3BzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7dXNlTGF5b3V0RWZmZWN0fSBmcm9tICcuL3VzZUxheW91dEVmZmVjdCc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmxldCBkZXNjcmlwdGlvbklkID0gMDtcbmNvbnN0IGRlc2NyaXB0aW9uTm9kZXMgPSBuZXcgTWFwPHN0cmluZywge3JlZkNvdW50OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50fT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBzdHJpbmcpOiBBcmlhTGFiZWxpbmdQcm9wcyB7XG4gIGxldCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkZXNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkZXNjID0gZGVzY3JpcHRpb25Ob2Rlcy5nZXQoZGVzY3JpcHRpb24pO1xuICAgIGlmICghZGVzYykge1xuICAgICAgbGV0IGlkID0gYHJlYWN0LWFyaWEtZGVzY3JpcHRpb24tJHtkZXNjcmlwdGlvbklkKyt9YDtcbiAgICAgIHNldElkKGlkKTtcblxuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG5vZGUuaWQgPSBpZDtcbiAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBkZXNjID0ge3JlZkNvdW50OiAwLCBlbGVtZW50OiBub2RlfTtcbiAgICAgIGRlc2NyaXB0aW9uTm9kZXMuc2V0KGRlc2NyaXB0aW9uLCBkZXNjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SWQoZGVzYy5lbGVtZW50LmlkKTtcbiAgICB9XG5cbiAgICBkZXNjLnJlZkNvdW50Kys7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICgtLWRlc2MucmVmQ291bnQgPT09IDApIHtcbiAgICAgICAgZGVzYy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGVzLmRlbGV0ZShkZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rlc2NyaXB0aW9uXSk7XG5cbiAgcmV0dXJuIHtcbiAgICAnYXJpYS1kZXNjcmliZWRieSc6IGRlc2NyaXB0aW9uID8gaWQgOiB1bmRlZmluZWRcbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiB0ZXN0VXNlckFnZW50KHJlOiBSZWdFeHApIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdy5uYXZpZ2F0b3IgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHdpbmRvdy5uYXZpZ2F0b3JbJ3VzZXJBZ2VudERhdGEnXT8uYnJhbmRzLnNvbWUoKGJyYW5kOiB7YnJhbmQ6IHN0cmluZywgdmVyc2lvbjogc3RyaW5nfSkgPT4gcmUudGVzdChicmFuZC5icmFuZCkpXG4gICkgfHxcbiAgcmUudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG5cbmZ1bmN0aW9uIHRlc3RQbGF0Zm9ybShyZTogUmVnRXhwKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yICE9IG51bGxcbiAgICA/IHJlLnRlc3QoKHdpbmRvdy5uYXZpZ2F0b3JbJ3VzZXJBZ2VudERhdGEnXSB8fCB3aW5kb3cubmF2aWdhdG9yKS5wbGF0Zm9ybSlcbiAgICA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNYWMoKSB7XG4gIHJldHVybiB0ZXN0UGxhdGZvcm0oL15NYWMvaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lQaG9uZSgpIHtcbiAgcmV0dXJuIHRlc3RQbGF0Zm9ybSgvXmlQaG9uZS9pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSVBhZCgpIHtcbiAgcmV0dXJuIHRlc3RQbGF0Zm9ybSgvXmlQYWQvaSkgfHxcbiAgICAvLyBpUGFkT1MgMTMgbGllcyBhbmQgc2F5cyBpdCdzIGEgTWFjLCBidXQgd2UgY2FuIGRpc3Rpbmd1aXNoIGJ5IGRldGVjdGluZyB0b3VjaCBzdXBwb3J0LlxuICAgIChpc01hYygpICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJT1MoKSB7XG4gIHJldHVybiBpc0lQaG9uZSgpIHx8IGlzSVBhZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcHBsZURldmljZSgpIHtcbiAgcmV0dXJuIGlzTWFjKCkgfHwgaXNJT1MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2ViS2l0KCkge1xuICByZXR1cm4gdGVzdFVzZXJBZ2VudCgvQXBwbGVXZWJLaXQvaSkgJiYgIWlzQ2hyb21lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nocm9tZSgpIHtcbiAgcmV0dXJuIHRlc3RVc2VyQWdlbnQoL0Nocm9tZS9pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcbiAgcmV0dXJuIHRlc3RVc2VyQWdlbnQoL0FuZHJvaWQvaSk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjEgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFdmVudDxLIGV4dGVuZHMga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwPihcbiAgcmVmOiBSZWZPYmplY3Q8RXZlbnRUYXJnZXQ+LFxuICBldmVudDogSyxcbiAgaGFuZGxlcjogKHRoaXM6IERvY3VtZW50LCBldjogR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwW0tdKSA9PiBhbnksXG4gIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnNcbikge1xuICBsZXQgaGFuZGxlclJlZiA9IHVzZVJlZihoYW5kbGVyKTtcbiAgaGFuZGxlclJlZi5jdXJyZW50ID0gaGFuZGxlcjtcblxuICBsZXQgaXNEaXNhYmxlZCA9IGhhbmRsZXIgPT0gbnVsbDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVsZW1lbnQgPSByZWYuY3VycmVudDtcbiAgICBsZXQgaGFuZGxlciA9IChlOiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXBbS10pID0+IGhhbmRsZXJSZWYuY3VycmVudC5jYWxsKHRoaXMsIGUpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9O1xuICB9LCBbcmVmLCBldmVudCwgb3B0aW9ucywgaXNEaXNhYmxlZF0pO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7RGlzcGF0Y2gsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdH0gZnJvbSAnLi8nO1xuXG50eXBlIFNldFZhbHVlQWN0aW9uPFM+ID0gKHByZXY6IFMpID0+IEdlbmVyYXRvcjxhbnksIHZvaWQsIHVua25vd24+O1xuXG4vLyBUaGlzIGhvb2sgd29ya3MgbGlrZSBgdXNlU3RhdGVgLCBidXQgd2hlbiBzZXR0aW5nIHRoZSB2YWx1ZSwgeW91IHBhc3MgYSBnZW5lcmF0b3IgZnVuY3Rpb25cbi8vIHRoYXQgY2FuIHlpZWxkIG11bHRpcGxlIHZhbHVlcy4gRWFjaCB5aWVsZGVkIHZhbHVlIHVwZGF0ZXMgdGhlIHN0YXRlIGFuZCB3YWl0cyBmb3IgdGhlIG5leHRcbi8vIGxheW91dCBlZmZlY3QsIHRoZW4gY29udGludWVzIHRoZSBnZW5lcmF0b3IuIFRoaXMgYWxsb3dzIHNlcXVlbnRpYWwgdXBkYXRlcyB0byBzdGF0ZSB0byBiZVxuLy8gd3JpdHRlbiBsaW5lYXJseS5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx1ZUVmZmVjdDxTPihkZWZhdWx0VmFsdWU6IFMgfCAoKCkgPT4gUykpOiBbUywgRGlzcGF0Y2g8U2V0VmFsdWVBY3Rpb248Uz4+XSB7XG4gIGxldCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gIGxldCB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIGxldCBlZmZlY3QgPSB1c2VSZWYobnVsbCk7XG5cbiAgdmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuXG4gIC8vIFN0b3JlIHRoZSBmdW5jdGlvbiBpbiBhIHJlZiBzbyB3ZSBjYW4gYWx3YXlzIGFjY2VzcyB0aGUgY3VycmVudCB2ZXJzaW9uXG4gIC8vIHdoaWNoIGhhcyB0aGUgcHJvcGVyIGB2YWx1ZWAgaW4gc2NvcGUuXG4gIGxldCBuZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuICBuZXh0UmVmLmN1cnJlbnQgPSAoKSA9PiB7XG4gICAgLy8gUnVuIHRoZSBnZW5lcmF0b3IgdG8gdGhlIG5leHQgeWllbGQuXG4gICAgbGV0IG5ld1ZhbHVlID0gZWZmZWN0LmN1cnJlbnQubmV4dCgpO1xuXG4gICAgLy8gSWYgdGhlIGdlbmVyYXRvciBpcyBkb25lLCByZXNldCB0aGUgZWZmZWN0LlxuICAgIGlmIChuZXdWYWx1ZS5kb25lKSB7XG4gICAgICBlZmZlY3QuY3VycmVudCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHZhbHVlIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZhbHVlLFxuICAgIC8vIHRoZW4gY29udGludWUgdG8gdGhlIG5leHQgeWllbGQuIE90aGVyd2lzZSxcbiAgICAvLyBzZXQgdGhlIHZhbHVlIGluIHN0YXRlIGFuZCB3YWl0IGZvciB0aGUgbmV4dCBsYXlvdXQgZWZmZWN0LlxuICAgIGlmICh2YWx1ZSA9PT0gbmV3VmFsdWUudmFsdWUpIHtcbiAgICAgIG5leHRSZWYuY3VycmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZS52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gZWZmZWN0IGN1cnJlbnRseSBydW5uaW5nLCBjb250aW51ZSB0byB0aGUgbmV4dCB5aWVsZC5cbiAgICBpZiAoZWZmZWN0LmN1cnJlbnQpIHtcbiAgICAgIG5leHRSZWYuY3VycmVudCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHF1ZXVlID0gdXNlQ2FsbGJhY2soZm4gPT4ge1xuICAgIGVmZmVjdC5jdXJyZW50ID0gZm4odmFsdWVSZWYuY3VycmVudCk7XG4gICAgbmV4dFJlZi5jdXJyZW50KCk7XG4gIH0sIFtlZmZlY3QsIG5leHRSZWZdKTtcblxuICByZXR1cm4gW3ZhbHVlLCBxdWV1ZV07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBTY3JvbGxzIGBzY3JvbGxWaWV3YCBzbyB0aGF0IGBlbGVtZW50YCBpcyB2aXNpYmxlLlxuICogU2ltaWxhciB0byBgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7YmxvY2s6ICduZWFyZXN0J30pYCAobm90IHN1cHBvcnRlZCBpbiBFZGdlKSxcbiAqIGJ1dCBkb2Vzbid0IGFmZmVjdCBwYXJlbnRzIGFib3ZlIGBzY3JvbGxWaWV3YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KHNjcm9sbFZpZXc6IEhUTUxFbGVtZW50LCBlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICBsZXQgb2Zmc2V0WCA9IHJlbGF0aXZlT2Zmc2V0KHNjcm9sbFZpZXcsIGVsZW1lbnQsICdsZWZ0Jyk7XG4gIGxldCBvZmZzZXRZID0gcmVsYXRpdmVPZmZzZXQoc2Nyb2xsVmlldywgZWxlbWVudCwgJ3RvcCcpO1xuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIGxldCB4ID0gc2Nyb2xsVmlldy5zY3JvbGxMZWZ0O1xuICBsZXQgeSA9IHNjcm9sbFZpZXcuc2Nyb2xsVG9wO1xuICBsZXQgbWF4WCA9IHggKyBzY3JvbGxWaWV3Lm9mZnNldFdpZHRoO1xuICBsZXQgbWF4WSA9IHkgKyBzY3JvbGxWaWV3Lm9mZnNldEhlaWdodDtcblxuICBpZiAob2Zmc2V0WCA8PSB4KSB7XG4gICAgeCA9IG9mZnNldFg7XG4gIH0gZWxzZSBpZiAob2Zmc2V0WCArIHdpZHRoID4gbWF4WCkge1xuICAgIHggKz0gb2Zmc2V0WCArIHdpZHRoIC0gbWF4WDtcbiAgfVxuICBpZiAob2Zmc2V0WSA8PSB5KSB7XG4gICAgeSA9IG9mZnNldFk7XG4gIH0gZWxzZSBpZiAob2Zmc2V0WSArIGhlaWdodCA+IG1heFkpIHtcbiAgICB5ICs9IG9mZnNldFkgKyBoZWlnaHQgLSBtYXhZO1xuICB9XG5cbiAgc2Nyb2xsVmlldy5zY3JvbGxMZWZ0ID0geDtcbiAgc2Nyb2xsVmlldy5zY3JvbGxUb3AgPSB5O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBvZmZzZXQgbGVmdCBvciB0b3AgZnJvbSBjaGlsZCB0byBhbmNlc3RvciBieSBhY2N1bXVsYXRpbmdcbiAqIG9mZnNldExlZnQgb3Igb2Zmc2V0VG9wIHRocm91Z2ggaW50ZXJ2ZW5pbmcgb2Zmc2V0UGFyZW50cy5cbiAqL1xuZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXQoYW5jZXN0b3I6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQsIGF4aXM6ICdsZWZ0J3wndG9wJykge1xuICBjb25zdCBwcm9wID0gYXhpcyA9PT0gJ2xlZnQnID8gJ29mZnNldExlZnQnIDogJ29mZnNldFRvcCc7XG4gIGxldCBzdW0gPSAwO1xuICB3aGlsZSAoY2hpbGQub2Zmc2V0UGFyZW50KSB7XG4gICAgc3VtICs9IGNoaWxkW3Byb3BdO1xuICAgIGlmIChjaGlsZC5vZmZzZXRQYXJlbnQgPT09IGFuY2VzdG9yKSB7XG4gICAgICAvLyBTdG9wIG9uY2Ugd2UgaGF2ZSBmb3VuZCB0aGUgYW5jZXN0b3Igd2UgYXJlIGludGVyZXN0ZWQgaW4uXG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKGNoaWxkLm9mZnNldFBhcmVudC5jb250YWlucyhhbmNlc3RvcikpIHtcbiAgICAgIC8vIElmIHRoZSBhbmNlc3RvciBpcyBub3QgYHBvc2l0aW9uOnJlbGF0aXZlYCwgdGhlbiB3ZSBzdG9wIGF0XG4gICAgICAvLyBfaXRzXyBvZmZzZXQgcGFyZW50LCBhbmQgd2Ugc3VidHJhY3Qgb2ZmIF9pdHNfIG9mZnNldCwgc28gdGhhdFxuICAgICAgLy8gd2UgZW5kIHVwIHdpdGggdGhlIHByb3BlciBvZmZzZXQgZnJvbSBjaGlsZCB0byBhbmNlc3Rvci5cbiAgICAgIHN1bSAtPSBhbmNlc3Rvcltwcm9wXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjaGlsZCA9IGNoaWxkLm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudDtcbiAgfVxuICByZXR1cm4gc3VtO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7aXNJT1MsIHJ1bkFmdGVyVHJhbnNpdGlvbn0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuXG4vLyBTYWZhcmkgb24gaU9TIHN0YXJ0cyBzZWxlY3RpbmcgdGV4dCBvbiBsb25nIHByZXNzLiBUaGUgb25seSB3YXkgdG8gYXZvaWQgdGhpcywgaXQgc2VlbXMsXG4vLyBpcyB0byBhZGQgdXNlci1zZWxlY3Q6IG5vbmUgdG8gdGhlIGVudGlyZSBwYWdlLiBBZGRpbmcgaXQgdG8gdGhlIHByZXNzYWJsZSBlbGVtZW50IHByZXZlbnRzXG4vLyB0aGF0IGVsZW1lbnQgZnJvbSBiZWluZyBzZWxlY3RlZCwgYnV0IG5lYXJieSBlbGVtZW50cyBtYXkgc3RpbGwgcmVjZWl2ZSBzZWxlY3Rpb24uIFdlIGFkZFxuLy8gdXNlci1zZWxlY3Q6IG5vbmUgb24gdG91Y2ggc3RhcnQsIGFuZCByZW1vdmUgaXQgYWdhaW4gb24gdG91Y2ggZW5kIHRvIHByZXZlbnQgdGhpcy5cbi8vIFRoaXMgbXVzdCBiZSBpbXBsZW1lbnRlZCB1c2luZyBnbG9iYWwgc3RhdGUgdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIGJldHdlZW4gbXVsdGlwbGUgZWxlbWVudHMuXG5cbi8vIFRoZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBzdGF0ZXMgZHVlIHRvIHRoZSBkZWxheSBiZWZvcmUgcmVtb3ZpbmcgdXNlci1zZWxlY3Q6IG5vbmUgYWZ0ZXJcbi8vIHBvaW50ZXIgdXAuIFRoZSAnZGVmYXVsdCcgc3RhdGUgYWx3YXlzIHRyYW5zaXRpb25zIHRvIHRoZSAnZGlzYWJsZWQnIHN0YXRlLCB3aGljaCB0cmFuc2l0aW9uc1xuLy8gdG8gJ3Jlc3RvcmluZycuIFRoZSAncmVzdG9yaW5nJyBzdGF0ZSBjYW4gZWl0aGVyIHRyYW5zaXRpb24gYmFjayB0byAnZGlzYWJsZWQnIG9yICdkZWZhdWx0Jy5cblxuLy8gRm9yIG5vbi1pT1MgZGV2aWNlcywgd2UgYXBwbHkgdXNlci1zZWxlY3Q6IG5vbmUgdG8gdGhlIHByZXNzZWQgZWxlbWVudCBpbnN0ZWFkIHRvIGF2b2lkIHBvc3NpYmxlXG4vLyBwZXJmb3JtYW5jZSBpc3N1ZXMgdGhhdCBhcmlzZSBmcm9tIGFwcGx5aW5nIGFuZCByZW1vdmluZyB1c2VyLXNlbGVjdDogbm9uZSB0byB0aGUgZW50aXJlIHBhZ2Vcbi8vIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Fkb2JlL3JlYWN0LXNwZWN0cnVtL2lzc3Vlcy8xNjA5KS5cbnR5cGUgU3RhdGUgPSAnZGVmYXVsdCcgfCAnZGlzYWJsZWQnIHwgJ3Jlc3RvcmluZyc7XG5cbi8vIE5vdGUgdGhhdCBzdGF0ZSBvbmx5IG1hdHRlcnMgaGVyZSBmb3IgaU9TLiBOb24taU9TIGdldHMgdXNlci1zZWxlY3Q6IG5vbmUgYXBwbGllZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbi8vIHJhdGhlciB0aGFuIGF0IHRoZSBkb2N1bWVudCBsZXZlbCBzbyB3ZSBqdXN0IG5lZWQgdG8gYXBwbHkvcmVtb3ZlIHVzZXItc2VsZWN0OiBub25lIGZvciBlYWNoIHByZXNzZWQgZWxlbWVudCBpbmRpdmlkdWFsbHlcbmxldCBzdGF0ZTogU3RhdGUgPSAnZGVmYXVsdCc7XG5sZXQgc2F2ZWRVc2VyU2VsZWN0ID0gJyc7XG5sZXQgbW9kaWZpZWRFbGVtZW50TWFwID0gbmV3IFdlYWtNYXA8SFRNTEVsZW1lbnQsIHN0cmluZz4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVUZXh0U2VsZWN0aW9uKHRhcmdldD86IEhUTUxFbGVtZW50KSB7XG4gIGlmIChpc0lPUygpKSB7XG4gICAgaWYgKHN0YXRlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIHNhdmVkVXNlclNlbGVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc3RhdGUgPSAnZGlzYWJsZWQnO1xuICB9IGVsc2UgaWYgKHRhcmdldCkge1xuICAgIC8vIElmIG5vdCBpT1MsIHN0b3JlIHRoZSB0YXJnZXQncyBvcmlnaW5hbCB1c2VyLXNlbGVjdCBhbmQgY2hhbmdlIHRvIHVzZXItc2VsZWN0OiBub25lXG4gICAgLy8gSWdub3JlIHN0YXRlIHNpbmNlIGl0IGRvZXNuJ3QgYXBwbHkgZm9yIG5vbiBpT1NcbiAgICBtb2RpZmllZEVsZW1lbnRNYXAuc2V0KHRhcmdldCwgdGFyZ2V0LnN0eWxlLnVzZXJTZWxlY3QpO1xuICAgIHRhcmdldC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlVGV4dFNlbGVjdGlvbih0YXJnZXQ/OiBIVE1MRWxlbWVudCkge1xuICBpZiAoaXNJT1MoKSkge1xuICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBhbHJlYWR5IGRlZmF1bHQsIHRoZXJlJ3Mgbm90aGluZyB0byBkby5cbiAgICAvLyBJZiBpdCBpcyByZXN0b3JpbmcsIHRoZW4gdGhlcmUncyBubyBuZWVkIHRvIHF1ZXVlIGEgc2Vjb25kIHJlc3RvcmUuXG4gICAgaWYgKHN0YXRlICE9PSAnZGlzYWJsZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUgPSAncmVzdG9yaW5nJztcblxuICAgIC8vIFRoZXJlIGFwcGVhcnMgdG8gYmUgYSBkZWxheSBvbiBpT1Mgd2hlcmUgc2VsZWN0aW9uIHN0aWxsIG1pZ2h0IG9jY3VyXG4gICAgLy8gYWZ0ZXIgcG9pbnRlciB1cCwgc28gd2FpdCBhIGJpdCBiZWZvcmUgcmVtb3ZpbmcgdXNlci1zZWxlY3QuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBXYWl0IGZvciBhbnkgQ1NTIHRyYW5zaXRpb25zIHRvIGNvbXBsZXRlIHNvIHdlIGRvbid0IHJlY29tcHV0ZSBzdHlsZVxuICAgICAgLy8gZm9yIHRoZSB3aG9sZSBwYWdlIGluIHRoZSBtaWRkbGUgb2YgdGhlIGFuaW1hdGlvbiBhbmQgY2F1c2UgamFuay5cbiAgICAgIHJ1bkFmdGVyVHJhbnNpdGlvbigoKSA9PiB7XG4gICAgICAgIC8vIEF2b2lkIHJhY2UgY29uZGl0aW9uc1xuICAgICAgICBpZiAoc3RhdGUgPT09ICdyZXN0b3JpbmcnKSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gc2F2ZWRVc2VyU2VsZWN0IHx8ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNhdmVkVXNlclNlbGVjdCA9ICcnO1xuICAgICAgICAgIHN0YXRlID0gJ2RlZmF1bHQnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAzMDApO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vdCBpT1MsIHJlc3RvcmUgdGhlIHRhcmdldCdzIG9yaWdpbmFsIHVzZXItc2VsZWN0IGlmIGFueVxuICAgIC8vIElnbm9yZSBzdGF0ZSBzaW5jZSBpdCBkb2Vzbid0IGFwcGx5IGZvciBub24gaU9TXG4gICAgaWYgKHRhcmdldCAmJiBtb2RpZmllZEVsZW1lbnRNYXAuaGFzKHRhcmdldCkpIHtcbiAgICAgIGxldCB0YXJnZXRPbGRVc2VyU2VsZWN0ID0gbW9kaWZpZWRFbGVtZW50TWFwLmdldCh0YXJnZXQpO1xuXG4gICAgICBpZiAodGFyZ2V0LnN0eWxlLnVzZXJTZWxlY3QgPT09ICdub25lJykge1xuICAgICAgICB0YXJnZXQuc3R5bGUudXNlclNlbGVjdCA9IHRhcmdldE9sZFVzZXJTZWxlY3Q7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdzdHlsZScpID09PSAnJykge1xuICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgICAgbW9kaWZpZWRFbGVtZW50TWFwLmRlbGV0ZSh0YXJnZXQpO1xuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Rm9jdXNFdmVudCBhcyBSZWFjdEZvY3VzRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlTGF5b3V0RWZmZWN0fSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5cbi8vIE9yaWdpbmFsIGxpY2Vuc2luZyBmb3IgdGhlIGZvbGxvd2luZyBtZXRob2QgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTk9USUNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvM2M3MTNkNTEzMTk1YTUzNzg4YjNmOGJiNGI3MDI3OWQ2OGIxNWJjYy9wYWNrYWdlcy9yZWFjdC1pbnRlcmFjdGlvbnMvZXZlbnRzL3NyYy9kb20vc2hhcmVkL2luZGV4LmpzI0w3NC1MODdcblxuLy8gS2V5Ym9hcmRzLCBBc3Npc3RpdmUgVGVjaG5vbG9naWVzLCBhbmQgZWxlbWVudC5jbGljaygpIGFsbCBwcm9kdWNlIGEgXCJ2aXJ0dWFsXCJcbi8vIGNsaWNrIGV2ZW50LiBUaGlzIGlzIGEgbWV0aG9kIG9mIGluZmVycmluZyBzdWNoIGNsaWNrcy4gRXZlcnkgYnJvd3NlciBleGNlcHRcbi8vIElFIDExIG9ubHkgc2V0cyBhIHplcm8gdmFsdWUgb2YgXCJkZXRhaWxcIiBmb3IgY2xpY2sgZXZlbnRzIHRoYXQgYXJlIFwidmlydHVhbFwiLlxuLy8gSG93ZXZlciwgSUUgMTEgdXNlcyBhIHplcm8gdmFsdWUgZm9yIGFsbCBjbGljayBldmVudHMuIEZvciBJRSAxMSB3ZSByZWx5IG9uXG4vLyB0aGUgcXVpcmsgdGhhdCBpdCBwcm9kdWNlcyBjbGljayBldmVudHMgdGhhdCBhcmUgb2YgdHlwZSBQb2ludGVyRXZlbnQsIGFuZFxuLy8gd2hlcmUgb25seSB0aGUgXCJ2aXJ0dWFsXCIgY2xpY2sgbGFja3MgYSBwb2ludGVyVHlwZSBmaWVsZC5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlydHVhbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50IHwgUG9pbnRlckV2ZW50KTogYm9vbGVhbiB7XG4gIC8vIEpBV1MvTlZEQSB3aXRoIEZpcmVmb3guXG4gIGlmICgoZXZlbnQgYXMgYW55KS5tb3pJbnB1dFNvdXJjZSA9PT0gMCAmJiBldmVudC5pc1RydXN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBldmVudC5kZXRhaWwgPT09IDAgJiYgIShldmVudCBhcyBQb2ludGVyRXZlbnQpLnBvaW50ZXJUeXBlO1xufVxuXG5leHBvcnQgY2xhc3MgU3ludGhldGljRm9jdXNFdmVudCBpbXBsZW1lbnRzIFJlYWN0Rm9jdXNFdmVudCB7XG4gIG5hdGl2ZUV2ZW50OiBGb2N1c0V2ZW50O1xuICB0YXJnZXQ6IEVsZW1lbnQ7XG4gIGN1cnJlbnRUYXJnZXQ6IEVsZW1lbnQ7XG4gIHJlbGF0ZWRUYXJnZXQ6IEVsZW1lbnQ7XG4gIGJ1YmJsZXM6IGJvb2xlYW47XG4gIGNhbmNlbGFibGU6IGJvb2xlYW47XG4gIGRlZmF1bHRQcmV2ZW50ZWQ6IGJvb2xlYW47XG4gIGV2ZW50UGhhc2U6IG51bWJlcjtcbiAgaXNUcnVzdGVkOiBib29sZWFuO1xuICB0aW1lU3RhbXA6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgbmF0aXZlRXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLm5hdGl2ZUV2ZW50ID0gbmF0aXZlRXZlbnQ7XG4gICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSBuYXRpdmVFdmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgdGhpcy5yZWxhdGVkVGFyZ2V0ID0gbmF0aXZlRXZlbnQucmVsYXRlZFRhcmdldCBhcyBFbGVtZW50O1xuICAgIHRoaXMuYnViYmxlcyA9IG5hdGl2ZUV2ZW50LmJ1YmJsZXM7XG4gICAgdGhpcy5jYW5jZWxhYmxlID0gbmF0aXZlRXZlbnQuY2FuY2VsYWJsZTtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBuYXRpdmVFdmVudC5kZWZhdWx0UHJldmVudGVkO1xuICAgIHRoaXMuZXZlbnRQaGFzZSA9IG5hdGl2ZUV2ZW50LmV2ZW50UGhhc2U7XG4gICAgdGhpcy5pc1RydXN0ZWQgPSBuYXRpdmVFdmVudC5pc1RydXN0ZWQ7XG4gICAgdGhpcy50aW1lU3RhbXAgPSBuYXRpdmVFdmVudC50aW1lU3RhbXA7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVFdmVudC5kZWZhdWx0UHJldmVudGVkO1xuICB9XG5cbiAgcHJldmVudERlZmF1bHQoKTogdm9pZCB7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICB0aGlzLm5hdGl2ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5uYXRpdmVFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gKCkgPT4gdHJ1ZTtcbiAgfVxuXG4gIGlzUHJvcGFnYXRpb25TdG9wcGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHBlcnNpc3QoKSB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3ludGhldGljQmx1ckV2ZW50KG9uQmx1cjogKGU6IFJlYWN0Rm9jdXNFdmVudCkgPT4gdm9pZCkge1xuICBsZXQgc3RhdGVSZWYgPSB1c2VSZWYoe1xuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgb25CbHVyLFxuICAgIG9ic2VydmVyOiBudWxsIGFzIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSk7XG4gIHN0YXRlUmVmLmN1cnJlbnQub25CbHVyID0gb25CbHVyO1xuXG4gIC8vIENsZWFuIHVwIE11dGF0aW9uT2JzZXJ2ZXIgb24gdW5tb3VudC4gU2VlIGJlbG93LlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gc3RhdGVSZWYuY3VycmVudDtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLm9ic2VydmVyKSB7XG4gICAgICAgIHN0YXRlLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgc3RhdGUub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBkdXJpbmcgYSBSZWFjdCBvbkZvY3VzIGV2ZW50LlxuICByZXR1cm4gdXNlQ2FsbGJhY2soKGU6IFJlYWN0Rm9jdXNFdmVudCkgPT4ge1xuICAgIC8vIFJlYWN0IGRvZXMgbm90IGZpcmUgb25CbHVyIHdoZW4gYW4gZWxlbWVudCBpcyBkaXNhYmxlZC4gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy85MTQyXG4gICAgLy8gTW9zdCBicm93c2VycyBmaXJlIGEgbmF0aXZlIGZvY3Vzb3V0IGV2ZW50IGluIHRoaXMgY2FzZSwgZXhjZXB0IGZvciBGaXJlZm94LiBJbiB0aGF0IGNhc2UsIHdlIHVzZSBhXG4gICAgLy8gTXV0YXRpb25PYnNlcnZlciB0byB3YXRjaCBmb3IgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSwgYW5kIGRpc3BhdGNoIHRoZXNlIGV2ZW50cyBvdXJzZWx2ZXMuXG4gICAgLy8gRm9yIGJyb3dzZXJzIHRoYXQgZG8sIGZvY3Vzb3V0IGZpcmVzIGJlZm9yZSB0aGUgTXV0YXRpb25PYnNlcnZlciwgc28gb25CbHVyIHNob3VsZCBub3QgZmlyZSB0d2ljZS5cbiAgICBpZiAoXG4gICAgICBlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8XG4gICAgICBlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgIGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCB8fFxuICAgICAgZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudFxuICAgICkge1xuICAgICAgc3RhdGVSZWYuY3VycmVudC5pc0ZvY3VzZWQgPSB0cnVlO1xuXG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBsZXQgb25CbHVySGFuZGxlciA9IChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgIHN0YXRlUmVmLmN1cnJlbnQuaXNGb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRhcmdldC5kaXNhYmxlZCkge1xuICAgICAgICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBkaXNwYXRjaCBhIChmYWtlKSBSZWFjdCBzeW50aGV0aWMgZXZlbnQuXG4gICAgICAgICAgc3RhdGVSZWYuY3VycmVudC5vbkJsdXI/LihuZXcgU3ludGhldGljRm9jdXNFdmVudCgnYmx1cicsIGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG5vIGxvbmdlciBuZWVkIHRoZSBNdXRhdGlvbk9ic2VydmVyIG9uY2UgdGhlIHRhcmdldCBpcyBibHVycmVkLlxuICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudC5vYnNlcnZlcikge1xuICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXJIYW5kbGVyLCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICBzdGF0ZVJlZi5jdXJyZW50Lm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudC5pc0ZvY3VzZWQgJiYgdGFyZ2V0LmRpc2FibGVkKSB7XG4gICAgICAgICAgc3RhdGVSZWYuY3VycmVudC5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoJ2JsdXInKSk7XG4gICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoJ2ZvY3Vzb3V0Jywge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZVJlZi5jdXJyZW50Lm9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7YXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbJ2Rpc2FibGVkJ119KTtcbiAgICB9XG4gIH0sIFtdKTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1ByZXNzUHJvcHN9IGZyb20gJy4vdXNlUHJlc3MnO1xuaW1wb3J0IFJlYWN0LCB7TXV0YWJsZVJlZk9iamVjdH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSVByZXNzUmVzcG9uZGVyQ29udGV4dCBleHRlbmRzIFByZXNzUHJvcHMge1xuICByZWdpc3RlcigpOiB2b2lkLFxuICByZWY/OiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxFbGVtZW50PlxufVxuXG5leHBvcnQgY29uc3QgUHJlc3NSZXNwb25kZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxJUHJlc3NSZXNwb25kZXJDb250ZXh0PihudWxsKTtcblByZXNzUmVzcG9uZGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdQcmVzc1Jlc3BvbmRlckNvbnRleHQnO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFBvcnRpb25zIG9mIHRoZSBjb2RlIGluIHRoaXMgZmlsZSBhcmUgYmFzZWQgb24gY29kZSBmcm9tIHJlYWN0LlxuLy8gT3JpZ2luYWwgbGljZW5zaW5nIGZvciB0aGUgZm9sbG93aW5nIGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIE5PVElDRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC90cmVlL2NjN2MxYWVjZTQ2YTZiNjliNDE5NThkNzMxZTBmZDI3Yzk0YmZjNmMvcGFja2FnZXMvcmVhY3QtaW50ZXJhY3Rpb25zXG5cbmltcG9ydCB7ZGlzYWJsZVRleHRTZWxlY3Rpb24sIHJlc3RvcmVUZXh0U2VsZWN0aW9ufSBmcm9tICcuL3RleHRTZWxlY3Rpb24nO1xuaW1wb3J0IHtmb2N1c1dpdGhvdXRTY3JvbGxpbmcsIG1lcmdlUHJvcHMsIHVzZUdsb2JhbExpc3RlbmVycywgdXNlU3luY1JlZn0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IHtIVE1MQXR0cmlidXRlcywgUmVmT2JqZWN0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNWaXJ0dWFsQ2xpY2t9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtQb2ludGVyVHlwZSwgUHJlc3NFdmVudHN9IGZyb20gJ0ByZWFjdC10eXBlcy9zaGFyZWQnO1xuaW1wb3J0IHtQcmVzc1Jlc3BvbmRlckNvbnRleHR9IGZyb20gJy4vY29udGV4dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc3NQcm9wcyBleHRlbmRzIFByZXNzRXZlbnRzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHRhcmdldCBpcyBpbiBhIGNvbnRyb2xsZWQgcHJlc3Mgc3RhdGUgKGUuZy4gYW4gb3ZlcmxheSBpdCB0cmlnZ2VycyBpcyBvcGVuKS4gKi9cbiAgaXNQcmVzc2VkPzogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHByZXNzIGV2ZW50cyBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGFyZ2V0IHNob3VsZCBub3QgcmVjZWl2ZSBmb2N1cyBvbiBwcmVzcy4gKi9cbiAgcHJldmVudEZvY3VzT25QcmVzcz86IGJvb2xlYW4sXG4gIC8qKlxuICAgKiBXaGV0aGVyIHByZXNzIGV2ZW50cyBzaG91bGQgYmUgY2FuY2VsZWQgd2hlbiB0aGUgcG9pbnRlciBsZWF2ZXMgdGhlIHRhcmdldCB3aGlsZSBwcmVzc2VkLlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIGlzIGBmYWxzZWAsIHdoaWNoIG1lYW5zIGlmIHRoZSBwb2ludGVyIHJldHVybnMgYmFjayBvdmVyIHRoZSB0YXJnZXQgd2hpbGVcbiAgICogc3RpbGwgcHJlc3NlZCwgb25QcmVzc1N0YXJ0IHdpbGwgYmUgZmlyZWQgYWdhaW4uIElmIHNldCB0byBgdHJ1ZWAsIHRoZSBwcmVzcyBpcyBjYW5jZWxlZFxuICAgKiB3aGVuIHRoZSBwb2ludGVyIGxlYXZlcyB0aGUgdGFyZ2V0IGFuZCBvblByZXNzU3RhcnQgd2lsbCBub3QgYmUgZmlyZWQgaWYgdGhlIHBvaW50ZXIgcmV0dXJucy5cbiAgICovXG4gIHNob3VsZENhbmNlbE9uUG9pbnRlckV4aXQ/OiBib29sZWFuLFxuICAvKiogV2hldGhlciB0ZXh0IHNlbGVjdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBvbiB0aGUgcHJlc3NhYmxlIGVsZW1lbnQuICovXG4gIGFsbG93VGV4dFNlbGVjdGlvbk9uUHJlc3M/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc3NIb29rUHJvcHMgZXh0ZW5kcyBQcmVzc1Byb3BzIHtcbiAgLyoqIEEgcmVmIHRvIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cbiAgcmVmPzogUmVmT2JqZWN0PEhUTUxFbGVtZW50PlxufVxuXG5pbnRlcmZhY2UgUHJlc3NTdGF0ZSB7XG4gIGlzUHJlc3NlZDogYm9vbGVhbixcbiAgaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50czogYm9vbGVhbixcbiAgaWdub3JlQ2xpY2tBZnRlclByZXNzOiBib29sZWFuLFxuICBkaWRGaXJlUHJlc3NTdGFydDogYm9vbGVhbixcbiAgYWN0aXZlUG9pbnRlcklkOiBhbnksXG4gIHRhcmdldDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICBpc092ZXJUYXJnZXQ6IGJvb2xlYW4sXG4gIHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSxcbiAgdXNlclNlbGVjdD86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgRXZlbnRCYXNlIHtcbiAgY3VycmVudFRhcmdldDogRXZlbnRUYXJnZXQsXG4gIHNoaWZ0S2V5OiBib29sZWFuLFxuICBjdHJsS2V5OiBib29sZWFuLFxuICBtZXRhS2V5OiBib29sZWFuLFxuICBhbHRLZXk6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzc1Jlc3VsdCB7XG4gIC8qKiBXaGV0aGVyIHRoZSB0YXJnZXQgaXMgY3VycmVudGx5IHByZXNzZWQuICovXG4gIGlzUHJlc3NlZDogYm9vbGVhbixcbiAgLyoqIFByb3BzIHRvIHNwcmVhZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG4gIHByZXNzUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PlxufVxuXG5mdW5jdGlvbiB1c2VQcmVzc1Jlc3BvbmRlckNvbnRleHQocHJvcHM6IFByZXNzSG9va1Byb3BzKTogUHJlc3NIb29rUHJvcHMge1xuICAvLyBDb25zdW1lIGNvbnRleHQgZnJvbSA8UHJlc3NSZXNwb25kZXI+IGFuZCBtZXJnZSB3aXRoIHByb3BzLlxuICBsZXQgY29udGV4dCA9IHVzZUNvbnRleHQoUHJlc3NSZXNwb25kZXJDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQpIHtcbiAgICBsZXQge3JlZ2lzdGVyLCAuLi5jb250ZXh0UHJvcHN9ID0gY29udGV4dDtcbiAgICBwcm9wcyA9IG1lcmdlUHJvcHMoY29udGV4dFByb3BzLCBwcm9wcykgYXMgUHJlc3NIb29rUHJvcHM7XG4gICAgcmVnaXN0ZXIoKTtcbiAgfVxuICB1c2VTeW5jUmVmKGNvbnRleHQsIHByb3BzLnJlZik7XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgcHJlc3MgaW50ZXJhY3Rpb25zIGFjcm9zcyBtb3VzZSwgdG91Y2gsIGtleWJvYXJkLCBhbmQgc2NyZWVuIHJlYWRlcnMuXG4gKiBJdCBub3JtYWxpemVzIGJlaGF2aW9yIGFjcm9zcyBicm93c2VycyBhbmQgcGxhdGZvcm1zLCBhbmQgaGFuZGxlcyBtYW55IG51YW5jZXNcbiAqIG9mIGRlYWxpbmcgd2l0aCBwb2ludGVyIGFuZCBrZXlib2FyZCBldmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmVzcyhwcm9wczogUHJlc3NIb29rUHJvcHMpOiBQcmVzc1Jlc3VsdCB7XG4gIGxldCB7XG4gICAgb25QcmVzcyxcbiAgICBvblByZXNzQ2hhbmdlLFxuICAgIG9uUHJlc3NTdGFydCxcbiAgICBvblByZXNzRW5kLFxuICAgIG9uUHJlc3NVcCxcbiAgICBpc0Rpc2FibGVkLFxuICAgIGlzUHJlc3NlZDogaXNQcmVzc2VkUHJvcCxcbiAgICBwcmV2ZW50Rm9jdXNPblByZXNzLFxuICAgIHNob3VsZENhbmNlbE9uUG9pbnRlckV4aXQsXG4gICAgYWxsb3dUZXh0U2VsZWN0aW9uT25QcmVzcyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgcmVmOiBfLCAvLyBSZW1vdmluZyBgcmVmYCBmcm9tIGBkb21Qcm9wc2AgYmVjYXVzZSBUeXBlU2NyaXB0IGlzIGR1bWJcbiAgICAuLi5kb21Qcm9wc1xuICB9ID0gdXNlUHJlc3NSZXNwb25kZXJDb250ZXh0KHByb3BzKTtcbiAgbGV0IHByb3BzUmVmID0gdXNlUmVmPFByZXNzSG9va1Byb3BzPihudWxsKTtcbiAgcHJvcHNSZWYuY3VycmVudCA9IHtvblByZXNzLCBvblByZXNzQ2hhbmdlLCBvblByZXNzU3RhcnQsIG9uUHJlc3NFbmQsIG9uUHJlc3NVcCwgaXNEaXNhYmxlZCwgc2hvdWxkQ2FuY2VsT25Qb2ludGVyRXhpdH07XG5cbiAgbGV0IFtpc1ByZXNzZWQsIHNldFByZXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgcmVmID0gdXNlUmVmPFByZXNzU3RhdGU+KHtcbiAgICBpc1ByZXNzZWQ6IGZhbHNlLFxuICAgIGlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHM6IGZhbHNlLFxuICAgIGlnbm9yZUNsaWNrQWZ0ZXJQcmVzczogZmFsc2UsXG4gICAgZGlkRmlyZVByZXNzU3RhcnQ6IGZhbHNlLFxuICAgIGFjdGl2ZVBvaW50ZXJJZDogbnVsbCxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgaXNPdmVyVGFyZ2V0OiBmYWxzZSxcbiAgICBwb2ludGVyVHlwZTogbnVsbFxuICB9KTtcblxuICBsZXQge2FkZEdsb2JhbExpc3RlbmVyLCByZW1vdmVBbGxHbG9iYWxMaXN0ZW5lcnN9ID0gdXNlR2xvYmFsTGlzdGVuZXJzKCk7XG5cbiAgbGV0IHByZXNzUHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgc3RhdGUgPSByZWYuY3VycmVudDtcbiAgICBsZXQgdHJpZ2dlclByZXNzU3RhcnQgPSAob3JpZ2luYWxFdmVudDogRXZlbnRCYXNlLCBwb2ludGVyVHlwZTogUG9pbnRlclR5cGUpID0+IHtcbiAgICAgIGxldCB7b25QcmVzc1N0YXJ0LCBvblByZXNzQ2hhbmdlLCBpc0Rpc2FibGVkfSA9IHByb3BzUmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCBzdGF0ZS5kaWRGaXJlUHJlc3NTdGFydCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvblByZXNzU3RhcnQpIHtcbiAgICAgICAgb25QcmVzc1N0YXJ0KHtcbiAgICAgICAgICB0eXBlOiAncHJlc3NzdGFydCcsXG4gICAgICAgICAgcG9pbnRlclR5cGUsXG4gICAgICAgICAgdGFyZ2V0OiBvcmlnaW5hbEV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgc2hpZnRLZXk6IG9yaWdpbmFsRXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgbWV0YUtleTogb3JpZ2luYWxFdmVudC5tZXRhS2V5LFxuICAgICAgICAgIGN0cmxLZXk6IG9yaWdpbmFsRXZlbnQuY3RybEtleSxcbiAgICAgICAgICBhbHRLZXk6IG9yaWdpbmFsRXZlbnQuYWx0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob25QcmVzc0NoYW5nZSkge1xuICAgICAgICBvblByZXNzQ2hhbmdlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5kaWRGaXJlUHJlc3NTdGFydCA9IHRydWU7XG4gICAgICBzZXRQcmVzc2VkKHRydWUpO1xuICAgIH07XG5cbiAgICBsZXQgdHJpZ2dlclByZXNzRW5kID0gKG9yaWdpbmFsRXZlbnQ6IEV2ZW50QmFzZSwgcG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlLCB3YXNQcmVzc2VkID0gdHJ1ZSkgPT4ge1xuICAgICAgbGV0IHtvblByZXNzRW5kLCBvblByZXNzQ2hhbmdlLCBvblByZXNzLCBpc0Rpc2FibGVkfSA9IHByb3BzUmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoIXN0YXRlLmRpZEZpcmVQcmVzc1N0YXJ0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuaWdub3JlQ2xpY2tBZnRlclByZXNzID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmRpZEZpcmVQcmVzc1N0YXJ0ID0gZmFsc2U7XG5cbiAgICAgIGlmIChvblByZXNzRW5kKSB7XG4gICAgICAgIG9uUHJlc3NFbmQoe1xuICAgICAgICAgIHR5cGU6ICdwcmVzc2VuZCcsXG4gICAgICAgICAgcG9pbnRlclR5cGUsXG4gICAgICAgICAgdGFyZ2V0OiBvcmlnaW5hbEV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgc2hpZnRLZXk6IG9yaWdpbmFsRXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgbWV0YUtleTogb3JpZ2luYWxFdmVudC5tZXRhS2V5LFxuICAgICAgICAgIGN0cmxLZXk6IG9yaWdpbmFsRXZlbnQuY3RybEtleSxcbiAgICAgICAgICBhbHRLZXk6IG9yaWdpbmFsRXZlbnQuYWx0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob25QcmVzc0NoYW5nZSkge1xuICAgICAgICBvblByZXNzQ2hhbmdlKGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgc2V0UHJlc3NlZChmYWxzZSk7XG5cbiAgICAgIGlmIChvblByZXNzICYmIHdhc1ByZXNzZWQgJiYgIWlzRGlzYWJsZWQpIHtcbiAgICAgICAgb25QcmVzcyh7XG4gICAgICAgICAgdHlwZTogJ3ByZXNzJyxcbiAgICAgICAgICBwb2ludGVyVHlwZSxcbiAgICAgICAgICB0YXJnZXQ6IG9yaWdpbmFsRXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICBzaGlmdEtleTogb3JpZ2luYWxFdmVudC5zaGlmdEtleSxcbiAgICAgICAgICBtZXRhS2V5OiBvcmlnaW5hbEV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgY3RybEtleTogb3JpZ2luYWxFdmVudC5jdHJsS2V5LFxuICAgICAgICAgIGFsdEtleTogb3JpZ2luYWxFdmVudC5hbHRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCB0cmlnZ2VyUHJlc3NVcCA9IChvcmlnaW5hbEV2ZW50OiBFdmVudEJhc2UsIHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSkgPT4ge1xuICAgICAgbGV0IHtvblByZXNzVXAsIGlzRGlzYWJsZWR9ID0gcHJvcHNSZWYuY3VycmVudDtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uUHJlc3NVcCkge1xuICAgICAgICBvblByZXNzVXAoe1xuICAgICAgICAgIHR5cGU6ICdwcmVzc3VwJyxcbiAgICAgICAgICBwb2ludGVyVHlwZSxcbiAgICAgICAgICB0YXJnZXQ6IG9yaWdpbmFsRXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICBzaGlmdEtleTogb3JpZ2luYWxFdmVudC5zaGlmdEtleSxcbiAgICAgICAgICBtZXRhS2V5OiBvcmlnaW5hbEV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgY3RybEtleTogb3JpZ2luYWxFdmVudC5jdHJsS2V5LFxuICAgICAgICAgIGFsdEtleTogb3JpZ2luYWxFdmVudC5hbHRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBjYW5jZWwgPSAoZTogRXZlbnRCYXNlKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuaXNQcmVzc2VkKSB7XG4gICAgICAgIGlmIChzdGF0ZS5pc092ZXJUYXJnZXQpIHtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoY3JlYXRlRXZlbnQoc3RhdGUudGFyZ2V0LCBlKSwgc3RhdGUucG9pbnRlclR5cGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmFjdGl2ZVBvaW50ZXJJZCA9IG51bGw7XG4gICAgICAgIHN0YXRlLnBvaW50ZXJUeXBlID0gbnVsbDtcbiAgICAgICAgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAgIGlmICghYWxsb3dUZXh0U2VsZWN0aW9uT25QcmVzcykge1xuICAgICAgICAgIHJlc3RvcmVUZXh0U2VsZWN0aW9uKHN0YXRlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHByZXNzUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiA9IHtcbiAgICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkS2V5Ym9hcmRFdmVudChlLm5hdGl2ZUV2ZW50KSAmJiBlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0S2V5Ym9hcmQoZS50YXJnZXQgYXMgRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIC8vIElmIHRoZSBldmVudCBpcyByZXBlYXRpbmcsIGl0IG1heSBoYXZlIHN0YXJ0ZWQgb24gYSBkaWZmZXJlbnQgZWxlbWVudFxuICAgICAgICAgIC8vIGFmdGVyIHdoaWNoIGZvY3VzIG1vdmVkIHRvIHRoZSBjdXJyZW50IGVsZW1lbnQuIElnbm9yZSB0aGVzZSBldmVudHMgYW5kXG4gICAgICAgICAgLy8gb25seSBoYW5kbGUgdGhlIGZpcnN0IGtleSBkb3duIGV2ZW50LlxuICAgICAgICAgIGlmICghc3RhdGUuaXNQcmVzc2VkICYmICFlLnJlcGVhdCkge1xuICAgICAgICAgICAgc3RhdGUudGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgc3RhdGUuaXNQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyaWdnZXJQcmVzc1N0YXJ0KGUsICdrZXlib2FyZCcpO1xuXG4gICAgICAgICAgICAvLyBGb2N1cyBtYXkgbW92ZSBiZWZvcmUgdGhlIGtleSB1cCBldmVudCwgc28gcmVnaXN0ZXIgdGhlIGV2ZW50IG9uIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgc2FtZSBlbGVtZW50IHdoZXJlIHRoZSBrZXkgZG93biBldmVudCBvY2N1cnJlZC5cbiAgICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKGRvY3VtZW50LCAna2V5dXAnLCBvbktleVVwLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25LZXlVcChlKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkS2V5Ym9hcmRFdmVudChlLm5hdGl2ZUV2ZW50KSAmJiAhZS5yZXBlYXQgJiYgZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHRyaWdnZXJQcmVzc1VwKGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksICdrZXlib2FyZCcpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25DbGljayhlKSB7XG4gICAgICAgIGlmIChlICYmICFlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUgJiYgZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdHJpZ2dlcmVkIGZyb20gYSBzY3JlZW4gcmVhZGVyIG9yIGJ5IHVzaW5nIGVsZW1lbnQuY2xpY2soKSxcbiAgICAgICAgICAvLyB0cmlnZ2VyIGFzIGlmIGl0IHdlcmUgYSBrZXlib2FyZCBjbGljay5cbiAgICAgICAgICBpZiAoIXN0YXRlLmlnbm9yZUNsaWNrQWZ0ZXJQcmVzcyAmJiAhc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyAmJiAoc3RhdGUucG9pbnRlclR5cGUgPT09ICd2aXJ0dWFsJyB8fCBpc1ZpcnR1YWxDbGljayhlLm5hdGl2ZUV2ZW50KSkpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgZWxlbWVudCByZWNlaXZlcyBmb2N1cyAoVm9pY2VPdmVyIG9uIGlPUyBkb2VzIG5vdCBkbyB0aGlzKVxuICAgICAgICAgICAgaWYgKCFpc0Rpc2FibGVkICYmICFwcmV2ZW50Rm9jdXNPblByZXNzKSB7XG4gICAgICAgICAgICAgIGZvY3VzV2l0aG91dFNjcm9sbGluZyhlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cmlnZ2VyUHJlc3NTdGFydChlLCAndmlydHVhbCcpO1xuICAgICAgICAgICAgdHJpZ2dlclByZXNzVXAoZSwgJ3ZpcnR1YWwnKTtcbiAgICAgICAgICAgIHRyaWdnZXJQcmVzc0VuZChlLCAndmlydHVhbCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5pZ25vcmVDbGlja0FmdGVyUHJlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgb25LZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoc3RhdGUuaXNQcmVzc2VkICYmIGlzVmFsaWRLZXlib2FyZEV2ZW50KGUpKSB7XG4gICAgICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdEtleWJvYXJkKGUudGFyZ2V0IGFzIEVsZW1lbnQpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgc3RhdGUuaXNQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgdHJpZ2dlclByZXNzRW5kKGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksICdrZXlib2FyZCcsIHN0YXRlLnRhcmdldC5jb250YWlucyh0YXJnZXQpKTtcbiAgICAgICAgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIGxpbmssIHRyaWdnZXIgdGhlIGNsaWNrIG1ldGhvZCB0byBvcGVuIHRoZSBVUkwsXG4gICAgICAgIC8vIGJ1dCBkZWZlciB0cmlnZ2VyaW5nIHByZXNzRW5kIHVudGlsIG9uQ2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICAgICAgaWYgKHN0YXRlLnRhcmdldC5jb250YWlucyh0YXJnZXQpICYmIGlzSFRNTEFuY2hvckxpbmsoc3RhdGUudGFyZ2V0KSB8fCBzdGF0ZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdsaW5rJykge1xuICAgICAgICAgIHN0YXRlLnRhcmdldC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJlc3NQcm9wcy5vblBvaW50ZXJEb3duID0gKGUpID0+IHtcbiAgICAgICAgLy8gT25seSBoYW5kbGUgbGVmdCBjbGlja3MsIGFuZCBpZ25vcmUgZXZlbnRzIHRoYXQgYnViYmxlZCB0aHJvdWdoIHBvcnRhbHMuXG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCB8fCAhZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlPUyBzYWZhcmkgZmlyZXMgcG9pbnRlciBldmVudHMgZnJvbSBWb2ljZU92ZXIgd2l0aCBpbmNvcnJlY3QgY29vcmRpbmF0ZXMvdGFyZ2V0LlxuICAgICAgICAvLyBJZ25vcmUgYW5kIGxldCB0aGUgb25DbGljayBoYW5kbGVyIHRha2UgY2FyZSBvZiBpdCBpbnN0ZWFkLlxuICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjIyNjI3XG4gICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMjMyMDJcbiAgICAgICAgaWYgKGlzVmlydHVhbFBvaW50ZXJFdmVudChlLm5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIHN0YXRlLnBvaW50ZXJUeXBlID0gJ3ZpcnR1YWwnO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIER1ZSB0byBicm93c2VyIGluY29uc2lzdGVuY2llcywgZXNwZWNpYWxseSBvbiBtb2JpbGUgYnJvd3NlcnMsIHdlIHByZXZlbnRcbiAgICAgICAgLy8gZGVmYXVsdCBvbiBwb2ludGVyIGRvd24gYW5kIGhhbmRsZSBmb2N1c2luZyB0aGUgcHJlc3NhYmxlIGVsZW1lbnQgb3Vyc2VsdmVzLlxuICAgICAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHQoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLnBvaW50ZXJUeXBlID0gZS5wb2ludGVyVHlwZTtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIXN0YXRlLmlzUHJlc3NlZCkge1xuICAgICAgICAgIHN0YXRlLmlzUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgICBzdGF0ZS5hY3RpdmVQb2ludGVySWQgPSBlLnBvaW50ZXJJZDtcbiAgICAgICAgICBzdGF0ZS50YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICBpZiAoIWlzRGlzYWJsZWQgJiYgIXByZXZlbnRGb2N1c09uUHJlc3MpIHtcbiAgICAgICAgICAgIGZvY3VzV2l0aG91dFNjcm9sbGluZyhlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghYWxsb3dUZXh0U2VsZWN0aW9uT25QcmVzcykge1xuICAgICAgICAgICAgZGlzYWJsZVRleHRTZWxlY3Rpb24oc3RhdGUudGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cmlnZ2VyUHJlc3NTdGFydChlLCBzdGF0ZS5wb2ludGVyVHlwZSk7XG5cbiAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UpO1xuICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKGRvY3VtZW50LCAncG9pbnRlcnVwJywgb25Qb2ludGVyVXAsIGZhbHNlKTtcbiAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcihkb2N1bWVudCwgJ3BvaW50ZXJjYW5jZWwnLCBvblBvaW50ZXJDYW5jZWwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vbk1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIC8vIENocm9tZSBhbmQgRmlyZWZveCBvbiB0b3VjaCBXaW5kb3dzIGRldmljZXMgcmVxdWlyZSBtb3VzZSBkb3duIGV2ZW50c1xuICAgICAgICAgIC8vIHRvIGJlIGNhbmNlbGVkIGluIGFkZGl0aW9uIHRvIHBvaW50ZXIgZXZlbnRzLCBvciBhbiBleHRyYSBhc3luY2hyb25vdXNcbiAgICAgICAgICAvLyBmb2N1cyBldmVudCB3aWxsIGJlIGZpcmVkLlxuICAgICAgICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vblBvaW50ZXJVcCA9IChlKSA9PiB7XG4gICAgICAgIC8vIGlPUyBmaXJlcyBwb2ludGVydXAgd2l0aCB6ZXJvIHdpZHRoIGFuZCBoZWlnaHQsIHNvIGNoZWNrIHRoZSBwb2ludGVyVHlwZSByZWNvcmRlZCBkdXJpbmcgcG9pbnRlcmRvd24uXG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSB8fCBzdGF0ZS5wb2ludGVyVHlwZSA9PT0gJ3ZpcnR1YWwnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBoYW5kbGUgbGVmdCBjbGlja3NcbiAgICAgICAgLy8gU2FmYXJpIG9uIGlPUyBzb21ldGltZXMgZmlyZXMgcG9pbnRlcnVwIGV2ZW50cywgZXZlblxuICAgICAgICAvLyB3aGVuIHRoZSB0b3VjaCBpc24ndCBvdmVyIHRoZSB0YXJnZXQsIHNvIGRvdWJsZSBjaGVjay5cbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwICYmIGlzT3ZlclRhcmdldChlLCBlLmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgdHJpZ2dlclByZXNzVXAoZSwgc3RhdGUucG9pbnRlclR5cGUgfHwgZS5wb2ludGVyVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIFNhZmFyaSBvbiBpT1MgPCAxMy4yIGRvZXMgbm90IGltcGxlbWVudCBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGV2ZW50cyBjb3JyZWN0bHkuXG4gICAgICAvLyBVc2UgcG9pbnRlciBtb3ZlIGV2ZW50cyBpbnN0ZWFkIHRvIGltcGxlbWVudCBvdXIgb3duIGhpdCB0ZXN0aW5nLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTk4MDNcbiAgICAgIGxldCBvblBvaW50ZXJNb3ZlID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5wb2ludGVySWQgIT09IHN0YXRlLmFjdGl2ZVBvaW50ZXJJZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc092ZXJUYXJnZXQoZSwgc3RhdGUudGFyZ2V0KSkge1xuICAgICAgICAgIGlmICghc3RhdGUuaXNPdmVyVGFyZ2V0KSB7XG4gICAgICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSB0cnVlO1xuICAgICAgICAgICAgdHJpZ2dlclByZXNzU3RhcnQoY3JlYXRlRXZlbnQoc3RhdGUudGFyZ2V0LCBlKSwgc3RhdGUucG9pbnRlclR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5pc092ZXJUYXJnZXQpIHtcbiAgICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoY3JlYXRlRXZlbnQoc3RhdGUudGFyZ2V0LCBlKSwgc3RhdGUucG9pbnRlclR5cGUsIGZhbHNlKTtcbiAgICAgICAgICBpZiAocHJvcHNSZWYuY3VycmVudC5zaG91bGRDYW5jZWxPblBvaW50ZXJFeGl0KSB7XG4gICAgICAgICAgICBjYW5jZWwoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25Qb2ludGVyVXAgPSAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLnBvaW50ZXJJZCA9PT0gc3RhdGUuYWN0aXZlUG9pbnRlcklkICYmIHN0YXRlLmlzUHJlc3NlZCAmJiBlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIGlmIChpc092ZXJUYXJnZXQoZSwgc3RhdGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksIHN0YXRlLnBvaW50ZXJUeXBlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmlzT3ZlclRhcmdldCkge1xuICAgICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksIHN0YXRlLnBvaW50ZXJUeXBlLCBmYWxzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGUuaXNQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUuYWN0aXZlUG9pbnRlcklkID0gbnVsbDtcbiAgICAgICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9IG51bGw7XG4gICAgICAgICAgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAgICAgaWYgKCFhbGxvd1RleHRTZWxlY3Rpb25PblByZXNzKSB7XG4gICAgICAgICAgICByZXN0b3JlVGV4dFNlbGVjdGlvbihzdGF0ZS50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IG9uUG9pbnRlckNhbmNlbCA9IChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgY2FuY2VsKGUpO1xuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vbkRyYWdTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhZmFyaSBkb2VzIG5vdCBjYWxsIG9uUG9pbnRlckNhbmNlbCB3aGVuIGEgZHJhZyBzdGFydHMsIHdoZXJlYXMgQ2hyb21lIGFuZCBGaXJlZm94IGRvLlxuICAgICAgICBjYW5jZWwoZSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVzc1Byb3BzLm9uTW91c2VEb3duID0gKGUpID0+IHtcbiAgICAgICAgLy8gT25seSBoYW5kbGUgbGVmdCBjbGlja3NcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSAwIHx8ICFlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHVlIHRvIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBicm93c2Vycywgd2UgcHJldmVudFxuICAgICAgICAvLyBkZWZhdWx0IG9uIG1vdXNlIGRvd24gYW5kIGhhbmRsZSBmb2N1c2luZyB0aGUgcHJlc3NhYmxlIGVsZW1lbnQgb3Vyc2VsdmVzLlxuICAgICAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHQoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChzdGF0ZS5pZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuaXNQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUudGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9IGlzVmlydHVhbENsaWNrKGUubmF0aXZlRXZlbnQpID8gJ3ZpcnR1YWwnIDogJ21vdXNlJztcblxuICAgICAgICBpZiAoIWlzRGlzYWJsZWQgJiYgIXByZXZlbnRGb2N1c09uUHJlc3MpIHtcbiAgICAgICAgICBmb2N1c1dpdGhvdXRTY3JvbGxpbmcoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJQcmVzc1N0YXJ0KGUsIHN0YXRlLnBvaW50ZXJUeXBlKTtcblxuICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHByZXNzUHJvcHMub25Nb3VzZUVudGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCFlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHN0YXRlLmlzUHJlc3NlZCAmJiAhc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cykge1xuICAgICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IHRydWU7XG4gICAgICAgICAgdHJpZ2dlclByZXNzU3RhcnQoZSwgc3RhdGUucG9pbnRlclR5cGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwcmVzc1Byb3BzLm9uTW91c2VMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChzdGF0ZS5pc1ByZXNzZWQgJiYgIXN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMpIHtcbiAgICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoZSwgc3RhdGUucG9pbnRlclR5cGUsIGZhbHNlKTtcbiAgICAgICAgICBpZiAocHJvcHNSZWYuY3VycmVudC5zaG91bGRDYW5jZWxPblBvaW50ZXJFeGl0KSB7XG4gICAgICAgICAgICBjYW5jZWwoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwcmVzc1Byb3BzLm9uTW91c2VVcCA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyAmJiBlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIHRyaWdnZXJQcmVzc1VwKGUsIHN0YXRlLnBvaW50ZXJUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIC8vIE9ubHkgaGFuZGxlIGxlZnQgY2xpY2tzXG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmlzUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICByZW1vdmVBbGxHbG9iYWxMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAoc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cykge1xuICAgICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPdmVyVGFyZ2V0KGUsIHN0YXRlLnRhcmdldCkpIHtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoY3JlYXRlRXZlbnQoc3RhdGUudGFyZ2V0LCBlKSwgc3RhdGUucG9pbnRlclR5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmlzT3ZlclRhcmdldCkge1xuICAgICAgICAgIHRyaWdnZXJQcmVzc0VuZChjcmVhdGVFdmVudChzdGF0ZS50YXJnZXQsIGUpLCBzdGF0ZS5wb2ludGVyVHlwZSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBwcmVzc1Byb3BzLm9uVG91Y2hTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0b3VjaCA9IGdldFRvdWNoRnJvbUV2ZW50KGUubmF0aXZlRXZlbnQpO1xuICAgICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmFjdGl2ZVBvaW50ZXJJZCA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5pc1ByZXNzZWQgPSB0cnVlO1xuICAgICAgICBzdGF0ZS50YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHN0YXRlLnBvaW50ZXJUeXBlID0gJ3RvdWNoJztcblxuICAgICAgICAvLyBEdWUgdG8gYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGJyb3dzZXJzLCB3ZSBwcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgLy8gb24gdGhlIGVtdWxhdGVkIG1vdXNlIGV2ZW50IGFuZCBoYW5kbGUgZm9jdXNpbmcgdGhlIHByZXNzYWJsZSBlbGVtZW50IG91cnNlbHZlcy5cbiAgICAgICAgaWYgKCFpc0Rpc2FibGVkICYmICFwcmV2ZW50Rm9jdXNPblByZXNzKSB7XG4gICAgICAgICAgZm9jdXNXaXRob3V0U2Nyb2xsaW5nKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFsbG93VGV4dFNlbGVjdGlvbk9uUHJlc3MpIHtcbiAgICAgICAgICBkaXNhYmxlVGV4dFNlbGVjdGlvbihzdGF0ZS50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlclByZXNzU3RhcnQoZSwgc3RhdGUucG9pbnRlclR5cGUpO1xuXG4gICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3Njcm9sbCcsIG9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIHByZXNzUHJvcHMub25Ub3VjaE1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIXN0YXRlLmlzUHJlc3NlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3VjaCA9IGdldFRvdWNoQnlJZChlLm5hdGl2ZUV2ZW50LCBzdGF0ZS5hY3RpdmVQb2ludGVySWQpO1xuICAgICAgICBpZiAodG91Y2ggJiYgaXNPdmVyVGFyZ2V0KHRvdWNoLCBlLmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgaWYgKCFzdGF0ZS5pc092ZXJUYXJnZXQpIHtcbiAgICAgICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IHRydWU7XG4gICAgICAgICAgICB0cmlnZ2VyUHJlc3NTdGFydChlLCBzdGF0ZS5wb2ludGVyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmlzT3ZlclRhcmdldCkge1xuICAgICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IGZhbHNlO1xuICAgICAgICAgIHRyaWdnZXJQcmVzc0VuZChlLCBzdGF0ZS5wb2ludGVyVHlwZSwgZmFsc2UpO1xuICAgICAgICAgIGlmIChwcm9wc1JlZi5jdXJyZW50LnNob3VsZENhbmNlbE9uUG9pbnRlckV4aXQpIHtcbiAgICAgICAgICAgIGNhbmNlbChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHByZXNzUHJvcHMub25Ub3VjaEVuZCA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICghc3RhdGUuaXNQcmVzc2VkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvdWNoID0gZ2V0VG91Y2hCeUlkKGUubmF0aXZlRXZlbnQsIHN0YXRlLmFjdGl2ZVBvaW50ZXJJZCk7XG4gICAgICAgIGlmICh0b3VjaCAmJiBpc092ZXJUYXJnZXQodG91Y2gsIGUuY3VycmVudFRhcmdldCkpIHtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NVcChlLCBzdGF0ZS5wb2ludGVyVHlwZSk7XG4gICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGUsIHN0YXRlLnBvaW50ZXJUeXBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5pc092ZXJUYXJnZXQpIHtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoZSwgc3RhdGUucG9pbnRlclR5cGUsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmlzUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5hY3RpdmVQb2ludGVySWQgPSBudWxsO1xuICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyA9IHRydWU7XG4gICAgICAgIGlmICghYWxsb3dUZXh0U2VsZWN0aW9uT25QcmVzcykge1xuICAgICAgICAgIHJlc3RvcmVUZXh0U2VsZWN0aW9uKHN0YXRlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICB9O1xuXG4gICAgICBwcmVzc1Byb3BzLm9uVG91Y2hDYW5jZWwgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoc3RhdGUuaXNQcmVzc2VkKSB7XG4gICAgICAgICAgY2FuY2VsKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25TY3JvbGwgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLmlzUHJlc3NlZCAmJiAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNvbnRhaW5zKHN0YXRlLnRhcmdldCkpIHtcbiAgICAgICAgICBjYW5jZWwoe1xuICAgICAgICAgICAgY3VycmVudFRhcmdldDogc3RhdGUudGFyZ2V0LFxuICAgICAgICAgICAgc2hpZnRLZXk6IGZhbHNlLFxuICAgICAgICAgICAgY3RybEtleTogZmFsc2UsXG4gICAgICAgICAgICBtZXRhS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGFsdEtleTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vbkRyYWdTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbmNlbChlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXNzUHJvcHM7XG4gIH0sIFthZGRHbG9iYWxMaXN0ZW5lciwgaXNEaXNhYmxlZCwgcHJldmVudEZvY3VzT25QcmVzcywgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzLCBhbGxvd1RleHRTZWxlY3Rpb25PblByZXNzXSk7XG5cbiAgLy8gUmVtb3ZlIHVzZXItc2VsZWN0OiBub25lIGluIGNhc2UgY29tcG9uZW50IHVubW91bnRzIGltbWVkaWF0ZWx5IGFmdGVyIHByZXNzU3RhcnRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFhbGxvd1RleHRTZWxlY3Rpb25PblByZXNzKSB7XG4gICAgICAgIHJlc3RvcmVUZXh0U2VsZWN0aW9uKHJlZi5jdXJyZW50LnRhcmdldCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2FsbG93VGV4dFNlbGVjdGlvbk9uUHJlc3NdKTtcblxuICByZXR1cm4ge1xuICAgIGlzUHJlc3NlZDogaXNQcmVzc2VkUHJvcCB8fCBpc1ByZXNzZWQsXG4gICAgcHJlc3NQcm9wczogbWVyZ2VQcm9wcyhkb21Qcm9wcywgcHJlc3NQcm9wcylcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNIVE1MQW5jaG9yTGluayh0YXJnZXQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiB0YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEtleWJvYXJkRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3Qge2tleSwgY29kZSwgdGFyZ2V0fSA9IGV2ZW50O1xuICBjb25zdCBlbGVtZW50ID0gdGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCB7dGFnTmFtZSwgaXNDb250ZW50RWRpdGFibGV9ID0gZWxlbWVudDtcbiAgY29uc3Qgcm9sZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJyk7XG4gIC8vIEFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkcy4gU3BhY2UgYW5kIEVudGVyIG9ubHkuXG4gIC8vIFwiU3BhY2ViYXJcIiBpcyBmb3IgSUUgMTFcbiAgcmV0dXJuIChcbiAgICAoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gJyAnIHx8IGtleSA9PT0gJ1NwYWNlYmFyJyB8fCBjb2RlID09PSAnU3BhY2UnKSAmJlxuICAgICh0YWdOYW1lICE9PSAnSU5QVVQnICYmXG4gICAgICB0YWdOYW1lICE9PSAnVEVYVEFSRUEnICYmXG4gICAgICBpc0NvbnRlbnRFZGl0YWJsZSAhPT0gdHJ1ZSkgJiZcbiAgICAvLyBBIGxpbmsgd2l0aCBhIHZhbGlkIGhyZWYgc2hvdWxkIGJlIGhhbmRsZWQgbmF0aXZlbHksXG4gICAgLy8gdW5sZXNzIGl0IGFsc28gaGFzIHJvbGU9J2J1dHRvbicgYW5kIHdhcyB0cmlnZ2VyZWQgdXNpbmcgU3BhY2UuXG4gICAgKCFpc0hUTUxBbmNob3JMaW5rKGVsZW1lbnQpIHx8IChyb2xlID09PSAnYnV0dG9uJyAmJiBrZXkgIT09ICdFbnRlcicpKSAmJlxuICAgIC8vIEFuIGVsZW1lbnQgd2l0aCByb2xlPSdsaW5rJyBzaG91bGQgb25seSB0cmlnZ2VyIHdpdGggRW50ZXIga2V5XG4gICAgIShyb2xlID09PSAnbGluaycgJiYga2V5ICE9PSAnRW50ZXInKVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRUb3VjaEZyb21FdmVudChldmVudDogVG91Y2hFdmVudCk6IFRvdWNoIHwgbnVsbCB7XG4gIGNvbnN0IHt0YXJnZXRUb3VjaGVzfSA9IGV2ZW50O1xuICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRhcmdldFRvdWNoZXNbMF07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJZChcbiAgZXZlbnQ6IFRvdWNoRXZlbnQsXG4gIHBvaW50ZXJJZDogbnVsbCB8IG51bWJlclxuKTogbnVsbCB8IFRvdWNoIHtcbiAgY29uc3QgY2hhbmdlZFRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRvdWNoID0gY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IHBvaW50ZXJJZCkge1xuICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnQodGFyZ2V0OiBIVE1MRWxlbWVudCwgZTogRXZlbnRCYXNlKTogRXZlbnRCYXNlIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VGFyZ2V0OiB0YXJnZXQsXG4gICAgc2hpZnRLZXk6IGUuc2hpZnRLZXksXG4gICAgY3RybEtleTogZS5jdHJsS2V5LFxuICAgIG1ldGFLZXk6IGUubWV0YUtleSxcbiAgICBhbHRLZXk6IGUuYWx0S2V5XG4gIH07XG59XG5cbmludGVyZmFjZSBSZWN0IHtcbiAgdG9wOiBudW1iZXIsXG4gIHJpZ2h0OiBudW1iZXIsXG4gIGJvdHRvbTogbnVtYmVyLFxuICBsZWZ0OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIEV2ZW50UG9pbnQge1xuICBjbGllbnRYOiBudW1iZXIsXG4gIGNsaWVudFk6IG51bWJlcixcbiAgd2lkdGg/OiBudW1iZXIsXG4gIGhlaWdodD86IG51bWJlcixcbiAgcmFkaXVzWD86IG51bWJlcixcbiAgcmFkaXVzWT86IG51bWJlclxufVxuXG5mdW5jdGlvbiBnZXRQb2ludENsaWVudFJlY3QocG9pbnQ6IEV2ZW50UG9pbnQpOiBSZWN0IHtcbiAgbGV0IG9mZnNldFggPSAocG9pbnQud2lkdGggLyAyKSB8fCBwb2ludC5yYWRpdXNYIHx8IDA7XG4gIGxldCBvZmZzZXRZID0gKHBvaW50LmhlaWdodCAvIDIpIHx8IHBvaW50LnJhZGl1c1kgfHwgMDtcblxuICByZXR1cm4ge1xuICAgIHRvcDogcG9pbnQuY2xpZW50WSAtIG9mZnNldFksXG4gICAgcmlnaHQ6IHBvaW50LmNsaWVudFggKyBvZmZzZXRYLFxuICAgIGJvdHRvbTogcG9pbnQuY2xpZW50WSArIG9mZnNldFksXG4gICAgbGVmdDogcG9pbnQuY2xpZW50WCAtIG9mZnNldFhcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXJlUmVjdGFuZ2xlc092ZXJsYXBwaW5nKGE6IFJlY3QsIGI6IFJlY3QpIHtcbiAgLy8gY2hlY2sgaWYgdGhleSBjYW5ub3Qgb3ZlcmxhcCBvbiB4IGF4aXNcbiAgaWYgKGEubGVmdCA+IGIucmlnaHQgfHwgYi5sZWZ0ID4gYS5yaWdodCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBjaGVjayBpZiB0aGV5IGNhbm5vdCBvdmVybGFwIG9uIHkgYXhpc1xuICBpZiAoYS50b3AgPiBiLmJvdHRvbSB8fCBiLnRvcCA+IGEuYm90dG9tKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc092ZXJUYXJnZXQocG9pbnQ6IEV2ZW50UG9pbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpIHtcbiAgbGV0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBwb2ludFJlY3QgPSBnZXRQb2ludENsaWVudFJlY3QocG9pbnQpO1xuICByZXR1cm4gYXJlUmVjdGFuZ2xlc092ZXJsYXBwaW5nKHJlY3QsIHBvaW50UmVjdCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KHRhcmdldDogSFRNTEVsZW1lbnQpIHtcbiAgLy8gV2UgY2Fubm90IHByZXZlbnQgZGVmYXVsdCBpZiB0aGUgdGFyZ2V0IGlzIGEgZHJhZ2dhYmxlIGVsZW1lbnQuXG4gIHJldHVybiAhdGFyZ2V0LmRyYWdnYWJsZTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHRLZXlib2FyZCh0YXJnZXQ6IEVsZW1lbnQpIHtcbiAgcmV0dXJuICEoKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnIHx8IHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykgJiYgKHRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICdzdWJtaXQnKTtcbn1cblxuZnVuY3Rpb24gaXNWaXJ0dWFsUG9pbnRlckV2ZW50KGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgLy8gSWYgdGhlIHBvaW50ZXIgc2l6ZSBpcyB6ZXJvLCB0aGVuIHdlIGFzc3VtZSBpdCdzIGZyb20gYSBzY3JlZW4gcmVhZGVyLlxuICAvLyBBbmRyb2lkIFRhbGtCYWNrIGRvdWJsZSB0YXAgd2lsbCBzb21ldGltZXMgcmV0dXJuIGEgZXZlbnQgd2l0aCB3aWR0aCBhbmQgaGVpZ2h0IG9mIDFcbiAgLy8gYW5kIHBvaW50ZXJUeXBlID09PSAnbW91c2UnIHNvIHdlIG5lZWQgdG8gY2hlY2sgZm9yIGEgc3BlY2lmaWMgY29tYmluYXRpb24gb2YgZXZlbnQgYXR0cmlidXRlcy5cbiAgLy8gQ2Fubm90IHVzZSBcImV2ZW50LnByZXNzdXJlID09PSAwXCIgYXMgdGhlIHNvbGUgY2hlY2sgZHVlIHRvIFNhZmFyaSBwb2ludGVyIGV2ZW50cyBhbHdheXMgcmV0dXJuaW5nIHByZXNzdXJlID09PSAwXG4gIC8vIGluc3RlYWQgb2YgLjUsIHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjA2MjE2LiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJyBpcyB0byBkaXN0aW5ndXNoXG4gIC8vIFRhbGtiYWNrIGRvdWJsZSB0YXAgZnJvbSBXaW5kb3dzIEZpcmVmb3ggdG91Y2ggc2NyZWVuIHByZXNzXG4gIHJldHVybiAoXG4gICAgKGV2ZW50LndpZHRoID09PSAwICYmIGV2ZW50LmhlaWdodCA9PT0gMCkgfHxcbiAgICAoZXZlbnQud2lkdGggPT09IDEgJiZcbiAgICAgIGV2ZW50LmhlaWdodCA9PT0gMSAmJlxuICAgICAgZXZlbnQucHJlc3N1cmUgPT09IDAgJiZcbiAgICAgIGV2ZW50LmRldGFpbCA9PT0gMCAmJlxuICAgICAgZXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZSdcbiAgICApXG4gICk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHttZXJnZVByb3BzfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge1ByZXNzUHJvcHMsIHVzZVByZXNzfSBmcm9tICcuL3VzZVByZXNzJztcbmltcG9ydCBSZWFjdCwge0hUTUxBdHRyaWJ1dGVzLCBSZWFjdEVsZW1lbnQsIFJlZk9iamVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcmVzc2FibGVQcm9wcyBleHRlbmRzIFByZXNzUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50PEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Piwgc3RyaW5nPlxufVxuXG5leHBvcnQgY29uc3QgUHJlc3NhYmxlID0gUmVhY3QuZm9yd2FyZFJlZigoe2NoaWxkcmVuLCAuLi5wcm9wc306IFByZXNzYWJsZVByb3BzLCByZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pID0+IHtcbiAgbGV0IG5ld1JlZiA9IHVzZVJlZigpO1xuICByZWYgPSByZWYgPz8gbmV3UmVmO1xuICBsZXQge3ByZXNzUHJvcHN9ID0gdXNlUHJlc3Moey4uLnByb3BzLCByZWZ9KTtcbiAgbGV0IGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgY2hpbGQsXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHtyZWYsIC4uLm1lcmdlUHJvcHMoY2hpbGQucHJvcHMsIHByZXNzUHJvcHMpfVxuICApO1xufSk7XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHttZXJnZVByb3BzLCB1c2VTeW5jUmVmfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge1ByZXNzUHJvcHN9IGZyb20gJy4vdXNlUHJlc3MnO1xuaW1wb3J0IHtQcmVzc1Jlc3BvbmRlckNvbnRleHR9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdE5vZGUsIFJlZk9iamVjdCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByZXNzUmVzcG9uZGVyUHJvcHMgZXh0ZW5kcyBQcmVzc1Byb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG5leHBvcnQgY29uc3QgUHJlc3NSZXNwb25kZXIgPSBSZWFjdC5mb3J3YXJkUmVmKCh7Y2hpbGRyZW4sIC4uLnByb3BzfTogUHJlc3NSZXNwb25kZXJQcm9wcywgcmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gIGxldCBpc1JlZ2lzdGVyZWQgPSB1c2VSZWYoZmFsc2UpO1xuICBsZXQgcHJldkNvbnRleHQgPSB1c2VDb250ZXh0KFByZXNzUmVzcG9uZGVyQ29udGV4dCk7XG4gIGxldCBjb250ZXh0ID0gbWVyZ2VQcm9wcyhwcmV2Q29udGV4dCB8fCB7fSwge1xuICAgIC4uLnByb3BzLFxuICAgIHJlZjogcmVmIHx8IHByZXZDb250ZXh0Py5yZWYsXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICBpc1JlZ2lzdGVyZWQuY3VycmVudCA9IHRydWU7XG4gICAgICBpZiAocHJldkNvbnRleHQpIHtcbiAgICAgICAgcHJldkNvbnRleHQucmVnaXN0ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZVN5bmNSZWYocHJldkNvbnRleHQsIHJlZik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzUmVnaXN0ZXJlZC5jdXJyZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdBIFByZXNzUmVzcG9uZGVyIHdhcyByZW5kZXJlZCB3aXRob3V0IGEgcHJlc3NhYmxlIGNoaWxkLiAnICtcbiAgICAgICAgJ0VpdGhlciBjYWxsIHRoZSB1c2VQcmVzcyBob29rLCBvciB3cmFwIHlvdXIgRE9NIG5vZGUgd2l0aCA8UHJlc3NhYmxlPiBjb21wb25lbnQuJ1xuICAgICAgKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxQcmVzc1Jlc3BvbmRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJlc3NSZXNwb25kZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSk7XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gUG9ydGlvbnMgb2YgdGhlIGNvZGUgaW4gdGhpcyBmaWxlIGFyZSBiYXNlZCBvbiBjb2RlIGZyb20gcmVhY3QuXG4vLyBPcmlnaW5hbCBsaWNlbnNpbmcgZm9yIHRoZSBmb2xsb3dpbmcgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTk9USUNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3RyZWUvY2M3YzFhZWNlNDZhNmI2OWI0MTk1OGQ3MzFlMGZkMjdjOTRiZmM2Yy9wYWNrYWdlcy9yZWFjdC1pbnRlcmFjdGlvbnNcblxuaW1wb3J0IHtGb2N1c0V2ZW50LCBIVE1MQXR0cmlidXRlcywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9jdXNFdmVudHN9IGZyb20gJ0ByZWFjdC10eXBlcy9zaGFyZWQnO1xuaW1wb3J0IHt1c2VTeW50aGV0aWNCbHVyRXZlbnR9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgRm9jdXNQcm9wcyBleHRlbmRzIEZvY3VzRXZlbnRzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIGZvY3VzIGV2ZW50cyBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBGb2N1c1Jlc3VsdCB7XG4gIC8qKiBQcm9wcyB0byBzcHJlYWQgb250byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG4gIGZvY3VzUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PlxufVxuXG4vKipcbiAqIEhhbmRsZXMgZm9jdXMgZXZlbnRzIGZvciB0aGUgaW1tZWRpYXRlIHRhcmdldC5cbiAqIEZvY3VzIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1cyhwcm9wczogRm9jdXNQcm9wcyk6IEZvY3VzUmVzdWx0IHtcbiAgbGV0IHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIG9uRm9jdXM6IG9uRm9jdXNQcm9wLFxuICAgIG9uQmx1cjogb25CbHVyUHJvcCxcbiAgICBvbkZvY3VzQ2hhbmdlXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkJsdXI6IEZvY3VzUHJvcHNbJ29uQmx1ciddID0gdXNlQ2FsbGJhY2soKGU6IEZvY3VzRXZlbnQpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgaWYgKG9uQmx1clByb3ApIHtcbiAgICAgICAgb25CbHVyUHJvcChlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uRm9jdXNDaGFuZ2UpIHtcbiAgICAgICAgb25Gb2N1c0NoYW5nZShmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwgW29uQmx1clByb3AsIG9uRm9jdXNDaGFuZ2VdKTtcblxuXG4gIGNvbnN0IG9uU3ludGhldGljRm9jdXMgPSB1c2VTeW50aGV0aWNCbHVyRXZlbnQob25CbHVyKTtcblxuICBjb25zdCBvbkZvY3VzOiBGb2N1c1Byb3BzWydvbkZvY3VzJ10gPSB1c2VDYWxsYmFjaygoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBpZiAob25Gb2N1c1Byb3ApIHtcbiAgICAgICAgb25Gb2N1c1Byb3AoZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkZvY3VzQ2hhbmdlKSB7XG4gICAgICAgIG9uRm9jdXNDaGFuZ2UodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9uU3ludGhldGljRm9jdXMoZSk7XG4gICAgfVxuICB9LCBbb25Gb2N1c0NoYW5nZSwgb25Gb2N1c1Byb3AsIG9uU3ludGhldGljRm9jdXNdKTtcblxuICByZXR1cm4ge1xuICAgIGZvY3VzUHJvcHM6IHtcbiAgICAgIG9uRm9jdXM6ICghaXNEaXNhYmxlZCAmJiAob25Gb2N1c1Byb3AgfHwgb25Gb2N1c0NoYW5nZSB8fCBvbkJsdXJQcm9wKSkgPyBvbkZvY3VzIDogdW5kZWZpbmVkLFxuICAgICAgb25CbHVyOiAoIWlzRGlzYWJsZWQgJiYgKG9uQmx1clByb3AgfHwgb25Gb2N1c0NoYW5nZSkpID8gb25CbHVyIDogbnVsbFxuICAgIH1cbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBQb3J0aW9ucyBvZiB0aGUgY29kZSBpbiB0aGlzIGZpbGUgYXJlIGJhc2VkIG9uIGNvZGUgZnJvbSByZWFjdC5cbi8vIE9yaWdpbmFsIGxpY2Vuc2luZyBmb3IgdGhlIGZvbGxvd2luZyBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBOT1RJQ0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvdHJlZS9jYzdjMWFlY2U0NmE2YjY5YjQxOTU4ZDczMWUwZmQyN2M5NGJmYzZjL3BhY2thZ2VzL3JlYWN0LWludGVyYWN0aW9uc1xuXG5pbXBvcnQge2lzTWFjfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge2lzVmlydHVhbENsaWNrfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG50eXBlIE1vZGFsaXR5ID0gJ2tleWJvYXJkJyB8ICdwb2ludGVyJyB8ICd2aXJ0dWFsJztcbnR5cGUgSGFuZGxlckV2ZW50ID0gUG9pbnRlckV2ZW50IHwgTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQgfCBGb2N1c0V2ZW50O1xudHlwZSBIYW5kbGVyID0gKG1vZGFsaXR5OiBNb2RhbGl0eSwgZTogSGFuZGxlckV2ZW50KSA9PiB2b2lkO1xudHlwZSBGb2N1c1Zpc2libGVIYW5kbGVyID0gKGlzRm9jdXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xuaW50ZXJmYWNlIEZvY3VzVmlzaWJsZVByb3BzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYSB0ZXh0IGlucHV0LiAqL1xuICBpc1RleHRJbnB1dD86IGJvb2xlYW4sXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHdpbGwgYmUgYXV0byBmb2N1c2VkLiAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBGb2N1c1Zpc2libGVSZXN1bHQge1xuICAvKiogV2hldGhlciBrZXlib2FyZCBmb2N1cyBpcyB2aXNpYmxlIGdsb2JhbGx5LiAqL1xuICBpc0ZvY3VzVmlzaWJsZTogYm9vbGVhblxufVxuXG5sZXQgY3VycmVudE1vZGFsaXR5ID0gbnVsbDtcbmxldCBjaGFuZ2VIYW5kbGVycyA9IG5ldyBTZXQ8SGFuZGxlcj4oKTtcbmxldCBoYXNTZXR1cEdsb2JhbExpc3RlbmVycyA9IGZhbHNlO1xubGV0IGhhc0V2ZW50QmVmb3JlRm9jdXMgPSBmYWxzZTtcbmxldCBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSBmYWxzZTtcblxuLy8gT25seSBUYWIgb3IgRXNjIGtleXMgd2lsbCBtYWtlIGZvY3VzIHZpc2libGUgb24gdGV4dCBpbnB1dCBlbGVtZW50c1xuY29uc3QgRk9DVVNfVklTSUJMRV9JTlBVVF9LRVlTID0ge1xuICBUYWI6IHRydWUsXG4gIEVzY2FwZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gdHJpZ2dlckNoYW5nZUhhbmRsZXJzKG1vZGFsaXR5OiBNb2RhbGl0eSwgZTogSGFuZGxlckV2ZW50KSB7XG4gIGZvciAobGV0IGhhbmRsZXIgb2YgY2hhbmdlSGFuZGxlcnMpIHtcbiAgICBoYW5kbGVyKG1vZGFsaXR5LCBlKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYSBLZXlib2FyZEV2ZW50IGlzIHVubW9kaWZpZWQgYW5kIGNvdWxkIG1ha2Uga2V5Ym9hcmQgZm9jdXMgc3R5bGVzIHZpc2libGUuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRLZXkoZTogS2V5Ym9hcmRFdmVudCkge1xuICAvLyBDb250cm9sIGFuZCBTaGlmdCBrZXlzIHRyaWdnZXIgd2hlbiBuYXZpZ2F0aW5nIGJhY2sgdG8gdGhlIHRhYiB3aXRoIGtleWJvYXJkLlxuICByZXR1cm4gIShlLm1ldGFLZXkgfHwgKCFpc01hYygpICYmIGUuYWx0S2V5KSB8fCBlLmN0cmxLZXkgfHwgZS5rZXkgPT09ICdDb250cm9sJyB8fCBlLmtleSA9PT0gJ1NoaWZ0JyB8fCBlLmtleSA9PT0gJ01ldGEnKTtcbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVLZXlib2FyZEV2ZW50KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IHRydWU7XG4gIGlmIChpc1ZhbGlkS2V5KGUpKSB7XG4gICAgY3VycmVudE1vZGFsaXR5ID0gJ2tleWJvYXJkJztcbiAgICB0cmlnZ2VyQ2hhbmdlSGFuZGxlcnMoJ2tleWJvYXJkJywgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9pbnRlckV2ZW50KGU6IFBvaW50ZXJFdmVudCB8IE1vdXNlRXZlbnQpIHtcbiAgY3VycmVudE1vZGFsaXR5ID0gJ3BvaW50ZXInO1xuICBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bicpIHtcbiAgICBoYXNFdmVudEJlZm9yZUZvY3VzID0gdHJ1ZTtcbiAgICB0cmlnZ2VyQ2hhbmdlSGFuZGxlcnMoJ3BvaW50ZXInLCBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGlja0V2ZW50KGU6IE1vdXNlRXZlbnQpIHtcbiAgaWYgKGlzVmlydHVhbENsaWNrKGUpKSB7XG4gICAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IHRydWU7XG4gICAgY3VycmVudE1vZGFsaXR5ID0gJ3ZpcnR1YWwnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvY3VzRXZlbnQoZTogRm9jdXNFdmVudCkge1xuICAvLyBGaXJlZm94IGZpcmVzIHR3byBleHRyYSBmb2N1cyBldmVudHMgd2hlbiB0aGUgdXNlciBmaXJzdCBjbGlja3MgaW50byBhbiBpZnJhbWU6XG4gIC8vIGZpcnN0IG9uIHRoZSB3aW5kb3csIHRoZW4gb24gdGhlIGRvY3VtZW50LiBXZSBpZ25vcmUgdGhlc2UgZXZlbnRzIHNvIHRoZXkgZG9uJ3RcbiAgLy8gY2F1c2Uga2V5Ym9hcmQgZm9jdXMgcmluZ3MgdG8gYXBwZWFyLlxuICBpZiAoZS50YXJnZXQgPT09IHdpbmRvdyB8fCBlLnRhcmdldCA9PT0gZG9jdW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiBhIGZvY3VzIGV2ZW50IG9jY3VycyB3aXRob3V0IGEgcHJlY2VkaW5nIGtleWJvYXJkIG9yIHBvaW50ZXIgZXZlbnQsIHN3aXRjaCB0byB2aXJ0dWFsIG1vZGFsaXR5LlxuICAvLyBUaGlzIG9jY3VycywgZm9yIGV4YW1wbGUsIHdoZW4gbmF2aWdhdGluZyBhIGZvcm0gd2l0aCB0aGUgbmV4dC9wcmV2aW91cyBidXR0b25zIG9uIGlPUy5cbiAgaWYgKCFoYXNFdmVudEJlZm9yZUZvY3VzICYmICFoYXNCbHVycmVkV2luZG93UmVjZW50bHkpIHtcbiAgICBjdXJyZW50TW9kYWxpdHkgPSAndmlydHVhbCc7XG4gICAgdHJpZ2dlckNoYW5nZUhhbmRsZXJzKCd2aXJ0dWFsJywgZSk7XG4gIH1cblxuICBoYXNFdmVudEJlZm9yZUZvY3VzID0gZmFsc2U7XG4gIGhhc0JsdXJyZWRXaW5kb3dSZWNlbnRseSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVXaW5kb3dCbHVyKCkge1xuICAvLyBXaGVuIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgcmVzZXQgc3RhdGUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW4gdGFiYmluZyBvdXQgb2YgdGhlIHdpbmRvdyxcbiAgLy8gZm9yIGV4YW1wbGUsIHNpbmNlIGEgc3Vic2VxdWVudCBmb2N1cyBldmVudCB3b24ndCBiZSBmaXJlZC5cbiAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IGZhbHNlO1xuICBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSB0cnVlO1xufVxuXG4vKipcbiAqIFNldHVwIGdsb2JhbCBldmVudCBsaXN0ZW5lcnMgdG8gY29udHJvbCB3aGVuIGtleWJvYXJkIGZvY3VzIHN0eWxlIHNob3VsZCBiZSB2aXNpYmxlLlxuICovXG5mdW5jdGlvbiBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzU2V0dXBHbG9iYWxMaXN0ZW5lcnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9ncmFtbWF0aWMgZm9jdXMoKSBjYWxscyBzaG91bGRuJ3QgYWZmZWN0IHRoZSBjdXJyZW50IGlucHV0IG1vZGFsaXR5LlxuICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGRldGVjdCBvdGhlciBjYXNlcyB3aGVuIGEgZm9jdXMgZXZlbnQgb2NjdXJzIHdpdGhvdXRcbiAgLy8gYSBwcmVjZWRpbmcgdXNlciBldmVudCAoZS5nLiBzY3JlZW4gcmVhZGVyIGZvY3VzKS4gT3ZlcnJpZGluZyB0aGUgZm9jdXNcbiAgLy8gbWV0aG9kIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZSBpcyBhIGJpdCBoYWNreSwgYnV0IHdvcmtzLlxuICBsZXQgZm9jdXMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXM7XG4gIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBoYXNFdmVudEJlZm9yZUZvY3VzID0gdHJ1ZTtcbiAgICBmb2N1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlib2FyZEV2ZW50LCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlib2FyZEV2ZW50LCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja0V2ZW50LCB0cnVlKTtcblxuICAvLyBSZWdpc3RlciBmb2N1cyBldmVudHMgb24gdGhlIHdpbmRvdyBzbyB0aGV5IGFyZSBzdXJlIHRvIGhhcHBlblxuICAvLyBiZWZvcmUgUmVhY3QncyBldmVudCBsaXN0ZW5lcnMgKHJlZ2lzdGVyZWQgb24gdGhlIGRvY3VtZW50KS5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXNFdmVudCwgdHJ1ZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlV2luZG93Qmx1ciwgZmFsc2UpO1xuXG4gIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgaGFuZGxlUG9pbnRlckV2ZW50LCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGhhbmRsZVBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgaGFuZGxlUG9pbnRlckV2ZW50LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVQb2ludGVyRXZlbnQsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZVBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZVBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gIH1cblxuICBoYXNTZXR1cEdsb2JhbExpc3RlbmVycyA9IHRydWU7XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNldHVwR2xvYmFsRm9jdXNFdmVudHMpO1xuICB9XG59XG5cbi8qKlxuICogSWYgdHJ1ZSwga2V5Ym9hcmQgZm9jdXMgaXMgdmlzaWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRm9jdXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gY3VycmVudE1vZGFsaXR5ICE9PSAncG9pbnRlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnRlcmFjdGlvbk1vZGFsaXR5KCk6IE1vZGFsaXR5IHtcbiAgcmV0dXJuIGN1cnJlbnRNb2RhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEludGVyYWN0aW9uTW9kYWxpdHkobW9kYWxpdHk6IE1vZGFsaXR5KSB7XG4gIGN1cnJlbnRNb2RhbGl0eSA9IG1vZGFsaXR5O1xuICB0cmlnZ2VyQ2hhbmdlSGFuZGxlcnMobW9kYWxpdHksIG51bGwpO1xufVxuXG4vKipcbiAqIEtlZXBzIHN0YXRlIG9mIHRoZSBjdXJyZW50IG1vZGFsaXR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJhY3Rpb25Nb2RhbGl0eSgpOiBNb2RhbGl0eSB7XG4gIHNldHVwR2xvYmFsRm9jdXNFdmVudHMoKTtcblxuICBsZXQgW21vZGFsaXR5LCBzZXRNb2RhbGl0eV0gPSB1c2VTdGF0ZShjdXJyZW50TW9kYWxpdHkpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0TW9kYWxpdHkoY3VycmVudE1vZGFsaXR5KTtcbiAgICB9O1xuXG4gICAgY2hhbmdlSGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjaGFuZ2VIYW5kbGVycy5kZWxldGUoaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtb2RhbGl0eTtcbn1cblxuLyoqXG4gKiBJZiB0aGlzIGlzIGF0dGFjaGVkIHRvIHRleHQgaW5wdXQgY29tcG9uZW50LCByZXR1cm4gaWYgdGhlIGV2ZW50IGlzIGEgZm9jdXMgZXZlbnQgKFRhYi9Fc2NhcGUga2V5cyBwcmVzc2VkKSBzbyB0aGF0XG4gKiBmb2N1cyB2aXNpYmxlIHN0eWxlIGNhbiBiZSBwcm9wZXJseSBzZXQuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5Ym9hcmRGb2N1c0V2ZW50KGlzVGV4dElucHV0OiBib29sZWFuLCBtb2RhbGl0eTogTW9kYWxpdHksIGU6IEhhbmRsZXJFdmVudCkge1xuICByZXR1cm4gIShpc1RleHRJbnB1dCAmJiBtb2RhbGl0eSA9PT0gJ2tleWJvYXJkJyAmJiBlIGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCAmJiAhRk9DVVNfVklTSUJMRV9JTlBVVF9LRVlTW2Uua2V5XSk7XG59XG5cbi8qKlxuICogTWFuYWdlcyBmb2N1cyB2aXNpYmxlIHN0YXRlIGZvciB0aGUgcGFnZSwgYW5kIHN1YnNjcmliZXMgaW5kaXZpZHVhbCBjb21wb25lbnRzIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNWaXNpYmxlKHByb3BzOiBGb2N1c1Zpc2libGVQcm9wcyA9IHt9KTogRm9jdXNWaXNpYmxlUmVzdWx0IHtcbiAgbGV0IHtpc1RleHRJbnB1dCwgYXV0b0ZvY3VzfSA9IHByb3BzO1xuICBsZXQgW2lzRm9jdXNWaXNpYmxlU3RhdGUsIHNldEZvY3VzVmlzaWJsZV0gPSB1c2VTdGF0ZShhdXRvRm9jdXMgfHwgaXNGb2N1c1Zpc2libGUoKSk7XG4gIHVzZUZvY3VzVmlzaWJsZUxpc3RlbmVyKChpc0ZvY3VzVmlzaWJsZSkgPT4ge1xuICAgIHNldEZvY3VzVmlzaWJsZShpc0ZvY3VzVmlzaWJsZSk7XG4gIH0sIFtpc1RleHRJbnB1dF0sIHtpc1RleHRJbnB1dH0pO1xuXG4gIHJldHVybiB7aXNGb2N1c1Zpc2libGU6IGlzRm9jdXNWaXNpYmxlU3RhdGV9O1xufVxuXG4vKipcbiAqIExpc3RlbnMgZm9yIHRyaWdnZXIgY2hhbmdlIGFuZCByZXBvcnRzIGlmIGZvY3VzIGlzIHZpc2libGUgKGkuZS4sIG1vZGFsaXR5IGlzIG5vdCBwb2ludGVyKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVmlzaWJsZUxpc3RlbmVyKGZuOiBGb2N1c1Zpc2libGVIYW5kbGVyLCBkZXBzOiBSZWFkb25seUFycmF5PGFueT4sIG9wdHM/OiB7aXNUZXh0SW5wdXQ/OiBib29sZWFufSk6IHZvaWQge1xuICBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaGFuZGxlciA9IChtb2RhbGl0eTogTW9kYWxpdHksIGU6IEhhbmRsZXJFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0tleWJvYXJkRm9jdXNFdmVudChvcHRzPy5pc1RleHRJbnB1dCwgbW9kYWxpdHksIGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZuKGlzRm9jdXNWaXNpYmxlKCkpO1xuICAgIH07XG4gICAgY2hhbmdlSGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjaGFuZ2VIYW5kbGVycy5kZWxldGUoaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgZGVwcyk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gUG9ydGlvbnMgb2YgdGhlIGNvZGUgaW4gdGhpcyBmaWxlIGFyZSBiYXNlZCBvbiBjb2RlIGZyb20gcmVhY3QuXG4vLyBPcmlnaW5hbCBsaWNlbnNpbmcgZm9yIHRoZSBmb2xsb3dpbmcgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTk9USUNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3RyZWUvY2M3YzFhZWNlNDZhNmI2OWI0MTk1OGQ3MzFlMGZkMjdjOTRiZmM2Yy9wYWNrYWdlcy9yZWFjdC1pbnRlcmFjdGlvbnNcblxuaW1wb3J0IHtGb2N1c0V2ZW50LCBIVE1MQXR0cmlidXRlcywgdXNlQ2FsbGJhY2ssIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VTeW50aGV0aWNCbHVyRXZlbnR9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgRm9jdXNXaXRoaW5Qcm9wcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBmb2N1cyB3aXRoaW4gZXZlbnRzIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW4sXG4gIC8qKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHRhcmdldCBlbGVtZW50IG9yIGEgZGVzY2VuZGFudCByZWNlaXZlcyBmb2N1cy4gKi9cbiAgb25Gb2N1c1dpdGhpbj86IChlOiBGb2N1c0V2ZW50KSA9PiB2b2lkLFxuICAvKiogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgYWxsIGRlc2NlbmRhbnRzIGxvc2UgZm9jdXMuICovXG4gIG9uQmx1cldpdGhpbj86IChlOiBGb2N1c0V2ZW50KSA9PiB2b2lkLFxuICAvKiogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB0aGUgZm9jdXMgd2l0aGluIHN0YXRlIGNoYW5nZXMuICovXG4gIG9uRm9jdXNXaXRoaW5DaGFuZ2U/OiAoaXNGb2N1c1dpdGhpbjogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgRm9jdXNXaXRoaW5SZXN1bHQge1xuICAvKiogUHJvcHMgdG8gc3ByZWFkIG9udG8gdGhlIHRhcmdldCBlbGVtZW50LiAqL1xuICBmb2N1c1dpdGhpblByb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD5cbn1cblxuLyoqXG4gKiBIYW5kbGVzIGZvY3VzIGV2ZW50cyBmb3IgdGhlIHRhcmdldCBhbmQgaXRzIGRlc2NlbmRhbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNXaXRoaW4ocHJvcHM6IEZvY3VzV2l0aGluUHJvcHMpOiBGb2N1c1dpdGhpblJlc3VsdCB7XG4gIGxldCB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICBvbkJsdXJXaXRoaW4sXG4gICAgb25Gb2N1c1dpdGhpbixcbiAgICBvbkZvY3VzV2l0aGluQ2hhbmdlXG4gIH0gPSBwcm9wcztcbiAgbGV0IHN0YXRlID0gdXNlUmVmKHtcbiAgICBpc0ZvY3VzV2l0aGluOiBmYWxzZVxuICB9KTtcblxuICBsZXQgb25CbHVyID0gdXNlQ2FsbGJhY2soKGU6IEZvY3VzRXZlbnQpID0+IHtcbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHRyaWdnZXIgb25CbHVyV2l0aGluIGFuZCB0aGVuIGltbWVkaWF0ZWx5IG9uRm9jdXNXaXRoaW4gYWdhaW5cbiAgICAvLyB3aGVuIG1vdmluZyBmb2N1cyBpbnNpZGUgdGhlIGVsZW1lbnQuIE9ubHkgdHJpZ2dlciBpZiB0aGUgY3VycmVudFRhcmdldCBkb2Vzbid0XG4gICAgLy8gaW5jbHVkZSB0aGUgcmVsYXRlZFRhcmdldCAod2hlcmUgZm9jdXMgaXMgbW92aW5nKS5cbiAgICBpZiAoc3RhdGUuY3VycmVudC5pc0ZvY3VzV2l0aGluICYmICEoZS5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCBhcyBFbGVtZW50KSkge1xuICAgICAgc3RhdGUuY3VycmVudC5pc0ZvY3VzV2l0aGluID0gZmFsc2U7XG5cbiAgICAgIGlmIChvbkJsdXJXaXRoaW4pIHtcbiAgICAgICAgb25CbHVyV2l0aGluKGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25Gb2N1c1dpdGhpbkNoYW5nZSkge1xuICAgICAgICBvbkZvY3VzV2l0aGluQ2hhbmdlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtvbkJsdXJXaXRoaW4sIG9uRm9jdXNXaXRoaW5DaGFuZ2UsIHN0YXRlXSk7XG5cbiAgbGV0IG9uU3ludGhldGljRm9jdXMgPSB1c2VTeW50aGV0aWNCbHVyRXZlbnQob25CbHVyKTtcbiAgbGV0IG9uRm9jdXMgPSB1c2VDYWxsYmFjaygoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgIGlmICghc3RhdGUuY3VycmVudC5pc0ZvY3VzV2l0aGluKSB7XG4gICAgICBpZiAob25Gb2N1c1dpdGhpbikge1xuICAgICAgICBvbkZvY3VzV2l0aGluKGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25Gb2N1c1dpdGhpbkNoYW5nZSkge1xuICAgICAgICBvbkZvY3VzV2l0aGluQ2hhbmdlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5jdXJyZW50LmlzRm9jdXNXaXRoaW4gPSB0cnVlO1xuICAgICAgb25TeW50aGV0aWNGb2N1cyhlKTtcbiAgICB9XG4gIH0sIFtvbkZvY3VzV2l0aGluLCBvbkZvY3VzV2l0aGluQ2hhbmdlLCBvblN5bnRoZXRpY0ZvY3VzXSk7XG5cbiAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9jdXNXaXRoaW5Qcm9wczoge1xuICAgICAgICBvbkZvY3VzOiBudWxsLFxuICAgICAgICBvbkJsdXI6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb2N1c1dpdGhpblByb3BzOiB7XG4gICAgICBvbkZvY3VzLFxuICAgICAgb25CbHVyXG4gICAgfVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFBvcnRpb25zIG9mIHRoZSBjb2RlIGluIHRoaXMgZmlsZSBhcmUgYmFzZWQgb24gY29kZSBmcm9tIHJlYWN0LlxuLy8gT3JpZ2luYWwgbGljZW5zaW5nIGZvciB0aGUgZm9sbG93aW5nIGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIE5PVElDRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC90cmVlL2NjN2MxYWVjZTQ2YTZiNjliNDE5NThkNzMxZTBmZDI3Yzk0YmZjNmMvcGFja2FnZXMvcmVhY3QtaW50ZXJhY3Rpb25zXG5cbmltcG9ydCB7SG92ZXJFdmVudHN9IGZyb20gJ0ByZWFjdC10eXBlcy9zaGFyZWQnO1xuaW1wb3J0IHtIVE1MQXR0cmlidXRlcywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG92ZXJQcm9wcyBleHRlbmRzIEhvdmVyRXZlbnRzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIGhvdmVyIGV2ZW50cyBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBIb3ZlclJlc3VsdCB7XG4gIC8qKiBQcm9wcyB0byBzcHJlYWQgb24gdGhlIHRhcmdldCBlbGVtZW50LiAqL1xuICBob3ZlclByb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sXG4gIGlzSG92ZXJlZDogYm9vbGVhblxufVxuXG4vLyBpT1MgZmlyZXMgb25Qb2ludGVyRW50ZXIgdHdpY2U6IG9uY2Ugd2l0aCBwb2ludGVyVHlwZT1cInRvdWNoXCIgYW5kIGFnYWluIHdpdGggcG9pbnRlclR5cGU9XCJtb3VzZVwiLlxuLy8gV2Ugd2FudCB0byBpZ25vcmUgdGhlc2UgZW11bGF0ZWQgZXZlbnRzIHNvIHRoZXkgZG8gbm90IHRyaWdnZXIgaG92ZXIgYmVoYXZpb3IuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIxNDYwOS5cbmxldCBnbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gZmFsc2U7XG5sZXQgaG92ZXJDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIHNldEdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMoKSB7XG4gIGdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSB0cnVlO1xuXG4gIC8vIENsZWFyIGdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgYWZ0ZXIgYSBzaG9ydCB0aW1lb3V0LiBpT1MgZmlyZXMgb25Qb2ludGVyRW50ZXJcbiAgLy8gd2l0aCBwb2ludGVyVHlwZT1cIm1vdXNlXCIgaW1tZWRpYXRlbHkgYWZ0ZXIgb25Qb2ludGVyVXAgYW5kIGJlZm9yZSBvbkZvY3VzLiBPbiBvdGhlclxuICAvLyBkZXZpY2VzIHRoYXQgZG9uJ3QgaGF2ZSB0aGlzIHF1aXJrLCB3ZSBkb24ndCB3YW50IHRvIGlnbm9yZSBhIG1vdXNlIGhvdmVyIHNvbWV0aW1lIGluXG4gIC8vIHRoZSBkaXN0YW50IGZ1dHVyZSBiZWNhdXNlIGEgdXNlciBwcmV2aW91c2x5IHRvdWNoZWQgdGhlIGVsZW1lbnQuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSBmYWxzZTtcbiAgfSwgNTApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVHbG9iYWxQb2ludGVyRXZlbnQoZSkge1xuICBpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJykge1xuICAgIHNldEdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cEdsb2JhbFRvdWNoRXZlbnRzKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGhhbmRsZUdsb2JhbFBvaW50ZXJFdmVudCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzZXRHbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzKTtcbiAgfVxuXG4gIGhvdmVyQ291bnQrKztcbiAgcmV0dXJuICgpID0+IHtcbiAgICBob3ZlckNvdW50LS07XG4gICAgaWYgKGhvdmVyQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVHbG9iYWxQb2ludGVyRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNldEdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIHBvaW50ZXIgaG92ZXIgaW50ZXJhY3Rpb25zIGZvciBhbiBlbGVtZW50LiBOb3JtYWxpemVzIGJlaGF2aW9yXG4gKiBhY3Jvc3MgYnJvd3NlcnMgYW5kIHBsYXRmb3JtcywgYW5kIGlnbm9yZXMgZW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VIb3Zlcihwcm9wczogSG92ZXJQcm9wcyk6IEhvdmVyUmVzdWx0IHtcbiAgbGV0IHtcbiAgICBvbkhvdmVyU3RhcnQsXG4gICAgb25Ib3ZlckNoYW5nZSxcbiAgICBvbkhvdmVyRW5kLFxuICAgIGlzRGlzYWJsZWRcbiAgfSA9IHByb3BzO1xuXG4gIGxldCBbaXNIb3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IHN0YXRlID0gdXNlUmVmKHtcbiAgICBpc0hvdmVyZWQ6IGZhbHNlLFxuICAgIGlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHM6IGZhbHNlLFxuICAgIHBvaW50ZXJUeXBlOiAnJyxcbiAgICB0YXJnZXQ6IG51bGxcbiAgfSkuY3VycmVudDtcblxuICB1c2VFZmZlY3Qoc2V0dXBHbG9iYWxUb3VjaEV2ZW50cywgW10pO1xuXG4gIGxldCB7aG92ZXJQcm9wcywgdHJpZ2dlckhvdmVyRW5kfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCB0cmlnZ2VySG92ZXJTdGFydCA9IChldmVudCwgcG9pbnRlclR5cGUpID0+IHtcbiAgICAgIHN0YXRlLnBvaW50ZXJUeXBlID0gcG9pbnRlclR5cGU7XG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCBwb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyB8fCBzdGF0ZS5pc0hvdmVyZWQgfHwgIWV2ZW50LmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmlzSG92ZXJlZCA9IHRydWU7XG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIHN0YXRlLnRhcmdldCA9IHRhcmdldDtcblxuICAgICAgaWYgKG9uSG92ZXJTdGFydCkge1xuICAgICAgICBvbkhvdmVyU3RhcnQoe1xuICAgICAgICAgIHR5cGU6ICdob3ZlcnN0YXJ0JyxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgcG9pbnRlclR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkhvdmVyQ2hhbmdlKSB7XG4gICAgICAgIG9uSG92ZXJDaGFuZ2UodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHNldEhvdmVyZWQodHJ1ZSk7XG4gICAgfTtcblxuICAgIGxldCB0cmlnZ2VySG92ZXJFbmQgPSAoZXZlbnQsIHBvaW50ZXJUeXBlKSA9PiB7XG4gICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9ICcnO1xuICAgICAgc3RhdGUudGFyZ2V0ID0gbnVsbDtcblxuICAgICAgaWYgKHBvaW50ZXJUeXBlID09PSAndG91Y2gnIHx8ICFzdGF0ZS5pc0hvdmVyZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgaWYgKG9uSG92ZXJFbmQpIHtcbiAgICAgICAgb25Ib3ZlckVuZCh7XG4gICAgICAgICAgdHlwZTogJ2hvdmVyZW5kJyxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgcG9pbnRlclR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkhvdmVyQ2hhbmdlKSB7XG4gICAgICAgIG9uSG92ZXJDaGFuZ2UoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBzZXRIb3ZlcmVkKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgbGV0IGhvdmVyUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBob3ZlclByb3BzLm9uUG9pbnRlckVudGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgJiYgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJIb3ZlclN0YXJ0KGUsIGUucG9pbnRlclR5cGUpO1xuICAgICAgfTtcblxuICAgICAgaG92ZXJQcm9wcy5vblBvaW50ZXJMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgIGlmICghaXNEaXNhYmxlZCAmJiBlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgdHJpZ2dlckhvdmVyRW5kKGUsIGUucG9pbnRlclR5cGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBob3ZlclByb3BzLm9uVG91Y2hTdGFydCA9ICgpID0+IHtcbiAgICAgICAgc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICBob3ZlclByb3BzLm9uTW91c2VFbnRlciA9IChlKSA9PiB7XG4gICAgICAgIGlmICghc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyAmJiAhZ2xvYmFsSWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cykge1xuICAgICAgICAgIHRyaWdnZXJIb3ZlclN0YXJ0KGUsICdtb3VzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgaG92ZXJQcm9wcy5vbk1vdXNlTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGlzYWJsZWQgJiYgZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHRyaWdnZXJIb3ZlckVuZChlLCAnbW91c2UnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtob3ZlclByb3BzLCB0cmlnZ2VySG92ZXJFbmR9O1xuICB9LCBbb25Ib3ZlclN0YXJ0LCBvbkhvdmVyQ2hhbmdlLCBvbkhvdmVyRW5kLCBpc0Rpc2FibGVkLCBzdGF0ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2FsbCB0aGUgdHJpZ2dlckhvdmVyRW5kIGFzIHNvb24gYXMgaXNEaXNhYmxlZCBjaGFuZ2VzIHRvIHRydWVcbiAgICAvLyBTYWZlIHRvIGNhbGwgdHJpZ2dlckhvdmVyRW5kLCBpdCB3aWxsIGVhcmx5IHJldHVybiBpZiB3ZSBhcmVuJ3QgY3VycmVudGx5IGhvdmVyaW5nXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRyaWdnZXJIb3ZlckVuZCh7Y3VycmVudFRhcmdldDogc3RhdGUudGFyZ2V0fSwgc3RhdGUucG9pbnRlclR5cGUpO1xuICAgIH1cbiAgfSwgW2lzRGlzYWJsZWRdKTtcblxuICByZXR1cm4ge1xuICAgIGhvdmVyUHJvcHMsXG4gICAgaXNIb3ZlcmVkXG4gIH07XG59XG5cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBQb3J0aW9ucyBvZiB0aGUgY29kZSBpbiB0aGlzIGZpbGUgYXJlIGJhc2VkIG9uIGNvZGUgZnJvbSByZWFjdC5cbi8vIE9yaWdpbmFsIGxpY2Vuc2luZyBmb3IgdGhlIGZvbGxvd2luZyBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBOT1RJQ0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvdHJlZS9jYzdjMWFlY2U0NmE2YjY5YjQxOTU4ZDczMWUwZmQyN2M5NGJmYzZjL3BhY2thZ2VzL3JlYWN0LWludGVyYWN0aW9uc1xuXG5pbXBvcnQge1JlZk9iamVjdCwgU3ludGhldGljRXZlbnQsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJbnRlcmFjdE91dHNpZGVQcm9wcyB7XG4gIHJlZjogUmVmT2JqZWN0PEVsZW1lbnQ+LFxuICBvbkludGVyYWN0T3V0c2lkZT86IChlOiBTeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgb25JbnRlcmFjdE91dHNpZGVTdGFydD86IChlOiBTeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgLyoqIFdoZXRoZXIgdGhlIGludGVyYWN0IG91dHNpZGUgZXZlbnRzIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBFeGFtcGxlLCB1c2VkIGluIGNvbXBvbmVudHMgbGlrZSBEaWFsb2dzIGFuZCBQb3BvdmVycyBzbyB0aGV5IGNhbiBjbG9zZVxuICogd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyYWN0T3V0c2lkZShwcm9wczogSW50ZXJhY3RPdXRzaWRlUHJvcHMpIHtcbiAgbGV0IHtyZWYsIG9uSW50ZXJhY3RPdXRzaWRlLCBpc0Rpc2FibGVkLCBvbkludGVyYWN0T3V0c2lkZVN0YXJ0fSA9IHByb3BzO1xuICBsZXQgc3RhdGVSZWYgPSB1c2VSZWYoe1xuICAgIGlzUG9pbnRlckRvd246IGZhbHNlLFxuICAgIGlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHM6IGZhbHNlLFxuICAgIG9uSW50ZXJhY3RPdXRzaWRlLFxuICAgIG9uSW50ZXJhY3RPdXRzaWRlU3RhcnRcbiAgfSk7XG4gIGxldCBzdGF0ZSA9IHN0YXRlUmVmLmN1cnJlbnQ7XG4gIHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlID0gb25JbnRlcmFjdE91dHNpZGU7XG4gIHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlU3RhcnQgPSBvbkludGVyYWN0T3V0c2lkZVN0YXJ0O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgb25Qb2ludGVyRG93biA9IChlKSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZEV2ZW50KGUsIHJlZikgJiYgc3RhdGUub25JbnRlcmFjdE91dHNpZGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlU3RhcnQpIHtcbiAgICAgICAgICBzdGF0ZS5vbkludGVyYWN0T3V0c2lkZVN0YXJ0KGUpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmlzUG9pbnRlckRvd24gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVc2UgcG9pbnRlciBldmVudHMgaWYgYXZhaWxhYmxlLiBPdGhlcndpc2UsIGZhbGwgYmFjayB0byBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzLlxuICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IG9uUG9pbnRlclVwID0gKGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLmlzUG9pbnRlckRvd24gJiYgc3RhdGUub25JbnRlcmFjdE91dHNpZGUgJiYgaXNWYWxpZEV2ZW50KGUsIHJlZikpIHtcbiAgICAgICAgICBzdGF0ZS5pc1BvaW50ZXJEb3duID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUub25JbnRlcmFjdE91dHNpZGUoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIGNoYW5naW5nIHRoZXNlIHRvIGNhcHR1cmUgcGhhc2UgZml4ZWQgY29tYm9ib3hcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvblBvaW50ZXJVcCwgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCB0cnVlKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cykge1xuICAgICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5pc1BvaW50ZXJEb3duICYmIHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlICYmIGlzVmFsaWRFdmVudChlLCByZWYpKSB7XG4gICAgICAgICAgc3RhdGUuaXNQb2ludGVyRG93biA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25Ub3VjaEVuZCA9IChlKSA9PiB7XG4gICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSB0cnVlO1xuICAgICAgICBpZiAoc3RhdGUub25JbnRlcmFjdE91dHNpZGUgJiYgc3RhdGUuaXNQb2ludGVyRG93biAmJiBpc1ZhbGlkRXZlbnQoZSwgcmVmKSkge1xuICAgICAgICAgIHN0YXRlLmlzUG9pbnRlckRvd24gPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5vbkludGVyYWN0T3V0c2lkZShlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIHRydWUpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtyZWYsIHN0YXRlLCBpc0Rpc2FibGVkXSk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFdmVudChldmVudCwgcmVmKSB7XG4gIGlmIChldmVudC5idXR0b24gPiAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaWYgdGhlIGV2ZW50IHRhcmdldCBpcyBubyBsb25nZXIgaW4gdGhlIGRvY3VtZW50XG4gIGlmIChldmVudC50YXJnZXQpIHtcbiAgICBjb25zdCBvd25lckRvY3VtZW50ID0gZXZlbnQudGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKCFvd25lckRvY3VtZW50IHx8ICFvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlZi5jdXJyZW50ICYmICFyZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7QmFzZUV2ZW50fSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7U3ludGhldGljRXZlbnR9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIGEgUmVhY3QgZXZlbnQgaGFuZGxlciB0byBtYWtlIHN0b3BQcm9wYWdhdGlvbiB0aGUgZGVmYXVsdCwgYW5kIHN1cHBvcnQgY29udGludWVQcm9wYWdhdGlvbiBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnRIYW5kbGVyPFQgZXh0ZW5kcyBTeW50aGV0aWNFdmVudD4oaGFuZGxlcjogKGU6IEJhc2VFdmVudDxUPikgPT4gdm9pZCk6IChlOiBUKSA9PiB2b2lkIHtcbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHNob3VsZFN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gIHJldHVybiAoZTogVCkgPT4ge1xuICAgIGxldCBldmVudDogQmFzZUV2ZW50PFQ+ID0ge1xuICAgICAgLi4uZSxcbiAgICAgIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgaXNEZWZhdWx0UHJldmVudGVkKCkge1xuICAgICAgICByZXR1cm4gZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICAgIH0sXG4gICAgICBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N0b3BQcm9wYWdhdGlvbiBpcyBub3cgdGhlIGRlZmF1bHQgYmVoYXZpb3IgZm9yIGV2ZW50cyBpbiBSZWFjdCBTcGVjdHJ1bS4gWW91IGNhbiB1c2UgY29udGludWVQcm9wYWdhdGlvbigpIHRvIHJldmVydCB0aGlzIGJlaGF2aW9yLicpO1xuICAgICAgfSxcbiAgICAgIGNvbnRpbnVlUHJvcGFnYXRpb24oKSB7XG4gICAgICAgIHNob3VsZFN0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBoYW5kbGVyKGV2ZW50KTtcblxuICAgIGlmIChzaG91bGRTdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Y3JlYXRlRXZlbnRIYW5kbGVyfSBmcm9tICcuL2NyZWF0ZUV2ZW50SGFuZGxlcic7XG5pbXBvcnQge0hUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0tleWJvYXJkRXZlbnRzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcblxuZXhwb3J0IGludGVyZmFjZSBLZXlib2FyZFByb3BzIGV4dGVuZHMgS2V5Ym9hcmRFdmVudHMge1xuICAvKiogV2hldGhlciB0aGUga2V5Ym9hcmQgZXZlbnRzIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEtleWJvYXJkUmVzdWx0IHtcbiAgLyoqIFByb3BzIHRvIHNwcmVhZCBvbnRvIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cbiAga2V5Ym9hcmRQcm9wczogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+XG59XG5cbi8qKlxuICogSGFuZGxlcyBrZXlib2FyZCBpbnRlcmFjdGlvbnMgZm9yIGEgZm9jdXNhYmxlIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VLZXlib2FyZChwcm9wczogS2V5Ym9hcmRQcm9wcyk6IEtleWJvYXJkUmVzdWx0IHtcbiAgcmV0dXJuIHtcbiAgICBrZXlib2FyZFByb3BzOiBwcm9wcy5pc0Rpc2FibGVkID8ge30gOiB7XG4gICAgICBvbktleURvd246IGNyZWF0ZUV2ZW50SGFuZGxlcihwcm9wcy5vbktleURvd24pLFxuICAgICAgb25LZXlVcDogY3JlYXRlRXZlbnRIYW5kbGVyKHByb3BzLm9uS2V5VXApXG4gICAgfVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7ZGlzYWJsZVRleHRTZWxlY3Rpb24sIHJlc3RvcmVUZXh0U2VsZWN0aW9ufSAgZnJvbSAnLi90ZXh0U2VsZWN0aW9uJztcbmltcG9ydCB7TW92ZUV2ZW50cywgUG9pbnRlclR5cGV9IGZyb20gJ0ByZWFjdC10eXBlcy9zaGFyZWQnO1xuaW1wb3J0IFJlYWN0LCB7SFRNTEF0dHJpYnV0ZXMsIHVzZU1lbW8sIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VHbG9iYWxMaXN0ZW5lcnN9IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcblxuaW50ZXJmYWNlIE1vdmVSZXN1bHQge1xuICAvKiogUHJvcHMgdG8gc3ByZWFkIG9uIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cbiAgbW92ZVByb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD5cbn1cblxuaW50ZXJmYWNlIEV2ZW50QmFzZSB7XG4gIHNoaWZ0S2V5OiBib29sZWFuLFxuICBjdHJsS2V5OiBib29sZWFuLFxuICBtZXRhS2V5OiBib29sZWFuLFxuICBhbHRLZXk6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBIYW5kbGVzIG1vdmUgaW50ZXJhY3Rpb25zIGFjcm9zcyBtb3VzZSwgdG91Y2gsIGFuZCBrZXlib2FyZCwgaW5jbHVkaW5nIGRyYWdnaW5nIHdpdGhcbiAqIHRoZSBtb3VzZSBvciB0b3VjaCwgYW5kIHVzaW5nIHRoZSBhcnJvdyBrZXlzLiBOb3JtYWxpemVzIGJlaGF2aW9yIGFjcm9zcyBicm93c2VycyBhbmRcbiAqIHBsYXRmb3JtcywgYW5kIGlnbm9yZXMgZW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb3ZlKHByb3BzOiBNb3ZlRXZlbnRzKTogTW92ZVJlc3VsdCB7XG4gIGxldCB7b25Nb3ZlU3RhcnQsIG9uTW92ZSwgb25Nb3ZlRW5kfSA9IHByb3BzO1xuXG4gIGxldCBzdGF0ZSA9IHVzZVJlZjx7XG4gICAgZGlkTW92ZTogYm9vbGVhbixcbiAgICBsYXN0UG9zaXRpb246IHtwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyfSB8IG51bGwsXG4gICAgaWQ6IG51bWJlciB8IG51bGxcbiAgfT4oe2RpZE1vdmU6IGZhbHNlLCBsYXN0UG9zaXRpb246IG51bGwsIGlkOiBudWxsfSk7XG5cbiAgbGV0IHthZGRHbG9iYWxMaXN0ZW5lciwgcmVtb3ZlR2xvYmFsTGlzdGVuZXJ9ID0gdXNlR2xvYmFsTGlzdGVuZXJzKCk7XG5cbiAgbGV0IG1vdmVQcm9wcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBtb3ZlUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiA9IHt9O1xuXG4gICAgbGV0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgZGlzYWJsZVRleHRTZWxlY3Rpb24oKTtcbiAgICAgIHN0YXRlLmN1cnJlbnQuZGlkTW92ZSA9IGZhbHNlO1xuICAgIH07XG4gICAgbGV0IG1vdmUgPSAob3JpZ2luYWxFdmVudDogRXZlbnRCYXNlLCBwb2ludGVyVHlwZTogUG9pbnRlclR5cGUsIGRlbHRhWDogbnVtYmVyLCBkZWx0YVk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGRlbHRhWCA9PT0gMCAmJiBkZWx0YVkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0YXRlLmN1cnJlbnQuZGlkTW92ZSkge1xuICAgICAgICBzdGF0ZS5jdXJyZW50LmRpZE1vdmUgPSB0cnVlO1xuICAgICAgICBvbk1vdmVTdGFydD8uKHtcbiAgICAgICAgICB0eXBlOiAnbW92ZXN0YXJ0JyxcbiAgICAgICAgICBwb2ludGVyVHlwZSxcbiAgICAgICAgICBzaGlmdEtleTogb3JpZ2luYWxFdmVudC5zaGlmdEtleSxcbiAgICAgICAgICBtZXRhS2V5OiBvcmlnaW5hbEV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgY3RybEtleTogb3JpZ2luYWxFdmVudC5jdHJsS2V5LFxuICAgICAgICAgIGFsdEtleTogb3JpZ2luYWxFdmVudC5hbHRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBvbk1vdmUoe1xuICAgICAgICB0eXBlOiAnbW92ZScsXG4gICAgICAgIHBvaW50ZXJUeXBlLFxuICAgICAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgIHNoaWZ0S2V5OiBvcmlnaW5hbEV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICBtZXRhS2V5OiBvcmlnaW5hbEV2ZW50Lm1ldGFLZXksXG4gICAgICAgIGN0cmxLZXk6IG9yaWdpbmFsRXZlbnQuY3RybEtleSxcbiAgICAgICAgYWx0S2V5OiBvcmlnaW5hbEV2ZW50LmFsdEtleVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBsZXQgZW5kID0gKG9yaWdpbmFsRXZlbnQ6IEV2ZW50QmFzZSwgcG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlKSA9PiB7XG4gICAgICByZXN0b3JlVGV4dFNlbGVjdGlvbigpO1xuICAgICAgaWYgKHN0YXRlLmN1cnJlbnQuZGlkTW92ZSkge1xuICAgICAgICBvbk1vdmVFbmQ/Lih7XG4gICAgICAgICAgdHlwZTogJ21vdmVlbmQnLFxuICAgICAgICAgIHBvaW50ZXJUeXBlLFxuICAgICAgICAgIHNoaWZ0S2V5OiBvcmlnaW5hbEV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgIG1ldGFLZXk6IG9yaWdpbmFsRXZlbnQubWV0YUtleSxcbiAgICAgICAgICBjdHJsS2V5OiBvcmlnaW5hbEV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgYWx0S2V5OiBvcmlnaW5hbEV2ZW50LmFsdEtleVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBtb3ZlKGUsICdtb3VzZScsIGUucGFnZVggLSBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbi5wYWdlWCwgZS5wYWdlWSAtIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uLnBhZ2VZKTtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbiA9IHtwYWdlWDogZS5wYWdlWCwgcGFnZVk6IGUucGFnZVl9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbGV0IG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIGVuZChlLCAnbW91c2UnKTtcbiAgICAgICAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgICAgIHJlbW92ZUdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG1vdmVQcm9wcy5vbk1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24gPSB7cGFnZVg6IGUucGFnZVgsIHBhZ2VZOiBlLnBhZ2VZfTtcbiAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IG9uVG91Y2hNb3ZlID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHRvdWNoID0gWy4uLmUuY2hhbmdlZFRvdWNoZXNdLmZpbmRJbmRleCgoe2lkZW50aWZpZXJ9KSA9PiBpZGVudGlmaWVyID09PSBzdGF0ZS5jdXJyZW50LmlkKTtcbiAgICAgICAgaWYgKHRvdWNoID49IDApIHtcbiAgICAgICAgICBsZXQge3BhZ2VYLCBwYWdlWX0gPSBlLmNoYW5nZWRUb3VjaGVzW3RvdWNoXTtcbiAgICAgICAgICBtb3ZlKGUsICd0b3VjaCcsIHBhZ2VYIC0gc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24ucGFnZVgsIHBhZ2VZIC0gc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24ucGFnZVkpO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uID0ge3BhZ2VYLCBwYWdlWX07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBsZXQgb25Ub3VjaEVuZCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGxldCB0b3VjaCA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXS5maW5kSW5kZXgoKHtpZGVudGlmaWVyfSkgPT4gaWRlbnRpZmllciA9PT0gc3RhdGUuY3VycmVudC5pZCk7XG4gICAgICAgIGlmICh0b3VjaCA+PSAwKSB7XG4gICAgICAgICAgZW5kKGUsICd0b3VjaCcpO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnQuaWQgPSBudWxsO1xuICAgICAgICAgIHJlbW92ZUdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgICAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcih3aW5kb3csICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgICAgIHJlbW92ZUdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3RvdWNoY2FuY2VsJywgb25Ub3VjaEVuZCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBtb3ZlUHJvcHMub25Ub3VjaFN0YXJ0ID0gKGU6IFJlYWN0LlRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID09PSAwIHx8IHN0YXRlLmN1cnJlbnQuaWQgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7cGFnZVgsIHBhZ2VZLCBpZGVudGlmaWVyfSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24gPSB7cGFnZVgsIHBhZ2VZfTtcbiAgICAgICAgc3RhdGUuY3VycmVudC5pZCA9IGlkZW50aWZpZXI7XG4gICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICd0b3VjaGNhbmNlbCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBvblBvaW50ZXJNb3ZlID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5wb2ludGVySWQgPT09IHN0YXRlLmN1cnJlbnQuaWQpIHtcbiAgICAgICAgICBsZXQgcG9pbnRlclR5cGUgPSAoZS5wb2ludGVyVHlwZSB8fCAnbW91c2UnKSBhcyBQb2ludGVyVHlwZTtcblxuICAgICAgICAgIC8vIFByb2JsZW1zIHdpdGggUG9pbnRlckV2ZW50I21vdmVtZW50WC9tb3ZlbWVudFk6XG4gICAgICAgICAgLy8gMS4gaXQgaXMgYWx3YXlzIDAgb24gbWFjT1MgU2FmYXJpLlxuICAgICAgICAgIC8vIDIuIE9uIENocm9tZSBBbmRyb2lkLCBpdCdzIHNjYWxlZCBieSBkZXZpY2VQaXhlbFJhdGlvLCBidXQgbm90IG9uIENocm9tZSBtYWNPU1xuICAgICAgICAgIG1vdmUoZSwgcG9pbnRlclR5cGUsIGUucGFnZVggLSBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbi5wYWdlWCwgZS5wYWdlWSAtIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uLnBhZ2VZKTtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbiA9IHtwYWdlWDogZS5wYWdlWCwgcGFnZVk6IGUucGFnZVl9O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25Qb2ludGVyVXAgPSAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLnBvaW50ZXJJZCA9PT0gc3RhdGUuY3VycmVudC5pZCkge1xuICAgICAgICAgIGxldCBwb2ludGVyVHlwZSA9IChlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZScpIGFzIFBvaW50ZXJUeXBlO1xuICAgICAgICAgIGVuZChlLCBwb2ludGVyVHlwZSk7XG4gICAgICAgICAgc3RhdGUuY3VycmVudC5pZCA9IG51bGw7XG4gICAgICAgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIod2luZG93LCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSk7XG4gICAgICAgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIod2luZG93LCAncG9pbnRlcnVwJywgb25Qb2ludGVyVXAsIGZhbHNlKTtcbiAgICAgICAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdwb2ludGVyY2FuY2VsJywgb25Qb2ludGVyVXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbW92ZVByb3BzLm9uUG9pbnRlckRvd24gPSAoZTogUmVhY3QuUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCAmJiBzdGF0ZS5jdXJyZW50LmlkID09IG51bGwpIHtcbiAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uID0ge3BhZ2VYOiBlLnBhZ2VYLCBwYWdlWTogZS5wYWdlWX07XG4gICAgICAgICAgc3RhdGUuY3VycmVudC5pZCA9IGUucG9pbnRlcklkO1xuICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UpO1xuICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCBmYWxzZSk7XG4gICAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIod2luZG93LCAncG9pbnRlcmNhbmNlbCcsIG9uUG9pbnRlclVwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHRyaWdnZXJLZXlib2FyZE1vdmUgPSAoZTogRXZlbnRCYXNlLCBkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXIpID0+IHtcbiAgICAgIHN0YXJ0KCk7XG4gICAgICBtb3ZlKGUsICdrZXlib2FyZCcsIGRlbHRhWCwgZGVsdGFZKTtcbiAgICAgIGVuZChlLCAna2V5Ym9hcmQnKTtcbiAgICB9O1xuXG4gICAgbW92ZVByb3BzLm9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgJ0xlZnQnOlxuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRyaWdnZXJLZXlib2FyZE1vdmUoZSwgLTEsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSaWdodCc6XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRyaWdnZXJLZXlib2FyZE1vdmUoZSwgMSwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VwJzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdHJpZ2dlcktleWJvYXJkTW92ZShlLCAwLCAtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Rvd24nOlxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRyaWdnZXJLZXlib2FyZE1vdmUoZSwgMCwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb3ZlUHJvcHM7XG4gIH0sIFtzdGF0ZSwgb25Nb3ZlU3RhcnQsIG9uTW92ZSwgb25Nb3ZlRW5kLCBhZGRHbG9iYWxMaXN0ZW5lciwgcmVtb3ZlR2xvYmFsTGlzdGVuZXJdKTtcblxuICByZXR1cm4ge21vdmVQcm9wc307XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjEgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtSZWZPYmplY3QsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Njcm9sbEV2ZW50c30gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5pbXBvcnQge3VzZUV2ZW50fSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsV2hlZWxQcm9wcyBleHRlbmRzIFNjcm9sbEV2ZW50cyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzY3JvbGwgbGlzdGVuZXIgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBpc0Rpc2FibGVkPzogYm9vbGVhblxufVxuXG4vLyBzY3JvbGwgd2hlZWwgbmVlZHMgdG8gYmUgYWRkZWQgbm90IHBhc3NpdmVseSBzbyBpdCdzIGNhbmNlbGFibGUsIHNtYWxsIGhlbHBlciBob29rIHRvIHJlbWVtYmVyIHRoYXRcbmV4cG9ydCBmdW5jdGlvbiB1c2VTY3JvbGxXaGVlbChwcm9wczogU2Nyb2xsV2hlZWxQcm9wcywgcmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XG4gIGxldCB7b25TY3JvbGwsIGlzRGlzYWJsZWR9ID0gcHJvcHM7XG4gIGxldCBvblNjcm9sbEhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIC8vIElmIHRoZSBjdHJsS2V5IGlzIHByZXNzZWQsIHRoaXMgaXMgYSB6b29tIGV2ZW50LCBkbyBub3RoaW5nLlxuICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdG9wIHNjcm9sbGluZyB0aGUgcGFnZVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKG9uU2Nyb2xsKSB7XG4gICAgICBvblNjcm9sbCh7ZGVsdGFYOiBlLmRlbHRhWCwgZGVsdGFZOiBlLmRlbHRhWX0pO1xuICAgIH1cbiAgfSwgW29uU2Nyb2xsXSk7XG5cbiAgdXNlRXZlbnQocmVmLCAnd2hlZWwnLCBpc0Rpc2FibGVkID8gbnVsbCA6IG9uU2Nyb2xsSGFuZGxlcik7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtIVE1MQXR0cmlidXRlcywgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvbmdQcmVzc0V2ZW50fSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7bWVyZ2VQcm9wcywgdXNlRGVzY3JpcHRpb24sIHVzZUdsb2JhbExpc3RlbmVyc30gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IHt1c2VQcmVzc30gZnJvbSAnLi91c2VQcmVzcyc7XG5cbmludGVyZmFjZSBMb25nUHJlc3NQcm9wcyB7XG4gIC8qKiBXaGV0aGVyIGxvbmcgcHJlc3MgZXZlbnRzIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW4sXG4gIC8qKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBsb25nIHByZXNzIGludGVyYWN0aW9uIHN0YXJ0cy4gKi9cbiAgb25Mb25nUHJlc3NTdGFydD86IChlOiBMb25nUHJlc3NFdmVudCkgPT4gdm9pZCxcbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGxvbmcgcHJlc3MgaW50ZXJhY3Rpb24gZW5kcywgZWl0aGVyXG4gICAqIG92ZXIgdGhlIHRhcmdldCBvciB3aGVuIHRoZSBwb2ludGVyIGxlYXZlcyB0aGUgdGFyZ2V0LlxuICAgKi9cbiAgb25Mb25nUHJlc3NFbmQ/OiAoZTogTG9uZ1ByZXNzRXZlbnQpID0+IHZvaWQsXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHRocmVzaG9sZCB0aW1lIGlzIG1ldCB3aGlsZVxuICAgKiB0aGUgcHJlc3MgaXMgb3ZlciB0aGUgdGFyZ2V0LlxuICAgKi9cbiAgb25Mb25nUHJlc3M/OiAoZTogTG9uZ1ByZXNzRXZlbnQpID0+IHZvaWQsXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHRyaWdnZXJpbmcgYSBsb25nIHByZXNzLlxuICAgKiBAZGVmYXVsdCA1MDBtc1xuICAgKi9cbiAgdGhyZXNob2xkPzogbnVtYmVyLFxuICAvKipcbiAgICogQSBkZXNjcmlwdGlvbiBmb3IgYXNzaXN0aXZlIHRlY2hvbG9neSB1c2VycyBpbmRpY2F0aW5nIHRoYXQgYSBsb25nIHByZXNzXG4gICAqIGFjdGlvbiBpcyBhdmFpbGFibGUsIGUuZy4gXCJMb25nIHByZXNzIHRvIG9wZW4gbWVudVwiLlxuICAgKi9cbiAgYWNjZXNzaWJpbGl0eURlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBMb25nUHJlc3NSZXN1bHQge1xuICAvKiogUHJvcHMgdG8gc3ByZWFkIG9uIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cbiAgbG9uZ1ByZXNzUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PlxufVxuXG5jb25zdCBERUZBVUxUX1RIUkVTSE9MRCA9IDUwMDtcblxuLyoqXG4gKiBIYW5kbGVzIGxvbmcgcHJlc3MgaW50ZXJhY3Rpb25zIGFjcm9zcyBtb3VzZSBhbmQgdG91Y2ggZGV2aWNlcy4gU3VwcG9ydHMgYSBjdXN0b21pemFibGUgdGltZSB0aHJlc2hvbGQsXG4gKiBhY2Nlc3NpYmlsaXR5IGRlc2NyaXB0aW9uLCBhbmQgbm9ybWFsaXplcyBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMgYW5kIGRldmljZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb25nUHJlc3MocHJvcHM6IExvbmdQcmVzc1Byb3BzKTogTG9uZ1ByZXNzUmVzdWx0IHtcbiAgbGV0IHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIG9uTG9uZ1ByZXNzU3RhcnQsXG4gICAgb25Mb25nUHJlc3NFbmQsXG4gICAgb25Mb25nUHJlc3MsXG4gICAgdGhyZXNob2xkID0gREVGQVVMVF9USFJFU0hPTEQsXG4gICAgYWNjZXNzaWJpbGl0eURlc2NyaXB0aW9uXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB0aW1lUmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQge2FkZEdsb2JhbExpc3RlbmVyLCByZW1vdmVHbG9iYWxMaXN0ZW5lcn0gPSB1c2VHbG9iYWxMaXN0ZW5lcnMoKTtcblxuICBsZXQge3ByZXNzUHJvcHN9ID0gdXNlUHJlc3Moe1xuICAgIGlzRGlzYWJsZWQsXG4gICAgb25QcmVzc1N0YXJ0KGUpIHtcbiAgICAgIGlmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnIHx8IGUucG9pbnRlclR5cGUgPT09ICd0b3VjaCcpIHtcbiAgICAgICAgaWYgKG9uTG9uZ1ByZXNzU3RhcnQpIHtcbiAgICAgICAgICBvbkxvbmdQcmVzc1N0YXJ0KHtcbiAgICAgICAgICAgIC4uLmUsXG4gICAgICAgICAgICB0eXBlOiAnbG9uZ3ByZXNzc3RhcnQnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBQcmV2ZW50IG90aGVyIHVzZVByZXNzIGhhbmRsZXJzIGZyb20gYWxzbyBoYW5kbGluZyB0aGlzIGV2ZW50LlxuICAgICAgICAgIGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IFBvaW50ZXJFdmVudCgncG9pbnRlcmNhbmNlbCcsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgICAgICAgIGlmIChvbkxvbmdQcmVzcykge1xuICAgICAgICAgICAgb25Mb25nUHJlc3Moe1xuICAgICAgICAgICAgICAuLi5lLFxuICAgICAgICAgICAgICB0eXBlOiAnbG9uZ3ByZXNzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpbWVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0sIHRocmVzaG9sZCk7XG5cbiAgICAgICAgLy8gUHJldmVudCBjb250ZXh0IG1lbnUsIHdoaWNoIG1heSBiZSBvcGVuZWQgb24gbG9uZyBwcmVzcyBvbiB0b3VjaCBkZXZpY2VzXG4gICAgICAgIGlmIChlLnBvaW50ZXJUeXBlID09PSAndG91Y2gnKSB7XG4gICAgICAgICAgbGV0IG9uQ29udGV4dE1lbnUgPSBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIoZS50YXJnZXQsICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIod2luZG93LCAncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgbm8gY29udGV4dG1lbnUgZXZlbnQgaXMgZmlyZWQgcXVpY2tseSBhZnRlciBwb2ludGVydXAsIHJlbW92ZSB0aGUgaGFuZGxlclxuICAgICAgICAgICAgLy8gc28gZnV0dXJlIGNvbnRleHQgbWVudSBldmVudHMgb3V0c2lkZSBhIGxvbmcgcHJlc3MgYXJlIG5vdCBwcmV2ZW50ZWQuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIoZS50YXJnZXQsICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUpO1xuICAgICAgICAgICAgfSwgMzApO1xuICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uUHJlc3NFbmQoZSkge1xuICAgICAgaWYgKHRpbWVSZWYuY3VycmVudCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZVJlZi5jdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uTG9uZ1ByZXNzRW5kICYmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnIHx8IGUucG9pbnRlclR5cGUgPT09ICd0b3VjaCcpKSB7XG4gICAgICAgIG9uTG9uZ1ByZXNzRW5kKHtcbiAgICAgICAgICAuLi5lLFxuICAgICAgICAgIHR5cGU6ICdsb25ncHJlc3NlbmQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGRlc2NyaXB0aW9uUHJvcHMgPSB1c2VEZXNjcmlwdGlvbihvbkxvbmdQcmVzcyAmJiAhaXNEaXNhYmxlZCA/IGFjY2Vzc2liaWxpdHlEZXNjcmlwdGlvbiA6IG51bGwpO1xuXG4gIHJldHVybiB7XG4gICAgbG9uZ1ByZXNzUHJvcHM6IG1lcmdlUHJvcHMocHJlc3NQcm9wcywgZGVzY3JpcHRpb25Qcm9wcylcbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICdMaWNlbnNlJyk7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gJ0FTIElTJyBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Zm9jdXNXaXRob3V0U2Nyb2xsaW5nLCBydW5BZnRlclRyYW5zaXRpb259IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcbmltcG9ydCB7Z2V0SW50ZXJhY3Rpb25Nb2RhbGl0eX0gZnJvbSAnQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zJztcblxuLyoqXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBmb2N1c2VzIGFuIGVsZW1lbnQgd2hpbGUgYXZvaWRpbmcgdW5kZXNpcmVkIHNpZGUgZWZmZWN0cyBzdWNoXG4gKiBhcyBwYWdlIHNjcm9sbGluZyBhbmQgc2NyZWVuIHJlYWRlciBpc3N1ZXMgd2l0aCBDU1MgdHJhbnNpdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c1NhZmVseShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAvLyBJZiB0aGUgdXNlciBpcyBpbnRlcmFjdGluZyB3aXRoIGEgdmlydHVhbCBjdXJzb3IsIGUuZy4gc2NyZWVuIHJlYWRlciwgdGhlblxuICAvLyB3YWl0IHVudGlsIGFmdGVyIGFueSBhbmltYXRlZCB0cmFuc2l0aW9ucyB0aGF0IGFyZSBjdXJyZW50bHkgb2NjdXJyaW5nIG9uXG4gIC8vIHRoZSBwYWdlIGJlZm9yZSBzaGlmdGluZyBmb2N1cy4gVGhpcyBhdm9pZHMgaXNzdWVzIHdpdGggVm9pY2VPdmVyIG9uIGlPU1xuICAvLyBjYXVzaW5nIHRoZSBwYWdlIHRvIHNjcm9sbCB3aGVuIG1vdmluZyBmb2N1cyBpZiB0aGUgZWxlbWVudCBpcyB0cmFuc2l0aW9uaW5nXG4gIC8vIGZyb20gb2ZmIHRoZSBzY3JlZW4uXG4gIGlmIChnZXRJbnRlcmFjdGlvbk1vZGFsaXR5KCkgPT09ICd2aXJ0dWFsJykge1xuICAgIGxldCBsYXN0Rm9jdXNlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJ1bkFmdGVyVHJhbnNpdGlvbigoKSA9PiB7XG4gICAgICAvLyBJZiBmb2N1cyBkaWQgbm90IG1vdmUgYW5kIHRoZSBlbGVtZW50IGlzIHN0aWxsIGluIHRoZSBkb2N1bWVudCwgZm9jdXMgaXQuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEZvY3VzZWRFbGVtZW50ICYmIGRvY3VtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgIGZvY3VzV2l0aG91dFNjcm9sbGluZyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb2N1c1dpdGhvdXRTY3JvbGxpbmcoZWxlbWVudCk7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMSBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBpc1N0eWxlVmlzaWJsZShlbGVtZW50OiBFbGVtZW50KSB7XG4gIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQge2Rpc3BsYXksIHZpc2liaWxpdHl9ID0gZWxlbWVudC5zdHlsZTtcblxuICBsZXQgaXNWaXNpYmxlID0gKFxuICAgIGRpc3BsYXkgIT09ICdub25lJyAmJlxuICAgIHZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmXG4gICAgdmlzaWJpbGl0eSAhPT0gJ2NvbGxhcHNlJ1xuICApO1xuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBjb25zdCB7Z2V0Q29tcHV0ZWRTdHlsZX0gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgbGV0IHtkaXNwbGF5OiBjb21wdXRlZERpc3BsYXksIHZpc2liaWxpdHk6IGNvbXB1dGVkVmlzaWJpbGl0eX0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaXNWaXNpYmxlID0gKFxuICAgICAgY29tcHV0ZWREaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIGNvbXB1dGVkVmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicgJiZcbiAgICAgIGNvbXB1dGVkVmlzaWJpbGl0eSAhPT0gJ2NvbGxhcHNlJ1xuICAgICk7XG4gIH1cblxuICByZXR1cm4gaXNWaXNpYmxlO1xufVxuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZVZpc2libGUoZWxlbWVudDogRWxlbWVudCwgY2hpbGRFbGVtZW50PzogRWxlbWVudCkge1xuICByZXR1cm4gKFxuICAgICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaGlkZGVuJykgJiZcbiAgICAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnICYmXG4gICAgICBjaGlsZEVsZW1lbnQgJiZcbiAgICAgIGNoaWxkRWxlbWVudC5ub2RlTmFtZSAhPT0gJ1NVTU1BUlknXG4gICAgICA/IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdvcGVuJylcbiAgICAgIDogdHJ1ZSlcbiAgKTtcbn1cblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Rlc3RpbmctbGlicmFyeS9qZXN0LWRvbSBhbmQgXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLXRlc3QtdXRpbHMtbmV4dC8uXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBAcGFyYW0gZWxlbWVudCAtIEVsZW1lbnQgdG8gZXZhbHVhdGUgZm9yIGRpc3BsYXkgb3IgdmlzaWJpbGl0eS5cbiAqLyAgXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZShlbGVtZW50OiBFbGVtZW50LCBjaGlsZEVsZW1lbnQ/OiBFbGVtZW50KSB7XG4gIHJldHVybiAoXG4gICAgZWxlbWVudC5ub2RlTmFtZSAhPT0gJyNjb21tZW50JyAmJlxuICAgIGlzU3R5bGVWaXNpYmxlKGVsZW1lbnQpICYmXG4gICAgaXNBdHRyaWJ1dGVWaXNpYmxlKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgJiZcbiAgICAoIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQucGFyZW50RWxlbWVudCwgZWxlbWVudCkpXG4gICk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtmb2N1c1NhZmVseX0gZnJvbSAnLi9mb2N1c1NhZmVseSc7XG5pbXBvcnQge2lzRWxlbWVudFZpc2libGV9IGZyb20gJy4vaXNFbGVtZW50VmlzaWJsZSc7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdE5vZGUsIFJlZk9iamVjdCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlTGF5b3V0RWZmZWN0fSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5cbi8vIGltcG9ydCB7Rm9jdXNTY29wZSwgdXNlRm9jdXNTY29wZX0gZnJvbSAncmVhY3QtZXZlbnRzL2ZvY3VzLXNjb3BlJztcbi8vIGV4cG9ydCB7Rm9jdXNTY29wZX07XG5cbmludGVyZmFjZSBGb2N1c1Njb3BlUHJvcHMge1xuICAvKiogVGhlIGNvbnRlbnRzIG9mIHRoZSBmb2N1cyBzY29wZS4gKi9cbiAgY2hpbGRyZW46IFJlYWN0Tm9kZSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBjb250YWluIGZvY3VzIGluc2lkZSB0aGUgc2NvcGUsIHNvIHVzZXJzIGNhbm5vdFxuICAgKiBtb3ZlIGZvY3VzIG91dHNpZGUsIGZvciBleGFtcGxlIGluIGEgbW9kYWwgZGlhbG9nLlxuICAgKi9cbiAgY29udGFpbj86IGJvb2xlYW4sXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVzdG9yZSBmb2N1cyBiYWNrIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWRcbiAgICogd2hlbiB0aGUgZm9jdXMgc2NvcGUgbW91bnRlZCwgYWZ0ZXIgdGhlIGZvY3VzIHNjb3BlIHVubW91bnRzLlxuICAgKi9cbiAgcmVzdG9yZUZvY3VzPzogYm9vbGVhbixcblxuICAvKiogV2hldGhlciB0byBhdXRvIGZvY3VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgZm9jdXMgc2NvcGUgb24gbW91bnQuICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEZvY3VzTWFuYWdlck9wdGlvbnMge1xuICAvKiogVGhlIGVsZW1lbnQgdG8gc3RhcnQgc2VhcmNoaW5nIGZyb20uIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50IGJ5IGRlZmF1bHQuICovXG4gIGZyb20/OiBIVE1MRWxlbWVudCxcbiAgLyoqIFdoZXRoZXIgdG8gb25seSBpbmNsdWRlIHRhYmJhYmxlIGVsZW1lbnRzLCBvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLiAqL1xuICB0YWJiYWJsZT86IGJvb2xlYW4sXG4gIC8qKiBXaGV0aGVyIGZvY3VzIHNob3VsZCB3cmFwIGFyb3VuZCB3aGVuIGl0IHJlYWNoZXMgdGhlIGVuZCBvZiB0aGUgc2NvcGUuICovXG4gIHdyYXA/OiBib29sZWFuLFxuICAvKiogQSBjYWxsYmFjayB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmb2N1c2VkLiAqL1xuICBhY2NlcHQ/OiAobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzTWFuYWdlciB7XG4gIC8qKiBNb3ZlcyBmb2N1cyB0byB0aGUgbmV4dCBmb2N1c2FibGUgb3IgdGFiYmFibGUgZWxlbWVudCBpbiB0aGUgZm9jdXMgc2NvcGUuICovXG4gIGZvY3VzTmV4dChvcHRzPzogRm9jdXNNYW5hZ2VyT3B0aW9ucyk6IEhUTUxFbGVtZW50LFxuICAvKiogTW92ZXMgZm9jdXMgdG8gdGhlIHByZXZpb3VzIGZvY3VzYWJsZSBvciB0YWJiYWJsZSBlbGVtZW50IGluIHRoZSBmb2N1cyBzY29wZS4gKi9cbiAgZm9jdXNQcmV2aW91cyhvcHRzPzogRm9jdXNNYW5hZ2VyT3B0aW9ucyk6IEhUTUxFbGVtZW50LFxuICAvKiogTW92ZXMgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBvciB0YWJiYWJsZSBlbGVtZW50IGluIHRoZSBmb2N1cyBzY29wZS4gKi9cbiAgZm9jdXNGaXJzdChvcHRzPzogRm9jdXNNYW5hZ2VyT3B0aW9ucyk6IEhUTUxFbGVtZW50LFxuICAgIC8qKiBNb3ZlcyBmb2N1cyB0byB0aGUgbGFzdCBmb2N1c2FibGUgb3IgdGFiYmFibGUgZWxlbWVudCBpbiB0aGUgZm9jdXMgc2NvcGUuICovXG4gIGZvY3VzTGFzdChvcHRzPzogRm9jdXNNYW5hZ2VyT3B0aW9ucyk6IEhUTUxFbGVtZW50XG59XG5cbnR5cGUgU2NvcGVSZWYgPSBSZWZPYmplY3Q8SFRNTEVsZW1lbnRbXT47XG5pbnRlcmZhY2UgSUZvY3VzQ29udGV4dCB7XG4gIHNjb3BlUmVmOiBTY29wZVJlZixcbiAgZm9jdXNNYW5hZ2VyOiBGb2N1c01hbmFnZXJcbn1cblxuY29uc3QgRm9jdXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxJRm9jdXNDb250ZXh0PihudWxsKTtcblxubGV0IGFjdGl2ZVNjb3BlOiBTY29wZVJlZiA9IG51bGw7XG5sZXQgc2NvcGVzOiBNYXA8U2NvcGVSZWYsIFNjb3BlUmVmIHwgbnVsbD4gPSBuZXcgTWFwKCk7XG5cbi8vIFRoaXMgaXMgYSBoYWNreSBET00tYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgYSBGb2N1c1Njb3BlIHVudGlsIHRoaXMgUkZDIGxhbmRzIGluIFJlYWN0OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwOVxuLy8gRm9yIG5vdywgaXQgcmVsaWVzIG9uIHRoZSBET00gdHJlZSBvcmRlciByYXRoZXIgdGhhbiB0aGUgUmVhY3QgdHJlZSBvcmRlciwgYW5kIGlzIHByb2JhYmx5XG4vLyBsZXNzIG9wdGltaXplZCBmb3IgcGVyZm9ybWFuY2UuXG5cbi8qKlxuICogQSBGb2N1c1Njb3BlIG1hbmFnZXMgZm9jdXMgZm9yIGl0cyBkZXNjZW5kYW50cy4gSXQgc3VwcG9ydHMgY29udGFpbmluZyBmb2N1cyBpbnNpZGVcbiAqIHRoZSBzY29wZSwgcmVzdG9yaW5nIGZvY3VzIHRvIHRoZSBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbiB1bm1vdW50LCBhbmQgYXV0b1xuICogZm9jdXNpbmcgY2hpbGRyZW4gb24gbW91bnQuIEl0IGFsc28gYWN0cyBhcyBhIGNvbnRhaW5lciBmb3IgYSBwcm9ncmFtbWF0aWMgZm9jdXNcbiAqIG1hbmFnZW1lbnQgaW50ZXJmYWNlIHRoYXQgY2FuIGJlIHVzZWQgdG8gbW92ZSBmb2N1cyBmb3J3YXJkIGFuZCBiYWNrIGluIHJlc3BvbnNlXG4gKiB0byB1c2VyIGV2ZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEZvY3VzU2NvcGUocHJvcHM6IEZvY3VzU2NvcGVQcm9wcykge1xuICBsZXQge2NoaWxkcmVuLCBjb250YWluLCByZXN0b3JlRm9jdXMsIGF1dG9Gb2N1c30gPSBwcm9wcztcbiAgbGV0IHN0YXJ0UmVmID0gdXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcbiAgbGV0IGVuZFJlZiA9IHVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XG4gIGxldCBzY29wZVJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudFtdPihbXSk7XG4gIGxldCBjdHggPSB1c2VDb250ZXh0KEZvY3VzQ29udGV4dCk7XG4gIGxldCBwYXJlbnRTY29wZSA9IGN0eD8uc2NvcGVSZWY7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAvLyBGaW5kIGFsbCByZW5kZXJlZCBub2RlcyBiZXR3ZWVuIHRoZSBzZW50aW5lbHMgYW5kIGFkZCB0aGVtIHRvIHRoZSBzY29wZS5cbiAgICBsZXQgbm9kZSA9IHN0YXJ0UmVmLmN1cnJlbnQubmV4dFNpYmxpbmc7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gZW5kUmVmLmN1cnJlbnQpIHtcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICB9XG5cbiAgICBzY29wZVJlZi5jdXJyZW50ID0gbm9kZXM7XG4gIH0sIFtjaGlsZHJlbiwgcGFyZW50U2NvcGVdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHNjb3Blcy5zZXQoc2NvcGVSZWYsIHBhcmVudFNjb3BlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgYWN0aXZlIHNjb3BlIG9uIHVubW91bnQgaWYgdGhpcyBzY29wZSBvciBhIGRlc2NlbmRhbnQgc2NvcGUgaXMgYWN0aXZlLlxuICAgICAgLy8gUGFyZW50IGVmZmVjdCBjbGVhbnVwcyBydW4gYmVmb3JlIGNoaWxkcmVuLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZVxuICAgICAgLy8gcGFyZW50IHNjb3BlIGFjdHVhbGx5IHN0aWxsIGV4aXN0cyBiZWZvcmUgcmVzdG9yaW5nIHRoZSBhY3RpdmUgc2NvcGUgdG8gaXQuXG4gICAgICBpZiAoXG4gICAgICAgIChzY29wZVJlZiA9PT0gYWN0aXZlU2NvcGUgfHwgaXNBbmNlc3RvclNjb3BlKHNjb3BlUmVmLCBhY3RpdmVTY29wZSkpICYmXG4gICAgICAgICghcGFyZW50U2NvcGUgfHwgc2NvcGVzLmhhcyhwYXJlbnRTY29wZSkpXG4gICAgICApIHtcbiAgICAgICAgYWN0aXZlU2NvcGUgPSBwYXJlbnRTY29wZTtcbiAgICAgIH1cbiAgICAgIHNjb3Blcy5kZWxldGUoc2NvcGVSZWYpO1xuICAgIH07XG4gIH0sIFtzY29wZVJlZiwgcGFyZW50U2NvcGVdKTtcblxuICB1c2VGb2N1c0NvbnRhaW5tZW50KHNjb3BlUmVmLCBjb250YWluKTtcbiAgdXNlUmVzdG9yZUZvY3VzKHNjb3BlUmVmLCByZXN0b3JlRm9jdXMsIGNvbnRhaW4pO1xuICB1c2VBdXRvRm9jdXMoc2NvcGVSZWYsIGF1dG9Gb2N1cyk7XG5cbiAgbGV0IGZvY3VzTWFuYWdlciA9IGNyZWF0ZUZvY3VzTWFuYWdlckZvclNjb3BlKHNjb3BlUmVmKTtcblxuICByZXR1cm4gKFxuICAgIDxGb2N1c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzY29wZVJlZiwgZm9jdXNNYW5hZ2VyfX0+XG4gICAgICA8c3BhbiBkYXRhLWZvY3VzLXNjb3BlLXN0YXJ0IGhpZGRlbiByZWY9e3N0YXJ0UmVmfSAvPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHNwYW4gZGF0YS1mb2N1cy1zY29wZS1lbmQgaGlkZGVuIHJlZj17ZW5kUmVmfSAvPlxuICAgIDwvRm9jdXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBGb2N1c01hbmFnZXIgaW50ZXJmYWNlIGZvciB0aGUgcGFyZW50IEZvY3VzU2NvcGUuXG4gKiBBIEZvY3VzTWFuYWdlciBjYW4gYmUgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IG1vdmUgZm9jdXMgd2l0aGluXG4gKiBhIEZvY3VzU2NvcGUsIGUuZy4gaW4gcmVzcG9uc2UgdG8gdXNlciBldmVudHMgbGlrZSBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNNYW5hZ2VyKCk6IEZvY3VzTWFuYWdlciB7XG4gIHJldHVybiB1c2VDb250ZXh0KEZvY3VzQ29udGV4dCk/LmZvY3VzTWFuYWdlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9jdXNNYW5hZ2VyRm9yU2NvcGUoc2NvcGVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRWxlbWVudFtdPik6IEZvY3VzTWFuYWdlciB7XG4gIHJldHVybiB7XG4gICAgZm9jdXNOZXh0KG9wdHM6IEZvY3VzTWFuYWdlck9wdGlvbnMgPSB7fSkge1xuICAgICAgbGV0IHNjb3BlID0gc2NvcGVSZWYuY3VycmVudDtcbiAgICAgIGxldCB7ZnJvbSwgdGFiYmFibGUsIHdyYXB9ID0gb3B0cztcbiAgICAgIGxldCBub2RlID0gZnJvbSB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgbGV0IHNlbnRpbmVsID0gc2NvcGVbMF0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKGdldFNjb3BlUm9vdChzY29wZSksIHt0YWJiYWJsZX0sIHNjb3BlKTtcbiAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGlzRWxlbWVudEluU2NvcGUobm9kZSwgc2NvcGUpID8gbm9kZSA6IHNlbnRpbmVsO1xuICAgICAgbGV0IG5leHROb2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoIW5leHROb2RlICYmIHdyYXApIHtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc2VudGluZWw7XG4gICAgICAgIG5leHROb2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAobmV4dE5vZGUpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50KG5leHROb2RlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgICB9LFxuICAgIGZvY3VzUHJldmlvdXMob3B0czogRm9jdXNNYW5hZ2VyT3B0aW9ucyA9IHt9KSB7XG4gICAgICBsZXQgc2NvcGUgPSBzY29wZVJlZi5jdXJyZW50O1xuICAgICAgbGV0IHtmcm9tLCB0YWJiYWJsZSwgd3JhcH0gPSBvcHRzO1xuICAgICAgbGV0IG5vZGUgPSBmcm9tIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBsZXQgc2VudGluZWwgPSBzY29wZVtzY29wZS5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBsZXQgd2Fsa2VyID0gZ2V0Rm9jdXNhYmxlVHJlZVdhbGtlcihnZXRTY29wZVJvb3Qoc2NvcGUpLCB7dGFiYmFibGV9LCBzY29wZSk7XG4gICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBpc0VsZW1lbnRJblNjb3BlKG5vZGUsIHNjb3BlKSA/IG5vZGUgOiBzZW50aW5lbDtcbiAgICAgIGxldCBwcmV2aW91c05vZGUgPSB3YWxrZXIucHJldmlvdXNOb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoIXByZXZpb3VzTm9kZSAmJiB3cmFwKSB7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHNlbnRpbmVsO1xuICAgICAgICBwcmV2aW91c05vZGUgPSB3YWxrZXIucHJldmlvdXNOb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAocHJldmlvdXNOb2RlKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudChwcmV2aW91c05vZGUsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZpb3VzTm9kZTtcbiAgICB9LFxuICAgIGZvY3VzRmlyc3Qob3B0cyA9IHt9KSB7XG4gICAgICBsZXQgc2NvcGUgPSBzY29wZVJlZi5jdXJyZW50O1xuICAgICAgbGV0IHt0YWJiYWJsZX0gPSBvcHRzO1xuICAgICAgbGV0IHdhbGtlciA9IGdldEZvY3VzYWJsZVRyZWVXYWxrZXIoZ2V0U2NvcGVSb290KHNjb3BlKSwge3RhYmJhYmxlfSwgc2NvcGUpO1xuICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc2NvcGVbMF0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKG5leHROb2RlKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudChuZXh0Tm9kZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfSxcbiAgICBmb2N1c0xhc3Qob3B0cyA9IHt9KSB7XG4gICAgICBsZXQgc2NvcGUgPSBzY29wZVJlZi5jdXJyZW50O1xuICAgICAgbGV0IHt0YWJiYWJsZX0gPSBvcHRzO1xuICAgICAgbGV0IHdhbGtlciA9IGdldEZvY3VzYWJsZVRyZWVXYWxrZXIoZ2V0U2NvcGVSb290KHNjb3BlKSwge3RhYmJhYmxlfSwgc2NvcGUpO1xuICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc2NvcGVbc2NvcGUubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgbGV0IHByZXZpb3VzTm9kZSA9IHdhbGtlci5wcmV2aW91c05vZGUoKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChwcmV2aW91c05vZGUpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50KHByZXZpb3VzTm9kZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldmlvdXNOb2RlO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBbXG4gICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPWhpZGRlbl0pJyxcbiAgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLFxuICAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJyxcbiAgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLFxuICAnYVtocmVmXScsXG4gICdhcmVhW2hyZWZdJyxcbiAgJ3N1bW1hcnknLFxuICAnaWZyYW1lJyxcbiAgJ29iamVjdCcsXG4gICdlbWJlZCcsXG4gICdhdWRpb1tjb250cm9sc10nLFxuICAndmlkZW9bY29udHJvbHNdJyxcbiAgJ1tjb250ZW50ZWRpdGFibGVdJ1xuXTtcblxuY29uc3QgRk9DVVNBQkxFX0VMRU1FTlRfU0VMRUNUT1IgPSBmb2N1c2FibGVFbGVtZW50cy5qb2luKCc6bm90KFtoaWRkZW5dKSwnKSArICcsW3RhYmluZGV4XTpub3QoW2Rpc2FibGVkXSk6bm90KFtoaWRkZW5dKSc7XG5cbmZvY3VzYWJsZUVsZW1lbnRzLnB1c2goJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW2Rpc2FibGVkXSknKTtcbmNvbnN0IFRBQkJBQkxFX0VMRU1FTlRfU0VMRUNUT1IgPSBmb2N1c2FibGVFbGVtZW50cy5qb2luKCc6bm90KFtoaWRkZW5dKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLCcpO1xuXG5mdW5jdGlvbiBnZXRTY29wZVJvb3Qoc2NvcGU6IEhUTUxFbGVtZW50W10pIHtcbiAgcmV0dXJuIHNjb3BlWzBdLnBhcmVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVzZUZvY3VzQ29udGFpbm1lbnQoc2NvcGVSZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudFtdPiwgY29udGFpbjogYm9vbGVhbikge1xuICBsZXQgZm9jdXNlZE5vZGUgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KCk7XG5cbiAgbGV0IHJhZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBsZXQgc2NvcGUgPSBzY29wZVJlZi5jdXJyZW50O1xuICAgIGlmICghY29udGFpbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSB0aGUgVGFiIGtleSB0byBjb250YWluIGZvY3VzIHdpdGhpbiB0aGUgc2NvcGVcbiAgICBsZXQgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSAhPT0gJ1RhYicgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBzY29wZVJlZiAhPT0gYWN0aXZlU2NvcGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZm9jdXNlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgbGV0IHNjb3BlID0gc2NvcGVSZWYuY3VycmVudDtcbiAgICAgIGlmICghaXNFbGVtZW50SW5TY29wZShmb2N1c2VkRWxlbWVudCwgc2NvcGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHdhbGtlciA9IGdldEZvY3VzYWJsZVRyZWVXYWxrZXIoZ2V0U2NvcGVSb290KHNjb3BlKSwge3RhYmJhYmxlOiB0cnVlfSwgc2NvcGUpO1xuICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZm9jdXNlZEVsZW1lbnQ7XG4gICAgICBsZXQgbmV4dEVsZW1lbnQgPSAoZS5zaGlmdEtleSA/IHdhbGtlci5wcmV2aW91c05vZGUoKSA6IHdhbGtlci5uZXh0Tm9kZSgpKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICghbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZS5zaGlmdEtleSA/IHNjb3BlW3Njb3BlLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZyA6IHNjb3BlWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIG5leHRFbGVtZW50ID0gKGUuc2hpZnRLZXkgPyB3YWxrZXIucHJldmlvdXNOb2RlKCkgOiB3YWxrZXIubmV4dE5vZGUoKSkgIGFzIEhUTUxFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobmV4dEVsZW1lbnQpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50KG5leHRFbGVtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IG9uRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgLy8gSWYgZm9jdXNpbmcgYW4gZWxlbWVudCBpbiBhIGNoaWxkIHNjb3BlIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHNjb3BlLCB0aGUgY2hpbGQgYmVjb21lcyBhY3RpdmUuXG4gICAgICAvLyBNb3Zpbmcgb3V0IG9mIHRoZSBhY3RpdmUgc2NvcGUgdG8gYW4gYW5jZXN0b3IgaXMgbm90IGFsbG93ZWQuXG4gICAgICBpZiAoIWFjdGl2ZVNjb3BlIHx8IGlzQW5jZXN0b3JTY29wZShhY3RpdmVTY29wZSwgc2NvcGVSZWYpKSB7XG4gICAgICAgIGFjdGl2ZVNjb3BlID0gc2NvcGVSZWY7XG4gICAgICAgIGZvY3VzZWROb2RlLmN1cnJlbnQgPSBlLnRhcmdldDtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGVSZWYgPT09IGFjdGl2ZVNjb3BlICYmICFpc0VsZW1lbnRJbkNoaWxkU2NvcGUoZS50YXJnZXQsIHNjb3BlUmVmKSkge1xuICAgICAgICAvLyBJZiBhIGZvY3VzIGV2ZW50IG9jY3VycyBvdXRzaWRlIHRoZSBhY3RpdmUgc2NvcGUgKGUuZy4gdXNlciB0YWJzIGZyb20gYnJvd3NlciBsb2NhdGlvbiBiYXIpLFxuICAgICAgICAvLyByZXN0b3JlIGZvY3VzIHRvIHRoZSBwcmV2aW91c2x5IGZvY3VzZWQgbm9kZSBvciB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudCBpbiB0aGUgYWN0aXZlIHNjb3BlLlxuICAgICAgICBpZiAoZm9jdXNlZE5vZGUuY3VycmVudCkge1xuICAgICAgICAgIGZvY3VzZWROb2RlLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVTY29wZSkge1xuICAgICAgICAgIGZvY3VzRmlyc3RJblNjb3BlKGFjdGl2ZVNjb3BlLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlUmVmID09PSBhY3RpdmVTY29wZSkge1xuICAgICAgICBmb2N1c2VkTm9kZS5jdXJyZW50ID0gZS50YXJnZXQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBvbkJsdXIgPSAoZSkgPT4ge1xuICAgICAgLy8gRmlyZWZveCBkb2Vzbid0IHNoaWZ0IGZvY3VzIGJhY2sgdG8gdGhlIERpYWxvZyBwcm9wZXJseSB3aXRob3V0IHRoaXNcbiAgICAgIHJhZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gVXNlIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGVhZCBvZiBlLnJlbGF0ZWRUYXJnZXQgc28gd2UgY2FuIHRlbGwgaWYgdXNlciBjbGlja2VkIGludG8gaWZyYW1lXG4gICAgICAgIGlmIChzY29wZVJlZiA9PT0gYWN0aXZlU2NvcGUgJiYgIWlzRWxlbWVudEluQ2hpbGRTY29wZShkb2N1bWVudC5hY3RpdmVFbGVtZW50LCBzY29wZVJlZikpIHtcbiAgICAgICAgICBhY3RpdmVTY29wZSA9IHNjb3BlUmVmO1xuICAgICAgICAgIGZvY3VzZWROb2RlLmN1cnJlbnQgPSBlLnRhcmdldDtcbiAgICAgICAgICBmb2N1c2VkTm9kZS5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXMsIGZhbHNlKTtcbiAgICBzY29wZS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1cywgZmFsc2UpKTtcbiAgICBzY29wZS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uQmx1ciwgZmFsc2UpKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXMsIGZhbHNlKTtcbiAgICAgIHNjb3BlLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzLCBmYWxzZSkpO1xuICAgICAgc2NvcGUuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXIsIGZhbHNlKSk7XG4gICAgfTtcbiAgfSwgW3Njb3BlUmVmLCBjb250YWluXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmLmN1cnJlbnQpO1xuICB9LCBbcmFmXSk7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudEluQW55U2NvcGUoZWxlbWVudDogRWxlbWVudCkge1xuICBmb3IgKGxldCBzY29wZSBvZiBzY29wZXMua2V5cygpKSB7XG4gICAgaWYgKGlzRWxlbWVudEluU2NvcGUoZWxlbWVudCwgc2NvcGUuY3VycmVudCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudEluU2NvcGUoZWxlbWVudDogRWxlbWVudCwgc2NvcGU6IEhUTUxFbGVtZW50W10pIHtcbiAgcmV0dXJuIHNjb3BlLnNvbWUobm9kZSA9PiBub2RlLmNvbnRhaW5zKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50SW5DaGlsZFNjb3BlKGVsZW1lbnQ6IEVsZW1lbnQsIHNjb3BlOiBTY29wZVJlZikge1xuICAvLyBub2RlLmNvbnRhaW5zIGluIGlzRWxlbWVudEluU2NvcGUgY292ZXJzIGNoaWxkIHNjb3BlcyB0aGF0IGFyZSBhbHNvIERPTSBjaGlsZHJlbixcbiAgLy8gYnV0IGRvZXMgbm90IGNvdmVyIGNoaWxkIHNjb3BlcyBpbiBwb3J0YWxzLlxuICBmb3IgKGxldCBzIG9mIHNjb3Blcy5rZXlzKCkpIHtcbiAgICBpZiAoKHMgPT09IHNjb3BlIHx8IGlzQW5jZXN0b3JTY29wZShzY29wZSwgcykpICYmIGlzRWxlbWVudEluU2NvcGUoZWxlbWVudCwgcy5jdXJyZW50KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0FuY2VzdG9yU2NvcGUoYW5jZXN0b3I6IFNjb3BlUmVmLCBzY29wZTogU2NvcGVSZWYpIHtcbiAgbGV0IHBhcmVudCA9IHNjb3Blcy5nZXQoc2NvcGUpO1xuICBpZiAoIXBhcmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwYXJlbnQgPT09IGFuY2VzdG9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gaXNBbmNlc3RvclNjb3BlKGFuY2VzdG9yLCBwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBmb2N1c0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCBzY3JvbGwgPSBmYWxzZSkge1xuICBpZiAoZWxlbWVudCAhPSBudWxsICYmICFzY3JvbGwpIHtcbiAgICB0cnkge1xuICAgICAgZm9jdXNTYWZlbHkoZWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBpZ25vcmVcbiAgICB9XG4gIH0gZWxzZSBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGlnbm9yZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmb2N1c0ZpcnN0SW5TY29wZShzY29wZTogSFRNTEVsZW1lbnRbXSkge1xuICBsZXQgc2VudGluZWwgPSBzY29wZVswXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICBsZXQgd2Fsa2VyID0gZ2V0Rm9jdXNhYmxlVHJlZVdhbGtlcihnZXRTY29wZVJvb3Qoc2NvcGUpLCB7dGFiYmFibGU6IHRydWV9LCBzY29wZSk7XG4gIHdhbGtlci5jdXJyZW50Tm9kZSA9IHNlbnRpbmVsO1xuICBmb2N1c0VsZW1lbnQod2Fsa2VyLm5leHROb2RlKCkgYXMgSFRNTEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB1c2VBdXRvRm9jdXMoc2NvcGVSZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudFtdPiwgYXV0b0ZvY3VzOiBib29sZWFuKSB7XG4gIGNvbnN0IGF1dG9Gb2N1c1JlZiA9IFJlYWN0LnVzZVJlZihhdXRvRm9jdXMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRvRm9jdXNSZWYuY3VycmVudCkge1xuICAgICAgYWN0aXZlU2NvcGUgPSBzY29wZVJlZjtcbiAgICAgIGlmICghaXNFbGVtZW50SW5TY29wZShkb2N1bWVudC5hY3RpdmVFbGVtZW50LCBhY3RpdmVTY29wZS5jdXJyZW50KSkge1xuICAgICAgICBmb2N1c0ZpcnN0SW5TY29wZShzY29wZVJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXV0b0ZvY3VzUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiB1c2VSZXN0b3JlRm9jdXMoc2NvcGVSZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudFtdPiwgcmVzdG9yZUZvY3VzOiBib29sZWFuLCBjb250YWluOiBib29sZWFuKSB7XG4gIC8vIGNyZWF0ZSBhIHJlZiBkdXJpbmcgcmVuZGVyIGluc3RlYWQgb2YgdXNlTGF5b3V0RWZmZWN0IHNvIHRoZSBhY3RpdmUgZWxlbWVudCBpcyBzYXZlZCBiZWZvcmUgYSBjaGlsZCB3aXRoIGF1dG9Gb2N1cz10cnVlIG1vdW50cy5cbiAgY29uc3Qgbm9kZVRvUmVzdG9yZVJlZiA9IHVzZVJlZih0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCA6IG51bGwpO1xuXG4gIC8vIHVzZUxheW91dEVmZmVjdCBpbnN0ZWFkIG9mIHVzZUVmZmVjdCBzbyB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgc2F2ZWQgc3luY2hyb25vdXNseSBpbnN0ZWFkIG9mIGFzeW5jaHJvbm91c2x5LlxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBub2RlVG9SZXN0b3JlID0gbm9kZVRvUmVzdG9yZVJlZi5jdXJyZW50O1xuICAgIGlmICghcmVzdG9yZUZvY3VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHRoZSBUYWIga2V5IHNvIHRoYXQgdGFiYmluZyBvdXQgb2YgdGhlIHNjb3BlIGdvZXMgdG8gdGhlIG5leHQgZWxlbWVudFxuICAgIC8vIGFmdGVyIHRoZSBub2RlIHRoYXQgaGFkIGZvY3VzIHdoZW4gdGhlIHNjb3BlIG1vdW50ZWQuIFRoaXMgaXMgaW1wb3J0YW50IHdoZW5cbiAgICAvLyB1c2luZyBwb3J0YWxzIGZvciBvdmVybGF5cywgc28gdGhhdCBmb2N1cyBnb2VzIHRvIHRoZSBleHBlY3RlZCBlbGVtZW50IHdoZW5cbiAgICAvLyB0YWJiaW5nIG91dCBvZiB0aGUgb3ZlcmxheS5cbiAgICBsZXQgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChlLmtleSAhPT0gJ1RhYicgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBmb2N1c2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoIWlzRWxlbWVudEluU2NvcGUoZm9jdXNlZEVsZW1lbnQsIHNjb3BlUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGEgRE9NIHRyZWUgd2Fsa2VyIHRoYXQgbWF0Y2hlcyBhbGwgdGFiYmFibGUgZWxlbWVudHNcbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKGRvY3VtZW50LmJvZHksIHt0YWJiYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAvLyBGaW5kIHRoZSBuZXh0IHRhYmJhYmxlIGVsZW1lbnQgYWZ0ZXIgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnRcbiAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGZvY3VzZWRFbGVtZW50O1xuICAgICAgbGV0IG5leHRFbGVtZW50ID0gKGUuc2hpZnRLZXkgPyB3YWxrZXIucHJldmlvdXNOb2RlKCkgOiB3YWxrZXIubmV4dE5vZGUoKSkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhub2RlVG9SZXN0b3JlKSB8fCBub2RlVG9SZXN0b3JlID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIG5vZGVUb1Jlc3RvcmUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBuZXh0IGVsZW1lbnQsIG9yIGl0IGlzIG91dHNpZGUgdGhlIGN1cnJlbnQgc2NvcGUsIG1vdmUgZm9jdXMgdG8gdGhlXG4gICAgICAvLyBuZXh0IGVsZW1lbnQgYWZ0ZXIgdGhlIG5vZGUgdG8gcmVzdG9yZSB0byBpbnN0ZWFkLlxuICAgICAgaWYgKCghbmV4dEVsZW1lbnQgfHwgIWlzRWxlbWVudEluU2NvcGUobmV4dEVsZW1lbnQsIHNjb3BlUmVmLmN1cnJlbnQpKSAmJiBub2RlVG9SZXN0b3JlKSB7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IG5vZGVUb1Jlc3RvcmU7XG5cbiAgICAgICAgLy8gU2tpcCBvdmVyIGVsZW1lbnRzIHdpdGhpbiB0aGUgc2NvcGUsIGluIGNhc2UgdGhlIHNjb3BlIGltbWVkaWF0ZWx5IGZvbGxvd3MgdGhlIG5vZGUgdG8gcmVzdG9yZS5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIG5leHRFbGVtZW50ID0gKGUuc2hpZnRLZXkgPyB3YWxrZXIucHJldmlvdXNOb2RlKCkgOiB3YWxrZXIubmV4dE5vZGUoKSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH0gd2hpbGUgKGlzRWxlbWVudEluU2NvcGUobmV4dEVsZW1lbnQsIHNjb3BlUmVmLmN1cnJlbnQpKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChuZXh0RWxlbWVudCkge1xuICAgICAgICAgIGZvY3VzRWxlbWVudChuZXh0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG5leHQgZWxlbWVudCBhbmQgdGhlIG5vZGVUb1Jlc3RvcmUgaXNuJ3Qgd2l0aGluIGEgRm9jdXNTY29wZSAoaS5lLiB3ZSBhcmUgbGVhdmluZyB0aGUgdG9wIGxldmVsIGZvY3VzIHNjb3BlKVxuICAgICAgICAgICAvLyB0aGVuIG1vdmUgZm9jdXMgdG8gdGhlIGJvZHkuXG4gICAgICAgICAgIC8vIE90aGVyd2lzZSByZXN0b3JlIGZvY3VzIHRvIHRoZSBub2RlVG9SZXN0b3JlIChlLmcgbWVudSB3aXRoaW4gYSBwb3BvdmVyIC0+IHRhYmJpbmcgdG8gY2xvc2UgdGhlIG1lbnUgc2hvdWxkIG1vdmUgZm9jdXMgdG8gbWVudSB0cmlnZ2VyKVxuICAgICAgICAgIGlmICghaXNFbGVtZW50SW5BbnlTY29wZShub2RlVG9SZXN0b3JlKSkge1xuICAgICAgICAgICAgZm9jdXNlZEVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb2N1c0VsZW1lbnQobm9kZVRvUmVzdG9yZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghY29udGFpbikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghY29udGFpbikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3RvcmVGb2N1cyAmJiBub2RlVG9SZXN0b3JlICYmIGlzRWxlbWVudEluU2NvcGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwgc2NvcGVSZWYuY3VycmVudCkpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhub2RlVG9SZXN0b3JlKSkge1xuICAgICAgICAgICAgZm9jdXNFbGVtZW50KG5vZGVUb1Jlc3RvcmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3Njb3BlUmVmLCByZXN0b3JlRm9jdXMsIGNvbnRhaW5dKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBbVHJlZVdhbGtlcl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1RyZWVXYWxrZXJ9XG4gKiB0aGF0IG1hdGNoZXMgYWxsIGZvY3VzYWJsZS90YWJiYWJsZSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZvY3VzYWJsZVRyZWVXYWxrZXIocm9vdDogSFRNTEVsZW1lbnQsIG9wdHM/OiBGb2N1c01hbmFnZXJPcHRpb25zLCBzY29wZT86IEhUTUxFbGVtZW50W10pIHtcbiAgbGV0IHNlbGVjdG9yID0gb3B0cz8udGFiYmFibGUgPyBUQUJCQUJMRV9FTEVNRU5UX1NFTEVDVE9SIDogRk9DVVNBQkxFX0VMRU1FTlRfU0VMRUNUT1I7XG4gIGxldCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIHJvb3QsXG4gICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsXG4gICAge1xuICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XG4gICAgICAgIC8vIFNraXAgbm9kZXMgaW5zaWRlIHRoZSBzdGFydGluZyBub2RlLlxuICAgICAgICBpZiAob3B0cz8uZnJvbT8uY29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChub2RlIGFzIEhUTUxFbGVtZW50KS5tYXRjaGVzKHNlbGVjdG9yKVxuICAgICAgICAgICYmIGlzRWxlbWVudFZpc2libGUobm9kZSBhcyBIVE1MRWxlbWVudClcbiAgICAgICAgICAmJiAoIXNjb3BlIHx8IGlzRWxlbWVudEluU2NvcGUobm9kZSBhcyBIVE1MRWxlbWVudCwgc2NvcGUpKVxuICAgICAgICAgICYmICghb3B0cz8uYWNjZXB0IHx8IG9wdHMuYWNjZXB0KG5vZGUgYXMgRWxlbWVudCkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG5cbiAgaWYgKG9wdHM/LmZyb20pIHtcbiAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBvcHRzLmZyb207XG4gIH1cblxuICByZXR1cm4gd2Fsa2VyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBGb2N1c01hbmFnZXIgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gbW92ZSBmb2N1cyB3aXRoaW4gYW4gZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvY3VzTWFuYWdlcihyZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudD4sIGRlZmF1bHRPcHRpb25zOiBGb2N1c01hbmFnZXJPcHRpb25zID0ge30pOiBGb2N1c01hbmFnZXIge1xuICByZXR1cm4ge1xuICAgIGZvY3VzTmV4dChvcHRzOiBGb2N1c01hbmFnZXJPcHRpb25zID0ge30pIHtcbiAgICAgIGxldCByb290ID0gcmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHtmcm9tLCB0YWJiYWJsZSA9IGRlZmF1bHRPcHRpb25zLnRhYmJhYmxlLCB3cmFwID0gZGVmYXVsdE9wdGlvbnMud3JhcCwgYWNjZXB0ID0gZGVmYXVsdE9wdGlvbnMuYWNjZXB0fSA9IG9wdHM7XG4gICAgICBsZXQgbm9kZSA9IGZyb20gfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKHJvb3QsIHt0YWJiYWJsZSwgYWNjZXB0fSk7XG4gICAgICBpZiAocm9vdC5jb250YWlucyhub2RlKSkge1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgfVxuICAgICAgbGV0IG5leHROb2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoIW5leHROb2RlICYmIHdyYXApIHtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gcm9vdDtcbiAgICAgICAgbmV4dE5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Tm9kZSkge1xuICAgICAgICBmb2N1c0VsZW1lbnQobmV4dE5vZGUsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH0sXG4gICAgZm9jdXNQcmV2aW91cyhvcHRzOiBGb2N1c01hbmFnZXJPcHRpb25zID0gZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgIGxldCByb290ID0gcmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHtmcm9tLCB0YWJiYWJsZSA9IGRlZmF1bHRPcHRpb25zLnRhYmJhYmxlLCB3cmFwID0gZGVmYXVsdE9wdGlvbnMud3JhcCwgYWNjZXB0ID0gZGVmYXVsdE9wdGlvbnMuYWNjZXB0fSA9IG9wdHM7XG4gICAgICBsZXQgbm9kZSA9IGZyb20gfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKHJvb3QsIHt0YWJiYWJsZSwgYWNjZXB0fSk7XG4gICAgICBpZiAocm9vdC5jb250YWlucyhub2RlKSkge1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5leHQgPSBsYXN0KHdhbGtlcik7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgZm9jdXNFbGVtZW50KG5leHQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgfVxuICAgICAgbGV0IHByZXZpb3VzTm9kZSA9IHdhbGtlci5wcmV2aW91c05vZGUoKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICghcHJldmlvdXNOb2RlICYmIHdyYXApIHtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gcm9vdDtcbiAgICAgICAgcHJldmlvdXNOb2RlID0gbGFzdCh3YWxrZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZpb3VzTm9kZSkge1xuICAgICAgICBmb2N1c0VsZW1lbnQocHJldmlvdXNOb2RlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2aW91c05vZGU7XG4gICAgfSxcbiAgICBmb2N1c0ZpcnN0KG9wdHMgPSBkZWZhdWx0T3B0aW9ucykge1xuICAgICAgbGV0IHJvb3QgPSByZWYuY3VycmVudDtcbiAgICAgIGlmICghcm9vdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQge3RhYmJhYmxlID0gZGVmYXVsdE9wdGlvbnMudGFiYmFibGUsIGFjY2VwdCA9IGRlZmF1bHRPcHRpb25zLmFjY2VwdH0gPSBvcHRzO1xuICAgICAgbGV0IHdhbGtlciA9IGdldEZvY3VzYWJsZVRyZWVXYWxrZXIocm9vdCwge3RhYmJhYmxlLCBhY2NlcHR9KTtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKG5leHROb2RlKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudChuZXh0Tm9kZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfSxcbiAgICBmb2N1c0xhc3Qob3B0cyA9IGRlZmF1bHRPcHRpb25zKSB7XG4gICAgICBsZXQgcm9vdCA9IHJlZi5jdXJyZW50O1xuICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB7dGFiYmFibGUgPSBkZWZhdWx0T3B0aW9ucy50YWJiYWJsZSwgYWNjZXB0ID0gZGVmYXVsdE9wdGlvbnMuYWNjZXB0fSA9IG9wdHM7XG4gICAgICBsZXQgd2Fsa2VyID0gZ2V0Rm9jdXNhYmxlVHJlZVdhbGtlcihyb290LCB7dGFiYmFibGUsIGFjY2VwdH0pO1xuICAgICAgbGV0IG5leHQgPSBsYXN0KHdhbGtlcik7XG4gICAgICBpZiAobmV4dCkge1xuICAgICAgICBmb2N1c0VsZW1lbnQobmV4dCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxhc3Qod2Fsa2VyOiBUcmVlV2Fsa2VyKSB7XG4gIGxldCBuZXh0OiBIVE1MRWxlbWVudDtcbiAgbGV0IGxhc3Q6IEhUTUxFbGVtZW50O1xuICBkbyB7XG4gICAgbGFzdCA9IHdhbGtlci5sYXN0Q2hpbGQoKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAobGFzdCkge1xuICAgICAgbmV4dCA9IGxhc3Q7XG4gICAgfVxuICB9IHdoaWxlIChsYXN0KTtcbiAgcmV0dXJuIG5leHQ7XG59XG4iLCJpbXBvcnQge0hUTUxBdHRyaWJ1dGVzLCB1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNGb2N1c1Zpc2libGUsIHVzZUZvY3VzLCB1c2VGb2N1c1Zpc2libGVMaXN0ZW5lciwgdXNlRm9jdXNXaXRoaW59IGZyb20gJ0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucyc7XG5pbXBvcnQge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRm9jdXNSaW5nUHJvcHMge1xuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IHRoZSBmb2N1cyByaW5nIHdoZW4gc29tZXRoaW5nXG4gICAqIGluc2lkZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgaGFzIGZvY3VzICh0cnVlKSwgb3JcbiAgICogb25seSBpZiB0aGUgY29udGFpbmVyIGl0c2VsZiBoYXMgZm9jdXMgKGZhbHNlKS5cbiAgICogQGRlZmF1bHQgJ2ZhbHNlJ1xuICAgKi9cbiAgd2l0aGluPzogYm9vbGVhbixcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBhIHRleHQgaW5wdXQuICovXG4gIGlzVGV4dElucHV0PzogYm9vbGVhbixcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCB3aWxsIGJlIGF1dG8gZm9jdXNlZC4gKi9cbiAgYXV0b0ZvY3VzPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRm9jdXNSaW5nQXJpYSB7XG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBmb2N1c2VkLiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG5cbiAgLyoqIFdoZXRoZXIga2V5Ym9hcmQgZm9jdXMgc2hvdWxkIGJlIHZpc2libGUuICovXG4gIGlzRm9jdXNWaXNpYmxlOiBib29sZWFuLFxuXG4gIC8qKiBQcm9wcyB0byBhcHBseSB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2l0aCB0aGUgZm9jdXMgcmluZy4gKi9cbiAgZm9jdXNQcm9wczogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZm9jdXMgcmluZyBzaG91bGQgYmUgc2hvd24gdG8gaW5kaWNhdGUga2V5Ym9hcmQgZm9jdXMuXG4gKiBGb2N1cyByaW5ncyBhcmUgdmlzaWJsZSBvbmx5IHdoZW4gdGhlIHVzZXIgaXMgaW50ZXJhY3Rpbmcgd2l0aCBhIGtleWJvYXJkLFxuICogbm90IHdpdGggYSBtb3VzZSwgdG91Y2gsIG9yIG90aGVyIGlucHV0IG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1JpbmcocHJvcHM6IEZvY3VzUmluZ1Byb3BzID0ge30pOiBGb2N1c1JpbmdBcmlhIHtcbiAgbGV0IHtcbiAgICBhdXRvRm9jdXMgPSBmYWxzZSxcbiAgICBpc1RleHRJbnB1dCxcbiAgICB3aXRoaW5cbiAgfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSB1c2VSZWYoe1xuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgaXNGb2N1c1Zpc2libGU6IGF1dG9Gb2N1cyB8fCBpc0ZvY3VzVmlzaWJsZSgpXG4gIH0pO1xuICBsZXQgW2lzRm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbaXNGb2N1c1Zpc2libGVTdGF0ZSwgc2V0Rm9jdXNWaXNpYmxlXSA9IHVzZVN0YXRlKCgpID0+IHN0YXRlLmN1cnJlbnQuaXNGb2N1c2VkICYmIHN0YXRlLmN1cnJlbnQuaXNGb2N1c1Zpc2libGUpO1xuXG4gIGxldCB1cGRhdGVTdGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEZvY3VzVmlzaWJsZShzdGF0ZS5jdXJyZW50LmlzRm9jdXNlZCAmJiBzdGF0ZS5jdXJyZW50LmlzRm9jdXNWaXNpYmxlKSwgW10pO1xuXG4gIGxldCBvbkZvY3VzQ2hhbmdlID0gdXNlQ2FsbGJhY2soaXNGb2N1c2VkID0+IHtcbiAgICBzdGF0ZS5jdXJyZW50LmlzRm9jdXNlZCA9IGlzRm9jdXNlZDtcbiAgICBzZXRGb2N1c2VkKGlzRm9jdXNlZCk7XG4gICAgdXBkYXRlU3RhdGUoKTtcbiAgfSwgW3VwZGF0ZVN0YXRlXSk7XG5cbiAgdXNlRm9jdXNWaXNpYmxlTGlzdGVuZXIoKGlzRm9jdXNWaXNpYmxlKSA9PiB7XG4gICAgc3RhdGUuY3VycmVudC5pc0ZvY3VzVmlzaWJsZSA9IGlzRm9jdXNWaXNpYmxlO1xuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH0sIFtdLCB7aXNUZXh0SW5wdXR9KTtcblxuICBsZXQge2ZvY3VzUHJvcHN9ID0gdXNlRm9jdXMoe1xuICAgIGlzRGlzYWJsZWQ6IHdpdGhpbixcbiAgICBvbkZvY3VzQ2hhbmdlXG4gIH0pO1xuXG4gIGxldCB7Zm9jdXNXaXRoaW5Qcm9wc30gPSB1c2VGb2N1c1dpdGhpbih7XG4gICAgaXNEaXNhYmxlZDogIXdpdGhpbixcbiAgICBvbkZvY3VzV2l0aGluQ2hhbmdlOiBvbkZvY3VzQ2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgaXNGb2N1c2VkLFxuICAgIGlzRm9jdXNWaXNpYmxlOiBzdGF0ZS5jdXJyZW50LmlzRm9jdXNlZCAmJiBpc0ZvY3VzVmlzaWJsZVN0YXRlLFxuICAgIGZvY3VzUHJvcHM6IHdpdGhpbiA/IGZvY3VzV2l0aGluUHJvcHMgOiBmb2N1c1Byb3BzXG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQge21lcmdlUHJvcHN9IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VGb2N1c1Jpbmd9IGZyb20gJy4vdXNlRm9jdXNSaW5nJztcblxuaW50ZXJmYWNlIEZvY3VzUmluZ1Byb3BzIHtcbiAgLyoqIENoaWxkIGVsZW1lbnQgdG8gYXBwbHkgQ1NTIGNsYXNzZXMgdG8uICovXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQsXG4gIC8qKiBDU1MgY2xhc3MgdG8gYXBwbHkgd2hlbiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkLiAqL1xuICBmb2N1c0NsYXNzPzogc3RyaW5nLFxuICAvKiogQ1NTIGNsYXNzIHRvIGFwcGx5IHdoZW4gdGhlIGVsZW1lbnQgaGFzIGtleWJvYXJkIGZvY3VzLiAqL1xuICBmb2N1c1JpbmdDbGFzcz86IHN0cmluZyxcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgZm9jdXMgcmluZyB3aGVuIHNvbWV0aGluZ1xuICAgKiBpbnNpZGUgdGhlIGNvbnRhaW5lciBlbGVtZW50IGhhcyBmb2N1cyAodHJ1ZSksIG9yXG4gICAqIG9ubHkgaWYgdGhlIGNvbnRhaW5lciBpdHNlbGYgaGFzIGZvY3VzIChmYWxzZSkuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB3aXRoaW4/OiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBhIHRleHQgaW5wdXQuICovXG4gIGlzVGV4dElucHV0PzogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgd2lsbCBiZSBhdXRvIGZvY3VzZWQuICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBBIHV0aWxpdHkgY29tcG9uZW50IHRoYXQgYXBwbGllcyBhIENTUyBjbGFzcyB3aGVuIGFuIGVsZW1lbnQgaGFzIGtleWJvYXJkIGZvY3VzLlxuICogRm9jdXMgcmluZ3MgYXJlIHZpc2libGUgb25seSB3aGVuIHRoZSB1c2VyIGlzIGludGVyYWN0aW5nIHdpdGggYSBrZXlib2FyZCxcbiAqIG5vdCB3aXRoIGEgbW91c2UsIHRvdWNoLCBvciBvdGhlciBpbnB1dCBtZXRob2RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRm9jdXNSaW5nKHByb3BzOiBGb2N1c1JpbmdQcm9wcykge1xuICBsZXQge2NoaWxkcmVuLCBmb2N1c0NsYXNzLCBmb2N1c1JpbmdDbGFzc30gPSBwcm9wcztcbiAgbGV0IHtpc0ZvY3VzZWQsIGlzRm9jdXNWaXNpYmxlLCBmb2N1c1Byb3BzfSA9IHVzZUZvY3VzUmluZyhwcm9wcyk7XG4gIGxldCBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG1lcmdlUHJvcHMoY2hpbGQucHJvcHMsIHtcbiAgICAuLi5mb2N1c1Byb3BzLFxuICAgIGNsYXNzTmFtZTogY2xzeCh7XG4gICAgICBbZm9jdXNDbGFzcyB8fCAnJ106IGlzRm9jdXNlZCxcbiAgICAgIFtmb2N1c1JpbmdDbGFzcyB8fCAnJ106IGlzRm9jdXNWaXNpYmxlXG4gICAgfSlcbiAgfSkpO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Rm9jdXNhYmxlRE9NUHJvcHMsIEZvY3VzYWJsZVByb3BzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7Zm9jdXNTYWZlbHl9IGZyb20gJy4vJztcbmltcG9ydCB7bWVyZ2VQcm9wcywgdXNlU3luY1JlZn0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IFJlYWN0LCB7SFRNTEF0dHJpYnV0ZXMsIE11dGFibGVSZWZPYmplY3QsIFJlYWN0Tm9kZSwgUmVmT2JqZWN0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VGb2N1cywgdXNlS2V5Ym9hcmR9IGZyb20gJ0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucyc7XG5cbmludGVyZmFjZSBGb2N1c2FibGVPcHRpb25zIGV4dGVuZHMgRm9jdXNhYmxlUHJvcHMsIEZvY3VzYWJsZURPTVByb3BzIHtcbiAgLyoqIFdoZXRoZXIgZm9jdXMgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBpc0Rpc2FibGVkPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRm9jdXNhYmxlUHJvdmlkZXJQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIC8qKiBUaGUgY2hpbGQgZWxlbWVudCB0byBwcm92aWRlIERPTSBwcm9wcyB0by4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbn1cblxuaW50ZXJmYWNlIEZvY3VzYWJsZUNvbnRleHRWYWx1ZSBleHRlbmRzIEZvY3VzYWJsZVByb3ZpZGVyUHJvcHMge1xuICByZWY/OiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxFbGVtZW50PlxufVxuXG5sZXQgRm9jdXNhYmxlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Rm9jdXNhYmxlQ29udGV4dFZhbHVlPihudWxsKTtcblxuZnVuY3Rpb24gdXNlRm9jdXNhYmxlQ29udGV4dChyZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pOiBGb2N1c2FibGVDb250ZXh0VmFsdWUge1xuICBsZXQgY29udGV4dCA9IHVzZUNvbnRleHQoRm9jdXNhYmxlQ29udGV4dCkgfHwge307XG4gIHVzZVN5bmNSZWYoY29udGV4dCwgcmVmKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgbGV0IHtyZWY6IF8sIC4uLm90aGVyUHJvcHN9ID0gY29udGV4dDtcbiAgcmV0dXJuIG90aGVyUHJvcHM7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgRE9NIHByb3BzIHRvIHRoZSBuZWFyZXN0IGZvY3VzYWJsZSBjaGlsZC5cbiAqL1xuZnVuY3Rpb24gRm9jdXNhYmxlUHJvdmlkZXIocHJvcHM6IEZvY3VzYWJsZVByb3ZpZGVyUHJvcHMsIHJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pikge1xuICBsZXQge2NoaWxkcmVuLCAuLi5vdGhlclByb3BzfSA9IHByb3BzO1xuICBsZXQgY29udGV4dCA9IHtcbiAgICAuLi5vdGhlclByb3BzLFxuICAgIHJlZlxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvY3VzYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9jdXNhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxubGV0IF9Gb2N1c2FibGVQcm92aWRlciA9IFJlYWN0LmZvcndhcmRSZWYoRm9jdXNhYmxlUHJvdmlkZXIpO1xuZXhwb3J0IHtfRm9jdXNhYmxlUHJvdmlkZXIgYXMgRm9jdXNhYmxlUHJvdmlkZXJ9O1xuXG5pbnRlcmZhY2UgRm9jdXNhYmxlQXJpYSB7XG4gIC8qKiBQcm9wcyBmb3IgdGhlIGZvY3VzYWJsZSBlbGVtZW50LiAqL1xuICBmb2N1c2FibGVQcm9wczogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+XG59XG5cbi8qKlxuICogVXNlZCB0byBtYWtlIGFuIGVsZW1lbnQgZm9jdXNhYmxlIGFuZCBjYXBhYmxlIG9mIGF1dG8gZm9jdXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c2FibGUocHJvcHM6IEZvY3VzYWJsZU9wdGlvbnMsIGRvbVJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IEZvY3VzYWJsZUFyaWEge1xuICBsZXQge2ZvY3VzUHJvcHN9ID0gdXNlRm9jdXMocHJvcHMpO1xuICBsZXQge2tleWJvYXJkUHJvcHN9ID0gdXNlS2V5Ym9hcmQocHJvcHMpO1xuICBsZXQgaW50ZXJhY3Rpb25zID0gbWVyZ2VQcm9wcyhmb2N1c1Byb3BzLCBrZXlib2FyZFByb3BzKTtcbiAgbGV0IGRvbVByb3BzID0gdXNlRm9jdXNhYmxlQ29udGV4dChkb21SZWYpO1xuICBsZXQgaW50ZXJhY3Rpb25Qcm9wcyA9IHByb3BzLmlzRGlzYWJsZWQgPyB7fSA6IGRvbVByb3BzO1xuICBsZXQgYXV0b0ZvY3VzUmVmID0gdXNlUmVmKHByb3BzLmF1dG9Gb2N1cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0b0ZvY3VzUmVmLmN1cnJlbnQgJiYgZG9tUmVmLmN1cnJlbnQpIHtcbiAgICAgIGZvY3VzU2FmZWx5KGRvbVJlZi5jdXJyZW50KTtcbiAgICB9XG4gICAgYXV0b0ZvY3VzUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW2RvbVJlZl0pO1xuXG4gIHJldHVybiB7XG4gICAgZm9jdXNhYmxlUHJvcHM6IG1lcmdlUHJvcHMoXG4gICAgICB7XG4gICAgICAgIC4uLmludGVyYWN0aW9ucyxcbiAgICAgICAgdGFiSW5kZXg6IHByb3BzLmV4Y2x1ZGVGcm9tVGFiT3JkZXIgJiYgIXByb3BzLmlzRGlzYWJsZWQgPyAtMSA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIGludGVyYWN0aW9uUHJvcHNcbiAgICApXG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgQW5jaG9ySFRNTEF0dHJpYnV0ZXMsXG4gIEJ1dHRvbkhUTUxBdHRyaWJ1dGVzLFxuICBFbGVtZW50VHlwZSxcbiAgSFRNTEF0dHJpYnV0ZXMsXG4gIElucHV0SFRNTEF0dHJpYnV0ZXMsXG4gIFJlZk9iamVjdFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FyaWFCdXR0b25Qcm9wc30gZnJvbSAnQHJlYWN0LXR5cGVzL2J1dHRvbic7XG5pbXBvcnQge2ZpbHRlckRPTVByb3BzfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge21lcmdlUHJvcHN9IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcbmltcG9ydCB7dXNlRm9jdXNhYmxlfSBmcm9tICdAcmVhY3QtYXJpYS9mb2N1cyc7XG5pbXBvcnQge3VzZVByZXNzfSBmcm9tICdAcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uQXJpYTxUPiB7XG4gIC8qKiBQcm9wcyBmb3IgdGhlIGJ1dHRvbiBlbGVtZW50LiAqL1xuICBidXR0b25Qcm9wczogVCxcbiAgLyoqIFdoZXRoZXIgdGhlIGJ1dHRvbiBpcyBjdXJyZW50bHkgcHJlc3NlZC4gKi9cbiAgaXNQcmVzc2VkOiBib29sZWFuXG59XG5cbi8vIE9yZGVyIHdpdGggb3ZlcnJpZGVzIGlzIGltcG9ydGFudDogJ2J1dHRvbicgc2hvdWxkIGJlIGRlZmF1bHRcbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b24ocHJvcHM6IEFyaWFCdXR0b25Qcm9wczwnYnV0dG9uJz4sIHJlZjogUmVmT2JqZWN0PEhUTUxCdXR0b25FbGVtZW50Pik6IEJ1dHRvbkFyaWE8QnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+PjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b24ocHJvcHM6IEFyaWFCdXR0b25Qcm9wczwnYSc+LCByZWY6IFJlZk9iamVjdDxIVE1MQW5jaG9yRWxlbWVudD4pOiBCdXR0b25BcmlhPEFuY2hvckhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uKHByb3BzOiBBcmlhQnV0dG9uUHJvcHM8J2Rpdic+LCByZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pOiBCdXR0b25BcmlhPEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uKHByb3BzOiBBcmlhQnV0dG9uUHJvcHM8J2lucHV0Jz4sIHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+KTogQnV0dG9uQXJpYTxJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+PjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b24ocHJvcHM6IEFyaWFCdXR0b25Qcm9wczwnc3Bhbic+LCByZWY6IFJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+KTogQnV0dG9uQXJpYTxIVE1MQXR0cmlidXRlczxIVE1MU3BhbkVsZW1lbnQ+PjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b24ocHJvcHM6IEFyaWFCdXR0b25Qcm9wczxFbGVtZW50VHlwZT4sIHJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IEJ1dHRvbkFyaWE8SFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+Pjtcbi8qKlxuICogUHJvdmlkZXMgdGhlIGJlaGF2aW9yIGFuZCBhY2Nlc3NpYmlsaXR5IGltcGxlbWVudGF0aW9uIGZvciBhIGJ1dHRvbiBjb21wb25lbnQuIEhhbmRsZXMgbW91c2UsIGtleWJvYXJkLCBhbmQgdG91Y2ggaW50ZXJhY3Rpb25zLFxuICogZm9jdXMgYmVoYXZpb3IsIGFuZCBBUklBIHByb3BzIGZvciBib3RoIG5hdGl2ZSBidXR0b24gZWxlbWVudHMgYW5kIGN1c3RvbSBlbGVtZW50IHR5cGVzLlxuICogQHBhcmFtIHByb3BzIC0gUHJvcHMgdG8gYmUgYXBwbGllZCB0byB0aGUgYnV0dG9uLlxuICogQHBhcmFtIHJlZiAtIEEgcmVmIHRvIGEgRE9NIGVsZW1lbnQgZm9yIHRoZSBidXR0b24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b24ocHJvcHM6IEFyaWFCdXR0b25Qcm9wczxFbGVtZW50VHlwZT4sIHJlZjogUmVmT2JqZWN0PGFueT4pOiBCdXR0b25BcmlhPEhUTUxBdHRyaWJ1dGVzPGFueT4+IHtcbiAgbGV0IHtcbiAgICBlbGVtZW50VHlwZSA9ICdidXR0b24nLFxuICAgIGlzRGlzYWJsZWQsXG4gICAgb25QcmVzcyxcbiAgICBvblByZXNzU3RhcnQsXG4gICAgb25QcmVzc0VuZCxcbiAgICBvblByZXNzQ2hhbmdlLFxuICAgIC8vIEB0cy1pZ25vcmUgLSB1bmRvY3VtZW50ZWRcbiAgICBwcmV2ZW50Rm9jdXNPblByZXNzLFxuICAgIC8vIEB0cy1pZ25vcmUgLSB1bmRvY3VtZW50ZWRcbiAgICBhbGxvd0ZvY3VzV2hlbkRpc2FibGVkLFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvbkNsaWNrOiBkZXByZWNhdGVkT25DbGljayxcbiAgICBocmVmLFxuICAgIHRhcmdldCxcbiAgICByZWwsXG4gICAgdHlwZSA9ICdidXR0b24nXG4gIH0gPSBwcm9wcztcbiAgbGV0IGFkZGl0aW9uYWxQcm9wcztcbiAgaWYgKGVsZW1lbnRUeXBlID09PSAnYnV0dG9uJykge1xuICAgIGFkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgYWRkaXRpb25hbFByb3BzID0ge1xuICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICB0YWJJbmRleDogaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IDAsXG4gICAgICBocmVmOiBlbGVtZW50VHlwZSA9PT0gJ2EnICYmIGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBocmVmLFxuICAgICAgdGFyZ2V0OiBlbGVtZW50VHlwZSA9PT0gJ2EnID8gdGFyZ2V0IDogdW5kZWZpbmVkLFxuICAgICAgdHlwZTogZWxlbWVudFR5cGUgPT09ICdpbnB1dCcgPyB0eXBlIDogdW5kZWZpbmVkLFxuICAgICAgZGlzYWJsZWQ6IGVsZW1lbnRUeXBlID09PSAnaW5wdXQnID8gaXNEaXNhYmxlZCA6IHVuZGVmaW5lZCxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogIWlzRGlzYWJsZWQgfHwgZWxlbWVudFR5cGUgPT09ICdpbnB1dCcgPyB1bmRlZmluZWQgOiBpc0Rpc2FibGVkLFxuICAgICAgcmVsOiBlbGVtZW50VHlwZSA9PT0gJ2EnID8gcmVsIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIGxldCB7cHJlc3NQcm9wcywgaXNQcmVzc2VkfSA9IHVzZVByZXNzKHtcbiAgICBvblByZXNzU3RhcnQsXG4gICAgb25QcmVzc0VuZCxcbiAgICBvblByZXNzQ2hhbmdlLFxuICAgIG9uUHJlc3MsXG4gICAgaXNEaXNhYmxlZCxcbiAgICBwcmV2ZW50Rm9jdXNPblByZXNzLFxuICAgIHJlZlxuICB9KTtcblxuICBsZXQge2ZvY3VzYWJsZVByb3BzfSA9IHVzZUZvY3VzYWJsZShwcm9wcywgcmVmKTtcbiAgaWYgKGFsbG93Rm9jdXNXaGVuRGlzYWJsZWQpIHtcbiAgICBmb2N1c2FibGVQcm9wcy50YWJJbmRleCA9IGlzRGlzYWJsZWQgPyAtMSA6IGZvY3VzYWJsZVByb3BzLnRhYkluZGV4O1xuICB9XG4gIGxldCBidXR0b25Qcm9wcyA9IG1lcmdlUHJvcHMoZm9jdXNhYmxlUHJvcHMsIHByZXNzUHJvcHMsIGZpbHRlckRPTVByb3BzKHByb3BzLCB7bGFiZWxhYmxlOiB0cnVlfSkpO1xuXG4gIHJldHVybiB7XG4gICAgaXNQcmVzc2VkLCAvLyBVc2VkIHRvIGluZGljYXRlIHByZXNzIHN0YXRlIGZvciB2aXN1YWxcbiAgICBidXR0b25Qcm9wczogbWVyZ2VQcm9wcyhhZGRpdGlvbmFsUHJvcHMsIGJ1dHRvblByb3BzLCB7XG4gICAgICAnYXJpYS1oYXNwb3B1cCc6IHByb3BzWydhcmlhLWhhc3BvcHVwJ10sXG4gICAgICAnYXJpYS1leHBhbmRlZCc6IHByb3BzWydhcmlhLWV4cGFuZGVkJ10sXG4gICAgICAnYXJpYS1jb250cm9scyc6IHByb3BzWydhcmlhLWNvbnRyb2xzJ10sXG4gICAgICAnYXJpYS1wcmVzc2VkJzogcHJvcHNbJ2FyaWEtcHJlc3NlZCddLFxuICAgICAgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgaWYgKGRlcHJlY2F0ZWRPbkNsaWNrKSB7XG4gICAgICAgICAgZGVwcmVjYXRlZE9uQ2xpY2soZSk7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdvbkNsaWNrIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugb25QcmVzcycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBBbmNob3JIVE1MQXR0cmlidXRlcyxcbiAgQnV0dG9uSFRNTEF0dHJpYnV0ZXMsXG4gIEVsZW1lbnRUeXBlLFxuICBIVE1MQXR0cmlidXRlcyxcbiAgSW5wdXRIVE1MQXR0cmlidXRlcyxcbiAgUmVmT2JqZWN0XG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QXJpYVRvZ2dsZUJ1dHRvblByb3BzfSBmcm9tICdAcmVhY3QtdHlwZXMvYnV0dG9uJztcbmltcG9ydCB7QnV0dG9uQXJpYSwgdXNlQnV0dG9ufSBmcm9tICcuL3VzZUJ1dHRvbic7XG5pbXBvcnQge2NoYWlufSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge21lcmdlUHJvcHN9IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcbmltcG9ydCB7VG9nZ2xlU3RhdGV9IGZyb20gJ0ByZWFjdC1zdGF0ZWx5L3RvZ2dsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUb2dnbGVCdXR0b24ocHJvcHM6IEFyaWFUb2dnbGVCdXR0b25Qcm9wczwnYSc+LCBzdGF0ZTogVG9nZ2xlU3RhdGUsIHJlZjogUmVmT2JqZWN0PEhUTUxBbmNob3JFbGVtZW50Pik6IEJ1dHRvbkFyaWE8QW5jaG9ySFRNTEF0dHJpYnV0ZXM8SFRNTEFuY2hvckVsZW1lbnQ+PjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VUb2dnbGVCdXR0b24ocHJvcHM6IEFyaWFUb2dnbGVCdXR0b25Qcm9wczwnYnV0dG9uJz4sIHN0YXRlOiBUb2dnbGVTdGF0ZSwgcmVmOiBSZWZPYmplY3Q8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogQnV0dG9uQXJpYTxCdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZ2dsZUJ1dHRvbihwcm9wczogQXJpYVRvZ2dsZUJ1dHRvblByb3BzPCdkaXYnPiwgc3RhdGU6IFRvZ2dsZVN0YXRlLCByZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pOiBCdXR0b25BcmlhPEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlVG9nZ2xlQnV0dG9uKHByb3BzOiBBcmlhVG9nZ2xlQnV0dG9uUHJvcHM8J2lucHV0Jz4sIHN0YXRlOiBUb2dnbGVTdGF0ZSwgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4pOiBCdXR0b25BcmlhPElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZ2dsZUJ1dHRvbihwcm9wczogQXJpYVRvZ2dsZUJ1dHRvblByb3BzPCdzcGFuJz4sIHN0YXRlOiBUb2dnbGVTdGF0ZSwgcmVmOiBSZWZPYmplY3Q8SFRNTFNwYW5FbGVtZW50Pik6IEJ1dHRvbkFyaWE8SFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlVG9nZ2xlQnV0dG9uKHByb3BzOiBBcmlhVG9nZ2xlQnV0dG9uUHJvcHM8RWxlbWVudFR5cGU+LCBzdGF0ZTogVG9nZ2xlU3RhdGUsIHJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IEJ1dHRvbkFyaWE8SFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+Pjtcbi8qKlxuICogUHJvdmlkZXMgdGhlIGJlaGF2aW9yIGFuZCBhY2Nlc3NpYmlsaXR5IGltcGxlbWVudGF0aW9uIGZvciBhIHRvZ2dsZSBidXR0b24gY29tcG9uZW50LlxuICogVG9nZ2xlQnV0dG9ucyBhbGxvdyB1c2VycyB0byB0b2dnbGUgYSBzZWxlY3Rpb24gb24gb3Igb2ZmLCBmb3IgZXhhbXBsZSBzd2l0Y2hpbmcgYmV0d2VlbiB0d28gc3RhdGVzIG9yIG1vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVG9nZ2xlQnV0dG9uKHByb3BzOiBBcmlhVG9nZ2xlQnV0dG9uUHJvcHM8RWxlbWVudFR5cGU+LCBzdGF0ZTogVG9nZ2xlU3RhdGUsIHJlZjogUmVmT2JqZWN0PGFueT4pOiBCdXR0b25BcmlhPEhUTUxBdHRyaWJ1dGVzPGFueT4+IHtcbiAgY29uc3Qge2lzU2VsZWN0ZWR9ID0gc3RhdGU7XG4gIGNvbnN0IHtpc1ByZXNzZWQsIGJ1dHRvblByb3BzfSA9IHVzZUJ1dHRvbih7XG4gICAgLi4ucHJvcHMsXG4gICAgb25QcmVzczogY2hhaW4oc3RhdGUudG9nZ2xlLCBwcm9wcy5vblByZXNzKVxuICB9LCByZWYpO1xuXG4gIHJldHVybiB7XG4gICAgaXNQcmVzc2VkLFxuICAgIGJ1dHRvblByb3BzOiBtZXJnZVByb3BzKGJ1dHRvblByb3BzLCB7XG4gICAgICAnYXJpYS1wcmVzc2VkJzogaXNTZWxlY3RlZFxuICAgIH0pXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZENoaWxkcmVuKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpIHtcblx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcigoY2hpbGQpID0+XG5cdFx0UmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpXG5cdCkgYXMgUmVhY3QuUmVhY3RFbGVtZW50W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VmFsaWRDaGlsZHJlblxuIiwiaW1wb3J0IHsgRm9yd2FyZGVkUmVmIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnM8VCA9IGFueT4oXG5cdC4uLnJlZnM6IEZvcndhcmRlZFJlZjxUPltdXG4pOiBGb3J3YXJkZWRSZWY8VD4ge1xuXHRyZXR1cm4gKHZhbHVlKSA9PiB7XG5cdFx0Zm9yIChsZXQgcmVmIG9mIHJlZnMpIHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJlZih2YWx1ZSlcblx0XHRcdH0gZWxzZSBpZiAocmVmICE9IG51bGwpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSB2YWx1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgdXNlQnV0dG9uIH0gZnJvbSAnQHJlYWN0LWFyaWEvYnV0dG9uJ1xuaW1wb3J0IHsgdXNlSG92ZXIgfSBmcm9tICdAcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMnXG5pbXBvcnQgeyBnZXRWYWxpZENoaWxkcmVuLCBtZXJnZVJlZnMgfSBmcm9tICdAc2thdWkvdXRpbHMnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b25Hcm91cFByb3BzLCBCdXR0b25Qcm9wcyB9IGZyb20gJy4vYnV0dG9uLnR5cGVzJ1xuaW1wb3J0IHsgdXNlQnV0dG9uQ2xhc3MgfSBmcm9tICcuL3N0eWxlcydcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IGZvcndhcmRSZWY8XG5cdEhUTUxCdXR0b25FbGVtZW50LFxuXHRQcm9wc1dpdGhDaGlsZHJlbjxCdXR0b25Qcm9wcz5cbj4oKHByb3BzOiBCdXR0b25Qcm9wcywgZXh0UmVmOiBSZWFjdC5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPikgPT4ge1xuXHRjb25zdCB7XG5cdFx0c2l6ZSxcblx0XHRyb3VuZGVkLFxuXHRcdHZhcmlhbnQgPSAnc29saWQnLFxuXHRcdHR5cGUsXG5cdFx0YmxvY2ssXG5cdFx0Y29sb3IsXG5cdFx0Zm9jdXNhZnRlcmNsaWNrID0gdHJ1ZSxcblx0XHRpY29uLFxuXHRcdG5vdGlmaWNhdGlvbixcblx0XHRjbGFzc05hbWUsXG5cdFx0Y2hpbGRyZW4sXG5cdFx0ZGlzYWJsZWQsXG5cdFx0bG9hZGluZyxcblx0XHRvbkNsaWNrLFxuXHRcdC4uLnJlc3Rcblx0fSA9IHByb3BzXG5cdGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbClcblxuXHRjb25zdCBbaXNGb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCB7IGhvdmVyUHJvcHMsIGlzSG92ZXJlZCB9ID0gdXNlSG92ZXIoe1xuXHRcdGlzRGlzYWJsZWQ6IGRpc2FibGVkIHx8IGxvYWRpbmcsXG5cdH0pXG5cdGNvbnN0IHsgYnV0dG9uUHJvcHMsIGlzUHJlc3NlZCB9ID0gdXNlQnV0dG9uKFxuXHRcdHtcblx0XHRcdHR5cGU6ICdzdWJtaXQnLFxuXHRcdFx0aXNEaXNhYmxlZDogZGlzYWJsZWQgfHwgbG9hZGluZyxcblx0XHRcdG9uRm9jdXNDaGFuZ2U6IHNldEZvY3VzZWQsXG5cdFx0XHRvbktleURvd246IChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7XG5cdFx0XHRcdFx0b25DbGljaz8uKGUgYXMgYW55KVxuXHRcdFx0XHRcdHNldEZvY3VzZWQodHJ1ZSlcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZVxuXHRcdFx0fSxcblx0XHRcdG9uUHJlc3NFbmQ6IChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLnBvaW50ZXJUeXBlID09PSAndG91Y2gnKSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcblx0XHRcdFx0XHRmb2N1c2FmdGVyY2xpY2sgPyAnJyA6IGUudGFyZ2V0LmJsdXIoKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBlXG5cdFx0XHR9LFxuXHRcdFx0b25QcmVzc1N0YXJ0OiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xuXHRcdFx0XHRcdHNldEZvY3VzZWQodHJ1ZSlcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZVxuXHRcdFx0fSxcblx0XHRcdG9uUHJlc3M6IChlKSA9PiB7XG5cdFx0XHRcdG9uQ2xpY2s/LihlIGFzIGFueSlcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRidXR0b25SZWZcblx0KVxuXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VCdXR0b25DbGFzcyh7XG5cdFx0dmFyaWFudCxcblx0XHRzaXplLFxuXHRcdHR5cGUsXG5cdFx0ZGlzYWJsZWQsXG5cdFx0bG9hZGluZyxcblx0XHRyb3VuZGVkLFxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0ey4uLmJ1dHRvblByb3BzfVxuXHRcdFx0ey4uLmhvdmVyUHJvcHN9XG5cdFx0XHRkYXRhLWZvY3VzPXtpc0ZvY3VzZWQgPyAnJyA6IG51bGx9XG5cdFx0XHRkYXRhLWFjdGl2ZT17aXNQcmVzc2VkID8gJycgOiBudWxsfVxuXHRcdFx0ZGF0YS1ob3Zlcj17aXNIb3ZlcmVkID8gJycgOiBudWxsfVxuXHRcdFx0ZGF0YS1sb2FkaW5nPXtsb2FkaW5nID8gJycgOiBudWxsfVxuXHRcdFx0ZGF0YS1jb2xvcj17Y29sb3J9XG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goXG5cdFx0XHRcdFtjbGFzc2VzLCAhIWljb24gPyAoISFjaGlsZHJlbiA/ICcnIDogJ2ljb25vbmx5JykgOiAnJ10sXG5cdFx0XHRcdGNsYXNzTmFtZVxuXHRcdFx0KX1cblx0XHRcdHsuLi5yZXN0fVxuXHRcdFx0cmVmPXttZXJnZVJlZnMoYnV0dG9uUmVmLCBleHRSZWYpfVxuXHRcdD5cblx0XHRcdHtsb2FkaW5nICYmIChcblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidG4tc3Bpbm5lciAke2xvYWRpbmcgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9YH1cblx0XHRcdFx0XHRcdD48L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdCl9XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2BidG4tY29udGVudCAke2xvYWRpbmcgPyAnb3BhY2l0eS0wJyA6ICdvcGFjaXR5LTEwMCd9YH0+XG5cdFx0XHRcdHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT17Y2xzeCgnYnRuLWljb24nKX0+e2ljb259PC9zcGFuPn1cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0e25vdGlmaWNhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT0nYnRuLW5vdGlmaWNhdGlvbicgLz59XG5cdFx0PC9idXR0b24+XG5cdClcbn0pXG5cbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IGZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIEJ1dHRvbkdyb3VwUHJvcHM+KFxuXHQocHJvcHMsIHJlZikgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdHNpemUsXG5cdFx0XHRjb2xvcixcblx0XHRcdHZhcmlhbnQsXG5cdFx0XHRhdHRhY2hlZCxcblx0XHRcdHJvdW5kZWQsXG5cdFx0XHRkaXNhYmxlZCxcblx0XHRcdGNoaWxkcmVuLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0Li4ucmVzdFxuXHRcdH0gPSBwcm9wc1xuXG5cdFx0Y29uc3QgdmFsaWRDaGlsZHJlbiA9IGdldFZhbGlkQ2hpbGRyZW4oY2hpbGRyZW4pXG5cdFx0Y29uc3QgY29waWVzID0gdmFsaWRDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdHNpemU6IHNpemUgfHwgY2hpbGQucHJvcHMuc2l6ZSxcblx0XHRcdFx0Y29sb3I6IGNoaWxkLnByb3BzLmNvbG9yIHx8IGNvbG9yLFxuXHRcdFx0XHR2YXJpYW50OiBjaGlsZC5wcm9wcy52YXJpYW50IHx8IHZhcmlhbnQsXG5cdFx0XHRcdGRpc2FibGVkOiBjaGlsZC5wcm9wcy5kaXNhYmxlZCB8fCBkaXNhYmxlZCxcblx0XHRcdFx0cm91bmRlZDogY2hpbGQucHJvcHMucm91bmRlZCB8fCByb3VuZGVkLFxuXHRcdFx0XHRmb2N1c2FmdGVyY2xpY2s6IHRydWUsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e3JlZn1cblx0XHRcdFx0cm9sZT0nZ3JvdXAnXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xzeChcblx0XHRcdFx0XHQnYnRuLWdyb3VwJyxcblx0XHRcdFx0XHRhdHRhY2hlZCAmJiAnYnRuLWdyb3VwLWF0dGFjaGVkJyxcblx0XHRcdFx0XHRyb3VuZGVkICYmICdidG4tZ3JvdXAtcm91bmRlZCcsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHsuLi5yZXN0fVxuXHRcdFx0PlxuXHRcdFx0XHR7Y29waWVzfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG4pXG5CdXR0b25Hcm91cC5kaXNwbGF5TmFtZSA9ICdCdXR0b25Hcm91cCdcbiIsImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vYnV0dG9uLnR5cGVzJ1xuXG5pbnRlcmZhY2UgYnRuQ2xhc3NQcm9wcyB7XG5cdHZhcmlhbnQ6IEJ1dHRvblByb3BzWyd2YXJpYW50J11cblx0dHlwZTogQnV0dG9uUHJvcHNbJ3R5cGUnXVxuXHRzaXplOiBCdXR0b25Qcm9wc1snc2l6ZSddXG5cdGRpc2FibGVkOiBCdXR0b25Qcm9wc1snZGlzYWJsZWQnXVxuXHRsb2FkaW5nOiBCdXR0b25Qcm9wc1snbG9hZGluZyddXG5cdHJvdW5kZWQ6IEJ1dHRvblByb3BzWydyb3VuZGVkJ11cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUJ1dHRvbkNsYXNzID0gKHtcblx0dmFyaWFudCxcblx0dHlwZSxcblx0c2l6ZSxcblx0ZGlzYWJsZWQsXG5cdGxvYWRpbmcsXG5cdHJvdW5kZWQsXG59OiBidG5DbGFzc1Byb3BzKSA9PiB7XG5cdGNvbnN0IHZhcmlhbnRzID0ge1xuXHRcdHNvbGlkOiAnYnRuLXNvbGlkJyxcblx0XHRnaG9zdDogJ2J0bi1naG9zdCcsXG5cdH1cblxuXHRjb25zdCB0eXBlcyA9IHtcblx0XHRzdWNjZXNzOiAnYnRuLXN1Y2Nlc3MnLFxuXHRcdHNlY29uZGFyeTogJ2J0bi1zZWNvbmRhcnknLFxuXHRcdHdhcm5pbmc6ICdidG4td2FybmluZycsXG5cdFx0ZXJyb3I6ICdidG4tZXJyb3InLFxuXHRcdGFsZXJ0OiAnYnRuLWFsZXJ0Jyxcblx0fVxuXG5cdGNvbnN0IHNpemVzID0ge1xuXHRcdGJsb2NrOiAnYnRuLWJsb2NrJyxcblx0XHR4czogJ2J0bi14cycsXG5cdFx0c206ICdidG4tc20nLFxuXHRcdG1kOiAnYnRuLW1kJyxcblx0XHRsZzogJ2J0bi1sZycsXG5cdH1cblxuXHRjb25zdCBjbGFzc2VzID0gY2xzeChbXG5cdFx0J2J0bicsXG5cdFx0dmFyaWFudCAmJiB2YXJpYW50c1t2YXJpYW50XSxcblx0XHR0eXBlICYmIHR5cGVzW3R5cGVdLFxuXHRcdHNpemUgJiYgc2l6ZXNbc2l6ZV0sXG5cdFx0ZGlzYWJsZWQgJiYgJ2J0bi1kaXNhYmxlZCcsXG5cdFx0bG9hZGluZyAmJiAnYnRuLWxvYWRpbmcnLFxuXHRcdHJvdW5kZWQgJiYgJ2J0bi1yb3VuZGVkJyxcblx0XSlcblxuXHRyZXR1cm4gY2xhc3Nlc1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIGFzIEludGVybmFsQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vYnV0dG9uLnR5cGVzJ1xuaW1wb3J0IHsgQnV0dG9uR3JvdXAgfSBmcm9tICcuL2J1dHRvbidcblxuaW50ZXJmYWNlIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8QnV0dG9uUHJvcHM+IHtcblx0R3JvdXA6IHR5cGVvZiBCdXR0b25Hcm91cFxufVxuXG5jb25zdCBCdXR0b24gPSBJbnRlcm5hbEJ1dHRvbiBhcyBCdXR0b25cblxuQnV0dG9uLkdyb3VwID0gQnV0dG9uR3JvdXBcblxuZXhwb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9XG4iXX0=