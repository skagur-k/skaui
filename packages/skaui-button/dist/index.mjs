import $6nfFC$react, { forwardRef, useRef, useState, useContext, useMemo, useLayoutEffect, useCallback, useEffect } from 'react';

// ../../node_modules/.pnpm/@react-aria+utils@3.13.1_react@18.2.0/node_modules/@react-aria/utils/dist/module.js
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
var $704cf1d3b684cc5c$var$SSRContext = /* @__PURE__ */ $6nfFC$react.createContext($704cf1d3b684cc5c$var$defaultContext);
function $704cf1d3b684cc5c$export$9f8ac96af4b1b2ae(props) {
  let cur = useContext($704cf1d3b684cc5c$var$SSRContext);
  let value = useMemo(
    () => ({
      prefix: cur === $704cf1d3b684cc5c$var$defaultContext ? "" : `${cur.prefix}-${++cur.current}`,
      current: 0
    }),
    [
      cur
    ]
  );
  return /* @__PURE__ */ $6nfFC$react.createElement($704cf1d3b684cc5c$var$SSRContext.Provider, {
    value
  }, props.children);
}
var $704cf1d3b684cc5c$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
function $704cf1d3b684cc5c$export$619500959fc48b26(defaultId) {
  let ctx = useContext($704cf1d3b684cc5c$var$SSRContext);
  if (ctx === $704cf1d3b684cc5c$var$defaultContext && !$704cf1d3b684cc5c$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  return useMemo(
    () => defaultId || `react-aria${ctx.prefix}-${++ctx.current}`,
    [
      defaultId
    ]
  );
}
function $704cf1d3b684cc5c$export$535bd6ca7f90a273() {
  let cur = useContext($704cf1d3b684cc5c$var$SSRContext);
  let isInSSRContext = cur !== $704cf1d3b684cc5c$var$defaultContext;
  let [isSSR, setIsSSR] = useState(isInSSRContext);
  if (typeof window !== "undefined" && isInSSRContext)
    useLayoutEffect(() => {
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
function $parcel$export2(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $458b0a5536c1a7cf$exports = {};
$parcel$export2($458b0a5536c1a7cf$exports, "useControlledState", () => $458b0a5536c1a7cf$export$40bfa8c7b0832715);
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value1, defaultValue, onChange) {
  let [stateValue, setStateValue] = useState(value1 || defaultValue);
  let ref = useRef(value1 !== void 0);
  let wasControlled = ref.current;
  let isControlled = value1 !== void 0;
  let stateRef = useRef(stateValue);
  if (wasControlled !== isControlled)
    console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
  ref.current = isControlled;
  let setValue = useCallback((value2, ...args) => {
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
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== "undefined" ? $6nfFC$react.useLayoutEffect : () => {
};
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = useState(defaultId);
  let nextId = useRef(null);
  let res = $704cf1d3b684cc5c$export$619500959fc48b26(value);
  let updateValue = useCallback((val) => {
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
  useEffect(() => {
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
  let updateId = useCallback(() => {
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
  let dragging = useRef(false);
  let prevPosition = useRef(0);
  let handlers = useRef({
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
  let globalListeners = useRef(/* @__PURE__ */ new Map());
  let addGlobalListener = useCallback((eventTarget, type, listener, options) => {
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
  let removeGlobalListener = useCallback((eventTarget, type, listener, options) => {
    var ref;
    let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  useEffect(() => {
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
  const objRef = useRef();
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
  const isInitialMount = useRef(true);
  useEffect(() => {
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
  useEffect(() => {
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
  let [size1, setSize] = useState(
    () => $5df64b3807dc15ee$var$getViewportSize()
  );
  useEffect(() => {
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
  let [id1, setId] = useState(null);
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
  let handlerRef = useRef(handler1);
  handlerRef.current = handler1;
  let isDisabled = handler1 == null;
  useEffect(() => {
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
  let [value, setValue] = useState(defaultValue);
  let valueRef = useRef(value);
  let effect = useRef(null);
  valueRef.current = value;
  let nextRef = useRef(null);
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
  let queue = useCallback((fn) => {
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
  let stateRef = useRef({
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
  return useCallback((e1) => {
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
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = $6nfFC$react.createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
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
  let propsRef = useRef(null);
  propsRef.current = {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = useState(false);
  let ref = useRef({
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
  let pressProps1 = useMemo(() => {
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
  useEffect(() => {
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
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = /* @__PURE__ */ $6nfFC$react.forwardRef(({ children, ...props }, ref) => {
  let newRef = useRef();
  ref = ref !== null && ref !== void 0 ? ref : newRef;
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    ...props,
    ref
  });
  let child = $6nfFC$react.Children.only(children);
  return /* @__PURE__ */ $6nfFC$react.cloneElement(
    child,
    {
      ref,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(child.props, pressProps)
    }
  );
});
var $f1ab8c75478c6f73$exports = {};
$parcel$export4($f1ab8c75478c6f73$exports, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b8);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = /* @__PURE__ */ $6nfFC$react.forwardRef(({ children, ...props }, ref) => {
  let isRegistered = useRef(false);
  let prevContext = useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
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
  useEffect(() => {
    if (!isRegistered.current)
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
  }, []);
  return /* @__PURE__ */ $6nfFC$react.createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb5.Provider, {
    value: context
  }, children);
});
var $a1ea59d68270f0dd$exports = {};
$parcel$export4($a1ea59d68270f0dd$exports, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e6);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = useCallback((e) => {
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
  const onFocus = useCallback((e) => {
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
  let [modality, setModality] = useState($507fabe10e71c6fb$var$currentModality);
  useEffect(() => {
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
  let [isFocusVisibleState, setFocusVisible] = useState(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
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
  useEffect(() => {
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
  let state = useRef({
    isFocusWithin: false
  });
  let onBlur = useCallback((e) => {
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
  let onFocus = useCallback((e) => {
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
  let [isHovered, setHovered] = useState(false);
  let state = useRef({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  useEffect($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps: hoverProps1, triggerHoverEnd: triggerHoverEnd1 } = useMemo(() => {
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
  useEffect(() => {
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
  let stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
    onInteractOutside,
    onInteractOutsideStart
  });
  let state = stateRef.current;
  state.onInteractOutside = onInteractOutside;
  state.onInteractOutsideStart = onInteractOutsideStart;
  useEffect(() => {
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
  let state = useRef({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let moveProps1 = useMemo(() => {
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
  let onScrollHandler = useCallback((e) => {
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
  const timeRef = useRef(null);
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
var $9bf71ea28793e738$var$FocusContext = /* @__PURE__ */ $6nfFC$react.createContext(null);
var $9bf71ea28793e738$var$activeScope = null;
var $9bf71ea28793e738$var$scopes = /* @__PURE__ */ new Map();
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
  let { children, contain, restoreFocus, autoFocus } = props;
  let startRef = useRef();
  let endRef = useRef();
  let scopeRef = useRef([]);
  let ctx = useContext($9bf71ea28793e738$var$FocusContext);
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
  return /* @__PURE__ */ $6nfFC$react.createElement($9bf71ea28793e738$var$FocusContext.Provider, {
    value: {
      scopeRef,
      focusManager
    }
  }, /* @__PURE__ */ $6nfFC$react.createElement("span", {
    "data-focus-scope-start": true,
    hidden: true,
    ref: startRef
  }), children, /* @__PURE__ */ $6nfFC$react.createElement("span", {
    "data-focus-scope-end": true,
    hidden: true,
    ref: endRef
  }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
  var ref;
  return (ref = useContext($9bf71ea28793e738$var$FocusContext)) === null || ref === void 0 ? void 0 : ref.focusManager;
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
  let focusedNode = useRef();
  let raf = useRef(null);
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
  useEffect(() => {
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
  const autoFocusRef = $6nfFC$react.useRef(autoFocus);
  useEffect(() => {
    if (autoFocusRef.current) {
      $9bf71ea28793e738$var$activeScope = scopeRef;
      if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current))
        $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
    }
    autoFocusRef.current = false;
  }, []);
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
  const nodeToRestoreRef = useRef(typeof document !== "undefined" ? document.activeElement : null);
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
  let state = useRef({
    isFocused: false,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  });
  let [isFocused1, setFocused] = useState(false);
  let [isFocusVisibleState, setFocusVisible] = useState(
    () => state.current.isFocused && state.current.isFocusVisible
  );
  let updateState = useCallback(
    () => setFocusVisible(state.current.isFocused && state.current.isFocusVisible),
    []
  );
  let onFocusChange = useCallback((isFocused) => {
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
  let child = $6nfFC$react.Children.only(children);
  return /* @__PURE__ */ $6nfFC$react.cloneElement(child, $3ef42575df84b30b$export$9d1611c77c2fe928(child.props, {
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
var $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ $6nfFC$react.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = useContext($e6afbd83fe6ebbd2$var$FocusableContext) || {};
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
  return /* @__PURE__ */ $6nfFC$react.createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /* @__PURE__ */ $6nfFC$react.forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
  let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = useRef(props.autoFocus);
  useEffect(() => {
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
function getValidChildren(children) {
  return $6nfFC$react.Children.toArray(children).filter(
    (child) => $6nfFC$react.isValidElement(child)
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
var Button = forwardRef((props, extRef) => {
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
  const buttonRef = useRef(null);
  const [isFocused, setFocused] = useState(false);
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
  return /* @__PURE__ */ $6nfFC$react.createElement("button", {
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
  }, loading && /* @__PURE__ */ $6nfFC$react.createElement("span", null, /* @__PURE__ */ $6nfFC$react.createElement("div", {
    className: `btn-spinner ${loading ? "opacity-100" : "opacity-0"}`
  })), /* @__PURE__ */ $6nfFC$react.createElement("span", {
    className: `btn-content ${loading ? "opacity-0" : "opacity-100"}`
  }, icon && /* @__PURE__ */ $6nfFC$react.createElement("span", {
    className: clsx_m_default("btn-icon")
  }, icon), children), notification && /* @__PURE__ */ $6nfFC$react.createElement("div", {
    className: "btn-notification"
  }));
});
Button.displayName = "Button";
var ButtonGroup = forwardRef(
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
      return $6nfFC$react.cloneElement(child, {
        size: size || child.props.size,
        color: child.props.color || color,
        variant: child.props.variant || variant,
        disabled: child.props.disabled || disabled,
        rounded: child.props.rounded || rounded,
        focusafterclick: true
      });
    });
    return /* @__PURE__ */ $6nfFC$react.createElement("div", {
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

export { Button2 as Button, ButtonGroup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStzc3JAMy4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9zc3IvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9zc3Ivc3JjL1NTUlByb3ZpZGVyLnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDEuMi4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1zdGF0ZWx5K3V0aWxzQDMuNS4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3Qtc3RhdGVseS91dGlscy9zcmMvdXNlQ29udHJvbGxlZFN0YXRlLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1zdGF0ZWx5K3V0aWxzQDMuNS4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3Qtc3RhdGVseS91dGlscy9zcmMvbnVtYmVyLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZUxheW91dEVmZmVjdC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VJZC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9jaGFpbi50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9tZXJnZVByb3BzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL21lcmdlUmVmcy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9maWx0ZXJET01Qcm9wcy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9mb2N1c1dpdGhvdXRTY3JvbGxpbmcudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvZ2V0T2Zmc2V0LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3J1bkFmdGVyVHJhbnNpdGlvbi50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VEcmFnMUQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvdXNlR2xvYmFsTGlzdGVuZXJzLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZUxhYmVscy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VPYmplY3RSZWYudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvdXNlVXBkYXRlRWZmZWN0LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZVJlc2l6ZU9ic2VydmVyLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZVN5bmNSZWYudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdXRpbHNAMy4xMy4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdXRpbHMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS91dGlscy9zcmMvZ2V0U2Nyb2xsUGFyZW50LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK3V0aWxzQDMuMTMuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3V0aWxzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvdXRpbHMvc3JjL3VzZVZpZXdwb3J0U2l6ZS50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VEZXNjcmlwdGlvbi50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9wbGF0Zm9ybS50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VFdmVudC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy91c2VWYWx1ZUVmZmVjdC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt1dGlsc0AzLjEzLjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS91dGlscy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL3V0aWxzL3NyYy9zY3JvbGxJbnRvVmlldy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3RleHRTZWxlY3Rpb24udHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy91dGlscy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL2NvbnRleHQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy91c2VQcmVzcy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL1ByZXNzYWJsZS50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy9QcmVzc1Jlc3BvbmRlci50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy91c2VGb2N1cy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZUZvY3VzVmlzaWJsZS50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZUZvY3VzV2l0aGluLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ludGVyYWN0aW9uc0AzLjkuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9kaXN0L3BhY2thZ2VzL0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucy9zcmMvdXNlSG92ZXIudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy91c2VJbnRlcmFjdE91dHNpZGUudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy9jcmVhdGVFdmVudEhhbmRsZXIudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy91c2VLZXlib2FyZC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZU1vdmUudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWEraW50ZXJhY3Rpb25zQDMuOS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zL3NyYy91c2VTY3JvbGxXaGVlbC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStpbnRlcmFjdGlvbnNAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMvc3JjL3VzZUxvbmdQcmVzcy50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStmb2N1c0AzLjYuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ZvY3VzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvZm9jdXMvc3JjL2ZvY3VzU2FmZWx5LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ZvY3VzQDMuNi4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvZm9jdXMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9mb2N1cy9zcmMvaXNFbGVtZW50VmlzaWJsZS50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStmb2N1c0AzLjYuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ZvY3VzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvZm9jdXMvc3JjL0ZvY3VzU2NvcGUudHN4IiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ZvY3VzQDMuNi4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvZm9jdXMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9mb2N1cy9zcmMvdXNlRm9jdXNSaW5nLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ZvY3VzQDMuNi4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvZm9jdXMvZGlzdC9wYWNrYWdlcy9AcmVhY3QtYXJpYS9mb2N1cy9zcmMvRm9jdXNSaW5nLnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStmb2N1c0AzLjYuMV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ZvY3VzL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvZm9jdXMvc3JjL3VzZUZvY3VzYWJsZS50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErYnV0dG9uQDMuNS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvYnV0dG9uL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvYnV0dG9uL3NyYy91c2VCdXR0b24udHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErYnV0dG9uQDMuNS4xX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvYnV0dG9uL2Rpc3QvcGFja2FnZXMvQHJlYWN0LWFyaWEvYnV0dG9uL3NyYy91c2VUb2dnbGVCdXR0b24udHMiLCIuLi8uLi9za2F1aS11dGlscy9zcmMvZ2V0VmFsaWRDaGlsZHJlbi50cyIsIi4uLy4uL3NrYXVpLXV0aWxzL3NyYy9tZXJnZVJlZnMudHMiLCIuLi9zcmMvYnV0dG9uLnRzeCIsIi4uL3NyYy9zdHlsZXMudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiciIsIiQ1MDdmYWJlMTBlNzFjNmZiJGV4cG9ydCRiOWIzZGZkZGFiMTdkYjI3IiwiUmVhY3QiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWlDQSxJQUFNLHVDQUFrQztFQUN0QyxRQUFRLE9BQU8sS0FBSyxNQUFNLEtBQUssT0FBTSxJQUFLLElBQVcsQ0FBQTtFQUNyRCxTQUFTO0FBQ1g7QUFFQSxJQUFNLG1DQUFhLDZCQUFNLGNBQStCLG9DQUFjO1NBV3RELDBDQUFZLE9BQXNDO0FBQ2hFLE1BQUksTUFBTSxrQkFBVyxnQ0FBVTtBQUMvQixNQUFJLFFBQXlCO0lBQU8sT0FBUTtNQUcxQyxRQUFRLFFBQVEsdUNBQWlCLEtBQUUsR0FBTSxJQUFJLFVBQVEsRUFBSSxJQUFJO01BQzdELFNBQVM7SUFDWDtJQUFJO01BQUM7SUFBRztFQUFDO0FBRVQsU0FBTSw2QkFBQSxjQUNILGlDQUFXLFVBQVE7SUFBQztLQUNsQixNQUFNLFFBQVE7QUFHckI7QUFFQSxJQUFJLGtDQUFZLFFBQ2QsT0FBTyxXQUFXLGVBQ2xCLE9BQU8sWUFDUCxPQUFPLFNBQVMsYUFBYTtTQUlmLDBDQUFhLFdBQTRCO0FBQ3ZELE1BQUksTUFBTSxrQkFBVyxnQ0FBVTtBQUkvQixNQUFJLFFBQVEsd0NBQWMsQ0FBSztBQUM3QixZQUFRLEtBQUssaUpBQWlKO0FBR2hLLFNBQU87SUFBTyxNQUFPLGFBQVMsYUFBaUIsSUFBSSxVQUFRLEVBQUksSUFBSTtJQUFXO01BQUM7SUFBUztFQUFDO0FBQzNGO1NBT2dCLDRDQUFvQjtBQUNsQyxNQUFJLE1BQU0sa0JBQVcsZ0NBQVU7QUFDL0IsTUFBSSxpQkFBaUIsUUFBUTtBQUM3QixNQUFHLENBQUUsT0FBTyxRQUFRLElBQUksZ0JBQVMsY0FBYztBQUkvQyxNQUFJLE9BQU8sV0FBVyxlQUFlO0FBSW5DLDJCQUFlLE1BQU87QUFDcEIsZUFBUyxLQUFLO0lBQ2hCLEdBQUcsQ0FBQyxDQUFDO0FBR1AsU0FBTztBQUNUOzs7QUMxR0EsU0FB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QUFBLE1BQ0wsV0FBVztBQUFBLFFBQ1Y7QUFBQSxRQUNBLFlBQVk7QUFBQSxRQUNaLFdBQVc7QUFBQSxRQUNYO0FBQUEsTUFDRDtBQUFBLE1BQ0MsR0FBRztBQUFBLE9BRUgsTUFDRjtBQUFBLEVBRUY7QUFDRDtBQUNBLFlBQVksY0FBYzs7O0FFbkoxQixJQUFNQyxVQUFTO0FBRWZBLFFBQU8sUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBXZSBtdXN0IGF2b2lkIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSB3aXRoIEByZWFjdC1hcmlhL3V0aWxzLCBhbmQgdGhpcyB1c2VMYXlvdXRFZmZlY3QgaXNcbi8vIGd1YXJkZWQgYnkgYSBjaGVjayB0aGF0IGl0IG9ubHkgcnVucyBvbiB0aGUgY2xpZW50IHNpZGUuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcnVsZXNkaXIvdXNlTGF5b3V0RWZmZWN0UnVsZVxuaW1wb3J0IFJlYWN0LCB7UmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbi8vIFRvIHN1cHBvcnQgU1NSLCB0aGUgYXV0byBpbmNyZW1lbnRpbmcgaWQgY291bnRlciBpcyBzdG9yZWQgaW4gYSBjb250ZXh0LiBUaGlzIGFsbG93c1xuLy8gaXQgdG8gYmUgcmVzZXQgb24gZXZlcnkgcmVxdWVzdCB0byBlbnN1cmUgdGhlIGNsaWVudCBhbmQgc2VydmVyIGFyZSBjb25zaXN0ZW50LlxuLy8gVGhlcmUgaXMgYWxzbyBhIHByZWZpeCBzdHJpbmcgdGhhdCBpcyB1c2VkIHRvIHN1cHBvcnQgYXN5bmMgbG9hZGluZyBjb21wb25lbnRzXG4vLyBFYWNoIGFzeW5jIGJvdW5kYXJ5IG11c3QgYmUgd3JhcHBlZCBpbiBhbiBTU1IgcHJvdmlkZXIsIHdoaWNoIGFwcGVuZHMgdG8gdGhlIHByZWZpeFxuLy8gYW5kIHJlc2V0cyB0aGUgY3VycmVudCBpZCBjb3VudGVyLiBUaGlzIGVuc3VyZXMgdGhhdCBhc3luYyBsb2FkZWQgY29tcG9uZW50cyBoYXZlXG4vLyBjb25zaXN0ZW50IGlkcyByZWdhcmRsZXNzIG9mIHRoZSBsb2FkaW5nIG9yZGVyLlxuaW50ZXJmYWNlIFNTUkNvbnRleHRWYWx1ZSB7XG4gIHByZWZpeDogc3RyaW5nLFxuICBjdXJyZW50OiBudW1iZXJcbn1cblxuLy8gRGVmYXVsdCBjb250ZXh0IHZhbHVlIHRvIHVzZSBpbiBjYXNlIHRoZXJlIGlzIG5vIFNTUlByb3ZpZGVyLiBUaGlzIGlzIGZpbmUgZm9yXG4vLyBjbGllbnQtb25seSBhcHBzLiBJbiBvcmRlciB0byBzdXBwb3J0IG11bHRpcGxlIGNvcGllcyBvZiBSZWFjdCBBcmlhIHBvdGVudGlhbGx5XG4vLyBiZWluZyBvbiB0aGUgcGFnZSBhdCBvbmNlLCB0aGUgcHJlZml4IGlzIHNldCB0byBhIHJhbmRvbSBudW1iZXIuIFNTUlByb3ZpZGVyXG4vLyB3aWxsIHJlc2V0IHRoaXMgdG8gemVybyBmb3IgY29uc2lzdGVuY3kgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCwgc28gaW4gdGhlXG4vLyBTU1IgY2FzZSBtdWx0aXBsZSBjb3BpZXMgb2YgUmVhY3QgQXJpYSBpcyBub3Qgc3VwcG9ydGVkLlxuY29uc3QgZGVmYXVsdENvbnRleHQ6IFNTUkNvbnRleHRWYWx1ZSA9IHtcbiAgcHJlZml4OiBTdHJpbmcoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApKSxcbiAgY3VycmVudDogMFxufTtcblxuY29uc3QgU1NSQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8U1NSQ29udGV4dFZhbHVlPihkZWZhdWx0Q29udGV4dCk7XG5cbmludGVyZmFjZSBTU1JQcm92aWRlclByb3BzIHtcbiAgLyoqIFlvdXIgYXBwbGljYXRpb24gaGVyZS4gKi9cbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIFdoZW4gdXNpbmcgU1NSIHdpdGggUmVhY3QgQXJpYSwgYXBwbGljYXRpb25zIG11c3QgYmUgd3JhcHBlZCBpbiBhbiBTU1JQcm92aWRlci5cbiAqIFRoaXMgZW5zdXJlcyB0aGF0IGF1dG8gZ2VuZXJhdGVkIGlkcyBhcmUgY29uc2lzdGVudCBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHNlcnZlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNTUlByb3ZpZGVyKHByb3BzOiBTU1JQcm92aWRlclByb3BzKTogSlNYLkVsZW1lbnQge1xuICBsZXQgY3VyID0gdXNlQ29udGV4dChTU1JDb250ZXh0KTtcbiAgbGV0IHZhbHVlOiBTU1JDb250ZXh0VmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgU1NSUHJvdmlkZXIsIHN0YXJ0IHdpdGggYW4gZW1wdHkgc3RyaW5nIHByZWZpeCwgb3RoZXJ3aXNlXG4gICAgLy8gYXBwZW5kIGFuZCBpbmNyZW1lbnQgdGhlIGNvdW50ZXIuXG4gICAgcHJlZml4OiBjdXIgPT09IGRlZmF1bHRDb250ZXh0ID8gJycgOiBgJHtjdXIucHJlZml4fS0keysrY3VyLmN1cnJlbnR9YCxcbiAgICBjdXJyZW50OiAwXG4gIH0pLCBbY3VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U1NSQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvU1NSQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxubGV0IGNhblVzZURPTSA9IEJvb2xlYW4oXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxuICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcblxuLyoqIEBwcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU1NSU2FmZUlkKGRlZmF1bHRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBjdHggPSB1c2VDb250ZXh0KFNTUkNvbnRleHQpO1xuXG4gIC8vIElmIHdlIGFyZSByZW5kZXJpbmcgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBhbmQgdGhlcmUncyBubyBTU1JQcm92aWRlcixcbiAgLy8gcHJvdmlkZSBhIHdhcm5pbmcgdG8gaGludCB0byB0aGUgZGV2ZWxvcGVyIHRvIGFkZCBvbmUuXG4gIGlmIChjdHggPT09IGRlZmF1bHRDb250ZXh0ICYmICFjYW5Vc2VET00pIHtcbiAgICBjb25zb2xlLndhcm4oJ1doZW4gc2VydmVyIHJlbmRlcmluZywgeW91IG11c3Qgd3JhcCB5b3VyIGFwcGxpY2F0aW9uIGluIGFuIDxTU1JQcm92aWRlcj4gdG8gZW5zdXJlIGNvbnNpc3RlbnQgaWRzIGFyZSBnZW5lcmF0ZWQgYmV0d2VlbiB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIuJyk7XG4gIH1cblxuICByZXR1cm4gdXNlTWVtbygoKSA9PiBkZWZhdWx0SWQgfHwgYHJlYWN0LWFyaWEke2N0eC5wcmVmaXh9LSR7KytjdHguY3VycmVudH1gLCBbZGVmYXVsdElkXSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgY3VycmVudGx5IGJlaW5nIHNlcnZlciBzaWRlIHJlbmRlcmVkIG9yXG4gKiBoeWRyYXRlZCBvbiB0aGUgY2xpZW50LiBDYW4gYmUgdXNlZCB0byBkZWxheSBicm93c2VyLXNwZWNpZmljIHJlbmRlcmluZ1xuICogdW50aWwgYWZ0ZXIgaHlkcmF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSXNTU1IoKTogYm9vbGVhbiB7XG4gIGxldCBjdXIgPSB1c2VDb250ZXh0KFNTUkNvbnRleHQpO1xuICBsZXQgaXNJblNTUkNvbnRleHQgPSBjdXIgIT09IGRlZmF1bHRDb250ZXh0O1xuICBsZXQgW2lzU1NSLCBzZXRJc1NTUl0gPSB1c2VTdGF0ZShpc0luU1NSQ29udGV4dCk7XG5cbiAgLy8gSWYgb24gdGhlIGNsaWVudCwgYW5kIHRoZSBjb21wb25lbnQgd2FzIGluaXRpYWxseSBzZXJ2ZXIgcmVuZGVyZWQsXG4gIC8vIHRoZW4gc2NoZWR1bGUgYSBsYXlvdXQgZWZmZWN0IHRvIHVwZGF0ZSB0aGUgY29tcG9uZW50IGFmdGVyIGh5ZHJhdGlvbi5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSW5TU1JDb250ZXh0KSB7XG4gICAgLy8gVGhpcyBpZiBzdGF0ZW1lbnQgdGVjaG5pY2FsbHkgYnJlYWtzIHRoZSBydWxlcyBvZiBob29rcywgYnV0IGlzIHNhZmVcbiAgICAvLyBiZWNhdXNlIHRoZSBjb25kaXRpb24gbmV2ZXIgY2hhbmdlcyBhZnRlciBtb3VudGluZy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0SXNTU1IoZmFsc2UpO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJldHVybiBpc1NTUjtcbn1cbiIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKWZvcih0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpO2Vsc2UgZm9yKHQgaW4gZSllW3RdJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCI7Zjxhcmd1bWVudHMubGVuZ3RoOykoZT1hcmd1bWVudHNbZisrXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250cm9sbGVkU3RhdGU8VD4oXG4gIHZhbHVlOiBULFxuICBkZWZhdWx0VmFsdWU6IFQsXG4gIG9uQ2hhbmdlOiAodmFsdWU6IFQsIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG4pOiBbVCwgKHZhbHVlOiBULCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZF0gIHtcbiAgbGV0IFtzdGF0ZVZhbHVlLCBzZXRTdGF0ZVZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlIHx8IGRlZmF1bHRWYWx1ZSk7XG4gIGxldCByZWYgPSB1c2VSZWYodmFsdWUgIT09IHVuZGVmaW5lZCk7XG4gIGxldCB3YXNDb250cm9sbGVkID0gcmVmLmN1cnJlbnQ7XG4gIGxldCBpc0NvbnRyb2xsZWQgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAvLyBJbnRlcm5hbCBzdGF0ZSByZWZlcmVuY2UgZm9yIHVzZUNhbGxiYWNrXG4gIGxldCBzdGF0ZVJlZiA9IHVzZVJlZihzdGF0ZVZhbHVlKTtcbiAgaWYgKHdhc0NvbnRyb2xsZWQgIT09IGlzQ29udHJvbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihgV0FSTjogQSBjb21wb25lbnQgY2hhbmdlZCBmcm9tICR7d2FzQ29udHJvbGxlZCA/ICdjb250cm9sbGVkJyA6ICd1bmNvbnRyb2xsZWQnfSB0byAke2lzQ29udHJvbGxlZCA/ICdjb250cm9sbGVkJyA6ICd1bmNvbnRyb2xsZWQnfS5gKTtcbiAgfVxuXG4gIHJlZi5jdXJyZW50ID0gaXNDb250cm9sbGVkO1xuXG4gIGxldCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgLi4uYXJncykgPT4ge1xuICAgIGxldCBvbkNoYW5nZUNhbGxlciA9ICh2YWx1ZSwgLi4ub25DaGFuZ2VBcmdzKSA9PiB7XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgaWYgKCFPYmplY3QuaXMoc3RhdGVSZWYuY3VycmVudCwgdmFsdWUpKSB7XG4gICAgICAgICAgb25DaGFuZ2UodmFsdWUsIC4uLm9uQ2hhbmdlQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdXZSBjYW4gbm90IHN1cHBvcnQgYSBmdW5jdGlvbiBjYWxsYmFjay4gU2VlIEdpdGh1YiBJc3N1ZXMgZm9yIGRldGFpbHMgaHR0cHM6Ly9naXRodWIuY29tL2Fkb2JlL3JlYWN0LXNwZWN0cnVtL2lzc3Vlcy8yMzIwJyk7XG4gICAgICAvLyB0aGlzIHN1cHBvcnRzIGZ1bmN0aW9uYWwgdXBkYXRlcyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjZnVuY3Rpb25hbC11cGRhdGVzXG4gICAgICAvLyB3aGVuIHNvbWVvbmUgdXNpbmcgdXNlQ29udHJvbGxlZFN0YXRlIGNhbGxzIHNldENvbnRyb2xsZWRTdGF0ZShteUZ1bmMpXG4gICAgICAvLyB0aGlzIHdpbGwgY2FsbCBvdXIgdXNlU3RhdGUgc2V0U3RhdGUgd2l0aCBhIGZ1bmN0aW9uIGFzIHdlbGwgd2hpY2ggaW52b2tlcyBteUZ1bmMgYW5kIGNhbGxzIG9uQ2hhbmdlIHdpdGggdGhlIHZhbHVlIGZyb20gbXlGdW5jXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBhbiB1bmNvbnRyb2xsZWQgc3RhdGUsIHRoZW4gd2UgYWxzbyByZXR1cm4gdGhlIHZhbHVlIG9mIG15RnVuYyB3aGljaCB0byBzZXRTdGF0ZSBsb29rcyBhcyB0aG91Z2ggaXQgd2FzIGp1c3QgY2FsbGVkIHdpdGggbXlGdW5jIGZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgLy8gb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIHRoZSBjb250cm9sbGVkIHZhbHVlLCB3aGljaCB3b24ndCBjYXVzZSBhIHJlcmVuZGVyIGJlY2F1c2UgUmVhY3Qga25vd3MgdG8gYmFpbCBvdXQgd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWVcbiAgICAgIGxldCB1cGRhdGVGdW5jdGlvbiA9IChvbGRWYWx1ZSwgLi4uZnVuY3Rpb25BcmdzKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcmNlcHRlZFZhbHVlID0gdmFsdWUoaXNDb250cm9sbGVkID8gc3RhdGVSZWYuY3VycmVudCA6IG9sZFZhbHVlLCAuLi5mdW5jdGlvbkFyZ3MpO1xuICAgICAgICBvbkNoYW5nZUNhbGxlcihpbnRlcmNlcHRlZFZhbHVlLCAuLi5hcmdzKTtcbiAgICAgICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgICByZXR1cm4gaW50ZXJjZXB0ZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICB9O1xuICAgICAgc2V0U3RhdGVWYWx1ZSh1cGRhdGVGdW5jdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICAgIHNldFN0YXRlVmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgICAgb25DaGFuZ2VDYWxsZXIodmFsdWUsIC4uLmFyZ3MpO1xuICAgIH1cbiAgfSwgW2lzQ29udHJvbGxlZCwgb25DaGFuZ2VdKTtcblxuICAvLyBJZiBhIGNvbnRyb2xsZWQgY29tcG9uZW50J3MgdmFsdWUgcHJvcCBjaGFuZ2VzLCB3ZSBuZWVkIHRvIHVwZGF0ZSBzdGF0ZVJlZlxuICBpZiAoaXNDb250cm9sbGVkKSB7XG4gICAgc3RhdGVSZWYuY3VycmVudCA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gc3RhdGVWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRha2VzIGEgdmFsdWUgYW5kIGZvcmNlcyBpdCB0byB0aGUgY2xvc2VzdCBtaW4vbWF4IGlmIGl0J3Mgb3V0c2lkZS4gQWxzbyBmb3JjZXMgaXQgdG8gdGhlIGNsb3Nlc3QgdmFsaWQgc3RlcC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyID0gLUluZmluaXR5LCBtYXg6IG51bWJlciA9IEluZmluaXR5KTogbnVtYmVyIHtcbiAgbGV0IG5ld1ZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG4gIHJldHVybiBuZXdWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBWYWx1ZVRvU3RlcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHN0ZXA6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCByZW1haW5kZXIgPSAoKHZhbHVlIC0gKGlzTmFOKG1pbikgPyAwIDogbWluKSkgJSBzdGVwKTtcbiAgbGV0IHNuYXBwZWRWYWx1ZSA9IE1hdGguYWJzKHJlbWFpbmRlcikgKiAyID49IHN0ZXBcbiAgICA/IHZhbHVlICsgTWF0aC5zaWduKHJlbWFpbmRlcikgKiAoc3RlcCAtIE1hdGguYWJzKHJlbWFpbmRlcikpXG4gICAgOiB2YWx1ZSAtIHJlbWFpbmRlcjtcblxuICBpZiAoIWlzTmFOKG1pbikpIHtcbiAgICBpZiAoc25hcHBlZFZhbHVlIDwgbWluKSB7XG4gICAgICBzbmFwcGVkVmFsdWUgPSBtaW47XG4gICAgfSBlbHNlIGlmICghaXNOYU4obWF4KSAmJiBzbmFwcGVkVmFsdWUgPiBtYXgpIHtcbiAgICAgIHNuYXBwZWRWYWx1ZSA9IG1pbiArIE1hdGguZmxvb3IoKG1heCAtIG1pbikgLyBzdGVwKSAqIHN0ZXA7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc05hTihtYXgpICYmIHNuYXBwZWRWYWx1ZSA+IG1heCkge1xuICAgIHNuYXBwZWRWYWx1ZSA9IE1hdGguZmxvb3IobWF4IC8gc3RlcCkgKiBzdGVwO1xuICB9XG5cbiAgLy8gY29ycmVjdCBmbG9hdGluZyBwb2ludCBiZWhhdmlvciBieSByb3VuZGluZyB0byBzdGVwIHByZWNpc2lvblxuICBsZXQgc3RyaW5nID0gc3RlcC50b1N0cmluZygpO1xuICBsZXQgaW5kZXggPSBzdHJpbmcuaW5kZXhPZignLicpO1xuICBsZXQgcHJlY2lzaW9uID0gaW5kZXggPj0gMCA/IHN0cmluZy5sZW5ndGggLSBpbmRleCA6IDA7XG5cbiAgaWYgKHByZWNpc2lvbiA+IDApIHtcbiAgICBsZXQgcG93ID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgc25hcHBlZFZhbHVlID0gTWF0aC5yb3VuZChzbmFwcGVkVmFsdWUgKiBwb3cpIC8gcG93O1xuICB9XG5cbiAgcmV0dXJuIHNuYXBwZWRWYWx1ZTtcbn1cblxuLyogVGFrZXMgYSB2YWx1ZSBhbmQgcm91bmRzIG9mZiB0byB0aGUgbnVtYmVyIG9mIGRpZ2l0cy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeGVkTnVtYmVyKHZhbHVlOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyLCBiYXNlOiBudW1iZXIgPSAxMCk6IG51bWJlciB7XG4gIGNvbnN0IHBvdyA9IE1hdGgucG93KGJhc2UsIGRpZ2l0cyk7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwb3cpIC8gcG93O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIER1cmluZyBTU1IsIFJlYWN0IGVtaXRzIGEgd2FybmluZyB3aGVuIGNhbGxpbmcgdXNlTGF5b3V0RWZmZWN0LlxuLy8gU2luY2UgbmVpdGhlciB1c2VMYXlvdXRFZmZlY3Qgbm9yIHVzZUVmZmVjdCBydW4gb24gdGhlIHNlcnZlcixcbi8vIHdlIGNhbiBzdXBwcmVzcyB0aGlzIGJ5IHJlcGxhY2UgaXQgd2l0aCBhIG5vb3Agb24gdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCB1c2VMYXlvdXRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICA/IFJlYWN0LnVzZUxheW91dEVmZmVjdFxuICA6ICgpID0+IHt9O1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VMYXlvdXRFZmZlY3R9IGZyb20gJy4vdXNlTGF5b3V0RWZmZWN0JztcbmltcG9ydCB7dXNlU1NSU2FmZUlkfSBmcm9tICdAcmVhY3QtYXJpYS9zc3InO1xuaW1wb3J0IHt1c2VWYWx1ZUVmZmVjdH0gZnJvbSAnLi8nO1xuXG5sZXQgaWRzVXBkYXRlck1hcDogTWFwPHN0cmluZywgKHY6IHN0cmluZykgPT4gdm9pZD4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogSWYgYSBkZWZhdWx0IGlzIG5vdCBwcm92aWRlZCwgZ2VuZXJhdGUgYW4gaWQuXG4gKiBAcGFyYW0gZGVmYXVsdElkIC0gRGVmYXVsdCBjb21wb25lbnQgaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZChkZWZhdWx0SWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShkZWZhdWx0SWQpO1xuICBsZXQgbmV4dElkID0gdXNlUmVmKG51bGwpO1xuXG4gIGxldCByZXMgPSB1c2VTU1JTYWZlSWQodmFsdWUpO1xuXG4gIGxldCB1cGRhdGVWYWx1ZSA9IHVzZUNhbGxiYWNrKCh2YWwpID0+IHtcbiAgICBuZXh0SWQuY3VycmVudCA9IHZhbDtcbiAgfSwgW10pO1xuXG4gIGlkc1VwZGF0ZXJNYXAuc2V0KHJlcywgdXBkYXRlVmFsdWUpO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHIgPSByZXM7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlkc1VwZGF0ZXJNYXAuZGVsZXRlKHIpO1xuICAgIH07XG4gIH0sIFtyZXNdKTtcblxuICAvLyBUaGlzIGNhbm5vdCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wIGJlY2F1c2UgdGhlIHJlZiBpcyB1cGRhdGVkIGZpcnN0LlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbmV3SWQgPSBuZXh0SWQuY3VycmVudDtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIG5leHRJZC5jdXJyZW50ID0gbnVsbDtcbiAgICAgIHNldFZhbHVlKG5ld0lkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogTWVyZ2VzIHR3byBpZHMuXG4gKiBEaWZmZXJlbnQgaWRzIHdpbGwgdHJpZ2dlciBhIHNpZGUtZWZmZWN0IGFuZCByZS1yZW5kZXIgY29tcG9uZW50cyBob29rZWQgdXAgd2l0aCBgdXNlSWRgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJZHMoaWRBOiBzdHJpbmcsIGlkQjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGlkQSA9PT0gaWRCKSB7XG4gICAgcmV0dXJuIGlkQTtcbiAgfVxuXG4gIGxldCBzZXRJZEEgPSBpZHNVcGRhdGVyTWFwLmdldChpZEEpO1xuICBpZiAoc2V0SWRBKSB7XG4gICAgc2V0SWRBKGlkQik7XG4gICAgcmV0dXJuIGlkQjtcbiAgfVxuXG4gIGxldCBzZXRJZEIgPSBpZHNVcGRhdGVyTWFwLmdldChpZEIpO1xuICBpZiAoc2V0SWRCKSB7XG4gICAgc2V0SWRCKGlkQSk7XG4gICAgcmV0dXJuIGlkQTtcbiAgfVxuXG4gIHJldHVybiBpZEI7XG59XG5cbi8qKlxuICogVXNlZCB0byBnZW5lcmF0ZSBhbiBpZCwgYW5kIGFmdGVyIHJlbmRlciwgY2hlY2sgaWYgdGhhdCBpZCBpcyByZW5kZXJlZCBzbyB3ZSBrbm93XG4gKiBpZiB3ZSBjYW4gdXNlIGl0IGluIHBsYWNlcyBzdWNoIGFzIGxhYmVsbGVkYnkuXG4gKiBAcGFyYW0gZGVwQXJyYXkgLSBXaGVuIHRvIHJlY2FsY3VsYXRlIGlmIHRoZSBpZCBpcyBpbiB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU2xvdElkKGRlcEFycmF5OiBSZWFkb25seUFycmF5PGFueT4gPSBbXSk6IHN0cmluZyB7XG4gIGxldCBpZCA9IHVzZUlkKCk7XG4gIGxldCBbcmVzb2x2ZWRJZCwgc2V0UmVzb2x2ZWRJZF0gPSB1c2VWYWx1ZUVmZmVjdChpZCk7XG4gIGxldCB1cGRhdGVJZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRSZXNvbHZlZElkKGZ1bmN0aW9uICooKSB7XG4gICAgICB5aWVsZCBpZDtcblxuICAgICAgeWllbGQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpID8gaWQgOiBudWxsO1xuICAgIH0pO1xuICB9LCBbaWQsIHNldFJlc29sdmVkSWRdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QodXBkYXRlSWQsIFtpZCwgdXBkYXRlSWQsIC4uLmRlcEFycmF5XSk7XG5cbiAgcmV0dXJuIHJlc29sdmVkSWQ7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBDYWxscyBhbGwgZnVuY3Rpb25zIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgY2hhaW5lZCB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYWluKC4uLmNhbGxiYWNrczogYW55W10pOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQge1xuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgZm9yIChsZXQgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge2NoYWlufSBmcm9tICcuL2NoYWluJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHttZXJnZUlkc30gZnJvbSAnLi91c2VJZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG4vLyB0YWtlbiBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTYwMzI1MC90eXBlc2NyaXB0LTMtcGFyYW1ldGVyLWxpc3QtaW50ZXJzZWN0aW9uLXR5cGUvNTE2MDQzNzkjNTE2MDQzNzlcbnR5cGUgVHVwbGVUeXBlczxUPiA9IHsgW1AgaW4ga2V5b2YgVF06IFRbUF0gfSBleHRlbmRzIHsgW2tleTogbnVtYmVyXTogaW5mZXIgViB9ID8gViA6IG5ldmVyO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbnR5cGUgVW5pb25Ub0ludGVyc2VjdGlvbjxVPiA9IChVIGV4dGVuZHMgYW55ID8gKGs6IFUpID0+IHZvaWQgOiBuZXZlcikgZXh0ZW5kcyAoKGs6IGluZmVyIEkpID0+IHZvaWQpID8gSSA6IG5ldmVyO1xuXG4vKipcbiAqIE1lcmdlcyBtdWx0aXBsZSBwcm9wcyBvYmplY3RzIHRvZ2V0aGVyLiBFdmVudCBoYW5kbGVycyBhcmUgY2hhaW5lZCxcbiAqIGNsYXNzTmFtZXMgYXJlIGNvbWJpbmVkLCBhbmQgaWRzIGFyZSBkZWR1cGxpY2F0ZWQgLSBkaWZmZXJlbnQgaWRzXG4gKiB3aWxsIHRyaWdnZXIgYSBzaWRlLWVmZmVjdCBhbmQgcmUtcmVuZGVyIGNvbXBvbmVudHMgaG9va2VkIHVwIHdpdGggYHVzZUlkYC5cbiAqIEZvciBhbGwgb3RoZXIgcHJvcHMsIHRoZSBsYXN0IHByb3Agb2JqZWN0IG92ZXJyaWRlcyBhbGwgcHJldmlvdXMgb25lcy5cbiAqIEBwYXJhbSBhcmdzIC0gTXVsdGlwbGUgc2V0cyBvZiBwcm9wcyB0byBtZXJnZSB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUHJvcHM8VCBleHRlbmRzIFByb3BzW10+KC4uLmFyZ3M6IFQpOiBVbmlvblRvSW50ZXJzZWN0aW9uPFR1cGxlVHlwZXM8VD4+IHtcbiAgLy8gU3RhcnQgd2l0aCBhIGJhc2UgY2xvbmUgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LiBUaGlzIGlzIGEgbG90IGZhc3RlciB0aGFuIHN0YXJ0aW5nXG4gIC8vIHdpdGggYW4gZW1wdHkgb2JqZWN0IGFuZCBhZGRpbmcgcHJvcGVydGllcyBhcyB3ZSBnby5cbiAgbGV0IHJlc3VsdDogUHJvcHMgPSB7Li4uYXJnc1swXX07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9wcyA9IGFyZ3NbaV07XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICBsZXQgYSA9IHJlc3VsdFtrZXldO1xuICAgICAgbGV0IGIgPSBwcm9wc1trZXldO1xuXG4gICAgICAvLyBDaGFpbiBldmVudHNcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgLy8gVGhpcyBpcyBhIGxvdCBmYXN0ZXIgdGhhbiBhIHJlZ2V4LlxuICAgICAgICBrZXlbMF0gPT09ICdvJyAmJlxuICAgICAgICBrZXlbMV0gPT09ICduJyAmJlxuICAgICAgICBrZXkuY2hhckNvZGVBdCgyKSA+PSAvKiAnQScgKi8gNjUgJiZcbiAgICAgICAga2V5LmNoYXJDb2RlQXQoMikgPD0gLyogJ1onICovIDkwXG4gICAgICApIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBjaGFpbihhLCBiKTtcblxuICAgICAgICAvLyBNZXJnZSBjbGFzc25hbWVzLCBzb21ldGltZXMgY2xhc3NOYW1lcyBhcmUgZW1wdHkgc3RyaW5nIHdoaWNoIGV2YWwgdG8gZmFsc2UsIHNvIHdlIGp1c3QgbmVlZCB0byBkbyBhIHR5cGUgY2hlY2tcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChrZXkgPT09ICdjbGFzc05hbWUnIHx8IGtleSA9PT0gJ1VOU0FGRV9jbGFzc05hbWUnKSAmJlxuICAgICAgICB0eXBlb2YgYSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgdHlwZW9mIGIgPT09ICdzdHJpbmcnXG4gICAgICApIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBjbHN4KGEsIGIpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpZCcgJiYgYSAmJiBiKSB7XG4gICAgICAgIHJlc3VsdC5pZCA9IG1lcmdlSWRzKGEsIGIpO1xuICAgICAgICAvLyBPdmVycmlkZSBvdGhlcnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gYiAhPT0gdW5kZWZpbmVkID8gYiA6IGE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCBhcyBVbmlvblRvSW50ZXJzZWN0aW9uPFR1cGxlVHlwZXM8VD4+O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Rm9yd2FyZGVkUmVmfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogTWVyZ2VzIG11bHRpcGxlIHJlZnMgaW50byBvbmUuIFdvcmtzIHdpdGggZWl0aGVyIGNhbGxiYWNrIG9yIG9iamVjdCByZWZzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VSZWZzPFQ+KC4uLnJlZnM6IEZvcndhcmRlZFJlZjxUPltdKTogRm9yd2FyZGVkUmVmPFQ+IHtcbiAgcmV0dXJuICh2YWx1ZTogVCkgPT4ge1xuICAgIGZvciAobGV0IHJlZiBvZiByZWZzKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZWYodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0FyaWFMYWJlbGluZ1Byb3BzLCBET01Qcm9wc30gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5pbXBvcnQge0hUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IERPTVByb3BOYW1lcyA9IG5ldyBTZXQoW1xuICAnaWQnXG5dKTtcblxuY29uc3QgbGFiZWxhYmxlUHJvcE5hbWVzID0gbmV3IFNldChbXG4gICdhcmlhLWxhYmVsJyxcbiAgJ2FyaWEtbGFiZWxsZWRieScsXG4gICdhcmlhLWRlc2NyaWJlZGJ5JyxcbiAgJ2FyaWEtZGV0YWlscydcbl0pO1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZiBsYWJlbGxpbmcgYXNzb2NpYXRlZCBhcmlhIHByb3BlcnRpZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSBmaWx0ZXIuXG4gICAqL1xuICBsYWJlbGFibGU/OiBib29sZWFuLFxuICAvKipcbiAgICogQSBTZXQgb2Ygb3RoZXIgcHJvcGVydHkgbmFtZXMgdGhhdCBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIGZpbHRlci5cbiAgICovXG4gIHByb3BOYW1lcz86IFNldDxzdHJpbmc+XG59XG5cbmNvbnN0IHByb3BSZSA9IC9eKGRhdGEtLiopJC87XG5cbi8qKlxuICogRmlsdGVycyBvdXQgYWxsIHByb3BzIHRoYXQgYXJlbid0IHZhbGlkIERPTSBwcm9wcyBvciBkZWZpbmVkIHZpYSBvdmVycmlkZSBwcm9wIG9iai5cbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBjb21wb25lbnQgcHJvcHMgdG8gYmUgZmlsdGVyZWQuXG4gKiBAcGFyYW0gb3B0cyAtIFByb3BzIHRvIG92ZXJyaWRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRE9NUHJvcHMocHJvcHM6IERPTVByb3BzICYgQXJpYUxhYmVsaW5nUHJvcHMsIG9wdHM6IE9wdGlvbnMgPSB7fSk6IERPTVByb3BzICYgQXJpYUxhYmVsaW5nUHJvcHMge1xuICBsZXQge2xhYmVsYWJsZSwgcHJvcE5hbWVzfSA9IG9wdHM7XG4gIGxldCBmaWx0ZXJlZFByb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4gPSB7fTtcblxuICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIHByb3ApICYmIChcbiAgICAgICAgRE9NUHJvcE5hbWVzLmhhcyhwcm9wKSB8fFxuICAgICAgICAobGFiZWxhYmxlICYmIGxhYmVsYWJsZVByb3BOYW1lcy5oYXMocHJvcCkpIHx8XG4gICAgICAgIHByb3BOYW1lcz8uaGFzKHByb3ApIHx8XG4gICAgICAgIHByb3BSZS50ZXN0KHByb3ApXG4gICAgICApXG4gICAgKSB7XG4gICAgICBmaWx0ZXJlZFByb3BzW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkUHJvcHM7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciBlbGVtZW50LmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiB0cnVlfSk7XG4vLyBDdXJyZW50bHkgbmVjZXNzYXJ5IGZvciBTYWZhcmkgYW5kIG9sZCBFZGdlOlxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1tZG4tYXBpX2h0bWxlbGVtZW50X2ZvY3VzX3ByZXZlbnRzY3JvbGxfb3B0aW9uXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODU4M1xuLy9cblxuLy8gT3JpZ2luYWwgbGljZW5zaW5nIGZvciB0aGUgZm9sbG93aW5nIG1ldGhvZHMgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTk9USUNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhbHZlbGxpZG8vZm9jdXMtb3B0aW9ucy1wb2x5ZmlsbFxuXG5pbnRlcmZhY2UgU2Nyb2xsYWJsZUVsZW1lbnQge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc2Nyb2xsVG9wOiBudW1iZXIsXG4gIHNjcm9sbExlZnQ6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNXaXRob3V0U2Nyb2xsaW5nKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIGlmIChzdXBwb3J0c1ByZXZlbnRTY3JvbGwoKSkge1xuICAgIGVsZW1lbnQuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc2Nyb2xsYWJsZUVsZW1lbnRzID0gZ2V0U2Nyb2xsYWJsZUVsZW1lbnRzKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb24oc2Nyb2xsYWJsZUVsZW1lbnRzKTtcbiAgfVxufVxuXG5sZXQgc3VwcG9ydHNQcmV2ZW50U2Nyb2xsQ2FjaGVkOiBib29sZWFuID0gbnVsbDtcbmZ1bmN0aW9uIHN1cHBvcnRzUHJldmVudFNjcm9sbCgpIHtcbiAgaWYgKHN1cHBvcnRzUHJldmVudFNjcm9sbENhY2hlZCA9PSBudWxsKSB7XG4gICAgc3VwcG9ydHNQcmV2ZW50U2Nyb2xsQ2FjaGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBmb2N1c0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvY3VzRWxlbS5mb2N1cyh7XG4gICAgICAgIGdldCBwcmV2ZW50U2Nyb2xsKCkge1xuICAgICAgICAgIHN1cHBvcnRzUHJldmVudFNjcm9sbENhY2hlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElnbm9yZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1ByZXZlbnRTY3JvbGxDYWNoZWQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGFibGVFbGVtZW50cyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IFNjcm9sbGFibGVFbGVtZW50W10ge1xuICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICB2YXIgc2Nyb2xsYWJsZUVsZW1lbnRzOiBTY3JvbGxhYmxlRWxlbWVudFtdID0gW107XG4gIHZhciByb290U2Nyb2xsaW5nRWxlbWVudCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIHdoaWxlIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBwYXJlbnQgIT09IHJvb3RTY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgaWYgKFxuICAgICAgcGFyZW50Lm9mZnNldEhlaWdodCA8IHBhcmVudC5zY3JvbGxIZWlnaHQgfHxcbiAgICAgIHBhcmVudC5vZmZzZXRXaWR0aCA8IHBhcmVudC5zY3JvbGxXaWR0aFxuICAgICkge1xuICAgICAgc2Nyb2xsYWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICBlbGVtZW50OiBwYXJlbnQsXG4gICAgICAgIHNjcm9sbFRvcDogcGFyZW50LnNjcm9sbFRvcCxcbiAgICAgICAgc2Nyb2xsTGVmdDogcGFyZW50LnNjcm9sbExlZnRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGlmIChyb290U2Nyb2xsaW5nRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgc2Nyb2xsYWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgZWxlbWVudDogcm9vdFNjcm9sbGluZ0VsZW1lbnQsXG4gICAgICBzY3JvbGxUb3A6IHJvb3RTY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbExlZnQ6IHJvb3RTY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzY3JvbGxhYmxlRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxQb3NpdGlvbihzY3JvbGxhYmxlRWxlbWVudHM6IFNjcm9sbGFibGVFbGVtZW50W10pIHtcbiAgZm9yIChsZXQge2VsZW1lbnQsIHNjcm9sbFRvcCwgc2Nyb2xsTGVmdH0gb2Ygc2Nyb2xsYWJsZUVsZW1lbnRzKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCwgcmV2ZXJzZSwgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcpIHtcbiAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBpZiAocmV2ZXJzZSkge1xuICAgIHJldHVybiBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gcmVjdC5yaWdodCA6IHJlY3QuYm90dG9tO1xuICB9XG4gIHJldHVybiBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gcmVjdC5sZWZ0IDogcmVjdC50b3A7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gV2Ugc3RvcmUgYSBnbG9iYWwgbGlzdCBvZiBlbGVtZW50cyB0aGF0IGFyZSBjdXJyZW50bHkgdHJhbnNpdGlvbmluZyxcbi8vIG1hcHBlZCB0byBhIHNldCBvZiBDU1MgcHJvcGVydGllcyB0aGF0IGFyZSB0cmFuc2l0aW9uaW5nIGZvciB0aGF0IGVsZW1lbnQuXG4vLyBUaGlzIGlzIG5lY2Vzc2FyeSByYXRoZXIgdGhhbiBhIHNpbXBsZSBjb3VudCBvZiB0cmFuc2l0aW9ucyBiZWNhdXNlIG9mIGJyb3dzZXJcbi8vIGJ1Z3MsIGUuZy4gQ2hyb21lIHNvbWV0aW1lcyBmaXJlcyBib3RoIHRyYW5zaXRpb25lbmQgYW5kIHRyYW5zaXRpb25jYW5jZWwgcmF0aGVyXG4vLyB0aGFuIG9uZSBvciB0aGUgb3RoZXIuIFNvIHdlIG5lZWQgdG8gdHJhY2sgd2hhdCdzIGFjdHVhbGx5IHRyYW5zaXRpb25pbmcgc28gdGhhdFxuLy8gd2UgY2FuIGlnbm9yZSB0aGVzZSBkdXBsaWNhdGUgZXZlbnRzLlxubGV0IHRyYW5zaXRpb25zQnlFbGVtZW50ID0gbmV3IE1hcDxFdmVudFRhcmdldCwgU2V0PHN0cmluZz4+KCk7XG5cbi8vIEEgbGlzdCBvZiBjYWxsYmFja3MgdG8gY2FsbCBvbmNlIHRoZXJlIGFyZSBubyB0cmFuc2l0aW9uaW5nIGVsZW1lbnRzLlxubGV0IHRyYW5zaXRpb25DYWxsYmFja3MgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmZ1bmN0aW9uIHNldHVwR2xvYmFsRXZlbnRzKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgb25UcmFuc2l0aW9uU3RhcnQgPSAoZTogVHJhbnNpdGlvbkV2ZW50KSA9PiB7XG4gICAgLy8gQWRkIHRoZSB0cmFuc2l0aW9uaW5nIHByb3BlcnR5IHRvIHRoZSBsaXN0IGZvciB0aGlzIGVsZW1lbnQuXG4gICAgbGV0IHRyYW5zaXRpb25zID0gdHJhbnNpdGlvbnNCeUVsZW1lbnQuZ2V0KGUudGFyZ2V0KTtcbiAgICBpZiAoIXRyYW5zaXRpb25zKSB7XG4gICAgICB0cmFuc2l0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgIHRyYW5zaXRpb25zQnlFbGVtZW50LnNldChlLnRhcmdldCwgdHJhbnNpdGlvbnMpO1xuXG4gICAgICAvLyBUaGUgdHJhbnNpdGlvbmNhbmNlbCBldmVudCBtdXN0IGJlIHJlZ2lzdGVyZWQgb24gdGhlIGVsZW1lbnQgaXRzZWxmLCByYXRoZXIgdGhhbiBhcyBhIGdsb2JhbFxuICAgICAgLy8gZXZlbnQuIFRoaXMgZW5hYmxlcyB1cyB0byBoYW5kbGUgd2hlbiB0aGUgbm9kZSBpcyBkZWxldGVkIGZyb20gdGhlIGRvY3VtZW50IHdoaWxlIGl0IGlzIHRyYW5zaXRpb25pbmcuXG4gICAgICAvLyBJbiB0aGF0IGNhc2UsIHRoZSBjYW5jZWwgZXZlbnQgd291bGQgaGF2ZSBub3doZXJlIHRvIGJ1YmJsZSB0byBzbyB3ZSBuZWVkIHRvIGhhbmRsZSBpdCBkaXJlY3RseS5cbiAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25jYW5jZWwnLCBvblRyYW5zaXRpb25FbmQpO1xuICAgIH1cblxuICAgIHRyYW5zaXRpb25zLmFkZChlLnByb3BlcnR5TmFtZSk7XG4gIH07XG5cbiAgbGV0IG9uVHJhbnNpdGlvbkVuZCA9IChlOiBUcmFuc2l0aW9uRXZlbnQpID0+IHtcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgZnJvbSBsaXN0IG9mIHRyYW5zaXRpb25pbmcgcHJvcGVydGllcy5cbiAgICBsZXQgcHJvcGVydGllcyA9IHRyYW5zaXRpb25zQnlFbGVtZW50LmdldChlLnRhcmdldCk7XG4gICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5kZWxldGUoZS5wcm9wZXJ0eU5hbWUpO1xuXG4gICAgLy8gSWYgZW1wdHksIHJlbW92ZSB0cmFuc2l0aW9uY2FuY2VsIGV2ZW50LCBhbmQgcmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIGxpc3Qgb2YgdHJhbnNpdGlvbmluZyBlbGVtZW50cy5cbiAgICBpZiAocHJvcGVydGllcy5zaXplID09PSAwKSB7XG4gICAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uY2FuY2VsJywgb25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIHRyYW5zaXRpb25zQnlFbGVtZW50LmRlbGV0ZShlLnRhcmdldCk7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gdHJhbnNpdGlvbmluZyBlbGVtZW50cywgY2FsbCBhbGwgb2YgdGhlIHF1ZXVlZCBjYWxsYmFja3MuXG4gICAgaWYgKHRyYW5zaXRpb25zQnlFbGVtZW50LnNpemUgPT09IDApIHtcbiAgICAgIGZvciAobGV0IGNiIG9mIHRyYW5zaXRpb25DYWxsYmFja3MpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNpdGlvbkNhbGxiYWNrcy5jbGVhcigpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25ydW4nLCBvblRyYW5zaXRpb25TdGFydCk7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCk7XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICBzZXR1cEdsb2JhbEV2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXR1cEdsb2JhbEV2ZW50cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkFmdGVyVHJhbnNpdGlvbihmbjogKCkgPT4gdm9pZCkge1xuICAvLyBXYWl0IG9uZSBmcmFtZSB0byBzZWUgaWYgYW4gYW5pbWF0aW9uIHN0YXJ0cywgZS5nLiBhIHRyYW5zaXRpb24gb24gbW91bnQuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgLy8gSWYgbm8gdHJhbnNpdGlvbnMgYXJlIHJ1bm5pbmcsIGNhbGwgdGhlIGZ1bmN0aW9uIGltbWVkaWF0ZWx5LlxuICAgIC8vIE90aGVyd2lzZSwgYWRkIGl0IHRvIGEgbGlzdCBvZiBjYWxsYmFja3MgdG8gcnVuIGF0IHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvbi5cbiAgICBpZiAodHJhbnNpdGlvbnNCeUVsZW1lbnQuc2l6ZSA9PT0gMCkge1xuICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNhbGxiYWNrcy5hZGQoZm4pO1xuICAgIH1cbiAgfSk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtnZXRPZmZzZXR9IGZyb20gJy4vZ2V0T2Zmc2V0JztcbmltcG9ydCB7T3JpZW50YXRpb259IGZyb20gJ0ByZWFjdC10eXBlcy9zaGFyZWQnO1xuaW1wb3J0IFJlYWN0LCB7SFRNTEF0dHJpYnV0ZXMsIE11dGFibGVSZWZPYmplY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgVXNlRHJhZzFEUHJvcHMge1xuICBjb250YWluZXJSZWY6IE11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+LFxuICByZXZlcnNlPzogYm9vbGVhbixcbiAgb3JpZW50YXRpb24/OiBPcmllbnRhdGlvbixcbiAgb25Ib3Zlcj86IChob3ZlcmVkOiBib29sZWFuKSA9PiB2b2lkLFxuICBvbkRyYWc/OiAoZHJhZ2dpbmc6IGJvb2xlYW4pID0+IHZvaWQsXG4gIG9uUG9zaXRpb25DaGFuZ2U/OiAocG9zaXRpb246IG51bWJlcikgPT4gdm9pZCxcbiAgb25JbmNyZW1lbnQ/OiAoKSA9PiB2b2lkLFxuICBvbkRlY3JlbWVudD86ICgpID0+IHZvaWQsXG4gIG9uSW5jcmVtZW50VG9NYXg/OiAoKSA9PiB2b2lkLFxuICBvbkRlY3JlbWVudFRvTWluPzogKCkgPT4gdm9pZCxcbiAgb25Db2xsYXBzZVRvZ2dsZT86ICgpID0+IHZvaWRcbn1cblxuLy8gS2VlcCB0cmFjayBvZiBlbGVtZW50cyB0aGF0IHdlIGFyZSBjdXJyZW50bHkgaGFuZGxpbmcgZHJhZ2dpbmcgZm9yIHZpYSB1c2VEcmFnMUQuXG4vLyBJZiB0aGVyZSdzIGFuIGFuY2VzdG9yIGFuZCBhIGRlc2NlbmRhbnQgYm90aCB1c2luZyB1c2VEcmFnMUQoKSwgYW5kIHRoZSB1c2VyIHN0YXJ0c1xuLy8gZHJhZ2dpbmcgdGhlIGRlc2NlbmRhbnQsIHdlIGRvbid0IHdhbnQgdXNlRHJhZzFEIGV2ZW50cyB0byBmaXJlIGZvciB0aGUgYW5jZXN0b3IuXG5jb25zdCBkcmFnZ2luZ0VsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbi8vIGNyZWF0ZWQgZm9yIHNwbGl0dmlldywgdGhpcyBzaG91bGQgYmUgcmV1c2FibGUgZm9yIHRoaW5ncyBsaWtlIHNsaWRlcnMvZGlhbHNcbi8vIEl0IGFsc28gaGFuZGxlcyBrZXlib2FyZCBldmVudHMgb24gdGhlIHRhcmdldCBhbGxvd2luZyBmb3IgaW5jcmVtZW50L2RlY3JlbWVudCBieSBhIGdpdmVuIHN0ZXBzaXplIGFzIHdlbGwgYXMgbWluaWZ5aW5nL21heGltaXppbmcgYW5kIHRvZ2dsaW5nIGJldHdlZW4gbWluaWZpZWQgYW5kIHByZXZpb3VzIHNpemVcbi8vIEl0IGNhbiBhbHNvIHRha2UgYSAncmV2ZXJzZScgcGFyYW0gdG8gc2F5IGlmIHdlIHNob3VsZCBtZWFzdXJlIGZyb20gdGhlIHJpZ2h0L2JvdHRvbSBpbnN0ZWFkIG9mIHRoZSB0b3AvbGVmdFxuLy8gSXQgY2FuIGFsc28gaGFuZGxlIGVpdGhlciBhIHZlcnRpY2FsIG9yIGhvcml6b250YWwgbW92ZW1lbnQsIGJ1dCBub3QgYm90aCBhdCB0aGUgc2FtZSB0aW1lXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnMUQocHJvcHM6IFVzZURyYWcxRFByb3BzKTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgY29uc29sZS53YXJuKCd1c2VEcmFnMUQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdXNlTW92ZWAgaW5zdGVhZCBodHRwczovL3JlYWN0LXNwZWN0cnVtLmFkb2JlLmNvbS9yZWFjdC1hcmlhL3VzZU1vdmUuaHRtbCcpO1xuICBsZXQge2NvbnRhaW5lclJlZiwgcmV2ZXJzZSwgb3JpZW50YXRpb24sIG9uSG92ZXIsIG9uRHJhZywgb25Qb3NpdGlvbkNoYW5nZSwgb25JbmNyZW1lbnQsIG9uRGVjcmVtZW50LCBvbkluY3JlbWVudFRvTWF4LCBvbkRlY3JlbWVudFRvTWluLCBvbkNvbGxhcHNlVG9nZ2xlfSA9IHByb3BzO1xuICBsZXQgZ2V0UG9zaXRpb24gPSAoZSkgPT4gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGUuY2xpZW50WCA6IGUuY2xpZW50WTtcbiAgbGV0IGdldE5leHRPZmZzZXQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGxldCBjb250YWluZXJPZmZzZXQgPSBnZXRPZmZzZXQoY29udGFpbmVyUmVmLmN1cnJlbnQsIHJldmVyc2UsIG9yaWVudGF0aW9uKTtcbiAgICBsZXQgbW91c2VPZmZzZXQgPSBnZXRQb3NpdGlvbihlKTtcbiAgICBsZXQgbmV4dE9mZnNldCA9IHJldmVyc2UgPyBjb250YWluZXJPZmZzZXQgLSBtb3VzZU9mZnNldCA6IG1vdXNlT2Zmc2V0IC0gY29udGFpbmVyT2Zmc2V0O1xuICAgIHJldHVybiBuZXh0T2Zmc2V0O1xuICB9O1xuICBsZXQgZHJhZ2dpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICBsZXQgcHJldlBvc2l0aW9uID0gdXNlUmVmKDApO1xuXG4gIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgaGFuZGxlcnMgaW4gYSByZWYgc28gdGhhdCB0aGUgZXZlbnRzIGNhbiBhY2Nlc3MgdGhlbS5cbiAgbGV0IGhhbmRsZXJzID0gdXNlUmVmKHtvblBvc2l0aW9uQ2hhbmdlLCBvbkRyYWd9KTtcbiAgaGFuZGxlcnMuY3VycmVudC5vbkRyYWcgPSBvbkRyYWc7XG4gIGhhbmRsZXJzLmN1cnJlbnQub25Qb3NpdGlvbkNoYW5nZSA9IG9uUG9zaXRpb25DaGFuZ2U7XG5cbiAgbGV0IG9uTW91c2VEcmFnZ2VkID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5leHRPZmZzZXQgPSBnZXROZXh0T2Zmc2V0KGUpO1xuICAgIGlmICghZHJhZ2dpbmcuY3VycmVudCkge1xuICAgICAgZHJhZ2dpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICBpZiAoaGFuZGxlcnMuY3VycmVudC5vbkRyYWcpIHtcbiAgICAgICAgaGFuZGxlcnMuY3VycmVudC5vbkRyYWcodHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlcnMuY3VycmVudC5vblBvc2l0aW9uQ2hhbmdlKSB7XG4gICAgICAgIGhhbmRsZXJzLmN1cnJlbnQub25Qb3NpdGlvbkNoYW5nZShuZXh0T2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXZQb3NpdGlvbi5jdXJyZW50ID09PSBuZXh0T2Zmc2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByZXZQb3NpdGlvbi5jdXJyZW50ID0gbmV4dE9mZnNldDtcbiAgICBpZiAob25Qb3NpdGlvbkNoYW5nZSkge1xuICAgICAgb25Qb3NpdGlvbkNoYW5nZShuZXh0T2Zmc2V0KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgZHJhZ2dpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgIGxldCBuZXh0T2Zmc2V0ID0gZ2V0TmV4dE9mZnNldChlKTtcbiAgICBpZiAoaGFuZGxlcnMuY3VycmVudC5vbkRyYWcpIHtcbiAgICAgIGhhbmRsZXJzLmN1cnJlbnQub25EcmFnKGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGhhbmRsZXJzLmN1cnJlbnQub25Qb3NpdGlvbkNoYW5nZSkge1xuICAgICAgaGFuZGxlcnMuY3VycmVudC5vblBvc2l0aW9uQ2hhbmdlKG5leHRPZmZzZXQpO1xuICAgIH1cblxuICAgIGRyYWdnaW5nRWxlbWVudHMuc3BsaWNlKGRyYWdnaW5nRWxlbWVudHMuaW5kZXhPZih0YXJnZXQpLCAxKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZ2dlZCwgZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGhhbmRsaW5nIGRyYWdnaW5nIG9uIGEgZGVzY2VuZGFudCB3aXRoIHVzZURyYWcxRCwgdGhlblxuICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gaGFuZGxlIHRoZSBkcmFnIG1vdGlvbiBvbiB0aGlzIHRhcmdldCBhcyB3ZWxsLlxuICAgIGlmIChkcmFnZ2luZ0VsZW1lbnRzLnNvbWUoZWx0ID0+IHRhcmdldC5jb250YWlucyhlbHQpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFnZ2luZ0VsZW1lbnRzLnB1c2godGFyZ2V0KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZURyYWdnZWQsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKG9uSG92ZXIpIHtcbiAgICAgIG9uSG92ZXIodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBvbk1vdXNlT3V0ID0gKCkgPT4ge1xuICAgIGlmIChvbkhvdmVyKSB7XG4gICAgICBvbkhvdmVyKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnTGVmdCc6XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAob25EZWNyZW1lbnQgJiYgIXJldmVyc2UpIHtcbiAgICAgICAgICAgIG9uRGVjcmVtZW50KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvbkluY3JlbWVudCAmJiByZXZlcnNlKSB7XG4gICAgICAgICAgICBvbkluY3JlbWVudCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VwJzpcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKG9uRGVjcmVtZW50ICYmICFyZXZlcnNlKSB7XG4gICAgICAgICAgICBvbkRlY3JlbWVudCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob25JbmNyZW1lbnQgJiYgcmV2ZXJzZSkge1xuICAgICAgICAgICAgb25JbmNyZW1lbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSaWdodCc6XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKG9uSW5jcmVtZW50ICYmICFyZXZlcnNlKSB7XG4gICAgICAgICAgICBvbkluY3JlbWVudCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob25EZWNyZW1lbnQgJiYgcmV2ZXJzZSkge1xuICAgICAgICAgICAgb25EZWNyZW1lbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEb3duJzpcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAob25JbmNyZW1lbnQgJiYgIXJldmVyc2UpIHtcbiAgICAgICAgICAgIG9uSW5jcmVtZW50KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvbkRlY3JlbWVudCAmJiByZXZlcnNlKSB7XG4gICAgICAgICAgICBvbkRlY3JlbWVudCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChvbkRlY3JlbWVudFRvTWluKSB7XG4gICAgICAgICAgb25EZWNyZW1lbnRUb01pbigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAob25JbmNyZW1lbnRUb01heCkge1xuICAgICAgICAgIG9uSW5jcmVtZW50VG9NYXgoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAob25Db2xsYXBzZVRvZ2dsZSkge1xuICAgICAgICAgIG9uQ29sbGFwc2VUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtvbk1vdXNlRG93biwgb25Nb3VzZUVudGVyLCBvbk1vdXNlT3V0LCBvbktleURvd259O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBHbG9iYWxMaXN0ZW5lcnMge1xuICBhZGRHbG9iYWxMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcD4oZWw6IEV2ZW50VGFyZ2V0LCB0eXBlOiBLLCBsaXN0ZW5lcjogKHRoaXM6IERvY3VtZW50LCBldjogRG9jdW1lbnRFdmVudE1hcFtLXSkgPT4gYW55LCBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZCxcbiAgYWRkR2xvYmFsTGlzdGVuZXIoZWw6IEV2ZW50VGFyZ2V0LCB0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZCxcbiAgcmVtb3ZlR2xvYmFsTGlzdGVuZXI8SyBleHRlbmRzIGtleW9mIERvY3VtZW50RXZlbnRNYXA+KGVsOiBFdmVudFRhcmdldCwgdHlwZTogSywgbGlzdGVuZXI6ICh0aGlzOiBEb2N1bWVudCwgZXY6IERvY3VtZW50RXZlbnRNYXBbS10pID0+IGFueSwgb3B0aW9ucz86IGJvb2xlYW4gfCBFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQsXG4gIHJlbW92ZUdsb2JhbExpc3RlbmVyKGVsOiBFdmVudFRhcmdldCwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucz86IGJvb2xlYW4gfCBFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQsXG4gIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycygpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxMaXN0ZW5lcnMoKTogR2xvYmFsTGlzdGVuZXJzIHtcbiAgbGV0IGdsb2JhbExpc3RlbmVycyA9IHVzZVJlZihuZXcgTWFwKCkpO1xuICBsZXQgYWRkR2xvYmFsTGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoZXZlbnRUYXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSA9PiB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIHJlbW92ZSB0aGUgbGlzdGVuZXIgYWZ0ZXIgaXQgaXMgY2FsbGVkIHdpdGggdGhlIGBvbmNlYCBvcHRpb24uXG4gICAgbGV0IGZuID0gb3B0aW9ucz8ub25jZSA/ICguLi5hcmdzKSA9PiB7XG4gICAgICBnbG9iYWxMaXN0ZW5lcnMuY3VycmVudC5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgbGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfSA6IGxpc3RlbmVyO1xuICAgIGdsb2JhbExpc3RlbmVycy5jdXJyZW50LnNldChsaXN0ZW5lciwge3R5cGUsIGV2ZW50VGFyZ2V0LCBmbiwgb3B0aW9uc30pO1xuICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICB9LCBbXSk7XG4gIGxldCByZW1vdmVHbG9iYWxMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKChldmVudFRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpID0+IHtcbiAgICBsZXQgZm4gPSBnbG9iYWxMaXN0ZW5lcnMuY3VycmVudC5nZXQobGlzdGVuZXIpPy5mbiB8fCBsaXN0ZW5lcjtcbiAgICBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBvcHRpb25zKTtcbiAgICBnbG9iYWxMaXN0ZW5lcnMuY3VycmVudC5kZWxldGUobGlzdGVuZXIpO1xuICB9LCBbXSk7XG4gIGxldCByZW1vdmVBbGxHbG9iYWxMaXN0ZW5lcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZ2xvYmFsTGlzdGVuZXJzLmN1cnJlbnQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIodmFsdWUuZXZlbnRUYXJnZXQsIHZhbHVlLnR5cGUsIGtleSwgdmFsdWUub3B0aW9ucyk7XG4gICAgfSk7XG4gIH0sIFtyZW1vdmVHbG9iYWxMaXN0ZW5lcl0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJvdy1ib2R5LXN0eWxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycztcbiAgfSwgW3JlbW92ZUFsbEdsb2JhbExpc3RlbmVyc10pO1xuXG4gIHJldHVybiB7YWRkR2xvYmFsTGlzdGVuZXIsIHJlbW92ZUdsb2JhbExpc3RlbmVyLCByZW1vdmVBbGxHbG9iYWxMaXN0ZW5lcnN9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7QXJpYUxhYmVsaW5nUHJvcHMsIERPTVByb3BzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7dXNlSWR9IGZyb20gJy4vdXNlSWQnO1xuXG4vKipcbiAqIE1lcmdlcyBhcmlhLWxhYmVsIGFuZCBhcmlhLWxhYmVsbGVkYnkgaW50byBhcmlhLWxhYmVsbGVkYnkgd2hlbiBib3RoIGV4aXN0LlxuICogQHBhcmFtIHByb3BzIC0gQXJpYSBsYWJlbCBwcm9wcy5cbiAqIEBwYXJhbSBkZWZhdWx0TGFiZWwgLSBEZWZhdWx0IHZhbHVlIGZvciBhcmlhLWxhYmVsIHdoZW4gbm90IHByZXNlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYWJlbHMocHJvcHM6IERPTVByb3BzICYgQXJpYUxhYmVsaW5nUHJvcHMsIGRlZmF1bHRMYWJlbD86IHN0cmluZyk6IERPTVByb3BzICYgQXJpYUxhYmVsaW5nUHJvcHMge1xuICBsZXQge1xuICAgIGlkLFxuICAgICdhcmlhLWxhYmVsJzogbGFiZWwsXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsbGVkQnlcbiAgfSA9IHByb3BzO1xuXG4gIC8vIElmIHRoZXJlIGlzIGJvdGggYW4gYXJpYS1sYWJlbCBhbmQgYXJpYS1sYWJlbGxlZGJ5LFxuICAvLyBjb21iaW5lIHRoZW0gYnkgcG9pbnRpbmcgdG8gdGhlIGVsZW1lbnQgaXRzZWxmLlxuICBpZCA9IHVzZUlkKGlkKTtcbiAgaWYgKGxhYmVsbGVkQnkgJiYgbGFiZWwpIHtcbiAgICBsZXQgaWRzID0gbmV3IFNldChbLi4ubGFiZWxsZWRCeS50cmltKCkuc3BsaXQoL1xccysvKSwgaWRdKTtcbiAgICBsYWJlbGxlZEJ5ID0gWy4uLmlkc10uam9pbignICcpO1xuICB9IGVsc2UgaWYgKGxhYmVsbGVkQnkpIHtcbiAgICBsYWJlbGxlZEJ5ID0gbGFiZWxsZWRCeS50cmltKCkuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBJZiBubyBsYWJlbHMgYXJlIHByb3ZpZGVkLCB1c2UgdGhlIGRlZmF1bHRcbiAgaWYgKCFsYWJlbCAmJiAhbGFiZWxsZWRCeSAmJiBkZWZhdWx0TGFiZWwpIHtcbiAgICBsYWJlbCA9IGRlZmF1bHRMYWJlbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgJ2FyaWEtbGFiZWwnOiBsYWJlbCxcbiAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxsZWRCeVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIxIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TXV0YWJsZVJlZk9iamVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdH0gZnJvbSAnLi8nO1xuXG4vKipcbiAqIE9mZmVycyBhbiBvYmplY3QgcmVmIGZvciBhIGdpdmVuIGNhbGxiYWNrIHJlZiBvciBhbiBvYmplY3QgcmVmLiBFc3BlY2lhbGx5XG4gKiBoZWxmcHVsIHdoZW4gcGFzc2luZyBmb3J3YXJkZWQgcmVmcyAoY3JlYXRlZCB1c2luZyBgUmVhY3QuZm9yd2FyZFJlZmApIHRvXG4gKiBSZWFjdCBBcmlhIEhvb2tzLlxuICpcbiAqIEBwYXJhbSBmb3J3YXJkZWRSZWYgVGhlIG9yaWdpbmFsIHJlZiBpbnRlbmRlZCB0byBiZSB1c2VkLlxuICogQHJldHVybnMgQW4gb2JqZWN0IHJlZiB0aGF0IHVwZGF0ZXMgdGhlIGdpdmVuIHJlZi5cbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2ZvcndhcmRpbmctcmVmcy5odG1sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VPYmplY3RSZWY8VD4oZm9yd2FyZGVkUmVmPzogKChpbnN0YW5jZTogVCB8IG51bGwpID0+IHZvaWQpIHwgTXV0YWJsZVJlZk9iamVjdDxUIHwgbnVsbD4gfCBudWxsKTogTXV0YWJsZVJlZk9iamVjdDxUPiB7XG4gIGNvbnN0IG9ialJlZiA9IHVzZVJlZjxUPigpO1xuXG4gIC8qKlxuICAgKiBXZSdyZSB1c2luZyBgdXNlTGF5b3V0RWZmZWN0YCBoZXJlIGluc3RlYWQgb2YgYHVzZUVmZmVjdGAgYmVjYXVzZSB3ZSB3YW50XG4gICAqIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBgcmVmYCB2YWx1ZSBpcyB1cCB0byBkYXRlIGJlZm9yZSBvdGhlciBwbGFjZXMgaW4gdGhlXG4gICAqIHRoZSBleGVjdXRpb24gY3ljbGUgdHJ5IHRvIHJlYWQgaXQuXG4gICAqL1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZm9yd2FyZGVkUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmb3J3YXJkZWRSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZvcndhcmRlZFJlZihvYmpSZWYuY3VycmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcndhcmRlZFJlZi5jdXJyZW50ID0gb2JqUmVmLmN1cnJlbnQ7XG4gICAgfVxuICB9LCBbZm9yd2FyZGVkUmVmXSk7XG5cbiAgcmV0dXJuIG9ialJlZjtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0VmZmVjdENhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG4vLyBMaWtlIHVzZUVmZmVjdCwgYnV0IG9ubHkgY2FsbGVkIGZvciB1cGRhdGVzIGFmdGVyIHRoZSBpbml0aWFsIHJlbmRlci5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVFZmZlY3QoZWZmZWN0OiBFZmZlY3RDYWxsYmFjaywgZGVwZW5kZW5jaWVzOiBhbnlbXSkge1xuICBjb25zdCBpc0luaXRpYWxNb3VudCA9IHVzZVJlZih0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50KSB7XG4gICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVmZmVjdCgpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIGRlcGVuZGVuY2llcyk7XG59XG4iLCJpbXBvcnQge1JlZk9iamVjdCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGhhc1Jlc2l6ZU9ic2VydmVyKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbnR5cGUgdXNlUmVzaXplT2JzZXJ2ZXJPcHRpb25zVHlwZTxUPiA9IHtcbiAgcmVmOiBSZWZPYmplY3Q8VD4sXG4gIG9uUmVzaXplOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZXNpemVPYnNlcnZlcjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KG9wdGlvbnM6IHVzZVJlc2l6ZU9ic2VydmVyT3B0aW9uc1R5cGU8VD4pIHtcbiAgY29uc3Qge3JlZiwgb25SZXNpemV9ID0gb3B0aW9ucztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gcmVmPy5jdXJyZW50O1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaGFzUmVzaXplT2JzZXJ2ZXIoKSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplLCBmYWxzZSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUsIGZhbHNlKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXJJbnN0YW5jZSA9IG5ldyB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgaWYgKCFlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uUmVzaXplKCk7XG4gICAgICB9KTtcbiAgICAgIHJlc2l6ZU9ic2VydmVySW5zdGFuY2Uub2JzZXJ2ZShlbGVtZW50KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXNpemVPYnNlcnZlckluc3RhbmNlLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfSwgW29uUmVzaXplLCByZWZdKTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge011dGFibGVSZWZPYmplY3QsIFJlZk9iamVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VMYXlvdXRFZmZlY3R9IGZyb20gJy4vJztcblxuaW50ZXJmYWNlIENvbnRleHRWYWx1ZTxUPiB7XG4gIHJlZj86IE11dGFibGVSZWZPYmplY3Q8VD5cbn1cblxuLy8gU3luY3MgcmVmIGZyb20gY29udGV4dCB3aXRoIHJlZiBwYXNzZWQgdG8gaG9va1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN5bmNSZWY8VD4oY29udGV4dDogQ29udGV4dFZhbHVlPFQ+LCByZWY6IFJlZk9iamVjdDxUPikge1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucmVmICYmIHJlZikge1xuICAgICAgY29udGV4dC5yZWYuY3VycmVudCA9IHJlZi5jdXJyZW50O1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY29udGV4dC5yZWYuY3VycmVudCA9IG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2NvbnRleHQsIHJlZl0pO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZTogRWxlbWVudCk6IEVsZW1lbnQge1xuICB3aGlsZSAobm9kZSAmJiAhaXNTY3JvbGxhYmxlKG5vZGUpKSB7XG4gICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBub2RlIHx8IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1Njcm9sbGFibGUobm9kZTogRWxlbWVudCk6IGJvb2xlYW4ge1xuICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgcmV0dXJuIC8oYXV0b3xzY3JvbGwpLy50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dYICsgc3R5bGUub3ZlcmZsb3dZKTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFZpZXdwb3J0U2l6ZSB7XG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbi8vIEB0cy1pZ25vcmVcbmxldCB2aXN1YWxWaWV3cG9ydCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpZXdwb3J0U2l6ZSgpOiBWaWV3cG9ydFNpemUge1xuICBsZXQgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoKCkgPT4gZ2V0Vmlld3BvcnRTaXplKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVXNlIHZpc3VhbFZpZXdwb3J0IGFwaSB0byB0cmFjayBhdmFpbGFibGUgaGVpZ2h0IGV2ZW4gb24gaU9TIHZpcnR1YWwga2V5Ym9hcmQgb3BlbmluZ1xuICAgIGxldCBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNldFNpemUoc2l6ZSA9PiB7XG4gICAgICAgIGxldCBuZXdTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XG4gICAgICAgIGlmIChuZXdTaXplLndpZHRoID09PSBzaXplLndpZHRoICYmIG5ld1NpemUuaGVpZ2h0ID09PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBzaXplO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTaXplO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICghdmlzdWFsVmlld3BvcnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc3VhbFZpZXdwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCF2aXN1YWxWaWV3cG9ydCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlzdWFsVmlld3BvcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gc2l6ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRTaXplKCk6IFZpZXdwb3J0U2l6ZSB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHZpc3VhbFZpZXdwb3J0Py53aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHZpc3VhbFZpZXdwb3J0Py5oZWlnaHQgfHwgd2luZG93LmlubmVySGVpZ2h0XG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtBcmlhTGFiZWxpbmdQcm9wc30gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdH0gZnJvbSAnLi91c2VMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5sZXQgZGVzY3JpcHRpb25JZCA9IDA7XG5jb25zdCBkZXNjcmlwdGlvbk5vZGVzID0gbmV3IE1hcDxzdHJpbmcsIHtyZWZDb3VudDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudH0+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nKTogQXJpYUxhYmVsaW5nUHJvcHMge1xuICBsZXQgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGVzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGVzYyA9IGRlc2NyaXB0aW9uTm9kZXMuZ2V0KGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoIWRlc2MpIHtcbiAgICAgIGxldCBpZCA9IGByZWFjdC1hcmlhLWRlc2NyaXB0aW9uLSR7ZGVzY3JpcHRpb25JZCsrfWA7XG4gICAgICBzZXRJZChpZCk7XG5cbiAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBub2RlLmlkID0gaWQ7XG4gICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBub2RlLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgZGVzYyA9IHtyZWZDb3VudDogMCwgZWxlbWVudDogbm9kZX07XG4gICAgICBkZXNjcmlwdGlvbk5vZGVzLnNldChkZXNjcmlwdGlvbiwgZGVzYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElkKGRlc2MuZWxlbWVudC5pZCk7XG4gICAgfVxuXG4gICAgZGVzYy5yZWZDb3VudCsrO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoLS1kZXNjLnJlZkNvdW50ID09PSAwKSB7XG4gICAgICAgIGRlc2MuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2Rlcy5kZWxldGUoZGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtkZXNjcmlwdGlvbl0pO1xuXG4gIHJldHVybiB7XG4gICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBkZXNjcmlwdGlvbiA/IGlkIDogdW5kZWZpbmVkXG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gdGVzdFVzZXJBZ2VudChyZTogUmVnRXhwKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB3aW5kb3cubmF2aWdhdG9yID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB3aW5kb3cubmF2aWdhdG9yWyd1c2VyQWdlbnREYXRhJ10/LmJyYW5kcy5zb21lKChicmFuZDoge2JyYW5kOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZ30pID0+IHJlLnRlc3QoYnJhbmQuYnJhbmQpKVxuICApIHx8XG4gIHJlLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuXG5mdW5jdGlvbiB0ZXN0UGxhdGZvcm0ocmU6IFJlZ0V4cCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAhPSBudWxsXG4gICAgPyByZS50ZXN0KCh3aW5kb3cubmF2aWdhdG9yWyd1c2VyQWdlbnREYXRhJ10gfHwgd2luZG93Lm5hdmlnYXRvcikucGxhdGZvcm0pXG4gICAgOiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFjKCkge1xuICByZXR1cm4gdGVzdFBsYXRmb3JtKC9eTWFjL2kpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJUGhvbmUoKSB7XG4gIHJldHVybiB0ZXN0UGxhdGZvcm0oL15pUGhvbmUvaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lQYWQoKSB7XG4gIHJldHVybiB0ZXN0UGxhdGZvcm0oL15pUGFkL2kpIHx8XG4gICAgLy8gaVBhZE9TIDEzIGxpZXMgYW5kIHNheXMgaXQncyBhIE1hYywgYnV0IHdlIGNhbiBkaXN0aW5ndWlzaCBieSBkZXRlY3RpbmcgdG91Y2ggc3VwcG9ydC5cbiAgICAoaXNNYWMoKSAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSU9TKCkge1xuICByZXR1cm4gaXNJUGhvbmUoKSB8fCBpc0lQYWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwbGVEZXZpY2UoKSB7XG4gIHJldHVybiBpc01hYygpIHx8IGlzSU9TKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dlYktpdCgpIHtcbiAgcmV0dXJuIHRlc3RVc2VyQWdlbnQoL0FwcGxlV2ViS2l0L2kpICYmICFpc0Nocm9tZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gIHJldHVybiB0ZXN0VXNlckFnZW50KC9DaHJvbWUvaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG4gIHJldHVybiB0ZXN0VXNlckFnZW50KC9BbmRyb2lkL2kpO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIxIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7UmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXZlbnQ8SyBleHRlbmRzIGtleW9mIEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcD4oXG4gIHJlZjogUmVmT2JqZWN0PEV2ZW50VGFyZ2V0PixcbiAgZXZlbnQ6IEssXG4gIGhhbmRsZXI6ICh0aGlzOiBEb2N1bWVudCwgZXY6IEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcFtLXSkgPT4gYW55LFxuICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXG4pIHtcbiAgbGV0IGhhbmRsZXJSZWYgPSB1c2VSZWYoaGFuZGxlcik7XG4gIGhhbmRsZXJSZWYuY3VycmVudCA9IGhhbmRsZXI7XG5cbiAgbGV0IGlzRGlzYWJsZWQgPSBoYW5kbGVyID09IG51bGw7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBlbGVtZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgbGV0IGhhbmRsZXIgPSAoZTogR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwW0tdKSA9PiBoYW5kbGVyUmVmLmN1cnJlbnQuY2FsbCh0aGlzLCBlKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfSwgW3JlZiwgZXZlbnQsIG9wdGlvbnMsIGlzRGlzYWJsZWRdKTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0Rpc3BhdGNoLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VMYXlvdXRFZmZlY3R9IGZyb20gJy4vJztcblxudHlwZSBTZXRWYWx1ZUFjdGlvbjxTPiA9IChwcmV2OiBTKSA9PiBHZW5lcmF0b3I8YW55LCB2b2lkLCB1bmtub3duPjtcblxuLy8gVGhpcyBob29rIHdvcmtzIGxpa2UgYHVzZVN0YXRlYCwgYnV0IHdoZW4gc2V0dGluZyB0aGUgdmFsdWUsIHlvdSBwYXNzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uXG4vLyB0aGF0IGNhbiB5aWVsZCBtdWx0aXBsZSB2YWx1ZXMuIEVhY2ggeWllbGRlZCB2YWx1ZSB1cGRhdGVzIHRoZSBzdGF0ZSBhbmQgd2FpdHMgZm9yIHRoZSBuZXh0XG4vLyBsYXlvdXQgZWZmZWN0LCB0aGVuIGNvbnRpbnVlcyB0aGUgZ2VuZXJhdG9yLiBUaGlzIGFsbG93cyBzZXF1ZW50aWFsIHVwZGF0ZXMgdG8gc3RhdGUgdG8gYmVcbi8vIHdyaXR0ZW4gbGluZWFybHkuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmFsdWVFZmZlY3Q8Uz4oZGVmYXVsdFZhbHVlOiBTIHwgKCgpID0+IFMpKTogW1MsIERpc3BhdGNoPFNldFZhbHVlQWN0aW9uPFM+Pl0ge1xuICBsZXQgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xuICBsZXQgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xuICBsZXQgZWZmZWN0ID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcblxuICAvLyBTdG9yZSB0aGUgZnVuY3Rpb24gaW4gYSByZWYgc28gd2UgY2FuIGFsd2F5cyBhY2Nlc3MgdGhlIGN1cnJlbnQgdmVyc2lvblxuICAvLyB3aGljaCBoYXMgdGhlIHByb3BlciBgdmFsdWVgIGluIHNjb3BlLlxuICBsZXQgbmV4dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgbmV4dFJlZi5jdXJyZW50ID0gKCkgPT4ge1xuICAgIC8vIFJ1biB0aGUgZ2VuZXJhdG9yIHRvIHRoZSBuZXh0IHlpZWxkLlxuICAgIGxldCBuZXdWYWx1ZSA9IGVmZmVjdC5jdXJyZW50Lm5leHQoKTtcblxuICAgIC8vIElmIHRoZSBnZW5lcmF0b3IgaXMgZG9uZSwgcmVzZXQgdGhlIGVmZmVjdC5cbiAgICBpZiAobmV3VmFsdWUuZG9uZSkge1xuICAgICAgZWZmZWN0LmN1cnJlbnQgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZSxcbiAgICAvLyB0aGVuIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHlpZWxkLiBPdGhlcndpc2UsXG4gICAgLy8gc2V0IHRoZSB2YWx1ZSBpbiBzdGF0ZSBhbmQgd2FpdCBmb3IgdGhlIG5leHQgbGF5b3V0IGVmZmVjdC5cbiAgICBpZiAodmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlKSB7XG4gICAgICBuZXh0UmVmLmN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmFsdWUobmV3VmFsdWUudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIC8vIElmIHRoZXJlIGlzIGFuIGVmZmVjdCBjdXJyZW50bHkgcnVubmluZywgY29udGludWUgdG8gdGhlIG5leHQgeWllbGQuXG4gICAgaWYgKGVmZmVjdC5jdXJyZW50KSB7XG4gICAgICBuZXh0UmVmLmN1cnJlbnQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBxdWV1ZSA9IHVzZUNhbGxiYWNrKGZuID0+IHtcbiAgICBlZmZlY3QuY3VycmVudCA9IGZuKHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgIG5leHRSZWYuY3VycmVudCgpO1xuICB9LCBbZWZmZWN0LCBuZXh0UmVmXSk7XG5cbiAgcmV0dXJuIFt2YWx1ZSwgcXVldWVdO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogU2Nyb2xscyBgc2Nyb2xsVmlld2Agc28gdGhhdCBgZWxlbWVudGAgaXMgdmlzaWJsZS5cbiAqIFNpbWlsYXIgdG8gYGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiAnbmVhcmVzdCd9KWAgKG5vdCBzdXBwb3J0ZWQgaW4gRWRnZSksXG4gKiBidXQgZG9lc24ndCBhZmZlY3QgcGFyZW50cyBhYm92ZSBgc2Nyb2xsVmlld2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhzY3JvbGxWaWV3OiBIVE1MRWxlbWVudCwgZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgbGV0IG9mZnNldFggPSByZWxhdGl2ZU9mZnNldChzY3JvbGxWaWV3LCBlbGVtZW50LCAnbGVmdCcpO1xuICBsZXQgb2Zmc2V0WSA9IHJlbGF0aXZlT2Zmc2V0KHNjcm9sbFZpZXcsIGVsZW1lbnQsICd0b3AnKTtcbiAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICBsZXQgeCA9IHNjcm9sbFZpZXcuc2Nyb2xsTGVmdDtcbiAgbGV0IHkgPSBzY3JvbGxWaWV3LnNjcm9sbFRvcDtcbiAgbGV0IG1heFggPSB4ICsgc2Nyb2xsVmlldy5vZmZzZXRXaWR0aDtcbiAgbGV0IG1heFkgPSB5ICsgc2Nyb2xsVmlldy5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKG9mZnNldFggPD0geCkge1xuICAgIHggPSBvZmZzZXRYO1xuICB9IGVsc2UgaWYgKG9mZnNldFggKyB3aWR0aCA+IG1heFgpIHtcbiAgICB4ICs9IG9mZnNldFggKyB3aWR0aCAtIG1heFg7XG4gIH1cbiAgaWYgKG9mZnNldFkgPD0geSkge1xuICAgIHkgPSBvZmZzZXRZO1xuICB9IGVsc2UgaWYgKG9mZnNldFkgKyBoZWlnaHQgPiBtYXhZKSB7XG4gICAgeSArPSBvZmZzZXRZICsgaGVpZ2h0IC0gbWF4WTtcbiAgfVxuXG4gIHNjcm9sbFZpZXcuc2Nyb2xsTGVmdCA9IHg7XG4gIHNjcm9sbFZpZXcuc2Nyb2xsVG9wID0geTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgb2Zmc2V0IGxlZnQgb3IgdG9wIGZyb20gY2hpbGQgdG8gYW5jZXN0b3IgYnkgYWNjdW11bGF0aW5nXG4gKiBvZmZzZXRMZWZ0IG9yIG9mZnNldFRvcCB0aHJvdWdoIGludGVydmVuaW5nIG9mZnNldFBhcmVudHMuXG4gKi9cbmZ1bmN0aW9uIHJlbGF0aXZlT2Zmc2V0KGFuY2VzdG9yOiBIVE1MRWxlbWVudCwgY2hpbGQ6IEhUTUxFbGVtZW50LCBheGlzOiAnbGVmdCd8J3RvcCcpIHtcbiAgY29uc3QgcHJvcCA9IGF4aXMgPT09ICdsZWZ0JyA/ICdvZmZzZXRMZWZ0JyA6ICdvZmZzZXRUb3AnO1xuICBsZXQgc3VtID0gMDtcbiAgd2hpbGUgKGNoaWxkLm9mZnNldFBhcmVudCkge1xuICAgIHN1bSArPSBjaGlsZFtwcm9wXTtcbiAgICBpZiAoY2hpbGQub2Zmc2V0UGFyZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgLy8gU3RvcCBvbmNlIHdlIGhhdmUgZm91bmQgdGhlIGFuY2VzdG9yIHdlIGFyZSBpbnRlcmVzdGVkIGluLlxuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmIChjaGlsZC5vZmZzZXRQYXJlbnQuY29udGFpbnMoYW5jZXN0b3IpKSB7XG4gICAgICAvLyBJZiB0aGUgYW5jZXN0b3IgaXMgbm90IGBwb3NpdGlvbjpyZWxhdGl2ZWAsIHRoZW4gd2Ugc3RvcCBhdFxuICAgICAgLy8gX2l0c18gb2Zmc2V0IHBhcmVudCwgYW5kIHdlIHN1YnRyYWN0IG9mZiBfaXRzXyBvZmZzZXQsIHNvIHRoYXRcbiAgICAgIC8vIHdlIGVuZCB1cCB3aXRoIHRoZSBwcm9wZXIgb2Zmc2V0IGZyb20gY2hpbGQgdG8gYW5jZXN0b3IuXG4gICAgICBzdW0gLT0gYW5jZXN0b3JbcHJvcF07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2hpbGQgPSBjaGlsZC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge2lzSU9TLCBydW5BZnRlclRyYW5zaXRpb259IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcblxuLy8gU2FmYXJpIG9uIGlPUyBzdGFydHMgc2VsZWN0aW5nIHRleHQgb24gbG9uZyBwcmVzcy4gVGhlIG9ubHkgd2F5IHRvIGF2b2lkIHRoaXMsIGl0IHNlZW1zLFxuLy8gaXMgdG8gYWRkIHVzZXItc2VsZWN0OiBub25lIHRvIHRoZSBlbnRpcmUgcGFnZS4gQWRkaW5nIGl0IHRvIHRoZSBwcmVzc2FibGUgZWxlbWVudCBwcmV2ZW50c1xuLy8gdGhhdCBlbGVtZW50IGZyb20gYmVpbmcgc2VsZWN0ZWQsIGJ1dCBuZWFyYnkgZWxlbWVudHMgbWF5IHN0aWxsIHJlY2VpdmUgc2VsZWN0aW9uLiBXZSBhZGRcbi8vIHVzZXItc2VsZWN0OiBub25lIG9uIHRvdWNoIHN0YXJ0LCBhbmQgcmVtb3ZlIGl0IGFnYWluIG9uIHRvdWNoIGVuZCB0byBwcmV2ZW50IHRoaXMuXG4vLyBUaGlzIG11c3QgYmUgaW1wbGVtZW50ZWQgdXNpbmcgZ2xvYmFsIHN0YXRlIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyBiZXR3ZWVuIG11bHRpcGxlIGVsZW1lbnRzLlxuXG4vLyBUaGVyZSBhcmUgdGhyZWUgcG9zc2libGUgc3RhdGVzIGR1ZSB0byB0aGUgZGVsYXkgYmVmb3JlIHJlbW92aW5nIHVzZXItc2VsZWN0OiBub25lIGFmdGVyXG4vLyBwb2ludGVyIHVwLiBUaGUgJ2RlZmF1bHQnIHN0YXRlIGFsd2F5cyB0cmFuc2l0aW9ucyB0byB0aGUgJ2Rpc2FibGVkJyBzdGF0ZSwgd2hpY2ggdHJhbnNpdGlvbnNcbi8vIHRvICdyZXN0b3JpbmcnLiBUaGUgJ3Jlc3RvcmluZycgc3RhdGUgY2FuIGVpdGhlciB0cmFuc2l0aW9uIGJhY2sgdG8gJ2Rpc2FibGVkJyBvciAnZGVmYXVsdCcuXG5cbi8vIEZvciBub24taU9TIGRldmljZXMsIHdlIGFwcGx5IHVzZXItc2VsZWN0OiBub25lIHRvIHRoZSBwcmVzc2VkIGVsZW1lbnQgaW5zdGVhZCB0byBhdm9pZCBwb3NzaWJsZVxuLy8gcGVyZm9ybWFuY2UgaXNzdWVzIHRoYXQgYXJpc2UgZnJvbSBhcHBseWluZyBhbmQgcmVtb3ZpbmcgdXNlci1zZWxlY3Q6IG5vbmUgdG8gdGhlIGVudGlyZSBwYWdlXG4vLyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hZG9iZS9yZWFjdC1zcGVjdHJ1bS9pc3N1ZXMvMTYwOSkuXG50eXBlIFN0YXRlID0gJ2RlZmF1bHQnIHwgJ2Rpc2FibGVkJyB8ICdyZXN0b3JpbmcnO1xuXG4vLyBOb3RlIHRoYXQgc3RhdGUgb25seSBtYXR0ZXJzIGhlcmUgZm9yIGlPUy4gTm9uLWlPUyBnZXRzIHVzZXItc2VsZWN0OiBub25lIGFwcGxpZWQgdG8gdGhlIHRhcmdldCBlbGVtZW50XG4vLyByYXRoZXIgdGhhbiBhdCB0aGUgZG9jdW1lbnQgbGV2ZWwgc28gd2UganVzdCBuZWVkIHRvIGFwcGx5L3JlbW92ZSB1c2VyLXNlbGVjdDogbm9uZSBmb3IgZWFjaCBwcmVzc2VkIGVsZW1lbnQgaW5kaXZpZHVhbGx5XG5sZXQgc3RhdGU6IFN0YXRlID0gJ2RlZmF1bHQnO1xubGV0IHNhdmVkVXNlclNlbGVjdCA9ICcnO1xubGV0IG1vZGlmaWVkRWxlbWVudE1hcCA9IG5ldyBXZWFrTWFwPEhUTUxFbGVtZW50LCBzdHJpbmc+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlVGV4dFNlbGVjdGlvbih0YXJnZXQ/OiBIVE1MRWxlbWVudCkge1xuICBpZiAoaXNJT1MoKSkge1xuICAgIGlmIChzdGF0ZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBzYXZlZFVzZXJTZWxlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdDtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHN0YXRlID0gJ2Rpc2FibGVkJztcbiAgfSBlbHNlIGlmICh0YXJnZXQpIHtcbiAgICAvLyBJZiBub3QgaU9TLCBzdG9yZSB0aGUgdGFyZ2V0J3Mgb3JpZ2luYWwgdXNlci1zZWxlY3QgYW5kIGNoYW5nZSB0byB1c2VyLXNlbGVjdDogbm9uZVxuICAgIC8vIElnbm9yZSBzdGF0ZSBzaW5jZSBpdCBkb2Vzbid0IGFwcGx5IGZvciBub24gaU9TXG4gICAgbW9kaWZpZWRFbGVtZW50TWFwLnNldCh0YXJnZXQsIHRhcmdldC5zdHlsZS51c2VyU2VsZWN0KTtcbiAgICB0YXJnZXQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVRleHRTZWxlY3Rpb24odGFyZ2V0PzogSFRNTEVsZW1lbnQpIHtcbiAgaWYgKGlzSU9TKCkpIHtcbiAgICAvLyBJZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBkZWZhdWx0LCB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uXG4gICAgLy8gSWYgaXQgaXMgcmVzdG9yaW5nLCB0aGVuIHRoZXJlJ3Mgbm8gbmVlZCB0byBxdWV1ZSBhIHNlY29uZCByZXN0b3JlLlxuICAgIGlmIChzdGF0ZSAhPT0gJ2Rpc2FibGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXRlID0gJ3Jlc3RvcmluZyc7XG5cbiAgICAvLyBUaGVyZSBhcHBlYXJzIHRvIGJlIGEgZGVsYXkgb24gaU9TIHdoZXJlIHNlbGVjdGlvbiBzdGlsbCBtaWdodCBvY2N1clxuICAgIC8vIGFmdGVyIHBvaW50ZXIgdXAsIHNvIHdhaXQgYSBiaXQgYmVmb3JlIHJlbW92aW5nIHVzZXItc2VsZWN0LlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gV2FpdCBmb3IgYW55IENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSBzbyB3ZSBkb24ndCByZWNvbXB1dGUgc3R5bGVcbiAgICAgIC8vIGZvciB0aGUgd2hvbGUgcGFnZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBhbmltYXRpb24gYW5kIGNhdXNlIGphbmsuXG4gICAgICBydW5BZnRlclRyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgICAvLyBBdm9pZCByYWNlIGNvbmRpdGlvbnNcbiAgICAgICAgaWYgKHN0YXRlID09PSAncmVzdG9yaW5nJykge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IHNhdmVkVXNlclNlbGVjdCB8fCAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzYXZlZFVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgICBzdGF0ZSA9ICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBub3QgaU9TLCByZXN0b3JlIHRoZSB0YXJnZXQncyBvcmlnaW5hbCB1c2VyLXNlbGVjdCBpZiBhbnlcbiAgICAvLyBJZ25vcmUgc3RhdGUgc2luY2UgaXQgZG9lc24ndCBhcHBseSBmb3Igbm9uIGlPU1xuICAgIGlmICh0YXJnZXQgJiYgbW9kaWZpZWRFbGVtZW50TWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICBsZXQgdGFyZ2V0T2xkVXNlclNlbGVjdCA9IG1vZGlmaWVkRWxlbWVudE1hcC5nZXQodGFyZ2V0KTtcblxuICAgICAgaWYgKHRhcmdldC5zdHlsZS51c2VyU2VsZWN0ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnVzZXJTZWxlY3QgPSB0YXJnZXRPbGRVc2VyU2VsZWN0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA9PT0gJycpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cbiAgICAgIG1vZGlmaWVkRWxlbWVudE1hcC5kZWxldGUodGFyZ2V0KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0ZvY3VzRXZlbnQgYXMgUmVhY3RGb2N1c0V2ZW50LCB1c2VDYWxsYmFjaywgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdH0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuXG4vLyBPcmlnaW5hbCBsaWNlbnNpbmcgZm9yIHRoZSBmb2xsb3dpbmcgbWV0aG9kIGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIE5PVElDRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzNjNzEzZDUxMzE5NWE1Mzc4OGIzZjhiYjRiNzAyNzlkNjhiMTViY2MvcGFja2FnZXMvcmVhY3QtaW50ZXJhY3Rpb25zL2V2ZW50cy9zcmMvZG9tL3NoYXJlZC9pbmRleC5qcyNMNzQtTDg3XG5cbi8vIEtleWJvYXJkcywgQXNzaXN0aXZlIFRlY2hub2xvZ2llcywgYW5kIGVsZW1lbnQuY2xpY2soKSBhbGwgcHJvZHVjZSBhIFwidmlydHVhbFwiXG4vLyBjbGljayBldmVudC4gVGhpcyBpcyBhIG1ldGhvZCBvZiBpbmZlcnJpbmcgc3VjaCBjbGlja3MuIEV2ZXJ5IGJyb3dzZXIgZXhjZXB0XG4vLyBJRSAxMSBvbmx5IHNldHMgYSB6ZXJvIHZhbHVlIG9mIFwiZGV0YWlsXCIgZm9yIGNsaWNrIGV2ZW50cyB0aGF0IGFyZSBcInZpcnR1YWxcIi5cbi8vIEhvd2V2ZXIsIElFIDExIHVzZXMgYSB6ZXJvIHZhbHVlIGZvciBhbGwgY2xpY2sgZXZlbnRzLiBGb3IgSUUgMTEgd2UgcmVseSBvblxuLy8gdGhlIHF1aXJrIHRoYXQgaXQgcHJvZHVjZXMgY2xpY2sgZXZlbnRzIHRoYXQgYXJlIG9mIHR5cGUgUG9pbnRlckV2ZW50LCBhbmRcbi8vIHdoZXJlIG9ubHkgdGhlIFwidmlydHVhbFwiIGNsaWNrIGxhY2tzIGEgcG9pbnRlclR5cGUgZmllbGQuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZpcnR1YWxDbGljayhldmVudDogTW91c2VFdmVudCB8IFBvaW50ZXJFdmVudCk6IGJvb2xlYW4ge1xuICAvLyBKQVdTL05WREEgd2l0aCBGaXJlZm94LlxuICBpZiAoKGV2ZW50IGFzIGFueSkubW96SW5wdXRTb3VyY2UgPT09IDAgJiYgZXZlbnQuaXNUcnVzdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZXZlbnQuZGV0YWlsID09PSAwICYmICEoZXZlbnQgYXMgUG9pbnRlckV2ZW50KS5wb2ludGVyVHlwZTtcbn1cblxuZXhwb3J0IGNsYXNzIFN5bnRoZXRpY0ZvY3VzRXZlbnQgaW1wbGVtZW50cyBSZWFjdEZvY3VzRXZlbnQge1xuICBuYXRpdmVFdmVudDogRm9jdXNFdmVudDtcbiAgdGFyZ2V0OiBFbGVtZW50O1xuICBjdXJyZW50VGFyZ2V0OiBFbGVtZW50O1xuICByZWxhdGVkVGFyZ2V0OiBFbGVtZW50O1xuICBidWJibGVzOiBib29sZWFuO1xuICBjYW5jZWxhYmxlOiBib29sZWFuO1xuICBkZWZhdWx0UHJldmVudGVkOiBib29sZWFuO1xuICBldmVudFBoYXNlOiBudW1iZXI7XG4gIGlzVHJ1c3RlZDogYm9vbGVhbjtcbiAgdGltZVN0YW1wOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIG5hdGl2ZUV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuICAgIHRoaXMudGFyZ2V0ID0gbmF0aXZlRXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gbmF0aXZlRXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50O1xuICAgIHRoaXMucmVsYXRlZFRhcmdldCA9IG5hdGl2ZUV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgRWxlbWVudDtcbiAgICB0aGlzLmJ1YmJsZXMgPSBuYXRpdmVFdmVudC5idWJibGVzO1xuICAgIHRoaXMuY2FuY2VsYWJsZSA9IG5hdGl2ZUV2ZW50LmNhbmNlbGFibGU7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICB0aGlzLmV2ZW50UGhhc2UgPSBuYXRpdmVFdmVudC5ldmVudFBoYXNlO1xuICAgIHRoaXMuaXNUcnVzdGVkID0gbmF0aXZlRXZlbnQuaXNUcnVzdGVkO1xuICAgIHRoaXMudGltZVN0YW1wID0gbmF0aXZlRXZlbnQudGltZVN0YW1wO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBpc0RlZmF1bHRQcmV2ZW50ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KCk6IHZvaWQge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgdGhpcy5uYXRpdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubmF0aXZlRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9ICgpID0+IHRydWU7XG4gIH1cblxuICBpc1Byb3BhZ2F0aW9uU3RvcHBlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwZXJzaXN0KCkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN5bnRoZXRpY0JsdXJFdmVudChvbkJsdXI6IChlOiBSZWFjdEZvY3VzRXZlbnQpID0+IHZvaWQpIHtcbiAgbGV0IHN0YXRlUmVmID0gdXNlUmVmKHtcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgIG9uQmx1cixcbiAgICBvYnNlcnZlcjogbnVsbCBhcyBNdXRhdGlvbk9ic2VydmVyXG4gIH0pO1xuICBzdGF0ZVJlZi5jdXJyZW50Lm9uQmx1ciA9IG9uQmx1cjtcblxuICAvLyBDbGVhbiB1cCBNdXRhdGlvbk9ic2VydmVyIG9uIHVubW91bnQuIFNlZSBiZWxvdy5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHN0YXRlUmVmLmN1cnJlbnQ7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5vYnNlcnZlcikge1xuICAgICAgICBzdGF0ZS5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHN0YXRlLm9ic2VydmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZHVyaW5nIGEgUmVhY3Qgb25Gb2N1cyBldmVudC5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKChlOiBSZWFjdEZvY3VzRXZlbnQpID0+IHtcbiAgICAvLyBSZWFjdCBkb2VzIG5vdCBmaXJlIG9uQmx1ciB3aGVuIGFuIGVsZW1lbnQgaXMgZGlzYWJsZWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvOTE0MlxuICAgIC8vIE1vc3QgYnJvd3NlcnMgZmlyZSBhIG5hdGl2ZSBmb2N1c291dCBldmVudCBpbiB0aGlzIGNhc2UsIGV4Y2VwdCBmb3IgRmlyZWZveC4gSW4gdGhhdCBjYXNlLCB3ZSB1c2UgYVxuICAgIC8vIE11dGF0aW9uT2JzZXJ2ZXIgdG8gd2F0Y2ggZm9yIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUsIGFuZCBkaXNwYXRjaCB0aGVzZSBldmVudHMgb3Vyc2VsdmVzLlxuICAgIC8vIEZvciBicm93c2VycyB0aGF0IGRvLCBmb2N1c291dCBmaXJlcyBiZWZvcmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXIsIHNvIG9uQmx1ciBzaG91bGQgbm90IGZpcmUgdHdpY2UuXG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fFxuICAgICAgZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICBlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgfHxcbiAgICAgIGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICApIHtcbiAgICAgIHN0YXRlUmVmLmN1cnJlbnQuaXNGb2N1c2VkID0gdHJ1ZTtcblxuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgbGV0IG9uQmx1ckhhbmRsZXIgPSAoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICBzdGF0ZVJlZi5jdXJyZW50LmlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZGlzcGF0Y2ggYSAoZmFrZSkgUmVhY3Qgc3ludGhldGljIGV2ZW50LlxuICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQub25CbHVyPy4obmV3IFN5bnRoZXRpY0ZvY3VzRXZlbnQoJ2JsdXInLCBlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBubyBsb25nZXIgbmVlZCB0aGUgTXV0YXRpb25PYnNlcnZlciBvbmNlIHRoZSB0YXJnZXQgaXMgYmx1cnJlZC5cbiAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQub2JzZXJ2ZXIpIHtcbiAgICAgICAgICBzdGF0ZVJlZi5jdXJyZW50Lm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBzdGF0ZVJlZi5jdXJyZW50Lm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25CbHVySGFuZGxlciwge29uY2U6IHRydWV9KTtcblxuICAgICAgc3RhdGVSZWYuY3VycmVudC5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQuaXNGb2N1c2VkICYmIHRhcmdldC5kaXNhYmxlZCkge1xuICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KCdibHVyJykpO1xuICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KCdmb2N1c291dCcsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3RhdGVSZWYuY3VycmVudC5vYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge2F0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCddfSk7XG4gICAgfVxuICB9LCBbXSk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtQcmVzc1Byb3BzfSBmcm9tICcuL3VzZVByZXNzJztcbmltcG9ydCBSZWFjdCwge011dGFibGVSZWZPYmplY3R9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElQcmVzc1Jlc3BvbmRlckNvbnRleHQgZXh0ZW5kcyBQcmVzc1Byb3BzIHtcbiAgcmVnaXN0ZXIoKTogdm9pZCxcbiAgcmVmPzogTXV0YWJsZVJlZk9iamVjdDxIVE1MRWxlbWVudD5cbn1cblxuZXhwb3J0IGNvbnN0IFByZXNzUmVzcG9uZGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8SVByZXNzUmVzcG9uZGVyQ29udGV4dD4obnVsbCk7XG5QcmVzc1Jlc3BvbmRlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnUHJlc3NSZXNwb25kZXJDb250ZXh0JztcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBQb3J0aW9ucyBvZiB0aGUgY29kZSBpbiB0aGlzIGZpbGUgYXJlIGJhc2VkIG9uIGNvZGUgZnJvbSByZWFjdC5cbi8vIE9yaWdpbmFsIGxpY2Vuc2luZyBmb3IgdGhlIGZvbGxvd2luZyBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBOT1RJQ0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvdHJlZS9jYzdjMWFlY2U0NmE2YjY5YjQxOTU4ZDczMWUwZmQyN2M5NGJmYzZjL3BhY2thZ2VzL3JlYWN0LWludGVyYWN0aW9uc1xuXG5pbXBvcnQge2Rpc2FibGVUZXh0U2VsZWN0aW9uLCByZXN0b3JlVGV4dFNlbGVjdGlvbn0gZnJvbSAnLi90ZXh0U2VsZWN0aW9uJztcbmltcG9ydCB7Zm9jdXNXaXRob3V0U2Nyb2xsaW5nLCBtZXJnZVByb3BzLCB1c2VHbG9iYWxMaXN0ZW5lcnMsIHVzZVN5bmNSZWZ9IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcbmltcG9ydCB7SFRNTEF0dHJpYnV0ZXMsIFJlZk9iamVjdCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2lzVmlydHVhbENsaWNrfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7UG9pbnRlclR5cGUsIFByZXNzRXZlbnRzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7UHJlc3NSZXNwb25kZXJDb250ZXh0fSBmcm9tICcuL2NvbnRleHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNzUHJvcHMgZXh0ZW5kcyBQcmVzc0V2ZW50cyB7XG4gIC8qKiBXaGV0aGVyIHRoZSB0YXJnZXQgaXMgaW4gYSBjb250cm9sbGVkIHByZXNzIHN0YXRlIChlLmcuIGFuIG92ZXJsYXkgaXQgdHJpZ2dlcnMgaXMgb3BlbikuICovXG4gIGlzUHJlc3NlZD86IGJvb2xlYW4sXG4gIC8qKiBXaGV0aGVyIHRoZSBwcmVzcyBldmVudHMgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRhcmdldCBzaG91bGQgbm90IHJlY2VpdmUgZm9jdXMgb24gcHJlc3MuICovXG4gIHByZXZlbnRGb2N1c09uUHJlc3M/OiBib29sZWFuLFxuICAvKipcbiAgICogV2hldGhlciBwcmVzcyBldmVudHMgc2hvdWxkIGJlIGNhbmNlbGVkIHdoZW4gdGhlIHBvaW50ZXIgbGVhdmVzIHRoZSB0YXJnZXQgd2hpbGUgcHJlc3NlZC5cbiAgICogQnkgZGVmYXVsdCwgdGhpcyBpcyBgZmFsc2VgLCB3aGljaCBtZWFucyBpZiB0aGUgcG9pbnRlciByZXR1cm5zIGJhY2sgb3ZlciB0aGUgdGFyZ2V0IHdoaWxlXG4gICAqIHN0aWxsIHByZXNzZWQsIG9uUHJlc3NTdGFydCB3aWxsIGJlIGZpcmVkIGFnYWluLiBJZiBzZXQgdG8gYHRydWVgLCB0aGUgcHJlc3MgaXMgY2FuY2VsZWRcbiAgICogd2hlbiB0aGUgcG9pbnRlciBsZWF2ZXMgdGhlIHRhcmdldCBhbmQgb25QcmVzc1N0YXJ0IHdpbGwgbm90IGJlIGZpcmVkIGlmIHRoZSBwb2ludGVyIHJldHVybnMuXG4gICAqL1xuICBzaG91bGRDYW5jZWxPblBvaW50ZXJFeGl0PzogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGV4dCBzZWxlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQgb24gdGhlIHByZXNzYWJsZSBlbGVtZW50LiAqL1xuICBhbGxvd1RleHRTZWxlY3Rpb25PblByZXNzPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNzSG9va1Byb3BzIGV4dGVuZHMgUHJlc3NQcm9wcyB7XG4gIC8qKiBBIHJlZiB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG4gIHJlZj86IFJlZk9iamVjdDxIVE1MRWxlbWVudD5cbn1cblxuaW50ZXJmYWNlIFByZXNzU3RhdGUge1xuICBpc1ByZXNzZWQ6IGJvb2xlYW4sXG4gIGlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHM6IGJvb2xlYW4sXG4gIGlnbm9yZUNsaWNrQWZ0ZXJQcmVzczogYm9vbGVhbixcbiAgZGlkRmlyZVByZXNzU3RhcnQ6IGJvb2xlYW4sXG4gIGFjdGl2ZVBvaW50ZXJJZDogYW55LFxuICB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgaXNPdmVyVGFyZ2V0OiBib29sZWFuLFxuICBwb2ludGVyVHlwZTogUG9pbnRlclR5cGUsXG4gIHVzZXJTZWxlY3Q/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEV2ZW50QmFzZSB7XG4gIGN1cnJlbnRUYXJnZXQ6IEV2ZW50VGFyZ2V0LFxuICBzaGlmdEtleTogYm9vbGVhbixcbiAgY3RybEtleTogYm9vbGVhbixcbiAgbWV0YUtleTogYm9vbGVhbixcbiAgYWx0S2V5OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc3NSZXN1bHQge1xuICAvKiogV2hldGhlciB0aGUgdGFyZ2V0IGlzIGN1cnJlbnRseSBwcmVzc2VkLiAqL1xuICBpc1ByZXNzZWQ6IGJvb2xlYW4sXG4gIC8qKiBQcm9wcyB0byBzcHJlYWQgb24gdGhlIHRhcmdldCBlbGVtZW50LiAqL1xuICBwcmVzc1Byb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD5cbn1cblxuZnVuY3Rpb24gdXNlUHJlc3NSZXNwb25kZXJDb250ZXh0KHByb3BzOiBQcmVzc0hvb2tQcm9wcyk6IFByZXNzSG9va1Byb3BzIHtcbiAgLy8gQ29uc3VtZSBjb250ZXh0IGZyb20gPFByZXNzUmVzcG9uZGVyPiBhbmQgbWVyZ2Ugd2l0aCBwcm9wcy5cbiAgbGV0IGNvbnRleHQgPSB1c2VDb250ZXh0KFByZXNzUmVzcG9uZGVyQ29udGV4dCk7XG4gIGlmIChjb250ZXh0KSB7XG4gICAgbGV0IHtyZWdpc3RlciwgLi4uY29udGV4dFByb3BzfSA9IGNvbnRleHQ7XG4gICAgcHJvcHMgPSBtZXJnZVByb3BzKGNvbnRleHRQcm9wcywgcHJvcHMpIGFzIFByZXNzSG9va1Byb3BzO1xuICAgIHJlZ2lzdGVyKCk7XG4gIH1cbiAgdXNlU3luY1JlZihjb250ZXh0LCBwcm9wcy5yZWYpO1xuXG4gIHJldHVybiBwcm9wcztcbn1cblxuLyoqXG4gKiBIYW5kbGVzIHByZXNzIGludGVyYWN0aW9ucyBhY3Jvc3MgbW91c2UsIHRvdWNoLCBrZXlib2FyZCwgYW5kIHNjcmVlbiByZWFkZXJzLlxuICogSXQgbm9ybWFsaXplcyBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMgYW5kIHBsYXRmb3JtcywgYW5kIGhhbmRsZXMgbWFueSBudWFuY2VzXG4gKiBvZiBkZWFsaW5nIHdpdGggcG9pbnRlciBhbmQga2V5Ym9hcmQgZXZlbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJlc3MocHJvcHM6IFByZXNzSG9va1Byb3BzKTogUHJlc3NSZXN1bHQge1xuICBsZXQge1xuICAgIG9uUHJlc3MsXG4gICAgb25QcmVzc0NoYW5nZSxcbiAgICBvblByZXNzU3RhcnQsXG4gICAgb25QcmVzc0VuZCxcbiAgICBvblByZXNzVXAsXG4gICAgaXNEaXNhYmxlZCxcbiAgICBpc1ByZXNzZWQ6IGlzUHJlc3NlZFByb3AsXG4gICAgcHJldmVudEZvY3VzT25QcmVzcyxcbiAgICBzaG91bGRDYW5jZWxPblBvaW50ZXJFeGl0LFxuICAgIGFsbG93VGV4dFNlbGVjdGlvbk9uUHJlc3MsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIHJlZjogXywgLy8gUmVtb3ZpbmcgYHJlZmAgZnJvbSBgZG9tUHJvcHNgIGJlY2F1c2UgVHlwZVNjcmlwdCBpcyBkdW1iXG4gICAgLi4uZG9tUHJvcHNcbiAgfSA9IHVzZVByZXNzUmVzcG9uZGVyQ29udGV4dChwcm9wcyk7XG4gIGxldCBwcm9wc1JlZiA9IHVzZVJlZjxQcmVzc0hvb2tQcm9wcz4obnVsbCk7XG4gIHByb3BzUmVmLmN1cnJlbnQgPSB7b25QcmVzcywgb25QcmVzc0NoYW5nZSwgb25QcmVzc1N0YXJ0LCBvblByZXNzRW5kLCBvblByZXNzVXAsIGlzRGlzYWJsZWQsIHNob3VsZENhbmNlbE9uUG9pbnRlckV4aXR9O1xuXG4gIGxldCBbaXNQcmVzc2VkLCBzZXRQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IHJlZiA9IHVzZVJlZjxQcmVzc1N0YXRlPih7XG4gICAgaXNQcmVzc2VkOiBmYWxzZSxcbiAgICBpZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICBpZ25vcmVDbGlja0FmdGVyUHJlc3M6IGZhbHNlLFxuICAgIGRpZEZpcmVQcmVzc1N0YXJ0OiBmYWxzZSxcbiAgICBhY3RpdmVQb2ludGVySWQ6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIGlzT3ZlclRhcmdldDogZmFsc2UsXG4gICAgcG9pbnRlclR5cGU6IG51bGxcbiAgfSk7XG5cbiAgbGV0IHthZGRHbG9iYWxMaXN0ZW5lciwgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzfSA9IHVzZUdsb2JhbExpc3RlbmVycygpO1xuXG4gIGxldCBwcmVzc1Byb3BzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHN0YXRlID0gcmVmLmN1cnJlbnQ7XG4gICAgbGV0IHRyaWdnZXJQcmVzc1N0YXJ0ID0gKG9yaWdpbmFsRXZlbnQ6IEV2ZW50QmFzZSwgcG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlKSA9PiB7XG4gICAgICBsZXQge29uUHJlc3NTdGFydCwgb25QcmVzc0NoYW5nZSwgaXNEaXNhYmxlZH0gPSBwcm9wc1JlZi5jdXJyZW50O1xuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgc3RhdGUuZGlkRmlyZVByZXNzU3RhcnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAob25QcmVzc1N0YXJ0KSB7XG4gICAgICAgIG9uUHJlc3NTdGFydCh7XG4gICAgICAgICAgdHlwZTogJ3ByZXNzc3RhcnQnLFxuICAgICAgICAgIHBvaW50ZXJUeXBlLFxuICAgICAgICAgIHRhcmdldDogb3JpZ2luYWxFdmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgIHNoaWZ0S2V5OiBvcmlnaW5hbEV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgIG1ldGFLZXk6IG9yaWdpbmFsRXZlbnQubWV0YUtleSxcbiAgICAgICAgICBjdHJsS2V5OiBvcmlnaW5hbEV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgYWx0S2V5OiBvcmlnaW5hbEV2ZW50LmFsdEtleVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uUHJlc3NDaGFuZ2UpIHtcbiAgICAgICAgb25QcmVzc0NoYW5nZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZGlkRmlyZVByZXNzU3RhcnQgPSB0cnVlO1xuICAgICAgc2V0UHJlc3NlZCh0cnVlKTtcbiAgICB9O1xuXG4gICAgbGV0IHRyaWdnZXJQcmVzc0VuZCA9IChvcmlnaW5hbEV2ZW50OiBFdmVudEJhc2UsIHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSwgd2FzUHJlc3NlZCA9IHRydWUpID0+IHtcbiAgICAgIGxldCB7b25QcmVzc0VuZCwgb25QcmVzc0NoYW5nZSwgb25QcmVzcywgaXNEaXNhYmxlZH0gPSBwcm9wc1JlZi5jdXJyZW50O1xuICAgICAgaWYgKCFzdGF0ZS5kaWRGaXJlUHJlc3NTdGFydCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmlnbm9yZUNsaWNrQWZ0ZXJQcmVzcyA9IHRydWU7XG4gICAgICBzdGF0ZS5kaWRGaXJlUHJlc3NTdGFydCA9IGZhbHNlO1xuXG4gICAgICBpZiAob25QcmVzc0VuZCkge1xuICAgICAgICBvblByZXNzRW5kKHtcbiAgICAgICAgICB0eXBlOiAncHJlc3NlbmQnLFxuICAgICAgICAgIHBvaW50ZXJUeXBlLFxuICAgICAgICAgIHRhcmdldDogb3JpZ2luYWxFdmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgIHNoaWZ0S2V5OiBvcmlnaW5hbEV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgIG1ldGFLZXk6IG9yaWdpbmFsRXZlbnQubWV0YUtleSxcbiAgICAgICAgICBjdHJsS2V5OiBvcmlnaW5hbEV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgYWx0S2V5OiBvcmlnaW5hbEV2ZW50LmFsdEtleVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uUHJlc3NDaGFuZ2UpIHtcbiAgICAgICAgb25QcmVzc0NoYW5nZShmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHNldFByZXNzZWQoZmFsc2UpO1xuXG4gICAgICBpZiAob25QcmVzcyAmJiB3YXNQcmVzc2VkICYmICFpc0Rpc2FibGVkKSB7XG4gICAgICAgIG9uUHJlc3Moe1xuICAgICAgICAgIHR5cGU6ICdwcmVzcycsXG4gICAgICAgICAgcG9pbnRlclR5cGUsXG4gICAgICAgICAgdGFyZ2V0OiBvcmlnaW5hbEV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgc2hpZnRLZXk6IG9yaWdpbmFsRXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgbWV0YUtleTogb3JpZ2luYWxFdmVudC5tZXRhS2V5LFxuICAgICAgICAgIGN0cmxLZXk6IG9yaWdpbmFsRXZlbnQuY3RybEtleSxcbiAgICAgICAgICBhbHRLZXk6IG9yaWdpbmFsRXZlbnQuYWx0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgdHJpZ2dlclByZXNzVXAgPSAob3JpZ2luYWxFdmVudDogRXZlbnRCYXNlLCBwb2ludGVyVHlwZTogUG9pbnRlclR5cGUpID0+IHtcbiAgICAgIGxldCB7b25QcmVzc1VwLCBpc0Rpc2FibGVkfSA9IHByb3BzUmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvblByZXNzVXApIHtcbiAgICAgICAgb25QcmVzc1VwKHtcbiAgICAgICAgICB0eXBlOiAncHJlc3N1cCcsXG4gICAgICAgICAgcG9pbnRlclR5cGUsXG4gICAgICAgICAgdGFyZ2V0OiBvcmlnaW5hbEV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgc2hpZnRLZXk6IG9yaWdpbmFsRXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgbWV0YUtleTogb3JpZ2luYWxFdmVudC5tZXRhS2V5LFxuICAgICAgICAgIGN0cmxLZXk6IG9yaWdpbmFsRXZlbnQuY3RybEtleSxcbiAgICAgICAgICBhbHRLZXk6IG9yaWdpbmFsRXZlbnQuYWx0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgY2FuY2VsID0gKGU6IEV2ZW50QmFzZSkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmlzUHJlc3NlZCkge1xuICAgICAgICBpZiAoc3RhdGUuaXNPdmVyVGFyZ2V0KSB7XG4gICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksIHN0YXRlLnBvaW50ZXJUeXBlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuaXNQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5hY3RpdmVQb2ludGVySWQgPSBudWxsO1xuICAgICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9IG51bGw7XG4gICAgICAgIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgICBpZiAoIWFsbG93VGV4dFNlbGVjdGlvbk9uUHJlc3MpIHtcbiAgICAgICAgICByZXN0b3JlVGV4dFNlbGVjdGlvbihzdGF0ZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBwcmVzc1Byb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4gPSB7XG4gICAgICBvbktleURvd24oZSkge1xuICAgICAgICBpZiAoaXNWYWxpZEtleWJvYXJkRXZlbnQoZS5uYXRpdmVFdmVudCkgJiYgZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdEtleWJvYXJkKGUudGFyZ2V0IGFzIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgaXMgcmVwZWF0aW5nLCBpdCBtYXkgaGF2ZSBzdGFydGVkIG9uIGEgZGlmZmVyZW50IGVsZW1lbnRcbiAgICAgICAgICAvLyBhZnRlciB3aGljaCBmb2N1cyBtb3ZlZCB0byB0aGUgY3VycmVudCBlbGVtZW50LiBJZ25vcmUgdGhlc2UgZXZlbnRzIGFuZFxuICAgICAgICAgIC8vIG9ubHkgaGFuZGxlIHRoZSBmaXJzdCBrZXkgZG93biBldmVudC5cbiAgICAgICAgICBpZiAoIXN0YXRlLmlzUHJlc3NlZCAmJiAhZS5yZXBlYXQpIHtcbiAgICAgICAgICAgIHN0YXRlLnRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIHN0YXRlLmlzUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0cmlnZ2VyUHJlc3NTdGFydChlLCAna2V5Ym9hcmQnKTtcblxuICAgICAgICAgICAgLy8gRm9jdXMgbWF5IG1vdmUgYmVmb3JlIHRoZSBrZXkgdXAgZXZlbnQsIHNvIHJlZ2lzdGVyIHRoZSBldmVudCBvbiB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIHNhbWUgZWxlbWVudCB3aGVyZSB0aGUga2V5IGRvd24gZXZlbnQgb2NjdXJyZWQuXG4gICAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcihkb2N1bWVudCwgJ2tleXVwJywgb25LZXlVcCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uS2V5VXAoZSkge1xuICAgICAgICBpZiAoaXNWYWxpZEtleWJvYXJkRXZlbnQoZS5uYXRpdmVFdmVudCkgJiYgIWUucmVwZWF0ICYmIGUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NVcChjcmVhdGVFdmVudChzdGF0ZS50YXJnZXQsIGUpLCAna2V5Ym9hcmQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBpZiAoZSAmJiAhZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlICYmIGUuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRyaWdnZXJlZCBmcm9tIGEgc2NyZWVuIHJlYWRlciBvciBieSB1c2luZyBlbGVtZW50LmNsaWNrKCksXG4gICAgICAgICAgLy8gdHJpZ2dlciBhcyBpZiBpdCB3ZXJlIGEga2V5Ym9hcmQgY2xpY2suXG4gICAgICAgICAgaWYgKCFzdGF0ZS5pZ25vcmVDbGlja0FmdGVyUHJlc3MgJiYgIXN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgJiYgKHN0YXRlLnBvaW50ZXJUeXBlID09PSAndmlydHVhbCcgfHwgaXNWaXJ0dWFsQ2xpY2soZS5uYXRpdmVFdmVudCkpKSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgdGhlIGVsZW1lbnQgcmVjZWl2ZXMgZm9jdXMgKFZvaWNlT3ZlciBvbiBpT1MgZG9lcyBub3QgZG8gdGhpcylcbiAgICAgICAgICAgIGlmICghaXNEaXNhYmxlZCAmJiAhcHJldmVudEZvY3VzT25QcmVzcykge1xuICAgICAgICAgICAgICBmb2N1c1dpdGhvdXRTY3JvbGxpbmcoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJpZ2dlclByZXNzU3RhcnQoZSwgJ3ZpcnR1YWwnKTtcbiAgICAgICAgICAgIHRyaWdnZXJQcmVzc1VwKGUsICd2aXJ0dWFsJyk7XG4gICAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoZSwgJ3ZpcnR1YWwnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0ZS5pZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUuaWdub3JlQ2xpY2tBZnRlclByZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IG9uS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmlzUHJlc3NlZCAmJiBpc1ZhbGlkS2V5Ym9hcmRFdmVudChlKSkge1xuICAgICAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHRLZXlib2FyZChlLnRhcmdldCBhcyBFbGVtZW50KSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHN0YXRlLmlzUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHRyaWdnZXJQcmVzc0VuZChjcmVhdGVFdmVudChzdGF0ZS50YXJnZXQsIGUpLCAna2V5Ym9hcmQnLCBzdGF0ZS50YXJnZXQuY29udGFpbnModGFyZ2V0KSk7XG4gICAgICAgIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycygpO1xuXG4gICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBsaW5rLCB0cmlnZ2VyIHRoZSBjbGljayBtZXRob2QgdG8gb3BlbiB0aGUgVVJMLFxuICAgICAgICAvLyBidXQgZGVmZXIgdHJpZ2dlcmluZyBwcmVzc0VuZCB1bnRpbCBvbkNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAgICAgIGlmIChzdGF0ZS50YXJnZXQuY29udGFpbnModGFyZ2V0KSAmJiBpc0hUTUxBbmNob3JMaW5rKHN0YXRlLnRhcmdldCkgfHwgc3RhdGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnbGluaycpIHtcbiAgICAgICAgICBzdGF0ZS50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIFBvaW50ZXJFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHByZXNzUHJvcHMub25Qb2ludGVyRG93biA9IChlKSA9PiB7XG4gICAgICAgIC8vIE9ubHkgaGFuZGxlIGxlZnQgY2xpY2tzLCBhbmQgaWdub3JlIGV2ZW50cyB0aGF0IGJ1YmJsZWQgdGhyb3VnaCBwb3J0YWxzLlxuICAgICAgICBpZiAoZS5idXR0b24gIT09IDAgfHwgIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpT1Mgc2FmYXJpIGZpcmVzIHBvaW50ZXIgZXZlbnRzIGZyb20gVm9pY2VPdmVyIHdpdGggaW5jb3JyZWN0IGNvb3JkaW5hdGVzL3RhcmdldC5cbiAgICAgICAgLy8gSWdub3JlIGFuZCBsZXQgdGhlIG9uQ2xpY2sgaGFuZGxlciB0YWtlIGNhcmUgb2YgaXQgaW5zdGVhZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIyMjYyN1xuICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjIzMjAyXG4gICAgICAgIGlmIChpc1ZpcnR1YWxQb2ludGVyRXZlbnQoZS5uYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9ICd2aXJ0dWFsJztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEdWUgdG8gYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGJyb3dzZXJzLCB3ZSBwcmV2ZW50XG4gICAgICAgIC8vIGRlZmF1bHQgb24gcG9pbnRlciBkb3duIGFuZCBoYW5kbGUgZm9jdXNpbmcgdGhlIHByZXNzYWJsZSBlbGVtZW50IG91cnNlbHZlcy5cbiAgICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9IGUucG9pbnRlclR5cGU7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCFzdGF0ZS5pc1ByZXNzZWQpIHtcbiAgICAgICAgICBzdGF0ZS5pc1ByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IHRydWU7XG4gICAgICAgICAgc3RhdGUuYWN0aXZlUG9pbnRlcklkID0gZS5wb2ludGVySWQ7XG4gICAgICAgICAgc3RhdGUudGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgICAgaWYgKCFpc0Rpc2FibGVkICYmICFwcmV2ZW50Rm9jdXNPblByZXNzKSB7XG4gICAgICAgICAgICBmb2N1c1dpdGhvdXRTY3JvbGxpbmcoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWFsbG93VGV4dFNlbGVjdGlvbk9uUHJlc3MpIHtcbiAgICAgICAgICAgIGRpc2FibGVUZXh0U2VsZWN0aW9uKHN0YXRlLnRhcmdldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJpZ2dlclByZXNzU3RhcnQoZSwgc3RhdGUucG9pbnRlclR5cGUpO1xuXG4gICAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUsIGZhbHNlKTtcbiAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCBmYWxzZSk7XG4gICAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIoZG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgb25Qb2ludGVyQ2FuY2VsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHByZXNzUHJvcHMub25Nb3VzZURvd24gPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAvLyBDaHJvbWUgYW5kIEZpcmVmb3ggb24gdG91Y2ggV2luZG93cyBkZXZpY2VzIHJlcXVpcmUgbW91c2UgZG93biBldmVudHNcbiAgICAgICAgICAvLyB0byBiZSBjYW5jZWxlZCBpbiBhZGRpdGlvbiB0byBwb2ludGVyIGV2ZW50cywgb3IgYW4gZXh0cmEgYXN5bmNocm9ub3VzXG4gICAgICAgICAgLy8gZm9jdXMgZXZlbnQgd2lsbCBiZSBmaXJlZC5cbiAgICAgICAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHQoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHByZXNzUHJvcHMub25Qb2ludGVyVXAgPSAoZSkgPT4ge1xuICAgICAgICAvLyBpT1MgZmlyZXMgcG9pbnRlcnVwIHdpdGggemVybyB3aWR0aCBhbmQgaGVpZ2h0LCBzbyBjaGVjayB0aGUgcG9pbnRlclR5cGUgcmVjb3JkZWQgZHVyaW5nIHBvaW50ZXJkb3duLlxuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkgfHwgc3RhdGUucG9pbnRlclR5cGUgPT09ICd2aXJ0dWFsJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgaGFuZGxlIGxlZnQgY2xpY2tzXG4gICAgICAgIC8vIFNhZmFyaSBvbiBpT1Mgc29tZXRpbWVzIGZpcmVzIHBvaW50ZXJ1cCBldmVudHMsIGV2ZW5cbiAgICAgICAgLy8gd2hlbiB0aGUgdG91Y2ggaXNuJ3Qgb3ZlciB0aGUgdGFyZ2V0LCBzbyBkb3VibGUgY2hlY2suXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCAmJiBpc092ZXJUYXJnZXQoZSwgZS5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgIHRyaWdnZXJQcmVzc1VwKGUsIHN0YXRlLnBvaW50ZXJUeXBlIHx8IGUucG9pbnRlclR5cGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBTYWZhcmkgb24gaU9TIDwgMTMuMiBkb2VzIG5vdCBpbXBsZW1lbnQgcG9pbnRlcmVudGVyL3BvaW50ZXJsZWF2ZSBldmVudHMgY29ycmVjdGx5LlxuICAgICAgLy8gVXNlIHBvaW50ZXIgbW92ZSBldmVudHMgaW5zdGVhZCB0byBpbXBsZW1lbnQgb3VyIG93biBoaXQgdGVzdGluZy5cbiAgICAgIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk5ODAzXG4gICAgICBsZXQgb25Qb2ludGVyTW92ZSA9IChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUucG9pbnRlcklkICE9PSBzdGF0ZS5hY3RpdmVQb2ludGVySWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPdmVyVGFyZ2V0KGUsIHN0YXRlLnRhcmdldCkpIHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmlzT3ZlclRhcmdldCkge1xuICAgICAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyaWdnZXJQcmVzc1N0YXJ0KGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksIHN0YXRlLnBvaW50ZXJUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuaXNPdmVyVGFyZ2V0KSB7XG4gICAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksIHN0YXRlLnBvaW50ZXJUeXBlLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKHByb3BzUmVmLmN1cnJlbnQuc2hvdWxkQ2FuY2VsT25Qb2ludGVyRXhpdCkge1xuICAgICAgICAgICAgY2FuY2VsKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IG9uUG9pbnRlclVwID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5wb2ludGVySWQgPT09IHN0YXRlLmFjdGl2ZVBvaW50ZXJJZCAmJiBzdGF0ZS5pc1ByZXNzZWQgJiYgZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBpZiAoaXNPdmVyVGFyZ2V0KGUsIHN0YXRlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJQcmVzc0VuZChjcmVhdGVFdmVudChzdGF0ZS50YXJnZXQsIGUpLCBzdGF0ZS5wb2ludGVyVHlwZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5pc092ZXJUYXJnZXQpIHtcbiAgICAgICAgICAgIHRyaWdnZXJQcmVzc0VuZChjcmVhdGVFdmVudChzdGF0ZS50YXJnZXQsIGUpLCBzdGF0ZS5wb2ludGVyVHlwZSwgZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRlLmlzUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLmFjdGl2ZVBvaW50ZXJJZCA9IG51bGw7XG4gICAgICAgICAgc3RhdGUucG9pbnRlclR5cGUgPSBudWxsO1xuICAgICAgICAgIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgICAgIGlmICghYWxsb3dUZXh0U2VsZWN0aW9uT25QcmVzcykge1xuICAgICAgICAgICAgcmVzdG9yZVRleHRTZWxlY3Rpb24oc3RhdGUudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxldCBvblBvaW50ZXJDYW5jZWwgPSAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGNhbmNlbChlKTtcbiAgICAgIH07XG5cbiAgICAgIHByZXNzUHJvcHMub25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTYWZhcmkgZG9lcyBub3QgY2FsbCBvblBvaW50ZXJDYW5jZWwgd2hlbiBhIGRyYWcgc3RhcnRzLCB3aGVyZWFzIENocm9tZSBhbmQgRmlyZWZveCBkby5cbiAgICAgICAgY2FuY2VsKGUpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlc3NQcm9wcy5vbk1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICAgIC8vIE9ubHkgaGFuZGxlIGxlZnQgY2xpY2tzXG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCB8fCAhZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIER1ZSB0byBicm93c2VyIGluY29uc2lzdGVuY2llcywgZXNwZWNpYWxseSBvbiBtb2JpbGUgYnJvd3NlcnMsIHdlIHByZXZlbnRcbiAgICAgICAgLy8gZGVmYXVsdCBvbiBtb3VzZSBkb3duIGFuZCBoYW5kbGUgZm9jdXNpbmcgdGhlIHByZXNzYWJsZSBlbGVtZW50IG91cnNlbHZlcy5cbiAgICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoc3RhdGUuaWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmlzUHJlc3NlZCA9IHRydWU7XG4gICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IHRydWU7XG4gICAgICAgIHN0YXRlLnRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgc3RhdGUucG9pbnRlclR5cGUgPSBpc1ZpcnR1YWxDbGljayhlLm5hdGl2ZUV2ZW50KSA/ICd2aXJ0dWFsJyA6ICdtb3VzZSc7XG5cbiAgICAgICAgaWYgKCFpc0Rpc2FibGVkICYmICFwcmV2ZW50Rm9jdXNPblByZXNzKSB7XG4gICAgICAgICAgZm9jdXNXaXRob3V0U2Nyb2xsaW5nKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2VyUHJlc3NTdGFydChlLCBzdGF0ZS5wb2ludGVyVHlwZSk7XG5cbiAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICBwcmVzc1Byb3BzLm9uTW91c2VFbnRlciA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChzdGF0ZS5pc1ByZXNzZWQgJiYgIXN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMpIHtcbiAgICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSB0cnVlO1xuICAgICAgICAgIHRyaWdnZXJQcmVzc1N0YXJ0KGUsIHN0YXRlLnBvaW50ZXJUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vbk1vdXNlTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoc3RhdGUuaXNQcmVzc2VkICYmICFzdGF0ZS5pZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzKSB7XG4gICAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGUsIHN0YXRlLnBvaW50ZXJUeXBlLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKHByb3BzUmVmLmN1cnJlbnQuc2hvdWxkQ2FuY2VsT25Qb2ludGVyRXhpdCkge1xuICAgICAgICAgICAgY2FuY2VsKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgJiYgZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NVcChlLCBzdGF0ZS5wb2ludGVyVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxldCBvbk1vdXNlVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAvLyBPbmx5IGhhbmRsZSBsZWZ0IGNsaWNrc1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5pc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlQWxsR2xvYmFsTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMpIHtcbiAgICAgICAgICBzdGF0ZS5pZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT3ZlclRhcmdldChlLCBzdGF0ZS50YXJnZXQpKSB7XG4gICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGNyZWF0ZUV2ZW50KHN0YXRlLnRhcmdldCwgZSksIHN0YXRlLnBvaW50ZXJUeXBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5pc092ZXJUYXJnZXQpIHtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoY3JlYXRlRXZlbnQoc3RhdGUudGFyZ2V0LCBlKSwgc3RhdGUucG9pbnRlclR5cGUsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmlzT3ZlclRhcmdldCA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vblRvdWNoU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdG91Y2ggPSBnZXRUb3VjaEZyb21FdmVudChlLm5hdGl2ZUV2ZW50KTtcbiAgICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5hY3RpdmVQb2ludGVySWQgPSB0b3VjaC5pZGVudGlmaWVyO1xuICAgICAgICBzdGF0ZS5pZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuaXNQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUudGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9ICd0b3VjaCc7XG5cbiAgICAgICAgLy8gRHVlIHRvIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBicm93c2Vycywgd2UgcHJldmVudCBkZWZhdWx0XG4gICAgICAgIC8vIG9uIHRoZSBlbXVsYXRlZCBtb3VzZSBldmVudCBhbmQgaGFuZGxlIGZvY3VzaW5nIHRoZSBwcmVzc2FibGUgZWxlbWVudCBvdXJzZWx2ZXMuXG4gICAgICAgIGlmICghaXNEaXNhYmxlZCAmJiAhcHJldmVudEZvY3VzT25QcmVzcykge1xuICAgICAgICAgIGZvY3VzV2l0aG91dFNjcm9sbGluZyhlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbGxvd1RleHRTZWxlY3Rpb25PblByZXNzKSB7XG4gICAgICAgICAgZGlzYWJsZVRleHRTZWxlY3Rpb24oc3RhdGUudGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJQcmVzc1N0YXJ0KGUsIHN0YXRlLnBvaW50ZXJUeXBlKTtcblxuICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdzY3JvbGwnLCBvblNjcm9sbCwgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICBwcmVzc1Byb3BzLm9uVG91Y2hNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCFlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCFzdGF0ZS5pc1ByZXNzZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG91Y2ggPSBnZXRUb3VjaEJ5SWQoZS5uYXRpdmVFdmVudCwgc3RhdGUuYWN0aXZlUG9pbnRlcklkKTtcbiAgICAgICAgaWYgKHRvdWNoICYmIGlzT3ZlclRhcmdldCh0b3VjaCwgZS5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgIGlmICghc3RhdGUuaXNPdmVyVGFyZ2V0KSB7XG4gICAgICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSB0cnVlO1xuICAgICAgICAgICAgdHJpZ2dlclByZXNzU3RhcnQoZSwgc3RhdGUucG9pbnRlclR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5pc092ZXJUYXJnZXQpIHtcbiAgICAgICAgICBzdGF0ZS5pc092ZXJUYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgICB0cmlnZ2VyUHJlc3NFbmQoZSwgc3RhdGUucG9pbnRlclR5cGUsIGZhbHNlKTtcbiAgICAgICAgICBpZiAocHJvcHNSZWYuY3VycmVudC5zaG91bGRDYW5jZWxPblBvaW50ZXJFeGl0KSB7XG4gICAgICAgICAgICBjYW5jZWwoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwcmVzc1Byb3BzLm9uVG91Y2hFbmQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIXN0YXRlLmlzUHJlc3NlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3VjaCA9IGdldFRvdWNoQnlJZChlLm5hdGl2ZUV2ZW50LCBzdGF0ZS5hY3RpdmVQb2ludGVySWQpO1xuICAgICAgICBpZiAodG91Y2ggJiYgaXNPdmVyVGFyZ2V0KHRvdWNoLCBlLmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgdHJpZ2dlclByZXNzVXAoZSwgc3RhdGUucG9pbnRlclR5cGUpO1xuICAgICAgICAgIHRyaWdnZXJQcmVzc0VuZChlLCBzdGF0ZS5wb2ludGVyVHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuaXNPdmVyVGFyZ2V0KSB7XG4gICAgICAgICAgdHJpZ2dlclByZXNzRW5kKGUsIHN0YXRlLnBvaW50ZXJUeXBlLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5pc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuYWN0aXZlUG9pbnRlcklkID0gbnVsbDtcbiAgICAgICAgc3RhdGUuaXNPdmVyVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSB0cnVlO1xuICAgICAgICBpZiAoIWFsbG93VGV4dFNlbGVjdGlvbk9uUHJlc3MpIHtcbiAgICAgICAgICByZXN0b3JlVGV4dFNlbGVjdGlvbihzdGF0ZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgfTtcblxuICAgICAgcHJlc3NQcm9wcy5vblRvdWNoQ2FuY2VsID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCFlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHN0YXRlLmlzUHJlc3NlZCkge1xuICAgICAgICAgIGNhbmNlbChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IG9uU2Nyb2xsID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5pc1ByZXNzZWQgJiYgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jb250YWlucyhzdGF0ZS50YXJnZXQpKSB7XG4gICAgICAgICAgY2FuY2VsKHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQ6IHN0YXRlLnRhcmdldCxcbiAgICAgICAgICAgIHNoaWZ0S2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGN0cmxLZXk6IGZhbHNlLFxuICAgICAgICAgICAgbWV0YUtleTogZmFsc2UsXG4gICAgICAgICAgICBhbHRLZXk6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHByZXNzUHJvcHMub25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYW5jZWwoZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwcmVzc1Byb3BzO1xuICB9LCBbYWRkR2xvYmFsTGlzdGVuZXIsIGlzRGlzYWJsZWQsIHByZXZlbnRGb2N1c09uUHJlc3MsIHJlbW92ZUFsbEdsb2JhbExpc3RlbmVycywgYWxsb3dUZXh0U2VsZWN0aW9uT25QcmVzc10pO1xuXG4gIC8vIFJlbW92ZSB1c2VyLXNlbGVjdDogbm9uZSBpbiBjYXNlIGNvbXBvbmVudCB1bm1vdW50cyBpbW1lZGlhdGVseSBhZnRlciBwcmVzc1N0YXJ0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJvdy1ib2R5LXN0eWxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghYWxsb3dUZXh0U2VsZWN0aW9uT25QcmVzcykge1xuICAgICAgICByZXN0b3JlVGV4dFNlbGVjdGlvbihyZWYuY3VycmVudC50YXJnZXQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFthbGxvd1RleHRTZWxlY3Rpb25PblByZXNzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1ByZXNzZWQ6IGlzUHJlc3NlZFByb3AgfHwgaXNQcmVzc2VkLFxuICAgIHByZXNzUHJvcHM6IG1lcmdlUHJvcHMoZG9tUHJvcHMsIHByZXNzUHJvcHMpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEFuY2hvckxpbmsodGFyZ2V0OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdocmVmJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRLZXlib2FyZEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHtrZXksIGNvZGUsIHRhcmdldH0gPSBldmVudDtcbiAgY29uc3QgZWxlbWVudCA9IHRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3Qge3RhZ05hbWUsIGlzQ29udGVudEVkaXRhYmxlfSA9IGVsZW1lbnQ7XG4gIGNvbnN0IHJvbGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpO1xuICAvLyBBY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZHMuIFNwYWNlIGFuZCBFbnRlciBvbmx5LlxuICAvLyBcIlNwYWNlYmFyXCIgaXMgZm9yIElFIDExXG4gIHJldHVybiAoXG4gICAgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICcgJyB8fCBrZXkgPT09ICdTcGFjZWJhcicgfHwgY29kZSA9PT0gJ1NwYWNlJykgJiZcbiAgICAodGFnTmFtZSAhPT0gJ0lOUFVUJyAmJlxuICAgICAgdGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyAmJlxuICAgICAgaXNDb250ZW50RWRpdGFibGUgIT09IHRydWUpICYmXG4gICAgLy8gQSBsaW5rIHdpdGggYSB2YWxpZCBocmVmIHNob3VsZCBiZSBoYW5kbGVkIG5hdGl2ZWx5LFxuICAgIC8vIHVubGVzcyBpdCBhbHNvIGhhcyByb2xlPSdidXR0b24nIGFuZCB3YXMgdHJpZ2dlcmVkIHVzaW5nIFNwYWNlLlxuICAgICghaXNIVE1MQW5jaG9yTGluayhlbGVtZW50KSB8fCAocm9sZSA9PT0gJ2J1dHRvbicgJiYga2V5ICE9PSAnRW50ZXInKSkgJiZcbiAgICAvLyBBbiBlbGVtZW50IHdpdGggcm9sZT0nbGluaycgc2hvdWxkIG9ubHkgdHJpZ2dlciB3aXRoIEVudGVyIGtleVxuICAgICEocm9sZSA9PT0gJ2xpbmsnICYmIGtleSAhPT0gJ0VudGVyJylcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hGcm9tRXZlbnQoZXZlbnQ6IFRvdWNoRXZlbnQpOiBUb3VjaCB8IG51bGwge1xuICBjb25zdCB7dGFyZ2V0VG91Y2hlc30gPSBldmVudDtcbiAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0YXJnZXRUb3VjaGVzWzBdO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SWQoXG4gIGV2ZW50OiBUb3VjaEV2ZW50LFxuICBwb2ludGVySWQ6IG51bGwgfCBudW1iZXJcbik6IG51bGwgfCBUb3VjaCB7XG4gIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b3VjaCA9IGNoYW5nZWRUb3VjaGVzW2ldO1xuICAgIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBwb2ludGVySWQpIHtcbiAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KHRhcmdldDogSFRNTEVsZW1lbnQsIGU6IEV2ZW50QmFzZSk6IEV2ZW50QmFzZSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFRhcmdldDogdGFyZ2V0LFxuICAgIHNoaWZ0S2V5OiBlLnNoaWZ0S2V5LFxuICAgIGN0cmxLZXk6IGUuY3RybEtleSxcbiAgICBtZXRhS2V5OiBlLm1ldGFLZXksXG4gICAgYWx0S2V5OiBlLmFsdEtleVxuICB9O1xufVxuXG5pbnRlcmZhY2UgUmVjdCB7XG4gIHRvcDogbnVtYmVyLFxuICByaWdodDogbnVtYmVyLFxuICBib3R0b206IG51bWJlcixcbiAgbGVmdDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBFdmVudFBvaW50IHtcbiAgY2xpZW50WDogbnVtYmVyLFxuICBjbGllbnRZOiBudW1iZXIsXG4gIHdpZHRoPzogbnVtYmVyLFxuICBoZWlnaHQ/OiBudW1iZXIsXG4gIHJhZGl1c1g/OiBudW1iZXIsXG4gIHJhZGl1c1k/OiBudW1iZXJcbn1cblxuZnVuY3Rpb24gZ2V0UG9pbnRDbGllbnRSZWN0KHBvaW50OiBFdmVudFBvaW50KTogUmVjdCB7XG4gIGxldCBvZmZzZXRYID0gKHBvaW50LndpZHRoIC8gMikgfHwgcG9pbnQucmFkaXVzWCB8fCAwO1xuICBsZXQgb2Zmc2V0WSA9IChwb2ludC5oZWlnaHQgLyAyKSB8fCBwb2ludC5yYWRpdXNZIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHBvaW50LmNsaWVudFkgLSBvZmZzZXRZLFxuICAgIHJpZ2h0OiBwb2ludC5jbGllbnRYICsgb2Zmc2V0WCxcbiAgICBib3R0b206IHBvaW50LmNsaWVudFkgKyBvZmZzZXRZLFxuICAgIGxlZnQ6IHBvaW50LmNsaWVudFggLSBvZmZzZXRYXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFyZVJlY3RhbmdsZXNPdmVybGFwcGluZyhhOiBSZWN0LCBiOiBSZWN0KSB7XG4gIC8vIGNoZWNrIGlmIHRoZXkgY2Fubm90IG92ZXJsYXAgb24geCBheGlzXG4gIGlmIChhLmxlZnQgPiBiLnJpZ2h0IHx8IGIubGVmdCA+IGEucmlnaHQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gY2hlY2sgaWYgdGhleSBjYW5ub3Qgb3ZlcmxhcCBvbiB5IGF4aXNcbiAgaWYgKGEudG9wID4gYi5ib3R0b20gfHwgYi50b3AgPiBhLmJvdHRvbSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNPdmVyVGFyZ2V0KHBvaW50OiBFdmVudFBvaW50LCB0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG4gIGxldCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBsZXQgcG9pbnRSZWN0ID0gZ2V0UG9pbnRDbGllbnRSZWN0KHBvaW50KTtcbiAgcmV0dXJuIGFyZVJlY3RhbmdsZXNPdmVybGFwcGluZyhyZWN0LCBwb2ludFJlY3QpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdCh0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG4gIC8vIFdlIGNhbm5vdCBwcmV2ZW50IGRlZmF1bHQgaWYgdGhlIHRhcmdldCBpcyBhIGRyYWdnYWJsZSBlbGVtZW50LlxuICByZXR1cm4gIXRhcmdldC5kcmFnZ2FibGU7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0S2V5Ym9hcmQodGFyZ2V0OiBFbGVtZW50KSB7XG4gIHJldHVybiAhKCh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCB0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpICYmICh0YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSAnc3VibWl0Jyk7XG59XG5cbmZ1bmN0aW9uIGlzVmlydHVhbFBvaW50ZXJFdmVudChldmVudDogUG9pbnRlckV2ZW50KSB7XG4gIC8vIElmIHRoZSBwb2ludGVyIHNpemUgaXMgemVybywgdGhlbiB3ZSBhc3N1bWUgaXQncyBmcm9tIGEgc2NyZWVuIHJlYWRlci5cbiAgLy8gQW5kcm9pZCBUYWxrQmFjayBkb3VibGUgdGFwIHdpbGwgc29tZXRpbWVzIHJldHVybiBhIGV2ZW50IHdpdGggd2lkdGggYW5kIGhlaWdodCBvZiAxXG4gIC8vIGFuZCBwb2ludGVyVHlwZSA9PT0gJ21vdXNlJyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGZvciBhIHNwZWNpZmljIGNvbWJpbmF0aW9uIG9mIGV2ZW50IGF0dHJpYnV0ZXMuXG4gIC8vIENhbm5vdCB1c2UgXCJldmVudC5wcmVzc3VyZSA9PT0gMFwiIGFzIHRoZSBzb2xlIGNoZWNrIGR1ZSB0byBTYWZhcmkgcG9pbnRlciBldmVudHMgYWx3YXlzIHJldHVybmluZyBwcmVzc3VyZSA9PT0gMFxuICAvLyBpbnN0ZWFkIG9mIC41LCBzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwNjIxNi4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZScgaXMgdG8gZGlzdGluZ3VzaFxuICAvLyBUYWxrYmFjayBkb3VibGUgdGFwIGZyb20gV2luZG93cyBGaXJlZm94IHRvdWNoIHNjcmVlbiBwcmVzc1xuICByZXR1cm4gKFxuICAgIChldmVudC53aWR0aCA9PT0gMCAmJiBldmVudC5oZWlnaHQgPT09IDApIHx8XG4gICAgKGV2ZW50LndpZHRoID09PSAxICYmXG4gICAgICBldmVudC5oZWlnaHQgPT09IDEgJiZcbiAgICAgIGV2ZW50LnByZXNzdXJlID09PSAwICYmXG4gICAgICBldmVudC5kZXRhaWwgPT09IDAgJiZcbiAgICAgIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnXG4gICAgKVxuICApO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7bWVyZ2VQcm9wc30gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IHtQcmVzc1Byb3BzLCB1c2VQcmVzc30gZnJvbSAnLi91c2VQcmVzcyc7XG5pbXBvcnQgUmVhY3QsIHtIVE1MQXR0cmlidXRlcywgUmVhY3RFbGVtZW50LCBSZWZPYmplY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJlc3NhYmxlUHJvcHMgZXh0ZW5kcyBQcmVzc1Byb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDxIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sIHN0cmluZz5cbn1cblxuZXhwb3J0IGNvbnN0IFByZXNzYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHtjaGlsZHJlbiwgLi4ucHJvcHN9OiBQcmVzc2FibGVQcm9wcywgcmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gIGxldCBuZXdSZWYgPSB1c2VSZWYoKTtcbiAgcmVmID0gcmVmID8/IG5ld1JlZjtcbiAgbGV0IHtwcmVzc1Byb3BzfSA9IHVzZVByZXNzKHsuLi5wcm9wcywgcmVmfSk7XG4gIGxldCBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgIGNoaWxkLFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB7cmVmLCAuLi5tZXJnZVByb3BzKGNoaWxkLnByb3BzLCBwcmVzc1Byb3BzKX1cbiAgKTtcbn0pO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7bWVyZ2VQcm9wcywgdXNlU3luY1JlZn0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IHtQcmVzc1Byb3BzfSBmcm9tICcuL3VzZVByZXNzJztcbmltcG9ydCB7UHJlc3NSZXNwb25kZXJDb250ZXh0fSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3ROb2RlLCBSZWZPYmplY3QsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcmVzc1Jlc3BvbmRlclByb3BzIGV4dGVuZHMgUHJlc3NQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IFByZXNzUmVzcG9uZGVyID0gUmVhY3QuZm9yd2FyZFJlZigoe2NoaWxkcmVuLCAuLi5wcm9wc306IFByZXNzUmVzcG9uZGVyUHJvcHMsIHJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50PikgPT4ge1xuICBsZXQgaXNSZWdpc3RlcmVkID0gdXNlUmVmKGZhbHNlKTtcbiAgbGV0IHByZXZDb250ZXh0ID0gdXNlQ29udGV4dChQcmVzc1Jlc3BvbmRlckNvbnRleHQpO1xuICBsZXQgY29udGV4dCA9IG1lcmdlUHJvcHMocHJldkNvbnRleHQgfHwge30sIHtcbiAgICAuLi5wcm9wcyxcbiAgICByZWY6IHJlZiB8fCBwcmV2Q29udGV4dD8ucmVmLFxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgaXNSZWdpc3RlcmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgaWYgKHByZXZDb250ZXh0KSB7XG4gICAgICAgIHByZXZDb250ZXh0LnJlZ2lzdGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VTeW5jUmVmKHByZXZDb250ZXh0LCByZWYpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1JlZ2lzdGVyZWQuY3VycmVudCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnQSBQcmVzc1Jlc3BvbmRlciB3YXMgcmVuZGVyZWQgd2l0aG91dCBhIHByZXNzYWJsZSBjaGlsZC4gJyArXG4gICAgICAgICdFaXRoZXIgY2FsbCB0aGUgdXNlUHJlc3MgaG9vaywgb3Igd3JhcCB5b3VyIERPTSBub2RlIHdpdGggPFByZXNzYWJsZT4gY29tcG9uZW50LidcbiAgICAgICk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJlc3NSZXNwb25kZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1ByZXNzUmVzcG9uZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0pO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFBvcnRpb25zIG9mIHRoZSBjb2RlIGluIHRoaXMgZmlsZSBhcmUgYmFzZWQgb24gY29kZSBmcm9tIHJlYWN0LlxuLy8gT3JpZ2luYWwgbGljZW5zaW5nIGZvciB0aGUgZm9sbG93aW5nIGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIE5PVElDRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC90cmVlL2NjN2MxYWVjZTQ2YTZiNjliNDE5NThkNzMxZTBmZDI3Yzk0YmZjNmMvcGFja2FnZXMvcmVhY3QtaW50ZXJhY3Rpb25zXG5cbmltcG9ydCB7Rm9jdXNFdmVudCwgSFRNTEF0dHJpYnV0ZXMsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZvY3VzRXZlbnRzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7dXNlU3ludGhldGljQmx1ckV2ZW50fSBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIEZvY3VzUHJvcHMgZXh0ZW5kcyBGb2N1c0V2ZW50cyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBmb2N1cyBldmVudHMgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBpc0Rpc2FibGVkPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRm9jdXNSZXN1bHQge1xuICAvKiogUHJvcHMgdG8gc3ByZWFkIG9udG8gdGhlIHRhcmdldCBlbGVtZW50LiAqL1xuICBmb2N1c1Byb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD5cbn1cblxuLyoqXG4gKiBIYW5kbGVzIGZvY3VzIGV2ZW50cyBmb3IgdGhlIGltbWVkaWF0ZSB0YXJnZXQuXG4gKiBGb2N1cyBldmVudHMgb24gY2hpbGQgZWxlbWVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXMocHJvcHM6IEZvY3VzUHJvcHMpOiBGb2N1c1Jlc3VsdCB7XG4gIGxldCB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICBvbkZvY3VzOiBvbkZvY3VzUHJvcCxcbiAgICBvbkJsdXI6IG9uQmx1clByb3AsXG4gICAgb25Gb2N1c0NoYW5nZVxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25CbHVyOiBGb2N1c1Byb3BzWydvbkJsdXInXSA9IHVzZUNhbGxiYWNrKChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGlmIChvbkJsdXJQcm9wKSB7XG4gICAgICAgIG9uQmx1clByb3AoZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkZvY3VzQ2hhbmdlKSB7XG4gICAgICAgIG9uRm9jdXNDaGFuZ2UoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIFtvbkJsdXJQcm9wLCBvbkZvY3VzQ2hhbmdlXSk7XG5cblxuICBjb25zdCBvblN5bnRoZXRpY0ZvY3VzID0gdXNlU3ludGhldGljQmx1ckV2ZW50KG9uQmx1cik7XG5cbiAgY29uc3Qgb25Gb2N1czogRm9jdXNQcm9wc1snb25Gb2N1cyddID0gdXNlQ2FsbGJhY2soKGU6IEZvY3VzRXZlbnQpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgaWYgKG9uRm9jdXNQcm9wKSB7XG4gICAgICAgIG9uRm9jdXNQcm9wKGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25Gb2N1c0NoYW5nZSkge1xuICAgICAgICBvbkZvY3VzQ2hhbmdlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBvblN5bnRoZXRpY0ZvY3VzKGUpO1xuICAgIH1cbiAgfSwgW29uRm9jdXNDaGFuZ2UsIG9uRm9jdXNQcm9wLCBvblN5bnRoZXRpY0ZvY3VzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb2N1c1Byb3BzOiB7XG4gICAgICBvbkZvY3VzOiAoIWlzRGlzYWJsZWQgJiYgKG9uRm9jdXNQcm9wIHx8IG9uRm9jdXNDaGFuZ2UgfHwgb25CbHVyUHJvcCkpID8gb25Gb2N1cyA6IHVuZGVmaW5lZCxcbiAgICAgIG9uQmx1cjogKCFpc0Rpc2FibGVkICYmIChvbkJsdXJQcm9wIHx8IG9uRm9jdXNDaGFuZ2UpKSA/IG9uQmx1ciA6IG51bGxcbiAgICB9XG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gUG9ydGlvbnMgb2YgdGhlIGNvZGUgaW4gdGhpcyBmaWxlIGFyZSBiYXNlZCBvbiBjb2RlIGZyb20gcmVhY3QuXG4vLyBPcmlnaW5hbCBsaWNlbnNpbmcgZm9yIHRoZSBmb2xsb3dpbmcgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTk9USUNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3RyZWUvY2M3YzFhZWNlNDZhNmI2OWI0MTk1OGQ3MzFlMGZkMjdjOTRiZmM2Yy9wYWNrYWdlcy9yZWFjdC1pbnRlcmFjdGlvbnNcblxuaW1wb3J0IHtpc01hY30gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IHtpc1ZpcnR1YWxDbGlja30gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxudHlwZSBNb2RhbGl0eSA9ICdrZXlib2FyZCcgfCAncG9pbnRlcicgfCAndmlydHVhbCc7XG50eXBlIEhhbmRsZXJFdmVudCA9IFBvaW50ZXJFdmVudCB8IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50IHwgRm9jdXNFdmVudDtcbnR5cGUgSGFuZGxlciA9IChtb2RhbGl0eTogTW9kYWxpdHksIGU6IEhhbmRsZXJFdmVudCkgPT4gdm9pZDtcbnR5cGUgRm9jdXNWaXNpYmxlSGFuZGxlciA9IChpc0ZvY3VzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcbmludGVyZmFjZSBGb2N1c1Zpc2libGVQcm9wcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGEgdGV4dCBpbnB1dC4gKi9cbiAgaXNUZXh0SW5wdXQ/OiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCB3aWxsIGJlIGF1dG8gZm9jdXNlZC4gKi9cbiAgYXV0b0ZvY3VzPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRm9jdXNWaXNpYmxlUmVzdWx0IHtcbiAgLyoqIFdoZXRoZXIga2V5Ym9hcmQgZm9jdXMgaXMgdmlzaWJsZSBnbG9iYWxseS4gKi9cbiAgaXNGb2N1c1Zpc2libGU6IGJvb2xlYW5cbn1cblxubGV0IGN1cnJlbnRNb2RhbGl0eSA9IG51bGw7XG5sZXQgY2hhbmdlSGFuZGxlcnMgPSBuZXcgU2V0PEhhbmRsZXI+KCk7XG5sZXQgaGFzU2V0dXBHbG9iYWxMaXN0ZW5lcnMgPSBmYWxzZTtcbmxldCBoYXNFdmVudEJlZm9yZUZvY3VzID0gZmFsc2U7XG5sZXQgaGFzQmx1cnJlZFdpbmRvd1JlY2VudGx5ID0gZmFsc2U7XG5cbi8vIE9ubHkgVGFiIG9yIEVzYyBrZXlzIHdpbGwgbWFrZSBmb2N1cyB2aXNpYmxlIG9uIHRleHQgaW5wdXQgZWxlbWVudHNcbmNvbnN0IEZPQ1VTX1ZJU0lCTEVfSU5QVVRfS0VZUyA9IHtcbiAgVGFiOiB0cnVlLFxuICBFc2NhcGU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHRyaWdnZXJDaGFuZ2VIYW5kbGVycyhtb2RhbGl0eTogTW9kYWxpdHksIGU6IEhhbmRsZXJFdmVudCkge1xuICBmb3IgKGxldCBoYW5kbGVyIG9mIGNoYW5nZUhhbmRsZXJzKSB7XG4gICAgaGFuZGxlcihtb2RhbGl0eSwgZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGEgS2V5Ym9hcmRFdmVudCBpcyB1bm1vZGlmaWVkIGFuZCBjb3VsZCBtYWtlIGtleWJvYXJkIGZvY3VzIHN0eWxlcyB2aXNpYmxlLlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgLy8gQ29udHJvbCBhbmQgU2hpZnQga2V5cyB0cmlnZ2VyIHdoZW4gbmF2aWdhdGluZyBiYWNrIHRvIHRoZSB0YWIgd2l0aCBrZXlib2FyZC5cbiAgcmV0dXJuICEoZS5tZXRhS2V5IHx8ICghaXNNYWMoKSAmJiBlLmFsdEtleSkgfHwgZS5jdHJsS2V5IHx8IGUua2V5ID09PSAnQ29udHJvbCcgfHwgZS5rZXkgPT09ICdTaGlmdCcgfHwgZS5rZXkgPT09ICdNZXRhJyk7XG59XG5cblxuZnVuY3Rpb24gaGFuZGxlS2V5Ym9hcmRFdmVudChlOiBLZXlib2FyZEV2ZW50KSB7XG4gIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSB0cnVlO1xuICBpZiAoaXNWYWxpZEtleShlKSkge1xuICAgIGN1cnJlbnRNb2RhbGl0eSA9ICdrZXlib2FyZCc7XG4gICAgdHJpZ2dlckNoYW5nZUhhbmRsZXJzKCdrZXlib2FyZCcsIGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBvaW50ZXJFdmVudChlOiBQb2ludGVyRXZlbnQgfCBNb3VzZUV2ZW50KSB7XG4gIGN1cnJlbnRNb2RhbGl0eSA9ICdwb2ludGVyJztcbiAgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nKSB7XG4gICAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IHRydWU7XG4gICAgdHJpZ2dlckNoYW5nZUhhbmRsZXJzKCdwb2ludGVyJywgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tFdmVudChlOiBNb3VzZUV2ZW50KSB7XG4gIGlmIChpc1ZpcnR1YWxDbGljayhlKSkge1xuICAgIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSB0cnVlO1xuICAgIGN1cnJlbnRNb2RhbGl0eSA9ICd2aXJ0dWFsJztcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVGb2N1c0V2ZW50KGU6IEZvY3VzRXZlbnQpIHtcbiAgLy8gRmlyZWZveCBmaXJlcyB0d28gZXh0cmEgZm9jdXMgZXZlbnRzIHdoZW4gdGhlIHVzZXIgZmlyc3QgY2xpY2tzIGludG8gYW4gaWZyYW1lOlxuICAvLyBmaXJzdCBvbiB0aGUgd2luZG93LCB0aGVuIG9uIHRoZSBkb2N1bWVudC4gV2UgaWdub3JlIHRoZXNlIGV2ZW50cyBzbyB0aGV5IGRvbid0XG4gIC8vIGNhdXNlIGtleWJvYXJkIGZvY3VzIHJpbmdzIHRvIGFwcGVhci5cbiAgaWYgKGUudGFyZ2V0ID09PSB3aW5kb3cgfHwgZS50YXJnZXQgPT09IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgYSBmb2N1cyBldmVudCBvY2N1cnMgd2l0aG91dCBhIHByZWNlZGluZyBrZXlib2FyZCBvciBwb2ludGVyIGV2ZW50LCBzd2l0Y2ggdG8gdmlydHVhbCBtb2RhbGl0eS5cbiAgLy8gVGhpcyBvY2N1cnMsIGZvciBleGFtcGxlLCB3aGVuIG5hdmlnYXRpbmcgYSBmb3JtIHdpdGggdGhlIG5leHQvcHJldmlvdXMgYnV0dG9ucyBvbiBpT1MuXG4gIGlmICghaGFzRXZlbnRCZWZvcmVGb2N1cyAmJiAhaGFzQmx1cnJlZFdpbmRvd1JlY2VudGx5KSB7XG4gICAgY3VycmVudE1vZGFsaXR5ID0gJ3ZpcnR1YWwnO1xuICAgIHRyaWdnZXJDaGFuZ2VIYW5kbGVycygndmlydHVhbCcsIGUpO1xuICB9XG5cbiAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IGZhbHNlO1xuICBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlV2luZG93Qmx1cigpIHtcbiAgLy8gV2hlbiB0aGUgd2luZG93IGlzIGJsdXJyZWQsIHJlc2V0IHN0YXRlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuIHRhYmJpbmcgb3V0IG9mIHRoZSB3aW5kb3csXG4gIC8vIGZvciBleGFtcGxlLCBzaW5jZSBhIHN1YnNlcXVlbnQgZm9jdXMgZXZlbnQgd29uJ3QgYmUgZmlyZWQuXG4gIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSBmYWxzZTtcbiAgaGFzQmx1cnJlZFdpbmRvd1JlY2VudGx5ID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBTZXR1cCBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzIHRvIGNvbnRyb2wgd2hlbiBrZXlib2FyZCBmb2N1cyBzdHlsZSBzaG91bGQgYmUgdmlzaWJsZS5cbiAqL1xuZnVuY3Rpb24gc2V0dXBHbG9iYWxGb2N1c0V2ZW50cygpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IGhhc1NldHVwR2xvYmFsTGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUHJvZ3JhbW1hdGljIGZvY3VzKCkgY2FsbHMgc2hvdWxkbid0IGFmZmVjdCB0aGUgY3VycmVudCBpbnB1dCBtb2RhbGl0eS5cbiAgLy8gSG93ZXZlciwgd2UgbmVlZCB0byBkZXRlY3Qgb3RoZXIgY2FzZXMgd2hlbiBhIGZvY3VzIGV2ZW50IG9jY3VycyB3aXRob3V0XG4gIC8vIGEgcHJlY2VkaW5nIHVzZXIgZXZlbnQgKGUuZy4gc2NyZWVuIHJlYWRlciBmb2N1cykuIE92ZXJyaWRpbmcgdGhlIGZvY3VzXG4gIC8vIG1ldGhvZCBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUgaXMgYSBiaXQgaGFja3ksIGJ1dCB3b3Jrcy5cbiAgbGV0IGZvY3VzID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmZvY3VzO1xuICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IHRydWU7XG4gICAgZm9jdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5Ym9hcmRFdmVudCwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5Ym9hcmRFdmVudCwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tFdmVudCwgdHJ1ZSk7XG5cbiAgLy8gUmVnaXN0ZXIgZm9jdXMgZXZlbnRzIG9uIHRoZSB3aW5kb3cgc28gdGhleSBhcmUgc3VyZSB0byBoYXBwZW5cbiAgLy8gYmVmb3JlIFJlYWN0J3MgZXZlbnQgbGlzdGVuZXJzIChyZWdpc3RlcmVkIG9uIHRoZSBkb2N1bWVudCkuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzRXZlbnQsIHRydWUpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZVdpbmRvd0JsdXIsIGZhbHNlKTtcblxuICBpZiAodHlwZW9mIFBvaW50ZXJFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZVBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBoYW5kbGVQb2ludGVyRXZlbnQsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGhhbmRsZVBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlUG9pbnRlckV2ZW50LCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVQb2ludGVyRXZlbnQsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVQb2ludGVyRXZlbnQsIHRydWUpO1xuICB9XG5cbiAgaGFzU2V0dXBHbG9iYWxMaXN0ZW5lcnMgPSB0cnVlO1xufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgc2V0dXBHbG9iYWxGb2N1c0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKTtcbiAgfVxufVxuXG4vKipcbiAqIElmIHRydWUsIGtleWJvYXJkIGZvY3VzIGlzIHZpc2libGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ZvY3VzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGN1cnJlbnRNb2RhbGl0eSAhPT0gJ3BvaW50ZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW50ZXJhY3Rpb25Nb2RhbGl0eSgpOiBNb2RhbGl0eSB7XG4gIHJldHVybiBjdXJyZW50TW9kYWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnRlcmFjdGlvbk1vZGFsaXR5KG1vZGFsaXR5OiBNb2RhbGl0eSkge1xuICBjdXJyZW50TW9kYWxpdHkgPSBtb2RhbGl0eTtcbiAgdHJpZ2dlckNoYW5nZUhhbmRsZXJzKG1vZGFsaXR5LCBudWxsKTtcbn1cblxuLyoqXG4gKiBLZWVwcyBzdGF0ZSBvZiB0aGUgY3VycmVudCBtb2RhbGl0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyYWN0aW9uTW9kYWxpdHkoKTogTW9kYWxpdHkge1xuICBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCk7XG5cbiAgbGV0IFttb2RhbGl0eSwgc2V0TW9kYWxpdHldID0gdXNlU3RhdGUoY3VycmVudE1vZGFsaXR5KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHNldE1vZGFsaXR5KGN1cnJlbnRNb2RhbGl0eSk7XG4gICAgfTtcblxuICAgIGNoYW5nZUhhbmRsZXJzLmFkZChoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2hhbmdlSGFuZGxlcnMuZGVsZXRlKGhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW9kYWxpdHk7XG59XG5cbi8qKlxuICogSWYgdGhpcyBpcyBhdHRhY2hlZCB0byB0ZXh0IGlucHV0IGNvbXBvbmVudCwgcmV0dXJuIGlmIHRoZSBldmVudCBpcyBhIGZvY3VzIGV2ZW50IChUYWIvRXNjYXBlIGtleXMgcHJlc3NlZCkgc28gdGhhdFxuICogZm9jdXMgdmlzaWJsZSBzdHlsZSBjYW4gYmUgcHJvcGVybHkgc2V0LlxuICovXG5mdW5jdGlvbiBpc0tleWJvYXJkRm9jdXNFdmVudChpc1RleHRJbnB1dDogYm9vbGVhbiwgbW9kYWxpdHk6IE1vZGFsaXR5LCBlOiBIYW5kbGVyRXZlbnQpIHtcbiAgcmV0dXJuICEoaXNUZXh0SW5wdXQgJiYgbW9kYWxpdHkgPT09ICdrZXlib2FyZCcgJiYgZSBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQgJiYgIUZPQ1VTX1ZJU0lCTEVfSU5QVVRfS0VZU1tlLmtleV0pO1xufVxuXG4vKipcbiAqIE1hbmFnZXMgZm9jdXMgdmlzaWJsZSBzdGF0ZSBmb3IgdGhlIHBhZ2UsIGFuZCBzdWJzY3JpYmVzIGluZGl2aWR1YWwgY29tcG9uZW50cyBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVmlzaWJsZShwcm9wczogRm9jdXNWaXNpYmxlUHJvcHMgPSB7fSk6IEZvY3VzVmlzaWJsZVJlc3VsdCB7XG4gIGxldCB7aXNUZXh0SW5wdXQsIGF1dG9Gb2N1c30gPSBwcm9wcztcbiAgbGV0IFtpc0ZvY3VzVmlzaWJsZVN0YXRlLCBzZXRGb2N1c1Zpc2libGVdID0gdXNlU3RhdGUoYXV0b0ZvY3VzIHx8IGlzRm9jdXNWaXNpYmxlKCkpO1xuICB1c2VGb2N1c1Zpc2libGVMaXN0ZW5lcigoaXNGb2N1c1Zpc2libGUpID0+IHtcbiAgICBzZXRGb2N1c1Zpc2libGUoaXNGb2N1c1Zpc2libGUpO1xuICB9LCBbaXNUZXh0SW5wdXRdLCB7aXNUZXh0SW5wdXR9KTtcblxuICByZXR1cm4ge2lzRm9jdXNWaXNpYmxlOiBpc0ZvY3VzVmlzaWJsZVN0YXRlfTtcbn1cblxuLyoqXG4gKiBMaXN0ZW5zIGZvciB0cmlnZ2VyIGNoYW5nZSBhbmQgcmVwb3J0cyBpZiBmb2N1cyBpcyB2aXNpYmxlIChpLmUuLCBtb2RhbGl0eSBpcyBub3QgcG9pbnRlcikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1Zpc2libGVMaXN0ZW5lcihmbjogRm9jdXNWaXNpYmxlSGFuZGxlciwgZGVwczogUmVhZG9ubHlBcnJheTxhbnk+LCBvcHRzPzoge2lzVGV4dElucHV0PzogYm9vbGVhbn0pOiB2b2lkIHtcbiAgc2V0dXBHbG9iYWxGb2N1c0V2ZW50cygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGhhbmRsZXIgPSAobW9kYWxpdHk6IE1vZGFsaXR5LCBlOiBIYW5kbGVyRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNLZXlib2FyZEZvY3VzRXZlbnQob3B0cz8uaXNUZXh0SW5wdXQsIG1vZGFsaXR5LCBlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmbihpc0ZvY3VzVmlzaWJsZSgpKTtcbiAgICB9O1xuICAgIGNoYW5nZUhhbmRsZXJzLmFkZChoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2hhbmdlSGFuZGxlcnMuZGVsZXRlKGhhbmRsZXIpO1xuICAgIH07XG4gIH0sIGRlcHMpO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFBvcnRpb25zIG9mIHRoZSBjb2RlIGluIHRoaXMgZmlsZSBhcmUgYmFzZWQgb24gY29kZSBmcm9tIHJlYWN0LlxuLy8gT3JpZ2luYWwgbGljZW5zaW5nIGZvciB0aGUgZm9sbG93aW5nIGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIE5PVElDRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC90cmVlL2NjN2MxYWVjZTQ2YTZiNjliNDE5NThkNzMxZTBmZDI3Yzk0YmZjNmMvcGFja2FnZXMvcmVhY3QtaW50ZXJhY3Rpb25zXG5cbmltcG9ydCB7Rm9jdXNFdmVudCwgSFRNTEF0dHJpYnV0ZXMsIHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlU3ludGhldGljQmx1ckV2ZW50fSBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIEZvY3VzV2l0aGluUHJvcHMge1xuICAvKiogV2hldGhlciB0aGUgZm9jdXMgd2l0aGluIGV2ZW50cyBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuLFxuICAvKiogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB0YXJnZXQgZWxlbWVudCBvciBhIGRlc2NlbmRhbnQgcmVjZWl2ZXMgZm9jdXMuICovXG4gIG9uRm9jdXNXaXRoaW4/OiAoZTogRm9jdXNFdmVudCkgPT4gdm9pZCxcbiAgLyoqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGFsbCBkZXNjZW5kYW50cyBsb3NlIGZvY3VzLiAqL1xuICBvbkJsdXJXaXRoaW4/OiAoZTogRm9jdXNFdmVudCkgPT4gdm9pZCxcbiAgLyoqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdGhlIGZvY3VzIHdpdGhpbiBzdGF0ZSBjaGFuZ2VzLiAqL1xuICBvbkZvY3VzV2l0aGluQ2hhbmdlPzogKGlzRm9jdXNXaXRoaW46IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIEZvY3VzV2l0aGluUmVzdWx0IHtcbiAgLyoqIFByb3BzIHRvIHNwcmVhZCBvbnRvIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cbiAgZm9jdXNXaXRoaW5Qcm9wczogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+XG59XG5cbi8qKlxuICogSGFuZGxlcyBmb2N1cyBldmVudHMgZm9yIHRoZSB0YXJnZXQgYW5kIGl0cyBkZXNjZW5kYW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzV2l0aGluKHByb3BzOiBGb2N1c1dpdGhpblByb3BzKTogRm9jdXNXaXRoaW5SZXN1bHQge1xuICBsZXQge1xuICAgIGlzRGlzYWJsZWQsXG4gICAgb25CbHVyV2l0aGluLFxuICAgIG9uRm9jdXNXaXRoaW4sXG4gICAgb25Gb2N1c1dpdGhpbkNoYW5nZVxuICB9ID0gcHJvcHM7XG4gIGxldCBzdGF0ZSA9IHVzZVJlZih7XG4gICAgaXNGb2N1c1dpdGhpbjogZmFsc2VcbiAgfSk7XG5cbiAgbGV0IG9uQmx1ciA9IHVzZUNhbGxiYWNrKChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0cmlnZ2VyIG9uQmx1cldpdGhpbiBhbmQgdGhlbiBpbW1lZGlhdGVseSBvbkZvY3VzV2l0aGluIGFnYWluXG4gICAgLy8gd2hlbiBtb3ZpbmcgZm9jdXMgaW5zaWRlIHRoZSBlbGVtZW50LiBPbmx5IHRyaWdnZXIgaWYgdGhlIGN1cnJlbnRUYXJnZXQgZG9lc24ndFxuICAgIC8vIGluY2x1ZGUgdGhlIHJlbGF0ZWRUYXJnZXQgKHdoZXJlIGZvY3VzIGlzIG1vdmluZykuXG4gICAgaWYgKHN0YXRlLmN1cnJlbnQuaXNGb2N1c1dpdGhpbiAmJiAhKGUuY3VycmVudFRhcmdldCBhcyBFbGVtZW50KS5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQgYXMgRWxlbWVudCkpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnQuaXNGb2N1c1dpdGhpbiA9IGZhbHNlO1xuXG4gICAgICBpZiAob25CbHVyV2l0aGluKSB7XG4gICAgICAgIG9uQmx1cldpdGhpbihlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uRm9jdXNXaXRoaW5DaGFuZ2UpIHtcbiAgICAgICAgb25Gb2N1c1dpdGhpbkNoYW5nZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbb25CbHVyV2l0aGluLCBvbkZvY3VzV2l0aGluQ2hhbmdlLCBzdGF0ZV0pO1xuXG4gIGxldCBvblN5bnRoZXRpY0ZvY3VzID0gdXNlU3ludGhldGljQmx1ckV2ZW50KG9uQmx1cik7XG4gIGxldCBvbkZvY3VzID0gdXNlQ2FsbGJhY2soKGU6IEZvY3VzRXZlbnQpID0+IHtcbiAgICBpZiAoIXN0YXRlLmN1cnJlbnQuaXNGb2N1c1dpdGhpbikge1xuICAgICAgaWYgKG9uRm9jdXNXaXRoaW4pIHtcbiAgICAgICAgb25Gb2N1c1dpdGhpbihlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uRm9jdXNXaXRoaW5DaGFuZ2UpIHtcbiAgICAgICAgb25Gb2N1c1dpdGhpbkNoYW5nZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuY3VycmVudC5pc0ZvY3VzV2l0aGluID0gdHJ1ZTtcbiAgICAgIG9uU3ludGhldGljRm9jdXMoZSk7XG4gICAgfVxuICB9LCBbb25Gb2N1c1dpdGhpbiwgb25Gb2N1c1dpdGhpbkNoYW5nZSwgb25TeW50aGV0aWNGb2N1c10pO1xuXG4gIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzV2l0aGluUHJvcHM6IHtcbiAgICAgICAgb25Gb2N1czogbnVsbCxcbiAgICAgICAgb25CbHVyOiBudWxsXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9jdXNXaXRoaW5Qcm9wczoge1xuICAgICAgb25Gb2N1cyxcbiAgICAgIG9uQmx1clxuICAgIH1cbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBQb3J0aW9ucyBvZiB0aGUgY29kZSBpbiB0aGlzIGZpbGUgYXJlIGJhc2VkIG9uIGNvZGUgZnJvbSByZWFjdC5cbi8vIE9yaWdpbmFsIGxpY2Vuc2luZyBmb3IgdGhlIGZvbGxvd2luZyBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBOT1RJQ0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvdHJlZS9jYzdjMWFlY2U0NmE2YjY5YjQxOTU4ZDczMWUwZmQyN2M5NGJmYzZjL3BhY2thZ2VzL3JlYWN0LWludGVyYWN0aW9uc1xuXG5pbXBvcnQge0hvdmVyRXZlbnRzfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCB7SFRNTEF0dHJpYnV0ZXMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvdmVyUHJvcHMgZXh0ZW5kcyBIb3ZlckV2ZW50cyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBob3ZlciBldmVudHMgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBpc0Rpc2FibGVkPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSG92ZXJSZXN1bHQge1xuICAvKiogUHJvcHMgdG8gc3ByZWFkIG9uIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cbiAgaG92ZXJQcm9wczogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LFxuICBpc0hvdmVyZWQ6IGJvb2xlYW5cbn1cblxuLy8gaU9TIGZpcmVzIG9uUG9pbnRlckVudGVyIHR3aWNlOiBvbmNlIHdpdGggcG9pbnRlclR5cGU9XCJ0b3VjaFwiIGFuZCBhZ2FpbiB3aXRoIHBvaW50ZXJUeXBlPVwibW91c2VcIi5cbi8vIFdlIHdhbnQgdG8gaWdub3JlIHRoZXNlIGVtdWxhdGVkIGV2ZW50cyBzbyB0aGV5IGRvIG5vdCB0cmlnZ2VyIGhvdmVyIGJlaGF2aW9yLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMTQ2MDkuXG5sZXQgZ2xvYmFsSWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyA9IGZhbHNlO1xubGV0IGhvdmVyQ291bnQgPSAwO1xuXG5mdW5jdGlvbiBzZXRHbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzKCkge1xuICBnbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gdHJ1ZTtcblxuICAvLyBDbGVhciBnbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzIGFmdGVyIGEgc2hvcnQgdGltZW91dC4gaU9TIGZpcmVzIG9uUG9pbnRlckVudGVyXG4gIC8vIHdpdGggcG9pbnRlclR5cGU9XCJtb3VzZVwiIGltbWVkaWF0ZWx5IGFmdGVyIG9uUG9pbnRlclVwIGFuZCBiZWZvcmUgb25Gb2N1cy4gT24gb3RoZXJcbiAgLy8gZGV2aWNlcyB0aGF0IGRvbid0IGhhdmUgdGhpcyBxdWlyaywgd2UgZG9uJ3Qgd2FudCB0byBpZ25vcmUgYSBtb3VzZSBob3ZlciBzb21ldGltZSBpblxuICAvLyB0aGUgZGlzdGFudCBmdXR1cmUgYmVjYXVzZSBhIHVzZXIgcHJldmlvdXNseSB0b3VjaGVkIHRoZSBlbGVtZW50LlxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBnbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gZmFsc2U7XG4gIH0sIDUwKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlR2xvYmFsUG9pbnRlckV2ZW50KGUpIHtcbiAgaWYgKGUucG9pbnRlclR5cGUgPT09ICd0b3VjaCcpIHtcbiAgICBzZXRHbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBHbG9iYWxUb3VjaEV2ZW50cygpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIFBvaW50ZXJFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVHbG9iYWxQb2ludGVyRXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2V0R2xvYmFsSWdub3JlRW11bGF0ZWRNb3VzZUV2ZW50cyk7XG4gIH1cblxuICBob3ZlckNvdW50Kys7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaG92ZXJDb3VudC0tO1xuICAgIGlmIChob3ZlckNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgaGFuZGxlR2xvYmFsUG9pbnRlckV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzZXRHbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogSGFuZGxlcyBwb2ludGVyIGhvdmVyIGludGVyYWN0aW9ucyBmb3IgYW4gZWxlbWVudC4gTm9ybWFsaXplcyBiZWhhdmlvclxuICogYWNyb3NzIGJyb3dzZXJzIGFuZCBwbGF0Zm9ybXMsIGFuZCBpZ25vcmVzIGVtdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSG92ZXIocHJvcHM6IEhvdmVyUHJvcHMpOiBIb3ZlclJlc3VsdCB7XG4gIGxldCB7XG4gICAgb25Ib3ZlclN0YXJ0LFxuICAgIG9uSG92ZXJDaGFuZ2UsXG4gICAgb25Ib3ZlckVuZCxcbiAgICBpc0Rpc2FibGVkXG4gIH0gPSBwcm9wcztcblxuICBsZXQgW2lzSG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBzdGF0ZSA9IHVzZVJlZih7XG4gICAgaXNIb3ZlcmVkOiBmYWxzZSxcbiAgICBpZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICBwb2ludGVyVHlwZTogJycsXG4gICAgdGFyZ2V0OiBudWxsXG4gIH0pLmN1cnJlbnQ7XG5cbiAgdXNlRWZmZWN0KHNldHVwR2xvYmFsVG91Y2hFdmVudHMsIFtdKTtcblxuICBsZXQge2hvdmVyUHJvcHMsIHRyaWdnZXJIb3ZlckVuZH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdHJpZ2dlckhvdmVyU3RhcnQgPSAoZXZlbnQsIHBvaW50ZXJUeXBlKSA9PiB7XG4gICAgICBzdGF0ZS5wb2ludGVyVHlwZSA9IHBvaW50ZXJUeXBlO1xuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgcG9pbnRlclR5cGUgPT09ICd0b3VjaCcgfHwgc3RhdGUuaXNIb3ZlcmVkIHx8ICFldmVudC5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBzdGF0ZS50YXJnZXQgPSB0YXJnZXQ7XG5cbiAgICAgIGlmIChvbkhvdmVyU3RhcnQpIHtcbiAgICAgICAgb25Ib3ZlclN0YXJ0KHtcbiAgICAgICAgICB0eXBlOiAnaG92ZXJzdGFydCcsXG4gICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgIHBvaW50ZXJUeXBlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob25Ib3ZlckNoYW5nZSkge1xuICAgICAgICBvbkhvdmVyQ2hhbmdlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBzZXRIb3ZlcmVkKHRydWUpO1xuICAgIH07XG5cbiAgICBsZXQgdHJpZ2dlckhvdmVyRW5kID0gKGV2ZW50LCBwb2ludGVyVHlwZSkgPT4ge1xuICAgICAgc3RhdGUucG9pbnRlclR5cGUgPSAnJztcbiAgICAgIHN0YXRlLnRhcmdldCA9IG51bGw7XG5cbiAgICAgIGlmIChwb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyB8fCAhc3RhdGUuaXNIb3ZlcmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuaXNIb3ZlcmVkID0gZmFsc2U7XG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGlmIChvbkhvdmVyRW5kKSB7XG4gICAgICAgIG9uSG92ZXJFbmQoe1xuICAgICAgICAgIHR5cGU6ICdob3ZlcmVuZCcsXG4gICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgIHBvaW50ZXJUeXBlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob25Ib3ZlckNoYW5nZSkge1xuICAgICAgICBvbkhvdmVyQ2hhbmdlKGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgc2V0SG92ZXJlZChmYWxzZSk7XG4gICAgfTtcblxuICAgIGxldCBob3ZlclByb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4gPSB7fTtcblxuICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaG92ZXJQcm9wcy5vblBvaW50ZXJFbnRlciA9IChlKSA9PiB7XG4gICAgICAgIGlmIChnbG9iYWxJZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzICYmIGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2VySG92ZXJTdGFydChlLCBlLnBvaW50ZXJUeXBlKTtcbiAgICAgIH07XG5cbiAgICAgIGhvdmVyUHJvcHMub25Qb2ludGVyTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGlzYWJsZWQgJiYgZS5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgIHRyaWdnZXJIb3ZlckVuZChlLCBlLnBvaW50ZXJUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaG92ZXJQcm9wcy5vblRvdWNoU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSB0cnVlO1xuICAgICAgfTtcblxuICAgICAgaG92ZXJQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIXN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgJiYgIWdsb2JhbElnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMpIHtcbiAgICAgICAgICB0cmlnZ2VySG92ZXJTdGFydChlLCAnbW91c2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIGhvdmVyUHJvcHMub25Nb3VzZUxlYXZlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCFpc0Rpc2FibGVkICYmIGUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICB0cmlnZ2VySG92ZXJFbmQoZSwgJ21vdXNlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7aG92ZXJQcm9wcywgdHJpZ2dlckhvdmVyRW5kfTtcbiAgfSwgW29uSG92ZXJTdGFydCwgb25Ib3ZlckNoYW5nZSwgb25Ib3ZlckVuZCwgaXNEaXNhYmxlZCwgc3RhdGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENhbGwgdGhlIHRyaWdnZXJIb3ZlckVuZCBhcyBzb29uIGFzIGlzRGlzYWJsZWQgY2hhbmdlcyB0byB0cnVlXG4gICAgLy8gU2FmZSB0byBjYWxsIHRyaWdnZXJIb3ZlckVuZCwgaXQgd2lsbCBlYXJseSByZXR1cm4gaWYgd2UgYXJlbid0IGN1cnJlbnRseSBob3ZlcmluZ1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0cmlnZ2VySG92ZXJFbmQoe2N1cnJlbnRUYXJnZXQ6IHN0YXRlLnRhcmdldH0sIHN0YXRlLnBvaW50ZXJUeXBlKTtcbiAgICB9XG4gIH0sIFtpc0Rpc2FibGVkXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBob3ZlclByb3BzLFxuICAgIGlzSG92ZXJlZFxuICB9O1xufVxuXG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gUG9ydGlvbnMgb2YgdGhlIGNvZGUgaW4gdGhpcyBmaWxlIGFyZSBiYXNlZCBvbiBjb2RlIGZyb20gcmVhY3QuXG4vLyBPcmlnaW5hbCBsaWNlbnNpbmcgZm9yIHRoZSBmb2xsb3dpbmcgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTk9USUNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3RyZWUvY2M3YzFhZWNlNDZhNmI2OWI0MTk1OGQ3MzFlMGZkMjdjOTRiZmM2Yy9wYWNrYWdlcy9yZWFjdC1pbnRlcmFjdGlvbnNcblxuaW1wb3J0IHtSZWZPYmplY3QsIFN5bnRoZXRpY0V2ZW50LCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSW50ZXJhY3RPdXRzaWRlUHJvcHMge1xuICByZWY6IFJlZk9iamVjdDxFbGVtZW50PixcbiAgb25JbnRlcmFjdE91dHNpZGU/OiAoZTogU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gIG9uSW50ZXJhY3RPdXRzaWRlU3RhcnQ/OiAoZTogU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnRlcmFjdCBvdXRzaWRlIGV2ZW50cyBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbi8qKlxuICogRXhhbXBsZSwgdXNlZCBpbiBjb21wb25lbnRzIGxpa2UgRGlhbG9ncyBhbmQgUG9wb3ZlcnMgc28gdGhleSBjYW4gY2xvc2VcbiAqIHdoZW4gYSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcmFjdE91dHNpZGUocHJvcHM6IEludGVyYWN0T3V0c2lkZVByb3BzKSB7XG4gIGxldCB7cmVmLCBvbkludGVyYWN0T3V0c2lkZSwgaXNEaXNhYmxlZCwgb25JbnRlcmFjdE91dHNpZGVTdGFydH0gPSBwcm9wcztcbiAgbGV0IHN0YXRlUmVmID0gdXNlUmVmKHtcbiAgICBpc1BvaW50ZXJEb3duOiBmYWxzZSxcbiAgICBpZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICBvbkludGVyYWN0T3V0c2lkZSxcbiAgICBvbkludGVyYWN0T3V0c2lkZVN0YXJ0XG4gIH0pO1xuICBsZXQgc3RhdGUgPSBzdGF0ZVJlZi5jdXJyZW50O1xuICBzdGF0ZS5vbkludGVyYWN0T3V0c2lkZSA9IG9uSW50ZXJhY3RPdXRzaWRlO1xuICBzdGF0ZS5vbkludGVyYWN0T3V0c2lkZVN0YXJ0ID0gb25JbnRlcmFjdE91dHNpZGVTdGFydDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG9uUG9pbnRlckRvd24gPSAoZSkgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRFdmVudChlLCByZWYpICYmIHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5vbkludGVyYWN0T3V0c2lkZVN0YXJ0KSB7XG4gICAgICAgICAgc3RhdGUub25JbnRlcmFjdE91dHNpZGVTdGFydChlKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pc1BvaW50ZXJEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVXNlIHBvaW50ZXIgZXZlbnRzIGlmIGF2YWlsYWJsZS4gT3RoZXJ3aXNlLCBmYWxsIGJhY2sgdG8gbW91c2UgYW5kIHRvdWNoIGV2ZW50cy5cbiAgICBpZiAodHlwZW9mIFBvaW50ZXJFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBvblBvaW50ZXJVcCA9IChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5pc1BvaW50ZXJEb3duICYmIHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlICYmIGlzVmFsaWRFdmVudChlLCByZWYpKSB7XG4gICAgICAgICAgc3RhdGUuaXNQb2ludGVyRG93biA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBjaGFuZ2luZyB0aGVzZSB0byBjYXB0dXJlIHBoYXNlIGZpeGVkIGNvbWJvYm94XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Qb2ludGVyVXAsIHRydWUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvblBvaW50ZXJVcCwgdHJ1ZSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLmlnbm9yZUVtdWxhdGVkTW91c2VFdmVudHMpIHtcbiAgICAgICAgICBzdGF0ZS5pZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuaXNQb2ludGVyRG93biAmJiBzdGF0ZS5vbkludGVyYWN0T3V0c2lkZSAmJiBpc1ZhbGlkRXZlbnQoZSwgcmVmKSkge1xuICAgICAgICAgIHN0YXRlLmlzUG9pbnRlckRvd24gPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5vbkludGVyYWN0T3V0c2lkZShlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IG9uVG91Y2hFbmQgPSAoZSkgPT4ge1xuICAgICAgICBzdGF0ZS5pZ25vcmVFbXVsYXRlZE1vdXNlRXZlbnRzID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlLm9uSW50ZXJhY3RPdXRzaWRlICYmIHN0YXRlLmlzUG9pbnRlckRvd24gJiYgaXNWYWxpZEV2ZW50KGUsIHJlZikpIHtcbiAgICAgICAgICBzdGF0ZS5pc1BvaW50ZXJEb3duID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUub25JbnRlcmFjdE91dHNpZGUoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIHRydWUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCB0cnVlKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcmVmLCBzdGF0ZSwgaXNEaXNhYmxlZF0pO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRXZlbnQoZXZlbnQsIHJlZikge1xuICBpZiAoZXZlbnQuYnV0dG9uID4gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlmIHRoZSBldmVudCB0YXJnZXQgaXMgbm8gbG9uZ2VyIGluIHRoZSBkb2N1bWVudFxuICBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgY29uc3Qgb3duZXJEb2N1bWVudCA9IGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50O1xuICAgIGlmICghb3duZXJEb2N1bWVudCB8fCAhb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0Jhc2VFdmVudH0gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5pbXBvcnQge1N5bnRoZXRpY0V2ZW50fSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB3cmFwcyBhIFJlYWN0IGV2ZW50IGhhbmRsZXIgdG8gbWFrZSBzdG9wUHJvcGFnYXRpb24gdGhlIGRlZmF1bHQsIGFuZCBzdXBwb3J0IGNvbnRpbnVlUHJvcGFnYXRpb24gaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50SGFuZGxlcjxUIGV4dGVuZHMgU3ludGhldGljRXZlbnQ+KGhhbmRsZXI6IChlOiBCYXNlRXZlbnQ8VD4pID0+IHZvaWQpOiAoZTogVCkgPT4gdm9pZCB7XG4gIGlmICghaGFuZGxlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBzaG91bGRTdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICByZXR1cm4gKGU6IFQpID0+IHtcbiAgICBsZXQgZXZlbnQ6IEJhc2VFdmVudDxUPiA9IHtcbiAgICAgIC4uLmUsXG4gICAgICBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIGlzRGVmYXVsdFByZXZlbnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGUuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgICB9LFxuICAgICAgc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdzdG9wUHJvcGFnYXRpb24gaXMgbm93IHRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvciBldmVudHMgaW4gUmVhY3QgU3BlY3RydW0uIFlvdSBjYW4gdXNlIGNvbnRpbnVlUHJvcGFnYXRpb24oKSB0byByZXZlcnQgdGhpcyBiZWhhdmlvci4nKTtcbiAgICAgIH0sXG4gICAgICBjb250aW51ZVByb3BhZ2F0aW9uKCkge1xuICAgICAgICBzaG91bGRTdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaGFuZGxlcihldmVudCk7XG5cbiAgICBpZiAoc2hvdWxkU3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge2NyZWF0ZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi9jcmVhdGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHtIVE1MQXR0cmlidXRlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtLZXlib2FyZEV2ZW50c30gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5Ym9hcmRQcm9wcyBleHRlbmRzIEtleWJvYXJkRXZlbnRzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIGtleWJvYXJkIGV2ZW50cyBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBLZXlib2FyZFJlc3VsdCB7XG4gIC8qKiBQcm9wcyB0byBzcHJlYWQgb250byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG4gIGtleWJvYXJkUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PlxufVxuXG4vKipcbiAqIEhhbmRsZXMga2V5Ym9hcmQgaW50ZXJhY3Rpb25zIGZvciBhIGZvY3VzYWJsZSBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlS2V5Ym9hcmQocHJvcHM6IEtleWJvYXJkUHJvcHMpOiBLZXlib2FyZFJlc3VsdCB7XG4gIHJldHVybiB7XG4gICAga2V5Ym9hcmRQcm9wczogcHJvcHMuaXNEaXNhYmxlZCA/IHt9IDoge1xuICAgICAgb25LZXlEb3duOiBjcmVhdGVFdmVudEhhbmRsZXIocHJvcHMub25LZXlEb3duKSxcbiAgICAgIG9uS2V5VXA6IGNyZWF0ZUV2ZW50SGFuZGxlcihwcm9wcy5vbktleVVwKVxuICAgIH1cbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge2Rpc2FibGVUZXh0U2VsZWN0aW9uLCByZXN0b3JlVGV4dFNlbGVjdGlvbn0gIGZyb20gJy4vdGV4dFNlbGVjdGlvbic7XG5pbXBvcnQge01vdmVFdmVudHMsIFBvaW50ZXJUeXBlfSBmcm9tICdAcmVhY3QtdHlwZXMvc2hhcmVkJztcbmltcG9ydCBSZWFjdCwge0hUTUxBdHRyaWJ1dGVzLCB1c2VNZW1vLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlR2xvYmFsTGlzdGVuZXJzfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5cbmludGVyZmFjZSBNb3ZlUmVzdWx0IHtcbiAgLyoqIFByb3BzIHRvIHNwcmVhZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG4gIG1vdmVQcm9wczogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+XG59XG5cbmludGVyZmFjZSBFdmVudEJhc2Uge1xuICBzaGlmdEtleTogYm9vbGVhbixcbiAgY3RybEtleTogYm9vbGVhbixcbiAgbWV0YUtleTogYm9vbGVhbixcbiAgYWx0S2V5OiBib29sZWFuXG59XG5cbi8qKlxuICogSGFuZGxlcyBtb3ZlIGludGVyYWN0aW9ucyBhY3Jvc3MgbW91c2UsIHRvdWNoLCBhbmQga2V5Ym9hcmQsIGluY2x1ZGluZyBkcmFnZ2luZyB3aXRoXG4gKiB0aGUgbW91c2Ugb3IgdG91Y2gsIGFuZCB1c2luZyB0aGUgYXJyb3cga2V5cy4gTm9ybWFsaXplcyBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMgYW5kXG4gKiBwbGF0Zm9ybXMsIGFuZCBpZ25vcmVzIGVtdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTW92ZShwcm9wczogTW92ZUV2ZW50cyk6IE1vdmVSZXN1bHQge1xuICBsZXQge29uTW92ZVN0YXJ0LCBvbk1vdmUsIG9uTW92ZUVuZH0gPSBwcm9wcztcblxuICBsZXQgc3RhdGUgPSB1c2VSZWY8e1xuICAgIGRpZE1vdmU6IGJvb2xlYW4sXG4gICAgbGFzdFBvc2l0aW9uOiB7cGFnZVg6IG51bWJlciwgcGFnZVk6IG51bWJlcn0gfCBudWxsLFxuICAgIGlkOiBudW1iZXIgfCBudWxsXG4gIH0+KHtkaWRNb3ZlOiBmYWxzZSwgbGFzdFBvc2l0aW9uOiBudWxsLCBpZDogbnVsbH0pO1xuXG4gIGxldCB7YWRkR2xvYmFsTGlzdGVuZXIsIHJlbW92ZUdsb2JhbExpc3RlbmVyfSA9IHVzZUdsb2JhbExpc3RlbmVycygpO1xuXG4gIGxldCBtb3ZlUHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgbW92ZVByb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4gPSB7fTtcblxuICAgIGxldCBzdGFydCA9ICgpID0+IHtcbiAgICAgIGRpc2FibGVUZXh0U2VsZWN0aW9uKCk7XG4gICAgICBzdGF0ZS5jdXJyZW50LmRpZE1vdmUgPSBmYWxzZTtcbiAgICB9O1xuICAgIGxldCBtb3ZlID0gKG9yaWdpbmFsRXZlbnQ6IEV2ZW50QmFzZSwgcG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlLCBkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChkZWx0YVggPT09IDAgJiYgZGVsdGFZID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0ZS5jdXJyZW50LmRpZE1vdmUpIHtcbiAgICAgICAgc3RhdGUuY3VycmVudC5kaWRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgb25Nb3ZlU3RhcnQ/Lih7XG4gICAgICAgICAgdHlwZTogJ21vdmVzdGFydCcsXG4gICAgICAgICAgcG9pbnRlclR5cGUsXG4gICAgICAgICAgc2hpZnRLZXk6IG9yaWdpbmFsRXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgbWV0YUtleTogb3JpZ2luYWxFdmVudC5tZXRhS2V5LFxuICAgICAgICAgIGN0cmxLZXk6IG9yaWdpbmFsRXZlbnQuY3RybEtleSxcbiAgICAgICAgICBhbHRLZXk6IG9yaWdpbmFsRXZlbnQuYWx0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgb25Nb3ZlKHtcbiAgICAgICAgdHlwZTogJ21vdmUnLFxuICAgICAgICBwb2ludGVyVHlwZSxcbiAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICBzaGlmdEtleTogb3JpZ2luYWxFdmVudC5zaGlmdEtleSxcbiAgICAgICAgbWV0YUtleTogb3JpZ2luYWxFdmVudC5tZXRhS2V5LFxuICAgICAgICBjdHJsS2V5OiBvcmlnaW5hbEV2ZW50LmN0cmxLZXksXG4gICAgICAgIGFsdEtleTogb3JpZ2luYWxFdmVudC5hbHRLZXlcbiAgICAgIH0pO1xuICAgIH07XG4gICAgbGV0IGVuZCA9IChvcmlnaW5hbEV2ZW50OiBFdmVudEJhc2UsIHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSkgPT4ge1xuICAgICAgcmVzdG9yZVRleHRTZWxlY3Rpb24oKTtcbiAgICAgIGlmIChzdGF0ZS5jdXJyZW50LmRpZE1vdmUpIHtcbiAgICAgICAgb25Nb3ZlRW5kPy4oe1xuICAgICAgICAgIHR5cGU6ICdtb3ZlZW5kJyxcbiAgICAgICAgICBwb2ludGVyVHlwZSxcbiAgICAgICAgICBzaGlmdEtleTogb3JpZ2luYWxFdmVudC5zaGlmdEtleSxcbiAgICAgICAgICBtZXRhS2V5OiBvcmlnaW5hbEV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgY3RybEtleTogb3JpZ2luYWxFdmVudC5jdHJsS2V5LFxuICAgICAgICAgIGFsdEtleTogb3JpZ2luYWxFdmVudC5hbHRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IG9uTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgbW92ZShlLCAnbW91c2UnLCBlLnBhZ2VYIC0gc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24ucGFnZVgsIGUucGFnZVkgLSBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbi5wYWdlWSk7XG4gICAgICAgICAgc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24gPSB7cGFnZVg6IGUucGFnZVgsIHBhZ2VZOiBlLnBhZ2VZfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxldCBvbk1vdXNlVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBlbmQoZSwgJ21vdXNlJyk7XG4gICAgICAgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlKTtcbiAgICAgICAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBtb3ZlUHJvcHMub25Nb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uID0ge3BhZ2VYOiBlLnBhZ2VYLCBwYWdlWTogZS5wYWdlWX07XG4gICAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlKTtcbiAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxldCBvblRvdWNoTW92ZSA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGxldCB0b3VjaCA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXS5maW5kSW5kZXgoKHtpZGVudGlmaWVyfSkgPT4gaWRlbnRpZmllciA9PT0gc3RhdGUuY3VycmVudC5pZCk7XG4gICAgICAgIGlmICh0b3VjaCA+PSAwKSB7XG4gICAgICAgICAgbGV0IHtwYWdlWCwgcGFnZVl9ID0gZS5jaGFuZ2VkVG91Y2hlc1t0b3VjaF07XG4gICAgICAgICAgbW92ZShlLCAndG91Y2gnLCBwYWdlWCAtIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uLnBhZ2VYLCBwYWdlWSAtIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uLnBhZ2VZKTtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbiA9IHtwYWdlWCwgcGFnZVl9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbGV0IG9uVG91Y2hFbmQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBsZXQgdG91Y2ggPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc10uZmluZEluZGV4KCh7aWRlbnRpZmllcn0pID0+IGlkZW50aWZpZXIgPT09IHN0YXRlLmN1cnJlbnQuaWQpO1xuICAgICAgICBpZiAodG91Y2ggPj0gMCkge1xuICAgICAgICAgIGVuZChlLCAndG91Y2gnKTtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50LmlkID0gbnVsbDtcbiAgICAgICAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcih3aW5kb3csICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICAgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIod2luZG93LCAndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgICAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcih3aW5kb3csICd0b3VjaGNhbmNlbCcsIG9uVG91Y2hFbmQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbW92ZVByb3BzLm9uVG91Y2hTdGFydCA9IChlOiBSZWFjdC5Ub3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA9PT0gMCB8fCBzdGF0ZS5jdXJyZW50LmlkICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge3BhZ2VYLCBwYWdlWSwgaWRlbnRpZmllcn0gPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBzdGFydCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN0YXRlLmN1cnJlbnQubGFzdFBvc2l0aW9uID0ge3BhZ2VYLCBwYWdlWX07XG4gICAgICAgIHN0YXRlLmN1cnJlbnQuaWQgPSBpZGVudGlmaWVyO1xuICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgICAgYWRkR2xvYmFsTGlzdGVuZXIod2luZG93LCAndG91Y2hjYW5jZWwnLCBvblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgb25Qb2ludGVyTW92ZSA9IChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUucG9pbnRlcklkID09PSBzdGF0ZS5jdXJyZW50LmlkKSB7XG4gICAgICAgICAgbGV0IHBvaW50ZXJUeXBlID0gKGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJykgYXMgUG9pbnRlclR5cGU7XG5cbiAgICAgICAgICAvLyBQcm9ibGVtcyB3aXRoIFBvaW50ZXJFdmVudCNtb3ZlbWVudFgvbW92ZW1lbnRZOlxuICAgICAgICAgIC8vIDEuIGl0IGlzIGFsd2F5cyAwIG9uIG1hY09TIFNhZmFyaS5cbiAgICAgICAgICAvLyAyLiBPbiBDaHJvbWUgQW5kcm9pZCwgaXQncyBzY2FsZWQgYnkgZGV2aWNlUGl4ZWxSYXRpbywgYnV0IG5vdCBvbiBDaHJvbWUgbWFjT1NcbiAgICAgICAgICBtb3ZlKGUsIHBvaW50ZXJUeXBlLCBlLnBhZ2VYIC0gc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24ucGFnZVgsIGUucGFnZVkgLSBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbi5wYWdlWSk7XG4gICAgICAgICAgc3RhdGUuY3VycmVudC5sYXN0UG9zaXRpb24gPSB7cGFnZVg6IGUucGFnZVgsIHBhZ2VZOiBlLnBhZ2VZfTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IG9uUG9pbnRlclVwID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5wb2ludGVySWQgPT09IHN0YXRlLmN1cnJlbnQuaWQpIHtcbiAgICAgICAgICBsZXQgcG9pbnRlclR5cGUgPSAoZS5wb2ludGVyVHlwZSB8fCAnbW91c2UnKSBhcyBQb2ludGVyVHlwZTtcbiAgICAgICAgICBlbmQoZSwgcG9pbnRlclR5cGUpO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnQuaWQgPSBudWxsO1xuICAgICAgICAgIHJlbW92ZUdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UpO1xuICAgICAgICAgIHJlbW92ZUdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCBmYWxzZSk7XG4gICAgICAgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXIod2luZG93LCAncG9pbnRlcmNhbmNlbCcsIG9uUG9pbnRlclVwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIG1vdmVQcm9wcy5vblBvaW50ZXJEb3duID0gKGU6IFJlYWN0LlBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDAgJiYgc3RhdGUuY3VycmVudC5pZCA9PSBudWxsKSB7XG4gICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50Lmxhc3RQb3NpdGlvbiA9IHtwYWdlWDogZS5wYWdlWCwgcGFnZVk6IGUucGFnZVl9O1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnQuaWQgPSBlLnBvaW50ZXJJZDtcbiAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUsIGZhbHNlKTtcbiAgICAgICAgICBhZGRHbG9iYWxMaXN0ZW5lcih3aW5kb3csICdwb2ludGVydXAnLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3BvaW50ZXJjYW5jZWwnLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCB0cmlnZ2VyS2V5Ym9hcmRNb3ZlID0gKGU6IEV2ZW50QmFzZSwgZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyKSA9PiB7XG4gICAgICBzdGFydCgpO1xuICAgICAgbW92ZShlLCAna2V5Ym9hcmQnLCBkZWx0YVgsIGRlbHRhWSk7XG4gICAgICBlbmQoZSwgJ2tleWJvYXJkJyk7XG4gICAgfTtcblxuICAgIG1vdmVQcm9wcy5vbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlICdMZWZ0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0cmlnZ2VyS2V5Ym9hcmRNb3ZlKGUsIC0xLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUmlnaHQnOlxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0cmlnZ2VyS2V5Ym9hcmRNb3ZlKGUsIDEsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVcCc6XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRyaWdnZXJLZXlib2FyZE1vdmUoZSwgMCwgLTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEb3duJzpcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0cmlnZ2VyS2V5Ym9hcmRNb3ZlKGUsIDAsIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW92ZVByb3BzO1xuICB9LCBbc3RhdGUsIG9uTW92ZVN0YXJ0LCBvbk1vdmUsIG9uTW92ZUVuZCwgYWRkR2xvYmFsTGlzdGVuZXIsIHJlbW92ZUdsb2JhbExpc3RlbmVyXSk7XG5cbiAgcmV0dXJuIHttb3ZlUHJvcHN9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIxIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7UmVmT2JqZWN0LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTY3JvbGxFdmVudHN9IGZyb20gJ0ByZWFjdC10eXBlcy9zaGFyZWQnO1xuaW1wb3J0IHt1c2VFdmVudH0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbFdoZWVsUHJvcHMgZXh0ZW5kcyBTY3JvbGxFdmVudHMge1xuICAvKiogV2hldGhlciB0aGUgc2Nyb2xsIGxpc3RlbmVyIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuLy8gc2Nyb2xsIHdoZWVsIG5lZWRzIHRvIGJlIGFkZGVkIG5vdCBwYXNzaXZlbHkgc28gaXQncyBjYW5jZWxhYmxlLCBzbWFsbCBoZWxwZXIgaG9vayB0byByZW1lbWJlciB0aGF0XG5leHBvcnQgZnVuY3Rpb24gdXNlU2Nyb2xsV2hlZWwocHJvcHM6IFNjcm9sbFdoZWVsUHJvcHMsIHJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IHZvaWQge1xuICBsZXQge29uU2Nyb2xsLCBpc0Rpc2FibGVkfSA9IHByb3BzO1xuICBsZXQgb25TY3JvbGxIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAvLyBJZiB0aGUgY3RybEtleSBpcyBwcmVzc2VkLCB0aGlzIGlzIGEgem9vbSBldmVudCwgZG8gbm90aGluZy5cbiAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3RvcCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChvblNjcm9sbCkge1xuICAgICAgb25TY3JvbGwoe2RlbHRhWDogZS5kZWx0YVgsIGRlbHRhWTogZS5kZWx0YVl9KTtcbiAgICB9XG4gIH0sIFtvblNjcm9sbF0pO1xuXG4gIHVzZUV2ZW50KHJlZiwgJ3doZWVsJywgaXNEaXNhYmxlZCA/IG51bGwgOiBvblNjcm9sbEhhbmRsZXIpO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7SFRNTEF0dHJpYnV0ZXMsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb25nUHJlc3NFdmVudH0gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5pbXBvcnQge21lcmdlUHJvcHMsIHVzZURlc2NyaXB0aW9uLCB1c2VHbG9iYWxMaXN0ZW5lcnN9IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcbmltcG9ydCB7dXNlUHJlc3N9IGZyb20gJy4vdXNlUHJlc3MnO1xuXG5pbnRlcmZhY2UgTG9uZ1ByZXNzUHJvcHMge1xuICAvKiogV2hldGhlciBsb25nIHByZXNzIGV2ZW50cyBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuLFxuICAvKiogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbG9uZyBwcmVzcyBpbnRlcmFjdGlvbiBzdGFydHMuICovXG4gIG9uTG9uZ1ByZXNzU3RhcnQ/OiAoZTogTG9uZ1ByZXNzRXZlbnQpID0+IHZvaWQsXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBsb25nIHByZXNzIGludGVyYWN0aW9uIGVuZHMsIGVpdGhlclxuICAgKiBvdmVyIHRoZSB0YXJnZXQgb3Igd2hlbiB0aGUgcG9pbnRlciBsZWF2ZXMgdGhlIHRhcmdldC5cbiAgICovXG4gIG9uTG9uZ1ByZXNzRW5kPzogKGU6IExvbmdQcmVzc0V2ZW50KSA9PiB2b2lkLFxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB0aHJlc2hvbGQgdGltZSBpcyBtZXQgd2hpbGVcbiAgICogdGhlIHByZXNzIGlzIG92ZXIgdGhlIHRhcmdldC5cbiAgICovXG4gIG9uTG9uZ1ByZXNzPzogKGU6IExvbmdQcmVzc0V2ZW50KSA9PiB2b2lkLFxuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSB0cmlnZ2VyaW5nIGEgbG9uZyBwcmVzcy5cbiAgICogQGRlZmF1bHQgNTAwbXNcbiAgICovXG4gIHRocmVzaG9sZD86IG51bWJlcixcbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gZm9yIGFzc2lzdGl2ZSB0ZWNob2xvZ3kgdXNlcnMgaW5kaWNhdGluZyB0aGF0IGEgbG9uZyBwcmVzc1xuICAgKiBhY3Rpb24gaXMgYXZhaWxhYmxlLCBlLmcuIFwiTG9uZyBwcmVzcyB0byBvcGVuIG1lbnVcIi5cbiAgICovXG4gIGFjY2Vzc2liaWxpdHlEZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgTG9uZ1ByZXNzUmVzdWx0IHtcbiAgLyoqIFByb3BzIHRvIHNwcmVhZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG4gIGxvbmdQcmVzc1Byb3BzOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD5cbn1cblxuY29uc3QgREVGQVVMVF9USFJFU0hPTEQgPSA1MDA7XG5cbi8qKlxuICogSGFuZGxlcyBsb25nIHByZXNzIGludGVyYWN0aW9ucyBhY3Jvc3MgbW91c2UgYW5kIHRvdWNoIGRldmljZXMuIFN1cHBvcnRzIGEgY3VzdG9taXphYmxlIHRpbWUgdGhyZXNob2xkLFxuICogYWNjZXNzaWJpbGl0eSBkZXNjcmlwdGlvbiwgYW5kIG5vcm1hbGl6ZXMgYmVoYXZpb3IgYWNyb3NzIGJyb3dzZXJzIGFuZCBkZXZpY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9uZ1ByZXNzKHByb3BzOiBMb25nUHJlc3NQcm9wcyk6IExvbmdQcmVzc1Jlc3VsdCB7XG4gIGxldCB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICBvbkxvbmdQcmVzc1N0YXJ0LFxuICAgIG9uTG9uZ1ByZXNzRW5kLFxuICAgIG9uTG9uZ1ByZXNzLFxuICAgIHRocmVzaG9sZCA9IERFRkFVTFRfVEhSRVNIT0xELFxuICAgIGFjY2Vzc2liaWxpdHlEZXNjcmlwdGlvblxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdGltZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHthZGRHbG9iYWxMaXN0ZW5lciwgcmVtb3ZlR2xvYmFsTGlzdGVuZXJ9ID0gdXNlR2xvYmFsTGlzdGVuZXJzKCk7XG5cbiAgbGV0IHtwcmVzc1Byb3BzfSA9IHVzZVByZXNzKHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIG9uUHJlc3NTdGFydChlKSB7XG4gICAgICBpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJyB8fCBlLnBvaW50ZXJUeXBlID09PSAndG91Y2gnKSB7XG4gICAgICAgIGlmIChvbkxvbmdQcmVzc1N0YXJ0KSB7XG4gICAgICAgICAgb25Mb25nUHJlc3NTdGFydCh7XG4gICAgICAgICAgICAuLi5lLFxuICAgICAgICAgICAgdHlwZTogJ2xvbmdwcmVzc3N0YXJ0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZVJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gUHJldmVudCBvdGhlciB1c2VQcmVzcyBoYW5kbGVycyBmcm9tIGFsc28gaGFuZGxpbmcgdGhpcyBldmVudC5cbiAgICAgICAgICBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBQb2ludGVyRXZlbnQoJ3BvaW50ZXJjYW5jZWwnLCB7YnViYmxlczogdHJ1ZX0pKTtcbiAgICAgICAgICBpZiAob25Mb25nUHJlc3MpIHtcbiAgICAgICAgICAgIG9uTG9uZ1ByZXNzKHtcbiAgICAgICAgICAgICAgLi4uZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2xvbmdwcmVzcydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aW1lUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9LCB0aHJlc2hvbGQpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgY29udGV4dCBtZW51LCB3aGljaCBtYXkgYmUgb3BlbmVkIG9uIGxvbmcgcHJlc3Mgb24gdG91Y2ggZGV2aWNlc1xuICAgICAgICBpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJykge1xuICAgICAgICAgIGxldCBvbkNvbnRleHRNZW51ID0gZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKGUudGFyZ2V0LCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgIGFkZEdsb2JhbExpc3RlbmVyKHdpbmRvdywgJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vIElmIG5vIGNvbnRleHRtZW51IGV2ZW50IGlzIGZpcmVkIHF1aWNrbHkgYWZ0ZXIgcG9pbnRlcnVwLCByZW1vdmUgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgIC8vIHNvIGZ1dHVyZSBjb250ZXh0IG1lbnUgZXZlbnRzIG91dHNpZGUgYSBsb25nIHByZXNzIGFyZSBub3QgcHJldmVudGVkLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbW92ZUdsb2JhbExpc3RlbmVyKGUudGFyZ2V0LCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51KTtcbiAgICAgICAgICAgIH0sIDMwKTtcbiAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvblByZXNzRW5kKGUpIHtcbiAgICAgIGlmICh0aW1lUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVSZWYuY3VycmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkxvbmdQcmVzc0VuZCAmJiAoZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJyB8fCBlLnBvaW50ZXJUeXBlID09PSAndG91Y2gnKSkge1xuICAgICAgICBvbkxvbmdQcmVzc0VuZCh7XG4gICAgICAgICAgLi4uZSxcbiAgICAgICAgICB0eXBlOiAnbG9uZ3ByZXNzZW5kJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxldCBkZXNjcmlwdGlvblByb3BzID0gdXNlRGVzY3JpcHRpb24ob25Mb25nUHJlc3MgJiYgIWlzRGlzYWJsZWQgPyBhY2Nlc3NpYmlsaXR5RGVzY3JpcHRpb24gOiBudWxsKTtcblxuICByZXR1cm4ge1xuICAgIGxvbmdQcmVzc1Byb3BzOiBtZXJnZVByb3BzKHByZXNzUHJvcHMsIGRlc2NyaXB0aW9uUHJvcHMpXG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAnTGljZW5zZScpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICdBUyBJUycgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge2ZvY3VzV2l0aG91dFNjcm9sbGluZywgcnVuQWZ0ZXJUcmFuc2l0aW9ufSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge2dldEludGVyYWN0aW9uTW9kYWxpdHl9IGZyb20gJ0ByZWFjdC1hcmlhL2ludGVyYWN0aW9ucyc7XG5cbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgZm9jdXNlcyBhbiBlbGVtZW50IHdoaWxlIGF2b2lkaW5nIHVuZGVzaXJlZCBzaWRlIGVmZmVjdHMgc3VjaFxuICogYXMgcGFnZSBzY3JvbGxpbmcgYW5kIHNjcmVlbiByZWFkZXIgaXNzdWVzIHdpdGggQ1NTIHRyYW5zaXRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNTYWZlbHkoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgLy8gSWYgdGhlIHVzZXIgaXMgaW50ZXJhY3Rpbmcgd2l0aCBhIHZpcnR1YWwgY3Vyc29yLCBlLmcuIHNjcmVlbiByZWFkZXIsIHRoZW5cbiAgLy8gd2FpdCB1bnRpbCBhZnRlciBhbnkgYW5pbWF0ZWQgdHJhbnNpdGlvbnMgdGhhdCBhcmUgY3VycmVudGx5IG9jY3VycmluZyBvblxuICAvLyB0aGUgcGFnZSBiZWZvcmUgc2hpZnRpbmcgZm9jdXMuIFRoaXMgYXZvaWRzIGlzc3VlcyB3aXRoIFZvaWNlT3ZlciBvbiBpT1NcbiAgLy8gY2F1c2luZyB0aGUgcGFnZSB0byBzY3JvbGwgd2hlbiBtb3ZpbmcgZm9jdXMgaWYgdGhlIGVsZW1lbnQgaXMgdHJhbnNpdGlvbmluZ1xuICAvLyBmcm9tIG9mZiB0aGUgc2NyZWVuLlxuICBpZiAoZ2V0SW50ZXJhY3Rpb25Nb2RhbGl0eSgpID09PSAndmlydHVhbCcpIHtcbiAgICBsZXQgbGFzdEZvY3VzZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBydW5BZnRlclRyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgLy8gSWYgZm9jdXMgZGlkIG5vdCBtb3ZlIGFuZCB0aGUgZWxlbWVudCBpcyBzdGlsbCBpbiB0aGUgZG9jdW1lbnQsIGZvY3VzIGl0LlxuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2VkRWxlbWVudCAmJiBkb2N1bWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICBmb2N1c1dpdGhvdXRTY3JvbGxpbmcoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9jdXNXaXRob3V0U2Nyb2xsaW5nKGVsZW1lbnQpO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjEgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gaXNTdHlsZVZpc2libGUoZWxlbWVudDogRWxlbWVudCkge1xuICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHtkaXNwbGF5LCB2aXNpYmlsaXR5fSA9IGVsZW1lbnQuc3R5bGU7XG5cbiAgbGV0IGlzVmlzaWJsZSA9IChcbiAgICBkaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICB2aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyAmJlxuICAgIHZpc2liaWxpdHkgIT09ICdjb2xsYXBzZSdcbiAgKTtcblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgY29uc3Qge2dldENvbXB1dGVkU3R5bGV9ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIGxldCB7ZGlzcGxheTogY29tcHV0ZWREaXNwbGF5LCB2aXNpYmlsaXR5OiBjb21wdXRlZFZpc2liaWxpdHl9ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlzVmlzaWJsZSA9IChcbiAgICAgIGNvbXB1dGVkRGlzcGxheSAhPT0gJ25vbmUnICYmXG4gICAgICBjb21wdXRlZFZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmXG4gICAgICBjb21wdXRlZFZpc2liaWxpdHkgIT09ICdjb2xsYXBzZSdcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGlzVmlzaWJsZTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVWaXNpYmxlKGVsZW1lbnQ6IEVsZW1lbnQsIGNoaWxkRWxlbWVudD86IEVsZW1lbnQpIHtcbiAgcmV0dXJuIChcbiAgICAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hpZGRlbicpICYmXG4gICAgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdERVRBSUxTJyAmJlxuICAgICAgY2hpbGRFbGVtZW50ICYmXG4gICAgICBjaGlsZEVsZW1lbnQubm9kZU5hbWUgIT09ICdTVU1NQVJZJ1xuICAgICAgPyBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnb3BlbicpXG4gICAgICA6IHRydWUpXG4gICk7XG59XG5cbi8qKlxuICogQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90ZXN0aW5nLWxpYnJhcnkvamVzdC1kb20gYW5kIFxuICogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS10ZXN0LXV0aWxzLW5leHQvLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogQHBhcmFtIGVsZW1lbnQgLSBFbGVtZW50IHRvIGV2YWx1YXRlIGZvciBkaXNwbGF5IG9yIHZpc2liaWxpdHkuXG4gKi8gIFxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGUoZWxlbWVudDogRWxlbWVudCwgY2hpbGRFbGVtZW50PzogRWxlbWVudCkge1xuICByZXR1cm4gKFxuICAgIGVsZW1lbnQubm9kZU5hbWUgIT09ICcjY29tbWVudCcgJiZcbiAgICBpc1N0eWxlVmlzaWJsZShlbGVtZW50KSAmJlxuICAgIGlzQXR0cmlidXRlVmlzaWJsZShlbGVtZW50LCBjaGlsZEVsZW1lbnQpICYmXG4gICAgKCFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNFbGVtZW50VmlzaWJsZShlbGVtZW50LnBhcmVudEVsZW1lbnQsIGVsZW1lbnQpKVxuICApO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Zm9jdXNTYWZlbHl9IGZyb20gJy4vZm9jdXNTYWZlbHknO1xuaW1wb3J0IHtpc0VsZW1lbnRWaXNpYmxlfSBmcm9tICcuL2lzRWxlbWVudFZpc2libGUnO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3ROb2RlLCBSZWZPYmplY3QsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdH0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuXG4vLyBpbXBvcnQge0ZvY3VzU2NvcGUsIHVzZUZvY3VzU2NvcGV9IGZyb20gJ3JlYWN0LWV2ZW50cy9mb2N1cy1zY29wZSc7XG4vLyBleHBvcnQge0ZvY3VzU2NvcGV9O1xuXG5pbnRlcmZhY2UgRm9jdXNTY29wZVByb3BzIHtcbiAgLyoqIFRoZSBjb250ZW50cyBvZiB0aGUgZm9jdXMgc2NvcGUuICovXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGUsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gY29udGFpbiBmb2N1cyBpbnNpZGUgdGhlIHNjb3BlLCBzbyB1c2VycyBjYW5ub3RcbiAgICogbW92ZSBmb2N1cyBvdXRzaWRlLCBmb3IgZXhhbXBsZSBpbiBhIG1vZGFsIGRpYWxvZy5cbiAgICovXG4gIGNvbnRhaW4/OiBib29sZWFuLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlc3RvcmUgZm9jdXMgYmFjayB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkXG4gICAqIHdoZW4gdGhlIGZvY3VzIHNjb3BlIG1vdW50ZWQsIGFmdGVyIHRoZSBmb2N1cyBzY29wZSB1bm1vdW50cy5cbiAgICovXG4gIHJlc3RvcmVGb2N1cz86IGJvb2xlYW4sXG5cbiAgLyoqIFdoZXRoZXIgdG8gYXV0byBmb2N1cyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlIGZvY3VzIHNjb3BlIG9uIG1vdW50LiAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBGb2N1c01hbmFnZXJPcHRpb25zIHtcbiAgLyoqIFRoZSBlbGVtZW50IHRvIHN0YXJ0IHNlYXJjaGluZyBmcm9tLiBUaGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudCBieSBkZWZhdWx0LiAqL1xuICBmcm9tPzogSFRNTEVsZW1lbnQsXG4gIC8qKiBXaGV0aGVyIHRvIG9ubHkgaW5jbHVkZSB0YWJiYWJsZSBlbGVtZW50cywgb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy4gKi9cbiAgdGFiYmFibGU/OiBib29sZWFuLFxuICAvKiogV2hldGhlciBmb2N1cyBzaG91bGQgd3JhcCBhcm91bmQgd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIHNjb3BlLiAqL1xuICB3cmFwPzogYm9vbGVhbixcbiAgLyoqIEEgY2FsbGJhY2sgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZm9jdXNlZC4gKi9cbiAgYWNjZXB0PzogKG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c01hbmFnZXIge1xuICAvKiogTW92ZXMgZm9jdXMgdG8gdGhlIG5leHQgZm9jdXNhYmxlIG9yIHRhYmJhYmxlIGVsZW1lbnQgaW4gdGhlIGZvY3VzIHNjb3BlLiAqL1xuICBmb2N1c05leHQob3B0cz86IEZvY3VzTWFuYWdlck9wdGlvbnMpOiBIVE1MRWxlbWVudCxcbiAgLyoqIE1vdmVzIGZvY3VzIHRvIHRoZSBwcmV2aW91cyBmb2N1c2FibGUgb3IgdGFiYmFibGUgZWxlbWVudCBpbiB0aGUgZm9jdXMgc2NvcGUuICovXG4gIGZvY3VzUHJldmlvdXMob3B0cz86IEZvY3VzTWFuYWdlck9wdGlvbnMpOiBIVE1MRWxlbWVudCxcbiAgLyoqIE1vdmVzIGZvY3VzIHRvIHRoZSBmaXJzdCBmb2N1c2FibGUgb3IgdGFiYmFibGUgZWxlbWVudCBpbiB0aGUgZm9jdXMgc2NvcGUuICovXG4gIGZvY3VzRmlyc3Qob3B0cz86IEZvY3VzTWFuYWdlck9wdGlvbnMpOiBIVE1MRWxlbWVudCxcbiAgICAvKiogTW92ZXMgZm9jdXMgdG8gdGhlIGxhc3QgZm9jdXNhYmxlIG9yIHRhYmJhYmxlIGVsZW1lbnQgaW4gdGhlIGZvY3VzIHNjb3BlLiAqL1xuICBmb2N1c0xhc3Qob3B0cz86IEZvY3VzTWFuYWdlck9wdGlvbnMpOiBIVE1MRWxlbWVudFxufVxuXG50eXBlIFNjb3BlUmVmID0gUmVmT2JqZWN0PEhUTUxFbGVtZW50W10+O1xuaW50ZXJmYWNlIElGb2N1c0NvbnRleHQge1xuICBzY29wZVJlZjogU2NvcGVSZWYsXG4gIGZvY3VzTWFuYWdlcjogRm9jdXNNYW5hZ2VyXG59XG5cbmNvbnN0IEZvY3VzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8SUZvY3VzQ29udGV4dD4obnVsbCk7XG5cbmxldCBhY3RpdmVTY29wZTogU2NvcGVSZWYgPSBudWxsO1xubGV0IHNjb3BlczogTWFwPFNjb3BlUmVmLCBTY29wZVJlZiB8IG51bGw+ID0gbmV3IE1hcCgpO1xuXG4vLyBUaGlzIGlzIGEgaGFja3kgRE9NLWJhc2VkIGltcGxlbWVudGF0aW9uIG9mIGEgRm9jdXNTY29wZSB1bnRpbCB0aGlzIFJGQyBsYW5kcyBpbiBSZWFjdDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDlcbi8vIEZvciBub3csIGl0IHJlbGllcyBvbiB0aGUgRE9NIHRyZWUgb3JkZXIgcmF0aGVyIHRoYW4gdGhlIFJlYWN0IHRyZWUgb3JkZXIsIGFuZCBpcyBwcm9iYWJseVxuLy8gbGVzcyBvcHRpbWl6ZWQgZm9yIHBlcmZvcm1hbmNlLlxuXG4vKipcbiAqIEEgRm9jdXNTY29wZSBtYW5hZ2VzIGZvY3VzIGZvciBpdHMgZGVzY2VuZGFudHMuIEl0IHN1cHBvcnRzIGNvbnRhaW5pbmcgZm9jdXMgaW5zaWRlXG4gKiB0aGUgc2NvcGUsIHJlc3RvcmluZyBmb2N1cyB0byB0aGUgcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgb24gdW5tb3VudCwgYW5kIGF1dG9cbiAqIGZvY3VzaW5nIGNoaWxkcmVuIG9uIG1vdW50LiBJdCBhbHNvIGFjdHMgYXMgYSBjb250YWluZXIgZm9yIGEgcHJvZ3JhbW1hdGljIGZvY3VzXG4gKiBtYW5hZ2VtZW50IGludGVyZmFjZSB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vdmUgZm9jdXMgZm9yd2FyZCBhbmQgYmFjayBpbiByZXNwb25zZVxuICogdG8gdXNlciBldmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBGb2N1c1Njb3BlKHByb3BzOiBGb2N1c1Njb3BlUHJvcHMpIHtcbiAgbGV0IHtjaGlsZHJlbiwgY29udGFpbiwgcmVzdG9yZUZvY3VzLCBhdXRvRm9jdXN9ID0gcHJvcHM7XG4gIGxldCBzdGFydFJlZiA9IHVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XG4gIGxldCBlbmRSZWYgPSB1c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xuICBsZXQgc2NvcGVSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnRbXT4oW10pO1xuICBsZXQgY3R4ID0gdXNlQ29udGV4dChGb2N1c0NvbnRleHQpO1xuICBsZXQgcGFyZW50U2NvcGUgPSBjdHg/LnNjb3BlUmVmO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmluZCBhbGwgcmVuZGVyZWQgbm9kZXMgYmV0d2VlbiB0aGUgc2VudGluZWxzIGFuZCBhZGQgdGhlbSB0byB0aGUgc2NvcGUuXG4gICAgbGV0IG5vZGUgPSBzdGFydFJlZi5jdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IGVuZFJlZi5jdXJyZW50KSB7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgfVxuXG4gICAgc2NvcGVSZWYuY3VycmVudCA9IG5vZGVzO1xuICB9LCBbY2hpbGRyZW4sIHBhcmVudFNjb3BlXSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBzY29wZXMuc2V0KHNjb3BlUmVmLCBwYXJlbnRTY29wZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIFJlc3RvcmUgdGhlIGFjdGl2ZSBzY29wZSBvbiB1bm1vdW50IGlmIHRoaXMgc2NvcGUgb3IgYSBkZXNjZW5kYW50IHNjb3BlIGlzIGFjdGl2ZS5cbiAgICAgIC8vIFBhcmVudCBlZmZlY3QgY2xlYW51cHMgcnVuIGJlZm9yZSBjaGlsZHJlbiwgc28gd2UgbmVlZCB0byBjaGVjayBpZiB0aGVcbiAgICAgIC8vIHBhcmVudCBzY29wZSBhY3R1YWxseSBzdGlsbCBleGlzdHMgYmVmb3JlIHJlc3RvcmluZyB0aGUgYWN0aXZlIHNjb3BlIHRvIGl0LlxuICAgICAgaWYgKFxuICAgICAgICAoc2NvcGVSZWYgPT09IGFjdGl2ZVNjb3BlIHx8IGlzQW5jZXN0b3JTY29wZShzY29wZVJlZiwgYWN0aXZlU2NvcGUpKSAmJlxuICAgICAgICAoIXBhcmVudFNjb3BlIHx8IHNjb3Blcy5oYXMocGFyZW50U2NvcGUpKVxuICAgICAgKSB7XG4gICAgICAgIGFjdGl2ZVNjb3BlID0gcGFyZW50U2NvcGU7XG4gICAgICB9XG4gICAgICBzY29wZXMuZGVsZXRlKHNjb3BlUmVmKTtcbiAgICB9O1xuICB9LCBbc2NvcGVSZWYsIHBhcmVudFNjb3BlXSk7XG5cbiAgdXNlRm9jdXNDb250YWlubWVudChzY29wZVJlZiwgY29udGFpbik7XG4gIHVzZVJlc3RvcmVGb2N1cyhzY29wZVJlZiwgcmVzdG9yZUZvY3VzLCBjb250YWluKTtcbiAgdXNlQXV0b0ZvY3VzKHNjb3BlUmVmLCBhdXRvRm9jdXMpO1xuXG4gIGxldCBmb2N1c01hbmFnZXIgPSBjcmVhdGVGb2N1c01hbmFnZXJGb3JTY29wZShzY29wZVJlZik7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9jdXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2NvcGVSZWYsIGZvY3VzTWFuYWdlcn19PlxuICAgICAgPHNwYW4gZGF0YS1mb2N1cy1zY29wZS1zdGFydCBoaWRkZW4gcmVmPXtzdGFydFJlZn0gLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzcGFuIGRhdGEtZm9jdXMtc2NvcGUtZW5kIGhpZGRlbiByZWY9e2VuZFJlZn0gLz5cbiAgICA8L0ZvY3VzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgRm9jdXNNYW5hZ2VyIGludGVyZmFjZSBmb3IgdGhlIHBhcmVudCBGb2N1c1Njb3BlLlxuICogQSBGb2N1c01hbmFnZXIgY2FuIGJlIHVzZWQgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZvY3VzIHdpdGhpblxuICogYSBGb2N1c1Njb3BlLCBlLmcuIGluIHJlc3BvbnNlIHRvIHVzZXIgZXZlbnRzIGxpa2Uga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzTWFuYWdlcigpOiBGb2N1c01hbmFnZXIge1xuICByZXR1cm4gdXNlQ29udGV4dChGb2N1c0NvbnRleHQpPy5mb2N1c01hbmFnZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvY3VzTWFuYWdlckZvclNjb3BlKHNjb3BlUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTEVsZW1lbnRbXT4pOiBGb2N1c01hbmFnZXIge1xuICByZXR1cm4ge1xuICAgIGZvY3VzTmV4dChvcHRzOiBGb2N1c01hbmFnZXJPcHRpb25zID0ge30pIHtcbiAgICAgIGxldCBzY29wZSA9IHNjb3BlUmVmLmN1cnJlbnQ7XG4gICAgICBsZXQge2Zyb20sIHRhYmJhYmxlLCB3cmFwfSA9IG9wdHM7XG4gICAgICBsZXQgbm9kZSA9IGZyb20gfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGxldCBzZW50aW5lbCA9IHNjb3BlWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBsZXQgd2Fsa2VyID0gZ2V0Rm9jdXNhYmxlVHJlZVdhbGtlcihnZXRTY29wZVJvb3Qoc2NvcGUpLCB7dGFiYmFibGV9LCBzY29wZSk7XG4gICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBpc0VsZW1lbnRJblNjb3BlKG5vZGUsIHNjb3BlKSA/IG5vZGUgOiBzZW50aW5lbDtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKCFuZXh0Tm9kZSAmJiB3cmFwKSB7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHNlbnRpbmVsO1xuICAgICAgICBuZXh0Tm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgfVxuICAgICAgaWYgKG5leHROb2RlKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudChuZXh0Tm9kZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfSxcbiAgICBmb2N1c1ByZXZpb3VzKG9wdHM6IEZvY3VzTWFuYWdlck9wdGlvbnMgPSB7fSkge1xuICAgICAgbGV0IHNjb3BlID0gc2NvcGVSZWYuY3VycmVudDtcbiAgICAgIGxldCB7ZnJvbSwgdGFiYmFibGUsIHdyYXB9ID0gb3B0cztcbiAgICAgIGxldCBub2RlID0gZnJvbSB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgbGV0IHNlbnRpbmVsID0gc2NvcGVbc2NvcGUubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgbGV0IHdhbGtlciA9IGdldEZvY3VzYWJsZVRyZWVXYWxrZXIoZ2V0U2NvcGVSb290KHNjb3BlKSwge3RhYmJhYmxlfSwgc2NvcGUpO1xuICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gaXNFbGVtZW50SW5TY29wZShub2RlLCBzY29wZSkgPyBub2RlIDogc2VudGluZWw7XG4gICAgICBsZXQgcHJldmlvdXNOb2RlID0gd2Fsa2VyLnByZXZpb3VzTm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKCFwcmV2aW91c05vZGUgJiYgd3JhcCkge1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzZW50aW5lbDtcbiAgICAgICAgcHJldmlvdXNOb2RlID0gd2Fsa2VyLnByZXZpb3VzTm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgfVxuICAgICAgaWYgKHByZXZpb3VzTm9kZSkge1xuICAgICAgICBmb2N1c0VsZW1lbnQocHJldmlvdXNOb2RlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2aW91c05vZGU7XG4gICAgfSxcbiAgICBmb2N1c0ZpcnN0KG9wdHMgPSB7fSkge1xuICAgICAgbGV0IHNjb3BlID0gc2NvcGVSZWYuY3VycmVudDtcbiAgICAgIGxldCB7dGFiYmFibGV9ID0gb3B0cztcbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKGdldFNjb3BlUm9vdChzY29wZSksIHt0YWJiYWJsZX0sIHNjb3BlKTtcbiAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHNjb3BlWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBsZXQgbmV4dE5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChuZXh0Tm9kZSkge1xuICAgICAgICBmb2N1c0VsZW1lbnQobmV4dE5vZGUsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH0sXG4gICAgZm9jdXNMYXN0KG9wdHMgPSB7fSkge1xuICAgICAgbGV0IHNjb3BlID0gc2NvcGVSZWYuY3VycmVudDtcbiAgICAgIGxldCB7dGFiYmFibGV9ID0gb3B0cztcbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKGdldFNjb3BlUm9vdChzY29wZSksIHt0YWJiYWJsZX0sIHNjb3BlKTtcbiAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHNjb3BlW3Njb3BlLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGxldCBwcmV2aW91c05vZGUgPSB3YWxrZXIucHJldmlvdXNOb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAocHJldmlvdXNOb2RlKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudChwcmV2aW91c05vZGUsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZpb3VzTm9kZTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gW1xuICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1oaWRkZW5dKScsXG4gICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJyxcbiAgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsXG4gICdidXR0b246bm90KFtkaXNhYmxlZF0pJyxcbiAgJ2FbaHJlZl0nLFxuICAnYXJlYVtocmVmXScsXG4gICdzdW1tYXJ5JyxcbiAgJ2lmcmFtZScsXG4gICdvYmplY3QnLFxuICAnZW1iZWQnLFxuICAnYXVkaW9bY29udHJvbHNdJyxcbiAgJ3ZpZGVvW2NvbnRyb2xzXScsXG4gICdbY29udGVudGVkaXRhYmxlXSdcbl07XG5cbmNvbnN0IEZPQ1VTQUJMRV9FTEVNRU5UX1NFTEVDVE9SID0gZm9jdXNhYmxlRWxlbWVudHMuam9pbignOm5vdChbaGlkZGVuXSksJykgKyAnLFt0YWJpbmRleF06bm90KFtkaXNhYmxlZF0pOm5vdChbaGlkZGVuXSknO1xuXG5mb2N1c2FibGVFbGVtZW50cy5wdXNoKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFtkaXNhYmxlZF0pJyk7XG5jb25zdCBUQUJCQUJMRV9FTEVNRU5UX1NFTEVDVE9SID0gZm9jdXNhYmxlRWxlbWVudHMuam9pbignOm5vdChbaGlkZGVuXSk6bm90KFt0YWJpbmRleD1cIi0xXCJdKSwnKTtcblxuZnVuY3Rpb24gZ2V0U2NvcGVSb290KHNjb3BlOiBIVE1MRWxlbWVudFtdKSB7XG4gIHJldHVybiBzY29wZVswXS5wYXJlbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB1c2VGb2N1c0NvbnRhaW5tZW50KHNjb3BlUmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnRbXT4sIGNvbnRhaW46IGJvb2xlYW4pIHtcbiAgbGV0IGZvY3VzZWROb2RlID0gdXNlUmVmPEhUTUxFbGVtZW50PigpO1xuXG4gIGxldCByYWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHNjb3BlID0gc2NvcGVSZWYuY3VycmVudDtcbiAgICBpZiAoIWNvbnRhaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIFRhYiBrZXkgdG8gY29udGFpbiBmb2N1cyB3aXRoaW4gdGhlIHNjb3BlXG4gICAgbGV0IG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgIT09ICdUYWInIHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgc2NvcGVSZWYgIT09IGFjdGl2ZVNjb3BlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZvY3VzZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGxldCBzY29wZSA9IHNjb3BlUmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoIWlzRWxlbWVudEluU2NvcGUoZm9jdXNlZEVsZW1lbnQsIHNjb3BlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKGdldFNjb3BlUm9vdChzY29wZSksIHt0YWJiYWJsZTogdHJ1ZX0sIHNjb3BlKTtcbiAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGZvY3VzZWRFbGVtZW50O1xuICAgICAgbGV0IG5leHRFbGVtZW50ID0gKGUuc2hpZnRLZXkgPyB3YWxrZXIucHJldmlvdXNOb2RlKCkgOiB3YWxrZXIubmV4dE5vZGUoKSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoIW5leHRFbGVtZW50KSB7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGUuc2hpZnRLZXkgPyBzY29wZVtzY29wZS5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmcgOiBzY29wZVswXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBuZXh0RWxlbWVudCA9IChlLnNoaWZ0S2V5ID8gd2Fsa2VyLnByZXZpb3VzTm9kZSgpIDogd2Fsa2VyLm5leHROb2RlKCkpICBhcyBIVE1MRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKG5leHRFbGVtZW50KSB7XG4gICAgICAgIGZvY3VzRWxlbWVudChuZXh0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBvbkZvY3VzID0gKGUpID0+IHtcbiAgICAgIC8vIElmIGZvY3VzaW5nIGFuIGVsZW1lbnQgaW4gYSBjaGlsZCBzY29wZSBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBzY29wZSwgdGhlIGNoaWxkIGJlY29tZXMgYWN0aXZlLlxuICAgICAgLy8gTW92aW5nIG91dCBvZiB0aGUgYWN0aXZlIHNjb3BlIHRvIGFuIGFuY2VzdG9yIGlzIG5vdCBhbGxvd2VkLlxuICAgICAgaWYgKCFhY3RpdmVTY29wZSB8fCBpc0FuY2VzdG9yU2NvcGUoYWN0aXZlU2NvcGUsIHNjb3BlUmVmKSkge1xuICAgICAgICBhY3RpdmVTY29wZSA9IHNjb3BlUmVmO1xuICAgICAgICBmb2N1c2VkTm9kZS5jdXJyZW50ID0gZS50YXJnZXQ7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlUmVmID09PSBhY3RpdmVTY29wZSAmJiAhaXNFbGVtZW50SW5DaGlsZFNjb3BlKGUudGFyZ2V0LCBzY29wZVJlZikpIHtcbiAgICAgICAgLy8gSWYgYSBmb2N1cyBldmVudCBvY2N1cnMgb3V0c2lkZSB0aGUgYWN0aXZlIHNjb3BlIChlLmcuIHVzZXIgdGFicyBmcm9tIGJyb3dzZXIgbG9jYXRpb24gYmFyKSxcbiAgICAgICAgLy8gcmVzdG9yZSBmb2N1cyB0byB0aGUgcHJldmlvdXNseSBmb2N1c2VkIG5vZGUgb3IgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQgaW4gdGhlIGFjdGl2ZSBzY29wZS5cbiAgICAgICAgaWYgKGZvY3VzZWROb2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICBmb2N1c2VkTm9kZS5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlU2NvcGUpIHtcbiAgICAgICAgICBmb2N1c0ZpcnN0SW5TY29wZShhY3RpdmVTY29wZS5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzY29wZVJlZiA9PT0gYWN0aXZlU2NvcGUpIHtcbiAgICAgICAgZm9jdXNlZE5vZGUuY3VycmVudCA9IGUudGFyZ2V0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgb25CbHVyID0gKGUpID0+IHtcbiAgICAgIC8vIEZpcmVmb3ggZG9lc24ndCBzaGlmdCBmb2N1cyBiYWNrIHRvIHRoZSBEaWFsb2cgcHJvcGVybHkgd2l0aG91dCB0aGlzXG4gICAgICByYWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vIFVzZSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RlYWQgb2YgZS5yZWxhdGVkVGFyZ2V0IHNvIHdlIGNhbiB0ZWxsIGlmIHVzZXIgY2xpY2tlZCBpbnRvIGlmcmFtZVxuICAgICAgICBpZiAoc2NvcGVSZWYgPT09IGFjdGl2ZVNjb3BlICYmICFpc0VsZW1lbnRJbkNoaWxkU2NvcGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwgc2NvcGVSZWYpKSB7XG4gICAgICAgICAgYWN0aXZlU2NvcGUgPSBzY29wZVJlZjtcbiAgICAgICAgICBmb2N1c2VkTm9kZS5jdXJyZW50ID0gZS50YXJnZXQ7XG4gICAgICAgICAgZm9jdXNlZE5vZGUuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzLCBmYWxzZSk7XG4gICAgc2NvcGUuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXMsIGZhbHNlKSk7XG4gICAgc2NvcGUuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXIsIGZhbHNlKSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzLCBmYWxzZSk7XG4gICAgICBzY29wZS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1cywgZmFsc2UpKTtcbiAgICAgIHNjb3BlLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25CbHVyLCBmYWxzZSkpO1xuICAgIH07XG4gIH0sIFtzY29wZVJlZiwgY29udGFpbl0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJvdy1ib2R5LXN0eWxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZi5jdXJyZW50KTtcbiAgfSwgW3JhZl0pO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnRJbkFueVNjb3BlKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgZm9yIChsZXQgc2NvcGUgb2Ygc2NvcGVzLmtleXMoKSkge1xuICAgIGlmIChpc0VsZW1lbnRJblNjb3BlKGVsZW1lbnQsIHNjb3BlLmN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnRJblNjb3BlKGVsZW1lbnQ6IEVsZW1lbnQsIHNjb3BlOiBIVE1MRWxlbWVudFtdKSB7XG4gIHJldHVybiBzY29wZS5zb21lKG5vZGUgPT4gbm9kZS5jb250YWlucyhlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudEluQ2hpbGRTY29wZShlbGVtZW50OiBFbGVtZW50LCBzY29wZTogU2NvcGVSZWYpIHtcbiAgLy8gbm9kZS5jb250YWlucyBpbiBpc0VsZW1lbnRJblNjb3BlIGNvdmVycyBjaGlsZCBzY29wZXMgdGhhdCBhcmUgYWxzbyBET00gY2hpbGRyZW4sXG4gIC8vIGJ1dCBkb2VzIG5vdCBjb3ZlciBjaGlsZCBzY29wZXMgaW4gcG9ydGFscy5cbiAgZm9yIChsZXQgcyBvZiBzY29wZXMua2V5cygpKSB7XG4gICAgaWYgKChzID09PSBzY29wZSB8fCBpc0FuY2VzdG9yU2NvcGUoc2NvcGUsIHMpKSAmJiBpc0VsZW1lbnRJblNjb3BlKGVsZW1lbnQsIHMuY3VycmVudCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNBbmNlc3RvclNjb3BlKGFuY2VzdG9yOiBTY29wZVJlZiwgc2NvcGU6IFNjb3BlUmVmKSB7XG4gIGxldCBwYXJlbnQgPSBzY29wZXMuZ2V0KHNjb3BlKTtcbiAgaWYgKCFwYXJlbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocGFyZW50ID09PSBhbmNlc3Rvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGlzQW5jZXN0b3JTY29wZShhbmNlc3RvciwgcGFyZW50KTtcbn1cblxuZnVuY3Rpb24gZm9jdXNFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgc2Nyb2xsID0gZmFsc2UpIHtcbiAgaWYgKGVsZW1lbnQgIT0gbnVsbCAmJiAhc2Nyb2xsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZvY3VzU2FmZWx5KGVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICB9IGVsc2UgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBpZ25vcmVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9jdXNGaXJzdEluU2NvcGUoc2NvcGU6IEhUTUxFbGVtZW50W10pIHtcbiAgbGV0IHNlbnRpbmVsID0gc2NvcGVbMF0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgbGV0IHdhbGtlciA9IGdldEZvY3VzYWJsZVRyZWVXYWxrZXIoZ2V0U2NvcGVSb290KHNjb3BlKSwge3RhYmJhYmxlOiB0cnVlfSwgc2NvcGUpO1xuICB3YWxrZXIuY3VycmVudE5vZGUgPSBzZW50aW5lbDtcbiAgZm9jdXNFbGVtZW50KHdhbGtlci5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdXNlQXV0b0ZvY3VzKHNjb3BlUmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnRbXT4sIGF1dG9Gb2N1czogYm9vbGVhbikge1xuICBjb25zdCBhdXRvRm9jdXNSZWYgPSBSZWFjdC51c2VSZWYoYXV0b0ZvY3VzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0b0ZvY3VzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGFjdGl2ZVNjb3BlID0gc2NvcGVSZWY7XG4gICAgICBpZiAoIWlzRWxlbWVudEluU2NvcGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwgYWN0aXZlU2NvcGUuY3VycmVudCkpIHtcbiAgICAgICAgZm9jdXNGaXJzdEluU2NvcGUoc2NvcGVSZWYuY3VycmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGF1dG9Gb2N1c1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVzdG9yZUZvY3VzKHNjb3BlUmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnRbXT4sIHJlc3RvcmVGb2N1czogYm9vbGVhbiwgY29udGFpbjogYm9vbGVhbikge1xuICAvLyBjcmVhdGUgYSByZWYgZHVyaW5nIHJlbmRlciBpbnN0ZWFkIG9mIHVzZUxheW91dEVmZmVjdCBzbyB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgc2F2ZWQgYmVmb3JlIGEgY2hpbGQgd2l0aCBhdXRvRm9jdXM9dHJ1ZSBtb3VudHMuXG4gIGNvbnN0IG5vZGVUb1Jlc3RvcmVSZWYgPSB1c2VSZWYodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgOiBudWxsKTtcblxuICAvLyB1c2VMYXlvdXRFZmZlY3QgaW5zdGVhZCBvZiB1c2VFZmZlY3Qgc28gdGhlIGFjdGl2ZSBlbGVtZW50IGlzIHNhdmVkIHN5bmNocm9ub3VzbHkgaW5zdGVhZCBvZiBhc3luY2hyb25vdXNseS5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbm9kZVRvUmVzdG9yZSA9IG5vZGVUb1Jlc3RvcmVSZWYuY3VycmVudDtcbiAgICBpZiAoIXJlc3RvcmVGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSB0aGUgVGFiIGtleSBzbyB0aGF0IHRhYmJpbmcgb3V0IG9mIHRoZSBzY29wZSBnb2VzIHRvIHRoZSBuZXh0IGVsZW1lbnRcbiAgICAvLyBhZnRlciB0aGUgbm9kZSB0aGF0IGhhZCBmb2N1cyB3aGVuIHRoZSBzY29wZSBtb3VudGVkLiBUaGlzIGlzIGltcG9ydGFudCB3aGVuXG4gICAgLy8gdXNpbmcgcG9ydGFscyBmb3Igb3ZlcmxheXMsIHNvIHRoYXQgZm9jdXMgZ29lcyB0byB0aGUgZXhwZWN0ZWQgZWxlbWVudCB3aGVuXG4gICAgLy8gdGFiYmluZyBvdXQgb2YgdGhlIG92ZXJsYXkuXG4gICAgbGV0IG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgIT09ICdUYWInIHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZm9jdXNlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKCFpc0VsZW1lbnRJblNjb3BlKGZvY3VzZWRFbGVtZW50LCBzY29wZVJlZi5jdXJyZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhIERPTSB0cmVlIHdhbGtlciB0aGF0IG1hdGNoZXMgYWxsIHRhYmJhYmxlIGVsZW1lbnRzXG4gICAgICBsZXQgd2Fsa2VyID0gZ2V0Rm9jdXNhYmxlVHJlZVdhbGtlcihkb2N1bWVudC5ib2R5LCB7dGFiYmFibGU6IHRydWV9KTtcblxuICAgICAgLy8gRmluZCB0aGUgbmV4dCB0YWJiYWJsZSBlbGVtZW50IGFmdGVyIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XG4gICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBmb2N1c2VkRWxlbWVudDtcbiAgICAgIGxldCBuZXh0RWxlbWVudCA9IChlLnNoaWZ0S2V5ID8gd2Fsa2VyLnByZXZpb3VzTm9kZSgpIDogd2Fsa2VyLm5leHROb2RlKCkpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMobm9kZVRvUmVzdG9yZSkgfHwgbm9kZVRvUmVzdG9yZSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBub2RlVG9SZXN0b3JlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbmV4dCBlbGVtZW50LCBvciBpdCBpcyBvdXRzaWRlIHRoZSBjdXJyZW50IHNjb3BlLCBtb3ZlIGZvY3VzIHRvIHRoZVxuICAgICAgLy8gbmV4dCBlbGVtZW50IGFmdGVyIHRoZSBub2RlIHRvIHJlc3RvcmUgdG8gaW5zdGVhZC5cbiAgICAgIGlmICgoIW5leHRFbGVtZW50IHx8ICFpc0VsZW1lbnRJblNjb3BlKG5leHRFbGVtZW50LCBzY29wZVJlZi5jdXJyZW50KSkgJiYgbm9kZVRvUmVzdG9yZSkge1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBub2RlVG9SZXN0b3JlO1xuXG4gICAgICAgIC8vIFNraXAgb3ZlciBlbGVtZW50cyB3aXRoaW4gdGhlIHNjb3BlLCBpbiBjYXNlIHRoZSBzY29wZSBpbW1lZGlhdGVseSBmb2xsb3dzIHRoZSBub2RlIHRvIHJlc3RvcmUuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBuZXh0RWxlbWVudCA9IChlLnNoaWZ0S2V5ID8gd2Fsa2VyLnByZXZpb3VzTm9kZSgpIDogd2Fsa2VyLm5leHROb2RlKCkpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB9IHdoaWxlIChpc0VsZW1lbnRJblNjb3BlKG5leHRFbGVtZW50LCBzY29wZVJlZi5jdXJyZW50KSk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAobmV4dEVsZW1lbnQpIHtcbiAgICAgICAgICBmb2N1c0VsZW1lbnQobmV4dEVsZW1lbnQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBuZXh0IGVsZW1lbnQgYW5kIHRoZSBub2RlVG9SZXN0b3JlIGlzbid0IHdpdGhpbiBhIEZvY3VzU2NvcGUgKGkuZS4gd2UgYXJlIGxlYXZpbmcgdGhlIHRvcCBsZXZlbCBmb2N1cyBzY29wZSlcbiAgICAgICAgICAgLy8gdGhlbiBtb3ZlIGZvY3VzIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAvLyBPdGhlcndpc2UgcmVzdG9yZSBmb2N1cyB0byB0aGUgbm9kZVRvUmVzdG9yZSAoZS5nIG1lbnUgd2l0aGluIGEgcG9wb3ZlciAtPiB0YWJiaW5nIHRvIGNsb3NlIHRoZSBtZW51IHNob3VsZCBtb3ZlIGZvY3VzIHRvIG1lbnUgdHJpZ2dlcilcbiAgICAgICAgICBpZiAoIWlzRWxlbWVudEluQW55U2NvcGUobm9kZVRvUmVzdG9yZSkpIHtcbiAgICAgICAgICAgIGZvY3VzZWRFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9jdXNFbGVtZW50KG5vZGVUb1Jlc3RvcmUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWNvbnRhaW4pIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24sIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIWNvbnRhaW4pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0b3JlRm9jdXMgJiYgbm9kZVRvUmVzdG9yZSAmJiBpc0VsZW1lbnRJblNjb3BlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsIHNjb3BlUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMobm9kZVRvUmVzdG9yZSkpIHtcbiAgICAgICAgICAgIGZvY3VzRWxlbWVudChub2RlVG9SZXN0b3JlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtzY29wZVJlZiwgcmVzdG9yZUZvY3VzLCBjb250YWluXSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgW1RyZWVXYWxrZXJde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9UcmVlV2Fsa2VyfVxuICogdGhhdCBtYXRjaGVzIGFsbCBmb2N1c2FibGUvdGFiYmFibGUgZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKHJvb3Q6IEhUTUxFbGVtZW50LCBvcHRzPzogRm9jdXNNYW5hZ2VyT3B0aW9ucywgc2NvcGU/OiBIVE1MRWxlbWVudFtdKSB7XG4gIGxldCBzZWxlY3RvciA9IG9wdHM/LnRhYmJhYmxlID8gVEFCQkFCTEVfRUxFTUVOVF9TRUxFQ1RPUiA6IEZPQ1VTQUJMRV9FTEVNRU5UX1NFTEVDVE9SO1xuICBsZXQgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICByb290LFxuICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULFxuICAgIHtcbiAgICAgIGFjY2VwdE5vZGUobm9kZSkge1xuICAgICAgICAvLyBTa2lwIG5vZGVzIGluc2lkZSB0aGUgc3RhcnRpbmcgbm9kZS5cbiAgICAgICAgaWYgKG9wdHM/LmZyb20/LmNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgobm9kZSBhcyBIVE1MRWxlbWVudCkubWF0Y2hlcyhzZWxlY3RvcilcbiAgICAgICAgICAmJiBpc0VsZW1lbnRWaXNpYmxlKG5vZGUgYXMgSFRNTEVsZW1lbnQpXG4gICAgICAgICAgJiYgKCFzY29wZSB8fCBpc0VsZW1lbnRJblNjb3BlKG5vZGUgYXMgSFRNTEVsZW1lbnQsIHNjb3BlKSlcbiAgICAgICAgICAmJiAoIW9wdHM/LmFjY2VwdCB8fCBvcHRzLmFjY2VwdChub2RlIGFzIEVsZW1lbnQpKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgICB9XG4gICAgfVxuICApO1xuXG4gIGlmIChvcHRzPy5mcm9tKSB7XG4gICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gb3B0cy5mcm9tO1xuICB9XG5cbiAgcmV0dXJuIHdhbGtlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgRm9jdXNNYW5hZ2VyIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vdmUgZm9jdXMgd2l0aGluIGFuIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb2N1c01hbmFnZXIocmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+LCBkZWZhdWx0T3B0aW9uczogRm9jdXNNYW5hZ2VyT3B0aW9ucyA9IHt9KTogRm9jdXNNYW5hZ2VyIHtcbiAgcmV0dXJuIHtcbiAgICBmb2N1c05leHQob3B0czogRm9jdXNNYW5hZ2VyT3B0aW9ucyA9IHt9KSB7XG4gICAgICBsZXQgcm9vdCA9IHJlZi5jdXJyZW50O1xuICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB7ZnJvbSwgdGFiYmFibGUgPSBkZWZhdWx0T3B0aW9ucy50YWJiYWJsZSwgd3JhcCA9IGRlZmF1bHRPcHRpb25zLndyYXAsIGFjY2VwdCA9IGRlZmF1bHRPcHRpb25zLmFjY2VwdH0gPSBvcHRzO1xuICAgICAgbGV0IG5vZGUgPSBmcm9tIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBsZXQgd2Fsa2VyID0gZ2V0Rm9jdXNhYmxlVHJlZVdhbGtlcihyb290LCB7dGFiYmFibGUsIGFjY2VwdH0pO1xuICAgICAgaWYgKHJvb3QuY29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIGxldCBuZXh0Tm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKCFuZXh0Tm9kZSAmJiB3cmFwKSB7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHJvb3Q7XG4gICAgICAgIG5leHROb2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAobmV4dE5vZGUpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50KG5leHROb2RlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgICB9LFxuICAgIGZvY3VzUHJldmlvdXMob3B0czogRm9jdXNNYW5hZ2VyT3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zKSB7XG4gICAgICBsZXQgcm9vdCA9IHJlZi5jdXJyZW50O1xuICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB7ZnJvbSwgdGFiYmFibGUgPSBkZWZhdWx0T3B0aW9ucy50YWJiYWJsZSwgd3JhcCA9IGRlZmF1bHRPcHRpb25zLndyYXAsIGFjY2VwdCA9IGRlZmF1bHRPcHRpb25zLmFjY2VwdH0gPSBvcHRzO1xuICAgICAgbGV0IG5vZGUgPSBmcm9tIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBsZXQgd2Fsa2VyID0gZ2V0Rm9jdXNhYmxlVHJlZVdhbGtlcihyb290LCB7dGFiYmFibGUsIGFjY2VwdH0pO1xuICAgICAgaWYgKHJvb3QuY29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXh0ID0gbGFzdCh3YWxrZXIpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIGZvY3VzRWxlbWVudChuZXh0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgIH1cbiAgICAgIGxldCBwcmV2aW91c05vZGUgPSB3YWxrZXIucHJldmlvdXNOb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoIXByZXZpb3VzTm9kZSAmJiB3cmFwKSB7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHJvb3Q7XG4gICAgICAgIHByZXZpb3VzTm9kZSA9IGxhc3Qod2Fsa2VyKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2aW91c05vZGUpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50KHByZXZpb3VzTm9kZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldmlvdXNOb2RlO1xuICAgIH0sXG4gICAgZm9jdXNGaXJzdChvcHRzID0gZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgIGxldCByb290ID0gcmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHt0YWJiYWJsZSA9IGRlZmF1bHRPcHRpb25zLnRhYmJhYmxlLCBhY2NlcHQgPSBkZWZhdWx0T3B0aW9ucy5hY2NlcHR9ID0gb3B0cztcbiAgICAgIGxldCB3YWxrZXIgPSBnZXRGb2N1c2FibGVUcmVlV2Fsa2VyKHJvb3QsIHt0YWJiYWJsZSwgYWNjZXB0fSk7XG4gICAgICBsZXQgbmV4dE5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChuZXh0Tm9kZSkge1xuICAgICAgICBmb2N1c0VsZW1lbnQobmV4dE5vZGUsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH0sXG4gICAgZm9jdXNMYXN0KG9wdHMgPSBkZWZhdWx0T3B0aW9ucykge1xuICAgICAgbGV0IHJvb3QgPSByZWYuY3VycmVudDtcbiAgICAgIGlmICghcm9vdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQge3RhYmJhYmxlID0gZGVmYXVsdE9wdGlvbnMudGFiYmFibGUsIGFjY2VwdCA9IGRlZmF1bHRPcHRpb25zLmFjY2VwdH0gPSBvcHRzO1xuICAgICAgbGV0IHdhbGtlciA9IGdldEZvY3VzYWJsZVRyZWVXYWxrZXIocm9vdCwge3RhYmJhYmxlLCBhY2NlcHR9KTtcbiAgICAgIGxldCBuZXh0ID0gbGFzdCh3YWxrZXIpO1xuICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50KG5leHQsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBsYXN0KHdhbGtlcjogVHJlZVdhbGtlcikge1xuICBsZXQgbmV4dDogSFRNTEVsZW1lbnQ7XG4gIGxldCBsYXN0OiBIVE1MRWxlbWVudDtcbiAgZG8ge1xuICAgIGxhc3QgPSB3YWxrZXIubGFzdENoaWxkKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIG5leHQgPSBsYXN0O1xuICAgIH1cbiAgfSB3aGlsZSAobGFzdCk7XG4gIHJldHVybiBuZXh0O1xufVxuIiwiaW1wb3J0IHtIVE1MQXR0cmlidXRlcywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2lzRm9jdXNWaXNpYmxlLCB1c2VGb2N1cywgdXNlRm9jdXNWaXNpYmxlTGlzdGVuZXIsIHVzZUZvY3VzV2l0aGlufSBmcm9tICdAcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMnO1xuaW1wb3J0IHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEZvY3VzUmluZ1Byb3BzIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgZm9jdXMgcmluZyB3aGVuIHNvbWV0aGluZ1xuICAgKiBpbnNpZGUgdGhlIGNvbnRhaW5lciBlbGVtZW50IGhhcyBmb2N1cyAodHJ1ZSksIG9yXG4gICAqIG9ubHkgaWYgdGhlIGNvbnRhaW5lciBpdHNlbGYgaGFzIGZvY3VzIChmYWxzZSkuXG4gICAqIEBkZWZhdWx0ICdmYWxzZSdcbiAgICovXG4gIHdpdGhpbj86IGJvb2xlYW4sXG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYSB0ZXh0IGlucHV0LiAqL1xuICBpc1RleHRJbnB1dD86IGJvb2xlYW4sXG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgd2lsbCBiZSBhdXRvIGZvY3VzZWQuICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEZvY3VzUmluZ0FyaWEge1xuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgZm9jdXNlZC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuXG4gIC8qKiBXaGV0aGVyIGtleWJvYXJkIGZvY3VzIHNob3VsZCBiZSB2aXNpYmxlLiAqL1xuICBpc0ZvY3VzVmlzaWJsZTogYm9vbGVhbixcblxuICAvKiogUHJvcHMgdG8gYXBwbHkgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IHdpdGggdGhlIGZvY3VzIHJpbmcuICovXG4gIGZvY3VzUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PlxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGZvY3VzIHJpbmcgc2hvdWxkIGJlIHNob3duIHRvIGluZGljYXRlIGtleWJvYXJkIGZvY3VzLlxuICogRm9jdXMgcmluZ3MgYXJlIHZpc2libGUgb25seSB3aGVuIHRoZSB1c2VyIGlzIGludGVyYWN0aW5nIHdpdGggYSBrZXlib2FyZCxcbiAqIG5vdCB3aXRoIGEgbW91c2UsIHRvdWNoLCBvciBvdGhlciBpbnB1dCBtZXRob2RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNSaW5nKHByb3BzOiBGb2N1c1JpbmdQcm9wcyA9IHt9KTogRm9jdXNSaW5nQXJpYSB7XG4gIGxldCB7XG4gICAgYXV0b0ZvY3VzID0gZmFsc2UsXG4gICAgaXNUZXh0SW5wdXQsXG4gICAgd2l0aGluXG4gIH0gPSBwcm9wcztcbiAgbGV0IHN0YXRlID0gdXNlUmVmKHtcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgIGlzRm9jdXNWaXNpYmxlOiBhdXRvRm9jdXMgfHwgaXNGb2N1c1Zpc2libGUoKVxuICB9KTtcbiAgbGV0IFtpc0ZvY3VzZWQsIHNldEZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW2lzRm9jdXNWaXNpYmxlU3RhdGUsIHNldEZvY3VzVmlzaWJsZV0gPSB1c2VTdGF0ZSgoKSA9PiBzdGF0ZS5jdXJyZW50LmlzRm9jdXNlZCAmJiBzdGF0ZS5jdXJyZW50LmlzRm9jdXNWaXNpYmxlKTtcblxuICBsZXQgdXBkYXRlU3RhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRGb2N1c1Zpc2libGUoc3RhdGUuY3VycmVudC5pc0ZvY3VzZWQgJiYgc3RhdGUuY3VycmVudC5pc0ZvY3VzVmlzaWJsZSksIFtdKTtcblxuICBsZXQgb25Gb2N1c0NoYW5nZSA9IHVzZUNhbGxiYWNrKGlzRm9jdXNlZCA9PiB7XG4gICAgc3RhdGUuY3VycmVudC5pc0ZvY3VzZWQgPSBpc0ZvY3VzZWQ7XG4gICAgc2V0Rm9jdXNlZChpc0ZvY3VzZWQpO1xuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH0sIFt1cGRhdGVTdGF0ZV0pO1xuXG4gIHVzZUZvY3VzVmlzaWJsZUxpc3RlbmVyKChpc0ZvY3VzVmlzaWJsZSkgPT4ge1xuICAgIHN0YXRlLmN1cnJlbnQuaXNGb2N1c1Zpc2libGUgPSBpc0ZvY3VzVmlzaWJsZTtcbiAgICB1cGRhdGVTdGF0ZSgpO1xuICB9LCBbXSwge2lzVGV4dElucHV0fSk7XG5cbiAgbGV0IHtmb2N1c1Byb3BzfSA9IHVzZUZvY3VzKHtcbiAgICBpc0Rpc2FibGVkOiB3aXRoaW4sXG4gICAgb25Gb2N1c0NoYW5nZVxuICB9KTtcblxuICBsZXQge2ZvY3VzV2l0aGluUHJvcHN9ID0gdXNlRm9jdXNXaXRoaW4oe1xuICAgIGlzRGlzYWJsZWQ6ICF3aXRoaW4sXG4gICAgb25Gb2N1c1dpdGhpbkNoYW5nZTogb25Gb2N1c0NoYW5nZVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGlzRm9jdXNlZCxcbiAgICBpc0ZvY3VzVmlzaWJsZTogc3RhdGUuY3VycmVudC5pc0ZvY3VzZWQgJiYgaXNGb2N1c1Zpc2libGVTdGF0ZSxcbiAgICBmb2N1c1Byb3BzOiB3aXRoaW4gPyBmb2N1c1dpdGhpblByb3BzIDogZm9jdXNQcm9wc1xuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHttZXJnZVByb3BzfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlRm9jdXNSaW5nfSBmcm9tICcuL3VzZUZvY3VzUmluZyc7XG5cbmludGVyZmFjZSBGb2N1c1JpbmdQcm9wcyB7XG4gIC8qKiBDaGlsZCBlbGVtZW50IHRvIGFwcGx5IENTUyBjbGFzc2VzIHRvLiAqL1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50LFxuICAvKiogQ1NTIGNsYXNzIHRvIGFwcGx5IHdoZW4gdGhlIGVsZW1lbnQgaXMgZm9jdXNlZC4gKi9cbiAgZm9jdXNDbGFzcz86IHN0cmluZyxcbiAgLyoqIENTUyBjbGFzcyB0byBhcHBseSB3aGVuIHRoZSBlbGVtZW50IGhhcyBrZXlib2FyZCBmb2N1cy4gKi9cbiAgZm9jdXNSaW5nQ2xhc3M/OiBzdHJpbmcsXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIGZvY3VzIHJpbmcgd2hlbiBzb21ldGhpbmdcbiAgICogaW5zaWRlIHRoZSBjb250YWluZXIgZWxlbWVudCBoYXMgZm9jdXMgKHRydWUpLCBvclxuICAgKiBvbmx5IGlmIHRoZSBjb250YWluZXIgaXRzZWxmIGhhcyBmb2N1cyAoZmFsc2UpLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgd2l0aGluPzogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYSB0ZXh0IGlucHV0LiAqL1xuICBpc1RleHRJbnB1dD86IGJvb2xlYW4sXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHdpbGwgYmUgYXV0byBmb2N1c2VkLiAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuXG59XG5cbi8qKlxuICogQSB1dGlsaXR5IGNvbXBvbmVudCB0aGF0IGFwcGxpZXMgYSBDU1MgY2xhc3Mgd2hlbiBhbiBlbGVtZW50IGhhcyBrZXlib2FyZCBmb2N1cy5cbiAqIEZvY3VzIHJpbmdzIGFyZSB2aXNpYmxlIG9ubHkgd2hlbiB0aGUgdXNlciBpcyBpbnRlcmFjdGluZyB3aXRoIGEga2V5Ym9hcmQsXG4gKiBub3Qgd2l0aCBhIG1vdXNlLCB0b3VjaCwgb3Igb3RoZXIgaW5wdXQgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEZvY3VzUmluZyhwcm9wczogRm9jdXNSaW5nUHJvcHMpIHtcbiAgbGV0IHtjaGlsZHJlbiwgZm9jdXNDbGFzcywgZm9jdXNSaW5nQ2xhc3N9ID0gcHJvcHM7XG4gIGxldCB7aXNGb2N1c2VkLCBpc0ZvY3VzVmlzaWJsZSwgZm9jdXNQcm9wc30gPSB1c2VGb2N1c1JpbmcocHJvcHMpO1xuICBsZXQgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBtZXJnZVByb3BzKGNoaWxkLnByb3BzLCB7XG4gICAgLi4uZm9jdXNQcm9wcyxcbiAgICBjbGFzc05hbWU6IGNsc3goe1xuICAgICAgW2ZvY3VzQ2xhc3MgfHwgJyddOiBpc0ZvY3VzZWQsXG4gICAgICBbZm9jdXNSaW5nQ2xhc3MgfHwgJyddOiBpc0ZvY3VzVmlzaWJsZVxuICAgIH0pXG4gIH0pKTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0ZvY3VzYWJsZURPTVByb3BzLCBGb2N1c2FibGVQcm9wc30gZnJvbSAnQHJlYWN0LXR5cGVzL3NoYXJlZCc7XG5pbXBvcnQge2ZvY3VzU2FmZWx5fSBmcm9tICcuLyc7XG5pbXBvcnQge21lcmdlUHJvcHMsIHVzZVN5bmNSZWZ9IGZyb20gJ0ByZWFjdC1hcmlhL3V0aWxzJztcbmltcG9ydCBSZWFjdCwge0hUTUxBdHRyaWJ1dGVzLCBNdXRhYmxlUmVmT2JqZWN0LCBSZWFjdE5vZGUsIFJlZk9iamVjdCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlRm9jdXMsIHVzZUtleWJvYXJkfSBmcm9tICdAcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnMnO1xuXG5pbnRlcmZhY2UgRm9jdXNhYmxlT3B0aW9ucyBleHRlbmRzIEZvY3VzYWJsZVByb3BzLCBGb2N1c2FibGVET01Qcm9wcyB7XG4gIC8qKiBXaGV0aGVyIGZvY3VzIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEZvY3VzYWJsZVByb3ZpZGVyUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICAvKiogVGhlIGNoaWxkIGVsZW1lbnQgdG8gcHJvdmlkZSBET00gcHJvcHMgdG8uICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG59XG5cbmludGVyZmFjZSBGb2N1c2FibGVDb250ZXh0VmFsdWUgZXh0ZW5kcyBGb2N1c2FibGVQcm92aWRlclByb3BzIHtcbiAgcmVmPzogTXV0YWJsZVJlZk9iamVjdDxIVE1MRWxlbWVudD5cbn1cblxubGV0IEZvY3VzYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZvY3VzYWJsZUNvbnRleHRWYWx1ZT4obnVsbCk7XG5cbmZ1bmN0aW9uIHVzZUZvY3VzYWJsZUNvbnRleHQocmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KTogRm9jdXNhYmxlQ29udGV4dFZhbHVlIHtcbiAgbGV0IGNvbnRleHQgPSB1c2VDb250ZXh0KEZvY3VzYWJsZUNvbnRleHQpIHx8IHt9O1xuICB1c2VTeW5jUmVmKGNvbnRleHQsIHJlZik7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGxldCB7cmVmOiBfLCAuLi5vdGhlclByb3BzfSA9IGNvbnRleHQ7XG4gIHJldHVybiBvdGhlclByb3BzO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIERPTSBwcm9wcyB0byB0aGUgbmVhcmVzdCBmb2N1c2FibGUgY2hpbGQuXG4gKi9cbmZ1bmN0aW9uIEZvY3VzYWJsZVByb3ZpZGVyKHByb3BzOiBGb2N1c2FibGVQcm92aWRlclByb3BzLCByZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pIHtcbiAgbGV0IHtjaGlsZHJlbiwgLi4ub3RoZXJQcm9wc30gPSBwcm9wcztcbiAgbGV0IGNvbnRleHQgPSB7XG4gICAgLi4ub3RoZXJQcm9wcyxcbiAgICByZWZcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb2N1c2FibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0ZvY3VzYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmxldCBfRm9jdXNhYmxlUHJvdmlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKEZvY3VzYWJsZVByb3ZpZGVyKTtcbmV4cG9ydCB7X0ZvY3VzYWJsZVByb3ZpZGVyIGFzIEZvY3VzYWJsZVByb3ZpZGVyfTtcblxuaW50ZXJmYWNlIEZvY3VzYWJsZUFyaWEge1xuICAvKiogUHJvcHMgZm9yIHRoZSBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgZm9jdXNhYmxlUHJvcHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PlxufVxuXG4vKipcbiAqIFVzZWQgdG8gbWFrZSBhbiBlbGVtZW50IGZvY3VzYWJsZSBhbmQgY2FwYWJsZSBvZiBhdXRvIGZvY3VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNhYmxlKHByb3BzOiBGb2N1c2FibGVPcHRpb25zLCBkb21SZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pOiBGb2N1c2FibGVBcmlhIHtcbiAgbGV0IHtmb2N1c1Byb3BzfSA9IHVzZUZvY3VzKHByb3BzKTtcbiAgbGV0IHtrZXlib2FyZFByb3BzfSA9IHVzZUtleWJvYXJkKHByb3BzKTtcbiAgbGV0IGludGVyYWN0aW9ucyA9IG1lcmdlUHJvcHMoZm9jdXNQcm9wcywga2V5Ym9hcmRQcm9wcyk7XG4gIGxldCBkb21Qcm9wcyA9IHVzZUZvY3VzYWJsZUNvbnRleHQoZG9tUmVmKTtcbiAgbGV0IGludGVyYWN0aW9uUHJvcHMgPSBwcm9wcy5pc0Rpc2FibGVkID8ge30gOiBkb21Qcm9wcztcbiAgbGV0IGF1dG9Gb2N1c1JlZiA9IHVzZVJlZihwcm9wcy5hdXRvRm9jdXMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dG9Gb2N1c1JlZi5jdXJyZW50ICYmIGRvbVJlZi5jdXJyZW50KSB7XG4gICAgICBmb2N1c1NhZmVseShkb21SZWYuY3VycmVudCk7XG4gICAgfVxuICAgIGF1dG9Gb2N1c1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtkb21SZWZdKTtcblxuICByZXR1cm4ge1xuICAgIGZvY3VzYWJsZVByb3BzOiBtZXJnZVByb3BzKFxuICAgICAge1xuICAgICAgICAuLi5pbnRlcmFjdGlvbnMsXG4gICAgICAgIHRhYkluZGV4OiBwcm9wcy5leGNsdWRlRnJvbVRhYk9yZGVyICYmICFwcm9wcy5pc0Rpc2FibGVkID8gLTEgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBpbnRlcmFjdGlvblByb3BzXG4gICAgKVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIEFuY2hvckhUTUxBdHRyaWJ1dGVzLFxuICBCdXR0b25IVE1MQXR0cmlidXRlcyxcbiAgRWxlbWVudFR5cGUsXG4gIEhUTUxBdHRyaWJ1dGVzLFxuICBJbnB1dEhUTUxBdHRyaWJ1dGVzLFxuICBSZWZPYmplY3Rcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBcmlhQnV0dG9uUHJvcHN9IGZyb20gJ0ByZWFjdC10eXBlcy9idXR0b24nO1xuaW1wb3J0IHtmaWx0ZXJET01Qcm9wc30gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IHttZXJnZVByb3BzfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge3VzZUZvY3VzYWJsZX0gZnJvbSAnQHJlYWN0LWFyaWEvZm9jdXMnO1xuaW1wb3J0IHt1c2VQcmVzc30gZnJvbSAnQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkFyaWE8VD4ge1xuICAvKiogUHJvcHMgZm9yIHRoZSBidXR0b24gZWxlbWVudC4gKi9cbiAgYnV0dG9uUHJvcHM6IFQsXG4gIC8qKiBXaGV0aGVyIHRoZSBidXR0b24gaXMgY3VycmVudGx5IHByZXNzZWQuICovXG4gIGlzUHJlc3NlZDogYm9vbGVhblxufVxuXG4vLyBPcmRlciB3aXRoIG92ZXJyaWRlcyBpcyBpbXBvcnRhbnQ6ICdidXR0b24nIHNob3VsZCBiZSBkZWZhdWx0XG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uKHByb3BzOiBBcmlhQnV0dG9uUHJvcHM8J2J1dHRvbic+LCByZWY6IFJlZk9iamVjdDxIVE1MQnV0dG9uRWxlbWVudD4pOiBCdXR0b25BcmlhPEJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uKHByb3BzOiBBcmlhQnV0dG9uUHJvcHM8J2EnPiwgcmVmOiBSZWZPYmplY3Q8SFRNTEFuY2hvckVsZW1lbnQ+KTogQnV0dG9uQXJpYTxBbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD4+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJ1dHRvbihwcm9wczogQXJpYUJ1dHRvblByb3BzPCdkaXYnPiwgcmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KTogQnV0dG9uQXJpYTxIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJ1dHRvbihwcm9wczogQXJpYUJ1dHRvblByb3BzPCdpbnB1dCc+LCByZWY6IFJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50Pik6IEJ1dHRvbkFyaWE8SW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uKHByb3BzOiBBcmlhQnV0dG9uUHJvcHM8J3NwYW4nPiwgcmVmOiBSZWZPYmplY3Q8SFRNTFNwYW5FbGVtZW50Pik6IEJ1dHRvbkFyaWE8SFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uKHByb3BzOiBBcmlhQnV0dG9uUHJvcHM8RWxlbWVudFR5cGU+LCByZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pOiBCdXR0b25BcmlhPEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Pj47XG4vKipcbiAqIFByb3ZpZGVzIHRoZSBiZWhhdmlvciBhbmQgYWNjZXNzaWJpbGl0eSBpbXBsZW1lbnRhdGlvbiBmb3IgYSBidXR0b24gY29tcG9uZW50LiBIYW5kbGVzIG1vdXNlLCBrZXlib2FyZCwgYW5kIHRvdWNoIGludGVyYWN0aW9ucyxcbiAqIGZvY3VzIGJlaGF2aW9yLCBhbmQgQVJJQSBwcm9wcyBmb3IgYm90aCBuYXRpdmUgYnV0dG9uIGVsZW1lbnRzIGFuZCBjdXN0b20gZWxlbWVudCB0eXBlcy5cbiAqIEBwYXJhbSBwcm9wcyAtIFByb3BzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGJ1dHRvbi5cbiAqIEBwYXJhbSByZWYgLSBBIHJlZiB0byBhIERPTSBlbGVtZW50IGZvciB0aGUgYnV0dG9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uKHByb3BzOiBBcmlhQnV0dG9uUHJvcHM8RWxlbWVudFR5cGU+LCByZWY6IFJlZk9iamVjdDxhbnk+KTogQnV0dG9uQXJpYTxIVE1MQXR0cmlidXRlczxhbnk+PiB7XG4gIGxldCB7XG4gICAgZWxlbWVudFR5cGUgPSAnYnV0dG9uJyxcbiAgICBpc0Rpc2FibGVkLFxuICAgIG9uUHJlc3MsXG4gICAgb25QcmVzc1N0YXJ0LFxuICAgIG9uUHJlc3NFbmQsXG4gICAgb25QcmVzc0NoYW5nZSxcbiAgICAvLyBAdHMtaWdub3JlIC0gdW5kb2N1bWVudGVkXG4gICAgcHJldmVudEZvY3VzT25QcmVzcyxcbiAgICAvLyBAdHMtaWdub3JlIC0gdW5kb2N1bWVudGVkXG4gICAgYWxsb3dGb2N1c1doZW5EaXNhYmxlZCxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb25DbGljazogZGVwcmVjYXRlZE9uQ2xpY2ssXG4gICAgaHJlZixcbiAgICB0YXJnZXQsXG4gICAgcmVsLFxuICAgIHR5cGUgPSAnYnV0dG9uJ1xuICB9ID0gcHJvcHM7XG4gIGxldCBhZGRpdGlvbmFsUHJvcHM7XG4gIGlmIChlbGVtZW50VHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICBhZGRpdGlvbmFsUHJvcHMgPSB7XG4gICAgICB0eXBlLFxuICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGFkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgdGFiSW5kZXg6IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiAwLFxuICAgICAgaHJlZjogZWxlbWVudFR5cGUgPT09ICdhJyAmJiBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogaHJlZixcbiAgICAgIHRhcmdldDogZWxlbWVudFR5cGUgPT09ICdhJyA/IHRhcmdldCA6IHVuZGVmaW5lZCxcbiAgICAgIHR5cGU6IGVsZW1lbnRUeXBlID09PSAnaW5wdXQnID8gdHlwZSA6IHVuZGVmaW5lZCxcbiAgICAgIGRpc2FibGVkOiBlbGVtZW50VHlwZSA9PT0gJ2lucHV0JyA/IGlzRGlzYWJsZWQgOiB1bmRlZmluZWQsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6ICFpc0Rpc2FibGVkIHx8IGVsZW1lbnRUeXBlID09PSAnaW5wdXQnID8gdW5kZWZpbmVkIDogaXNEaXNhYmxlZCxcbiAgICAgIHJlbDogZWxlbWVudFR5cGUgPT09ICdhJyA/IHJlbCA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICBsZXQge3ByZXNzUHJvcHMsIGlzUHJlc3NlZH0gPSB1c2VQcmVzcyh7XG4gICAgb25QcmVzc1N0YXJ0LFxuICAgIG9uUHJlc3NFbmQsXG4gICAgb25QcmVzc0NoYW5nZSxcbiAgICBvblByZXNzLFxuICAgIGlzRGlzYWJsZWQsXG4gICAgcHJldmVudEZvY3VzT25QcmVzcyxcbiAgICByZWZcbiAgfSk7XG5cbiAgbGV0IHtmb2N1c2FibGVQcm9wc30gPSB1c2VGb2N1c2FibGUocHJvcHMsIHJlZik7XG4gIGlmIChhbGxvd0ZvY3VzV2hlbkRpc2FibGVkKSB7XG4gICAgZm9jdXNhYmxlUHJvcHMudGFiSW5kZXggPSBpc0Rpc2FibGVkID8gLTEgOiBmb2N1c2FibGVQcm9wcy50YWJJbmRleDtcbiAgfVxuICBsZXQgYnV0dG9uUHJvcHMgPSBtZXJnZVByb3BzKGZvY3VzYWJsZVByb3BzLCBwcmVzc1Byb3BzLCBmaWx0ZXJET01Qcm9wcyhwcm9wcywge2xhYmVsYWJsZTogdHJ1ZX0pKTtcblxuICByZXR1cm4ge1xuICAgIGlzUHJlc3NlZCwgLy8gVXNlZCB0byBpbmRpY2F0ZSBwcmVzcyBzdGF0ZSBmb3IgdmlzdWFsXG4gICAgYnV0dG9uUHJvcHM6IG1lcmdlUHJvcHMoYWRkaXRpb25hbFByb3BzLCBidXR0b25Qcm9wcywge1xuICAgICAgJ2FyaWEtaGFzcG9wdXAnOiBwcm9wc1snYXJpYS1oYXNwb3B1cCddLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBwcm9wc1snYXJpYS1leHBhbmRlZCddLFxuICAgICAgJ2FyaWEtY29udHJvbHMnOiBwcm9wc1snYXJpYS1jb250cm9scyddLFxuICAgICAgJ2FyaWEtcHJlc3NlZCc6IHByb3BzWydhcmlhLXByZXNzZWQnXSxcbiAgICAgIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgIGlmIChkZXByZWNhdGVkT25DbGljaykge1xuICAgICAgICAgIGRlcHJlY2F0ZWRPbkNsaWNrKGUpO1xuICAgICAgICAgIGNvbnNvbGUud2Fybignb25DbGljayBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIG9uUHJlc3MnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH07XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgQW5jaG9ySFRNTEF0dHJpYnV0ZXMsXG4gIEJ1dHRvbkhUTUxBdHRyaWJ1dGVzLFxuICBFbGVtZW50VHlwZSxcbiAgSFRNTEF0dHJpYnV0ZXMsXG4gIElucHV0SFRNTEF0dHJpYnV0ZXMsXG4gIFJlZk9iamVjdFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FyaWFUb2dnbGVCdXR0b25Qcm9wc30gZnJvbSAnQHJlYWN0LXR5cGVzL2J1dHRvbic7XG5pbXBvcnQge0J1dHRvbkFyaWEsIHVzZUJ1dHRvbn0gZnJvbSAnLi91c2VCdXR0b24nO1xuaW1wb3J0IHtjaGFpbn0gZnJvbSAnQHJlYWN0LWFyaWEvdXRpbHMnO1xuaW1wb3J0IHttZXJnZVByb3BzfSBmcm9tICdAcmVhY3QtYXJpYS91dGlscyc7XG5pbXBvcnQge1RvZ2dsZVN0YXRlfSBmcm9tICdAcmVhY3Qtc3RhdGVseS90b2dnbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVG9nZ2xlQnV0dG9uKHByb3BzOiBBcmlhVG9nZ2xlQnV0dG9uUHJvcHM8J2EnPiwgc3RhdGU6IFRvZ2dsZVN0YXRlLCByZWY6IFJlZk9iamVjdDxIVE1MQW5jaG9yRWxlbWVudD4pOiBCdXR0b25BcmlhPEFuY2hvckhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50Pj47XG5leHBvcnQgZnVuY3Rpb24gdXNlVG9nZ2xlQnV0dG9uKHByb3BzOiBBcmlhVG9nZ2xlQnV0dG9uUHJvcHM8J2J1dHRvbic+LCBzdGF0ZTogVG9nZ2xlU3RhdGUsIHJlZjogUmVmT2JqZWN0PEhUTUxCdXR0b25FbGVtZW50Pik6IEJ1dHRvbkFyaWE8QnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+PjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VUb2dnbGVCdXR0b24ocHJvcHM6IEFyaWFUb2dnbGVCdXR0b25Qcm9wczwnZGl2Jz4sIHN0YXRlOiBUb2dnbGVTdGF0ZSwgcmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KTogQnV0dG9uQXJpYTxIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZ2dsZUJ1dHRvbihwcm9wczogQXJpYVRvZ2dsZUJ1dHRvblByb3BzPCdpbnB1dCc+LCBzdGF0ZTogVG9nZ2xlU3RhdGUsIHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+KTogQnV0dG9uQXJpYTxJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+PjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VUb2dnbGVCdXR0b24ocHJvcHM6IEFyaWFUb2dnbGVCdXR0b25Qcm9wczwnc3Bhbic+LCBzdGF0ZTogVG9nZ2xlU3RhdGUsIHJlZjogUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4pOiBCdXR0b25BcmlhPEhUTUxBdHRyaWJ1dGVzPEhUTUxTcGFuRWxlbWVudD4+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZ2dsZUJ1dHRvbihwcm9wczogQXJpYVRvZ2dsZUJ1dHRvblByb3BzPEVsZW1lbnRUeXBlPiwgc3RhdGU6IFRvZ2dsZVN0YXRlLCByZWY6IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pOiBCdXR0b25BcmlhPEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Pj47XG4vKipcbiAqIFByb3ZpZGVzIHRoZSBiZWhhdmlvciBhbmQgYWNjZXNzaWJpbGl0eSBpbXBsZW1lbnRhdGlvbiBmb3IgYSB0b2dnbGUgYnV0dG9uIGNvbXBvbmVudC5cbiAqIFRvZ2dsZUJ1dHRvbnMgYWxsb3cgdXNlcnMgdG8gdG9nZ2xlIGEgc2VsZWN0aW9uIG9uIG9yIG9mZiwgZm9yIGV4YW1wbGUgc3dpdGNoaW5nIGJldHdlZW4gdHdvIHN0YXRlcyBvciBtb2Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZ2dsZUJ1dHRvbihwcm9wczogQXJpYVRvZ2dsZUJ1dHRvblByb3BzPEVsZW1lbnRUeXBlPiwgc3RhdGU6IFRvZ2dsZVN0YXRlLCByZWY6IFJlZk9iamVjdDxhbnk+KTogQnV0dG9uQXJpYTxIVE1MQXR0cmlidXRlczxhbnk+PiB7XG4gIGNvbnN0IHtpc1NlbGVjdGVkfSA9IHN0YXRlO1xuICBjb25zdCB7aXNQcmVzc2VkLCBidXR0b25Qcm9wc30gPSB1c2VCdXR0b24oe1xuICAgIC4uLnByb3BzLFxuICAgIG9uUHJlc3M6IGNoYWluKHN0YXRlLnRvZ2dsZSwgcHJvcHMub25QcmVzcylcbiAgfSwgcmVmKTtcblxuICByZXR1cm4ge1xuICAgIGlzUHJlc3NlZCxcbiAgICBidXR0b25Qcm9wczogbWVyZ2VQcm9wcyhidXR0b25Qcm9wcywge1xuICAgICAgJ2FyaWEtcHJlc3NlZCc6IGlzU2VsZWN0ZWRcbiAgICB9KVxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRDaGlsZHJlbihjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlKSB7XG5cdHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5maWx0ZXIoKGNoaWxkKSA9PlxuXHRcdFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKVxuXHQpIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbGlkQ2hpbGRyZW5cbiIsImltcG9ydCB7IEZvcndhcmRlZFJlZiB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VSZWZzPFQgPSBhbnk+KFxuXHQuLi5yZWZzOiBGb3J3YXJkZWRSZWY8VD5bXVxuKTogRm9yd2FyZGVkUmVmPFQ+IHtcblx0cmV0dXJuICh2YWx1ZSkgPT4ge1xuXHRcdGZvciAobGV0IHJlZiBvZiByZWZzKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZWYodmFsdWUpXG5cdFx0XHR9IGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG5cdFx0XHRcdHJlZi5jdXJyZW50ID0gdmFsdWVcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IHVzZUJ1dHRvbiB9IGZyb20gJ0ByZWFjdC1hcmlhL2J1dHRvbidcbmltcG9ydCB7IHVzZUhvdmVyIH0gZnJvbSAnQHJlYWN0LWFyaWEvaW50ZXJhY3Rpb25zJ1xuaW1wb3J0IHsgZ2V0VmFsaWRDaGlsZHJlbiwgbWVyZ2VSZWZzIH0gZnJvbSAnQHNrYXVpL3V0aWxzJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uR3JvdXBQcm9wcywgQnV0dG9uUHJvcHMgfSBmcm9tICcuL2J1dHRvbi50eXBlcydcbmltcG9ydCB7IHVzZUJ1dHRvbkNsYXNzIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBmb3J3YXJkUmVmPFxuXHRIVE1MQnV0dG9uRWxlbWVudCxcblx0UHJvcHNXaXRoQ2hpbGRyZW48QnV0dG9uUHJvcHM+XG4+KChwcm9wczogQnV0dG9uUHJvcHMsIGV4dFJlZjogUmVhY3QuUmVmPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD4pID0+IHtcblx0Y29uc3Qge1xuXHRcdHNpemUsXG5cdFx0cm91bmRlZCxcblx0XHR2YXJpYW50ID0gJ3NvbGlkJyxcblx0XHR0eXBlLFxuXHRcdGJsb2NrLFxuXHRcdGNvbG9yLFxuXHRcdGZvY3VzYWZ0ZXJjbGljayA9IHRydWUsXG5cdFx0aWNvbixcblx0XHRub3RpZmljYXRpb24sXG5cdFx0Y2xhc3NOYW1lLFxuXHRcdGNoaWxkcmVuLFxuXHRcdGRpc2FibGVkLFxuXHRcdGxvYWRpbmcsXG5cdFx0b25DbGljayxcblx0XHQuLi5yZXN0XG5cdH0gPSBwcm9wc1xuXHRjb25zdCBidXR0b25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpXG5cblx0Y29uc3QgW2lzRm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgeyBob3ZlclByb3BzLCBpc0hvdmVyZWQgfSA9IHVzZUhvdmVyKHtcblx0XHRpc0Rpc2FibGVkOiBkaXNhYmxlZCB8fCBsb2FkaW5nLFxuXHR9KVxuXHRjb25zdCB7IGJ1dHRvblByb3BzLCBpc1ByZXNzZWQgfSA9IHVzZUJ1dHRvbihcblx0XHR7XG5cdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdGlzRGlzYWJsZWQ6IGRpc2FibGVkIHx8IGxvYWRpbmcsXG5cdFx0XHRvbkZvY3VzQ2hhbmdlOiBzZXRGb2N1c2VkLFxuXHRcdFx0b25LZXlEb3duOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcgJykge1xuXHRcdFx0XHRcdG9uQ2xpY2s/LihlIGFzIGFueSlcblx0XHRcdFx0XHRzZXRGb2N1c2VkKHRydWUpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGVcblx0XHRcdH0sXG5cdFx0XHRvblByZXNzRW5kOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJykge1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XG5cdFx0XHRcdFx0Zm9jdXNhZnRlcmNsaWNrID8gJycgOiBlLnRhcmdldC5ibHVyKClcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZVxuXHRcdFx0fSxcblx0XHRcdG9uUHJlc3NTdGFydDogKGUpID0+IHtcblx0XHRcdFx0aWYgKGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcblx0XHRcdFx0XHRzZXRGb2N1c2VkKHRydWUpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGVcblx0XHRcdH0sXG5cdFx0XHRvblByZXNzOiAoZSkgPT4ge1xuXHRcdFx0XHRvbkNsaWNrPy4oZSBhcyBhbnkpXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YnV0dG9uUmVmXG5cdClcblxuXHRjb25zdCBjbGFzc2VzID0gdXNlQnV0dG9uQ2xhc3Moe1xuXHRcdHZhcmlhbnQsXG5cdFx0c2l6ZSxcblx0XHR0eXBlLFxuXHRcdGRpc2FibGVkLFxuXHRcdGxvYWRpbmcsXG5cdFx0cm91bmRlZCxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdHsuLi5idXR0b25Qcm9wc31cblx0XHRcdHsuLi5ob3ZlclByb3BzfVxuXHRcdFx0ZGF0YS1mb2N1cz17aXNGb2N1c2VkID8gJycgOiBudWxsfVxuXHRcdFx0ZGF0YS1hY3RpdmU9e2lzUHJlc3NlZCA/ICcnIDogbnVsbH1cblx0XHRcdGRhdGEtaG92ZXI9e2lzSG92ZXJlZCA/ICcnIDogbnVsbH1cblx0XHRcdGRhdGEtbG9hZGluZz17bG9hZGluZyA/ICcnIDogbnVsbH1cblx0XHRcdGRhdGEtY29sb3I9e2NvbG9yfVxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxuXHRcdFx0XHRbY2xhc3NlcywgISFpY29uID8gKCEhY2hpbGRyZW4gPyAnJyA6ICdpY29ub25seScpIDogJyddLFxuXHRcdFx0XHRjbGFzc05hbWVcblx0XHRcdCl9XG5cdFx0XHR7Li4ucmVzdH1cblx0XHRcdHJlZj17bWVyZ2VSZWZzKGJ1dHRvblJlZiwgZXh0UmVmKX1cblx0XHQ+XG5cdFx0XHR7bG9hZGluZyAmJiAoXG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnRuLXNwaW5uZXIgJHtsb2FkaW5nID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9XG5cdFx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQpfVxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgYnRuLWNvbnRlbnQgJHtsb2FkaW5nID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0xMDAnfWB9PlxuXHRcdFx0XHR7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2Nsc3goJ2J0bi1pY29uJyl9PntpY29ufTwvc3Bhbj59XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvc3Bhbj5cblx0XHRcdHtub3RpZmljYXRpb24gJiYgPGRpdiBjbGFzc05hbWU9J2J0bi1ub3RpZmljYXRpb24nIC8+fVxuXHRcdDwvYnV0dG9uPlxuXHQpXG59KVxuXG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBmb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBCdXR0b25Hcm91cFByb3BzPihcblx0KHByb3BzLCByZWYpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRzaXplLFxuXHRcdFx0Y29sb3IsXG5cdFx0XHR2YXJpYW50LFxuXHRcdFx0YXR0YWNoZWQsXG5cdFx0XHRyb3VuZGVkLFxuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRjaGlsZHJlbixcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdC4uLnJlc3Rcblx0XHR9ID0gcHJvcHNcblxuXHRcdGNvbnN0IHZhbGlkQ2hpbGRyZW4gPSBnZXRWYWxpZENoaWxkcmVuKGNoaWxkcmVuKVxuXHRcdGNvbnN0IGNvcGllcyA9IHZhbGlkQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdFx0XHRzaXplOiBzaXplIHx8IGNoaWxkLnByb3BzLnNpemUsXG5cdFx0XHRcdGNvbG9yOiBjaGlsZC5wcm9wcy5jb2xvciB8fCBjb2xvcixcblx0XHRcdFx0dmFyaWFudDogY2hpbGQucHJvcHMudmFyaWFudCB8fCB2YXJpYW50LFxuXHRcdFx0XHRkaXNhYmxlZDogY2hpbGQucHJvcHMuZGlzYWJsZWQgfHwgZGlzYWJsZWQsXG5cdFx0XHRcdHJvdW5kZWQ6IGNoaWxkLnByb3BzLnJvdW5kZWQgfHwgcm91bmRlZCxcblx0XHRcdFx0Zm9jdXNhZnRlcmNsaWNrOiB0cnVlLFxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0cmVmPXtyZWZ9XG5cdFx0XHRcdHJvbGU9J2dyb3VwJ1xuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goXG5cdFx0XHRcdFx0J2J0bi1ncm91cCcsXG5cdFx0XHRcdFx0YXR0YWNoZWQgJiYgJ2J0bi1ncm91cC1hdHRhY2hlZCcsXG5cdFx0XHRcdFx0cm91bmRlZCAmJiAnYnRuLWdyb3VwLXJvdW5kZWQnLFxuXHRcdFx0XHRcdGNsYXNzTmFtZVxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7Li4ucmVzdH1cblx0XHRcdD5cblx0XHRcdFx0e2NvcGllc31cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuKVxuQnV0dG9uR3JvdXAuZGlzcGxheU5hbWUgPSAnQnV0dG9uR3JvdXAnXG4iLCJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuL2J1dHRvbi50eXBlcydcblxuaW50ZXJmYWNlIGJ0bkNsYXNzUHJvcHMge1xuXHR2YXJpYW50OiBCdXR0b25Qcm9wc1sndmFyaWFudCddXG5cdHR5cGU6IEJ1dHRvblByb3BzWyd0eXBlJ11cblx0c2l6ZTogQnV0dG9uUHJvcHNbJ3NpemUnXVxuXHRkaXNhYmxlZDogQnV0dG9uUHJvcHNbJ2Rpc2FibGVkJ11cblx0bG9hZGluZzogQnV0dG9uUHJvcHNbJ2xvYWRpbmcnXVxuXHRyb3VuZGVkOiBCdXR0b25Qcm9wc1sncm91bmRlZCddXG59XG5cbmV4cG9ydCBjb25zdCB1c2VCdXR0b25DbGFzcyA9ICh7XG5cdHZhcmlhbnQsXG5cdHR5cGUsXG5cdHNpemUsXG5cdGRpc2FibGVkLFxuXHRsb2FkaW5nLFxuXHRyb3VuZGVkLFxufTogYnRuQ2xhc3NQcm9wcykgPT4ge1xuXHRjb25zdCB2YXJpYW50cyA9IHtcblx0XHRzb2xpZDogJ2J0bi1zb2xpZCcsXG5cdFx0Z2hvc3Q6ICdidG4tZ2hvc3QnLFxuXHR9XG5cblx0Y29uc3QgdHlwZXMgPSB7XG5cdFx0c3VjY2VzczogJ2J0bi1zdWNjZXNzJyxcblx0XHRzZWNvbmRhcnk6ICdidG4tc2Vjb25kYXJ5Jyxcblx0XHR3YXJuaW5nOiAnYnRuLXdhcm5pbmcnLFxuXHRcdGVycm9yOiAnYnRuLWVycm9yJyxcblx0XHRhbGVydDogJ2J0bi1hbGVydCcsXG5cdH1cblxuXHRjb25zdCBzaXplcyA9IHtcblx0XHRibG9jazogJ2J0bi1ibG9jaycsXG5cdFx0eHM6ICdidG4teHMnLFxuXHRcdHNtOiAnYnRuLXNtJyxcblx0XHRtZDogJ2J0bi1tZCcsXG5cdFx0bGc6ICdidG4tbGcnLFxuXHR9XG5cblx0Y29uc3QgY2xhc3NlcyA9IGNsc3goW1xuXHRcdCdidG4nLFxuXHRcdHZhcmlhbnQgJiYgdmFyaWFudHNbdmFyaWFudF0sXG5cdFx0dHlwZSAmJiB0eXBlc1t0eXBlXSxcblx0XHRzaXplICYmIHNpemVzW3NpemVdLFxuXHRcdGRpc2FibGVkICYmICdidG4tZGlzYWJsZWQnLFxuXHRcdGxvYWRpbmcgJiYgJ2J0bi1sb2FkaW5nJyxcblx0XHRyb3VuZGVkICYmICdidG4tcm91bmRlZCcsXG5cdF0pXG5cblx0cmV0dXJuIGNsYXNzZXNcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiBhcyBJbnRlcm5hbEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuL2J1dHRvbi50eXBlcydcbmltcG9ydCB7IEJ1dHRvbkdyb3VwIH0gZnJvbSAnLi9idXR0b24nXG5cbmludGVyZmFjZSBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PEJ1dHRvblByb3BzPiB7XG5cdEdyb3VwOiB0eXBlb2YgQnV0dG9uR3JvdXBcbn1cblxuY29uc3QgQnV0dG9uID0gSW50ZXJuYWxCdXR0b24gYXMgQnV0dG9uXG5cbkJ1dHRvbi5Hcm91cCA9IEJ1dHRvbkdyb3VwXG5cbmV4cG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfVxuIl19