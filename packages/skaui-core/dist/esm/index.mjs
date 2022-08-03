import React, { createContext, useContext, Component, useEffect, useMemo, useState, useLayoutEffect, useRef, useCallback, forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import require$$0 from 'tty';
import $k7QOs$reactdom from 'react-dom';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React$1 = React;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var IconContext = createContext({
    size: 8,
});
IconContext.Provider;
var useIcon = function () {
    var ctx = useContext(IconContext);
    if (!ctx) {
        throw Error('useIconSize must be used inside IconContextProvider.');
    }
    return ctx;
};

var IconDefaultProps = {
    size: 16,
};

var CheckIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsx("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: jsxRuntime.exports.jsx("polyline", { points: '20 6 9 17 4 12' }) })));
};
CheckIcon.defaultProps = IconDefaultProps;

var ChevronDownIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsx("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: jsxRuntime.exports.jsx("polyline", { points: '6 9 12 15 18 9' }) })));
};
ChevronDownIcon.defaultProps = IconDefaultProps;

var ClipboardIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsxs("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: [jsxRuntime.exports.jsx("path", { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }), jsxRuntime.exports.jsx("rect", { x: '8', y: '2', width: '8', height: '4', rx: '1', ry: '1' })] })));
};
ClipboardIcon.defaultProps = IconDefaultProps;

var EyeIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsxs("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: [jsxRuntime.exports.jsx("path", { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }), jsxRuntime.exports.jsx("circle", { cx: '12', cy: '12', r: '3' })] })));
};
EyeIcon.defaultProps = IconDefaultProps;

var FileIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsxs("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: [jsxRuntime.exports.jsx("path", { d: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' }), jsxRuntime.exports.jsx("polyline", { points: '13 2 13 9 20 9' })] })));
};
FileIcon.defaultProps = IconDefaultProps;

var FolderIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsx("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: jsxRuntime.exports.jsx("path", { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' }) })));
};
FolderIcon.defaultProps = IconDefaultProps;

var SettingsIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsxs("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: [jsxRuntime.exports.jsx("circle", { cx: '12', cy: '12', r: '3' }), jsxRuntime.exports.jsx("path", { d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' })] })));
};
SettingsIcon.defaultProps = IconDefaultProps;

var SquarePlusIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsxs("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: [jsxRuntime.exports.jsx("rect", { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }), jsxRuntime.exports.jsx("line", { x1: '12', y1: '8', x2: '12', y2: '16' }), jsxRuntime.exports.jsx("line", { x1: '8', y1: '12', x2: '16', y2: '12' })] })));
};
SquarePlusIcon.defaultProps = IconDefaultProps;

var SquareMinusIcon = function (_a) {
    var size = _a.size, className = _a.className, rest = __rest(_a, ["size", "className"]);
    var iconSize = useIcon();
    return (jsxRuntime.exports.jsxs("svg", __assign({ viewBox: '0 0 24 24', width: size || iconSize.size, height: size || iconSize.size, stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', shapeRendering: 'geometricPrecision', className: className }, rest, { children: [jsxRuntime.exports.jsx("rect", { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }), jsxRuntime.exports.jsx("line", { x1: '8', y1: '12', x2: '16', y2: '12' })] })));
};
SquareMinusIcon.defaultProps = IconDefaultProps;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".Clipboard-module_wrapper__ys1hn {\n\n    z-index: 10;\n\n    display: flex;\n\n    align-items: center;\n\n    justify-content: center;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n\n    border-radius: 0.5rem;\n\n    padding: 0.25rem;\n\n    border-width: 2px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(229 229 229 / var(--tw-border-opacity));\n\n    transition-property: all;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 150ms\n}\n\n.Clipboard-module_icons__WOTEW {\n\n    cursor: pointer;\n\n    transition-property: all;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 150ms;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(115 115 115 / var(--tw-text-opacity));\n\n    height: 1.75rem;\n\n    width: 1.75rem\n}\n\n.Clipboard-module_clipboard__iDfhv:hover {\n\n    --tw-scale-x: 1.05;\n\n    --tw-scale-y: 1.05;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n\n@-webkit-keyframes Clipboard-module_pulse__RiUBv {\n\n    50% {\n\n        opacity: .5\n    }\n}\n\n@keyframes Clipboard-module_pulse__RiUBv {\n\n    50% {\n\n        opacity: .5\n    }\n}\n\n.Clipboard-module_clipboard__iDfhv:hover {\n\n    -webkit-animation: Clipboard-module_pulse__RiUBv 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n\n            animation: Clipboard-module_pulse__RiUBv 2s cubic-bezier(0.4, 0, 0.6, 1) infinite\n}\n\n.Clipboard-module_copied__HK2sg {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(59 130 246 / var(--tw-text-opacity))\n}\n";
var styles$1 = {"wrapper":"Clipboard-module_wrapper__ys1hn","icons":"Clipboard-module_icons__WOTEW","clipboard":"Clipboard-module_clipboard__iDfhv","pulse":"Clipboard-module_pulse__RiUBv","copied":"Clipboard-module_copied__HK2sg"};
styleInject(css_248z$1);

var Clipboard = function (_a) {
    var copyText = _a.copyText, className = _a.className;
    var timer;
    var _b = React.useState(false), isCopied = _b[0], setIsCopied = _b[1];
    function handleCopy() {
        clearTimeout(timer);
        navigator.clipboard.writeText(copyText || '');
        setIsCopied(true);
        timer = setTimeout(function () {
            setIsCopied(false);
        }, 2000);
    }
    var variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (jsxRuntime.exports.jsx("div", __assign({ className: clsx(className, styles$1.wrapper) }, { children: jsxRuntime.exports.jsx(AnimatePresence, __assign({ exitBeforeEnter: true }, { children: isCopied ? (jsxRuntime.exports.jsx(motion.button, __assign({ variants: variants, initial: 'hidden', animate: 'show', exit: 'hidden', transition: { duration: 0.2 } }, { children: jsxRuntime.exports.jsx(CheckIcon, { className: clsx(styles$1.icons, styles$1.copied) }) }), 'copied')) : (jsxRuntime.exports.jsx(motion.button, __assign({ onClick: handleCopy, variants: variants, initial: 'hidden', animate: 'show', exit: 'hidden', transition: { duration: 0.2 } }, { children: jsxRuntime.exports.jsx(ClipboardIcon, { className: clsx(styles$1.icons, styles$1.clipboard) }) }), 'clipboard')) })) })));
};

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */

 var Prism = (function () {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},


		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}

	return _;

}());

var prism = Prism;
Prism.default = Prism;

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = prism.languages.markup['entity'];
prism.languages.markup['doctype'].inside['internal-subset'].inside = prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend('markup', {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp('\\$' + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp('(\\{)' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        'entity': insideString.entity
      }
    }],
    'environment': {
      pattern: RegExp('\\$?' + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(prism);
/* "prismjs/components/prism-clike" */


prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

prism.languages.c = prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'string': {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore('c', 'string', {
  'char': {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c['string']],
      'char': prism.languages.c['char'],
      'comment': prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore('c', 'function', {
  // highlight predefined macros as constants
  'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    'boolean': /\b(?:false|true)\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'module': {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + // header-name
      /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + // module name or partition or both
      /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ')'),
      lookbehind: true,
      greedy: true,
      inside: {
        'string': /^[<"][\s\S]+/,
        'operator': /:/,
        'punctuation': /\./
      }
    },
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'keyword', {
    'generic-function': {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        'function': /^\w+/,
        'generic': {
          pattern: /<[\s\S]+/,
          alias: 'class-name',
          inside: Prism.languages.cpp
        }
      }
    }
  });
  Prism.languages.insertBefore('cpp', 'operator', {
    'double-colon': {
      pattern: /::/,
      alias: 'punctuation'
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'double-colon', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-\w]+/,
      'id': /#[-\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          'number': /[\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      'combinator': />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: 'color'
    },
    'color': [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(prism);
/* "prismjs/components/prism-javascript" */


prism.languages.javascript = prism.languages.extend('clike', {
  'class-name': [prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + ( // constant
    /NaN|Infinity/.source + '|' + // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});

if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined('script', 'javascript'); // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}

prism.languages.js = prism.languages.javascript;
/* "prismjs/components/prism-coffeescript" */

(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\s\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(prism);
/* "prismjs/components/prism-yaml" */


(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/false|true/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(prism);
/* "prismjs/components/prism-markdown" */


(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'front-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'code-snippet': {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ['code', 'keyword']
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
  /**
   * A list of known entity names.
   *
   * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
   *
   * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
   */

  var KNOWN_ENTITY_NAMES = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"'
  }; // IE 11 doesn't support `String.fromCodePoint`

  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  /**
   * Returns the text content of a given HTML source code string.
   *
   * @param {string} html
   * @returns {string}
   */

  function textContent(html) {
    // remove all tags
    var text = html.replace(tagPattern, ''); // decode known entities

    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();

      if (code[0] === '#') {
        var value;

        if (code[1] === 'x') {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }

        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];

        if (known) {
          return known;
        } // unable to decode


        return m;
      }
    });
    return text;
  }

  Prism.languages.md = Prism.languages.markdown;
})(prism);
/* "prismjs/components/prism-graphql" */


prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:false|true)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'atom-input': {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: 'class-name'
  },
  'scalar': /\b(?:Boolean|Float|ID|Int|String)\b/,
  'constant': /\b[A-Z][A-Z_\d]*\b/,
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-mutation': {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-query': {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'property-query': /\w+(?=\s*\()/,
  'object': /\w+(?=\s*\{)/,
  'punctuation': /[!(){}\[\]:=,]/,
  'property': /\w+/
};
prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
  if (env.language !== 'graphql') {
    return;
  }
  /**
   * get the graphql token stream that we want to customize
   *
   * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
   * @type {Token[]}
   */


  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
  });
  var currentIndex = 0;
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {number} offset
   * @returns {Token | undefined}
   */

  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {readonly string[]} types
   * @param {number} [offset=0]
   * @returns {boolean}
   */


  function isTokenType(types, offset) {
    offset = offset || 0;

    for (var i = 0; i < types.length; i++) {
      var token = getToken(i + offset);

      if (!token || token.type !== types[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * Returns the index of the closing bracket to an opening bracket.
   *
   * It is assumed that `token[currentIndex - 1]` is an opening bracket.
   *
   * If no closing bracket could be found, `-1` will be returned.
   *
   * @param {RegExp} open
   * @param {RegExp} close
   * @returns {number}
   */


  function findClosingBracket(open, close) {
    var stackHeight = 1;

    for (var i = currentIndex; i < validTokens.length; i++) {
      var token = validTokens[i];
      var content = token.content;

      if (token.type === 'punctuation' && typeof content === 'string') {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;

          if (stackHeight === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }
  /**
   * Adds an alias to the given token.
   *
   * @param {Token} token
   * @param {string} alias
   * @returns {void}
   */


  function addAlias(token, alias) {
    var aliases = token.alias;

    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }

    aliases.push(alias);
  }

  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++]; // add special aliases for mutation tokens

    if (startToken.type === 'keyword' && startToken.content === 'mutation') {
      // any array of the names of all input variables (if any)
      var inputVariables = [];

      if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
        // definition
        currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);

        if (definitionEnd === -1) {
          continue;
        } // find all input variables


        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);

          if (t.type === 'variable') {
            addAlias(t, 'variable-input');
            inputVariables.push(t.content);
          }
        }

        currentIndex = definitionEnd + 1;
      }

      if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
        currentIndex++; // skip opening bracket

        addAlias(getToken(0), 'property-mutation');

        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);

          if (mutationEnd === -1) {
            continue;
          } // give references to input variables a special alias


          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];

            if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, 'variable-input');
            }
          }
        }
      }
    }
  }
});
/* "prismjs/components/prism-sql" */

prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'identifier': {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      'punctuation': /^`|`$/
    }
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:FALSE|NULL|TRUE)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:markdown|md)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // sql`...`
  createTemplate('sql', /\bsql/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
          /* noop */
        }

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }); // The keywords TypeScript adds to JavaScript

  Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
  /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
  /\btype\b(?=\s*(?:[\{*]|$))/); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter'];
  delete Prism.languages.typescript['literal-property']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'decorator': {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        'at': {
          pattern: /^@/,
          alias: 'operator'
        },
        'function': /^[\s\S]+/
      }
    },
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: 'control-flow'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(prism);
/* "prismjs/components/prism-jsx" */


(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  /**
   * @param {string} source
   * @param {string} [flags]
   */

  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }

  spread = re(spread).source;
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: re(/<SPREAD>/.source),
      inside: Prism.languages.jsx
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'special-attr', {
    'script': {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: 'language-javascript',
      inside: {
        'script-punctuation': {
          pattern: /^=(?=\{)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      }
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === 'diff') {
      alias.push('bold');
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(prism);
/* "prismjs/components/prism-git" */


prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

prism.languages.go = prism.languages.extend('clike', {
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|false|iota|nil|true)\b/,
  'number': [// binary and octal integers
  /\b0(?:b[01_]+|o[0-7_]+)i?\b/i, // hexadecimal integers and floats
  /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, // decimal integers and floats
  /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore('go', 'string', {
  'char': {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go['class-name'];
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:false|true)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
  Prism.languages.hbs = Prism.languages.handlebars;
})(prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


prism.languages.json = {
  'property': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
prism.languages.webmanifest = prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

prism.languages.less = prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  'operator': /[+\-*\/]/
});
prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      'punctuation': /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'builtin-target': {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: 'builtin'
  },
  'target': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: 'symbol',
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  'keyword': /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  'function': {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

prism.languages.objectivec = prism.languages.extend('c', {
  'string': {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'keyword': /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec['class-name'];
prism.languages.objc = prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */
// https://ocaml.org/manual/lex.html

prism.languages.ocaml = {
  'comment': {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  'char': {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  'string': [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  'number': [// binary and octal
  /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, // hexadecimal
  /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, // decimal
  /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  'directive': {
    pattern: /\B#\w+/,
    alias: 'property'
  },
  'label': {
    pattern: /\B~\w+/,
    alias: 'property'
  },
  'type-variable': {
    pattern: /\B'\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /`\w+/,
    alias: 'symbol'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  'operator-like-punctuation': {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: 'punctuation'
  },
  // Custom operators are allowed
  'operator': /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  'punctuation': /;;|::|[(){}\[\].,:;#]|\b_\b/
};
/* "prismjs/components/prism-python" */

prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  'string-interpolation': {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:False|None|True)\b/,
  'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
/* "prismjs/components/prism-reason" */

prism.languages.reason = prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore('reason', 'class-name', {
  'char': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  // Negative look-ahead prevents from matching things like String.capitalize
  'constructor': /\b[A-Z]\w*\b(?!\s*\.)/,
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
/* "prismjs/components/prism-scss" */


prism.languages.scss = prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss['atrule'].inside.rest = prism.languages.scss;
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\b(?:false|true)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'number': number,
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^\{|\}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // doesn't work with TS because TS is too complex

  delete Prism.languages.tsx['parameter'];
  delete Prism.languages.tsx['literal-property']; // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
/* "prismjs/components/prism-wasm" */


prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};

// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme$1 = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

var defaultProps = {
  // $FlowFixMe
  Prism: prism,
  theme: theme$1
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends$1({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends$1({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1$1.themeDict !== undefined && props.theme === this$1$1.prevTheme && props.language === this$1$1.prevLanguage) {
        return this$1$1.themeDict;
      }

      this$1$1.prevTheme = props.theme;
      this$1$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends$1({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1$1.getThemeDict(this$1$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends$1({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1$1.getThemeDict(this$1$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends$1({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends$1({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(Component);

var colors$1 = {};

var log$1 = {};

var picocolors = {exports: {}};

let tty = require$$0;

let isColorSupported =
	!("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
	("FORCE_COLOR" in process.env ||
		process.argv.includes("--color") ||
		process.platform === "win32" ||
		(tty.isatty(1) && process.env.TERM !== "dumb") ||
		"CI" in process.env);

let formatter =
	(open, close, replace = open) =>
	input => {
		let string = "" + input;
		let index = string.indexOf(close, open.length);
		return ~index
			? open + replaceClose(string, close, replace, index) + close
			: open + string + close
	};

let replaceClose = (string, close, replace, index) => {
	let start = string.substring(0, index) + replace;
	let end = string.substring(index + close.length);
	let nextIndex = end.indexOf(close);
	return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end
};

let createColors = (enabled = isColorSupported) => ({
	isColorSupported: enabled,
	reset: enabled ? s => `\x1b[0m${s}\x1b[0m` : String,
	bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
	dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
	italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
	underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
	inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
	hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
	strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
	black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
	red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
	green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
	yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
	blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
	magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
	cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
	white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
	gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
	bgBlack: enabled ? formatter("\x1b[40m", "\x1b[49m") : String,
	bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
	bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
	bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
	bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
	bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
	bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
	bgWhite: enabled ? formatter("\x1b[47m", "\x1b[49m") : String,
});

picocolors.exports = createColors();
picocolors.exports.createColors = createColors;

Object.defineProperty(log$1, "__esModule", {
    value: true
});
log$1.dim = dim;
log$1.default = void 0;
var _picocolors = _interopRequireDefault$1(picocolors.exports);
function _interopRequireDefault$1(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let alreadyShown = new Set();
function log(type, messages, key) {
    if (typeof process !== "undefined" && process.env.JEST_WORKER_ID) return;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn("");
    messages.forEach((message)=>console.warn(type, "-", message));
}
function dim(input) {
    return _picocolors.default.dim(input);
}
var _default$1 = {
    info (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    warn (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    risk (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    }
};
log$1.default = _default$1;

Object.defineProperty(colors$1, "__esModule", {
    value: true
});
colors$1.default = void 0;
var _log = _interopRequireDefault(log$1);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function warn({ version , from , to  }) {
    _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        "Update your configuration file to silence this warning.", 
    ]);
}
var _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
    },
    zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b"
    },
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717"
    },
    stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917"
    },
    red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12"
    },
    amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12"
    },
    lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314"
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d"
    },
    emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
    },
    teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a"
    },
    cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63"
    },
    sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e"
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
    },
    indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
    },
    violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87"
    },
    fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75"
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
    },
    rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337"
    },
    get lightBlue () {
        warn({
            version: "v2.2",
            from: "lightBlue",
            to: "sky"
        });
        return this.sky;
    },
    get warmGray () {
        warn({
            version: "v3.0",
            from: "warmGray",
            to: "stone"
        });
        return this.stone;
    },
    get trueGray () {
        warn({
            version: "v3.0",
            from: "trueGray",
            to: "neutral"
        });
        return this.neutral;
    },
    get coolGray () {
        warn({
            version: "v3.0",
            from: "coolGray",
            to: "gray"
        });
        return this.gray;
    },
    get blueGray () {
        warn({
            version: "v3.0",
            from: "blueGray",
            to: "slate"
        });
        return this.slate;
    }
};
colors$1.default = _default;

let colors = colors$1;
var colors_1 = (colors.__esModule ? colors : { default: colors }).default;

var theme = {
    plain: {
        backgroundColor: 'transparent',
    },
    styles: [
        {
            types: ['comment'],
            style: {
                color: colors_1.neutral[400],
                fontWeight: '400',
            },
        },
        {
            types: ['builtin'],
            style: {
                color: 'rgb(0, 112, 193)',
            },
        },
        {
            types: ['inserted'],
            style: {
                color: 'rgb(1, 146, 103)',
            },
        },
        {
            types: ['number'],
            style: {
                color: 'rgb(209, 81, 45)',
            },
        },
        {
            types: ['operator'],
            style: {
                color: 'rgb(0, 0, 0)',
            },
        },
        {
            types: ['constant', 'char'],
            style: {
                color: 'rgb(25, 33, 94)',
                fontWeight: '800',
            },
        },
        {
            types: ['tag'],
            style: {
                color: colors_1.green[800],
            },
        },
        {
            types: ['attr-name'],
            style: {
                color: colors_1.blue[500],
            },
        },
        {
            types: ['deleted', 'string'],
            style: {
                color: 'rgb(255, 26, 26)',
            },
        },
        {
            types: ['changed', 'punctuation'],
            style: {
                color: 'rgb(4, 81, 165)',
            },
        },
        {
            types: ['function', 'keyword', 'punctuation'],
            style: {
                color: 'rgb(44, 51, 51)',
            },
        },
        {
            types: ['class-name'],
            style: {
                color: colors_1.neutral[800],
            },
        },
        {
            types: ['selector'],
            style: {
                color: colors_1.blue[800],
            },
        },
        {
            types: ['property'],
            style: {
                color: colors_1.red[800],
            },
        },
        {
            types: ['boolean'],
            style: {
                color: colors_1.green[800],
            },
        },
    ],
};

var css_248z = ".FileViewer-module_fileviewer__UfqHT {position: relative;margin-left: 0.5rem;margin-right: 0.5rem;display: flex;flex-direction: column;gap: 0.25rem\n}@media (min-width: 1024px) {.FileViewer-module_fileviewer__UfqHT {margin-left: 0.5rem;margin-right: 0.5rem;flex-direction: row;gap: 0.5rem\n    }\n}\n\n.FileViewer-module_filecontentWrapper__xkdHw {position: relative;min-height: 500px;flex: 1 1 0%;overflow-x: auto;border-radius: 0.375rem;--tw-bg-opacity: 1;background-color: rgb(250 250 250 / var(--tw-bg-opacity));padding: 1rem\n}\n\n@media (min-width: 1024px) {.FileViewer-module_filecontentWrapper__xkdHw {padding: 1rem\n    }\n}\n\n.FileViewer-module_filecontentWrapper__xkdHw {--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-width: 1px;--tw-border-opacity: 1;border-color: rgb(212 212 212 / var(--tw-border-opacity))\n}\n\n.FileViewer-module_filecontent__ydgYb {flex-direction: column;gap: 0.25rem;position: relative;height: 100%;width: 100%\n}\n\n.FileViewer-module_filetreeview__Scms- {display: flex;flex-direction: column;list-style-type: none;gap: 0px;font-size: 1rem;line-height: 1.5rem;transition-property: all;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;width: 100%;min-width: 280px\n}\n\n@media (min-width: 1024px) {.FileViewer-module_filetreeview__Scms- {width: -webkit-fit-content;width: -moz-fit-content;width: fit-content\n    }\n}\n\n.FileViewer-module_filetreeview__Scms- {--tw-bg-opacity: 1;background-color: rgb(250 250 250 / var(--tw-bg-opacity));padding: 1rem;border-radius: 0.375rem;border-width: 1px;--tw-border-opacity: 1;border-color: rgb(212 212 212 / var(--tw-border-opacity));--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.FileViewer-module_filetreeviewOnly__Chbew {width: 100%\n}\n\n@media (min-width: 1024px) {.FileViewer-module_filetreeviewOnly__Chbew {width: 100%\n    }\n}\n\n.FileViewer-module_filetreeviewOnly__Chbew {min-height: -webkit-fit-content;min-height: -moz-fit-content;min-height: fit-content;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.FileViewer-module_filetreetitle__vNkIx {padding-top: 0.5rem;padding-bottom: 0.5rem;text-align: center;font-size: 1rem;line-height: 1.5rem;font-weight: 700\n}\n\n@media (min-width: 1024px) {.FileViewer-module_filetreetitle__vNkIx {text-align: left\n    }\n}\n\n.FileViewer-module_filecontentSlug__L6CMV {text-align: center;vertical-align: middle;font-weight: 700;--tw-text-opacity: 1;color: rgb(59 130 246 / var(--tw-text-opacity));-webkit-user-select: none;-moz-user-select: none;user-select: none\n}\n\n.FileViewer-module_filecontentLanguage__nJDIt {border-radius: 0.375rem;border-width: 1px;--tw-border-opacity: 1;border-color: rgb(212 212 212 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color: rgb(250 250 250 / var(--tw-bg-opacity));padding-left: 0.5rem;padding-right: 0.5rem;font-size: 0.75rem;line-height: 1rem;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;user-select: none;letter-spacing: 0.1em;--tw-text-opacity: 1;color: rgb(163 163 163 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_filecontentContent__6VHj4 {margin-top: 1rem;height: 100%\n}\n\n.FileViewer-module_filecontentContentNoFile__irtga {position: absolute;top: 0px;bottom: 0px;right: 0px;left: 0px;height: 200px;--tw-translate-y: 50%;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));display: flex;align-items: center;justify-content: center\n}\n\n.FileViewer-module_filecontentMsgWrapper__navxs {display: flex;flex-direction: column;align-items: center;gap: 1rem\n}\n\n.FileViewer-module_filecontentMsg__KsERc {font-size: 1.125rem;line-height: 1.75rem;font-weight: 500;--tw-text-opacity: 1;color: rgb(163 163 163 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_filecontentMsgIcon__cd0Yy {height: 2rem;width: 2rem;--tw-text-opacity: 1;color: rgb(163 163 163 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_filecontentMsgDescription__A8vy- {font-size: 1rem;line-height: 1.5rem;--tw-text-opacity: 1;color: rgb(163 163 163 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_filetree__YLqyd {width: -webkit-fit-content;width: -moz-fit-content;width: fit-content\n}\n\n@media (min-width: 1024px) {.FileViewer-module_filetree__YLqyd {width: 100%\n    }\n}\n\n.FileViewer-module_codePre__jgExW {height: 100%;max-height: 640px;width: 100%;overflow-y: auto;background-color: transparent;padding-top: 0px;padding-left: 0.5rem;font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-weight: 600;font-size: 0.875rem;line-height: 1.25rem;letter-spacing: 0.025em\n}\n\n.FileViewer-module_codeLine__yp-wI {display: flex;align-items: center;padding-top: 0.25rem;padding-bottom: 0.25rem;padding-left: 0.5rem;padding-right: 0.5rem\n}\n\n.FileViewer-module_codeLine__yp-wI:hover {--tw-bg-opacity: 1;background-color: rgb(245 245 245 / var(--tw-bg-opacity))\n}\n\n.FileViewer-module_codeHighlight__dyQox {background-color: rgb(59 130 246 / 0.05)\n}\n\n.FileViewer-module_codeHighlight__dyQox:hover {background-color: rgb(59 130 246 / 0.2)\n}\n\n.FileViewer-module_codeHighlight__dyQox .FileViewer-module_codeLineNumber__LnuLf {font-weight: 700;--tw-text-opacity: 1;color: rgb(115 115 115 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_codeLineNumber__LnuLf {margin-right: 0.5rem;width: 1.5rem;font-size: 0.875rem;line-height: 1.25rem;--tw-text-opacity: 1;color: rgb(212 212 212 / var(--tw-text-opacity));-webkit-user-select: none;-moz-user-select: none;user-select: none\n}\n\n.FileViewer-module_codeTag__5jNYb {--tw-text-opacity: 1;color: rgb(0 0 0 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_codeSetting__iMR4g {margin-top: auto;width: 100%;padding-top: 1rem;display: flex;align-items: center;gap: 1rem;position: relative\n}\n\n.FileViewer-module_codeSettingIcon__PHQJP {cursor: pointer;transition-property: all;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 100ms\n}\n\n.FileViewer-module_codeSettingIcon__PHQJP:hover {--tw-text-opacity: 1;color: rgb(115 115 115 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_codeSettingIcon__PHQJP {height: 1.5rem;width: 1.5rem;--tw-text-opacity: 1;color: rgb(163 163 163 / var(--tw-text-opacity))\n}\n\n.FileViewer-module_fileviewoptions__f8POx {position: absolute;left: 2.5rem;display: flex;flex-direction: row;gap: 0.5rem\n}\n";
var styles = {"fileviewer":"FileViewer-module_fileviewer__UfqHT","filecontentWrapper":"FileViewer-module_filecontentWrapper__xkdHw","filecontent":"FileViewer-module_filecontent__ydgYb","filetreeview":"FileViewer-module_filetreeview__Scms-","filetreeviewOnly":"FileViewer-module_filetreeviewOnly__Chbew","filetreetitle":"FileViewer-module_filetreetitle__vNkIx","filecontentSlug":"FileViewer-module_filecontentSlug__L6CMV","filecontentLanguage":"FileViewer-module_filecontentLanguage__nJDIt","filecontentContent":"FileViewer-module_filecontentContent__6VHj4","filecontentContentNoFile":"FileViewer-module_filecontentContentNoFile__irtga","filecontentMsgWrapper":"FileViewer-module_filecontentMsgWrapper__navxs","filecontentMsg":"FileViewer-module_filecontentMsg__KsERc","filecontentMsgIcon":"FileViewer-module_filecontentMsgIcon__cd0Yy","filecontentMsgDescription":"FileViewer-module_filecontentMsgDescription__A8vy-","filetree":"FileViewer-module_filetree__YLqyd","codePre":"FileViewer-module_codePre__jgExW","codeLine":"FileViewer-module_codeLine__yp-wI","codeHighlight":"FileViewer-module_codeHighlight__dyQox","codeLineNumber":"FileViewer-module_codeLineNumber__LnuLf","codeTag":"FileViewer-module_codeTag__5jNYb","codeSetting":"FileViewer-module_codeSetting__iMR4g","codeSettingIcon":"FileViewer-module_codeSettingIcon__PHQJP","fileviewoptions":"FileViewer-module_fileviewoptions__f8POx"};
styleInject(css_248z);

var parseNumericRange = {exports: {}};

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */

(function (module, exports) {
	function parsePart(string) {
	  let res = [];
	  let m;

	  for (let str of string.split(",").map((str) => str.trim())) {
	    // just a number
	    if (/^-?\d+$/.test(str)) {
	      res.push(parseInt(str, 10));
	    } else if (
	      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
	    ) {
	      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
	      let [_, lhs, sep, rhs] = m;

	      if (lhs && rhs) {
	        lhs = parseInt(lhs);
	        rhs = parseInt(rhs);
	        const incr = lhs < rhs ? 1 : -1;

	        // Make it inclusive by moving the right 'stop-point' away by one.
	        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

	        for (let i = lhs; i !== rhs; i += incr) res.push(i);
	      }
	    }
	  }

	  return res;
	}

	exports.default = parsePart;
	module.exports = parsePart;
} (parseNumericRange, parseNumericRange.exports));

var rangeParser = parseNumericRange.exports;

var CodeRenderer = function (_a) {
    var code = _a.code, _b = _a.lineNumbers, lineNumbers = _b === void 0 ? true : _b, _c = _a.language, language = _c === void 0 ? 'jsx' : _c, highlight = _a.highlight;
    var highlights = rangeParser(highlight || '');
    return (jsxRuntime.exports.jsx(Highlight, __assign({}, defaultProps, { code: code, language: language, theme: theme }, { children: function (_a) {
            var className = _a.className, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
            return (jsxRuntime.exports.jsx("pre", __assign({ className: clsx(className, styles.codePre) }, { children: tokens.map(function (line, i) { return (jsxRuntime.exports.jsxs("div", __assign({}, getLineProps({ line: line, key: i }), { className: clsx(styles.codeLine, [
                        highlights.includes(i) && styles.codeHighlight,
                    ]) }, { children: [lineNumbers && (jsxRuntime.exports.jsx("div", __assign({ className: styles.codeLineNumber }, { children: i + 1 }))), line.map(function (token, key) { return (jsxRuntime.exports.jsx("span", __assign({}, getTokenProps({ token: token, key: key }), { className: styles.codeTag }))); })] }))); }) })));
        } })));
};

var FileContext = createContext(0);
var FileViewerContext = createContext(undefined);
var FileContextProvider = FileContext.Provider;
var useFileTree = function () { return useContext(FileContext); };
var FileViewerContextProvider = FileViewerContext.Provider;
var useFileViewer = function () {
    var ctx = useContext(FileViewerContext);
    if (!ctx) {
        throw Error('useFileViewer must be used inside useFileViewerProvider.');
    }
    return ctx;
};

var FileContent = function (_a) {
    var file = _a.file, lineNumbers = _a.lineNumbers;
    var selectedFile = useFileViewer().selectedFile;
    var slug = selectedFile.slug, content = selectedFile.content, language = selectedFile.language, highlight = selectedFile.highlight;
    useEffect(function () { }, [content]);
    return (jsxRuntime.exports.jsx("div", __assign({ className: styles.filecontentWrapper }, { children: jsxRuntime.exports.jsx(AnimatePresence, __assign({ exitBeforeEnter: true }, { children: jsxRuntime.exports.jsxs(motion.div, __assign({ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: {
                    opacity: { duration: 0.1 },
                    ease: 'linear',
                }, className: styles.filecontent }, { children: [slug && (jsxRuntime.exports.jsxs("div", __assign({ className: 'flex flex-col items-center justify-center gap-2' }, { children: [jsxRuntime.exports.jsx("span", __assign({ className: styles.filecontentSlug }, { children: slug })), jsxRuntime.exports.jsx("span", __assign({ className: styles.filecontentLanguage }, { children: language === null || language === void 0 ? void 0 : language.toUpperCase() }))] }))), jsxRuntime.exports.jsx("div", __assign({ className: clsx([
                            content
                                ? styles.filecontentContent
                                : styles.filecontentContentNoFile,
                        ]) }, { children: !content && !slug ? (jsxRuntime.exports.jsxs("div", __assign({ className: styles.filecontentMsgWrapper }, { children: [jsxRuntime.exports.jsx(EyeIcon, { className: styles.filecontentMsgIcon }), jsxRuntime.exports.jsx("span", __assign({ className: styles.filecontentMsg }, { children: "No file selected." })), jsxRuntime.exports.jsx("span", __assign({ className: styles.filecontentMsgDescription }, { children: "Please select a file to view." }))] }))) : !content && slug ? (jsxRuntime.exports.jsxs("div", __assign({ className: styles.filecontentMsgWrapper }, { children: [jsxRuntime.exports.jsx(FileIcon, { className: styles.filecontentMsgIcon }), jsxRuntime.exports.jsx("span", __assign({ className: styles.filecontentMsg }, { children: "File Empty" })), jsxRuntime.exports.jsx("span", __assign({ className: styles.filecontentMsgDescription }, { children: "Please provide the content for the file." }))] }))) : (jsxRuntime.exports.jsx(CodeRenderer, { code: content, lineNumbers: lineNumbers, language: language, highlight: highlight })) }))] }), file.slug) })) })));
};

// TODO: Redo treeview styles
var FileViewer = React.memo(function (_a) {
    var children = _a.children, title = _a.title, _b = _a.nocontent, nocontent = _b === void 0 ? false : _b;
    var _c = React.useState({
        slug: undefined,
        content: undefined,
        language: undefined,
        highlight: undefined,
    }), selectedFile = _c[0], setSelectedFile = _c[1];
    var _d = React.useState(false), optionOpened = _d[0], setOptionOpened = _d[1];
    var _f = React.useState(!nocontent), showContent = _f[0], setShowContent = _f[1];
    var _g = React.useState(false), lineNumbers = _g[0], setLineNumbers = _g[1];
    React.useEffect(function () {
        console.log('mount');
    }, [showContent]);
    function handleOptionToggle() {
        setOptionOpened(!optionOpened);
    }
    function handleLineNumbersToggle() {
        setLineNumbers(!lineNumbers);
    }
    function handleShowContentToggle() {
        setShowContent(!showContent);
    }
    var ctx = {
        selectedFile: selectedFile,
        setSelectedFile: setSelectedFile,
    };
    useEffect(function () {
        setOptionOpened(false);
    }, [selectedFile]);
    return (jsxRuntime.exports.jsx(FileViewerContextProvider, __assign({ value: ctx }, { children: jsxRuntime.exports.jsx(AnimatePresence, __assign({ exitBeforeEnter: true }, { children: jsxRuntime.exports.jsxs(motion.div, __assign({ animate: { height: 'auto' }, className: styles.fileviewer }, { children: [jsxRuntime.exports.jsxs("div", __assign({ className: clsx(styles.filetreeview, [
                            !showContent && styles.filetreeviewOnly,
                        ]) }, { children: [title && jsxRuntime.exports.jsx("div", __assign({ className: styles.filetreetitle }, { children: title })), children, jsxRuntime.exports.jsxs("div", __assign({ className: styles.codeSetting }, { children: [jsxRuntime.exports.jsx(SettingsIcon, { className: clsx(styles.codeSettingIcon), onClick: function () { return handleOptionToggle(); } }), jsxRuntime.exports.jsx(AnimatePresence, __assign({ exitBeforeEnter: true }, { children: optionOpened && (jsxRuntime.exports.jsxs(motion.div, __assign({ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: {
                                                duration: 0.1,
                                                ease: 'linear',
                                            }, className: clsx(styles.fileviewoptions) }, { children: [jsxRuntime.exports.jsxs("div", __assign({ className: 'flex gap-1' }, { children: [jsxRuntime.exports.jsx("input", { type: 'checkbox', id: 'linenumbers', name: 'linenumbers', checked: lineNumbers, onChange: handleLineNumbersToggle }), jsxRuntime.exports.jsx("label", __assign({ htmlFor: 'linenumbers', className: 'text-sm text-neutral-600' }, { children: "Line numbers" }))] })), jsxRuntime.exports.jsxs("div", __assign({ className: 'flex gap-1' }, { children: [jsxRuntime.exports.jsx("input", { type: 'checkbox', id: 'showcontent', name: 'showcontent', checked: showContent, onChange: handleShowContentToggle }), jsxRuntime.exports.jsx("label", __assign({ htmlFor: 'showcontent', className: 'text-sm text-neutral-600' }, { children: "Show Content" }))] }))] }))) }))] }))] })), showContent && (jsxRuntime.exports.jsx(FileContent, { lineNumbers: lineNumbers, file: selectedFile })), selectedFile.content && showContent && (jsxRuntime.exports.jsx(Clipboard, { copyText: selectedFile.content, className: 'absolute bottom-6 right-8' }))] }), 'fileviewer') })) })));
});
FileViewer.displayName = 'SKA UI - TreeView';
var Folder = React.memo(function (_a) {
    var children = _a.children, name = _a.name, open = _a.open, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, _c = _a.slug, slug = _c === void 0 ? "".concat(name) : _c;
    var depth = useFileTree();
    var _d = React.useState(defaultOpen), isExpanded = _d[0], setIsExpanded = _d[1];
    var ref = React.useRef(null);
    var onKeyDown = function (e) {
        switch (e.key) {
            case 'Enter':
                setIsExpanded(!isExpanded);
                break;
        }
    };
    var sluggedChildren;
    if (children) {
        sluggedChildren = children.map(function (child, idx) {
            return React.cloneElement(child, {
                slug: slug + ' / ' + child.props.name,
                key: idx,
            });
        });
    }
    return (jsxRuntime.exports.jsx(FileContextProvider, __assign({ value: 1 + depth }, { children: jsxRuntime.exports.jsxs("li", __assign({ tabIndex: 0, onKeyDown: onKeyDown, className: clsx('treeview-folder', {
                'treeview-folder-open': isExpanded || open,
            }) }, { children: [jsxRuntime.exports.jsxs("a", __assign({ className: clsx('treeview-folder-label'), title: name, onClick: function () { return setIsExpanded(function (open) { return !open; }); } }, { children: [Array.from(Array(depth)).map(function (_e, i) {
                            return (jsxRuntime.exports.jsx("span", { className: 'treeview-indent treeview-indent-folder' }, i));
                        }), jsxRuntime.exports.jsxs("div", __assign({ className: 'treeview-folder-label' }, { children: [jsxRuntime.exports.jsx("span", __assign({ className: clsx('treeview-folder-label-status', {
                                        'treeview-folder-label-status-disabled': open,
                                    }) }, { children: open || isExpanded ? (jsxRuntime.exports.jsx(SquareMinusIcon, { className: 'align-middle' })) : (jsxRuntime.exports.jsx(SquarePlusIcon, {})) })), jsxRuntime.exports.jsx("span", __assign({ className: 'treeview-folder-label-icon' }, { children: jsxRuntime.exports.jsx(FolderIcon, { className: 'treeview-icons' }) })), jsxRuntime.exports.jsx("span", __assign({ className: 'treeview-folder-label-name' }, { children: name }))] }))] })), jsxRuntime.exports.jsx(AnimatePresence, { children: open ||
                        (isExpanded && (jsxRuntime.exports.jsx(motion.ul, __assign({ initial: { height: 0 }, animate: { height: 'auto' }, exit: { height: 0 }, transition: { duration: 0.1, ease: 'linear' }, ref: ref, className: 'treeview-folder-children overflow-hidden' }, { children: sluggedChildren })))) })] })) })));
});
Folder.displayName = 'SKA UI - TreeView/Folder';
var File = React.memo(function (_a) {
    var name = _a.name, active = _a.active, _b = _a.slug, slug = _b === void 0 ? name : _b, icon = _a.icon, content = _a.content, _c = _a.language, language = _c === void 0 ? 'jsx' : _c, highlight = _a.highlight;
    var depth = useFileTree();
    var ref = React.useRef(null);
    var _d = useFileViewer(), selectedFile = _d.selectedFile, setSelectedFile = _d.setSelectedFile;
    var selected = selectedFile.slug === slug;
    var iconClone = null;
    if (icon) {
        iconClone = React.cloneElement(icon, {
            className: 'treeview-icons',
        });
    }
    function handleSelect() {
        var file = {
            slug: slug,
            content: content,
            language: language,
            highlight: highlight,
        };
        setSelectedFile(file);
    }
    return (jsxRuntime.exports.jsxs("li", __assign({ ref: ref, onClick: handleSelect, tabIndex: 0, className: clsx('treeview-file', {
            'treeview-file-active': active,
            'treeview-file-selected': selected,
        }) }, { children: [jsxRuntime.exports.jsx("a", __assign({ title: name }, { children: Array.from(Array(depth)).map(function (_e, i) {
                    return (jsxRuntime.exports.jsx("span", { className: 'treeview-indent treeview-indent-file' }, i));
                }) })), jsxRuntime.exports.jsxs("div", __assign({ className: clsx('treeview-file-label') }, { children: [jsxRuntime.exports.jsx("span", __assign({ className: 'treeview-file-label-icon ' }, { children: icon ? iconClone : jsxRuntime.exports.jsx(FileIcon, { className: 'treeview-icons' }) })), jsxRuntime.exports.jsx("span", __assign({ className: 'treeview-file-label-name' }, { children: name }))] }))] })));
});
File.displayName = 'SKA UI - TreeView/File';

var Collapsible = function (props) {
    var className = props.className, children = props.children, _a = props.open, _open = _a === void 0 ? false : _a, title = props.title; props.transition; var rest = __rest(props, ["className", "children", "open", "title", "transition"]);
    var _b = React.useState(_open), open = _b[0], setOpen = _b[1];
    var _c = React.useState(open ? undefined : 0), height = _c[0], setHeight = _c[1];
    function handleToggle() {
        setOpen(!open);
    }
    var ref = React.useRef(null);
    React.useEffect(function () {
        if (!height || !open || !ref.current)
            return undefined;
        var resizeObserver = new ResizeObserver(function (el) {
            setHeight(el[0].contentRect.height + 32);
        });
        resizeObserver.observe(ref.current);
        return function () {
            resizeObserver.disconnect();
        };
    }, [height, open]);
    React.useEffect(function () {
        var _a;
        if (open) {
            setHeight((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height);
        }
        else
            setHeight(0);
    }, [open]);
    return (jsxRuntime.exports.jsxs("div", __assign({ className: clsx('collapsible', className) }, rest, { children: [jsxRuntime.exports.jsxs("div", __assign({ onClick: handleToggle, className: 'collapsible-title' }, { children: [jsxRuntime.exports.jsx("span", { children: title }), jsxRuntime.exports.jsx("span", { children: jsxRuntime.exports.jsx(ChevronDownIcon, { className: clsx('w-5 h-5 transition-transform duration-300', [
                                open && '-rotate-180',
                            ]) }) })] })), jsxRuntime.exports.jsx("div", __assign({ className: clsx('collapsible-content-wrapper'), style: { height: height } }, { children: jsxRuntime.exports.jsx("div", __assign({ ref: ref, className: 'collapsible-content-content' }, { children: children })) }))] })));
};

function $parcel$export$C(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $704cf1d3b684cc5c$exports = {};

$parcel$export$C($704cf1d3b684cc5c$exports, "SSRProvider", () => $704cf1d3b684cc5c$export$9f8ac96af4b1b2ae);
$parcel$export$C($704cf1d3b684cc5c$exports, "useSSRSafeId", () => $704cf1d3b684cc5c$export$619500959fc48b26);
$parcel$export$C($704cf1d3b684cc5c$exports, "useIsSSR", () => $704cf1d3b684cc5c$export$535bd6ca7f90a273);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $704cf1d3b684cc5c$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $704cf1d3b684cc5c$var$SSRContext = /*#__PURE__*/ React.createContext($704cf1d3b684cc5c$var$defaultContext);
function $704cf1d3b684cc5c$export$9f8ac96af4b1b2ae(props) {
    let cur = useContext($704cf1d3b684cc5c$var$SSRContext);
    let value = useMemo(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $704cf1d3b684cc5c$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
            current: 0
        })
    , [
        cur
    ]);
    return(/*#__PURE__*/ React.createElement($704cf1d3b684cc5c$var$SSRContext.Provider, {
        value: value
    }, props.children));
}
let $704cf1d3b684cc5c$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
function $704cf1d3b684cc5c$export$619500959fc48b26(defaultId) {
    let ctx = useContext($704cf1d3b684cc5c$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $704cf1d3b684cc5c$var$defaultContext && !$704cf1d3b684cc5c$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    return useMemo(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`
    , [
        defaultId
    ]);
}
function $704cf1d3b684cc5c$export$535bd6ca7f90a273() {
    let cur = useContext($704cf1d3b684cc5c$var$SSRContext);
    let isInSSRContext = cur !== $704cf1d3b684cc5c$var$defaultContext;
    let [isSSR, setIsSSR] = useState(isInSSRContext);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(()=>{
        setIsSSR(false);
    }, []);
    return isSSR;
}

function $parcel$export$B(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $458b0a5536c1a7cf$exports = {};

$parcel$export$B($458b0a5536c1a7cf$exports, "useControlledState", () => $458b0a5536c1a7cf$export$40bfa8c7b0832715);

function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value1, defaultValue, onChange) {
    let [stateValue, setStateValue] = useState(value1 || defaultValue);
    let ref = useRef(value1 !== undefined);
    let wasControlled = ref.current;
    let isControlled = value1 !== undefined;
    // Internal state reference for useCallback
    let stateRef = useRef(stateValue);
    if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
    ref.current = isControlled;
    let setValue = useCallback((value2, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(stateRef.current, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) stateRef.current = value;
        };
        if (typeof value2 === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value2(isControlled ? stateRef.current : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value2);
            onChangeCaller(value2, ...args);
        }
    }, [
        isControlled,
        onChange
    ]);
    // If a controlled component's value prop changes, we need to update stateRef
    if (isControlled) stateRef.current = value1;
    else value1 = stateValue;
    return [
        value1,
        setValue
    ];
}


var $9446cca9a3875146$exports = {};

$parcel$export$B($9446cca9a3875146$exports, "clamp", () => $9446cca9a3875146$export$7d15b64cf5a3a4c4);
$parcel$export$B($9446cca9a3875146$exports, "snapValueToStep", () => $9446cca9a3875146$export$cb6e0bb50bc19463);
$parcel$export$B($9446cca9a3875146$exports, "toFixedNumber", () => $9446cca9a3875146$export$b6268554fba451f);
function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step;
    // correct floating point behavior by rounding to step precision
    let string = step.toString();
    let index = string.indexOf('.');
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

function $parcel$export$A(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bdb11010cef70236$exports = {};

$parcel$export$A($bdb11010cef70236$exports, "useId", () => $bdb11010cef70236$export$f680877a34711e37);
$parcel$export$A($bdb11010cef70236$exports, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f842629);
$parcel$export$A($bdb11010cef70236$exports, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb8);

var $f0a04ccd8dbdd83b$exports = {};

$parcel$export$A($f0a04ccd8dbdd83b$exports, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);

const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== 'undefined' ? React.useLayoutEffect : ()=>{
};




let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = useState(defaultId);
    let nextId = useRef(null);
    let res = $704cf1d3b684cc5c$export$619500959fc48b26(value);
    let updateValue = useCallback((val)=>{
        nextId.current = val;
    }, []);
    $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    useEffect(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
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
    let updateId = useCallback(()=>{
        setResolvedId(function*() {
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

$parcel$export$A($ff5963eb1fccf552$exports, "chain", () => $ff5963eb1fccf552$export$e08e3b67e392101e);
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}


var $3ef42575df84b30b$exports = {};

$parcel$export$A($3ef42575df84b30b$exports, "mergeProps", () => $3ef42575df84b30b$export$9d1611c77c2fe928);



function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = clsx(a, b);
            else if (key === 'id' && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


var $5dc95899b306f630$exports = {};

$parcel$export$A($5dc95899b306f630$exports, "mergeRefs", () => $5dc95899b306f630$export$c9058316764c140e);
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === 'function') ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}


var $65484d02dcb7eb3e$exports = {};

$parcel$export$A($65484d02dcb7eb3e$exports, "filterDOMProps", () => $65484d02dcb7eb3e$export$457c3d6518dd4c6f);
const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {
}) {
    let { labelable: labelable , propNames: propNames  } = opts;
    let filteredProps = {
    };
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


var $7215afc6de606d6b$exports = {};

$parcel$export$A($7215afc6de606d6b$exports, "focusWithoutScrolling", () => $7215afc6de606d6b$export$de79e2c695e052f3);
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    var parent = element.parentNode;
    var scrollableElements = [];
    var rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element , scrollTop: scrollTop , scrollLeft: scrollLeft  } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


var $ab71dadb03a6fb2e$exports = {};

$parcel$export$A($ab71dadb03a6fb2e$exports, "getOffset", () => $ab71dadb03a6fb2e$export$622cea445a1c5b7d);
function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = 'horizontal') {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === 'horizontal' ? rect.right : rect.bottom;
    return orientation === 'horizontal' ? rect.left : rect.top;
}


var $103b0e103f1b5952$exports = {};

$parcel$export$A($103b0e103f1b5952$exports, "clamp", () => $9446cca9a3875146$export$7d15b64cf5a3a4c4);
$parcel$export$A($103b0e103f1b5952$exports, "snapValueToStep", () => $9446cca9a3875146$export$cb6e0bb50bc19463);



var $bbed8b41f857bcc0$exports = {};

$parcel$export$A($bbed8b41f857bcc0$exports, "runAfterTransition", () => $bbed8b41f857bcc0$export$24490316f764c430);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}


var $9cc09df9fd7676be$exports = {};

$parcel$export$A($9cc09df9fd7676be$exports, "useDrag1D", () => $9cc09df9fd7676be$export$7bbed75feba39706);


// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $9cc09df9fd7676be$var$draggingElements = [];
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
    console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
    let { containerRef: containerRef , reverse: reverse , orientation: orientation , onHover: onHover , onDrag: onDrag , onPositionChange: onPositionChange , onIncrement: onIncrement , onDecrement: onDecrement , onIncrementToMax: onIncrementToMax , onDecrementToMin: onDecrementToMin , onCollapseToggle: onCollapseToggle  } = props;
    let getPosition = (e)=>orientation === 'horizontal' ? e.clientX : e.clientY
    ;
    let getNextOffset = (e)=>{
        let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = useRef(false);
    let prevPosition = useRef(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = useRef({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
        window.removeEventListener('mouseup', onMouseUp, false);
        window.removeEventListener('mousemove', onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($9cc09df9fd7676be$var$draggingElements.some((elt)=>target.contains(elt)
        )) return;
        $9cc09df9fd7676be$var$draggingElements.push(target);
        window.addEventListener('mousemove', onMouseDragged, false);
        window.addEventListener('mouseup', onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Left':
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Up':
            case 'ArrowUp':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Down':
            case 'ArrowDown':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Home':
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case 'End':
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case 'Enter':
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


var $03deb23ff14920c4$exports = {};

$parcel$export$A($03deb23ff14920c4$exports, "useGlobalListeners", () => $03deb23ff14920c4$export$4eaf04e54aa8eed6);

function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = useRef(new Map());
    let addGlobalListener = useCallback((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = useCallback((eventTarget, type, listener, options)=>{
        var ref;
        let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = useCallback(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    useEffect(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


var $313b98861ee5dd6c$exports = {};

$parcel$export$A($313b98861ee5dd6c$exports, "useLabels", () => $313b98861ee5dd6c$export$d6875122194c7b44);

function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id , 'aria-label': label , 'aria-labelledby': labelledBy  } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = $bdb11010cef70236$export$f680877a34711e37(id);
    if (labelledBy && label) {
        let ids = new Set([
            ...labelledBy.trim().split(/\s+/),
            id
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}


var $df56164dff5785e2$exports = {};

$parcel$export$A($df56164dff5785e2$exports, "useObjectRef", () => $df56164dff5785e2$export$4338b53315abf666);


function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = useRef();
    /**
   * We're using `useLayoutEffect` here instead of `useEffect` because we want
   * to make sure that the `ref` value is up to date before other places in the
   * the execution cycle try to read it.
   */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') forwardedRef(objRef.current);
        else forwardedRef.current = objRef.current;
    }, [
        forwardedRef
    ]);
    return objRef;
}


var $4f58c5f72bcf79f7$exports = {};

$parcel$export$A($4f58c5f72bcf79f7$exports, "useUpdateEffect", () => $4f58c5f72bcf79f7$export$496315a1608d9602);

function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = useRef(true);
    useEffect(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



var $9daab02d461809db$exports = {};

$parcel$export$A($9daab02d461809db$exports, "useResizeObserver", () => $9daab02d461809db$export$683480f191c0e3ea);

function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref , onResize: onResize  } = options;
    useEffect(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


var $e7801be82b4b2a53$exports = {};

$parcel$export$A($e7801be82b4b2a53$exports, "useSyncRef", () => $e7801be82b4b2a53$export$4debdb1a3f0fa79e);

function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                context.ref.current = null;
            };
        }
    }, [
        context,
        ref
    ]);
}


var $62d8ded9296f3872$exports = {};

$parcel$export$A($62d8ded9296f3872$exports, "getScrollParent", () => $62d8ded9296f3872$export$cfa2225e87938781);
function $62d8ded9296f3872$export$cfa2225e87938781(node) {
    while(node && !$62d8ded9296f3872$var$isScrollable(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$var$isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


var $5df64b3807dc15ee$exports = {};

$parcel$export$A($5df64b3807dc15ee$exports, "useViewportSize", () => $5df64b3807dc15ee$export$d699905dd57c73ca);

// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let [size1, setSize] = useState(()=>$5df64b3807dc15ee$var$getViewportSize()
    );
    useEffect(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener('resize', onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener('resize', onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener('resize', onResize);
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

$parcel$export$A($ef06256079686ba0$exports, "useDescription", () => $ef06256079686ba0$export$f8aeda7b10753fa1);


let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id1, setId] = useState(null);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id1 : undefined
    };
}


var $c87311424ea30a05$exports = {};

$parcel$export$A($c87311424ea30a05$exports, "isMac", () => $c87311424ea30a05$export$9ac100e40613ea10);
$parcel$export$A($c87311424ea30a05$exports, "isIPhone", () => $c87311424ea30a05$export$186c6964ca17d99);
$parcel$export$A($c87311424ea30a05$exports, "isIPad", () => $c87311424ea30a05$export$7bef049ce92e4224);
$parcel$export$A($c87311424ea30a05$exports, "isIOS", () => $c87311424ea30a05$export$fedb369cb70207f1);
$parcel$export$A($c87311424ea30a05$exports, "isAppleDevice", () => $c87311424ea30a05$export$e1865c3bedcd822b);
$parcel$export$A($c87311424ea30a05$exports, "isWebKit", () => $c87311424ea30a05$export$78551043582a6a98);
$parcel$export$A($c87311424ea30a05$exports, "isChrome", () => $c87311424ea30a05$export$6446a186d09e379e);
$parcel$export$A($c87311424ea30a05$exports, "isAndroid", () => $c87311424ea30a05$export$a11b0059900ceec8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var ref;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((ref = window.navigator['userAgentData']) === null || ref === void 0 ? void 0 : ref.brands.some((brand)=>re.test(brand.brand)
    )) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test((window.navigator['userAgentData'] || window.navigator).platform) : false;
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

$parcel$export$A($e9faafb641e167db$exports, "useEvent", () => $e9faafb641e167db$export$90fc3a17d93f704c);

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler1, options) {
    let handlerRef = useRef(handler1);
    handlerRef.current = handler1;
    let isDisabled = handler1 == null;
    useEffect(()=>{
        if (isDisabled) return;
        let element = ref.current;
        let handler = (e)=>handlerRef.current.call(this, e)
        ;
        element.addEventListener(event, handler, options);
        return ()=>{
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

$parcel$export$A($1dbecbe27a04f9af$exports, "useValueEffect", () => $1dbecbe27a04f9af$export$14d238f342723f25);


function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = useState(defaultValue);
    let valueRef = useRef(value);
    let effect = useRef(null);
    valueRef.current = value;
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = useRef(null);
    nextRef.current = ()=>{
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef.current();
        else setValue(newValue.value);
    };
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = useCallback((fn)=>{
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

$parcel$export$A($2f04cbc44ee30ce0$exports, "scrollIntoView", () => $2f04cbc44ee30ce0$export$53a0910f038337bd);
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    let maxX = x + scrollView.offsetWidth;
    let maxY = y + scrollView.offsetHeight;
    if (offsetX <= x) x = offsetX;
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= y) y = offsetY;
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}

function $parcel$export$z(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3b117e43dc0ca95d$exports = {};

$parcel$export$z($3b117e43dc0ca95d$exports, "Pressable", () => $3b117e43dc0ca95d$export$27c701ed9e449e99);

var $f6c31cce2adf654f$exports = {};

$parcel$export$z($f6c31cce2adf654f$exports, "usePress", () => $f6c31cce2adf654f$export$45712eceda6fad21);

// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = 'default';
let $14c0b72509d70225$var$savedUserSelect = '';
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if ($c87311424ea30a05$export$fedb369cb70207f1()) {
        if ($14c0b72509d70225$var$state === 'default') {
            $14c0b72509d70225$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
            document.documentElement.style.webkitUserSelect = 'none';
        }
        $14c0b72509d70225$var$state = 'disabled';
    } else if (target) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = 'none';
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if ($c87311424ea30a05$export$fedb369cb70207f1()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== 'disabled') return;
        $14c0b72509d70225$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            $bbed8b41f857bcc0$export$24490316f764c430(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === 'restoring') {
                    if (document.documentElement.style.webkitUserSelect === 'none') document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
                    $14c0b72509d70225$var$savedUserSelect = '';
                    $14c0b72509d70225$var$state = 'default';
                }
            });
        }, 300);
    } else // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
        let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
        if (target.style.userSelect === 'none') target.style.userSelect = targetOldUserSelect;
        if (target.getAttribute('style') === '') target.removeAttribute('style');
        $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
}






function $8a9cb279dc87e130$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    return event.detail === 0 && !event.pointerType;
}
class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true
        ;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {
    }
    constructor(type, nativeEvent){
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
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = useRef({
        isFocused: false,
        onBlur: onBlur,
        observer: null
    });
    stateRef.current.onBlur = onBlur;
    // Clean up MutationObserver on unmount. See below.
    // eslint-disable-next-line arrow-body-style
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    // This function is called during a React onFocus event.
    return useCallback((e1)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e1.target instanceof HTMLButtonElement || e1.target instanceof HTMLInputElement || e1.target instanceof HTMLTextAreaElement || e1.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e1.target;
            let onBlurHandler = (e)=>{
                var // For backward compatibility, dispatch a (fake) React synthetic event.
                _current, ref;
                stateRef.current.isFocused = false;
                if (target.disabled) (ref = (_current = stateRef.current).onBlur) === null || ref === void 0 ? void 0 : ref.call(_current, new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer.disconnect();
                    target.dispatchEvent(new FocusEvent('blur'));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, []);
}



const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = React.createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';


function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
    if (context) {
        let { register: register , ...contextProps } = context;
        props = $3ef42575df84b30b$export$9d1611c77c2fe928(contextProps, props);
        register();
    }
    $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, props.ref);
    return props;
}
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress1 , onPressChange: onPressChange1 , onPressStart: onPressStart1 , onPressEnd: onPressEnd1 , onPressUp: onPressUp1 , isDisabled: isDisabled1 , isPressed: isPressedProp , preventFocusOnPress: preventFocusOnPress , shouldCancelOnPointerExit: shouldCancelOnPointerExit , allowTextSelectionOnPress: allowTextSelectionOnPress , // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _ , ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let propsRef = useRef(null);
    propsRef.current = {
        onPress: onPress1,
        onPressChange: onPressChange1,
        onPressStart: onPressStart1,
        onPressEnd: onPressEnd1,
        onPressUp: onPressUp1,
        isDisabled: isDisabled1,
        shouldCancelOnPointerExit: shouldCancelOnPointerExit
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
    let { addGlobalListener: addGlobalListener , removeAllGlobalListeners: removeAllGlobalListeners  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    let pressProps1 = useMemo(()=>{
        let state = ref.current;
        let triggerPressStart = (originalEvent, pointerType)=>{
            let { onPressStart: onPressStart , onPressChange: onPressChange , isDisabled: isDisabled  } = propsRef.current;
            if (isDisabled || state.didFirePressStart) return;
            if (onPressStart) onPressStart({
                type: 'pressstart',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
            if (onPressChange) onPressChange(true);
            state.didFirePressStart = true;
            setPressed(true);
        };
        let triggerPressEnd = (originalEvent, pointerType, wasPressed = true)=>{
            let { onPressEnd: onPressEnd , onPressChange: onPressChange , onPress: onPress , isDisabled: isDisabled  } = propsRef.current;
            if (!state.didFirePressStart) return;
            state.ignoreClickAfterPress = true;
            state.didFirePressStart = false;
            if (onPressEnd) onPressEnd({
                type: 'pressend',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
            if (onPressChange) onPressChange(false);
            setPressed(false);
            if (onPress && wasPressed && !isDisabled) onPress({
                type: 'press',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let triggerPressUp = (originalEvent, pointerType)=>{
            let { onPressUp: onPressUp , isDisabled: isDisabled  } = propsRef.current;
            if (isDisabled) return;
            if (onPressUp) onPressUp({
                type: 'pressup',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let cancel = (e)=>{
            if (state.isPressed) {
                if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isPressed = false;
                state.isOverTarget = false;
                state.activePointerId = null;
                state.pointerType = null;
                removeAllGlobalListeners();
                if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
            }
        };
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
                    e.stopPropagation();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        triggerPressStart(e, 'keyboard');
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred.
                        addGlobalListener(document, 'keyup', onKeyUp, false);
                    }
                }
            },
            onKeyUp (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target)) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0) {
                    e.stopPropagation();
                    if (isDisabled1) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === 'virtual' || $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
                        triggerPressStart(e, 'virtual');
                        triggerPressUp(e, 'virtual');
                        triggerPressEnd(e, 'virtual');
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e)) {
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
                e.stopPropagation();
                state.isPressed = false;
                let target = e.target;
                triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', state.target.contains(target));
                removeAllGlobalListeners();
                // If the target is a link, trigger the click method to open the URL,
                // but defer triggering pressEnd until onClick event handler.
                if (state.target.contains(target) && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') state.target.click();
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ($f6c31cce2adf654f$var$isVirtualPointerEvent(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                state.pointerType = e.pointerType;
                e.stopPropagation();
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
                    if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
                    triggerPressStart(e, state.pointerType);
                    addGlobalListener(document, 'pointermove', onPointerMove, false);
                    addGlobalListener(document, 'pointerup', onPointerUp, false);
                    addGlobalListener(document, 'pointercancel', onPointerCancel, false);
                }
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === 'virtual') return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
                    if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                e.stopPropagation();
                if (state.ignoreEmulatedMouseEvents) return;
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent) ? 'virtual' : 'mouse';
                if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
                triggerPressStart(e, state.pointerType);
                addGlobalListener(document, 'mouseup', onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = true;
                    triggerPressStart(e, state.pointerType);
                }
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = false;
                    triggerPressEnd(e, state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType);
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = 'touch';
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
                if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
                triggerPressStart(e, state.pointerType);
                addGlobalListener(window, 'scroll', onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (!state.isPressed) return;
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart(e, state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd(e, state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (!state.isPressed) return;
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    triggerPressUp(e, state.pointerType);
                    triggerPressEnd(e, state.pointerType);
                } else if (state.isOverTarget) triggerPressEnd(e, state.pointerType, false);
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel(e);
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
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
    // Remove user-select: none in case component unmounts immediately after pressStart
    // eslint-disable-next-line arrow-body-style
    useEffect(()=>{
        return ()=>{
            if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(ref.current.target);
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
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event) {
    const { key: key , code: code , target: target  } = event;
    const element = target;
    const { tagName: tagName , isContentEditable: isContentEditable  } = element;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && (!$f6c31cce2adf654f$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
    !(role === 'link' && key !== 'Enter');
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches  } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
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
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
    // We cannot prevent default if the target is a draggable element.
    return !target.draggable;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target) {
    return !((target.tagName === 'INPUT' || target.tagName === 'BUTTON') && target.type === 'submit');
}
function $f6c31cce2adf654f$var$isVirtualPointerEvent(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}



const $3b117e43dc0ca95d$export$27c701ed9e449e99 = /*#__PURE__*/ React.forwardRef(({ children: children , ...props }, ref)=>{
    let newRef = useRef();
    ref = ref !== null && ref !== void 0 ? ref : newRef;
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        ...props,
        ref: ref
    });
    let child = React.Children.only(children);
    return(/*#__PURE__*/ React.cloneElement(child, // @ts-ignore
    {
        ref: ref,
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(child.props, pressProps)
    }));
});


var $f1ab8c75478c6f73$exports = {};

$parcel$export$z($f1ab8c75478c6f73$exports, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b8);



const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ React.forwardRef(({ children: children , ...props }, ref)=>{
    let isRegistered = useRef(false);
    let prevContext = useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
    let context = $3ef42575df84b30b$export$9d1611c77c2fe928(prevContext || {
    }, {
        ...props,
        ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    $e7801be82b4b2a53$export$4debdb1a3f0fa79e(prevContext, ref);
    useEffect(()=>{
        if (!isRegistered.current) console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
    }, []);
    return(/*#__PURE__*/ React.createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb5.Provider, {
        value: context
    }, children));
});


var $a1ea59d68270f0dd$exports = {};

$parcel$export$z($a1ea59d68270f0dd$exports, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e6);


function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled , onFocus: onFocusProp , onBlur: onBlurProp , onFocusChange: onFocusChange  } = props;
    const onBlur = useCallback((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
    const onFocus = useCallback((e)=>{
        if (e.target === e.currentTarget) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : null
        }
    };
}


var $507fabe10e71c6fb$exports = {};

$parcel$export$z($507fabe10e71c6fb$exports, "isFocusVisible", () => $507fabe10e71c6fb$export$b9b3dfddab17db27);
$parcel$export$z($507fabe10e71c6fb$exports, "getInteractionModality", () => $507fabe10e71c6fb$export$630ff653c5ada6a9);
$parcel$export$z($507fabe10e71c6fb$exports, "setInteractionModality", () => $507fabe10e71c6fb$export$8397ddfc504fdb9a);
$parcel$export$z($507fabe10e71c6fb$exports, "useInteractionModality", () => $507fabe10e71c6fb$export$98e20ec92f614cfe);
$parcel$export$z($507fabe10e71c6fb$exports, "useFocusVisible", () => $507fabe10e71c6fb$export$ffd9e5021c1fb2d6);
$parcel$export$z($507fabe10e71c6fb$exports, "useFocusVisibleListener", () => $507fabe10e71c6fb$export$ec71b4b83ac08ec3);



let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ($8a9cb279dc87e130$export$60278871457622de(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
    if (typeof window === 'undefined' || $507fabe10e71c6fb$var$hasSetupGlobalListeners) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    document.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    window.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    window.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        document.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        document.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    else document.addEventListener('DOMContentLoaded', $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== 'pointer';
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
    useEffect(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return modality;
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    return !(isTextInput && modality === 'keyboard' && e instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {
}) {
    let { isTextInput: isTextInput , autoFocus: autoFocus  } = props;
    let [isFocusVisibleState, setFocusVisible] = useState(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3(($507fabe10e71c6fb$export$b9b3dfddab17db27)=>{
        setFocusVisible($507fabe10e71c6fb$export$b9b3dfddab17db27);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    useEffect(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, deps);
}


var $9ab94262bd0047c7$exports = {};

$parcel$export$z($9ab94262bd0047c7$exports, "useFocusWithin", () => $9ab94262bd0047c7$export$420e68273165f4ec);


function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled , onBlurWithin: onBlurWithin , onFocusWithin: onFocusWithin , onFocusWithinChange: onFocusWithinChange  } = props;
    let state = useRef({
        isFocusWithin: false
    });
    let onBlur = useCallback((e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state
    ]);
    let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
    let onFocus = useCallback((e)=>{
        if (!state.current.isFocusWithin) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            onFocus: null,
            onBlur: null
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


var $6179b936705e76d3$exports = {};

$parcel$export$z($6179b936705e76d3$exports, "useHover", () => $6179b936705e76d3$export$ae780daf29e6d456);

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart , onHoverChange: onHoverChange , onHoverEnd: onHoverEnd , isDisabled: isDisabled  } = props;
    let [isHovered, setHovered] = useState(false);
    let state = useRef({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    useEffect($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps1 , triggerHoverEnd: triggerHoverEnd1  } = useMemo(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {
        };
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    useEffect(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd1({
            currentTarget: state.target
        }, state.pointerType);
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps1,
        isHovered: isHovered
    };
}


var $e0b6e0b68ec7f50f$exports = {};

$parcel$export$z($e0b6e0b68ec7f50f$exports, "useInteractOutside", () => $e0b6e0b68ec7f50f$export$872b660ac5a1ff98);

function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref , onInteractOutside: onInteractOutside , isDisabled: isDisabled , onInteractOutsideStart: onInteractOutsideStart  } = props;
    let stateRef = useRef({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false,
        onInteractOutside: onInteractOutside,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let state = stateRef.current;
    state.onInteractOutside = onInteractOutside;
    state.onInteractOutsideStart = onInteractOutsideStart;
    useEffect(()=>{
        if (isDisabled) return;
        let onPointerDown = (e)=>{
            if ($e0b6e0b68ec7f50f$var$isValidEvent(e, ref) && state.onInteractOutside) {
                if (state.onInteractOutsideStart) state.onInteractOutsideStart(e);
                state.isPointerDown = true;
            }
        };
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onPointerUp = (e)=>{
                if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            // changing these to capture phase fixed combobox
            document.addEventListener('pointerdown', onPointerDown, true);
            document.addEventListener('pointerup', onPointerUp, true);
            return ()=>{
                document.removeEventListener('pointerdown', onPointerDown, true);
                document.removeEventListener('pointerup', onPointerUp, true);
            };
        } else {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.onInteractOutside && state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            document.addEventListener('mousedown', onPointerDown, true);
            document.addEventListener('mouseup', onMouseUp, true);
            document.addEventListener('touchstart', onPointerDown, true);
            document.addEventListener('touchend', onTouchEnd, true);
            return ()=>{
                document.removeEventListener('mousedown', onPointerDown, true);
                document.removeEventListener('mouseup', onMouseUp, true);
                document.removeEventListener('touchstart', onPointerDown, true);
                document.removeEventListener('touchend', onTouchEnd, true);
            };
        }
    }, [
        ref,
        state,
        isDisabled
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    // if the event target is no longer in the document
    if (event.target) {
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
    }
    return ref.current && !ref.current.contains(event.target);
}


var $46d819fcbaf35654$exports = {};

$parcel$export$z($46d819fcbaf35654$exports, "useKeyboard", () => $46d819fcbaf35654$export$8f71654801c2f7cd);
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}


function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {
        } : {
            onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyDown),
            onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyUp)
        }
    };
}


var $e8a7022cf87cba2a$exports = {};

$parcel$export$z($e8a7022cf87cba2a$exports, "useMove", () => $e8a7022cf87cba2a$export$36da96379f79f245);



function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart , onMove: onMove , onMoveEnd: onMoveEnd  } = props;
    let state = useRef({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    let moveProps1 = useMemo(()=>{
        let moveProps = {
        };
        let start = ()=>{
            $14c0b72509d70225$export$16a4697467175487();
            state.current.didMove = false;
        };
        let move = (originalEvent, pointerType, deltaX, deltaY)=>{
            if (deltaX === 0 && deltaY === 0) return;
            if (!state.current.didMove) {
                state.current.didMove = true;
                onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
                    type: 'movestart',
                    pointerType: pointerType,
                    shiftKey: originalEvent.shiftKey,
                    metaKey: originalEvent.metaKey,
                    ctrlKey: originalEvent.ctrlKey,
                    altKey: originalEvent.altKey
                });
            }
            onMove({
                type: 'move',
                pointerType: pointerType,
                deltaX: deltaX,
                deltaY: deltaY,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let end = (originalEvent, pointerType)=>{
            $14c0b72509d70225$export$b0d6fa1ab32e3295();
            if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
                type: 'moveend',
                pointerType: pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        if (typeof PointerEvent === 'undefined') {
            let onMouseMove = (e)=>{
                if (e.button === 0) {
                    move(e, 'mouse', e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onMouseUp = (e)=>{
                if (e.button === 0) {
                    end(e, 'mouse');
                    removeGlobalListener(window, 'mousemove', onMouseMove, false);
                    removeGlobalListener(window, 'mouseup', onMouseUp, false);
                }
            };
            moveProps.onMouseDown = (e)=>{
                if (e.button === 0) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    addGlobalListener(window, 'mousemove', onMouseMove, false);
                    addGlobalListener(window, 'mouseup', onMouseUp, false);
                }
            };
            let onTouchMove = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id
                );
                if (touch >= 0) {
                    let { pageX: pageX , pageY: pageY  } = e.changedTouches[touch];
                    move(e, 'touch', pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: pageX,
                        pageY: pageY
                    };
                }
            };
            let onTouchEnd = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id
                );
                if (touch >= 0) {
                    end(e, 'touch');
                    state.current.id = null;
                    removeGlobalListener(window, 'touchmove', onTouchMove);
                    removeGlobalListener(window, 'touchend', onTouchEnd);
                    removeGlobalListener(window, 'touchcancel', onTouchEnd);
                }
            };
            moveProps.onTouchStart = (e)=>{
                if (e.changedTouches.length === 0 || state.current.id != null) return;
                let { pageX: pageX , pageY: pageY , identifier: identifier  } = e.changedTouches[0];
                start();
                e.stopPropagation();
                e.preventDefault();
                state.current.lastPosition = {
                    pageX: pageX,
                    pageY: pageY
                };
                state.current.id = identifier;
                addGlobalListener(window, 'touchmove', onTouchMove, false);
                addGlobalListener(window, 'touchend', onTouchEnd, false);
                addGlobalListener(window, 'touchcancel', onTouchEnd, false);
            };
        } else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(e, pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    end(e, pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, 'pointermove', onPointerMove, false);
                    removeGlobalListener(window, 'pointerup', onPointerUp, false);
                    removeGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, 'pointermove', onPointerMove, false);
                    addGlobalListener(window, 'pointerup', onPointerUp, false);
                    addGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            move(e, 'keyboard', deltaX, deltaY);
            end(e, 'keyboard');
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case 'Left':
                case 'ArrowLeft':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case 'Right':
                case 'ArrowRight':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case 'Up':
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case 'Down':
                case 'ArrowDown':
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

$parcel$export$z($7d0a636d7a4dcefd$exports, "useScrollWheel", () => $7d0a636d7a4dcefd$export$2123ff2b87c81ca);


function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
    let { onScroll: onScroll , isDisabled: isDisabled  } = props;
    let onScrollHandler = useCallback((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    $e9faafb641e167db$export$90fc3a17d93f704c(ref, 'wheel', isDisabled ? null : onScrollHandler);
}


var $8a26561d2877236e$exports = {};

$parcel$export$z($8a26561d2877236e$exports, "useLongPress", () => $8a26561d2877236e$export$c24ed0104d07eab9);



const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled , onLongPressStart: onLongPressStart , onLongPressEnd: onLongPressEnd , onLongPress: onLongPress , threshold: threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD , accessibilityDescription: accessibilityDescription  } = props;
    const timeRef = useRef(null);
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        isDisabled: isDisabled,
        onPressStart (e1) {
            if (e1.pointerType === 'mouse' || e1.pointerType === 'touch') {
                if (onLongPressStart) onLongPressStart({
                    ...e1,
                    type: 'longpressstart'
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e1.target.dispatchEvent(new PointerEvent('pointercancel', {
                        bubbles: true
                    }));
                    if (onLongPress) onLongPress({
                        ...e1,
                        type: 'longpress'
                    });
                    timeRef.current = null;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e1.pointerType === 'touch') {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e1.target, 'contextmenu', onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, 'pointerup', ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e1.target, 'contextmenu', onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === 'mouse' || e.pointerType === 'touch')) onLongPressEnd({
                ...e,
                type: 'longpressend'
            });
        }
    });
    let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : null);
    return {
        longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, descriptionProps)
    };
}

function $parcel$export$y(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9bf71ea28793e738$exports = {};

$parcel$export$y($9bf71ea28793e738$exports, "FocusScope", () => $9bf71ea28793e738$export$20e40289641fbbb6);
$parcel$export$y($9bf71ea28793e738$exports, "useFocusManager", () => $9bf71ea28793e738$export$10c5169755ce7bd7);
$parcel$export$y($9bf71ea28793e738$exports, "getFocusableTreeWalker", () => $9bf71ea28793e738$export$2d6ec8fc375ceafa);
$parcel$export$y($9bf71ea28793e738$exports, "createFocusManager", () => $9bf71ea28793e738$export$c5251b9e124bf29);
var $6a99195332edec8b$exports = {};

$parcel$export$y($6a99195332edec8b$exports, "focusSafely", () => $6a99195332edec8b$export$80f3e147d781571c);


function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === 'virtual') {
        let lastFocusedElement = document.activeElement;
        $bbed8b41f857bcc0$export$24490316f764c430(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) $7215afc6de606d6b$export$de79e2c695e052f3(element);
        });
    } else $7215afc6de606d6b$export$de79e2c695e052f3(element);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $645f2e67b85a24c9$var$isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
    let { display: display , visibility: visibility  } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle  } = element.ownerDocument.defaultView;
        let { display: computedDisplay , visibility: computedVisibility  } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ React.createContext(null);
let $9bf71ea28793e738$var$activeScope = null;
let $9bf71ea28793e738$var$scopes = new Map();
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children , contain: contain , restoreFocus: restoreFocus , autoFocus: autoFocus  } = props;
    let startRef = useRef();
    let endRef = useRef();
    let scopeRef = useRef([]);
    let ctx = useContext($9bf71ea28793e738$var$FocusContext);
    let parentScope = ctx === null || ctx === void 0 ? void 0 : ctx.scopeRef;
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = startRef.current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children,
        parentScope
    ]);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        $9bf71ea28793e738$var$scopes.set(scopeRef, parentScope);
        return ()=>{
            // Restore the active scope on unmount if this scope or a descendant scope is active.
            // Parent effect cleanups run before children, so we need to check if the
            // parent scope actually still exists before restoring the active scope to it.
            if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$var$scopes.has(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
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
    return(/*#__PURE__*/ React.createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: {
            scopeRef: scopeRef,
            focusManager: focusManager
        }
    }, /*#__PURE__*/ React.createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ React.createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    })));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var ref;
    return (ref = useContext($9bf71ea28793e738$var$FocusContext)) === null || ref === void 0 ? void 0 : ref.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]'
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = useRef();
    let raf = useRef(null);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        let scope1 = scopeRef.current;
        if (!contain) return;
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || scopeRef !== $9bf71ea28793e738$var$activeScope) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
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
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if (!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if (scopeRef === $9bf71ea28793e738$var$activeScope) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    focusedNode.current = e.target;
                    focusedNode.current.focus();
                }
            });
        };
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('focusin', onFocus, false);
        scope1.forEach((element)=>element.addEventListener('focusin', onFocus, false)
        );
        scope1.forEach((element)=>element.addEventListener('focusout', onBlur, false)
        );
        return ()=>{
            document.removeEventListener('keydown', onKeyDown, false);
            document.removeEventListener('focusin', onFocus, false);
            scope1.forEach((element)=>element.removeEventListener('focusin', onFocus, false)
            );
            scope1.forEach((element)=>element.removeEventListener('focusout', onBlur, false)
            );
        };
    }, [
        scopeRef,
        contain
    ]);
    // eslint-disable-next-line arrow-body-style
    useEffect(()=>{
        return ()=>cancelAnimationFrame(raf.current)
        ;
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    for (let scope of $9bf71ea28793e738$var$scopes.keys()){
        if ($9bf71ea28793e738$var$isElementInScope(element, scope.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    return scope.some((node)=>node.contains(element)
    );
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope) {
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let s of $9bf71ea28793e738$var$scopes.keys()){
        if ((s === scope || $9bf71ea28793e738$var$isAncestorScope(scope, s)) && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    let parent = $9bf71ea28793e738$var$scopes.get(scope);
    if (!parent) return false;
    if (parent === ancestor) return true;
    return $9bf71ea28793e738$var$isAncestorScope(ancestor, parent);
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        $6a99195332edec8b$export$80f3e147d781571c(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err1) {
    // ignore
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
    const autoFocusRef = React.useRef(autoFocus);
    useEffect(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current)) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, []);
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    const nodeToRestoreRef = useRef(typeof document !== 'undefined' ? document.activeElement : null);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        let nodeToRestore = nodeToRestoreRef.current;
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) return;
            let focusedElement = document.activeElement;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) nodeToRestore = null;
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current))
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener('keydown', onKeyDown, true);
            if (restoreFocus && nodeToRestore && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current)) requestAnimationFrame(()=>{
                if (document.body.contains(nodeToRestore)) $9bf71ea28793e738$var$focusElement(nodeToRestore);
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
        acceptNode (node) {
            var ref;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (ref = opts.from) === null || ref === void 0 ? void 0 : ref.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && $645f2e67b85a24c9$export$e989c0fffaa6b27a(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {
}) {
    return {
        focusNext (opts = {
        }) {
            let root = ref.current;
            if (!root) return;
            let { from: from , tabbable: tabbable = defaultOptions.tabbable , wrap: wrap = defaultOptions.wrap , accept: accept = defaultOptions.accept  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { from: from , tabbable: tabbable = defaultOptions.tabbable , wrap: wrap = defaultOptions.wrap , accept: accept = defaultOptions.accept  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                previousNode = $9bf71ea28793e738$var$last(walker);
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { tabbable: tabbable = defaultOptions.tabbable , accept: accept = defaultOptions.accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { tabbable: tabbable = defaultOptions.tabbable , accept: accept = defaultOptions.accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}


var $907718708eab68af$exports = {};

$parcel$export$y($907718708eab68af$exports, "FocusRing", () => $907718708eab68af$export$1a38b4ad7f578e1d);



var $f7dceffc5ad7768b$exports = {};

$parcel$export$y($f7dceffc5ad7768b$exports, "useFocusRing", () => $f7dceffc5ad7768b$export$4e328f61c538687f);



function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {
}) {
    let { autoFocus: autoFocus = false , isTextInput: isTextInput , within: within  } = props;
    let state = useRef({
        isFocused: false,
        isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
    });
    let [isFocused1, setFocused] = useState(false);
    let [isFocusVisibleState, setFocusVisible] = useState(()=>state.current.isFocused && state.current.isFocusVisible
    );
    let updateState = useCallback(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible)
    , []);
    let onFocusChange = useCallback((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps  } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps  } = $9ab94262bd0047c7$export$420e68273165f4ec({
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
    let { children: children , focusClass: focusClass , focusRingClass: focusRingClass  } = props;
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $f7dceffc5ad7768b$export$4e328f61c538687f(props);
    let child = React.Children.only(children);
    return(/*#__PURE__*/ React.cloneElement(child, $3ef42575df84b30b$export$9d1611c77c2fe928(child.props, {
        ...focusProps,
        className: clsx({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    })));
}


var $e6afbd83fe6ebbd2$exports = {};

$parcel$export$y($e6afbd83fe6ebbd2$exports, "FocusableProvider", () => $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5);
$parcel$export$y($e6afbd83fe6ebbd2$exports, "useFocusable", () => $e6afbd83fe6ebbd2$export$4c014de7c8940b4c);




let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ React.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = useContext($e6afbd83fe6ebbd2$var$FocusableContext) || {
    };
    $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref);
    // eslint-disable-next-line
    let { ref: _ , ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children , ...otherProps } = props;
    let context = {
        ...otherProps,
        ref: ref
    };
    return(/*#__PURE__*/ React.createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children));
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ React.forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps  } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
    let { keyboardProps: keyboardProps  } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
    let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {
    } : domProps;
    let autoFocusRef = useRef(props.autoFocus);
    useEffect(()=>{
        if (autoFocusRef.current && domRef.current) $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return {
        focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}

function $parcel$export$x(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $298d61e98472621b$exports = {};

$parcel$export$x($298d61e98472621b$exports, "useLink", () => $298d61e98472621b$export$dcf14c9974fe2767);



function $298d61e98472621b$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a' , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , // @ts-ignore
    onClick: deprecatedOnClick , isDisabled: isDisabled , ...otherProps } = props;
    let linkProps;
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
    let { pressProps: pressProps , isPressed: isPressed  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(otherProps, {
        labelable: true
    });
    let interactionHandlers = $3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, pressProps);
    return {
        isPressed: isPressed,
        linkProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            onClick: (e)=>{
                pressProps.onClick(e);
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
            }
        })
    };
}

var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));

var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}

// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}

// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(WHITE_SPACE_REGEX)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    }
    else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = __assign(__assign(__assign({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = __assign(__assign(__assign({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = __assign(__assign({}, result), { trailingZeroDisplay: 'stripIfInteger' });
            }
            else if (opt) {
                result = __assign(__assign({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = __assign(__assign({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}

// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = {
    "AX": [
        "H"
    ],
    "BQ": [
        "H"
    ],
    "CP": [
        "H"
    ],
    "CZ": [
        "H"
    ],
    "DK": [
        "H"
    ],
    "FI": [
        "H"
    ],
    "ID": [
        "H"
    ],
    "IS": [
        "H"
    ],
    "ML": [
        "H"
    ],
    "NE": [
        "H"
    ],
    "RU": [
        "H"
    ],
    "SE": [
        "H"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "AS": [
        "h",
        "H"
    ],
    "BT": [
        "h",
        "H"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "GH": [
        "h",
        "H"
    ],
    "IN": [
        "h",
        "H"
    ],
    "LS": [
        "h",
        "H"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PW": [
        "h",
        "H"
    ],
    "SO": [
        "h",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WS": [
        "h",
        "H"
    ],
    "001": [
        "H",
        "h"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "AR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CL": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CU": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BO": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-EC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-PE": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "GT": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "HN": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MX": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "NI": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "PY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "SV": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "UY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "JP": [
        "H",
        "h",
        "K"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BO": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "EC": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "PE": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ]
};

/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
    var skeletonCopy = '';
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while (patternPos + 1 < skeleton.length &&
                skeleton.charAt(patternPos + 1) === patternChar) {
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
            }
            while (dayPeriodLen-- > 0) {
                skeletonCopy += dayPeriodChar;
            }
            while (hourLen-- > 0) {
                skeletonCopy = hourChar + skeletonCopy;
            }
        }
        else if (patternChar === 'J') {
            skeletonCopy += 'H';
        }
        else {
            skeletonCopy += patternChar;
        }
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined &&
        // @ts-ignore hourCycle(s) is not identified yet
        locale.hourCycles &&
        // @ts-ignore
        locale.hourCycles.length) {
        // @ts-ignore
        hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
        switch (hourCycle) {
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw new Error('Invalid hourCycle');
        }
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') {
        regionTag = locale.maximize().region;
    }
    var hourCycles = timeData[regionTag || ''] ||
        timeData[languageTag || ''] ||
        timeData["".concat(languageTag, "-001")] ||
        timeData['001'];
    return hourCycles[0];
}

var _a;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: TYPE.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: TYPE.literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: TYPE.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: TYPE.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: TYPE.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: TYPE.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var dateTimePattern = skeleton;
                        // Get "best match" pattern only if locale is passed, if not, let it
                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
                        // for unsupported patterns.
                        if (this.locale) {
                            dateTimePattern = getBestPattern(skeleton, this.locale);
                        }
                        var style = {
                            type: SKELETON_TYPE.dateTime,
                            pattern: dateTimePattern,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? parseDateTimeSkeleton(dateTimePattern)
                                : {},
                        };
                        var type = argType === 'date' ? TYPE.date : TYPE.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? TYPE.number
                            : argType === 'date'
                                ? TYPE.date
                                : TYPE.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: TYPE.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: TYPE.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = parseNumberSkeletonFromString(skeleton);
        }
        catch (e) {
            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: SKELETON_TYPE.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? parseNumberSkeleton(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) ;
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());
/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}

function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if (isSelectElement(el) || isPluralElement(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
            delete el.style.location;
        }
        else if ((isDateElement(el) || isTimeElement(el)) &&
            isDateTimeSkeleton(el.style)) {
            delete el.style.location;
        }
        else if (isTagElement(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = __assign({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new Parser(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(ErrorKind[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}

//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    __extends(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error));
var InvalidValueError = /** @class */ (function (_super) {
    __extends(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));
var InvalidValueTypeError = /** @class */ (function (_super) {
    __extends(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));
var MissingValueError = /** @class */ (function (_super) {
    __extends(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));

var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && isLiteralElement(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (isLiteralElement(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (isPoundElement(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new MissingValueError(varName, originalMessage);
        }
        var value = values[varName];
        if (isArgumentElement(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (isDateElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTimeElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isNumberElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : isNumberSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTagElement(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new InvalidValueTypeError(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (isSelectElement(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (isPluralElement(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return __assign(__assign(__assign({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = __assign(__assign({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, __assign({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: strategies.variadic,
        }),
        getDateTimeFormat: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: strategies.variadic,
        }),
        getPluralRules: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: strategies.variadic,
        }),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== PART_TYPE.literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: _this.resolvedLocale.toString(),
        }); };
        this.getAst = function () { return _this.ast; };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
                locale: this.resolvedLocale,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function (locales) {
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = parse;
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());

function $parcel$export$w(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d6fd23bc337660df$exports = {};

$parcel$export$w($d6fd23bc337660df$exports, "MessageDictionary", () => $d6fd23bc337660df$export$64839e615120df17);
class $d6fd23bc337660df$export$64839e615120df17 {
    getStringForLocale(key, locale) {
        let strings = this.messages[locale];
        if (!strings) {
            strings = $d6fd23bc337660df$var$getStringsForLocale(locale, this.messages, this.defaultLocale);
            this.messages[locale] = strings;
        }
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        this.messages = {
            ...messages
        };
        this.defaultLocale = defaultLocale;
    }
}
function $d6fd23bc337660df$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $d6fd23bc337660df$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $d6fd23bc337660df$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}


var $972eb555d604f491$exports = {};

$parcel$export$w($972eb555d604f491$exports, "MessageFormatter", () => $972eb555d604f491$export$526ebc05ff964723);

class $972eb555d604f491$export$526ebc05ff964723 {
    format(key, variables) {
        let message = this.cache[key];
        if (!message) {
            let msg = this.messages.getStringForLocale(key, this.locale);
            if (!msg) throw new Error(`Could not find intl message ${key} in ${this.locale} locale`);
            message = new IntlMessageFormat(msg, this.locale);
            this.cache[key] = message;
        }
        let varCopy;
        if (variables) varCopy = Object.keys(variables).reduce((acc, key)=>{
            acc[key] = variables[key] == null ? false : variables[key];
            return acc;
        }, {
        });
        return message.format(varCopy);
    }
    constructor(locale, messages){
        this.locale = locale;
        this.messages = messages;
        this.cache = {
        };
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $fb18d541ea1ad717$var$formatterCache = new Map();
class $fb18d541ea1ad717$export$ad991b66133851cf {
    /** Formats a date as a string according to the locale and format options passed to the constructor. */ format(value) {
        return this.formatter.format(value);
    }
    /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */ formatToParts(value) {
        return this.formatter.formatToParts(value);
    }
    /** Formats a date range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRange === 'function') // @ts-ignore
        return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} – ${this.formatter.format(end)}`;
    }
    /** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
        return this.formatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.formatter.formatToParts(start);
        let endParts = this.formatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })
            ),
            {
                type: 'literal',
                value: ' – ',
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                })
            )
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let resolvedOptions = this.formatter.resolvedOptions();
        if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        // Safari uses a different name for the Ethiopic (Amete Alem) calendar.
        // https://bugs.webkit.org/show_bug.cgi?id=241564
        if (resolvedOptions.calendar === 'ethiopic-amete-alem') resolvedOptions.calendar = 'ethioaa';
        return resolvedOptions;
    }
    constructor(locale, options = {
    }){
        this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
        this.options = options;
    }
}
// There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802
const $fb18d541ea1ad717$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {
}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
    if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
let $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
    if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
        ...options,
        timeZone: undefined // use local timezone
    });
    let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p)=>p.type === 'hour'
    ).value, 10);
    let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p)=>p.type === 'hour'
    ).value, 10);
    if (min === 0 && max === 23) return 'h23';
    if (min === 24 && max === 23) return 'h24';
    if (min === 0 && max === 11) return 'h11';
    if (min === 12 && max === 11) return 'h12';
    throw new Error('Unexpected hour cycle result');
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    // @ts-ignore
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch (e) {
}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    // @ts-ignore
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch (e1) {
}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: '°',
            'ja-JP': ' 度',
            'zh-TW': '度',
            'sl-SI': ' °'
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var ref;
            let { unit: unit , unitDisplay: unitDisplay = 'short' , locale: locale  } = this.resolvedOptions();
            let values = (ref = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || ref === void 0 ? void 0 : ref[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        // @ts-ignore
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.numberFormatter.formatRange === 'function') // @ts-ignore
        return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} – ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.numberFormatter.formatRangeToParts === 'function') // @ts-ignore
        return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })
            ),
            {
                type: 'literal',
                value: ' – ',
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                })
            )
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {
    }){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {
}) {
    let { numberingSystem: numberingSystem  } = options;
    if (numberingSystem && locale.indexOf('-u-nu-') === -1) locale = `${locale}-u-nu-${numberingSystem}`;
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var ref;
        let { unit: unit , unitDisplay: unitDisplay = 'short'  } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((ref = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || ref === void 0 ? void 0 : ref[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}

function $parcel$export$v(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $18f2051aff69b9bf$exports = {};

$parcel$export$v($18f2051aff69b9bf$exports, "I18nProvider", () => $18f2051aff69b9bf$export$a54013f0d02a8f82);
$parcel$export$v($18f2051aff69b9bf$exports, "useLocale", () => $18f2051aff69b9bf$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(locale) {
    // If the Intl.Locale API is available, use it to get the script for the locale.
    // This is more accurate than guessing by language, since languages can be written in multiple scripts.
    // @ts-ignore
    if (Intl.Locale) {
        // @ts-ignore
        let script = new Intl.Locale(locale).maximize().script;
        return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = locale.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}





function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    // @ts-ignore
    let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        // @ts-ignore
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch (_err) {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = $704cf1d3b684cc5c$export$535bd6ca7f90a273();
    let [defaultLocale, setDefaultLocale] = useState($1e5a04cdaf7d1af8$var$currentLocale);
    useEffect(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}



const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ React.createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale , children: children  } = props;
    let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
    let value = locale ? {
        locale: locale,
        direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    } : defaultLocale;
    return(/*#__PURE__*/ React.createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children));
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
    let context = useContext($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}


var $321bc95feeb923dd$exports = {};

$parcel$export$v($321bc95feeb923dd$exports, "useMessageFormatter", () => $321bc95feeb923dd$export$ec23bf898b1eed85);



const $321bc95feeb923dd$var$cache = new WeakMap();
function $321bc95feeb923dd$var$getCachedDictionary(strings) {
    let dictionary = $321bc95feeb923dd$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new $d6fd23bc337660df$export$64839e615120df17(strings);
        $321bc95feeb923dd$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $321bc95feeb923dd$export$ec23bf898b1eed85(strings) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let dictionary = useMemo(()=>$321bc95feeb923dd$var$getCachedDictionary(strings)
    , [
        strings
    ]);
    let formatter = useMemo(()=>new $972eb555d604f491$export$526ebc05ff964723(locale, dictionary)
    , [
        locale,
        dictionary
    ]);
    return useCallback((key, variables)=>formatter.format(key, variables)
    , [
        formatter
    ]);
}


var $896ba0a80a8f4d36$exports = {};

$parcel$export$v($896ba0a80a8f4d36$exports, "useDateFormatter", () => $896ba0a80a8f4d36$export$85fd5fdf27bacc79);



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    let lastOptions = useRef(null);
    if (options && lastOptions.current && $896ba0a80a8f4d36$var$isEqual(options, lastOptions.current)) options = lastOptions.current;
    lastOptions.current = options;
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    return useMemo(()=>new $fb18d541ea1ad717$export$ad991b66133851cf(locale, options)
    , [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


var $a916eb452884faea$exports = {};

$parcel$export$v($a916eb452884faea$exports, "useNumberFormatter", () => $a916eb452884faea$export$b7a616150fdb9f44);



function $a916eb452884faea$export$b7a616150fdb9f44(options = {
}) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    return useMemo(()=>new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(locale, options)
    , [
        locale,
        options
    ]);
}


var $325a3faab7a68acd$exports = {};

$parcel$export$v($325a3faab7a68acd$exports, "useCollator", () => $325a3faab7a68acd$export$a16aca283550c30d);

let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}


var $bb77f239b46e8c72$exports = {};

$parcel$export$v($bb77f239b46e8c72$exports, "useFilter", () => $bb77f239b46e8c72$export$3274cf84b703fff);

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = $325a3faab7a68acd$export$a16aca283550c30d({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    return {
        startsWith (string, substring) {
            if (substring.length === 0) return true;
            // Normalize both strings so we can slice safely
            // TODO: take into account the ignorePunctuation option as well...
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(0, substring.length), substring) === 0;
        },
        endsWith (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(-substring.length), substring) === 0;
        },
        contains (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            let scan = 0;
            let sliceLen = substring.length;
            for(; scan + sliceLen <= string.length; scan++){
                let slice = string.slice(scan, scan + sliceLen);
                if (collator.compare(substring, slice) === 0) return true;
            }
            return false;
        }
    };
}

function $parcel$export$u(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault$8(a) {
  return a && a.__esModule ? a.default : a;
}
var $dafd15390222438a$exports = {};

$parcel$export$u($dafd15390222438a$exports, "useBreadcrumbItem", () => $dafd15390222438a$export$452b38fce62c9384);

function $dafd15390222438a$export$452b38fce62c9384(props, ref) {
    let { isCurrent: isCurrent , isDisabled: isDisabled , 'aria-current': ariaCurrent , elementType: elementType = 'a' , ...otherProps } = props;
    let { linkProps: linkProps  } = $298d61e98472621b$export$dcf14c9974fe2767({
        isDisabled: isDisabled || isCurrent,
        elementType: elementType,
        ...otherProps
    }, ref);
    let isHeading = /^h[1-6]$/.test(elementType);
    let itemProps = {
    };
    if (!isHeading) itemProps = linkProps;
    if (isCurrent) {
        itemProps['aria-current'] = ariaCurrent || 'page';
        // isCurrent sets isDisabled === true for the current item,
        // so we have to restore the tabIndex in order to support autoFocus.
        itemProps.tabIndex = props.autoFocus ? -1 : undefined;
    }
    return {
        itemProps: {
            'aria-disabled': isDisabled,
            ...itemProps
        }
    };
}


var $848231d7a2b3998e$exports = {};

$parcel$export$u($848231d7a2b3998e$exports, "useBreadcrumbs", () => $848231d7a2b3998e$export$8cefe241bd876ca0);

var $28dc7e2f5ed40c80$exports = {};
var $b91590b2dc47de39$exports = {};
$b91590b2dc47de39$exports = JSON.parse("{\"breadcrumbs\":\"عناصر الواجهة\"}");


var $55b0693b2cf3fe91$exports = {};
$55b0693b2cf3fe91$exports = JSON.parse("{\"breadcrumbs\":\"Трохи хляб\"}");


var $6ec1ed7729e948cc$exports = {};
$6ec1ed7729e948cc$exports = JSON.parse("{\"breadcrumbs\":\"Popis cesty\"}");


var $5a41bb2baa6861e4$exports = {};
$5a41bb2baa6861e4$exports = JSON.parse("{\"breadcrumbs\":\"Brødkrummer\"}");


var $f28bbea439e87eca$exports = {};
$f28bbea439e87eca$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $b3eca51cb720961a$exports = {};
$b3eca51cb720961a$exports = JSON.parse("{\"breadcrumbs\":\"Πλοηγήσεις breadcrumb\"}");


var $0b39b205118db415$exports = {};
$0b39b205118db415$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $f467c0ee7bfb0950$exports = {};
$f467c0ee7bfb0950$exports = JSON.parse("{\"breadcrumbs\":\"Migas de pan\"}");


var $ab711d2ffb4cdf3d$exports = {};
$ab711d2ffb4cdf3d$exports = JSON.parse("{\"breadcrumbs\":\"Lingiread\"}");


var $b63105d663e6f9d5$exports = {};
$b63105d663e6f9d5$exports = JSON.parse("{\"breadcrumbs\":\"Navigointilinkit\"}");


var $9d2ed7be7fcdc2a1$exports = {};
$9d2ed7be7fcdc2a1$exports = JSON.parse("{\"breadcrumbs\":\"Chemin de navigation\"}");


var $c5704294d85c7b5d$exports = {};
$c5704294d85c7b5d$exports = JSON.parse("{\"breadcrumbs\":\"שבילי ניווט\"}");


var $20c975671d6bbc63$exports = {};
$20c975671d6bbc63$exports = JSON.parse("{\"breadcrumbs\":\"Navigacijski putovi\"}");


var $2569ca3917233115$exports = {};
$2569ca3917233115$exports = JSON.parse("{\"breadcrumbs\":\"Morzsamenü\"}");


var $caa152f7f8e96c85$exports = {};
$caa152f7f8e96c85$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumb\"}");


var $cbc6af0cc98fad10$exports = {};
$cbc6af0cc98fad10$exports = JSON.parse("{\"breadcrumbs\":\"パンくずリスト\"}");


var $ad9be5d332b4d607$exports = {};
$ad9be5d332b4d607$exports = JSON.parse("{\"breadcrumbs\":\"탐색 표시\"}");


var $659de19a00ff9617$exports = {};
$659de19a00ff9617$exports = JSON.parse("{\"breadcrumbs\":\"Naršymo kelias\"}");


var $173e9fb4d14fe309$exports = {};
$173e9fb4d14fe309$exports = JSON.parse("{\"breadcrumbs\":\"Atpakaļceļi\"}");


var $d8e2640a066567a9$exports = {};
$d8e2640a066567a9$exports = JSON.parse("{\"breadcrumbs\":\"Navigasjonsstier\"}");


var $d71fd764236c0d12$exports = {};
$d71fd764236c0d12$exports = JSON.parse("{\"breadcrumbs\":\"Broodkruimels\"}");


var $f4ad3faf9f4aaec6$exports = {};
$f4ad3faf9f4aaec6$exports = JSON.parse("{\"breadcrumbs\":\"Struktura nawigacyjna\"}");


var $9703be9d55d8e9c2$exports = {};
$9703be9d55d8e9c2$exports = JSON.parse("{\"breadcrumbs\":\"Caminho detalhado\"}");


var $7e23baec8a14f309$exports = {};
$7e23baec8a14f309$exports = JSON.parse("{\"breadcrumbs\":\"Categorias\"}");


var $568f95594049d56e$exports = {};
$568f95594049d56e$exports = JSON.parse("{\"breadcrumbs\":\"Miez de pâine\"}");


var $625df06cecc70764$exports = {};
$625df06cecc70764$exports = JSON.parse("{\"breadcrumbs\":\"Навигация\"}");


var $b5a67525f3a2f594$exports = {};
$b5a67525f3a2f594$exports = JSON.parse("{\"breadcrumbs\":\"Navigačné prvky Breadcrumbs\"}");


var $16125922964febca$exports = {};
$16125922964febca$exports = JSON.parse("{\"breadcrumbs\":\"Drobtine\"}");


var $de104bf355206bcf$exports = {};
$de104bf355206bcf$exports = JSON.parse("{\"breadcrumbs\":\"Putanje navigacije\"}");


var $d5ab76bcbadc9c07$exports = {};
$d5ab76bcbadc9c07$exports = JSON.parse("{\"breadcrumbs\":\"Sökvägar\"}");


var $a6a1af5968159b55$exports = {};
$a6a1af5968159b55$exports = JSON.parse("{\"breadcrumbs\":\"İçerik haritaları\"}");


var $5204a30f0d17ffec$exports = {};
$5204a30f0d17ffec$exports = JSON.parse("{\"breadcrumbs\":\"Навігаційна стежка\"}");


var $8d15e736e12d3dfd$exports = {};
$8d15e736e12d3dfd$exports = JSON.parse("{\"breadcrumbs\":\"导航栏\"}");


var $f8c49dd804b75140$exports = {};
$f8c49dd804b75140$exports = JSON.parse("{\"breadcrumbs\":\"導覽列\"}");


$28dc7e2f5ed40c80$exports = {
    "ar-AE": $b91590b2dc47de39$exports,
    "bg-BG": $55b0693b2cf3fe91$exports,
    "cs-CZ": $6ec1ed7729e948cc$exports,
    "da-DK": $5a41bb2baa6861e4$exports,
    "de-DE": $f28bbea439e87eca$exports,
    "el-GR": $b3eca51cb720961a$exports,
    "en-US": $0b39b205118db415$exports,
    "es-ES": $f467c0ee7bfb0950$exports,
    "et-EE": $ab711d2ffb4cdf3d$exports,
    "fi-FI": $b63105d663e6f9d5$exports,
    "fr-FR": $9d2ed7be7fcdc2a1$exports,
    "he-IL": $c5704294d85c7b5d$exports,
    "hr-HR": $20c975671d6bbc63$exports,
    "hu-HU": $2569ca3917233115$exports,
    "it-IT": $caa152f7f8e96c85$exports,
    "ja-JP": $cbc6af0cc98fad10$exports,
    "ko-KR": $ad9be5d332b4d607$exports,
    "lt-LT": $659de19a00ff9617$exports,
    "lv-LV": $173e9fb4d14fe309$exports,
    "nb-NO": $d8e2640a066567a9$exports,
    "nl-NL": $d71fd764236c0d12$exports,
    "pl-PL": $f4ad3faf9f4aaec6$exports,
    "pt-BR": $9703be9d55d8e9c2$exports,
    "pt-PT": $7e23baec8a14f309$exports,
    "ro-RO": $568f95594049d56e$exports,
    "ru-RU": $625df06cecc70764$exports,
    "sk-SK": $b5a67525f3a2f594$exports,
    "sl-SI": $16125922964febca$exports,
    "sr-SP": $de104bf355206bcf$exports,
    "sv-SE": $d5ab76bcbadc9c07$exports,
    "tr-TR": $a6a1af5968159b55$exports,
    "uk-UA": $5204a30f0d17ffec$exports,
    "zh-CN": $8d15e736e12d3dfd$exports,
    "zh-TW": $f8c49dd804b75140$exports
};



function $848231d7a2b3998e$export$8cefe241bd876ca0(props) {
    let { 'aria-label': ariaLabel , ...otherProps } = props;
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$8($28dc7e2f5ed40c80$exports)));
    return {
        navProps: {
            ...$65484d02dcb7eb3e$export$457c3d6518dd4c6f(otherProps, {
                labelable: true
            }),
            'aria-label': ariaLabel || formatMessage('breadcrumbs')
        }
    };
}

function $parcel$export$t(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $701a24aa0da5b062$exports = {};

$parcel$export$t($701a24aa0da5b062$exports, "useButton", () => $701a24aa0da5b062$export$ea18c227d4417cc3);




function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = 'button' , isDisabled: isDisabled , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , onPressChange: onPressChange , preventFocusOnPress: // @ts-ignore - undocumented
    preventFocusOnPress , allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled , // @ts-ignore
    onClick: deprecatedOnClick , href: href , target: target , rel: rel , type: type = 'button'  } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type: type,
        disabled: isDisabled
    };
    else additionalProps = {
        role: 'button',
        tabIndex: isDisabled ? undefined : 0,
        href: elementType === 'a' && isDisabled ? undefined : href,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps: pressProps , isPressed: isPressed  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, pressProps, $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            onClick: (e)=>{
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
            }
        })
    };
}


var $55f54f7887471b58$exports = {};

$parcel$export$t($55f54f7887471b58$exports, "useToggleButton", () => $55f54f7887471b58$export$51e84d46ca0bc451);



function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected  } = state;
    const { isPressed: isPressed , buttonProps: buttonProps  } = $701a24aa0da5b062$export$ea18c227d4417cc3({
        ...props,
        onPress: $ff5963eb1fccf552$export$e08e3b67e392101e(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(buttonProps, {
            'aria-pressed': isSelected
        })
    };
}

function $parcel$export$s(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $319e236875307eab$exports = {};

$parcel$export$s($319e236875307eab$exports, "announce", () => $319e236875307eab$export$a9b970dcc4ae71a9);
$parcel$export$s($319e236875307eab$exports, "clearAnnouncer", () => $319e236875307eab$export$d10ae4f68404609a);
$parcel$export$s($319e236875307eab$exports, "destroyAnnouncer", () => $319e236875307eab$export$d8686216b8b81b2f);
/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
    $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);
}
function $319e236875307eab$export$d8686216b8b81b2f() {
    if ($319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer.destroy();
        $319e236875307eab$var$liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $319e236875307eab$var$LiveAnnouncer {
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
        if (!this.node) return;
        let node = document.createElement('div');
        node.textContent = message;
        if (assertiveness === 'assertive') this.assertiveLog.appendChild(node);
        else this.politeLog.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if (!assertiveness || assertiveness === 'assertive') this.assertiveLog.innerHTML = '';
        if (!assertiveness || assertiveness === 'polite') this.politeLog.innerHTML = '';
    }
    constructor(){
        this.node = document.createElement('div');
        this.node.dataset.liveAnnouncer = 'true';
        // copied from VisuallyHidden
        Object.assign(this.node.style, {
            border: 0,
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: 1,
            margin: '0 -1px -1px 0',
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: 1,
            whiteSpace: 'nowrap'
        });
        this.assertiveLog = this.createLog('assertive');
        this.node.appendChild(this.assertiveLog);
        this.politeLog = this.createLog('polite');
        this.node.appendChild(this.politeLog);
        document.body.prepend(this.node);
    }
}

JSON.parse("{\"dateRange\":\"{startDate} إلى {endDate}\",\"dateSelected\":\"{date} المحدد\",\"finishRangeSelectionPrompt\":\"انقر لإنهاء عملية تحديد نطاق التاريخ\",\"maximumDate\":\"آخر تاريخ متاح\",\"minimumDate\":\"أول تاريخ متاح\",\"next\":\"التالي\",\"previous\":\"السابق\",\"selectedDateDescription\":\"تاريخ محدد: {date}\",\"selectedRangeDescription\":\"المدى الزمني المحدد: {dateRange}\",\"startRangeSelectionPrompt\":\"انقر لبدء عملية تحديد نطاق التاريخ\",\"todayDate\":\"اليوم، {date}\",\"todayDateSelected\":\"اليوم، {date} محدد\"}");
JSON.parse("{\"dateRange\":\"{startDate} до {endDate}\",\"dateSelected\":\"Избрано е {date}\",\"finishRangeSelectionPrompt\":\"Натиснете, за да довършите избора на времеви интервал\",\"maximumDate\":\"Последна налична дата\",\"minimumDate\":\"Първа налична дата\",\"next\":\"Напред\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Избрана дата: {date}\",\"selectedRangeDescription\":\"Избран диапазон: {dateRange}\",\"startRangeSelectionPrompt\":\"Натиснете, за да пристъпите към избора на времеви интервал\",\"todayDate\":\"Днес, {date}\",\"todayDateSelected\":\"Днес, {date} са избрани\"}");
JSON.parse("{\"dateRange\":\"{startDate} až {endDate}\",\"dateSelected\":\"Vybráno {date}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výběr rozsahu dat\",\"maximumDate\":\"Poslední dostupné datum\",\"minimumDate\":\"První dostupné datum\",\"next\":\"Další\",\"previous\":\"Předchozí\",\"selectedDateDescription\":\"Vybrané datum: {date}\",\"selectedRangeDescription\":\"Vybrané období: {dateRange}\",\"startRangeSelectionPrompt\":\"Kliknutím zahájíte výběr rozsahu dat\",\"todayDate\":\"Dnes, {date}\",\"todayDateSelected\":\"Dnes, vybráno {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate} til {endDate}\",\"dateSelected\":\"{date} valgt\",\"finishRangeSelectionPrompt\":\"Klik for at fuldføre valg af datoområde\",\"maximumDate\":\"Sidste ledige dato\",\"minimumDate\":\"Første ledige dato\",\"next\":\"Næste\",\"previous\":\"Forrige\",\"selectedDateDescription\":\"Valgt dato: {date}\",\"selectedRangeDescription\":\"Valgt interval: {dateRange}\",\"startRangeSelectionPrompt\":\"Klik for at starte valg af datoområde\",\"todayDate\":\"I dag, {date}\",\"todayDateSelected\":\"I dag, {date} valgt\"}");
JSON.parse("{\"dateRange\":\"{startDate} bis {endDate}\",\"dateSelected\":\"{date} ausgewählt\",\"finishRangeSelectionPrompt\":\"Klicken, um die Auswahl des Datumsbereichs zu beenden\",\"maximumDate\":\"Letztes verfügbares Datum\",\"minimumDate\":\"Erstes verfügbares Datum\",\"next\":\"Weiter\",\"previous\":\"Zurück\",\"selectedDateDescription\":\"Ausgewähltes Datum: {date}\",\"selectedRangeDescription\":\"Ausgewählter Bereich: {dateRange}\",\"startRangeSelectionPrompt\":\"Klicken, um die Auswahl des Datumsbereichs zu beginnen\",\"todayDate\":\"Heute, {date}\",\"todayDateSelected\":\"Heute, {date} ausgewählt\"}");
JSON.parse("{\"dateRange\":\"{startDate} έως {endDate}\",\"dateSelected\":\"Επιλέχθηκε {date}\",\"finishRangeSelectionPrompt\":\"Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών\",\"maximumDate\":\"Τελευταία διαθέσιμη ημερομηνία\",\"minimumDate\":\"Πρώτη διαθέσιμη ημερομηνία\",\"next\":\"Επόμενο\",\"previous\":\"Προηγούμενο\",\"selectedDateDescription\":\"Επιλεγμένη ημερομηνία: {date}\",\"selectedRangeDescription\":\"Επιλεγμένο εύρος: {dateRange}\",\"startRangeSelectionPrompt\":\"Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών\",\"todayDate\":\"Σήμερα, {date}\",\"todayDateSelected\":\"Σήμερα, επιλέχτηκε {date}\"}");
JSON.parse("{\"previous\":\"Previous\",\"next\":\"Next\",\"selectedDateDescription\":\"Selected Date: {date}\",\"selectedRangeDescription\":\"Selected Range: {dateRange}\",\"todayDate\":\"Today, {date}\",\"todayDateSelected\":\"Today, {date} selected\",\"dateSelected\":\"{date} selected\",\"startRangeSelectionPrompt\":\"Click to start selecting date range\",\"finishRangeSelectionPrompt\":\"Click to finish selecting date range\",\"minimumDate\":\"First available date\",\"maximumDate\":\"Last available date\",\"dateRange\":\"{startDate} to {endDate}\"}");
JSON.parse("{\"dateRange\":\"{startDate} a {endDate}\",\"dateSelected\":\"{date} seleccionado\",\"finishRangeSelectionPrompt\":\"Haga clic para terminar de seleccionar rango de fechas\",\"maximumDate\":\"Última fecha disponible\",\"minimumDate\":\"Primera fecha disponible\",\"next\":\"Siguiente\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Fecha seleccionada: {date}\",\"selectedRangeDescription\":\"Intervalo seleccionado: {dateRange}\",\"startRangeSelectionPrompt\":\"Haga clic para comenzar a seleccionar un rango de fechas\",\"todayDate\":\"Hoy, {date}\",\"todayDateSelected\":\"Hoy, {date} seleccionado\"}");
JSON.parse("{\"dateRange\":\"{startDate} kuni {endDate}\",\"dateSelected\":\"{date} valitud\",\"finishRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimise lõpetamiseks\",\"maximumDate\":\"Viimane saadaolev kuupäev\",\"minimumDate\":\"Esimene saadaolev kuupäev\",\"next\":\"Järgmine\",\"previous\":\"Eelmine\",\"selectedDateDescription\":\"Valitud kuupäev: {date}\",\"selectedRangeDescription\":\"Valitud vahemik: {dateRange}\",\"startRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimiseks\",\"todayDate\":\"Täna, {date}\",\"todayDateSelected\":\"Täna, {date} valitud\"}");
JSON.parse("{\"dateRange\":\"{startDate} – {endDate}\",\"dateSelected\":\"{date} valittu\",\"finishRangeSelectionPrompt\":\"Lopeta päivämääräalueen valinta napsauttamalla tätä.\",\"maximumDate\":\"Viimeinen varattavissa oleva päivämäärä\",\"minimumDate\":\"Ensimmäinen varattavissa oleva päivämäärä\",\"next\":\"Seuraava\",\"previous\":\"Edellinen\",\"selectedDateDescription\":\"Valittu päivämäärä: {date}\",\"selectedRangeDescription\":\"Valittu aikaväli: {dateRange}\",\"startRangeSelectionPrompt\":\"Aloita päivämääräalueen valinta napsauttamalla tätä.\",\"todayDate\":\"Tänään, {date}\",\"todayDateSelected\":\"Tänään, {date} valittu\"}");
JSON.parse("{\"dateRange\":\"{startDate} à {endDate}\",\"dateSelected\":\"{date} sélectionné\",\"finishRangeSelectionPrompt\":\"Cliquer pour finir de sélectionner la plage de dates\",\"maximumDate\":\"Dernière date disponible\",\"minimumDate\":\"Première date disponible\",\"next\":\"Suivant\",\"previous\":\"Précédent\",\"selectedDateDescription\":\"Date sélectionnée : {date}\",\"selectedRangeDescription\":\"Plage sélectionnée : {dateRange}\",\"startRangeSelectionPrompt\":\"Cliquer pour commencer à sélectionner la plage de dates\",\"todayDate\":\"Aujourd'hui, {date}\",\"todayDateSelected\":\"Aujourd’hui, {date} sélectionné\"}");
JSON.parse("{\"dateRange\":\"{startDate} עד {endDate}\",\"dateSelected\":\"{date} נבחר\",\"finishRangeSelectionPrompt\":\"חץ כדי לסיים את בחירת טווח התאריכים\",\"maximumDate\":\"תאריך פנוי אחרון\",\"minimumDate\":\"תאריך פנוי ראשון\",\"next\":\"הבא\",\"previous\":\"הקודם\",\"selectedDateDescription\":\"תאריך נבחר: {date}\",\"selectedRangeDescription\":\"טווח נבחר: {dateRange}\",\"startRangeSelectionPrompt\":\"לחץ כדי להתחיל בבחירת טווח התאריכים\",\"todayDate\":\"היום, {date}\",\"todayDateSelected\":\"היום, {date} נבחר\"}");
JSON.parse("{\"dateRange\":\"{startDate} do {endDate}\",\"dateSelected\":\"{date} odabran\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite raspon odabranih datuma\",\"maximumDate\":\"Posljednji raspoloživi datum\",\"minimumDate\":\"Prvi raspoloživi datum\",\"next\":\"Sljedeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Odabrani datum: {date}\",\"selectedRangeDescription\":\"Odabrani raspon: {dateRange}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete raspon odabranih datuma\",\"todayDate\":\"Danas, {date}\",\"todayDateSelected\":\"Danas, odabran {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate}–{endDate}\",\"dateSelected\":\"{date} kiválasztva\",\"finishRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének befejezéséhez\",\"maximumDate\":\"Utolsó elérhető dátum\",\"minimumDate\":\"Az első elérhető dátum\",\"next\":\"Következő\",\"previous\":\"Előző\",\"selectedDateDescription\":\"Kijelölt dátum: {date}\",\"selectedRangeDescription\":\"Kijelölt tartomány: {dateRange}\",\"startRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének indításához\",\"todayDate\":\"Ma, {date}\",\"todayDateSelected\":\"Ma, {date} kijelölve\"}");
JSON.parse("{\"dateRange\":\"Da {startDate} a {endDate}\",\"dateSelected\":\"{date} selezionata\",\"finishRangeSelectionPrompt\":\"Fai clic per completare la selezione dell’intervallo di date\",\"maximumDate\":\"Ultima data disponibile\",\"minimumDate\":\"Prima data disponibile\",\"next\":\"Successivo\",\"previous\":\"Precedente\",\"selectedDateDescription\":\"Data selezionata: {date}\",\"selectedRangeDescription\":\"Intervallo selezionato: {dateRange}\",\"startRangeSelectionPrompt\":\"Fai clic per selezionare l’intervallo di date\",\"todayDate\":\"Oggi, {date}\",\"todayDateSelected\":\"Oggi, {date} selezionata\"}");
JSON.parse("{\"dateRange\":\"{startDate} から {endDate}\",\"dateSelected\":\"{date} を選択\",\"finishRangeSelectionPrompt\":\"クリックして日付範囲の選択を終了\",\"maximumDate\":\"最終利用可能日\",\"minimumDate\":\"最初の利用可能日\",\"next\":\"次へ\",\"previous\":\"前へ\",\"selectedDateDescription\":\"選択した日付 : {date}\",\"selectedRangeDescription\":\"選択範囲 : {dateRange}\",\"startRangeSelectionPrompt\":\"クリックして日付範囲の選択を開始\",\"todayDate\":\"本日、{date}\",\"todayDateSelected\":\"本日、{date} を選択\"}");
JSON.parse("{\"dateRange\":\"{startDate} ~ {endDate}\",\"dateSelected\":\"{date} 선택됨\",\"finishRangeSelectionPrompt\":\"날짜 범위 선택을 완료하려면 클릭하십시오.\",\"maximumDate\":\"마지막으로 사용 가능한 일자\",\"minimumDate\":\"처음으로 사용 가능한 일자\",\"next\":\"다음\",\"previous\":\"이전\",\"selectedDateDescription\":\"선택 일자: {date}\",\"selectedRangeDescription\":\"선택 범위: {dateRange}\",\"startRangeSelectionPrompt\":\"날짜 범위 선택을 시작하려면 클릭하십시오.\",\"todayDate\":\"오늘, {date}\",\"todayDateSelected\":\"오늘, {date} 선택됨\"}");
JSON.parse("{\"dateRange\":\"Nuo {startDate} iki {endDate}\",\"dateSelected\":\"Pasirinkta {date}\",\"finishRangeSelectionPrompt\":\"Spustelėkite, kad baigtumėte pasirinkti datų intervalą\",\"maximumDate\":\"Paskutinė galima data\",\"minimumDate\":\"Pirmoji galima data\",\"next\":\"Paskesnis\",\"previous\":\"Ankstesnis\",\"selectedDateDescription\":\"Pasirinkta data: {date}\",\"selectedRangeDescription\":\"Pasirinktas intervalas: {dateRange}\",\"startRangeSelectionPrompt\":\"Spustelėkite, kad pradėtumėte pasirinkti datų intervalą\",\"todayDate\":\"Šiandien, {date}\",\"todayDateSelected\":\"Šiandien, pasirinkta {date}\"}");
JSON.parse("{\"dateRange\":\"No {startDate} līdz {endDate}\",\"dateSelected\":\"Atlasīts: {date}\",\"finishRangeSelectionPrompt\":\"Noklikšķiniet, lai pabeigtu datumu diapazona atlasi\",\"maximumDate\":\"Pēdējais pieejamais datums\",\"minimumDate\":\"Pirmais pieejamais datums\",\"next\":\"Tālāk\",\"previous\":\"Atpakaļ\",\"selectedDateDescription\":\"Atlasītais datums: {date}\",\"selectedRangeDescription\":\"Atlasītais diapazons: {dateRange}\",\"startRangeSelectionPrompt\":\"Noklikšķiniet, lai sāktu datumu diapazona atlasi\",\"todayDate\":\"Šodien, {date}\",\"todayDateSelected\":\"Atlasīta šodiena, {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate} til {endDate}\",\"dateSelected\":\"{date} valgt\",\"finishRangeSelectionPrompt\":\"Klikk for å fullføre valg av datoområde\",\"maximumDate\":\"Siste tilgjengelige dato\",\"minimumDate\":\"Første tilgjengelige dato\",\"next\":\"Neste\",\"previous\":\"Forrige\",\"selectedDateDescription\":\"Valgt dato: {date}\",\"selectedRangeDescription\":\"Valgt område: {dateRange}\",\"startRangeSelectionPrompt\":\"Klikk for å starte valg av datoområde\",\"todayDate\":\"I dag, {date}\",\"todayDateSelected\":\"I dag, {date} valgt\"}");
JSON.parse("{\"dateRange\":\"{startDate} tot {endDate}\",\"dateSelected\":\"{date} geselecteerd\",\"finishRangeSelectionPrompt\":\"Klik om de selectie van het datumbereik te voltooien\",\"maximumDate\":\"Laatste beschikbare datum\",\"minimumDate\":\"Eerste beschikbare datum\",\"next\":\"Volgende\",\"previous\":\"Vorige\",\"selectedDateDescription\":\"Geselecteerde datum: {date}\",\"selectedRangeDescription\":\"Geselecteerd bereik: {dateRange}\",\"startRangeSelectionPrompt\":\"Klik om het datumbereik te selecteren\",\"todayDate\":\"Vandaag, {date}\",\"todayDateSelected\":\"Vandaag, {date} geselecteerd\"}");
JSON.parse("{\"dateRange\":\"{startDate} do {endDate}\",\"dateSelected\":\"Wybrano {date}\",\"finishRangeSelectionPrompt\":\"Kliknij, aby zakończyć wybór zakresu dat\",\"maximumDate\":\"Ostatnia dostępna data\",\"minimumDate\":\"Pierwsza dostępna data\",\"next\":\"Dalej\",\"previous\":\"Wstecz\",\"selectedDateDescription\":\"Wybrana data: {date}\",\"selectedRangeDescription\":\"Wybrany zakres: {dateRange}\",\"startRangeSelectionPrompt\":\"Kliknij, aby rozpocząć wybór zakresu dat\",\"todayDate\":\"Dzisiaj, {date}\",\"todayDateSelected\":\"Dzisiaj wybrano {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate} a {endDate}\",\"dateSelected\":\"{date} selecionado\",\"finishRangeSelectionPrompt\":\"Clique para concluir a seleção do intervalo de datas\",\"maximumDate\":\"Última data disponível\",\"minimumDate\":\"Primeira data disponível\",\"next\":\"Próximo\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Data selecionada: {date}\",\"selectedRangeDescription\":\"Intervalo selecionado: {dateRange}\",\"startRangeSelectionPrompt\":\"Clique para iniciar a seleção do intervalo de datas\",\"todayDate\":\"Hoje, {date}\",\"todayDateSelected\":\"Hoje, {date} selecionado\"}");
JSON.parse("{\"dateRange\":\"{startDate} a {endDate}\",\"dateSelected\":\"{date} selecionado\",\"finishRangeSelectionPrompt\":\"Clique para terminar de selecionar o intervalo de datas\",\"maximumDate\":\"Última data disponível\",\"minimumDate\":\"Primeira data disponível\",\"next\":\"Próximo\",\"previous\":\"Anterior\",\"selectedDateDescription\":\"Data selecionada: {date}\",\"selectedRangeDescription\":\"Intervalo selecionado: {dateRange}\",\"startRangeSelectionPrompt\":\"Clique para começar a selecionar o intervalo de datas\",\"todayDate\":\"Hoje, {date}\",\"todayDateSelected\":\"Hoje, {date} selecionado\"}");
JSON.parse("{\"dateRange\":\"De la {startDate} până la {endDate}\",\"dateSelected\":\"{date} selectată\",\"finishRangeSelectionPrompt\":\"Apăsaţi pentru a finaliza selecţia razei pentru dată\",\"maximumDate\":\"Ultima dată disponibilă\",\"minimumDate\":\"Prima dată disponibilă\",\"next\":\"Următorul\",\"previous\":\"Înainte\",\"selectedDateDescription\":\"Dată selectată: {date}\",\"selectedRangeDescription\":\"Interval selectat: {dateRange}\",\"startRangeSelectionPrompt\":\"Apăsaţi pentru a începe selecţia razei pentru dată\",\"todayDate\":\"Astăzi, {date}\",\"todayDateSelected\":\"Azi, {date} selectată\"}");
JSON.parse("{\"dateRange\":\"С {startDate} по {endDate}\",\"dateSelected\":\"Выбрано {date}\",\"finishRangeSelectionPrompt\":\"Щелкните, чтобы завершить выбор диапазона дат\",\"maximumDate\":\"Последняя доступная дата\",\"minimumDate\":\"Первая доступная дата\",\"next\":\"Далее\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Выбранная дата: {date}\",\"selectedRangeDescription\":\"Выбранный диапазон: {dateRange}\",\"startRangeSelectionPrompt\":\"Щелкните, чтобы начать выбор диапазона дат\",\"todayDate\":\"Сегодня, {date}\",\"todayDateSelected\":\"Сегодня, выбрано {date}\"}");
JSON.parse("{\"dateRange\":\"Od {startDate} do {endDate}\",\"dateSelected\":\"Vybratý dátum {date}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výber rozsahu dátumov\",\"maximumDate\":\"Posledný dostupný dátum\",\"minimumDate\":\"Prvý dostupný dátum\",\"next\":\"Nasledujúce\",\"previous\":\"Predchádzajúce\",\"selectedDateDescription\":\"Vybratý dátum: {date}\",\"selectedRangeDescription\":\"Vybratý rozsah: {dateRange}\",\"startRangeSelectionPrompt\":\"Kliknutím spustíte výber rozsahu dátumov\",\"todayDate\":\"Dnes {date}\",\"todayDateSelected\":\"Vybratý dnešný dátum {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate} do {endDate}\",\"dateSelected\":\"{date} izbrano\",\"finishRangeSelectionPrompt\":\"Kliknite za dokončanje izbire datumskega obsega\",\"maximumDate\":\"Zadnji razpoložljivi datum\",\"minimumDate\":\"Prvi razpoložljivi datum\",\"next\":\"Naprej\",\"previous\":\"Nazaj\",\"selectedDateDescription\":\"Izbrani datum: {date}\",\"selectedRangeDescription\":\"Izbrano območje: {dateRange}\",\"startRangeSelectionPrompt\":\"Kliknite za začetek izbire datumskega obsega\",\"todayDate\":\"Danes, {date}\",\"todayDateSelected\":\"Danes, {date} izbrano\"}");
JSON.parse("{\"dateRange\":\"{startDate} do {endDate}\",\"dateSelected\":\"{date} izabran\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite opseg izabranih datuma\",\"maximumDate\":\"Zadnji raspoloživi datum\",\"minimumDate\":\"Prvi raspoloživi datum\",\"next\":\"Sledeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Izabrani datum: {date}\",\"selectedRangeDescription\":\"Izabrani period: {dateRange}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete opseg izabranih datuma\",\"todayDate\":\"Danas, {date}\",\"todayDateSelected\":\"Danas, izabran {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate} till {endDate}\",\"dateSelected\":\"{date} har valts\",\"finishRangeSelectionPrompt\":\"Klicka för att avsluta val av datumintervall\",\"maximumDate\":\"Sista tillgängliga datum\",\"minimumDate\":\"Första tillgängliga datum\",\"next\":\"Nästa\",\"previous\":\"Föregående\",\"selectedDateDescription\":\"Valt datum: {date}\",\"selectedRangeDescription\":\"Valt intervall: {dateRange}\",\"startRangeSelectionPrompt\":\"Klicka för att välja datumintervall\",\"todayDate\":\"Idag, {date}\",\"todayDateSelected\":\"Idag, {date} har valts\"}");
JSON.parse("{\"dateRange\":\"{startDate} - {endDate}\",\"dateSelected\":\"{date} seçildi\",\"finishRangeSelectionPrompt\":\"Tarih aralığı seçimini tamamlamak için tıklayın\",\"maximumDate\":\"Son müsait tarih\",\"minimumDate\":\"İlk müsait tarih\",\"next\":\"Sonraki\",\"previous\":\"Önceki\",\"selectedDateDescription\":\"Seçilen Tarih: {date}\",\"selectedRangeDescription\":\"Seçilen Aralık: {dateRange}\",\"startRangeSelectionPrompt\":\"Tarih aralığı seçimini başlatmak için tıklayın\",\"todayDate\":\"Bugün, {date}\",\"todayDateSelected\":\"Bugün, {date} seçildi\"}");
JSON.parse("{\"dateRange\":\"{startDate} — {endDate}\",\"dateSelected\":\"Вибрано {date}\",\"finishRangeSelectionPrompt\":\"Натисніть, щоб завершити вибір діапазону дат\",\"maximumDate\":\"Остання доступна дата\",\"minimumDate\":\"Перша доступна дата\",\"next\":\"Наступний\",\"previous\":\"Попередній\",\"selectedDateDescription\":\"Вибрана дата: {date}\",\"selectedRangeDescription\":\"Вибраний діапазон: {dateRange}\",\"startRangeSelectionPrompt\":\"Натисніть, щоб почати вибір діапазону дат\",\"todayDate\":\"Сьогодні, {date}\",\"todayDateSelected\":\"Сьогодні, вибрано {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate} 至 {endDate}\",\"dateSelected\":\"已选定 {date}\",\"finishRangeSelectionPrompt\":\"单击以完成选择日期范围\",\"maximumDate\":\"最后一个可用日期\",\"minimumDate\":\"第一个可用日期\",\"next\":\"下一页\",\"previous\":\"上一页\",\"selectedDateDescription\":\"选定的日期：{date}\",\"selectedRangeDescription\":\"选定的范围：{dateRange}\",\"startRangeSelectionPrompt\":\"单击以开始选择日期范围\",\"todayDate\":\"今天，即 {date}\",\"todayDateSelected\":\"已选定今天，即 {date}\"}");
JSON.parse("{\"dateRange\":\"{startDate} 至 {endDate}\",\"dateSelected\":\"已選取 {date}\",\"finishRangeSelectionPrompt\":\"按一下以完成選取日期範圍\",\"maximumDate\":\"最後一個可用日期\",\"minimumDate\":\"第一個可用日期\",\"next\":\"下一頁\",\"previous\":\"上一頁\",\"selectedDateDescription\":\"選定的日期：{date}\",\"selectedRangeDescription\":\"選定的範圍：{dateRange}\",\"startRangeSelectionPrompt\":\"按一下以開始選取日期範圍\",\"todayDate\":\"今天，{date}\",\"todayDateSelected\":\"已選取今天，{date}\"}");

function $parcel$export$r(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d2c8e2b0480f3f34$exports = {};

$parcel$export$r($d2c8e2b0480f3f34$exports, "useToggle", () => $d2c8e2b0480f3f34$export$cbe85ee05b554577);



function $d2c8e2b0480f3f34$export$cbe85ee05b554577(props, state, ref) {
    let { isDisabled: isDisabled = false , isRequired: isRequired , isReadOnly: isReadOnly , value: value , name: name , children: children , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby , validationState: validationState = 'valid'  } = props;
    let onChange = (e)=>{
        // since we spread props on label, onChange will end up there as well as in here.
        // so we have to stop propagation at the lowest level that we care about
        e.stopPropagation();
        state.setSelected(e.target.checked);
    };
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel) console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    // This handles focusing the input on pointer down, which Safari does not do by default.
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        isDisabled: isDisabled
    });
    let { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
    let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, focusableProps);
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    return {
        inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-controls': props['aria-controls'],
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            onChange: onChange,
            disabled: isDisabled,
            value: value,
            name: name,
            type: 'checkbox',
            ...interactions
        })
    };
}

function $parcel$export$q(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2baaea4c71418dea$exports = {};

$parcel$export$q($2baaea4c71418dea$exports, "useField", () => $2baaea4c71418dea$export$294aa081a6c6f55d);
var $d191a55c9702f145$exports = {};

$parcel$export$q($d191a55c9702f145$exports, "useLabel", () => $d191a55c9702f145$export$8467354a121f1b9f);

function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id , label: label , 'aria-labelledby': ariaLabelledby , 'aria-label': ariaLabel , labelElementType: labelElementType = 'label'  } = props;
    id = $bdb11010cef70236$export$f680877a34711e37(id);
    let labelId = $bdb11010cef70236$export$f680877a34711e37();
    let labelProps = {
    };
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${ariaLabelledby} ${labelId}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = $313b98861ee5dd6c$export$d6875122194c7b44({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description , errorMessage: errorMessage , validationState: validationState  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f(props);
    let descriptionId = $bdb11010cef70236$export$b4cc09c592e8fdb8([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    let errorMessageId = $bdb11010cef70236$export$b4cc09c592e8fdb8([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    fieldProps = $3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}

function $parcel$export$p(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3017fa7ffdddec74$exports = {};

$parcel$export$p($3017fa7ffdddec74$exports, "useToggleState", () => $3017fa7ffdddec74$export$8042c6c013fd5226);

function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {
}) {
    let { isReadOnly: isReadOnly  } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(props.isSelected, props.defaultSelected || false, props.onChange);
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    return {
        isSelected: isSelected,
        setSelected: updateSelected,
        toggle: toggleState
    };
}

function $parcel$export$o(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $406796ff087fe49b$exports = {};

$parcel$export$o($406796ff087fe49b$exports, "useCheckbox", () => $406796ff087fe49b$export$e375f10ce42261c5);


function $406796ff087fe49b$export$e375f10ce42261c5(props, state, inputRef) {
    let { inputProps: inputProps  } = $d2c8e2b0480f3f34$export$cbe85ee05b554577(props, state, inputRef);
    let { isSelected: isSelected  } = state;
    let { isIndeterminate: isIndeterminate  } = props;
    useEffect(()=>{
        // indeterminate is a property, but it can only be set via javascript
        // https://css-tricks.com/indeterminate-checkboxes/
        if (inputRef.current) inputRef.current.indeterminate = isIndeterminate;
    });
    return {
        inputProps: {
            ...inputProps,
            checked: isSelected,
            'aria-checked': isIndeterminate ? 'mixed' : isSelected
        }
    };
}


var $1e9fce0cfacc738b$exports = {};

$parcel$export$o($1e9fce0cfacc738b$exports, "useCheckboxGroup", () => $1e9fce0cfacc738b$export$49ff6f28c54f1cbe);
const $1ae600c947479353$export$31440636951aa68c = new WeakMap();




function $1e9fce0cfacc738b$export$49ff6f28c54f1cbe(props, state) {
    let { isDisabled: isDisabled , name: name  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f({
        ...props,
        // Checkbox group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    // Pass name prop from group to all items by attaching to the state.
    $1ae600c947479353$export$31440636951aa68c.set(state, name);
    return {
        groupProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            role: 'group',
            'aria-disabled': isDisabled || undefined,
            ...fieldProps
        }),
        labelProps: labelProps
    };
}


var $fba3e38d5ca8983f$exports = {};

$parcel$export$o($fba3e38d5ca8983f$exports, "useCheckboxGroupItem", () => $fba3e38d5ca8983f$export$353b32fc6898d37d);



function $fba3e38d5ca8983f$export$353b32fc6898d37d(props, state, inputRef) {
    const toggleState = $3017fa7ffdddec74$export$8042c6c013fd5226({
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isSelected: state.isSelected(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { inputProps: inputProps  } = $406796ff087fe49b$export$e375f10ce42261c5({
        ...props,
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isDisabled: props.isDisabled || state.isDisabled,
        name: props.name || $1ae600c947479353$export$31440636951aa68c.get(state)
    }, toggleState, inputRef);
    return {
        inputProps: inputProps
    };
}

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}

function getscrollAccessor(offset) {
  var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

  function scrollAccessor(node, val) {
    var win = isWindow(node);

    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }

    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }

  return scrollAccessor;
}

/**
 * Gets or sets the scroll left position of a given element.
 * 
 * @param node the element
 * @param val the position to set
 */

var $k7QOs$domhelpersscrollLeft = getscrollAccessor('pageXOffset');

/**
 * Gets or sets the scroll top position of a given element.
 * 
 * @param node the element
 * @param val the position to set
 */

var $k7QOs$domhelpersscrollTop = getscrollAccessor('pageYOffset');

/**
 * Returns the offset of a given element, including top and left positions, width and height.
 * 
 * @param node the element
 */

function offset(node) {
  var doc = ownerDocument(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !contains(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + $k7QOs$domhelpersscrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + $k7QOs$domhelpersscrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var isHTMLElement = function isHTMLElement(e) {
  return !!e && 'offsetParent' in e;
};

function offsetParent(node) {
  var doc = ownerDocument(node);
  var parent = node && node.offsetParent;

  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && style(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }

  return parent || doc.documentElement;
}

var nodeName = function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};
/**
 * Returns the relative position of a given element.
 * 
 * @param node the element
 * @param offsetParent the offset parent
 */


function position(node, offsetParent$1) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset$1; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if (style(node, 'position') === 'fixed') {
    offset$1 = node.getBoundingClientRect();
  } else {
    var parent = offsetParent$1 || offsetParent(node);
    offset$1 = offset(node);
    if (nodeName(parent) !== 'html') parentOffset = offset(parent);
    var borderTop = String(style(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - $k7QOs$domhelpersscrollTop(parent) || 0;
    var borderLeft = String(style(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - $k7QOs$domhelpersscrollLeft(parent) || 0;
  }

  var marginTop = String(style(node, 'marginTop') || 0);
  var marginLeft = String(style(node, 'marginLeft') || 0); // Subtract parent offsets and node margins

  return _extends({}, offset$1, {
    top: offset$1.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset$1.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}

function $parcel$export$n(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5c3e21d68f1c4674$exports = {};

$parcel$export$n($5c3e21d68f1c4674$exports, "useVisuallyHidden", () => $5c3e21d68f1c4674$export$a966af930f325cab);
$parcel$export$n($5c3e21d68f1c4674$exports, "VisuallyHidden", () => $5c3e21d68f1c4674$export$439d29a4e110a164);



const $5c3e21d68f1c4674$var$styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: '0 -1px -1px 0',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
    whiteSpace: 'nowrap'
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {
}) {
    let { style: style , isFocusable: isFocusable  } = props;
    let [isFocused, setFocused] = useState(false);
    let { focusProps: focusProps  } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
        isDisabled: !isFocusable,
        onFocusChange: setFocused
    });
    // If focused, don't hide the element.
    let combinedStyles = useMemo(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$5c3e21d68f1c4674$var$styles,
            ...style
        };
        else return $5c3e21d68f1c4674$var$styles;
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusProps,
            style: combinedStyles
        }
    };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children , elementType: Element = 'div' , isFocusable: isFocusable , style: style , ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps  } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
    return(/*#__PURE__*/ React.createElement(Element, $3ef42575df84b30b$export$9d1611c77c2fe928(otherProps, visuallyHiddenProps), children));
}

function $parcel$export$m(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault$7(a) {
  return a && a.__esModule ? a.default : a;
}
var $2a41e45df1593e64$exports = {};

$parcel$export$m($2a41e45df1593e64$exports, "useOverlayPosition", () => $2a41e45df1593e64$export$d39e1813b3bdd0e1);






const $edcf132a9284368a$var$AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const $edcf132a9284368a$var$CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const $edcf132a9284368a$var$AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {
};
// @ts-ignore
let $edcf132a9284368a$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, top = 0, left = 0;
    let scroll = {
    };
    if (containerNode.tagName === 'BODY') {
        var ref;
        width = (ref = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && ref !== void 0 ? ref : document.documentElement.clientWidth;
        var ref1;
        height = (ref1 = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && ref1 !== void 0 ? ref1 : document.documentElement.clientHeight;
        scroll.top = $k7QOs$domhelpersscrollTop(ownerDocument(containerNode).documentElement) || $k7QOs$domhelpersscrollTop(containerNode);
        scroll.left = $k7QOs$domhelpersscrollLeft(ownerDocument(containerNode).documentElement) || $k7QOs$domhelpersscrollLeft(containerNode);
    } else {
        ({ width: width , height: height , top: top , left: left  } = offset(containerNode));
        scroll.top = $k7QOs$domhelpersscrollTop(containerNode);
        scroll.left = $k7QOs$domhelpersscrollLeft(containerNode);
    }
    return {
        width: width,
        height: height,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $edcf132a9284368a$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
function $edcf132a9284368a$var$getDelta(axis, offset, size, containerDimensions, padding) {
    let containerScroll = containerDimensions.scroll[axis];
    let containerHeight = containerDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
    let startEdgeOffset = offset - padding - containerScroll;
    let endEdgeOffset = offset + padding - containerScroll + size;
    if (startEdgeOffset < 0) return -startEdgeOffset;
    else if (endEdgeOffset > containerHeight) return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
    else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $edcf132a9284368a$var$parsePlacement(input) {
    if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = $edcf132a9284368a$var$AXIS[placement] || 'right';
    let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
    if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = 'center';
    let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
    let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
    $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned) {
    let { placement: placement , crossPlacement: crossPlacement , axis: axis , crossAxis: crossAxis , size: size , crossSize: crossSize  } = placementInfo;
    let position = {
    };
    // button position
    position[crossAxis] = childOffset[crossAxis];
    if (crossPlacement === 'center') //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
     /* else {
    the overlay top should match the button top
  } */ 
    // add the crossOffset from props
    position[crossAxis] += crossOffset;
    // this is button center position - the overlay size + half of the button to align bottom of overlay with button center
    let minViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2 - overlaySize[crossSize];
    // this is button position of center, aligns top of overlay with button center
    let maxViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2;
    // clamp it into the range of the min/max positions
    position[crossAxis] = Math.min(Math.max(minViablePosition, position[crossAxis]), maxViablePosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[size];
        position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding) {
    return position.top != null ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top - (containerOffsetWithBoundary.top + position.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    ) : Math.max(0, childOffset.top + containerOffsetWithBoundary.top - (boundaryDimensions.top + boundaryDimensions.scroll.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    );
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement , axis: axis , size: size  } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight) {
    let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
    let { size: size , crossAxis: crossAxis , crossSize: crossSize , placement: placement , crossPlacement: crossPlacement  } = placementInfo;
    let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    let normalizedOffset = offset;
    let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
        let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let arrowPosition = {
    };
    arrowPosition[crossAxis] = childOffset[crossAxis] - position[crossAxis] + childOffset[crossSize] / 2;
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement , targetNode: targetNode , overlayNode: overlayNode , scrollNode: scrollNode , padding: padding , shouldFlip: shouldFlip , boundaryElement: boundaryElement , offset: offset$1 , crossOffset: crossOffset , maxHeight: maxHeight  } = opts;
    let container = overlayNode.offsetParent || document.body;
    let isBodyContainer = container.tagName === 'BODY';
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isBodyContainer ? offset(targetNode) : position(targetNode, container);
    if (!isBodyContainer) {
        let marginTop = String(style(targetNode, 'marginTop'));
        let marginLeft = String(style(targetNode, 'marginLeft'));
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = offset(overlayNode);
    let margins = $edcf132a9284368a$var$getMargins(overlayNode);
    overlaySize.width += margins.left + margins.right;
    overlaySize.height += margins.top + margins.bottom;
    let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
    let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
    let containerOffsetWithBoundary = boundaryElement.tagName === 'BODY' ? offset(container) : position(container, boundaryElement);
    return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerOffsetWithBoundary, offset$1, crossOffset, isContainerPositioned, maxHeight);
}




const $dd149f63282afbbf$export$f6211563215e3b37 = new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef , isOpen: isOpen , onClose: onClose  } = opts;
    useEffect(()=>{
        if (!isOpen) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener('scroll', onScroll, true);
        return ()=>{
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}




// @ts-ignore
let $2a41e45df1593e64$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let { targetRef: targetRef , overlayRef: overlayRef , scrollRef: scrollRef = overlayRef , placement: placement = 'bottom' , containerPadding: containerPadding = 12 , shouldFlip: shouldFlip = true , boundaryElement: boundaryElement = typeof document !== 'undefined' ? document.body : null , offset: offset = 0 , crossOffset: crossOffset = 0 , shouldUpdatePosition: shouldUpdatePosition = true , isOpen: isOpen = true , onClose: onClose , maxHeight: maxHeight  } = props;
    let [position, setPosition] = useState({
        position: {
        },
        arrowOffsetLeft: undefined,
        arrowOffsetTop: undefined,
        maxHeight: undefined,
        placement: undefined
    });
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight
    ];
    let updatePosition = useCallback(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
        setPosition($edcf132a9284368a$export$b3ceb0cbf1056d98({
            placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight
        }));
    }, deps);
    // Update position when anything changes
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updatePosition, deps);
    // Update position on window resize
    $2a41e45df1593e64$var$useResize(updatePosition);
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = useRef(false);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, [
        updatePosition
    ]);
    let close = useCallback(()=>{
        if (!isResizing.current) onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    $dd149f63282afbbf$export$18fc8428861184da({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose ? close : undefined
    });
    return {
        overlayProps: {
            style: {
                position: 'absolute',
                zIndex: 100000,
                ...position.position,
                maxHeight: position.maxHeight
            }
        },
        placement: position.placement,
        arrowProps: {
            style: {
                left: position.arrowOffsetLeft,
                top: position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $2a41e45df1593e64$var$useResize(onResize) {
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
}


var $a11501f3d1d39e6c$exports = {};

$parcel$export$m($a11501f3d1d39e6c$exports, "useOverlay", () => $a11501f3d1d39e6c$export$ea8f71083e90600f);


const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , isOpen: isOpen , isDismissable: isDismissable = false , isKeyboardDismissDisabled: isKeyboardDismissDisabled = false , shouldCloseOnInteractOutside: shouldCloseOnInteractOutside  } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    useEffect(()=>{
        if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack.
    let onHide = ()=>{
        if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === 'Escape' && !isKeyboardDismissDisabled) {
            e.stopPropagation();
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    $e0b6e0b68ec7f50f$export$872b660ac5a1ff98({
        ref: ref,
        onInteractOutside: isDismissable ? onInteractOutside : null,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps  } = $9ab94262bd0047c7$export$420e68273165f4ec({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}


var $628037886ba31236$exports = {};

$parcel$export$m($628037886ba31236$exports, "useOverlayTrigger", () => $628037886ba31236$export$f9d5c8beee7d008d);



function $628037886ba31236$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type  } = props;
    let { isOpen: isOpen  } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    useEffect(()=>{
        if (ref && ref.current) $dd149f63282afbbf$export$f6211563215e3b37.set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = $bdb11010cef70236$export$f680877a34711e37();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : null
        },
        overlayProps: {
            id: overlayId
        }
    };
}


var $49c51c25361d4cd2$exports = {};

$parcel$export$m($49c51c25361d4cd2$exports, "usePreventScroll", () => $49c51c25361d4cd2$export$ee0f7cc6afcd1c18);

// @ts-ignore
const $49c51c25361d4cd2$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {
}) {
    let { isDisabled: isDisabled  } = options;
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (isDisabled) return;
        if ($c87311424ea30a05$export$fedb369cb70207f1()) return $49c51c25361d4cd2$var$preventScrollMobileSafari();
        else return $49c51c25361d4cd2$var$preventScrollStandard();
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    return $ff5963eb1fccf552$export$e08e3b67e392101e($49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = $62d8ded9296f3872$export$cfa2225e87938781(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) e.preventDefault();
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target) && target !== document.activeElement) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = 'translateY(-2000px)';
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = '';
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener('resize', ()=>$49c51c25361d4cd2$var$scrollIntoView(target)
                    , {
                        once: true
                    });
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = $ff5963eb1fccf552$export$e08e3b67e392101e($49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'), $49c51c25361d4cd2$var$setStyle(document.body, 'marginTop', `-${scrollY}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = $ff5963eb1fccf552$export$e08e3b67e392101e($49c51c25361d4cd2$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'focus', onFocus, true), $49c51c25361d4cd2$var$addEvent(window, 'scroll', onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    return ()=>{
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    while(target && target !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = $62d8ded9296f3872$export$cfa2225e87938781(target);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = target.getBoundingClientRect().top;
            if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        target = scrollable.parentElement;
    }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}


var $f57aed4a881a3485$exports = {};

$parcel$export$m($f57aed4a881a3485$exports, "ModalProvider", () => $f57aed4a881a3485$export$178405afcd8c5eb);
$parcel$export$m($f57aed4a881a3485$exports, "useModalProvider", () => $f57aed4a881a3485$export$d9aaed4c3ece1bc0);
$parcel$export$m($f57aed4a881a3485$exports, "OverlayProvider", () => $f57aed4a881a3485$export$bf688221f59024e5);
$parcel$export$m($f57aed4a881a3485$exports, "OverlayContainer", () => $f57aed4a881a3485$export$b47c3594eab58386);
$parcel$export$m($f57aed4a881a3485$exports, "useModal", () => $f57aed4a881a3485$export$33ffd74ebf07f060);


const $f57aed4a881a3485$var$Context = /*#__PURE__*/ React.createContext(null);
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
    let { children: children  } = props;
    let parent = useContext($f57aed4a881a3485$var$Context);
    let [modalCount, setModalCount] = useState(0);
    let context = useMemo(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1
                );
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1
                );
                if (parent) parent.removeModal();
            }
        })
    , [
        parent,
        modalCount
    ]);
    return(/*#__PURE__*/ React.createElement($f57aed4a881a3485$var$Context.Provider, {
        value: context
    }, children));
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
    let context = useContext($f57aed4a881a3485$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : null
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps  } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
    return(/*#__PURE__*/ React.createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    }));
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
    return(/*#__PURE__*/ React.createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /*#__PURE__*/ React.createElement($f57aed4a881a3485$var$OverlayContainerDOM, props)));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
    let { portalContainer: portalContainer = document.body , ...rest } = props;
    React.useEffect(()=>{
        if (portalContainer.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    let contents = /*#__PURE__*/ React.createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
    return(/*#__PURE__*/ $k7QOs$reactdom.createPortal(contents, portalContainer));
}
function $f57aed4a881a3485$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = useContext($f57aed4a881a3485$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    useEffect(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
}


var $86ea4cb521eb2e37$exports = {};

$parcel$export$m($86ea4cb521eb2e37$exports, "DismissButton", () => $86ea4cb521eb2e37$export$2317d149ed6f78c4);
var $61fe14465afefc5e$exports = {};
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = JSON.parse("{\"dismiss\":\"تجاهل\"}");


var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = JSON.parse("{\"dismiss\":\"Отхвърляне\"}");


var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = JSON.parse("{\"dismiss\":\"Odstranit\"}");


var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = JSON.parse("{\"dismiss\":\"Luk\"}");


var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = JSON.parse("{\"dismiss\":\"Schließen\"}");


var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = JSON.parse("{\"dismiss\":\"Απόρριψη\"}");


var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = JSON.parse("{\"dismiss\":\"Dismiss\"}");


var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = JSON.parse("{\"dismiss\":\"Lõpeta\"}");


var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = JSON.parse("{\"dismiss\":\"Hylkää\"}");


var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = JSON.parse("{\"dismiss\":\"Rejeter\"}");


var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = JSON.parse("{\"dismiss\":\"התעלם\"}");


var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = JSON.parse("{\"dismiss\":\"Elutasítás\"}");


var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = JSON.parse("{\"dismiss\":\"Ignora\"}");


var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = JSON.parse("{\"dismiss\":\"閉じる\"}");


var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = JSON.parse("{\"dismiss\":\"무시\"}");


var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = JSON.parse("{\"dismiss\":\"Atmesti\"}");


var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = JSON.parse("{\"dismiss\":\"Nerādīt\"}");


var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = JSON.parse("{\"dismiss\":\"Lukk\"}");


var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = JSON.parse("{\"dismiss\":\"Negeren\"}");


var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = JSON.parse("{\"dismiss\":\"Zignoruj\"}");


var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = JSON.parse("{\"dismiss\":\"Dispensar\"}");


var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = JSON.parse("{\"dismiss\":\"Revocare\"}");


var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = JSON.parse("{\"dismiss\":\"Пропустить\"}");


var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = JSON.parse("{\"dismiss\":\"Zrušiť\"}");


var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = JSON.parse("{\"dismiss\":\"Opusti\"}");


var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = JSON.parse("{\"dismiss\":\"Avvisa\"}");


var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = JSON.parse("{\"dismiss\":\"Kapat\"}");


var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = JSON.parse("{\"dismiss\":\"Скасувати\"}");


var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = JSON.parse("{\"dismiss\":\"取消\"}");


var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = JSON.parse("{\"dismiss\":\"關閉\"}");


$61fe14465afefc5e$exports = {
    "ar-AE": $773d5888b972f1cf$exports,
    "bg-BG": $d11f19852b941573$exports,
    "cs-CZ": $b983974c2ee1efb3$exports,
    "da-DK": $5809cc9d4e92de73$exports,
    "de-DE": $c68c2e4fc74398d1$exports,
    "el-GR": $0898b4c153db2b77$exports,
    "en-US": $6d74810286a15183$exports,
    "es-ES": $309d73dc65f78055$exports,
    "et-EE": $44ad94f7205cf593$exports,
    "fi-FI": $7c28f5687f0779a9$exports,
    "fr-FR": $e6d75df4b68bd73a$exports,
    "he-IL": $87505c9dab186d0f$exports,
    "hr-HR": $553439c3ffb3e492$exports,
    "hu-HU": $74cf411061b983a2$exports,
    "it-IT": $e933f298574dc435$exports,
    "ja-JP": $ac91fc9fe02f71f6$exports,
    "ko-KR": $52b96f86422025af$exports,
    "lt-LT": $c0d724c3e51dafa6$exports,
    "lv-LV": $c92899672a3fe72e$exports,
    "nb-NO": $9f576b39d8e7a9d6$exports,
    "nl-NL": $9d025808aeec81a7$exports,
    "pl-PL": $fce709921e2c0fa6$exports,
    "pt-BR": $2599cf0c4ab37f59$exports,
    "pt-PT": $3c220ae7ef8a35fd$exports,
    "ro-RO": $93562b5094072f54$exports,
    "ru-RU": $cd9e2abd0d06c7b4$exports,
    "sk-SK": $45375701f409adf1$exports,
    "sl-SI": $27fab53a576de9dd$exports,
    "sr-SP": $4438748d9952e7c7$exports,
    "sv-SE": $0936d7347ef4da4c$exports,
    "tr-TR": $29700c92185d38f8$exports,
    "uk-UA": $662ccaf2be4c25b3$exports,
    "zh-CN": $d80a27deda7cdb3c$exports,
    "zh-TW": $2b2734393847c884$exports
};






function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss , ...otherProps } = props;
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$7($61fe14465afefc5e$exports)));
    let labels = $313b98861ee5dd6c$export$d6875122194c7b44(otherProps, formatMessage('dismiss'));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return(/*#__PURE__*/ React.createElement($5c3e21d68f1c4674$export$439d29a4e110a164, null, /*#__PURE__*/ React.createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick
    })));
}


var $5e3802645cc19319$exports = {};

$parcel$export$m($5e3802645cc19319$exports, "ariaHideOutside", () => $5e3802645cc19319$export$1c3ebcada18427bf);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            // If this node is a live announcer, add it to the set of nodes to keep visible.
            if (node instanceof HTMLElement && node.dataset.liveAnnouncer === 'true') visibleNodes.add(node);
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive.
            if (visibleNodes.has(node) || hiddenNodes.has(node.parentElement)) return NodeFilter.FILTER_REJECT;
            // VoiceOver on iOS has issues hiding elements with role="row". Hide the cells inside instead.
            // https://bugs.webkit.org/show_bug.cgi?id=222623
            if (node instanceof HTMLElement && node.getAttribute('role') === 'row') return NodeFilter.FILTER_SKIP;
            // Skip this node but continue to children if one of the targets is inside the node.
            if (targets.some((target)=>node.contains(target)
            )) return NodeFilter.FILTER_SKIP;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    let hide = (node)=>{
        var ref;
        let refCount = (ref = $5e3802645cc19319$var$refCountMap.get(node)) !== null && ref !== void 0 ? ref : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute('aria-hidden') === 'true' && refCount === 0) return;
        if (refCount === 0) node.setAttribute('aria-hidden', 'true');
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    let node1 = walker.nextNode();
    while(node1 != null){
        hide(node1);
        node1 = walker.nextNode();
    }
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList' || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target)
            )) for (let node2 of change.addedNodes){
                if (node2 instanceof HTMLElement && node2.dataset.liveAnnouncer === 'true') visibleNodes.add(node2);
                else if (node2 instanceof Element) hide(node2);
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $5e3802645cc19319$var$refCountMap.get(node);
            if (count === 1) {
                node.removeAttribute('aria-hidden');
                $5e3802645cc19319$var$refCountMap.delete(node);
            } else $5e3802645cc19319$var$refCountMap.set(node, count - 1);
        }
    };
}

function $parcel$export$l(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $ae20dd8cbca75726$exports = {};

$parcel$export$l($ae20dd8cbca75726$exports, "useSelectableCollection", () => $ae20dd8cbca75726$export$d6daf82dcd84e87c);





function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return $c87311424ea30a05$export$e1865c3bedcd822b() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$16792effe837dba3(e) {
    if ($c87311424ea30a05$export$9ac100e40613ea10()) return e.metaKey;
    return e.ctrlKey;
}



var $fb3050f43d946246$exports = {};

$parcel$export$l($fb3050f43d946246$exports, "useTypeSelect", () => $fb3050f43d946246$export$e32c88dfddc6e1d8);

function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate , selectionManager: selectionManager , onTypeSelect: onTypeSelect  } = options;
    let state = useRef({
        search: '',
        timeout: null
    }).current;
    let onKeyDown = (e)=>{
        let character = $fb3050f43d946246$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey) return;
        // Do not propagate the Spacebar event if it's meant to be part of the search.
        // When we time out, the search term becomes empty, hence the check on length.
        // Trimming is to account for the case of pressing the Spacebar more than once,
        // which should cycle through the selection/deselection of the focused item.
        if (character === ' ' && state.search.trim().length > 0) {
            e.preventDefault();
            if (!('continuePropagation' in e)) e.stopPropagation();
        }
        state.search += character;
        // Use the delegate to find a key to focus.
        // Prioritize items after the currently focused item, falling back to searching the whole list.
        let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
        // If no key found, search from the top.
        if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
        if (key != null) {
            selectionManager.setFocusedKey(key);
            if (onTypeSelect) onTypeSelect(key);
        }
        clearTimeout(state.timeout);
        state.timeout = setTimeout(()=>{
            state.search = '';
        }, 500);
    };
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
        }
    };
}
function $fb3050f43d946246$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return '';
}


function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager , keyboardDelegate: delegate , ref: ref , autoFocus: autoFocus = false , shouldFocusWrap: shouldFocusWrap = false , disallowEmptySelection: disallowEmptySelection = false , disallowSelectAll: disallowSelectAll = false , selectOnFocus: selectOnFocus = manager.selectionBehavior === 'replace' , disallowTypeAhead: disallowTypeAhead = false , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation = false , isVirtualized: isVirtualized , scrollRef: // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref  } = options;
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let onKeyDown = (e)=>{
        // Prevent option + tab from doing anything since it doesn't move focus to the cells, only buttons/checkboxes
        if (e.altKey && e.key === 'Tab') e.preventDefault();
        // Keyboard events bubble through portals. Don't handle keyboard events
        // for elements outside the collection (e.g. menus).
        if (!ref.current.contains(e.target)) return;
        const navigateToKey = (key, childFocus)=>{
            if (key != null) {
                manager.setFocusedKey(key, childFocus);
                if (e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(key);
                else if (selectOnFocus && !$feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.replaceSelection(key);
            }
        };
        switch(e.key){
            case 'ArrowDown':
                if (delegate.getKeyBelow) {
                    var ref4, ref1;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : (ref4 = delegate.getFirstKey) === null || ref4 === void 0 ? void 0 : ref4.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (ref1 = delegate.getFirstKey) === null || ref1 === void 0 ? void 0 : ref1.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'ArrowUp':
                if (delegate.getKeyAbove) {
                    var ref2, ref3;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : (ref2 = delegate.getLastKey) === null || ref2 === void 0 ? void 0 : ref2.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (ref3 = delegate.getLastKey) === null || ref3 === void 0 ? void 0 : ref3.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'ArrowLeft':
                if (delegate.getKeyLeftOf) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
                    navigateToKey(nextKey, direction === 'rtl' ? 'first' : 'last');
                }
                break;
            case 'ArrowRight':
                if (delegate.getKeyRightOf) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyRightOf(manager.focusedKey);
                    navigateToKey(nextKey, direction === 'rtl' ? 'last' : 'first');
                }
                break;
            case 'Home':
                if (delegate.getFirstKey) {
                    e.preventDefault();
                    let firstKey = delegate.getFirstKey(manager.focusedKey, $feb5ffebff200149$export$16792effe837dba3(e));
                    manager.setFocusedKey(firstKey);
                    if ($feb5ffebff200149$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(firstKey);
                    else if (selectOnFocus) manager.replaceSelection(firstKey);
                }
                break;
            case 'End':
                if (delegate.getLastKey) {
                    e.preventDefault();
                    let lastKey = delegate.getLastKey(manager.focusedKey, $feb5ffebff200149$export$16792effe837dba3(e));
                    manager.setFocusedKey(lastKey);
                    if ($feb5ffebff200149$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(lastKey);
                    else if (selectOnFocus) manager.replaceSelection(lastKey);
                }
                break;
            case 'PageDown':
                if (delegate.getKeyPageBelow) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'PageUp':
                if (delegate.getKeyPageAbove) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'a':
                if ($feb5ffebff200149$export$16792effe837dba3(e) && manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
                    e.preventDefault();
                    manager.selectAll();
                }
                break;
            case 'Escape':
                e.preventDefault();
                if (!disallowEmptySelection) manager.clearSelection();
                break;
            case 'Tab':
                if (!allowsTabNavigation) {
                    // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
                    // However, collections should be treated as a single tab stop, with arrow key navigation internally.
                    // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
                    // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
                    // in the collection, so that the browser default behavior will apply starting from that element
                    // rather than the currently focused one.
                    if (e.shiftKey) ref.current.focus();
                    else {
                        let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current, {
                            tabbable: true
                        });
                        let next;
                        let last;
                        do {
                            last = walker.lastChild();
                            if (last) next = last;
                        }while (last)
                        if (next && !next.contains(document.activeElement)) $7215afc6de606d6b$export$de79e2c695e052f3(next);
                    }
                    break;
                }
        }
    };
    // Store the scroll position so we can restore it later.
    let scrollPos = useRef({
        top: 0,
        left: 0
    });
    $e9faafb641e167db$export$90fc3a17d93f704c(scrollRef, 'scroll', isVirtualized ? null : ()=>{
        scrollPos.current = {
            top: scrollRef.current.scrollTop,
            left: scrollRef.current.scrollLeft
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!e.currentTarget.contains(e.target)) return;
        manager.setFocused(true);
        if (manager.focusedKey == null) {
            let navigateToFirstKey = (key)=>{
                if (key != null) {
                    manager.setFocusedKey(key);
                    if (selectOnFocus) manager.replaceSelection(key);
                }
            };
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            var _lastSelectedKey, _firstSelectedKey;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey((_lastSelectedKey = manager.lastSelectedKey) !== null && _lastSelectedKey !== void 0 ? _lastSelectedKey : delegate.getLastKey());
            else navigateToFirstKey((_firstSelectedKey = manager.firstSelectedKey) !== null && _firstSelectedKey !== void 0 ? _firstSelectedKey : delegate.getFirstKey());
        } else if (!isVirtualized) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element) {
                // This prevents a flash of focus on the first/last element in the collection
                $7215afc6de606d6b$export$de79e2c695e052f3(element);
                $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollRef.current, element);
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
    };
    const autoFocusRef = useRef(autoFocus);
    useEffect(()=>{
        if (autoFocusRef.current) {
            let focusedKey = null;
            // Check focus strategy to determine which item to focus
            if (autoFocus === 'first') focusedKey = delegate.getFirstKey();
            if (autoFocus === 'last') focusedKey = delegate.getLastKey();
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) focusedKey = selectedKeys.values().next().value;
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus) $6a99195332edec8b$export$80f3e147d781571c(ref.current);
        }
        autoFocusRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // If not virtualized, scroll the focused element into view when the focusedKey changes.
    // When virtualized, Virtualizer handles this internally.
    useEffect(()=>{
        if (!isVirtualized && manager.focusedKey && (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)) {
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element) $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollRef.current, element);
        }
    }, [
        isVirtualized,
        scrollRef,
        manager.focusedKey
    ]);
    let handlers = {
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (e.currentTarget.contains(e.target)) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps  } = $fb3050f43d946246$export$e32c88dfddc6e1d8({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) handlers = $3ef42575df84b30b$export$9d1611c77c2fe928(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    // If using virtual focus, don't set a tabIndex at all so that VoiceOver on iOS 14 doesn't try
    // to move real DOM focus to the element anyway.
    let tabIndex;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    return {
        collectionProps: {
            ...handlers,
            tabIndex: tabIndex
        }
    };
}


var $880e95eb8b93ba9a$exports = {};

$parcel$export$l($880e95eb8b93ba9a$exports, "useSelectableItem", () => $880e95eb8b93ba9a$export$ecf600387e221c37);





function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
    let { selectionManager: manager , key: key , ref: ref , shouldSelectOnPressUp: shouldSelectOnPressUp , isVirtualized: isVirtualized , shouldUseVirtualFocus: shouldUseVirtualFocus , focus: focus , isDisabled: isDisabled , onAction: onAction , allowsDifferentPressOrigin: allowsDifferentPressOrigin  } = options;
    let onSelect = (e)=>{
        if (e.pointerType === 'keyboard' && $feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === 'none') return;
            if (manager.selectionMode === 'single') {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === 'toggle' || e && ($feb5ffebff200149$export$16792effe837dba3(e) || e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    useEffect(()=>{
        let isFocused = key === manager.focusedKey;
        if (isFocused && manager.isFocused && !shouldUseVirtualFocus && document.activeElement !== ref.current) {
            if (focus) focus();
            else $6a99195332edec8b$export$80f3e147d781571c(ref.current);
        }
    }, [
        ref,
        key,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {
    };
    if (!shouldUseVirtualFocus) itemProps = {
        tabIndex: key === manager.focusedKey ? 0 : -1,
        onFocus (e) {
            if (e.target === ref.current) manager.setFocusedKey(key);
        }
    };
    // With checkbox selection, onAction (i.e. navigation) becomes primary, and occurs on a single click of the row.
    // Clicking the checkbox enters selection mode, after which clicking anywhere on any row toggles selection for that row.
    // With highlight selection, onAction is secondary, and occurs on double click. Single click selects the row.
    // With touch, onAction occurs on single tap, and long press enters selection mode.
    isDisabled = isDisabled || manager.isDisabled(key);
    let allowsSelection = !isDisabled && manager.canSelectItem(key);
    let allowsActions = onAction && !isDisabled;
    let hasPrimaryAction = allowsActions && (manager.selectionBehavior === 'replace' ? !allowsSelection : manager.isEmpty);
    let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === 'replace';
    let hasAction = hasPrimaryAction || hasSecondaryAction;
    let modality = useRef(null);
    let longPressEnabled = hasAction && allowsSelection;
    let longPressEnabledOnPressStart = useRef(false);
    let hadPrimaryActionOnPressStart = useRef(false);
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {
    };
    if (shouldSelectOnPressUp) {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            if (e.pointerType === 'keyboard' && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey())) onSelect(e);
        };
        // If allowsDifferentPressOrigin, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e)=>{
            if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== 'mouse') {
                if (e.pointerType === 'keyboard' && !$880e95eb8b93ba9a$var$isActionKey()) return;
                onAction();
            } else if (e.pointerType !== 'keyboard') onSelect(e);
        };
        else {
            itemPressProps.onPressUp = (e)=>{
                if (e.pointerType !== 'keyboard') onSelect(e);
            };
            itemPressProps.onPress = hasPrimaryAction ? ()=>onAction()
             : null;
        }
    } else {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            hadPrimaryActionOnPressStart.current = hasPrimaryAction;
            // Select on mouse down unless there is a primary action which will occur on mouse up.
            // For keyboard, select on key down. If there is an action, the Space key selects on key down,
            // and the Enter key performs onAction on key up.
            if (e.pointerType === 'mouse' && !hasPrimaryAction || e.pointerType === 'keyboard' && (!onAction || $880e95eb8b93ba9a$var$isSelectionKey())) onSelect(e);
        };
        itemPressProps.onPress = (e)=>{
            // Selection occurs on touch up. Primary actions always occur on pointer up.
            // Both primary and secondary actions occur on Enter key up. The only exception
            // is secondary actions, which occur on double click with a mouse.
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || e.pointerType === 'virtual' || e.pointerType === 'keyboard' && hasAction && $880e95eb8b93ba9a$var$isActionKey() || e.pointerType === 'mouse' && hadPrimaryActionOnPressStart.current) {
                if (hasAction) onAction();
                else onSelect(e);
            }
        };
    }
    if (!isVirtualized) itemProps['data-key'] = key;
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    let { pressProps: pressProps , isPressed: isPressed  } = $f6c31cce2adf654f$export$45712eceda6fad21(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === 'mouse') {
            e.stopPropagation();
            e.preventDefault();
            onAction();
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    let { longPressProps: longPressProps  } = $8a26561d2877236e$export$c24ed0104d07eab9({
        isDisabled: !longPressEnabled,
        onLongPress (e) {
            if (e.pointerType === 'touch') {
                onSelect(e);
                manager.setSelectionBehavior('toggle');
            }
        }
    });
    // Prevent native drag and drop on long press if we also select on long press.
    // Once the user is in selection mode, they can long press again to drag.
    let onDragStart = (e)=>{
        if (modality.current === 'touch' && longPressEnabledOnPressStart.current) e.preventDefault();
    };
    return {
        itemProps: $3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {
        }, longPressEnabled ? longPressProps : {
        }, {
            onDoubleClick: onDoubleClick,
            onDragStart: onDragStart
        }),
        isPressed: isPressed,
        isSelected: manager.isSelected(key),
        isDisabled: isDisabled,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}
function $880e95eb8b93ba9a$var$isActionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === 'Enter';
}
function $880e95eb8b93ba9a$var$isSelectionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === ' ' || (event === null || event === void 0 ? void 0 : event.code) === 'Space';
}


var $982254629710d113$exports = {};

$parcel$export$l($982254629710d113$exports, "useSelectableList", () => $982254629710d113$export$b95089534ab7c1fd);

var $2a25aae57d74318e$exports = {};

$parcel$export$l($2a25aae57d74318e$exports, "ListKeyboardDelegate", () => $2a25aae57d74318e$export$a05409b8bb224a5a);
class $2a25aae57d74318e$export$a05409b8bb224a5a {
    getKeyBelow(key) {
        key = this.collection.getKeyAfter(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getKeyAbove(key) {
        key = this.collection.getKeyBefore(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    getItem(key) {
        return this.ref.current.querySelector(`[data-key="${key}"]`);
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        let pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);
        while(item && item.offsetTop > pageY){
            key = this.getKeyAbove(key);
            item = this.getItem(key);
        }
        return key;
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        let pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);
        while(item && item.offsetTop < pageY){
            key = this.getKeyBelow(key);
            item = this.getItem(key);
        }
        return key;
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getKeyBelow(key);
        }
        return null;
    }
    constructor(collection, disabledKeys, ref, collator){
        this.collection = collection;
        this.disabledKeys = disabledKeys;
        this.ref = ref;
        this.collator = collator;
    }
}




function $982254629710d113$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager , collection: collection , disabledKeys: disabledKeys , ref: ref , keyboardDelegate: keyboardDelegate , autoFocus: autoFocus , shouldFocusWrap: shouldFocusWrap , isVirtualized: isVirtualized , disallowEmptySelection: disallowEmptySelection , selectOnFocus: selectOnFocus = false , disallowTypeAhead: disallowTypeAhead , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $325a3faab7a68acd$export$a16aca283550c30d({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = useMemo(()=>keyboardDelegate || new $2a25aae57d74318e$export$a05409b8bb224a5a(collection, disabledKeys, ref, collator)
    , [
        keyboardDelegate,
        collection,
        disabledKeys,
        ref,
        collator
    ]);
    let { collectionProps: collectionProps  } = $ae20dd8cbca75726$export$d6daf82dcd84e87c({
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate,
        autoFocus: autoFocus,
        shouldFocusWrap: shouldFocusWrap,
        disallowEmptySelection: disallowEmptySelection,
        selectOnFocus: selectOnFocus,
        disallowTypeAhead: disallowTypeAhead,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        allowsTabNavigation: allowsTabNavigation,
        isVirtualized: isVirtualized,
        scrollRef: ref
    });
    return {
        listProps: collectionProps
    };
}

function $parcel$export$k(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c1d7fb2ec91bae71$exports = {};

$parcel$export$k($c1d7fb2ec91bae71$exports, "Item", () => $c1d7fb2ec91bae71$export$6d08773d2e66f8f2);

function $c1d7fb2ec91bae71$var$Item(props) {
    return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems , title: title , children: children  } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning)) console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.');
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child1 of childItems)yield {
                type: 'item',
                value: child1
            };
            else if (title) {
                let items = [];
                React.Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && React.Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;


var $9fc4852771d079eb$exports = {};

$parcel$export$k($9fc4852771d079eb$exports, "Section", () => $9fc4852771d079eb$export$6e2c8f0811a474ce);

function $9fc4852771d079eb$var$Section(props) {
    return null;
}
$9fc4852771d079eb$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children , title: title , items: items1  } = props;
    yield {
        type: 'section',
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items1) throw new Error('props.children was a function but props.items is missing');
                for (let item of items1)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                React.Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $9fc4852771d079eb$export$6e2c8f0811a474ce = $9fc4852771d079eb$var$Section;


var $7613b1592d41b092$exports = {};

$parcel$export$k($7613b1592d41b092$exports, "useCollection", () => $7613b1592d41b092$export$6cd28814d92fa9c9);

class $eb2240fc39a57fa5$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $eb2240fc39a57fa5$var$iterable(()=>this.iterateCollection(props)
        );
    }
    *iterateCollection(props) {
        let { children: children , items: items  } = props;
        if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            for (let item of props.items)yield* this.getFullNode({
                value: item
            }, {
                renderer: children
            });
        } else {
            let items = [];
            React.Children.forEach(children, (child)=>{
                items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {
                });
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _key;
            let key = (_key = v.key) !== null && _key !== void 0 ? _key : v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if (React.isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = typeof element.type === 'function' ? element.type.name : element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            let index = partialNode.index;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                let nodeKey = childNode.key;
                if (!nodeKey) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    // Cache the node based on its value
                    node.value = childNode.value || partialNode.value;
                    if (node.value) this.cache.set(node.value, node);
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node.type)}> in <${$eb2240fc39a57fa5$var$capitalize(parentNode.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null) return;
        // Create full node
        let builder = this;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: partialNode.value,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: partialNode.textValue,
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes,
            childNodes: $eb2240fc39a57fa5$var$iterable(function*() {
                if (!partialNode.hasChildNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // TODO: Remove this line entirely and enforce that users always provide unique keys.
                    // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    child.index = index;
                    let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
                    for (let node1 of nodes){
                        index++;
                        yield node1;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $eb2240fc39a57fa5$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item1 of iterable){
                cache.push(item1);
                yield item1;
            }
        }
    };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element))
    ;
    if (outer) return outer;
    if (inner) return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}



function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context, invalidators = []) {
    let builder = useMemo(()=>new $eb2240fc39a57fa5$export$bf788dd355e3a401()
    , []);
    let prev = useRef(null);
    return useMemo(()=>{
        let nodes = builder.build(props, context);
        prev.current = factory(nodes, prev.current);
        return prev.current;
    // Don't invalidate when any prop changes, just the two we care about.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        builder,
        props.children,
        props.items,
        context,
        ...invalidators
    ]);
}


var $453cc9f0df89c0a5$exports = {};

$parcel$export$k($453cc9f0df89c0a5$exports, "getItemCount", () => $453cc9f0df89c0a5$export$77d5aafae4e095b2);
const $453cc9f0df89c0a5$var$cache = new WeakMap();
function $453cc9f0df89c0a5$export$77d5aafae4e095b2(collection) {
    let count = $453cc9f0df89c0a5$var$cache.get(collection);
    if (count != null) return count;
    count = 0;
    for (let item of collection)if (item.type === 'section') count += $453cc9f0df89c0a5$export$77d5aafae4e095b2(item.childNodes);
    else count++;
    $453cc9f0df89c0a5$var$cache.set(collection, count);
    return count;
}

function $parcel$export$j(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c132121280ec012d$exports = {};

$parcel$export$j($c132121280ec012d$exports, "useListBox", () => $c132121280ec012d$export$50eacbbf140a3141);

var $b1f0cad8af73213b$exports = {};

$parcel$export$j($b1f0cad8af73213b$exports, "listData", () => $b1f0cad8af73213b$export$3585ede4d035bf14);
$parcel$export$j($b1f0cad8af73213b$exports, "getItemId", () => $b1f0cad8af73213b$export$9145995848b05025);
const $b1f0cad8af73213b$export$3585ede4d035bf14 = new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}






function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let { listProps: listProps  } = $982254629710d113$export$b95089534ab7c1fd({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys
    });
    let { focusWithinProps: focusWithinProps  } = $9ab94262bd0047c7$export$420e68273165f4ec({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = $bdb11010cef70236$export$f680877a34711e37(props.id);
    $b1f0cad8af73213b$export$3585ede4d035bf14.set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    return {
        labelProps: labelProps,
        listBoxProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, focusWithinProps, state.selectionManager.selectionMode === 'multiple' ? {
            'aria-multiselectable': 'true'
        } : {
        }, {
            role: 'listbox',
            ...$3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, listProps)
        })
    };
}


var $293f70390ea03370$exports = {};

$parcel$export$j($293f70390ea03370$exports, "useOption", () => $293f70390ea03370$export$497855f14858aa34);





function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
    let { key: key  } = props;
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    var _isDisabled;
    let isDisabled = (_isDisabled = props.isDisabled) !== null && _isDisabled !== void 0 ? _isDisabled : state.disabledKeys.has(key);
    var _isSelected;
    let isSelected = (_isSelected = props.isSelected) !== null && _isSelected !== void 0 ? _isSelected : state.selectionManager.isSelected(key);
    let isFocused = state.selectionManager.focusedKey === key;
    var _shouldSelectOnPressUp;
    let shouldSelectOnPressUp = (_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _shouldSelectOnPressUp !== void 0 ? _shouldSelectOnPressUp : data.shouldSelectOnPressUp;
    var _shouldFocusOnHover;
    let shouldFocusOnHover = (_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _shouldFocusOnHover !== void 0 ? _shouldFocusOnHover : data.shouldFocusOnHover;
    var _shouldUseVirtualFocus;
    let shouldUseVirtualFocus = (_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _shouldUseVirtualFocus !== void 0 ? _shouldUseVirtualFocus : data.shouldUseVirtualFocus;
    var _isVirtualized;
    let isVirtualized = (_isVirtualized = props.isVirtualized) !== null && _isVirtualized !== void 0 ? _isVirtualized : data.isVirtualized;
    let labelId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
    let descriptionId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!($c87311424ea30a05$export$9ac100e40613ea10() && $c87311424ea30a05$export$78551043582a6a98())) {
        optionProps['aria-label'] = props['aria-label'];
        optionProps['aria-labelledby'] = labelId;
        optionProps['aria-describedby'] = descriptionId;
    }
    if (isVirtualized) {
        optionProps['aria-posinset'] = state.collection.getItem(key).index + 1;
        optionProps['aria-setsize'] = $453cc9f0df89c0a5$export$77d5aafae4e095b2(state.collection);
    }
    let { itemProps: itemProps , isPressed: isPressed  } = $880e95eb8b93ba9a$export$ecf600387e221c37({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = $6179b936705e76d3$export$ae780daf29e6d456({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!$507fabe10e71c6fb$export$b9b3dfddab17db27()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        optionProps: {
            ...optionProps,
            ...$3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, hoverProps),
            id: $b1f0cad8af73213b$export$9145995848b05025(state, key)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed
    };
}


var $af383d3bef1cfdc9$exports = {};

$parcel$export$j($af383d3bef1cfdc9$exports, "useListBoxSection", () => $af383d3bef1cfdc9$export$c3f9f39876e4bc7);

function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = $bdb11010cef70236$export$f680877a34711e37();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, and only use it
            // as a label for the nested group.
            id: headingId,
            'aria-hidden': true
        } : {
        },
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}

function $parcel$interopDefault$6(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export$i(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $168583247155ddda$exports = {};

$parcel$export$i($168583247155ddda$exports, "useMenuTrigger", () => $168583247155ddda$export$dc9c12ed27dd1b49);
var $9bdd31893c9700c3$exports = {};
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = JSON.parse("{\"longPressMessage\":\"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة\"}");


var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = JSON.parse("{\"longPressMessage\":\"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто\"}");


var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = JSON.parse("{\"longPressMessage\":\"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku\"}");


var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = JSON.parse("{\"longPressMessage\":\"Langt tryk eller tryk på Alt + pil ned for at åbne menuen\"}");


var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = JSON.parse("{\"longPressMessage\":\"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen\"}");


var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = JSON.parse("{\"longPressMessage\":\"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού\"}");


var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = JSON.parse("{\"longPressMessage\":\"Long press or press Alt + ArrowDown to open menu\"}");


var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = JSON.parse("{\"longPressMessage\":\"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú\"}");


var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = JSON.parse("{\"longPressMessage\":\"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool\"}");


var $51608325613944d7$exports = {};
$51608325613944d7$exports = JSON.parse("{\"longPressMessage\":\"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli\"}");


var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = JSON.parse("{\"longPressMessage\":\"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.\"}");


var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = JSON.parse("{\"longPressMessage\":\"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט\"}");


var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = JSON.parse("{\"longPressMessage\":\"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika\"}");


var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = JSON.parse("{\"longPressMessage\":\"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához\"}");


var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = JSON.parse("{\"longPressMessage\":\"Premere a lungo o premere Alt + Freccia giù per aprire il menu\"}");


var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = JSON.parse("{\"longPressMessage\":\"長押しまたは Alt+下矢印キーでメニューを開く\"}");


var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = JSON.parse("{\"longPressMessage\":\"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기\"}");


var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = JSON.parse("{\"longPressMessage\":\"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.\"}");


var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = JSON.parse("{\"longPressMessage\":\"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa\"}");


var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = JSON.parse("{\"longPressMessage\":\"Langt trykk eller trykk Alt + PilNed for å åpne menyen\"}");


var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = JSON.parse("{\"longPressMessage\":\"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen\"}");


var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = JSON.parse("{\"longPressMessage\":\"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu\"}");


var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = JSON.parse("{\"longPressMessage\":\"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu\"}");


var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = JSON.parse("{\"longPressMessage\":\"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu\"}");


var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = JSON.parse("{\"longPressMessage\":\"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul\"}");


var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = JSON.parse("{\"longPressMessage\":\"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню\"}");


var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = JSON.parse("{\"longPressMessage\":\"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol\"}");


var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = JSON.parse("{\"longPressMessage\":\"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol\"}");


var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = JSON.parse("{\"longPressMessage\":\"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni\"}");


var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = JSON.parse("{\"longPressMessage\":\"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn\"}");


var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = JSON.parse("{\"longPressMessage\":\"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın\"}");


var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = JSON.parse("{\"longPressMessage\":\"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню\"}");


var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = JSON.parse("{\"longPressMessage\":\"长按或按 Alt + 向下方向键以打开菜单\"}");


var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = JSON.parse("{\"longPressMessage\":\"長按或按 Alt+向下鍵以開啟功能表\"}");


$9bdd31893c9700c3$exports = {
    "ar-AE": $c0398ad35c3639b7$exports,
    "bg-BG": $7af657c4165927c3$exports,
    "cs-CZ": $d95d4da6d531ab81$exports,
    "da-DK": $24ebda9c775dca17$exports,
    "de-DE": $743e0dfca6cab1e9$exports,
    "el-GR": $a2f41026e05f1c84$exports,
    "en-US": $43b800e97c901737$exports,
    "es-ES": $442f5f6ac211e29f$exports,
    "et-EE": $dff280acfeb2d8ac$exports,
    "fi-FI": $51608325613944d7$exports,
    "fr-FR": $c4a1b1eabeaa87be$exports,
    "he-IL": $8c74815cdee18d1b$exports,
    "hr-HR": $fd0e9ef6a7fe0ec9$exports,
    "hu-HU": $a89a74a39eba465a$exports,
    "it-IT": $edc7c66594a0ae8a$exports,
    "ja-JP": $f1ab51510712db52$exports,
    "ko-KR": $f9b672d9b82fa3d6$exports,
    "lt-LT": $a385f3910feda499$exports,
    "lv-LV": $4f1bde932c441789$exports,
    "nb-NO": $914a51a8a594d5be$exports,
    "nl-NL": $89aaf803103bb500$exports,
    "pl-PL": $c685891476dbaaca$exports,
    "pt-BR": $885879b9b10c2959$exports,
    "pt-PT": $6b39616688a51692$exports,
    "ro-RO": $f26362aed63f47e2$exports,
    "ru-RU": $06cbade644558bf0$exports,
    "sk-SK": $0a391ff68f9d59b1$exports,
    "sl-SI": $8193cf0e649c7928$exports,
    "sr-SP": $f398debcce5a5c55$exports,
    "sv-SE": $9e9fef000aa4c013$exports,
    "tr-TR": $c016c8183bbe3d68$exports,
    "uk-UA": $ca4f6c8462244e62$exports,
    "zh-CN": $2d9960c02ccac927$exports,
    "zh-TW": $f1b682a4c8c5631c$exports
};






function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu' , isDisabled: isDisabled , trigger: trigger = 'press'  } = props;
    let menuTriggerId = $bdb11010cef70236$export$f680877a34711e37();
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = $628037886ba31236$export$f9d5c8beee7d008d({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === 'longPress' && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case 'Enter':
            case ' ':
                if (trigger === 'longPress') return;
            // fallthrough
            case 'ArrowDown':
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('first');
                break;
            case 'ArrowUp':
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('last');
                break;
        }
    };
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$6($9bdd31893c9700c3$exports)));
    let { longPressProps: longPressProps  } = $8a26561d2877236e$export$c24ed0104d07eab9({
        isDisabled: isDisabled || trigger !== 'longPress',
        accessibilityDescription: formatMessage('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) // If opened with a screen reader, auto focus the first item.
            // Otherwise, the menu itself will be focused.
            state.toggle(e.pointerType === 'virtual' ? 'first' : null);
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) state.toggle();
        }
    };
    triggerProps = $3ef42575df84b30b$export$9d1611c77c2fe928(triggerProps, trigger === 'press' ? pressProps : longPressProps);
    return {
        menuTriggerProps: {
            ...triggerProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId
        }
    };
}


var $d5336fe17ce95402$exports = {};

$parcel$export$i($d5336fe17ce95402$exports, "useMenu", () => $d5336fe17ce95402$export$38eaa17faae8f579);


function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true , ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let { listProps: listProps  } = $982254629710d113$export$b95089534ab7c1fd({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap
    });
    return {
        menuProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            role: 'menu',
            ...listProps
        })
    };
}


var $a2e5df62f93c7633$exports = {};

$parcel$export$i($a2e5df62f93c7633$exports, "useMenuItem", () => $a2e5df62f93c7633$export$9d32628fc2aea7da);




function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    let { isSelected: isSelected , isDisabled: isDisabled , key: key , onClose: onClose , closeOnSelect: closeOnSelect , isVirtualized: isVirtualized , onAction: onAction  } = props;
    let role = 'menuitem';
    if (state.selectionManager.selectionMode === 'single') role = 'menuitemradio';
    else if (state.selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    let labelId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
    let descriptionId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
    let keyboardId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
    let ariaProps = {
        'aria-disabled': isDisabled,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined
    };
    if (state.selectionManager.selectionMode !== 'none') ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = state.collection.getItem(key).index;
        ariaProps['aria-setsize'] = $453cc9f0df89c0a5$export$77d5aafae4e095b2(state.collection);
    }
    let onKeyDown = (e)=>{
        // Ignore repeating events, which may have started on the menu trigger before moving
        // focus to the menu item. We want to wait for a second complete key press sequence.
        if (e.repeat) return;
        switch(e.key){
            case ' ':
                if (!isDisabled && state.selectionManager.selectionMode === 'none' && closeOnSelect !== false && onClose) onClose();
                break;
            case 'Enter':
                // The Enter key should always close on select, except if overridden.
                if (!isDisabled && closeOnSelect !== false && onClose) onClose();
                break;
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType === 'keyboard' && onAction) onAction(key);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') {
            if (onAction) onAction(key);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : state.selectionManager.selectionMode !== 'multiple')) onClose();
        }
    };
    let { itemProps: itemProps  } = $880e95eb8b93ba9a$export$ecf600387e221c37({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true
    });
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        onPressStart: onPressStart,
        onPressUp: onPressUp,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = $6179b936705e76d3$export$ae780daf29e6d456({
        isDisabled: isDisabled,
        onHoverStart () {
            if (!$507fabe10e71c6fb$export$b9b3dfddab17db27()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        menuItemProps: {
            ...ariaProps,
            ...$3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, pressProps, hoverProps, {
                onKeyDown: onKeyDown
            })
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        }
    };
}


var $3e5eb2498db5b506$exports = {};

$parcel$export$i($3e5eb2498db5b506$exports, "useMenuSection", () => $3e5eb2498db5b506$export$73f7a44322579622);

function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = $bdb11010cef70236$export$f680877a34711e37();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, and only use it
            // as a label for the nested group.
            id: headingId,
            'aria-hidden': true
        } : {
        },
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}

function $parcel$export$h(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2d73ec29415bd339$exports = {};

$parcel$export$h($2d73ec29415bd339$exports, "useTextField", () => $2d73ec29415bd339$export$712718f7aec83d5);



function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input' , isDisabled: isDisabled = false , isRequired: isRequired = false , isReadOnly: isReadOnly = false , validationState: validationState , type: type = 'text' , onChange: onChange = ()=>{
    }  } = props;
    let { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $2baaea4c71418dea$export$294aa081a6c6f55d(props);
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    return {
        labelProps: labelProps,
        inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, inputElementType === 'input' && inputOnlyProps, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            'aria-required': isRequired || undefined,
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            value: props.value,
            defaultValue: props.value ? undefined : props.defaultValue,
            onChange: (e)=>onChange(e.target.value)
            ,
            autoComplete: props.autoComplete,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


var $d841c8010a73d545$exports = {};

$parcel$export$h($d841c8010a73d545$exports, "useFormattedTextField", () => $d841c8010a73d545$export$4f384c9210e583c3);



function $d841c8010a73d545$var$supportsNativeBeforeInputEvent() {
    return typeof window !== 'undefined' && window.InputEvent && // @ts-ignore
    typeof InputEvent.prototype.getTargetRanges === 'function';
}
function $d841c8010a73d545$export$4f384c9210e583c3(props, state1, inputRef) {
    let stateRef = useRef(state1);
    stateRef.current = state1;
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    useEffect(()=>{
        if (!$d841c8010a73d545$var$supportsNativeBeforeInputEvent()) return;
        let input = inputRef.current;
        let onBeforeInput = (e)=>{
            let state = stateRef.current;
            // Compute the next value of the input if the event is allowed to proceed.
            // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
            let nextValue;
            switch(e.inputType){
                case 'historyUndo':
                case 'historyRedo':
                    // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                    // because presumably the input would have already been validated previously.
                    return;
                case 'deleteContent':
                case 'deleteByCut':
                case 'deleteByDrag':
                    nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteContentForward':
                    // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                    // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                    // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                    // If we support additional locales in the future, this may need to change.
                    nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteContentBackward':
                    nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteSoftLineBackward':
                case 'deleteHardLineBackward':
                    nextValue = input.value.slice(input.selectionStart);
                    break;
                default:
                    if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                    break;
            }
            // If we did not compute a value, or the new value is invalid, prevent the event
            // so that the browser does not update the input text, move the selection, or add to
            // the undo/redo stack.
            if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
        };
        input.addEventListener('beforeinput', onBeforeInput, false);
        return ()=>{
            input.removeEventListener('beforeinput', onBeforeInput, false);
        };
    }, [
        inputRef,
        stateRef
    ]);
    let onBeforeInput1 = !$d841c8010a73d545$var$supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
        if (!state1.validate(nextValue)) e.preventDefault();
    } : null;
    let { labelProps: labelProps , inputProps: textFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $2d73ec29415bd339$export$712718f7aec83d5(props, inputRef);
    let compositionStartState = useRef(null);
    return {
        inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(textFieldProps, {
            onBeforeInput: onBeforeInput1,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = inputRef.current;
                compositionStartState.current = {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            onCompositionEnd () {
                if (!state1.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state1.setInputValue(value);
                }
            }
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}

function $parcel$interopDefault$5(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export$g(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c350ade66beef0af$exports = {};

$parcel$export$g($c350ade66beef0af$exports, "useComboBox", () => $c350ade66beef0af$export$8c18d1b4f7232bbf);






var $2e84e748dc57e459$exports = {};
var $02cb4c75c506befe$exports = {};
$02cb4c75c506befe$exports = JSON.parse("{\"buttonLabel\":\"عرض المقترحات\",\"countAnnouncement\":\"{optionCount, plural, one {# خيار} other {# خيارات}} متاحة.\",\"focusAnnouncement\":\"{isGroupChange, select, true {المجموعة المدخلة {groupTitle}, مع {groupCount, plural, one {# خيار} other {# خيارات}}. } other {}}{optionText}{isSelected, select, true {, محدد} other {}}\",\"listboxLabel\":\"مقترحات\",\"selectedAnnouncement\":\"{optionText}، محدد\"}");


var $568b8163f1e56faf$exports = {};
$568b8163f1e56faf$exports = JSON.parse("{\"buttonLabel\":\"Покажи предложения\",\"countAnnouncement\":\"{optionCount, plural, one {# опция} other {# опции}} на разположение.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Въведена група {groupTitle}, с {groupCount, plural, one {# опция} other {# опции}}. } other {}}{optionText}{isSelected, select, true {, избрани} other {}}\",\"listboxLabel\":\"Предложения\",\"selectedAnnouncement\":\"{optionText}, избрани\"}");


var $87581c0202d106b8$exports = {};
$87581c0202d106b8$exports = JSON.parse("{\"buttonLabel\":\"Zobrazit doporučení\",\"countAnnouncement\":\"K dispozici {optionCount, plural, one {je # možnost} other {jsou/je # možnosti/-í}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadaná skupina „{groupTitle}“ {groupCount, plural, one {s # možností} other {se # možnostmi}}. } other {}}{optionText}{isSelected, select, true { (vybráno)} other {}}\",\"listboxLabel\":\"Návrhy\",\"selectedAnnouncement\":\"{optionText}, vybráno\"}");


var $a10a0369f5433ed1$exports = {};
$a10a0369f5433ed1$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# mulighed tilgængelig} other {# muligheder tilgængelige}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angivet gruppe {groupTitle}, med {groupCount, plural, one {# mulighed} other {# muligheder}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $bfd288727d5cb166$exports = {};
$bfd288727d5cb166$exports = JSON.parse("{\"buttonLabel\":\"Empfehlungen anzeigen\",\"countAnnouncement\":\"{optionCount, plural, one {# Option} other {# Optionen}} verfügbar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Eingetretene Gruppe {groupTitle}, mit {groupCount, plural, one {# Option} other {# Optionen}}. } other {}}{optionText}{isSelected, select, true {, ausgewählt} other {}}\",\"listboxLabel\":\"Empfehlungen\",\"selectedAnnouncement\":\"{optionText}, ausgewählt\"}");


var $ca177778f9a74e3c$exports = {};
$ca177778f9a74e3c$exports = JSON.parse("{\"buttonLabel\":\"Προβολή προτάσεων\",\"countAnnouncement\":\"{optionCount, plural, one {# επιλογή} other {# επιλογές }} διαθέσιμες.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Εισαγμένη ομάδα {groupTitle}, με {groupCount, plural, one {# επιλογή} other {# επιλογές}}. } other {}}{optionText}{isSelected, select, true {, επιλεγμένο} other {}}\",\"listboxLabel\":\"Προτάσεις\",\"selectedAnnouncement\":\"{optionText}, επιλέχθηκε\"}");


var $9b5aa79ef84beb6c$exports = {};
$9b5aa79ef84beb6c$exports = JSON.parse("{\"focusAnnouncement\":\"{isGroupChange, select, true {Entered group {groupTitle}, with {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, selected} other {}}\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} available.\",\"selectedAnnouncement\":\"{optionText}, selected\",\"buttonLabel\":\"Show suggestions\",\"listboxLabel\":\"Suggestions\"}");


var $57968e8209de2557$exports = {};
$57968e8209de2557$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugerencias\",\"countAnnouncement\":\"{optionCount, plural, one {# opción} other {# opciones}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Se ha unido al grupo {groupTitle}, con {groupCount, plural, one {# opción} other {# opciones}}. } other {}}{optionText}{isSelected, select, true {, seleccionado} other {}}\",\"listboxLabel\":\"Sugerencias\",\"selectedAnnouncement\":\"{optionText}, seleccionado\"}");


var $60690790bf4c1c6a$exports = {};
$60690790bf4c1c6a$exports = JSON.parse("{\"buttonLabel\":\"Kuva soovitused\",\"countAnnouncement\":\"{optionCount, plural, one {# valik} other {# valikud}} saadaval.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Sisestatud rühm {groupTitle}, valikuga {groupCount, plural, one {# valik} other {# valikud}}. } other {}}{optionText}{isSelected, select, true {, valitud} other {}}\",\"listboxLabel\":\"Soovitused\",\"selectedAnnouncement\":\"{optionText}, valitud\"}");


var $1101246e8c7d9357$exports = {};
$1101246e8c7d9357$exports = JSON.parse("{\"buttonLabel\":\"Näytä ehdotukset\",\"countAnnouncement\":\"{optionCount, plural, one {# vaihtoehto} other {# vaihtoehdot}} saatavilla.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Mentiin ryhmään {groupTitle}, {groupCount, plural, one {# vaihtoehdon} other {# vaihtoehdon}} kanssa.} other {}}{optionText}{isSelected, select, true {, valittu} other {}}\",\"listboxLabel\":\"Ehdotukset\",\"selectedAnnouncement\":\"{optionText}, valittu\"}");


var $6404b5cb5b241730$exports = {};
$6404b5cb5b241730$exports = JSON.parse("{\"buttonLabel\":\"Afficher les suggestions\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groupe {groupTitle} saisi, avec {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, sélectionné(s)} other {}}\",\"listboxLabel\":\"Suggestions\",\"selectedAnnouncement\":\"{optionText}, sélectionné\"}");


var $dfeafa702e92e31f$exports = {};
$dfeafa702e92e31f$exports = JSON.parse("{\"buttonLabel\":\"הצג הצעות\",\"countAnnouncement\":\"{optionCount, plural, one {אפשרות #} other {# אפשרויות}} במצב זמין.\",\"focusAnnouncement\":\"{isGroupChange, select, true {נכנס לקבוצה {groupTitle}, עם {groupCount, plural, one {אפשרות #} other {# אפשרויות}}. } other {}}{optionText}{isSelected, select, true {, נבחר} other {}}\",\"listboxLabel\":\"הצעות\",\"selectedAnnouncement\":\"{optionText}, נבחר\"}");


var $2d125e0b34676352$exports = {};
$2d125e0b34676352$exports = JSON.parse("{\"buttonLabel\":\"Prikaži prijedloge\",\"countAnnouncement\":\"Dostupno još: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena skupina {groupTitle}, s {groupCount, plural, one {# opcijom} other {# opcije/a}}. } other {}}{optionText}{isSelected, select, true {, odabranih} other {}}\",\"listboxLabel\":\"Prijedlozi\",\"selectedAnnouncement\":\"{optionText}, odabrano\"}");


var $ea029611d7634059$exports = {};
$ea029611d7634059$exports = JSON.parse("{\"buttonLabel\":\"Javaslatok megjelenítése\",\"countAnnouncement\":\"{optionCount, plural, one {# lehetőség} other {# lehetőség}} áll rendelkezésre.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Belépett a(z) {groupTitle} csoportba, amely {groupCount, plural, one {# lehetőséget} other {# lehetőséget}} tartalmaz. } other {}}{optionText}{isSelected, select, true {, kijelölve} other {}}\",\"listboxLabel\":\"Javaslatok\",\"selectedAnnouncement\":\"{optionText}, kijelölve\"}");


var $77f075bb86ad7091$exports = {};
$77f075bb86ad7091$exports = JSON.parse("{\"buttonLabel\":\"Mostra suggerimenti\",\"countAnnouncement\":\"{optionCount, plural, one {# opzione disponibile} other {# opzioni disponibili}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingresso nel gruppo {groupTitle}, con {groupCount, plural, one {# opzione} other {# opzioni}}. } other {}}{optionText}{isSelected, select, true {, selezionato} other {}}\",\"listboxLabel\":\"Suggerimenti\",\"selectedAnnouncement\":\"{optionText}, selezionato\"}");


var $6e87462e84907983$exports = {};
$6e87462e84907983$exports = JSON.parse("{\"buttonLabel\":\"候補を表示\",\"countAnnouncement\":\"{optionCount, plural, one {# 個のオプション} other {# 個のオプション}}を利用できます。\",\"focusAnnouncement\":\"{isGroupChange, select, true {入力されたグループ {groupTitle}、{groupCount, plural, one {# 個のオプション} other {# 個のオプション}}を含む。} other {}}{optionText}{isSelected, select, true {、選択済み} other {}}\",\"listboxLabel\":\"候補\",\"selectedAnnouncement\":\"{optionText}、選択済み\"}");


var $9246f2c6edc6b232$exports = {};
$9246f2c6edc6b232$exports = JSON.parse("{\"buttonLabel\":\"제안 사항 표시\",\"countAnnouncement\":\"{optionCount, plural, one {#개 옵션} other {#개 옵션}}을 사용할 수 있습니다.\",\"focusAnnouncement\":\"{isGroupChange, select, true {입력한 그룹 {groupTitle}, {groupCount, plural, one {#개 옵션} other {#개 옵션}}. } other {}}{optionText}{isSelected, select, true {, 선택됨} other {}}\",\"listboxLabel\":\"제안\",\"selectedAnnouncement\":\"{optionText}, 선택됨\"}");


var $e587accc6c0a434c$exports = {};
$e587accc6c0a434c$exports = JSON.parse("{\"buttonLabel\":\"Rodyti pasiūlymus\",\"countAnnouncement\":\"Yra {optionCount, plural, one {# parinktis} other {# parinktys (-ių)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Įvesta grupė {groupTitle}, su {groupCount, plural, one {# parinktimi} other {# parinktimis (-ių)}}. } other {}}{optionText}{isSelected, select, true {, pasirinkta} other {}}\",\"listboxLabel\":\"Pasiūlymai\",\"selectedAnnouncement\":\"{optionText}, pasirinkta\"}");


var $03a1900e7400b5ab$exports = {};
$03a1900e7400b5ab$exports = JSON.parse("{\"buttonLabel\":\"Rādīt ieteikumus\",\"countAnnouncement\":\"Pieejamo opciju skaits: {optionCount, plural, one {# opcija} other {# opcijas}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ievadīta grupa {groupTitle}, ar {groupCount, plural, one {# opciju} other {# opcijām}}. } other {}}{optionText}{isSelected, select, true {, atlasīta} other {}}\",\"listboxLabel\":\"Ieteikumi\",\"selectedAnnouncement\":\"{optionText}, atlasīta\"}");


var $1387676441be6cf6$exports = {};
$1387676441be6cf6$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativer}} finnes.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angitt gruppe {groupTitle}, med {groupCount, plural, one {# alternativ} other {# alternativer}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $17e82ebf0f8ab91f$exports = {};
$17e82ebf0f8ab91f$exports = JSON.parse("{\"buttonLabel\":\"Suggesties weergeven\",\"countAnnouncement\":\"{optionCount, plural, one {# optie} other {# opties}} beschikbaar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groep {groupTitle} ingevoerd met {groupCount, plural, one {# optie} other {# opties}}. } other {}}{optionText}{isSelected, select, true {, geselecteerd} other {}}\",\"listboxLabel\":\"Suggesties\",\"selectedAnnouncement\":\"{optionText}, geselecteerd\"}");


var $2f5377d3471630e5$exports = {};
$2f5377d3471630e5$exports = JSON.parse("{\"buttonLabel\":\"Wyświetlaj sugestie\",\"countAnnouncement\":\"dostępna/dostępne(-nych) {optionCount, plural, one {# opcja} other {# opcje(-i)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Dołączono do grupy {groupTitle}, z {groupCount, plural, one {# opcją} other {# opcjami}}. } other {}}{optionText}{isSelected, select, true {, wybrano} other {}}\",\"listboxLabel\":\"Sugestie\",\"selectedAnnouncement\":\"{optionText}, wybrano\"}");


var $dee9868b6fa95ffe$exports = {};
$dee9868b6fa95ffe$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugestões\",\"countAnnouncement\":\"{optionCount, plural, one {# opção} other {# opções}} disponível.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo inserido {groupTitle}, com {groupCount, plural, one {# opção} other {# opções}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugestões\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $f8b2e63637cbb5a6$exports = {};
$f8b2e63637cbb5a6$exports = JSON.parse("{\"buttonLabel\":\"Apresentar sugestões\",\"countAnnouncement\":\"{optionCount, plural, one {# opção} other {# opções}} disponível.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo introduzido {groupTitle}, com {groupCount, plural, one {# opção} other {# opções}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugestões\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $46a885db3b44ea95$exports = {};
$46a885db3b44ea95$exports = JSON.parse("{\"buttonLabel\":\"Afișare sugestii\",\"countAnnouncement\":\"{optionCount, plural, one {# opțiune} other {# opțiuni}} disponibile.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grup {groupTitle} introdus, cu {groupCount, plural, one {# opțiune} other {# opțiuni}}. } other {}}{optionText}{isSelected, select, true {, selectat} other {}}\",\"listboxLabel\":\"Sugestii\",\"selectedAnnouncement\":\"{optionText}, selectat\"}");


var $50d8a8f0afa9dee5$exports = {};
$50d8a8f0afa9dee5$exports = JSON.parse("{\"buttonLabel\":\"Показать предложения\",\"countAnnouncement\":\"{optionCount, plural, one {# параметр} other {# параметров}} доступно.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Введенная группа {groupTitle}, с {groupCount, plural, one {# параметром} other {# параметрами}}. } other {}}{optionText}{isSelected, select, true {, выбранными} other {}}\",\"listboxLabel\":\"Предложения\",\"selectedAnnouncement\":\"{optionText}, выбрано\"}");


var $2867ee6173245507$exports = {};
$2867ee6173245507$exports = JSON.parse("{\"buttonLabel\":\"Zobraziť návrhy\",\"countAnnouncement\":\"{optionCount, plural, one {# možnosť} other {# možnosti/-í}} k dispozícii.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadaná skupina {groupTitle}, s {groupCount, plural, one {# možnosťou} other {# možnosťami}}. } other {}}{optionText}{isSelected, select, true {, vybraté} other {}}\",\"listboxLabel\":\"Návrhy\",\"selectedAnnouncement\":\"{optionText}, vybraté\"}");


var $0631b65beeb09b50$exports = {};
$0631b65beeb09b50$exports = JSON.parse("{\"buttonLabel\":\"Prikaži predloge\",\"countAnnouncement\":\"Na voljo je {optionCount, plural, one {# opcija} other {# opcije}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Vnesena skupina {groupTitle}, z {groupCount, plural, one {# opcija} other {# opcije}}. } other {}}{optionText}{isSelected, select, true {, izbrano} other {}}\",\"listboxLabel\":\"Predlogi\",\"selectedAnnouncement\":\"{optionText}, izbrano\"}");


var $65fc749265dcd686$exports = {};
$65fc749265dcd686$exports = JSON.parse("{\"buttonLabel\":\"Prikaži predloge\",\"countAnnouncement\":\"Dostupno još: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena grupa {groupTitle}, s {groupCount, plural, one {# opcijom} other {# optione/a}}. } other {}}{optionText}{isSelected, select, true {, izabranih} other {}}\",\"listboxLabel\":\"Predlozi\",\"selectedAnnouncement\":\"{optionText}, izabrano\"}");


var $69ba655c7853c08e$exports = {};
$69ba655c7853c08e$exports = JSON.parse("{\"buttonLabel\":\"Visa förslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativ}} tillgängliga.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingick i gruppen {groupTitle} med {groupCount, plural, one {# alternativ} other {# alternativ}}. } other {}}{optionText}{isSelected, select, true {, valda} other {}}\",\"listboxLabel\":\"Förslag\",\"selectedAnnouncement\":\"{optionText}, valda\"}");


var $a79794784d61577c$exports = {};
$a79794784d61577c$exports = JSON.parse("{\"buttonLabel\":\"Önerileri göster\",\"countAnnouncement\":\"{optionCount, plural, one {# seçenek} other {# seçenekler}} kullanılabilir.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Girilen grup {groupTitle}, ile {groupCount, plural, one {# seçenek} other {# seçenekler}}. } other {}}{optionText}{isSelected, select, true {, seçildi} other {}}\",\"listboxLabel\":\"Öneriler\",\"selectedAnnouncement\":\"{optionText}, seçildi\"}");


var $c2845791417ebaf4$exports = {};
$c2845791417ebaf4$exports = JSON.parse("{\"buttonLabel\":\"Показати пропозиції\",\"countAnnouncement\":\"{optionCount, plural, one {# параметр} other {# параметри(-ів)}} доступно.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Введена група {groupTitle}, з {groupCount, plural, one {# параметр} other {# параметри(-ів)}}. } other {}}{optionText}{isSelected, select, true {, вибрано} other {}}\",\"listboxLabel\":\"Пропозиції\",\"selectedAnnouncement\":\"{optionText}, вибрано\"}");


var $29b642d0025cc7a4$exports = {};
$29b642d0025cc7a4$exports = JSON.parse("{\"buttonLabel\":\"显示建议\",\"countAnnouncement\":\"有 {optionCount, plural, one {# 个选项} other {# 个选项}}可用。\",\"focusAnnouncement\":\"{isGroupChange, select, true {进入了 {groupTitle} 组，其中有 {groupCount, plural, one {# 个选项} other {# 个选项}}. } other {}}{optionText}{isSelected, select, true {, 已选择} other {}}\",\"listboxLabel\":\"建议\",\"selectedAnnouncement\":\"{optionText}, 已选择\"}");


var $cd36dd33f9d46936$exports = {};
$cd36dd33f9d46936$exports = JSON.parse("{\"buttonLabel\":\"顯示建議\",\"countAnnouncement\":\"{optionCount, plural, one {# 選項} other {# 選項}} 可用。\",\"focusAnnouncement\":\"{isGroupChange, select, true {輸入的群組 {groupTitle}, 有 {groupCount, plural, one {# 選項} other {# 選項}}. } other {}}{optionText}{isSelected, select, true {, 已選取} other {}}\",\"listboxLabel\":\"建議\",\"selectedAnnouncement\":\"{optionText}, 已選取\"}");


$2e84e748dc57e459$exports = {
    "ar-AE": $02cb4c75c506befe$exports,
    "bg-BG": $568b8163f1e56faf$exports,
    "cs-CZ": $87581c0202d106b8$exports,
    "da-DK": $a10a0369f5433ed1$exports,
    "de-DE": $bfd288727d5cb166$exports,
    "el-GR": $ca177778f9a74e3c$exports,
    "en-US": $9b5aa79ef84beb6c$exports,
    "es-ES": $57968e8209de2557$exports,
    "et-EE": $60690790bf4c1c6a$exports,
    "fi-FI": $1101246e8c7d9357$exports,
    "fr-FR": $6404b5cb5b241730$exports,
    "he-IL": $dfeafa702e92e31f$exports,
    "hr-HR": $2d125e0b34676352$exports,
    "hu-HU": $ea029611d7634059$exports,
    "it-IT": $77f075bb86ad7091$exports,
    "ja-JP": $6e87462e84907983$exports,
    "ko-KR": $9246f2c6edc6b232$exports,
    "lt-LT": $e587accc6c0a434c$exports,
    "lv-LV": $03a1900e7400b5ab$exports,
    "nb-NO": $1387676441be6cf6$exports,
    "nl-NL": $17e82ebf0f8ab91f$exports,
    "pl-PL": $2f5377d3471630e5$exports,
    "pt-BR": $dee9868b6fa95ffe$exports,
    "pt-PT": $f8b2e63637cbb5a6$exports,
    "ro-RO": $46a885db3b44ea95$exports,
    "ru-RU": $50d8a8f0afa9dee5$exports,
    "sk-SK": $2867ee6173245507$exports,
    "sl-SI": $0631b65beeb09b50$exports,
    "sr-SP": $65fc749265dcd686$exports,
    "sv-SE": $69ba655c7853c08e$exports,
    "tr-TR": $a79794784d61577c$exports,
    "uk-UA": $c2845791417ebaf4$exports,
    "zh-CN": $29b642d0025cc7a4$exports,
    "zh-TW": $cd36dd33f9d46936$exports
};






function $c350ade66beef0af$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef , popoverRef: popoverRef , inputRef: inputRef , listBoxRef: listBoxRef , keyboardDelegate: keyboardDelegate , shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap , isReadOnly: isReadOnly , isDisabled: isDisabled  } = props;
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$5($2e84e748dc57e459$exports)));
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = $168583247155ddda$export$dc9c12ed27dd1b49({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    $b1f0cad8af73213b$export$3585ede4d035bf14.set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let delegate = useMemo(()=>keyboardDelegate || new $2a25aae57d74318e$export$a05409b8bb224a5a(state.collection, state.disabledKeys, listBoxRef)
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps  } = $ae20dd8cbca75726$export$d6daf82dcd84e87c({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Enter':
            case 'Tab':
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === 'Enter') e.preventDefault();
                state.commit();
                break;
            case 'Escape':
                state.revert();
                break;
            case 'ArrowDown':
                state.open('first', 'manual');
                break;
            case 'ArrowUp':
                state.open('last', 'manual');
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        var ref;
        // Ignore blur if focused moved to the button or into the popover.
        if (e.relatedTarget === (buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) || ((ref = popoverRef.current) === null || ref === void 0 ? void 0 : ref.contains(e.relatedTarget))) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $2d73ec29415bd339$export$712718f7aec83d5({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly && $ff5963eb1fccf552$export$e08e3b67e392101e(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown),
        onBlur: onBlur,
        value: state.inputValue,
        onFocus: onFocus,
        autoComplete: 'off'
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            // Focus the input field in case it isn't focused yet
            inputRef.current.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            inputRef.current.focus();
            state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null, 'manual');
        }
    };
    let triggerLabelProps = $313b98861ee5dd6c$export$d6875122194c7b44({
        id: menuTriggerProps.id,
        'aria-label': formatMessage('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = $313b98861ee5dd6c$export$d6875122194c7b44({
        id: menuProps.id,
        'aria-label': formatMessage('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = useRef(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            e.preventDefault();
            inputRef.current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + 0.5 * rect.width);
        let centerY = Math.ceil(rect.top + 0.5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            e.preventDefault();
            inputRef.current.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    var ref1;
    let sectionKey = (ref1 = focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) !== null && ref1 !== void 0 ? ref1 : null;
    var _focusedKey;
    let itemKey = (_focusedKey = state.selectionManager.focusedKey) !== null && _focusedKey !== void 0 ? _focusedKey : null;
    let lastSection = useRef(sectionKey);
    let lastItem = useRef(itemKey);
    useEffect(()=>{
        if ($c87311424ea30a05$export$e1865c3bedcd822b() && focusedItem != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = (section === null || section === void 0 ? void 0 : section['aria-label']) || (typeof (section === null || section === void 0 ? void 0 : section.rendered) === 'string' ? section.rendered : '') || '';
            let announcement = formatMessage('focusAnnouncement', {
                isGroupChange: section && sectionKey !== lastSection.current,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...section.childNodes
                ].length : 0,
                optionText: focusedItem['aria-label'] || focusedItem.textValue || '',
                isSelected: isSelected
            });
            $319e236875307eab$export$a9b970dcc4ae71a9(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = $453cc9f0df89c0a5$export$77d5aafae4e095b2(state.collection);
    let lastSize = useRef(optionCount);
    let lastOpen = useRef(state.isOpen);
    useEffect(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || $c87311424ea30a05$export$e1865c3bedcd822b());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = formatMessage('countAnnouncement', {
                optionCount: optionCount
            });
            $319e236875307eab$export$a9b970dcc4ae71a9(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = useRef(state.selectedKey);
    useEffect(()=>{
        if ($c87311424ea30a05$export$e1865c3bedcd822b() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = formatMessage('selectedAnnouncement', {
                optionText: optionText
            });
            $319e236875307eab$export$a9b970dcc4ae71a9(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    useEffect(()=>{
        if (state.isOpen) return $5e3802645cc19319$export$1c3ebcada18427bf([
            inputRef.current,
            popoverRef.current
        ]);
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? $b1f0cad8af73213b$export$9145995848b05025(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: $3ef42575df84b30b$export$9d1611c77c2fe928(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}

function $parcel$interopDefault$4(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export$f(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d2e8511e6f209edf$exports = {};

$parcel$export$f($d2e8511e6f209edf$exports, "useSpinButton", () => $d2e8511e6f209edf$export$e908e06f4b8e3402);


var $c6208a7792e31a37$exports = {};
var $ed6aae4e5f766f1e$exports = {};
$ed6aae4e5f766f1e$exports = JSON.parse("{\"Empty\":\"فارغ\"}");


var $38854e2b175151fa$exports = {};
$38854e2b175151fa$exports = JSON.parse("{\"Empty\":\"Изпразни\"}");


var $15b25ab20f3945b2$exports = {};
$15b25ab20f3945b2$exports = JSON.parse("{\"Empty\":\"Prázdné\"}");


var $692a4298b6b649a2$exports = {};
$692a4298b6b649a2$exports = JSON.parse("{\"Empty\":\"Tom\"}");


var $1c6e1539193f1243$exports = {};
$1c6e1539193f1243$exports = JSON.parse("{\"Empty\":\"Leer\"}");


var $1e8678632c464b6d$exports = {};
$1e8678632c464b6d$exports = JSON.parse("{\"Empty\":\"Άδειο\"}");


var $4adc85d9bf5b9eed$exports = {};
$4adc85d9bf5b9eed$exports = JSON.parse("{\"Empty\":\"Empty\"}");


var $41c4b2bb61dafbca$exports = {};
$41c4b2bb61dafbca$exports = JSON.parse("{\"Empty\":\"Vacío\"}");


var $405f8b24f5dd2a60$exports = {};
$405f8b24f5dd2a60$exports = JSON.parse("{\"Empty\":\"Tühjenda\"}");


var $7efe3ed02b9b9dd4$exports = {};
$7efe3ed02b9b9dd4$exports = JSON.parse("{\"Empty\":\"Tyhjä\"}");


var $99fc4c101d92daf3$exports = {};
$99fc4c101d92daf3$exports = JSON.parse("{\"Empty\":\"Vide\"}");


var $f9e155e6e8cacaa2$exports = {};
$f9e155e6e8cacaa2$exports = JSON.parse("{\"Empty\":\"ריק\"}");


var $c31b5e8e9a249fd5$exports = {};
$c31b5e8e9a249fd5$exports = JSON.parse("{\"Empty\":\"Prazno\"}");


var $9c5435bc17499bd9$exports = {};
$9c5435bc17499bd9$exports = JSON.parse("{\"Empty\":\"Üres\"}");


var $6d1fc8e84d8165e1$exports = {};
$6d1fc8e84d8165e1$exports = JSON.parse("{\"Empty\":\"Vuoto\"}");


var $46ea6b3641b83e71$exports = {};
$46ea6b3641b83e71$exports = JSON.parse("{\"Empty\":\"空\"}");


var $0e3cc9a288289dc5$exports = {};
$0e3cc9a288289dc5$exports = JSON.parse("{\"Empty\":\"비어 있음\"}");


var $4ff2bb25c0089ffb$exports = {};
$4ff2bb25c0089ffb$exports = JSON.parse("{\"Empty\":\"Tuščias\"}");


var $6cf33cd4c010a2fb$exports = {};
$6cf33cd4c010a2fb$exports = JSON.parse("{\"Empty\":\"Tukšs\"}");


var $5a9f8486f8b8837e$exports = {};
$5a9f8486f8b8837e$exports = JSON.parse("{\"Empty\":\"Tom\"}");


var $583f94d807f6ecea$exports = {};
$583f94d807f6ecea$exports = JSON.parse("{\"Empty\":\"Leeg\"}");


var $cc4dcfeea2b4050d$exports = {};
$cc4dcfeea2b4050d$exports = JSON.parse("{\"Empty\":\"Pusty\"}");


var $68ac2954d56e12b4$exports = {};
$68ac2954d56e12b4$exports = JSON.parse("{\"Empty\":\"Vazio\"}");


var $fdb0616f309780b0$exports = {};
$fdb0616f309780b0$exports = JSON.parse("{\"Empty\":\"Vazio\"}");


var $fe1eccf4ee1d6f52$exports = {};
$fe1eccf4ee1d6f52$exports = JSON.parse("{\"Empty\":\"Gol\"}");


var $a38b6c4e18725976$exports = {};
$a38b6c4e18725976$exports = JSON.parse("{\"Empty\":\"Не заполнено\"}");


var $6c14ae2b766b652c$exports = {};
$6c14ae2b766b652c$exports = JSON.parse("{\"Empty\":\"Prázdne\"}");


var $8f1c9692e16dc5eb$exports = {};
$8f1c9692e16dc5eb$exports = JSON.parse("{\"Empty\":\"Prazen\"}");


var $d2aa7abea627cafa$exports = {};
$d2aa7abea627cafa$exports = JSON.parse("{\"Empty\":\"Prazno\"}");


var $676b82e4b56408e6$exports = {};
$676b82e4b56408e6$exports = JSON.parse("{\"Empty\":\"Tomt\"}");


var $14c9042552d7ce08$exports = {};
$14c9042552d7ce08$exports = JSON.parse("{\"Empty\":\"Boş\"}");


var $393254ebcb66c9f5$exports = {};
$393254ebcb66c9f5$exports = JSON.parse("{\"Empty\":\"Пусто\"}");


var $d49d621f310cf6ce$exports = {};
$d49d621f310cf6ce$exports = JSON.parse("{\"Empty\":\"空\"}");


var $94b60c866ca5dfe6$exports = {};
$94b60c866ca5dfe6$exports = JSON.parse("{\"Empty\":\"空白\"}");


$c6208a7792e31a37$exports = {
    "ar-AE": $ed6aae4e5f766f1e$exports,
    "bg-BG": $38854e2b175151fa$exports,
    "cs-CZ": $15b25ab20f3945b2$exports,
    "da-DK": $692a4298b6b649a2$exports,
    "de-DE": $1c6e1539193f1243$exports,
    "el-GR": $1e8678632c464b6d$exports,
    "en-US": $4adc85d9bf5b9eed$exports,
    "es-ES": $41c4b2bb61dafbca$exports,
    "et-EE": $405f8b24f5dd2a60$exports,
    "fi-FI": $7efe3ed02b9b9dd4$exports,
    "fr-FR": $99fc4c101d92daf3$exports,
    "he-IL": $f9e155e6e8cacaa2$exports,
    "hr-HR": $c31b5e8e9a249fd5$exports,
    "hu-HU": $9c5435bc17499bd9$exports,
    "it-IT": $6d1fc8e84d8165e1$exports,
    "ja-JP": $46ea6b3641b83e71$exports,
    "ko-KR": $0e3cc9a288289dc5$exports,
    "lt-LT": $4ff2bb25c0089ffb$exports,
    "lv-LV": $6cf33cd4c010a2fb$exports,
    "nb-NO": $5a9f8486f8b8837e$exports,
    "nl-NL": $583f94d807f6ecea$exports,
    "pl-PL": $cc4dcfeea2b4050d$exports,
    "pt-BR": $68ac2954d56e12b4$exports,
    "pt-PT": $fdb0616f309780b0$exports,
    "ro-RO": $fe1eccf4ee1d6f52$exports,
    "ru-RU": $a38b6c4e18725976$exports,
    "sk-SK": $6c14ae2b766b652c$exports,
    "sl-SI": $8f1c9692e16dc5eb$exports,
    "sr-SP": $d2aa7abea627cafa$exports,
    "sv-SE": $676b82e4b56408e6$exports,
    "tr-TR": $14c9042552d7ce08$exports,
    "uk-UA": $393254ebcb66c9f5$exports,
    "zh-CN": $d49d621f310cf6ce$exports,
    "zh-TW": $94b60c866ca5dfe6$exports
};




function $d2e8511e6f209edf$export$e908e06f4b8e3402(props) {
    const _async = useRef();
    let { value: value , textValue: textValue , minValue: minValue , maxValue: maxValue , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , onIncrement: onIncrement , onIncrementPage: onIncrementPage , onDecrement: onDecrement , onDecrementPage: onDecrementPage , onDecrementToMin: onDecrementToMin , onIncrementToMax: onIncrementToMax  } = props;
    const formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$4($c6208a7792e31a37$exports)));
    const propsRef = useRef(props);
    propsRef.current = props;
    const clearAsync = ()=>clearTimeout(_async.current)
    ;
    // eslint-disable-next-line arrow-body-style
    useEffect(()=>{
        return ()=>clearAsync()
        ;
    }, []);
    let onKeyDown = (e)=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly) return;
        switch(e.key){
            case 'PageUp':
                if (onIncrementPage) {
                    e.preventDefault();
                    onIncrementPage();
                    break;
                }
            // fallthrough!
            case 'ArrowUp':
            case 'Up':
                if (onIncrement) {
                    e.preventDefault();
                    onIncrement();
                }
                break;
            case 'PageDown':
                if (onDecrementPage) {
                    e.preventDefault();
                    onDecrementPage();
                    break;
                }
            // fallthrough
            case 'ArrowDown':
            case 'Down':
                if (onDecrement) {
                    e.preventDefault();
                    onDecrement();
                }
                break;
            case 'Home':
                if (onDecrementToMin) {
                    e.preventDefault();
                    onDecrementToMin();
                }
                break;
            case 'End':
                if (onIncrementToMax) {
                    e.preventDefault();
                    onIncrementToMax();
                }
                break;
        }
    };
    let isFocused = useRef(false);
    let onFocus = ()=>{
        isFocused.current = true;
    };
    let onBlur = ()=>{
        isFocused.current = false;
    };
    // Replace Unicode hyphen-minus (U+002D) with minus sign (U+2212).
    // This ensures that macOS VoiceOver announces it as "minus" even with other characters between the minus sign
    // and the number (e.g. currency symbol). Otherwise it announces nothing because it assumes the character is a hyphen.
    // In addition, replace the empty string with the word "Empty" so that iOS VoiceOver does not read "50%" for an empty field.
    textValue = textValue === '' ? formatMessage('Empty') : (textValue || `${value}`).replace('-', '\u2212');
    useEffect(()=>{
        if (isFocused.current) $319e236875307eab$export$a9b970dcc4ae71a9(textValue, 'assertive');
    }, [
        textValue
    ]);
    const onIncrementPressStart = useCallback((initialStepDelay)=>{
        clearAsync();
        propsRef.current.onIncrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (isNaN(maxValue) || isNaN(value) || value < maxValue) onIncrementPressStart(60);
        }, initialStepDelay);
    }, [
        onIncrement,
        maxValue,
        value
    ]);
    const onDecrementPressStart = useCallback((initialStepDelay)=>{
        clearAsync();
        propsRef.current.onDecrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (isNaN(minValue) || isNaN(value) || value > minValue) onDecrementPressStart(60);
        }, initialStepDelay);
    }, [
        onDecrement,
        minValue,
        value
    ]);
    let cancelContextMenu = (e)=>{
        e.preventDefault();
    };
    let { addGlobalListener: addGlobalListener , removeAllGlobalListeners: removeAllGlobalListeners  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': !isNaN(value) ? value : null,
            'aria-valuetext': textValue,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-disabled': isDisabled || null,
            'aria-readonly': isReadOnly || null,
            'aria-required': isRequired || null,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            onBlur: onBlur
        },
        incrementButtonProps: {
            onPressStart: ()=>{
                onIncrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        },
        decrementButtonProps: {
            onPressStart: ()=>{
                onDecrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

JSON.parse("{\"calendar\":\"التقويم\",\"day\":\"يوم\",\"dayPeriod\":\"ص/م\",\"endDate\":\"تاريخ الانتهاء\",\"era\":\"العصر\",\"hour\":\"الساعات\",\"minute\":\"الدقائق\",\"month\":\"الشهر\",\"second\":\"الثواني\",\"selectedDateDescription\":\"تاريخ محدد: {date}\",\"selectedRangeDescription\":\"المدى الزمني المحدد: {startDate} إلى {endDate}\",\"selectedTimeDescription\":\"الوقت المحدد: {time}\",\"startDate\":\"تاريخ البدء\",\"timeZoneName\":\"التوقيت\",\"weekday\":\"اليوم\",\"year\":\"السنة\"}");
JSON.parse("{\"calendar\":\"Календар\",\"day\":\"ден\",\"dayPeriod\":\"пр.об./сл.об.\",\"endDate\":\"Крайна дата\",\"era\":\"ера\",\"hour\":\"час\",\"minute\":\"минута\",\"month\":\"месец\",\"second\":\"секунда\",\"selectedDateDescription\":\"Избрана дата: {date}\",\"selectedRangeDescription\":\"Избран диапазон: {startDate} до {endDate}\",\"selectedTimeDescription\":\"Избрано време: {time}\",\"startDate\":\"Начална дата\",\"timeZoneName\":\"часова зона\",\"weekday\":\"ден от седмицата\",\"year\":\"година\"}");
JSON.parse("{\"calendar\":\"Kalendář\",\"day\":\"den\",\"dayPeriod\":\"část dne\",\"endDate\":\"Konečné datum\",\"era\":\"letopočet\",\"hour\":\"hodina\",\"minute\":\"minuta\",\"month\":\"měsíc\",\"second\":\"sekunda\",\"selectedDateDescription\":\"Vybrané datum: {date}\",\"selectedRangeDescription\":\"Vybrané období: {startDate} až {endDate}\",\"selectedTimeDescription\":\"Vybraný čas: {time}\",\"startDate\":\"Počáteční datum\",\"timeZoneName\":\"časové pásmo\",\"weekday\":\"den v týdnu\",\"year\":\"rok\"}");
JSON.parse("{\"calendar\":\"Kalender\",\"day\":\"dag\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Slutdato\",\"era\":\"æra\",\"hour\":\"time\",\"minute\":\"minut\",\"month\":\"måned\",\"second\":\"sekund\",\"selectedDateDescription\":\"Valgt dato: {date}\",\"selectedRangeDescription\":\"Valgt interval: {startDate} til {endDate}\",\"selectedTimeDescription\":\"Valgt tidspunkt: {time}\",\"startDate\":\"Startdato\",\"timeZoneName\":\"tidszone\",\"weekday\":\"ugedag\",\"year\":\"år\"}");
JSON.parse("{\"calendar\":\"Kalender\",\"day\":\"Tag\",\"dayPeriod\":\"Tageshälfte\",\"endDate\":\"Enddatum\",\"era\":\"Epoche\",\"hour\":\"Stunde\",\"minute\":\"Minute\",\"month\":\"Monat\",\"second\":\"Sekunde\",\"selectedDateDescription\":\"Ausgewähltes Datum: {date}\",\"selectedRangeDescription\":\"Ausgewählter Bereich: {startDate} bis {endDate}\",\"selectedTimeDescription\":\"Ausgewählte Zeit: {time}\",\"startDate\":\"Anfangsdatum\",\"timeZoneName\":\"Zeitzone\",\"weekday\":\"Wochentag\",\"year\":\"Jahr\"}");
JSON.parse("{\"calendar\":\"Ημερολόγιο\",\"day\":\"ημέρα\",\"dayPeriod\":\"π.μ./μ.μ.\",\"endDate\":\"Ημερομηνία λήξης\",\"era\":\"περίοδος\",\"hour\":\"ώρα\",\"minute\":\"λεπτό\",\"month\":\"μήνας\",\"second\":\"δευτερόλεπτο\",\"selectedDateDescription\":\"Επιλεγμένη ημερομηνία: {date}\",\"selectedRangeDescription\":\"Επιλεγμένο εύρος: {startDate} έως {endDate}\",\"selectedTimeDescription\":\"Επιλεγμένη ώρα: {time}\",\"startDate\":\"Ημερομηνία έναρξης\",\"timeZoneName\":\"ζώνη ώρας\",\"weekday\":\"καθημερινή\",\"year\":\"έτος\"}");
JSON.parse("{\"era\":\"era\",\"year\":\"year\",\"month\":\"month\",\"day\":\"day\",\"hour\":\"hour\",\"minute\":\"minute\",\"second\":\"second\",\"dayPeriod\":\"AM/PM\",\"calendar\":\"Calendar\",\"startDate\":\"Start Date\",\"endDate\":\"End Date\",\"weekday\":\"day of the week\",\"timeZoneName\":\"time zone\",\"selectedDateDescription\":\"Selected Date: {date}\",\"selectedRangeDescription\":\"Selected Range: {startDate} to {endDate}\",\"selectedTimeDescription\":\"Selected Time: {time}\"}");
JSON.parse("{\"calendar\":\"Calendario\",\"day\":\"día\",\"dayPeriod\":\"a. m./p. m.\",\"endDate\":\"Fecha final\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mes\",\"second\":\"segundo\",\"selectedDateDescription\":\"Fecha seleccionada: {date}\",\"selectedRangeDescription\":\"Rango seleccionado: {startDate} a {endDate}\",\"selectedTimeDescription\":\"Hora seleccionada: {time}\",\"startDate\":\"Fecha de inicio\",\"timeZoneName\":\"zona horaria\",\"weekday\":\"día de la semana\",\"year\":\"año\"}");
JSON.parse("{\"calendar\":\"Kalender\",\"day\":\"päev\",\"dayPeriod\":\"enne/pärast lõunat\",\"endDate\":\"Lõppkuupäev\",\"era\":\"ajastu\",\"hour\":\"tund\",\"minute\":\"minut\",\"month\":\"kuu\",\"second\":\"sekund\",\"selectedDateDescription\":\"Valitud kuupäev: {date}\",\"selectedRangeDescription\":\"Valitud vahemik: {startDate} kuni {endDate}\",\"selectedTimeDescription\":\"Valitud aeg: {time}\",\"startDate\":\"Alguskuupäev\",\"timeZoneName\":\"ajavöönd\",\"weekday\":\"nädalapäev\",\"year\":\"aasta\"}");
JSON.parse("{\"calendar\":\"Kalenteri\",\"day\":\"päivä\",\"dayPeriod\":\"vuorokaudenaika\",\"endDate\":\"Päättymispäivä\",\"era\":\"aikakausi\",\"hour\":\"tunti\",\"minute\":\"minuutti\",\"month\":\"kuukausi\",\"second\":\"sekunti\",\"selectedDateDescription\":\"Valittu päivämäärä: {date}\",\"selectedRangeDescription\":\"Valittu aikaväli: {startDate} – {endDate}\",\"selectedTimeDescription\":\"Valittu aika: {time}\",\"startDate\":\"Alkamispäivä\",\"timeZoneName\":\"aikavyöhyke\",\"weekday\":\"viikonpäivä\",\"year\":\"vuosi\"}");
JSON.parse("{\"calendar\":\"Calendrier\",\"day\":\"jour\",\"dayPeriod\":\"cadran\",\"endDate\":\"Date de fin\",\"era\":\"ère\",\"hour\":\"heure\",\"minute\":\"minute\",\"month\":\"mois\",\"second\":\"seconde\",\"selectedDateDescription\":\"Date sélectionnée : {date}\",\"selectedRangeDescription\":\"Plage sélectionnée : {startDate} au {endDate}\",\"selectedTimeDescription\":\"Heure choisie : {time}\",\"startDate\":\"Date de début\",\"timeZoneName\":\"fuseau horaire\",\"weekday\":\"jour de la semaine\",\"year\":\"année\"}");
JSON.parse("{\"calendar\":\"לוח שנה\",\"day\":\"יום\",\"dayPeriod\":\"לפנה״צ/אחה״צ\",\"endDate\":\"תאריך סיום\",\"era\":\"תקופה\",\"hour\":\"שעה\",\"minute\":\"דקה\",\"month\":\"חודש\",\"second\":\"שנייה\",\"selectedDateDescription\":\"תאריך נבחר: {date}\",\"selectedRangeDescription\":\"טווח נבחר: {startDate} עד {endDate}\",\"selectedTimeDescription\":\"זמן נבחר: {time}\",\"startDate\":\"תאריך התחלה\",\"timeZoneName\":\"אזור זמן\",\"weekday\":\"יום בשבוע\",\"year\":\"שנה\"}");
JSON.parse("{\"calendar\":\"Kalendar\",\"day\":\"dan\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Datum završetka\",\"era\":\"era\",\"hour\":\"sat\",\"minute\":\"minuta\",\"month\":\"mjesec\",\"second\":\"sekunda\",\"selectedDateDescription\":\"Odabrani datum: {date}\",\"selectedRangeDescription\":\"Odabrani raspon: {startDate} do {endDate}\",\"selectedTimeDescription\":\"Odabrano vrijeme: {time}\",\"startDate\":\"Datum početka\",\"timeZoneName\":\"vremenska zona\",\"weekday\":\"dan u tjednu\",\"year\":\"godina\"}");
JSON.parse("{\"calendar\":\"Naptár\",\"day\":\"nap\",\"dayPeriod\":\"napszak\",\"endDate\":\"Befejező dátum\",\"era\":\"éra\",\"hour\":\"óra\",\"minute\":\"perc\",\"month\":\"hónap\",\"second\":\"másodperc\",\"selectedDateDescription\":\"Kijelölt dátum: {date}\",\"selectedRangeDescription\":\"Kijelölt tartomány: {startDate}–{endDate}\",\"selectedTimeDescription\":\"Kijelölt idő: {time}\",\"startDate\":\"Kezdő dátum\",\"timeZoneName\":\"időzóna\",\"weekday\":\"hét napja\",\"year\":\"év\"}");
JSON.parse("{\"calendar\":\"Calendario\",\"day\":\"giorno\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Data finale\",\"era\":\"era\",\"hour\":\"ora\",\"minute\":\"minuto\",\"month\":\"mese\",\"second\":\"secondo\",\"selectedDateDescription\":\"Data selezionata: {date}\",\"selectedRangeDescription\":\"Intervallo selezionato: da {startDate} a {endDate}\",\"selectedTimeDescription\":\"Ora selezionata: {time}\",\"startDate\":\"Data iniziale\",\"timeZoneName\":\"fuso orario\",\"weekday\":\"giorno della settimana\",\"year\":\"anno\"}");
JSON.parse("{\"calendar\":\"カレンダー\",\"day\":\"日\",\"dayPeriod\":\"午前/午後\",\"endDate\":\"終了日\",\"era\":\"時代\",\"hour\":\"時\",\"minute\":\"分\",\"month\":\"月\",\"second\":\"秒\",\"selectedDateDescription\":\"選択した日付 : {date}\",\"selectedRangeDescription\":\"選択範囲 : {startDate} から {endDate}\",\"selectedTimeDescription\":\"選択した時間 : {time}\",\"startDate\":\"開始日\",\"timeZoneName\":\"タイムゾーン\",\"weekday\":\"曜日\",\"year\":\"年\"}");
JSON.parse("{\"calendar\":\"달력\",\"day\":\"일\",\"dayPeriod\":\"오전/오후\",\"endDate\":\"종료 날짜\",\"era\":\"연호\",\"hour\":\"시\",\"minute\":\"분\",\"month\":\"월\",\"second\":\"초\",\"selectedDateDescription\":\"선택 일자: {date}\",\"selectedRangeDescription\":\"선택 범위: {startDate} ~ {endDate}\",\"selectedTimeDescription\":\"선택 시간: {time}\",\"startDate\":\"시작 날짜\",\"timeZoneName\":\"시간대\",\"weekday\":\"요일\",\"year\":\"년\"}");
JSON.parse("{\"calendar\":\"Kalendorius\",\"day\":\"diena\",\"dayPeriod\":\"iki pietų / po pietų\",\"endDate\":\"Pabaigos data\",\"era\":\"era\",\"hour\":\"valanda\",\"minute\":\"minutė\",\"month\":\"mėnuo\",\"second\":\"sekundė\",\"selectedDateDescription\":\"Pasirinkta data: {date}\",\"selectedRangeDescription\":\"Pasirinktas intervalas: nuo {startDate} iki {endDate}\",\"selectedTimeDescription\":\"Pasirinktas laikas: {time}\",\"startDate\":\"Pradžios data\",\"timeZoneName\":\"laiko juosta\",\"weekday\":\"savaitės diena\",\"year\":\"metai\"}");
JSON.parse("{\"calendar\":\"Kalendārs\",\"day\":\"diena\",\"dayPeriod\":\"priekšpusdienā/pēcpusdienā\",\"endDate\":\"Beigu datums\",\"era\":\"ēra\",\"hour\":\"stundas\",\"minute\":\"minūtes\",\"month\":\"mēnesis\",\"second\":\"sekundes\",\"selectedDateDescription\":\"Atlasītais datums: {date}\",\"selectedRangeDescription\":\"Atlasītais diapazons: no {startDate} līdz {endDate}\",\"selectedTimeDescription\":\"Atlasītais laiks: {time}\",\"startDate\":\"Sākuma datums\",\"timeZoneName\":\"laika josla\",\"weekday\":\"nedēļas diena\",\"year\":\"gads\"}");
JSON.parse("{\"calendar\":\"Kalender\",\"day\":\"dag\",\"dayPeriod\":\"a.m./p.m.\",\"endDate\":\"Sluttdato\",\"era\":\"tidsalder\",\"hour\":\"time\",\"minute\":\"minutt\",\"month\":\"måned\",\"second\":\"sekund\",\"selectedDateDescription\":\"Valgt dato: {date}\",\"selectedRangeDescription\":\"Valgt område: {startDate} til {endDate}\",\"selectedTimeDescription\":\"Valgt tid: {time}\",\"startDate\":\"Startdato\",\"timeZoneName\":\"tidssone\",\"weekday\":\"ukedag\",\"year\":\"år\"}");
JSON.parse("{\"calendar\":\"Kalender\",\"day\":\"dag\",\"dayPeriod\":\"a.m./p.m.\",\"endDate\":\"Einddatum\",\"era\":\"tijdperk\",\"hour\":\"uur\",\"minute\":\"minuut\",\"month\":\"maand\",\"second\":\"seconde\",\"selectedDateDescription\":\"Geselecteerde datum: {date}\",\"selectedRangeDescription\":\"Geselecteerd bereik: {startDate} tot {endDate}\",\"selectedTimeDescription\":\"Geselecteerde tijd: {time}\",\"startDate\":\"Startdatum\",\"timeZoneName\":\"tijdzone\",\"weekday\":\"dag van de week\",\"year\":\"jaar\"}");
JSON.parse("{\"calendar\":\"Kalendarz\",\"day\":\"dzień\",\"dayPeriod\":\"rano / po południu / wieczorem\",\"endDate\":\"Data końcowa\",\"era\":\"era\",\"hour\":\"godzina\",\"minute\":\"minuta\",\"month\":\"miesiąc\",\"second\":\"sekunda\",\"selectedDateDescription\":\"Wybrana data: {date}\",\"selectedRangeDescription\":\"Wybrany zakres: {startDate} do {endDate}\",\"selectedTimeDescription\":\"Wybrany czas: {time}\",\"startDate\":\"Data początkowa\",\"timeZoneName\":\"strefa czasowa\",\"weekday\":\"dzień tygodnia\",\"year\":\"rok\"}");
JSON.parse("{\"calendar\":\"Calendário\",\"day\":\"dia\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Data final\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mês\",\"second\":\"segundo\",\"selectedDateDescription\":\"Data selecionada: {date}\",\"selectedRangeDescription\":\"Intervalo selecionado: {startDate} a {endDate}\",\"selectedTimeDescription\":\"Hora selecionada: {time}\",\"startDate\":\"Data inicial\",\"timeZoneName\":\"fuso horário\",\"weekday\":\"dia da semana\",\"year\":\"ano\"}");
JSON.parse("{\"calendar\":\"Calendário\",\"day\":\"dia\",\"dayPeriod\":\"am/pm\",\"endDate\":\"Data de Término\",\"era\":\"era\",\"hour\":\"hora\",\"minute\":\"minuto\",\"month\":\"mês\",\"second\":\"segundo\",\"selectedDateDescription\":\"Data selecionada: {date}\",\"selectedRangeDescription\":\"Intervalo selecionado: {startDate} a {endDate}\",\"selectedTimeDescription\":\"Hora selecionada: {time}\",\"startDate\":\"Data de Início\",\"timeZoneName\":\"fuso horário\",\"weekday\":\"dia da semana\",\"year\":\"ano\"}");
JSON.parse("{\"calendar\":\"Calendar\",\"day\":\"zi\",\"dayPeriod\":\"a.m/p.m.\",\"endDate\":\"Dată final\",\"era\":\"eră\",\"hour\":\"oră\",\"minute\":\"minut\",\"month\":\"lună\",\"second\":\"secundă\",\"selectedDateDescription\":\"Dată selectată: {date}\",\"selectedRangeDescription\":\"Interval selectat: de la {startDate} până la {endDate}\",\"selectedTimeDescription\":\"Ora selectată: {time}\",\"startDate\":\"Dată început\",\"timeZoneName\":\"fus orar\",\"weekday\":\"ziua din săptămână\",\"year\":\"an\"}");
JSON.parse("{\"calendar\":\"Календарь\",\"day\":\"день\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Дата окончания\",\"era\":\"эра\",\"hour\":\"час\",\"minute\":\"минута\",\"month\":\"месяц\",\"second\":\"секунда\",\"selectedDateDescription\":\"Выбранная дата: {date}\",\"selectedRangeDescription\":\"Выбранный диапазон: с {startDate} по {endDate}\",\"selectedTimeDescription\":\"Выбранное время: {time}\",\"startDate\":\"Дата начала\",\"timeZoneName\":\"часовой пояс\",\"weekday\":\"день недели\",\"year\":\"год\"}");
JSON.parse("{\"calendar\":\"Kalendár\",\"day\":\"deň\",\"dayPeriod\":\"AM/PM\",\"endDate\":\"Dátum ukončenia\",\"era\":\"letopočet\",\"hour\":\"hodina\",\"minute\":\"minúta\",\"month\":\"mesiac\",\"second\":\"sekunda\",\"selectedDateDescription\":\"Vybratý dátum: {date}\",\"selectedRangeDescription\":\"Vybratý rozsah: od {startDate} do {endDate}\",\"selectedTimeDescription\":\"Vybratý čas: {time}\",\"startDate\":\"Dátum začatia\",\"timeZoneName\":\"časové pásmo\",\"weekday\":\"deň týždňa\",\"year\":\"rok\"}");
JSON.parse("{\"calendar\":\"Koledar\",\"day\":\"dan\",\"dayPeriod\":\"dop/pop\",\"endDate\":\"Datum konca\",\"era\":\"doba\",\"hour\":\"ura\",\"minute\":\"minuta\",\"month\":\"mesec\",\"second\":\"sekunda\",\"selectedDateDescription\":\"Izbrani datum: {date}\",\"selectedRangeDescription\":\"Izbrano območje: {startDate} do {endDate}\",\"selectedTimeDescription\":\"Izbrani čas: {time}\",\"startDate\":\"Datum začetka\",\"timeZoneName\":\"časovni pas\",\"weekday\":\"dan v tednu\",\"year\":\"leto\"}");
JSON.parse("{\"calendar\":\"Kalendar\",\"day\":\"дан\",\"dayPeriod\":\"пре подне/по подне\",\"endDate\":\"Datum završetka\",\"era\":\"ера\",\"hour\":\"сат\",\"minute\":\"минут\",\"month\":\"месец\",\"second\":\"секунд\",\"selectedDateDescription\":\"Izabrani datum: {date}\",\"selectedRangeDescription\":\"Izabrani opseg: od {startDate} do {endDate}\",\"selectedTimeDescription\":\"Izabrano vreme: {time}\",\"startDate\":\"Datum početka\",\"timeZoneName\":\"временска зона\",\"weekday\":\"дан у недељи\",\"year\":\"година\"}");
JSON.parse("{\"calendar\":\"Kalender\",\"day\":\"dag\",\"dayPeriod\":\"fm/em\",\"endDate\":\"Slutdatum\",\"era\":\"era\",\"hour\":\"timme\",\"minute\":\"minut\",\"month\":\"månad\",\"second\":\"sekund\",\"selectedDateDescription\":\"Valt datum: {date}\",\"selectedRangeDescription\":\"Valt intervall: {startDate} till {endDate}\",\"selectedTimeDescription\":\"Vald tid: {time}\",\"startDate\":\"Startdatum\",\"timeZoneName\":\"tidszon\",\"weekday\":\"veckodag\",\"year\":\"år\"}");
JSON.parse("{\"calendar\":\"Takvim\",\"day\":\"gün\",\"dayPeriod\":\"ÖÖ/ÖS\",\"endDate\":\"Bitiş Tarihi\",\"era\":\"çağ\",\"hour\":\"saat\",\"minute\":\"dakika\",\"month\":\"ay\",\"second\":\"saniye\",\"selectedDateDescription\":\"Seçilen Tarih: {date}\",\"selectedRangeDescription\":\"Seçilen Aralık: {startDate} - {endDate}\",\"selectedTimeDescription\":\"Seçilen Zaman: {time}\",\"startDate\":\"Başlangıç Tarihi\",\"timeZoneName\":\"saat dilimi\",\"weekday\":\"haftanın günü\",\"year\":\"yıl\"}");
JSON.parse("{\"calendar\":\"Календар\",\"day\":\"день\",\"dayPeriod\":\"дп/пп\",\"endDate\":\"Дата завершення\",\"era\":\"ера\",\"hour\":\"година\",\"minute\":\"хвилина\",\"month\":\"місяць\",\"second\":\"секунда\",\"selectedDateDescription\":\"Вибрана дата: {date}\",\"selectedRangeDescription\":\"Вибраний діапазон: {startDate} — {endDate}\",\"selectedTimeDescription\":\"Вибраний час: {time}\",\"startDate\":\"Дата початку\",\"timeZoneName\":\"часовий пояс\",\"weekday\":\"день тижня\",\"year\":\"рік\"}");
JSON.parse("{\"calendar\":\"日历\",\"day\":\"日\",\"dayPeriod\":\"上午/下午\",\"endDate\":\"结束日期\",\"era\":\"纪元\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"selectedDateDescription\":\"选定的日期：{date}\",\"selectedRangeDescription\":\"选定的范围：{startDate} 至 {endDate}\",\"selectedTimeDescription\":\"选定的时间：{time}\",\"startDate\":\"开始日期\",\"timeZoneName\":\"时区\",\"weekday\":\"工作日\",\"year\":\"年\"}");
JSON.parse("{\"calendar\":\"日曆\",\"day\":\"日\",\"dayPeriod\":\"上午/下午\",\"endDate\":\"結束日期\",\"era\":\"纪元\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"selectedDateDescription\":\"選定的日期：{date}\",\"selectedRangeDescription\":\"選定的範圍：{startDate} 至 {endDate}\",\"selectedTimeDescription\":\"選定的時間：{time}\",\"startDate\":\"開始日期\",\"timeZoneName\":\"时区\",\"weekday\":\"工作日\",\"year\":\"年\"}");

function $parcel$export$e(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $40df3f8667284809$exports = {};

$parcel$export$e($40df3f8667284809$exports, "useDialog", () => $40df3f8667284809$export$d55e7ee900f34e93);



function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
    let { role: role = 'dialog'  } = props;
    let titleId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
    titleId = props['aria-label'] ? undefined : titleId;
    // Focus the dialog itself on mount, unless a child element is already focused.
    useEffect(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            $6a99195332edec8b$export$80f3e147d781571c(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    ref.current.blur();
                    $6a99195332edec8b$export$80f3e147d781571c(ref.current);
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...$65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] || titleId
        },
        titleProps: {
            id: titleId
        }
    };
}

function $parcel$export$d(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $204d9ebcedfb8806$exports = {};

$parcel$export$d($204d9ebcedfb8806$exports, "useProgressBar", () => $204d9ebcedfb8806$export$ed5abd763a836edc);



function $204d9ebcedfb8806$export$ed5abd763a836edc(props) {
    let { value: value = 0 , minValue: minValue = 0 , maxValue: maxValue = 100 , valueLabel: valueLabel , isIndeterminate: isIndeterminate , formatOptions: formatOptions = {
        style: 'percent'
    }  } = props;
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, minValue, maxValue);
    let percentage = (value - minValue) / (maxValue - minValue);
    let formatter = $a916eb452884faea$export$b7a616150fdb9f44(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            ...fieldProps,
            'aria-valuenow': isIndeterminate ? undefined : value,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-valuetext': isIndeterminate ? undefined : valueLabel,
            role: 'progressbar'
        }),
        labelProps: labelProps
    };
}

function $parcel$export$c(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0002d7e1d16de204$exports = {};

$parcel$export$c($0002d7e1d16de204$exports, "useMeter", () => $0002d7e1d16de204$export$e969dbfa146870ff);

function $0002d7e1d16de204$export$e969dbfa146870ff(props) {
    let { progressBarProps: progressBarProps , labelProps: labelProps  } = $204d9ebcedfb8806$export$ed5abd763a836edc(props);
    return {
        meterProps: {
            ...progressBarProps,
            // Use the meter role if available, but fall back to progressbar if not
            // Chrome currently falls back from meter automatically, and Firefox
            // does not support meter at all. Safari 13+ seems to support meter properly.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=944542
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1460378
            role: 'meter progressbar'
        },
        labelProps: labelProps
    };
}

function $parcel$interopDefault$3(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export$b(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $81397a9303501bda$exports = {};

$parcel$export$b($81397a9303501bda$exports, "useNumberField", () => $81397a9303501bda$export$23f548e970bdf099);


var $c3ef0f8b54adbb57$exports = {};
var $fb78e0f6ab6349ed$exports = {};
$fb78e0f6ab6349ed$exports = JSON.parse("{\"decrease\":\"خفض {fieldLabel}\",\"increase\":\"زيادة {fieldLabel}\",\"numberField\":\"حقل رقمي\"}");


var $2776acdd9959a647$exports = {};
$2776acdd9959a647$exports = JSON.parse("{\"decrease\":\"Намаляване {fieldLabel}\",\"increase\":\"Усилване {fieldLabel}\",\"numberField\":\"Номер на полето\"}");


var $741954410a365ad3$exports = {};
$741954410a365ad3$exports = JSON.parse("{\"decrease\":\"Snížit {fieldLabel}\",\"increase\":\"Zvýšit {fieldLabel}\",\"numberField\":\"Číselné pole\"}");


var $8321ed0f8ab642f0$exports = {};
$8321ed0f8ab642f0$exports = JSON.parse("{\"decrease\":\"Reducer {fieldLabel}\",\"increase\":\"Øg {fieldLabel}\",\"numberField\":\"Talfelt\"}");


var $92978e0c4ecafa32$exports = {};
$92978e0c4ecafa32$exports = JSON.parse("{\"decrease\":\"{fieldLabel} verringern\",\"increase\":\"{fieldLabel} erhöhen\",\"numberField\":\"Nummernfeld\"}");


var $ac5ff71962864a84$exports = {};
$ac5ff71962864a84$exports = JSON.parse("{\"decrease\":\"Μείωση {fieldLabel}\",\"increase\":\"Αύξηση {fieldLabel}\",\"numberField\":\"Πεδίο αριθμού\"}");


var $efe4685e2440d8be$exports = {};
$efe4685e2440d8be$exports = JSON.parse("{\"decrease\":\"Decrease {fieldLabel}\",\"increase\":\"Increase {fieldLabel}\",\"numberField\":\"Number field\"}");


var $e50a9a48739b90e1$exports = {};
$e50a9a48739b90e1$exports = JSON.parse("{\"decrease\":\"Reducir {fieldLabel}\",\"increase\":\"Aumentar {fieldLabel}\",\"numberField\":\"Campo de número\"}");


var $6e0d5294ecbb8ab6$exports = {};
$6e0d5294ecbb8ab6$exports = JSON.parse("{\"decrease\":\"Vähenda {fieldLabel}\",\"increase\":\"Suurenda {fieldLabel}\",\"numberField\":\"Numbri väli\"}");


var $e7129d65f607f77f$exports = {};
$e7129d65f607f77f$exports = JSON.parse("{\"decrease\":\"Vähennä {fieldLabel}\",\"increase\":\"Lisää {fieldLabel}\",\"numberField\":\"Numerokenttä\"}");


var $d72adf5b20573e34$exports = {};
$d72adf5b20573e34$exports = JSON.parse("{\"decrease\":\"Diminuer {fieldLabel}\",\"increase\":\"Augmenter {fieldLabel}\",\"numberField\":\"Champ de nombre\"}");


var $a25c707e88b844a7$exports = {};
$a25c707e88b844a7$exports = JSON.parse("{\"decrease\":\"הקטן {fieldLabel}\",\"increase\":\"הגדל {fieldLabel}\",\"numberField\":\"שדה מספר\"}");


var $69b41140b9a4ca54$exports = {};
$69b41140b9a4ca54$exports = JSON.parse("{\"decrease\":\"Smanji {fieldLabel}\",\"increase\":\"Povećaj {fieldLabel}\",\"numberField\":\"Polje broja\"}");


var $81dab28f37f59d1a$exports = {};
$81dab28f37f59d1a$exports = JSON.parse("{\"decrease\":\"{fieldLabel} csökkentése\",\"increase\":\"{fieldLabel} növelése\",\"numberField\":\"Számmező\"}");


var $866555b31f2d7711$exports = {};
$866555b31f2d7711$exports = JSON.parse("{\"decrease\":\"Riduci {fieldLabel}\",\"increase\":\"Aumenta {fieldLabel}\",\"numberField\":\"Campo numero\"}");


var $dafcd55d52b9d371$exports = {};
$dafcd55d52b9d371$exports = JSON.parse("{\"decrease\":\"{fieldLabel}を縮小\",\"increase\":\"{fieldLabel}を拡大\",\"numberField\":\"数値フィールド\"}");


var $f090c1f8c5da0145$exports = {};
$f090c1f8c5da0145$exports = JSON.parse("{\"decrease\":\"{fieldLabel} 감소\",\"increase\":\"{fieldLabel} 증가\",\"numberField\":\"번호 필드\"}");


var $6f10f3a13360a75c$exports = {};
$6f10f3a13360a75c$exports = JSON.parse("{\"decrease\":\"Sumažinti {fieldLabel}\",\"increase\":\"Padidinti {fieldLabel}\",\"numberField\":\"Numerio laukas\"}");


var $47432cefd4b7bd1b$exports = {};
$47432cefd4b7bd1b$exports = JSON.parse("{\"decrease\":\"Samazināšana {fieldLabel}\",\"increase\":\"Palielināšana {fieldLabel}\",\"numberField\":\"Skaitļu lauks\"}");


var $dc578a950a2bf23d$exports = {};
$dc578a950a2bf23d$exports = JSON.parse("{\"decrease\":\"Reduser {fieldLabel}\",\"increase\":\"Øk {fieldLabel}\",\"numberField\":\"Tallfelt\"}");


var $353f1bfca4dc395a$exports = {};
$353f1bfca4dc395a$exports = JSON.parse("{\"decrease\":\"{fieldLabel} verlagen\",\"increase\":\"{fieldLabel} verhogen\",\"numberField\":\"Getalveld\"}");


var $241bc0bbd870e982$exports = {};
$241bc0bbd870e982$exports = JSON.parse("{\"decrease\":\"Zmniejsz {fieldLabel}\",\"increase\":\"Zwiększ {fieldLabel}\",\"numberField\":\"Pole numeru\"}");


var $da3005c7bd72b0a8$exports = {};
$da3005c7bd72b0a8$exports = JSON.parse("{\"decrease\":\"Diminuir {fieldLabel}\",\"increase\":\"Aumentar {fieldLabel}\",\"numberField\":\"Campo de número\"}");


var $cf48bfc540882310$exports = {};
$cf48bfc540882310$exports = JSON.parse("{\"decrease\":\"Diminuir {fieldLabel}\",\"increase\":\"Aumentar {fieldLabel}\",\"numberField\":\"Campo numérico\"}");


var $b63a28c481ab9ee3$exports = {};
$b63a28c481ab9ee3$exports = JSON.parse("{\"decrease\":\"Scădere {fieldLabel}\",\"increase\":\"Creștere {fieldLabel}\",\"numberField\":\"Câmp numeric\"}");


var $19f9df95c2464ab6$exports = {};
$19f9df95c2464ab6$exports = JSON.parse("{\"decrease\":\"Уменьшение {fieldLabel}\",\"increase\":\"Увеличение {fieldLabel}\",\"numberField\":\"Числовое поле\"}");


var $b272932a685e8482$exports = {};
$b272932a685e8482$exports = JSON.parse("{\"decrease\":\"Znížiť {fieldLabel}\",\"increase\":\"Zvýšiť {fieldLabel}\",\"numberField\":\"Číselné pole\"}");


var $cbaf8b5b61f9e544$exports = {};
$cbaf8b5b61f9e544$exports = JSON.parse("{\"decrease\":\"Upadati {fieldLabel}\",\"increase\":\"Povečajte {fieldLabel}\",\"numberField\":\"Številčno polje\"}");


var $e0a3af6ac1449b2f$exports = {};
$e0a3af6ac1449b2f$exports = JSON.parse("{\"decrease\":\"Decrease {fieldLabel}\",\"increase\":\"Increase {fieldLabel}\",\"numberField\":\"Number field\"}");


var $71e167d2458a6019$exports = {};
$71e167d2458a6019$exports = JSON.parse("{\"decrease\":\"Minska {fieldLabel}\",\"increase\":\"Öka {fieldLabel}\",\"numberField\":\"Nummerfält\"}");


var $3719245abc082946$exports = {};
$3719245abc082946$exports = JSON.parse("{\"decrease\":\"{fieldLabel} azalt\",\"increase\":\"{fieldLabel} arttır\",\"numberField\":\"Sayı alanı\"}");


var $2ccc589e2f51824d$exports = {};
$2ccc589e2f51824d$exports = JSON.parse("{\"decrease\":\"Зменшити {fieldLabel}\",\"increase\":\"Збільшити {fieldLabel}\",\"numberField\":\"Поле номера\"}");


var $e1103cb9b4c13942$exports = {};
$e1103cb9b4c13942$exports = JSON.parse("{\"decrease\":\"降低 {fieldLabel}\",\"increase\":\"提高 {fieldLabel}\",\"numberField\":\"数字字段\"}");


var $448607634f80dccb$exports = {};
$448607634f80dccb$exports = JSON.parse("{\"decrease\":\"縮小 {fieldLabel}\",\"increase\":\"放大 {fieldLabel}\",\"numberField\":\"數字欄位\"}");


$c3ef0f8b54adbb57$exports = {
    "ar-AE": $fb78e0f6ab6349ed$exports,
    "bg-BG": $2776acdd9959a647$exports,
    "cs-CZ": $741954410a365ad3$exports,
    "da-DK": $8321ed0f8ab642f0$exports,
    "de-DE": $92978e0c4ecafa32$exports,
    "el-GR": $ac5ff71962864a84$exports,
    "en-US": $efe4685e2440d8be$exports,
    "es-ES": $e50a9a48739b90e1$exports,
    "et-EE": $6e0d5294ecbb8ab6$exports,
    "fi-FI": $e7129d65f607f77f$exports,
    "fr-FR": $d72adf5b20573e34$exports,
    "he-IL": $a25c707e88b844a7$exports,
    "hr-HR": $69b41140b9a4ca54$exports,
    "hu-HU": $81dab28f37f59d1a$exports,
    "it-IT": $866555b31f2d7711$exports,
    "ja-JP": $dafcd55d52b9d371$exports,
    "ko-KR": $f090c1f8c5da0145$exports,
    "lt-LT": $6f10f3a13360a75c$exports,
    "lv-LV": $47432cefd4b7bd1b$exports,
    "nb-NO": $dc578a950a2bf23d$exports,
    "nl-NL": $353f1bfca4dc395a$exports,
    "pl-PL": $241bc0bbd870e982$exports,
    "pt-BR": $da3005c7bd72b0a8$exports,
    "pt-PT": $cf48bfc540882310$exports,
    "ro-RO": $b63a28c481ab9ee3$exports,
    "ru-RU": $19f9df95c2464ab6$exports,
    "sk-SK": $b272932a685e8482$exports,
    "sl-SI": $cbaf8b5b61f9e544$exports,
    "sr-SP": $e0a3af6ac1449b2f$exports,
    "sv-SE": $71e167d2458a6019$exports,
    "tr-TR": $3719245abc082946$exports,
    "uk-UA": $2ccc589e2f51824d$exports,
    "zh-CN": $e1103cb9b4c13942$exports,
    "zh-TW": $448607634f80dccb$exports
};







function $81397a9303501bda$export$23f548e970bdf099(props, state, inputRef) {
    let { id: id , decrementAriaLabel: decrementAriaLabel , incrementAriaLabel: incrementAriaLabel , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , minValue: minValue , maxValue: maxValue , autoFocus: autoFocus , validationState: validationState , label: label , formatOptions: formatOptions , onBlur: onBlur , onFocus: onFocus , onFocusChange: onFocusChange , onKeyDown: onKeyDown , onKeyUp: onKeyUp , description: description , errorMessage: errorMessage , ...otherProps } = props;
    let { increment: increment , incrementToMax: incrementToMax , decrement: decrement , decrementToMin: decrementToMin , numberValue: numberValue , commit: commit  } = state;
    const formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$3($c3ef0f8b54adbb57$exports)));
    let inputId = $bdb11010cef70236$export$f680877a34711e37(id);
    let { focusProps: focusProps  } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
        onBlur: ()=>{
            // Set input value to normalized valid value
            commit();
        }
    });
    let { spinButtonProps: spinButtonProps , incrementButtonProps: incButtonProps , decrementButtonProps: decButtonProps  } = $d2e8511e6f209edf$export$e908e06f4b8e3402({
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        maxValue: maxValue,
        minValue: minValue,
        onIncrement: increment,
        onIncrementToMax: incrementToMax,
        onDecrement: decrement,
        onDecrementToMin: decrementToMin,
        value: numberValue,
        textValue: state.inputValue
    });
    let [focusWithin, setFocusWithin] = useState(false);
    let { focusWithinProps: focusWithinProps  } = $9ab94262bd0047c7$export$420e68273165f4ec({
        isDisabled: isDisabled,
        onFocusWithinChange: setFocusWithin
    });
    let onWheel = useCallback((e)=>{
        // if on a trackpad, users can scroll in both X and Y at once, check the magnitude of the change
        // if it's mostly in the X direction, then just return, the user probably doesn't mean to inc/dec
        // this isn't perfect, events come in fast with small deltas and a part of the scroll may give a false indication
        // especially if the user is scrolling near 45deg
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (e.deltaY > 0) increment();
        else if (e.deltaY < 0) decrement();
    }, [
        decrement,
        increment
    ]);
    // If the input isn't supposed to receive input, disable scrolling.
    let scrollingDisabled = isDisabled || isReadOnly || !focusWithin;
    $7d0a636d7a4dcefd$export$2123ff2b87c81ca({
        onScroll: onWheel,
        isDisabled: scrollingDisabled
    }, inputRef);
    // The inputMode attribute influences the software keyboard that is shown on touch devices.
    // Browsers and operating systems are quite inconsistent about what keys are available, however.
    // We choose between numeric and decimal based on whether we allow negative and fractional numbers,
    // and based on testing on various devices to determine what keys are available in each inputMode.
    let numberFormatter = $a916eb452884faea$export$b7a616150fdb9f44(formatOptions);
    let intlOptions = useMemo(()=>numberFormatter.resolvedOptions()
    , [
        numberFormatter
    ]);
    let hasDecimals = intlOptions.maximumFractionDigits > 0;
    let hasNegative = isNaN(state.minValue) || state.minValue < 0;
    let inputMode = 'numeric';
    if ($c87311424ea30a05$export$186c6964ca17d99()) {
        // iPhone doesn't have a minus sign in either numeric or decimal.
        // Note this is only for iPhone, not iPad, which always has both
        // minus and decimal in numeric.
        if (hasNegative) inputMode = 'text';
        else if (hasDecimals) inputMode = 'decimal';
    } else if ($c87311424ea30a05$export$a11b0059900ceec8()) {
        // Android numeric has both a decimal point and minus key.
        // decimal does not have a minus key.
        if (hasNegative) inputMode = 'numeric';
        else if (hasDecimals) inputMode = 'decimal';
    }
    let onChange = (value)=>{
        state.setInputValue(value);
    };
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props);
    let { labelProps: labelProps , inputProps: textFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $d841c8010a73d545$export$4f384c9210e583c3({
        ...otherProps,
        ...domProps,
        label: label,
        autoFocus: autoFocus,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        validationState: validationState,
        value: state.inputValue,
        defaultValue: undefined,
        autoComplete: 'off',
        'aria-label': props['aria-label'] || null,
        'aria-labelledby': props['aria-labelledby'] || null,
        id: inputId,
        type: 'text',
        inputMode: inputMode,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        description: description,
        errorMessage: errorMessage
    }, state, inputRef);
    let inputProps = $3ef42575df84b30b$export$9d1611c77c2fe928(spinButtonProps, textFieldProps, focusProps, {
        // override the spinbutton role, we can't focus a spin button with VO
        role: null,
        // ignore aria-roledescription on iOS so that required state will announce when it is present
        'aria-roledescription': !$c87311424ea30a05$export$fedb369cb70207f1() ? formatMessage('numberField') : null,
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false'
    });
    let onButtonPressStart = (e)=>{
        // If focus is already on the input, keep it there so we don't hide the
        // software keyboard when tapping the increment/decrement buttons.
        if (document.activeElement === inputRef.current) return;
        // Otherwise, when using a mouse, move focus to the input.
        // On touch, or with a screen reader, focus the button so that the software
        // keyboard does not appear and the screen reader cursor is not moved off the button.
        if (e.pointerType === 'mouse') inputRef.current.focus();
        else e.target.focus();
    };
    // Determine the label for the increment and decrement buttons. There are 4 cases:
    //
    // 1. With a visible label that is a string: aria-label: `Increase ${props.label}`
    // 2. With a visible label that is JSX: aria-label: 'Increase', aria-labelledby: '${incrementId} ${labelId}'
    // 3. With an aria-label: aria-label: `Increase ${props['aria-label']}`
    // 4. With an aria-labelledby: aria-label: 'Increase', aria-labelledby: `${incrementId} ${props['aria-labelledby']}`
    //
    // (1) and (2) could possibly be combined and both use aria-labelledby. However, placing the label in
    // the aria-label string rather than using aria-labelledby gives more flexibility to translators to change
    // the order or add additional words around the label if needed.
    let fieldLabel = props['aria-label'] || (typeof props.label === 'string' ? props.label : '');
    let ariaLabelledby;
    if (!fieldLabel) ariaLabelledby = props.label != null ? labelProps.id : props['aria-labelledby'];
    let incrementId = $bdb11010cef70236$export$f680877a34711e37();
    let decrementId = $bdb11010cef70236$export$f680877a34711e37();
    let incrementButtonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(incButtonProps, {
        'aria-label': incrementAriaLabel || formatMessage('increase', {
            fieldLabel: fieldLabel
        }).trim(),
        id: ariaLabelledby && !incrementAriaLabel ? incrementId : null,
        'aria-labelledby': ariaLabelledby && !incrementAriaLabel ? `${incrementId} ${ariaLabelledby}` : null,
        'aria-controls': inputId,
        excludeFromTabOrder: true,
        preventFocusOnPress: true,
        allowFocusWhenDisabled: true,
        isDisabled: !state.canIncrement,
        onPressStart: onButtonPressStart
    });
    let decrementButtonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(decButtonProps, {
        'aria-label': decrementAriaLabel || formatMessage('decrease', {
            fieldLabel: fieldLabel
        }).trim(),
        id: ariaLabelledby && !decrementAriaLabel ? decrementId : null,
        'aria-labelledby': ariaLabelledby && !decrementAriaLabel ? `${decrementId} ${ariaLabelledby}` : null,
        'aria-controls': inputId,
        excludeFromTabOrder: true,
        preventFocusOnPress: true,
        allowFocusWhenDisabled: true,
        isDisabled: !state.canDecrement,
        onPressStart: onButtonPressStart
    });
    return {
        groupProps: {
            role: 'group',
            'aria-disabled': isDisabled,
            'aria-invalid': validationState === 'invalid' ? 'true' : undefined,
            ...focusWithinProps
        },
        labelProps: labelProps,
        inputProps: inputProps,
        incrementButtonProps: incrementButtonProps,
        decrementButtonProps: decrementButtonProps,
        errorMessageProps: errorMessageProps,
        descriptionProps: descriptionProps
    };
}

function $parcel$export$a(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0d5c49892c1215da$exports = {};

$parcel$export$a($0d5c49892c1215da$exports, "useRadio", () => $0d5c49892c1215da$export$37b0961d2f4751e2);

const $884aeceb3d67f00f$export$3b7b268d09480394 = new WeakMap();




function $0d5c49892c1215da$export$37b0961d2f4751e2(props, state, ref) {
    let { value: value , children: children , 'aria-label': ariaLabel , 'aria-labelledby': ariaLabelledby  } = props;
    const isDisabled = props.isDisabled || state.isDisabled;
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel) console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    let checked = state.selectedValue === value;
    let onChange = (e)=>{
        e.stopPropagation();
        state.setSelectedValue(value);
    };
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        isDisabled: isDisabled
    });
    let { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c($3ef42575df84b30b$export$9d1611c77c2fe928(props, {
        onFocus: ()=>state.setLastFocusedValue(value)
    }), ref);
    let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, focusableProps);
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let tabIndex = state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;
    if (isDisabled) tabIndex = undefined;
    return {
        inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            ...interactions,
            type: 'radio',
            name: $884aeceb3d67f00f$export$3b7b268d09480394.get(state),
            tabIndex: tabIndex,
            disabled: isDisabled,
            checked: checked,
            value: value,
            onChange: onChange
        })
    };
}


var $430f30ed08ec25fa$exports = {};

$parcel$export$a($430f30ed08ec25fa$exports, "useRadioGroup", () => $430f30ed08ec25fa$export$62b9571f283ff5c2);






function $430f30ed08ec25fa$export$62b9571f283ff5c2(props, state) {
    let { name: name , validationState: validationState , isReadOnly: isReadOnly , isRequired: isRequired , isDisabled: isDisabled , orientation: orientation = 'vertical'  } = props;
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f({
        ...props,
        // Radio group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    // When the radio group loses focus, reset the focusable radio to null if
    // there is no selection. This allows tabbing into the group from either
    // direction to go to the first or last radio.
    let { focusWithinProps: focusWithinProps  } = $9ab94262bd0047c7$export$420e68273165f4ec({
        onBlurWithin () {
            if (!state.selectedValue) state.setLastFocusedValue(null);
        }
    });
    let onKeyDown = (e)=>{
        let nextDir;
        switch(e.key){
            case 'ArrowRight':
                if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'prev';
                else nextDir = 'next';
                break;
            case 'ArrowLeft':
                if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'next';
                else nextDir = 'prev';
                break;
            case 'ArrowDown':
                nextDir = 'next';
                break;
            case 'ArrowUp':
                nextDir = 'prev';
                break;
            default:
                return;
        }
        e.preventDefault();
        let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(e.currentTarget, {
            from: e.target
        });
        let nextElem;
        if (nextDir === 'next') {
            nextElem = walker.nextNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.firstChild();
            }
        } else {
            nextElem = walker.previousNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.lastChild();
            }
        }
        if (nextElem) {
            // Call focus on nextElem so that keyboard navigation scrolls the radio into view
            nextElem.focus();
            state.setSelectedValue(nextElem.value);
        }
    };
    let groupName = $bdb11010cef70236$export$f680877a34711e37(name);
    $884aeceb3d67f00f$export$3b7b268d09480394.set(state, groupName);
    return {
        radioGroupProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
            role: 'radiogroup',
            onKeyDown: onKeyDown,
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            'aria-disabled': isDisabled || undefined,
            'aria-orientation': orientation,
            ...fieldProps,
            ...focusWithinProps
        }),
        labelProps: labelProps
    };
}

function $parcel$interopDefault$2(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export$9(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $4d52238874b24f86$exports = {};

$parcel$export$9($4d52238874b24f86$exports, "useSearchField", () => $4d52238874b24f86$export$9bb30bbe003b82e0);

var $ad5aea03cc53c961$exports = {};
var $03c9a1a10de12f06$exports = {};
$03c9a1a10de12f06$exports = JSON.parse("{\"Clear search\":\"مسح البحث\"}");


var $4da0c2ffa4ba4159$exports = {};
$4da0c2ffa4ba4159$exports = JSON.parse("{\"Clear search\":\"Изчистване на търсене\"}");


var $8c59fd0c2c96821b$exports = {};
$8c59fd0c2c96821b$exports = JSON.parse("{\"Clear search\":\"Vymazat hledání\"}");


var $0a371f9c1df8120f$exports = {};
$0a371f9c1df8120f$exports = JSON.parse("{\"Clear search\":\"Ryd søgning\"}");


var $67f4d0b0de9f8a52$exports = {};
$67f4d0b0de9f8a52$exports = JSON.parse("{\"Clear search\":\"Suche zurücksetzen\"}");


var $72a312d948f0214b$exports = {};
$72a312d948f0214b$exports = JSON.parse("{\"Clear search\":\"Απαλοιφή αναζήτησης\"}");


var $5012d21d933388c1$exports = {};
$5012d21d933388c1$exports = JSON.parse("{\"Clear search\":\"Clear search\"}");


var $0159854399308e2e$exports = {};
$0159854399308e2e$exports = JSON.parse("{\"Clear search\":\"Borrar búsqueda\"}");


var $390613981d970276$exports = {};
$390613981d970276$exports = JSON.parse("{\"Clear search\":\"Tühjenda otsing\"}");


var $961ae0833f811705$exports = {};
$961ae0833f811705$exports = JSON.parse("{\"Clear search\":\"Tyhjennä haku\"}");


var $26d76742decfd829$exports = {};
$26d76742decfd829$exports = JSON.parse("{\"Clear search\":\"Effacer la recherche\"}");


var $92ef254c82a5c769$exports = {};
$92ef254c82a5c769$exports = JSON.parse("{\"Clear search\":\"נקה חיפוש\"}");


var $e0321b43bdefb8b3$exports = {};
$e0321b43bdefb8b3$exports = JSON.parse("{\"Clear search\":\"Obriši pretragu\"}");


var $0c1ee0b8d50940d9$exports = {};
$0c1ee0b8d50940d9$exports = JSON.parse("{\"Clear search\":\"Keresés törlése\"}");


var $b09198915a38946f$exports = {};
$b09198915a38946f$exports = JSON.parse("{\"Clear search\":\"Cancella ricerca\"}");


var $3a9a3d180c3145c0$exports = {};
$3a9a3d180c3145c0$exports = JSON.parse("{\"Clear search\":\"検索をクリア\"}");


var $b7a611726449f4a3$exports = {};
$b7a611726449f4a3$exports = JSON.parse("{\"Clear search\":\"검색 지우기\"}");


var $d9a3d49db610dd5c$exports = {};
$d9a3d49db610dd5c$exports = JSON.parse("{\"Clear search\":\"Išvalyti iešką\"}");


var $3ab64b73ea27c23a$exports = {};
$3ab64b73ea27c23a$exports = JSON.parse("{\"Clear search\":\"Notīrīt meklēšanu\"}");


var $bf5cce1b47d23baf$exports = {};
$bf5cce1b47d23baf$exports = JSON.parse("{\"Clear search\":\"Tøm søk\"}");


var $4e0c9a9a010e4598$exports = {};
$4e0c9a9a010e4598$exports = JSON.parse("{\"Clear search\":\"Zoekactie wissen\"}");


var $63cf4a75ec270508$exports = {};
$63cf4a75ec270508$exports = JSON.parse("{\"Clear search\":\"Wyczyść zawartość wyszukiwania\"}");


var $083b0cad27fdbd06$exports = {};
$083b0cad27fdbd06$exports = JSON.parse("{\"Clear search\":\"Limpar pesquisa\"}");


var $1b7f0864d830ba6d$exports = {};
$1b7f0864d830ba6d$exports = JSON.parse("{\"Clear search\":\"Limpar pesquisa\"}");


var $d6d2588377fc9718$exports = {};
$d6d2588377fc9718$exports = JSON.parse("{\"Clear search\":\"Ştergeţi căutarea\"}");


var $701c918a4653e946$exports = {};
$701c918a4653e946$exports = JSON.parse("{\"Clear search\":\"Очистить поиск\"}");


var $7cacc29a1e5f4fbe$exports = {};
$7cacc29a1e5f4fbe$exports = JSON.parse("{\"Clear search\":\"Vymazať vyhľadávanie\"}");


var $c63231bcc300d0df$exports = {};
$c63231bcc300d0df$exports = JSON.parse("{\"Clear search\":\"Počisti iskanje\"}");


var $b61510478bc0e6f6$exports = {};
$b61510478bc0e6f6$exports = JSON.parse("{\"Clear search\":\"Obriši pretragu\"}");


var $ce325e6dd3f9c37a$exports = {};
$ce325e6dd3f9c37a$exports = JSON.parse("{\"Clear search\":\"Rensa sökning\"}");


var $1f7e1cf2285af2b2$exports = {};
$1f7e1cf2285af2b2$exports = JSON.parse("{\"Clear search\":\"Aramayı temizle\"}");


var $2d999353ca652e34$exports = {};
$2d999353ca652e34$exports = JSON.parse("{\"Clear search\":\"Очистити пошук\"}");


var $117b536bfb1ae554$exports = {};
$117b536bfb1ae554$exports = JSON.parse("{\"Clear search\":\"清除搜索\"}");


var $525f6fa4ac26e278$exports = {};
$525f6fa4ac26e278$exports = JSON.parse("{\"Clear search\":\"清除搜尋條件\"}");


$ad5aea03cc53c961$exports = {
    "ar-AE": $03c9a1a10de12f06$exports,
    "bg-BG": $4da0c2ffa4ba4159$exports,
    "cs-CZ": $8c59fd0c2c96821b$exports,
    "da-DK": $0a371f9c1df8120f$exports,
    "de-DE": $67f4d0b0de9f8a52$exports,
    "el-GR": $72a312d948f0214b$exports,
    "en-US": $5012d21d933388c1$exports,
    "es-ES": $0159854399308e2e$exports,
    "et-EE": $390613981d970276$exports,
    "fi-FI": $961ae0833f811705$exports,
    "fr-FR": $26d76742decfd829$exports,
    "he-IL": $92ef254c82a5c769$exports,
    "hr-HR": $e0321b43bdefb8b3$exports,
    "hu-HU": $0c1ee0b8d50940d9$exports,
    "it-IT": $b09198915a38946f$exports,
    "ja-JP": $3a9a3d180c3145c0$exports,
    "ko-KR": $b7a611726449f4a3$exports,
    "lt-LT": $d9a3d49db610dd5c$exports,
    "lv-LV": $3ab64b73ea27c23a$exports,
    "nb-NO": $bf5cce1b47d23baf$exports,
    "nl-NL": $4e0c9a9a010e4598$exports,
    "pl-PL": $63cf4a75ec270508$exports,
    "pt-BR": $083b0cad27fdbd06$exports,
    "pt-PT": $1b7f0864d830ba6d$exports,
    "ro-RO": $d6d2588377fc9718$exports,
    "ru-RU": $701c918a4653e946$exports,
    "sk-SK": $7cacc29a1e5f4fbe$exports,
    "sl-SI": $c63231bcc300d0df$exports,
    "sr-SP": $b61510478bc0e6f6$exports,
    "sv-SE": $ce325e6dd3f9c37a$exports,
    "tr-TR": $1f7e1cf2285af2b2$exports,
    "uk-UA": $2d999353ca652e34$exports,
    "zh-CN": $117b536bfb1ae554$exports,
    "zh-TW": $525f6fa4ac26e278$exports
};




function $4d52238874b24f86$export$9bb30bbe003b82e0(props, state, inputRef) {
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$2($ad5aea03cc53c961$exports)));
    let { isDisabled: isDisabled , onSubmit: onSubmit = ()=>{
    } , onClear: onClear , type: type = 'search'  } = props;
    let onKeyDown = (e)=>{
        const key = e.key;
        if (key === 'Enter' || key === 'Escape') e.preventDefault();
        if (isDisabled) return;
        if (key === 'Enter') onSubmit(state.value);
        if (key === 'Escape') {
            state.setValue('');
            if (onClear) onClear();
        }
    };
    let onClearButtonClick = ()=>{
        state.setValue('');
        if (onClear) onClear();
    };
    let onPressStart = ()=>{
        // this is in PressStart for mobile so that touching the clear button doesn't remove focus from
        // the input and close the keyboard
        inputRef.current.focus();
    };
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $2d73ec29415bd339$export$712718f7aec83d5({
        ...props,
        value: state.value,
        onChange: state.setValue,
        onKeyDown: $ff5963eb1fccf552$export$e08e3b67e392101e(onKeyDown, props.onKeyDown),
        type: type
    }, inputRef);
    return {
        labelProps: labelProps,
        inputProps: {
            ...inputProps,
            // already handled by useSearchFieldState
            defaultValue: undefined
        },
        clearButtonProps: {
            'aria-label': formatMessage('Clear search'),
            excludeFromTabOrder: true,
            // @ts-ignore
            preventFocusOnPress: true,
            onPress: onClearButtonClick,
            onPressStart: onPressStart
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}

function $parcel$export$8(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $58aed456727eb0f3$exports = {};

$parcel$export$8($58aed456727eb0f3$exports, "useSelect", () => $58aed456727eb0f3$export$e64b2f635402ca43);







function $58aed456727eb0f3$export$e64b2f635402ca43(props, state, ref) {
    let { keyboardDelegate: keyboardDelegate , isDisabled: isDisabled  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $325a3faab7a68acd$export$a16aca283550c30d({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = useMemo(()=>keyboardDelegate || new $2a25aae57d74318e$export$a05409b8bb224a5a(state.collection, state.disabledKeys, null, collator)
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        collator
    ]);
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = $168583247155ddda$export$dc9c12ed27dd1b49({
        isDisabled: isDisabled,
        type: 'listbox'
    }, state, ref);
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowLeft':
                {
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? delegate.getKeyAbove(state.selectedKey) : delegate.getFirstKey();
                    if (key) state.setSelectedKey(key);
                    break;
                }
            case 'ArrowRight':
                {
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? delegate.getKeyBelow(state.selectedKey) : delegate.getFirstKey();
                    if (key) state.setSelectedKey(key);
                    break;
                }
        }
    };
    let { typeSelectProps: typeSelectProps  } = $fb3050f43d946246$export$e32c88dfddc6e1d8({
        keyboardDelegate: delegate,
        selectionManager: state.selectionManager,
        onTypeSelect (key) {
            state.setSelectedKey(key);
        }
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $2baaea4c71418dea$export$294aa081a6c6f55d({
        ...props,
        labelElementType: 'span'
    });
    typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
    delete typeSelectProps.onKeyDownCapture;
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let triggerProps = $3ef42575df84b30b$export$9d1611c77c2fe928(typeSelectProps, menuTriggerProps, fieldProps);
    let valueId = $bdb11010cef70236$export$f680877a34711e37();
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                if (!props.isDisabled) {
                    ref.current.focus();
                    // Show the focus ring so the user knows where focus went
                    $507fabe10e71c6fb$export$8397ddfc504fdb9a('keyboard');
                }
            }
        },
        triggerProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
            ...triggerProps,
            onKeyDown: $ff5963eb1fccf552$export$e08e3b67e392101e(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
            onKeyUp: props.onKeyUp,
            'aria-labelledby': [
                triggerProps['aria-labelledby'],
                triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null,
                valueId
            ].filter(Boolean).join(' '),
            onFocus (e) {
                if (state.isFocused) return;
                if (props.onFocus) props.onFocus(e);
                if (props.onFocusChange) props.onFocusChange(true);
                state.setFocused(true);
            },
            onBlur (e) {
                if (state.isOpen) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            }
        }),
        valueProps: {
            id: valueId
        },
        menuProps: {
            ...menuProps,
            autoFocus: state.focusStrategy || true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            disallowEmptySelection: true,
            onBlur: (e)=>{
                if (e.currentTarget.contains(e.relatedTarget)) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            },
            'aria-labelledby': [
                fieldProps['aria-labelledby'],
                triggerProps['aria-label'] && !fieldProps['aria-labelledby'] ? triggerProps.id : null
            ].filter(Boolean).join(' ')
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


var $bdd25dc72710631f$exports = {};

$parcel$export$8($bdd25dc72710631f$exports, "useHiddenSelect", () => $bdd25dc72710631f$export$f809e80f58e251d1);
$parcel$export$8($bdd25dc72710631f$exports, "HiddenSelect", () => $bdd25dc72710631f$export$cbd84cdb2e668835);



function $bdd25dc72710631f$export$f809e80f58e251d1(props, state, triggerRef) {
    let { autoComplete: autoComplete , name: name , isDisabled: isDisabled  } = props;
    let modality = $507fabe10e71c6fb$export$98e20ec92f614cfe();
    let { visuallyHiddenProps: visuallyHiddenProps  } = $5c3e21d68f1c4674$export$a966af930f325cab();
    var _selectedKey;
    // In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
    // In Firefox, there must be a <label> to identify the <select> whereas other browsers
    // seem to identify it just by surrounding text.
    // The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
    // 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
    // non tabbable with tabIndex={-1}.
    //
    // In mobile browsers, there are next/previous buttons above the software keyboard for navigating
    // between fields in a form. These only support native form inputs that are tabbable. In order to
    // support those, an additional hidden input is used to marshall focus to the button. It is tabbable
    // except when the button is focused, so that shift tab works properly to go to the actual previous
    // input in the form. Using the <select> for this also works, but Safari on iOS briefly flashes
    // the native menu on focus, so this isn't ideal. A font-size of 16px or greater is required to
    // prevent Safari from zooming in on the input when it is focused.
    //
    // If the current interaction modality is null, then the user hasn't interacted with the page yet.
    // In this case, we set the tabIndex to -1 on the input element so that automated accessibility
    // checkers don't throw false-positives about focusable elements inside an aria-hidden parent.
    return {
        containerProps: {
            ...visuallyHiddenProps,
            'aria-hidden': true
        },
        inputProps: {
            type: 'text',
            tabIndex: modality == null || state.isFocused || state.isOpen ? -1 : 0,
            style: {
                fontSize: 16
            },
            onFocus: ()=>triggerRef.current.focus()
            ,
            disabled: isDisabled
        },
        selectProps: {
            tabIndex: -1,
            autoComplete: autoComplete,
            disabled: isDisabled,
            name: name,
            size: state.collection.size,
            value: (_selectedKey = state.selectedKey) !== null && _selectedKey !== void 0 ? _selectedKey : '',
            onChange: (e)=>state.setSelectedKey(e.target.value)
        }
    };
}
function $bdd25dc72710631f$export$cbd84cdb2e668835(props) {
    let { state: state , triggerRef: triggerRef , label: label , name: name , isDisabled: isDisabled  } = props;
    let { containerProps: containerProps , inputProps: inputProps , selectProps: selectProps  } = $bdd25dc72710631f$export$f809e80f58e251d1(props, state, triggerRef);
    // If used in a <form>, use a hidden input so the value can be submitted to a server.
    // If the collection isn't too big, use a hidden <select> element for this so that browser
    // autofill will work. Otherwise, use an <input type="hidden">.
    if (state.collection.size <= 300) return(/*#__PURE__*/ React.createElement("div", containerProps, /*#__PURE__*/ React.createElement("input", inputProps), /*#__PURE__*/ React.createElement("label", null, label, /*#__PURE__*/ React.createElement("select", selectProps, /*#__PURE__*/ React.createElement("option", null), [
        ...state.collection.getKeys()
    ].map((key)=>{
        let item = state.collection.getItem(key);
        if (item.type === 'item') return(/*#__PURE__*/ React.createElement("option", {
            key: item.key,
            value: item.key
        }, item.textValue));
    })))));
    else if (name) return(/*#__PURE__*/ React.createElement("input", {
        type: "hidden",
        autoComplete: selectProps.autoComplete,
        name: name,
        disabled: isDisabled,
        value: state.selectedKey
    }));
    return null;
}

function $parcel$export$7(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f4b273590fab9f93$exports = {};

$parcel$export$7($f4b273590fab9f93$exports, "useSeparator", () => $f4b273590fab9f93$export$52210f68a14655d0);

function $f4b273590fab9f93$export$52210f68a14655d0(props) {
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let ariaOrientation;
    // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
    // if it's vertical, we need to specify it
    if (props.orientation === 'vertical') ariaOrientation = 'vertical';
    // hr elements implicitly have role = separator and a horizontal orientation
    if (props.elementType !== 'hr') return {
        separatorProps: {
            ...domProps,
            role: 'separator',
            'aria-orientation': ariaOrientation
        }
    };
    return {
        separatorProps: domProps
    };
}

function $parcel$export$6(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bcca50147b47f54d$exports = {};

$parcel$export$6($bcca50147b47f54d$exports, "useSlider", () => $bcca50147b47f54d$export$56b2c08e277f365);

const $aa519ee6cf463259$export$7a8d2b02c9371cbf = new WeakMap();
function $aa519ee6cf463259$export$68e648cbec363a18(state, index) {
    let id = $aa519ee6cf463259$export$7a8d2b02c9371cbf.get(state);
    if (!id) throw new Error('Unknown slider state');
    return `${id}-${index}`;
}






function $bcca50147b47f54d$export$56b2c08e277f365(props, state, trackRef) {
    let { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f(props);
    let isVertical = props.orientation === 'vertical';
    var _id;
    // Attach id of the label to the state so it can be accessed by useSliderThumb.
    $aa519ee6cf463259$export$7a8d2b02c9371cbf.set(state, (_id = labelProps.id) !== null && _id !== void 0 ? _id : fieldProps.id);
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    // When the user clicks or drags the track, we want the motion to set and drag the
    // closest thumb.  Hence we also need to install useMove() on the track element.
    // Here, we keep track of which index is the "closest" to the drag start point.
    // It is set onMouseDown/onTouchDown; see trackProps below.
    const realTimeTrackDraggingIndex = useRef(null);
    const stateRef = useRef(null);
    stateRef.current = state;
    const reverseX = direction === 'rtl';
    const currentPosition = useRef(null);
    const { moveProps: moveProps  } = $e8a7022cf87cba2a$export$36da96379f79f245({
        onMoveStart () {
            currentPosition.current = null;
        },
        onMove ({ deltaX: deltaX , deltaY: deltaY  }) {
            let size = isVertical ? trackRef.current.offsetHeight : trackRef.current.offsetWidth;
            if (currentPosition.current == null) currentPosition.current = stateRef.current.getThumbPercent(realTimeTrackDraggingIndex.current) * size;
            let delta = isVertical ? deltaY : deltaX;
            if (isVertical || reverseX) delta = -delta;
            currentPosition.current += delta;
            if (realTimeTrackDraggingIndex.current != null && trackRef.current) {
                const percent = $9446cca9a3875146$export$7d15b64cf5a3a4c4(currentPosition.current / size, 0, 1);
                stateRef.current.setThumbPercent(realTimeTrackDraggingIndex.current, percent);
            }
        },
        onMoveEnd () {
            if (realTimeTrackDraggingIndex.current != null) {
                stateRef.current.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
        }
    });
    let currentPointer = useRef(undefined);
    let onDownTrack = (e, id, clientX, clientY)=>{
        // We only trigger track-dragging if the user clicks on the track itself and nothing is currently being dragged.
        if (trackRef.current && !props.isDisabled && state.values.every((_, i)=>!state.isThumbDragging(i)
        )) {
            let size = isVertical ? trackRef.current.offsetHeight : trackRef.current.offsetWidth;
            // Find the closest thumb
            const trackPosition = trackRef.current.getBoundingClientRect()[isVertical ? 'top' : 'left'];
            const clickPosition = isVertical ? clientY : clientX;
            const offset = clickPosition - trackPosition;
            let percent = offset / size;
            if (direction === 'rtl' || isVertical) percent = 1 - percent;
            let value = state.getPercentValue(percent);
            // to find the closet thumb we split the array based on the first thumb position to the "right/end" of the click.
            let closestThumb;
            let split = state.values.findIndex((v)=>value - v < 0
            );
            if (split === 0) closestThumb = split;
            else if (split === -1) closestThumb = state.values.length - 1;
            else {
                let lastLeft = state.values[split - 1];
                let firstRight = state.values[split];
                // Pick the last left/start thumb, unless they are stacked on top of each other, then pick the right/end one
                if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) closestThumb = split - 1;
                else closestThumb = split;
            }
            // Confirm that the found closest thumb is editable, not disabled, and move it
            if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
                // Don't unfocus anything
                e.preventDefault();
                realTimeTrackDraggingIndex.current = closestThumb;
                state.setFocusedThumb(closestThumb);
                currentPointer.current = id;
                state.setThumbDragging(realTimeTrackDraggingIndex.current, true);
                state.setThumbValue(closestThumb, value);
                addGlobalListener(window, 'mouseup', onUpTrack, false);
                addGlobalListener(window, 'touchend', onUpTrack, false);
                addGlobalListener(window, 'pointerup', onUpTrack, false);
            } else realTimeTrackDraggingIndex.current = null;
        }
    };
    let onUpTrack = (e)=>{
        var ref;
        var _pointerId;
        let id = (_pointerId = e.pointerId) !== null && _pointerId !== void 0 ? _pointerId : (ref = e.changedTouches) === null || ref === void 0 ? void 0 : ref[0].identifier;
        if (id === currentPointer.current) {
            if (realTimeTrackDraggingIndex.current != null) {
                state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
            removeGlobalListener(window, 'mouseup', onUpTrack, false);
            removeGlobalListener(window, 'touchend', onUpTrack, false);
            removeGlobalListener(window, 'pointerup', onUpTrack, false);
        }
    };
    if (labelProps.htmlFor) {
        // Ideally the `for` attribute should point to the first thumb, but VoiceOver on iOS
        // causes this to override the `aria-labelledby` on the thumb. This causes the first
        // thumb to only be announced as the slider label rather than its individual name as well.
        // See https://bugs.webkit.org/show_bug.cgi?id=172464.
        delete labelProps.htmlFor;
        labelProps.onClick = ()=>{
            var // Safari does not focus <input type="range"> elements when clicking on an associated <label>,
            // so do it manually. In addition, make sure we show the focus ring.
            ref;
            (ref = document.getElementById($aa519ee6cf463259$export$68e648cbec363a18(state, 0))) === null || ref === void 0 ? void 0 : ref.focus();
            $507fabe10e71c6fb$export$8397ddfc504fdb9a('keyboard');
        };
    }
    return {
        labelProps: labelProps,
        // The root element of the Slider will have role="group" to group together
        // all the thumb inputs in the Slider.  The label of the Slider will
        // be used to label the group.
        groupProps: {
            role: 'group',
            ...fieldProps
        },
        trackProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
            onMouseDown (e) {
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDownTrack(e, undefined, e.clientX, e.clientY);
            },
            onPointerDown (e) {
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onDownTrack(e, e.pointerId, e.clientX, e.clientY);
            },
            onTouchStart (e) {
                onDownTrack(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            }
        }, moveProps),
        outputProps: {
            htmlFor: state.values.map((_, index)=>$aa519ee6cf463259$export$68e648cbec363a18(state, index)
            ).join(' '),
            'aria-live': 'off'
        }
    };
}


var $47b897dc8cdb026b$exports = {};

$parcel$export$6($47b897dc8cdb026b$exports, "useSliderThumb", () => $47b897dc8cdb026b$export$8d15029008292ae);







function $47b897dc8cdb026b$export$8d15029008292ae(opts, state) {
    let { index: index , isRequired: isRequired , isDisabled: isDisabled , validationState: validationState , trackRef: trackRef , inputRef: inputRef  } = opts;
    let isVertical = opts.orientation === 'vertical';
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    let labelId = $aa519ee6cf463259$export$7a8d2b02c9371cbf.get(state);
    var ref1;
    const { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f({
        ...opts,
        id: $aa519ee6cf463259$export$68e648cbec363a18(state, index),
        'aria-labelledby': `${labelId} ${(ref1 = opts['aria-labelledby']) !== null && ref1 !== void 0 ? ref1 : ''}`.trim()
    });
    const value = state.values[index];
    const focusInput = useCallback(()=>{
        if (inputRef.current) $7215afc6de606d6b$export$de79e2c695e052f3(inputRef.current);
    }, [
        inputRef
    ]);
    const isFocused = state.focusedThumb === index;
    useEffect(()=>{
        if (isFocused) focusInput();
    }, [
        isFocused,
        focusInput
    ]);
    const stateRef = useRef(null);
    stateRef.current = state;
    let reverseX = direction === 'rtl';
    let currentPosition = useRef(null);
    let { keyboardProps: keyboardProps  } = $46d819fcbaf35654$export$8f71654801c2f7cd({
        onKeyDown (e) {
            let { getThumbMaxValue: getThumbMaxValue , getThumbMinValue: getThumbMinValue , decrementThumb: decrementThumb , incrementThumb: incrementThumb , setThumbValue: setThumbValue , setThumbDragging: setThumbDragging , pageSize: pageSize  } = stateRef.current;
            // these are the cases that useMove or useSlider don't handle
            if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                e.continuePropagation();
                return;
            }
            // same handling as useMove, stopPropagation to prevent useSlider from handling the event as well.
            e.preventDefault();
            // remember to set this so that onChangeEnd is fired
            setThumbDragging(index, true);
            switch(e.key){
                case 'PageUp':
                    incrementThumb(index, pageSize);
                    break;
                case 'PageDown':
                    decrementThumb(index, pageSize);
                    break;
                case 'Home':
                    setThumbValue(index, getThumbMinValue(index));
                    break;
                case 'End':
                    setThumbValue(index, getThumbMaxValue(index));
                    break;
            }
            setThumbDragging(index, false);
        }
    });
    let { moveProps: moveProps  } = $e8a7022cf87cba2a$export$36da96379f79f245({
        onMoveStart () {
            currentPosition.current = null;
            stateRef.current.setThumbDragging(index, true);
        },
        onMove ({ deltaX: deltaX , deltaY: deltaY , pointerType: pointerType , shiftKey: shiftKey  }) {
            const { getThumbPercent: getThumbPercent , setThumbPercent: setThumbPercent , decrementThumb: decrementThumb , incrementThumb: incrementThumb , step: step , pageSize: pageSize  } = stateRef.current;
            let size = isVertical ? trackRef.current.offsetHeight : trackRef.current.offsetWidth;
            if (currentPosition.current == null) currentPosition.current = getThumbPercent(index) * size;
            if (pointerType === 'keyboard') {
                if (deltaX > 0 && reverseX || deltaX < 0 && !reverseX || deltaY > 0) decrementThumb(index, shiftKey ? pageSize : step);
                else incrementThumb(index, shiftKey ? pageSize : step);
            } else {
                let delta = isVertical ? deltaY : deltaX;
                if (isVertical || reverseX) delta = -delta;
                currentPosition.current += delta;
                setThumbPercent(index, $9446cca9a3875146$export$7d15b64cf5a3a4c4(currentPosition.current / size, 0, 1));
            }
        },
        onMoveEnd () {
            stateRef.current.setThumbDragging(index, false);
        }
    });
    // Immediately register editability with the state
    state.setThumbEditable(index, !isDisabled);
    const { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c($3ef42575df84b30b$export$9d1611c77c2fe928(opts, {
        onFocus: ()=>state.setFocusedThumb(index)
        ,
        onBlur: ()=>state.setFocusedThumb(undefined)
    }), inputRef);
    let currentPointer = useRef(undefined);
    let onDown = (id)=>{
        focusInput();
        currentPointer.current = id;
        state.setThumbDragging(index, true);
        addGlobalListener(window, 'mouseup', onUp, false);
        addGlobalListener(window, 'touchend', onUp, false);
        addGlobalListener(window, 'pointerup', onUp, false);
    };
    let onUp = (e)=>{
        var ref;
        var _pointerId;
        let id = (_pointerId = e.pointerId) !== null && _pointerId !== void 0 ? _pointerId : (ref = e.changedTouches) === null || ref === void 0 ? void 0 : ref[0].identifier;
        if (id === currentPointer.current) {
            focusInput();
            state.setThumbDragging(index, false);
            removeGlobalListener(window, 'mouseup', onUp, false);
            removeGlobalListener(window, 'touchend', onUp, false);
            removeGlobalListener(window, 'pointerup', onUp, false);
        }
    };
    // We install mouse handlers for the drag motion on the thumb div, but
    // not the key handler for moving the thumb with the slider.  Instead,
    // we focus the range input, and let the browser handle the keyboard
    // interactions; we then listen to input's onChange to update state.
    return {
        inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, fieldProps, {
            type: 'range',
            tabIndex: !isDisabled ? 0 : undefined,
            min: state.getThumbMinValue(index),
            max: state.getThumbMaxValue(index),
            step: state.step,
            value: value,
            disabled: isDisabled,
            'aria-orientation': opts.orientation,
            'aria-valuetext': state.getThumbValueLabel(index),
            'aria-required': isRequired || undefined,
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': opts['aria-errormessage'],
            onChange: (e)=>{
                stateRef.current.setThumbValue(index, parseFloat(e.target.value));
            }
        }),
        thumbProps: !isDisabled ? $3ef42575df84b30b$export$9d1611c77c2fe928(keyboardProps, moveProps, {
            onMouseDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDown();
            },
            onPointerDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDown(e.pointerId);
            },
            onTouchStart: (e)=>{
                onDown(e.changedTouches[0].identifier);
            }
        }) : {
        },
        labelProps: labelProps
    };
}

function $parcel$export$5(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b418ec0c85c52f27$exports = {};

$parcel$export$5($b418ec0c85c52f27$exports, "useSwitch", () => $b418ec0c85c52f27$export$d853f7095ae95f88);

function $b418ec0c85c52f27$export$d853f7095ae95f88(props, state, ref) {
    let { inputProps: inputProps  } = $d2c8e2b0480f3f34$export$cbe85ee05b554577(props, state, ref);
    let { isSelected: isSelected  } = state;
    return {
        inputProps: {
            ...inputProps,
            role: 'switch',
            checked: isSelected,
            'aria-checked': isSelected
        }
    };
}

function $parcel$export$4(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c74cda7d31af1253$exports = {};

$parcel$export$4($c74cda7d31af1253$exports, "Layout", () => $c74cda7d31af1253$export$c84671f46d6a1ca);
class $c74cda7d31af1253$export$c84671f46d6a1ca {
    /**
   * Returns whether the layout should invalidate in response to
   * visible rectangle changes. By default, it only invalidates
   * when the collection view's size changes. Return true always
   * to make the layout invalidate while scrolling (e.g. sticky headers).
   */ shouldInvalidate(newRect, oldRect) {
        // By default, invalidate when the size changes
        return newRect.width !== oldRect.width || newRect.height !== oldRect.height;
    }
    /**
   * This method allows the layout to perform any pre-computation
   * it needs to in order to prepare {@link LayoutInfo}s for retrieval.
   * Called by the collection view before {@link getVisibleLayoutInfos}
   * or {@link getLayoutInfo} are called.
   */ validate(invalidationContext) {
    }
    /**
   * Returns a {@link DragTarget} describing a view at the given point to be dragged.
   * Return `null` to cancel the drag. The default implementation returns the view at the given point.
   * @param point The point at which the drag occurred.
   */ // getDragTarget(point: Point): DragTarget | null {
    //   let target = this.virtualizer.keyAtPoint(point);
    //   if (!target) {
    //     return null;
    //   }
    //   return {
    //     type: 'item',
    //     key: target
    //   };
    // }
    /**
   * Returns a {@link DragTarget} object describing where a drop should occur. Return `null`
   * to reject the drop. The dropped items will be inserted before the resulting target.
   * @param point The point at which the drop occurred.
   */ // getDropTarget(point: Point): DropTarget | null {
    //   return null;
    // }
    /**
   * Returns the starting attributes for an animated insertion.
   * The view is animated from this {@link LayoutInfo} to the one returned by {@link getLayoutInfo}.
   * The default implementation just returns its input.
   *
   * @param layoutInfo The proposed LayoutInfo for this view.
   */ getInitialLayoutInfo(layoutInfo) {
        return layoutInfo;
    }
    /**
   * Returns the ending attributes for an animated removal.
   * The view is animated from the {@link LayoutInfo} returned by {@link getLayoutInfo}
   * to the one returned by this method. The default implementation returns its input.
   *
   * @param layoutInfo The original LayoutInfo for this view.
   */ getFinalLayoutInfo(layoutInfo) {
        return layoutInfo;
    }
}


var $d7fd61009c21d0bb$exports = {};

$parcel$export$4($d7fd61009c21d0bb$exports, "LayoutInfo", () => $d7fd61009c21d0bb$export$7e0eeb9da702a085);
class $d7fd61009c21d0bb$export$7e0eeb9da702a085 {
    /**
   * Returns a copy of the LayoutInfo.
   */ copy() {
        let res = new $d7fd61009c21d0bb$export$7e0eeb9da702a085(this.type, this.key, this.rect.copy());
        res.estimatedSize = this.estimatedSize;
        res.opacity = this.opacity;
        res.transform = this.transform;
        res.parentKey = this.parentKey;
        res.isSticky = this.isSticky;
        res.zIndex = this.zIndex;
        res.allowOverflow = this.allowOverflow;
        return res;
    }
    /**
   * @param type A string representing the view type. Should be `'item'` for item views.
                            Other types are used by supplementary views.
   * @param key The unique key for this view.
   * @param rect The rectangle describing the size and position of this view.
   */ constructor(type, key, rect){
        this.type = type;
        this.key = key;
        this.parentKey = null;
        this.rect = rect;
        this.estimatedSize = false;
        this.isSticky = false;
        this.opacity = 1;
        this.transform = null;
        this.zIndex = 0;
        this.allowOverflow = false;
    }
}


var $3041db3296945e6e$exports = {};

$parcel$export$4($3041db3296945e6e$exports, "Point", () => $3041db3296945e6e$export$baf26146a414f24a);
class $3041db3296945e6e$export$baf26146a414f24a {
    /**
   * Returns a copy of this point.
   */ copy() {
        return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.y);
    }
    /**
   * Checks if two points are equal.
   */ equals(point) {
        return this.x === point.x && this.y === point.y;
    }
    /**
   * Returns true if this point is the origin.
   */ isOrigin() {
        return this.x === 0 && this.y === 0;
    }
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}


var $60423f92c7f9ad87$exports = {};

$parcel$export$4($60423f92c7f9ad87$exports, "Rect", () => $60423f92c7f9ad87$export$c79fc6492f3af13d);

class $60423f92c7f9ad87$export$c79fc6492f3af13d {
    /**
   * The maximum x-coordinate in the rectangle.
   */ get maxX() {
        return this.x + this.width;
    }
    /**
   * The maximum y-coordinate in the rectangle.
   */ get maxY() {
        return this.y + this.height;
    }
    /**
   * The area of the rectangle.
   */ get area() {
        return this.width * this.height;
    }
    /**
   * The top left corner of the rectangle.
   */ get topLeft() {
        return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.y);
    }
    /**
   * The top right corner of the rectangle.
   */ get topRight() {
        return new $3041db3296945e6e$export$baf26146a414f24a(this.maxX, this.y);
    }
    /**
   * The bottom left corner of the rectangle.
   */ get bottomLeft() {
        return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.maxY);
    }
    /**
   * The bottom right corner of the rectangle.
   */ get bottomRight() {
        return new $3041db3296945e6e$export$baf26146a414f24a(this.maxX, this.maxY);
    }
    /**
   * Returns whether this rectangle intersects another rectangle.
   * @param rect - The rectangle to check.
   */ intersects(rect) {
        return this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
    }
    /**
   * Returns whether this rectangle fully contains another rectangle.
   * @param rect - The rectangle to check.
   */ containsRect(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
    }
    /**
   * Returns whether the rectangle contains the given point.
   * @param point - The point to check.
   */ containsPoint(point) {
        return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
    }
    /**
   * Returns the first corner of this rectangle (from top to bottom, left to right)
   * that is contained in the given rectangle, or null of the rectangles do not intersect.
   * @param rect - The rectangle to check.
   */ getCornerInRect(rect) {
        for (let key of [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]){
            if (rect.containsPoint(this[key])) return key;
        }
        return null;
    }
    equals(rect) {
        return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
    }
    pointEquals(point) {
        return this.x === point.x && this.y === point.y;
    }
    sizeEquals(size) {
        return this.width === size.width && this.height === size.height;
    }
    /**
   * Returns a copy of this rectangle.
   */ copy() {
        return new $60423f92c7f9ad87$export$c79fc6492f3af13d(this.x, this.y, this.width, this.height);
    }
    constructor(x = 0, y = 0, width = 0, height = 0){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}


var $ee1bfa90a957fb8a$exports = {};

$parcel$export$4($ee1bfa90a957fb8a$exports, "Size", () => $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec);
class $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec {
    /**
   * Returns a copy of this size.
   */ copy() {
        return new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec(this.width, this.height);
    }
    /**
   * Returns whether this size is equal to another one.
   */ equals(other) {
        return this.width === other.width && this.height === other.height;
    }
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
    }
}


var $ad1d98aa8f0c31b4$exports = {};

$parcel$export$4($ad1d98aa8f0c31b4$exports, "ReusableView", () => $ad1d98aa8f0c31b4$export$1a5223887c560441);
let $ad1d98aa8f0c31b4$var$KEY = 0;
class $ad1d98aa8f0c31b4$export$1a5223887c560441 {
    /**
   * Prepares the view for reuse. Called just before the view is removed from the DOM.
   */ prepareForReuse() {
        this.content = null;
        this.rendered = null;
        this.layoutInfo = null;
    }
    constructor(virtualizer){
        this.virtualizer = virtualizer;
        this.key = ++$ad1d98aa8f0c31b4$var$KEY;
    }
}


var $fc0b13b484ac1194$exports = {};

$parcel$export$4($fc0b13b484ac1194$exports, "useVirtualizerState", () => $fc0b13b484ac1194$export$1505db82fe357e65);




// use high res timer if available
let $3eb131dcf37ad5f8$var$perf = typeof window !== 'undefined' ? window.performance : null;
// @ts-ignore
let $3eb131dcf37ad5f8$var$perfNow = $3eb131dcf37ad5f8$var$perf && ($3eb131dcf37ad5f8$var$perf.now || $3eb131dcf37ad5f8$var$perf.webkitNow || $3eb131dcf37ad5f8$var$perf.msNow || $3eb131dcf37ad5f8$var$perf.mozNow);
let $3eb131dcf37ad5f8$var$getTime = $3eb131dcf37ad5f8$var$perfNow ? $3eb131dcf37ad5f8$var$perfNow.bind($3eb131dcf37ad5f8$var$perf) : function() {
    return Date.now ? Date.now() : new Date().getTime();
};
let $3eb131dcf37ad5f8$var$fixTs;
function $3eb131dcf37ad5f8$export$dc0b63720788090c(begin, end, duration, ease, fn) {
    let canceled = false;
    let raf_id;
    let promise = new Promise((resolve)=>{
        let start = $3eb131dcf37ad5f8$var$getTime();
        let diffX = end.x - begin.x;
        let diffY = end.y - begin.y;
        raf_id = requestAnimationFrame(function run(t) {
            // if we're using a high res timer, make sure timestamp is not the old epoch-based value.
            // http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
            if ($3eb131dcf37ad5f8$var$fixTs == null) $3eb131dcf37ad5f8$var$fixTs = t > 1000000000000 !== $3eb131dcf37ad5f8$var$getTime() > 1000000000000;
            if ($3eb131dcf37ad5f8$var$fixTs) t = $3eb131dcf37ad5f8$var$getTime();
            // check if we're done
            let delta = t - start;
            if (delta > duration) {
                fn(end);
                resolve();
            } else {
                // call frame callback after computing eased time and get the next frame
                let proceed = fn(new $3041db3296945e6e$export$baf26146a414f24a(begin.x + diffX * ease(delta / duration), begin.y + diffY * ease(delta / duration)));
                if (proceed !== false && !canceled) raf_id = requestAnimationFrame(run);
            }
        });
    });
    promise.cancel = function() {
        canceled = true;
        cancelAnimationFrame(raf_id);
    };
    return promise;
}
function $3eb131dcf37ad5f8$export$57636bb43b1ccbb0(t) {
    return Math.sin(t * Math.PI / 2);
}


function $fc36f9a046a9ce79$export$37a26b283fd7740e(a, b) {
    let res = new Set();
    for (let key of a.keys())if (!b.has(key)) res.add(key);
    return res;
}
function $fc36f9a046a9ce79$export$acaf96a27438246b(a, b) {
    let toRemove = $fc36f9a046a9ce79$export$37a26b283fd7740e(a, b);
    let toAdd = $fc36f9a046a9ce79$export$37a26b283fd7740e(b, a);
    let toUpdate = new Set;
    for (let key of a.keys())if (b.has(key)) toUpdate.add(key);
    return {
        toRemove: toRemove,
        toAdd: toAdd,
        toUpdate: toUpdate
    };
}
function* $fc36f9a046a9ce79$export$cfc14088dfefce5f(...iterators) {
    for (let iterator of iterators)yield* iterator;
}




class $364191b3decf3697$var$RollingAverage {
    addSample(sample) {
        this.count++;
        this.value += (sample - this.value) / this.count;
    }
    constructor(){
        this.count = 0;
        this.value = 0;
    }
}
class $364191b3decf3697$export$4455ee6afb38dcbb {
    setVisibleRect(rect) {
        let time = performance.now() - this.startTime;
        if (time < 500) {
            this.averageTime.addSample(time);
            if (rect.x !== this.visibleRect.x && time > 0) this.velocity.x = (rect.x - this.visibleRect.x) / time;
            if (rect.y !== this.visibleRect.y && time > 0) this.velocity.y = (rect.y - this.visibleRect.y) / time;
        }
        this.startTime = performance.now();
        this.visibleRect = rect;
    }
    collectMetrics() {
        let time = performance.now() - this.startTime;
        if (time < 500) this.averagePerf.addSample(time);
        if (this.visibleRect.height > 0) {
            let o = Math.abs(this.velocity.y * (this.averageTime.value + this.averagePerf.value));
            this.overscanY.addSample(o);
        }
        if (this.visibleRect.width > 0) {
            let o = Math.abs(this.velocity.x * (this.averageTime.value + this.averagePerf.value));
            this.overscanX.addSample(o);
        }
    }
    getOverscannedRect() {
        let overscanned = this.visibleRect.copy();
        let overscanY = Math.round(Math.min(this.visibleRect.height * 2, this.overscanY.value) / 100) * 100;
        if (this.velocity.y > 0) {
            overscanned.y -= overscanY * 0.2;
            overscanned.height += overscanY + overscanY * 0.2;
        } else {
            overscanned.y -= overscanY;
            overscanned.height += overscanY + overscanY * 0.2;
        }
        let overscanX = Math.round(Math.min(this.visibleRect.width * 2, this.overscanX.value) / 100) * 100;
        if (this.velocity.x > 0) {
            overscanned.x -= overscanX * 0.2;
            overscanned.width += overscanX + overscanX * 0.2;
        } else {
            overscanned.x -= overscanX;
            overscanned.width += overscanX + overscanX * 0.2;
        }
        return overscanned;
    }
    constructor(){
        this.startTime = 0;
        this.averagePerf = new $364191b3decf3697$var$RollingAverage();
        this.averageTime = new $364191b3decf3697$var$RollingAverage();
        this.velocity = new $3041db3296945e6e$export$baf26146a414f24a(5, 5);
        this.overscanX = new $364191b3decf3697$var$RollingAverage();
        this.overscanY = new $364191b3decf3697$var$RollingAverage();
        this.visibleRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d();
    }
}






class $8e135e531d8dcb66$export$febc5573c75cefb0 {
    constructor(){
        this.level = 0;
        this.actions = [];
        this.animated = true;
        this.initialMap = new Map();
        this.finalMap = new Map();
        this.initialLayoutInfo = new Map();
        this.finalLayoutInfo = new Map();
        this.removed = new Map();
        this.toRemove = new Map();
    }
}


class $38b9490c1cca8fc4$export$89be5a243e59c4b2 {
    _setContentSize(size) {
        this._contentSize = size;
        this.delegate.setContentSize(size);
    }
    _setContentOffset(offset) {
        let rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(offset.x, offset.y, this._visibleRect.width, this._visibleRect.height);
        this.delegate.setVisibleRect(rect);
    }
    /**
   * Get the size of the scrollable content.
   */ get contentSize() {
        return this._contentSize;
    }
    /**
   * Get the collection view's currently visible rectangle.
   */ get visibleRect() {
        return this._visibleRect;
    }
    /**
   * Set the collection view's currently visible rectangle.
   */ set visibleRect(rect) {
        this._setVisibleRect(rect);
    }
    _setVisibleRect(rect, forceUpdate = false) {
        let current = this._visibleRect;
        // Ignore if the rects are equal
        if (rect.equals(current)) return;
        if (this.shouldOverscan) this._overscanManager.setVisibleRect(rect);
        let shouldInvalidate = this.layout && this.layout.shouldInvalidate(rect, this._visibleRect);
        this._resetAnimatedContentOffset();
        this._visibleRect = rect;
        if (shouldInvalidate) this.relayout({
            offsetChanged: !rect.pointEquals(current),
            sizeChanged: !rect.sizeEquals(current)
        });
        else this.updateSubviews(forceUpdate);
    }
    get collection() {
        return this._collection;
    }
    set collection(data) {
        this._setData(data);
    }
    _setData(data) {
        if (data === this._collection) return;
        if (this._collection) this._runTransaction(()=>{
            this._collection = data;
        }, this.transitionDuration > 0);
        else {
            this._collection = data;
            this.reloadData();
        }
    }
    /**
   * Reloads the data from the data source and relayouts the collection view.
   * Does not animate any changes. Equivalent to re-assigning the same data source
   * to the collection view.
   */ reloadData() {
        this.relayout({
            contentChanged: true
        });
    }
    /**
   * Returns the item with the given key.
   */ getItem(key) {
        return this._collection ? this._collection.getItem(key) : null;
    }
    /**
   * Get the collection view's layout.
   */ get layout() {
        return this._layout;
    }
    /**
   * Set the collection view's layout.
   */ set layout(layout) {
        this.setLayout(layout);
    }
    /**
   * Sets the collection view's layout, optionally with an animated transition
   * from the current layout to the new layout.
   * @param layout The layout to switch to.
   * @param animated Whether to animate the layout change.
   */ setLayout(layout, animated = false) {
        if (layout === this._layout) return;
        let applyLayout = ()=>{
            if (this._layout) // @ts-ignore
            this._layout.virtualizer = null;
            layout.virtualizer = this;
            this._layout = layout;
        };
        if (animated) // Animated layout transitions are really simple, thanks to our transaction support.
        // We just set the layout inside a transaction action, which runs after the initial
        // layout infos for the animation are retrieved from the previous layout. Then, the
        // final layout infos are retrieved from the new layout, and animations occur.
        this._runTransaction(applyLayout);
        else {
            applyLayout();
            this.relayout();
        }
    }
    _getReuseType(layoutInfo, content) {
        if (layoutInfo.type === 'item' && content) {
            let type = this.delegate.getType ? this.delegate.getType(content) : 'item';
            let reuseType = type === 'item' ? 'item' : layoutInfo.type + '_' + type;
            return {
                type: type,
                reuseType: reuseType
            };
        }
        return {
            type: layoutInfo.type,
            reuseType: layoutInfo.type
        };
    }
    getReusableView(layoutInfo) {
        let content = this.getItem(layoutInfo.key);
        let { reuseType: reuseType  } = this._getReuseType(layoutInfo, content);
        if (!this._reusableViews[reuseType]) this._reusableViews[reuseType] = [];
        let reusable = this._reusableViews[reuseType];
        let view = reusable.length > 0 ? reusable.pop() : new $ad1d98aa8f0c31b4$export$1a5223887c560441(this);
        view.viewType = reuseType;
        if (!this._animatedContentOffset.isOrigin()) {
            layoutInfo = layoutInfo.copy();
            layoutInfo.rect.x += this._animatedContentOffset.x;
            layoutInfo.rect.y += this._animatedContentOffset.y;
        }
        view.layoutInfo = layoutInfo;
        this._renderView(view);
        return view;
    }
    _renderView(reusableView) {
        let { type: type , key: key  } = reusableView.layoutInfo;
        reusableView.content = this.getItem(key);
        reusableView.rendered = this._renderContent(type, reusableView.content);
    }
    _renderContent(type, content) {
        let cached = this._renderedContent.get(content);
        if (cached != null) return cached;
        let rendered = this.delegate.renderView(type, content);
        if (content) this._renderedContent.set(content, rendered);
        return rendered;
    }
    /**
   * Returns an array of all currently visible views, including both
   * item views and supplementary views.
   */ get visibleViews() {
        return Array.from(this._visibleViews.values());
    }
    /**
   * Gets the visible view for the given type and key. Returns null if
   * the view is not currently visible.
   *
   * @param key The key of the view to retrieve.
   */ getView(key) {
        return this._visibleViews.get(key) || null;
    }
    /**
   * Returns an array of visible views matching the given type.
   * @param type The view type to find.
   */ getViewsOfType(type) {
        return this.visibleViews.filter((v)=>v.layoutInfo && v.layoutInfo.type === type
        );
    }
    /**
   * Returns the key for the given view. Returns null
   * if the view is not currently visible.
   */ keyForView(view) {
        if (view && view.layoutInfo) return view.layoutInfo.key;
        return null;
    }
    /**
   * Returns the key for the item view currently at the given point.
   */ keyAtPoint(point) {
        let rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(point.x, point.y, 1, 1);
        let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
        let layoutInfo = layoutInfos[0];
        if (!layoutInfo) return null;
        return layoutInfo.key;
    }
    /**
   * Cleanup for when the Virtualizer will be unmounted.
   */ willUnmount() {
        cancelAnimationFrame(this._relayoutRaf);
    }
    /**
   * Triggers a layout invalidation, and updates the visible subviews.
   */ relayout(context = {
    }) {
        // Ignore relayouts while animating the scroll position
        if (this._scrollAnimation || typeof requestAnimationFrame === 'undefined') return;
        // If we already scheduled a relayout, extend the invalidation
        // context so we coalesce multiple relayouts in the same frame.
        if (this._invalidationContext) {
            Object.assign(this._invalidationContext, context);
            return;
        }
        this._invalidationContext = context;
        this._relayoutRaf = requestAnimationFrame(()=>{
            this._relayoutRaf = null;
            this.relayoutNow();
        });
    }
    /**
   * Performs a relayout immediately. Prefer {@link relayout} over this method
   * where possible, since it coalesces multiple layout passes in the same tick.
   */ relayoutNow(context = this._invalidationContext || {
    }) {
        // Cancel the scheduled relayout, since we're doing it now.
        if (this._relayoutRaf) {
            cancelAnimationFrame(this._relayoutRaf);
            this._relayoutRaf = null;
            // Update the provided context with the current invalidationContext since we are cancelling
            // a scheduled relayoutNow call that has this._invalidationContext set as its default context arg (relayoutNow() in relayout)
            context = {
                ...this._invalidationContext,
                ...context
            };
        }
        // Reset the invalidation context
        this._invalidationContext = null;
        // Do nothing if we don't have a layout or content, or we are
        // in the middle of an animated scroll transition.
        if (!this.layout || !this._collection || this._scrollAnimation) return;
        let scrollAnchor = this._getScrollAnchor();
        // Trigger the beforeLayout hook, if provided
        if (typeof context.beforeLayout === 'function') context.beforeLayout();
        // Validate the layout
        this.layout.validate(context);
        this._setContentSize(this.layout.getContentSize());
        // Trigger the afterLayout hook, if provided
        if (typeof context.afterLayout === 'function') context.afterLayout();
        // Adjust scroll position based on scroll anchor, and constrain.
        // If the content changed, scroll to the top.
        let visibleRect = this.getVisibleRect();
        let restoredScrollAnchor = this._restoreScrollAnchor(scrollAnchor, context);
        let contentOffsetX = context.contentChanged ? 0 : restoredScrollAnchor.x;
        let contentOffsetY = context.contentChanged ? 0 : restoredScrollAnchor.y;
        contentOffsetX = Math.max(0, Math.min(this.contentSize.width - visibleRect.width, contentOffsetX));
        contentOffsetY = Math.max(0, Math.min(this.contentSize.height - visibleRect.height, contentOffsetY));
        let hasLayoutUpdates = false;
        if (contentOffsetX !== visibleRect.x || contentOffsetY !== visibleRect.y) {
            // If this is an animated relayout, we do not immediately scroll because it would be jittery.
            // Save the difference between the current and new content offsets, and apply it to the
            // individual content items instead. At the end of the animation, we'll reset and set the
            // scroll offset for real. This ensures jitter-free animation since we don't need to sync
            // the scroll animation and the content animation.
            if (context.animated || !this._animatedContentOffset.isOrigin()) {
                this._animatedContentOffset.x += visibleRect.x - contentOffsetX;
                this._animatedContentOffset.y += visibleRect.y - contentOffsetY;
                hasLayoutUpdates = this.updateSubviews(context.contentChanged);
            } else this._setContentOffset(new $3041db3296945e6e$export$baf26146a414f24a(contentOffsetX, contentOffsetY));
        } else hasLayoutUpdates = this.updateSubviews(context.contentChanged);
        // Apply layout infos, unless this is coming from an animated transaction
        if (!(context.transaction && context.animated)) this._applyLayoutInfos();
        // Wait for animations, and apply the afterAnimation hook, if provided
        if (context.animated && hasLayoutUpdates) {
            this._enableTransitions();
            let done = ()=>{
                this._disableTransitions();
                // Reset scroll position after animations (see above comment).
                if (!this._animatedContentOffset.isOrigin()) {
                    // Get the content offset to scroll to, taking _animatedContentOffset into account.
                    let { x: x , y: y  } = this.getVisibleRect();
                    this._resetAnimatedContentOffset();
                    this._setContentOffset(new $3041db3296945e6e$export$baf26146a414f24a(x, y));
                }
                if (typeof context.afterAnimation === 'function') context.afterAnimation();
            };
            // Sometimes the animation takes slightly longer than expected.
            setTimeout(done, this.transitionDuration + 100);
            return;
        } else if (typeof context.afterAnimation === 'function') context.afterAnimation();
    }
    /**
   * Corrects DOM order of visible views to match item order of collection.
   */ _correctItemOrder() {
        // Defer until after scrolling and animated transactions are complete
        if (this._isScrolling || this._transaction) return;
        for (let key of this._visibleLayoutInfos.keys()){
            let view = this._visibleViews.get(key);
            this._children.delete(view);
            this._children.add(view);
        }
    }
    _enableTransitions() {
        this.delegate.beginAnimations();
    }
    _disableTransitions() {
        this.delegate.endAnimations();
    }
    _getScrollAnchor() {
        if (!this.anchorScrollPosition) return null;
        let visibleRect = this.getVisibleRect();
        // Ask the delegate to provide a scroll anchor, if possible
        if (this.delegate.getScrollAnchor) {
            let key = this.delegate.getScrollAnchor(visibleRect);
            if (key != null) {
                let layoutInfo = this.layout.getLayoutInfo(key);
                let corner = layoutInfo.rect.getCornerInRect(visibleRect);
                if (corner) {
                    let key = layoutInfo.key;
                    let offset = layoutInfo.rect[corner].y - visibleRect.y;
                    return {
                        key: key,
                        layoutInfo: layoutInfo,
                        corner: corner,
                        offset: offset
                    };
                }
            }
        }
        // No need to anchor the scroll position if it is at the top
        if (visibleRect.y === 0 && !this.anchorScrollPositionAtTop) return null;
        // Find a view with a visible corner that has the smallest distance to the top of the collection view
        let cornerAnchor = null;
        for (let [key, view] of this._visibleViews){
            let layoutInfo = view.layoutInfo;
            if (layoutInfo && layoutInfo.rect.area > 0) {
                let corner = layoutInfo.rect.getCornerInRect(visibleRect);
                if (corner) {
                    let offset = layoutInfo.rect[corner].y - visibleRect.y;
                    if (!cornerAnchor || offset < cornerAnchor.offset) cornerAnchor = {
                        key: key,
                        layoutInfo: layoutInfo,
                        corner: corner,
                        offset: offset
                    };
                }
            }
        }
        return cornerAnchor;
    }
    _restoreScrollAnchor(scrollAnchor, context) {
        let contentOffset = this.getVisibleRect();
        if (scrollAnchor) {
            var ref;
            let finalAnchor = ((ref = context.transaction) === null || ref === void 0 ? void 0 : ref.animated) ? context.transaction.finalMap.get(scrollAnchor.key) : this.layout.getLayoutInfo(scrollAnchor.layoutInfo.key);
            if (finalAnchor) {
                let adjustment = finalAnchor.rect[scrollAnchor.corner].y - contentOffset.y - scrollAnchor.offset;
                contentOffset.y += adjustment;
            }
        }
        return contentOffset;
    }
    getVisibleRect() {
        let v = this.visibleRect;
        let x = v.x - this._animatedContentOffset.x;
        let y = v.y - this._animatedContentOffset.y;
        return new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, v.width, v.height);
    }
    getVisibleLayoutInfos() {
        let rect = this.shouldOverscan ? this._overscanManager.getOverscannedRect() : this.getVisibleRect();
        this._visibleLayoutInfos = this._getLayoutInfoMap(rect);
        return this._visibleLayoutInfos;
    }
    _getLayoutInfoMap(rect, copy = false) {
        let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
        let map = new Map;
        for (let layoutInfo of layoutInfos){
            if (copy) layoutInfo = layoutInfo.copy();
            map.set(layoutInfo.key, layoutInfo);
        }
        return map;
    }
    updateSubviews(forceUpdate = false) {
        if (!this._collection) return;
        let visibleLayoutInfos = this.getVisibleLayoutInfos();
        let currentlyVisible = this._visibleViews;
        let toAdd, toRemove, toUpdate;
        // If this is a force update, remove and re-add all views.
        // Otherwise, find and update the diff.
        if (forceUpdate) {
            toAdd = visibleLayoutInfos;
            toRemove = currentlyVisible;
            toUpdate = new Set();
        } else {
            ({ toAdd: toAdd , toRemove: toRemove , toUpdate: toUpdate  } = $fc36f9a046a9ce79$export$acaf96a27438246b(currentlyVisible, visibleLayoutInfos));
            for (let key of toUpdate){
                let view = currentlyVisible.get(key);
                if (!view || !view.layoutInfo) continue;
                let item = this.getItem(visibleLayoutInfos.get(key).key);
                if (view.content === item) toUpdate.delete(key);
                else {
                    // If the view type changes, delete and recreate the view instead of updating
                    let { reuseType: reuseType  } = this._getReuseType(view.layoutInfo, item);
                    if (view.viewType !== reuseType) {
                        toUpdate.delete(key);
                        toAdd.add(key);
                        toRemove.add(key);
                    }
                }
            }
            // We are done if the sets are equal
            if (toAdd.size === 0 && toRemove.size === 0 && toUpdate.size === 0) {
                if (this._transaction) this._applyLayoutInfos();
                return;
            }
        }
        // Track views that should be removed. They are not removed from
        // the DOM immediately, since we may reuse and need to re-insert
        // them back into the DOM anyway.
        let removed = new Set();
        for (let key of toRemove.keys()){
            let view = this._visibleViews.get(key);
            if (view) {
                removed.add(view);
                this._visibleViews.delete(key);
                // If we are in the middle of a transaction, wait until the end
                // of the animations to remove the views from the DOM. Also means
                // we can't reuse those views immediately.
                if (this._transaction) this._transaction.toRemove.set(key, view);
                else this.reuseView(view);
            }
        }
        for (let key1 of toAdd.keys()){
            let layoutInfo = visibleLayoutInfos.get(key1);
            let view;
            // If we're in a transaction, and a layout change happens
            // during the animations such that a view that was going
            // to be removed is now not, we don't create a new view
            // since the old one is still in the DOM, marked as toRemove.
            if (this._transaction) {
                // if transaction, get initial layout attributes for the animation
                if (this._transaction.initialLayoutInfo.has(key1)) layoutInfo = this._transaction.initialLayoutInfo.get(key1);
                view = this._transaction.toRemove.get(key1);
                if (view) {
                    this._transaction.toRemove.delete(key1);
                    this._applyLayoutInfo(view, layoutInfo);
                }
            }
            if (!view) {
                // Create or reuse a view for this row
                view = this.getReusableView(layoutInfo);
                // Add the view to the DOM if needed
                if (!removed.has(view)) this._children.add(view);
            }
            this._visibleViews.set(key1, view);
            removed.delete(view);
        }
        for (let key2 of toUpdate){
            let view = currentlyVisible.get(key2);
            this._renderedContent.delete(key2);
            this._renderView(view);
        }
        // Remove the remaining rows to delete from the DOM
        if (!this._transaction) this.removeViews(removed);
        this._correctItemOrder();
        this._flushVisibleViews();
        let hasLayoutUpdates = this._transaction && (toAdd.size > 0 || toRemove.size > 0 || this._hasLayoutUpdates());
        if (hasLayoutUpdates) requestAnimationFrame(()=>{
            // If we're in a transaction, apply animations to visible views
            // and "to be removed" views, which animate off screen.
            if (this._transaction) requestAnimationFrame(()=>this._applyLayoutInfos()
            );
        });
        return hasLayoutUpdates;
    }
    afterRender() {
        if (this.shouldOverscan) this._overscanManager.collectMetrics();
    }
    _flushVisibleViews() {
        // CollectionVirtualizer deals with a flattened set of LayoutInfos, but they can represent heirarchy
        // by referencing a parentKey. Just before rendering the visible views, we rebuild this heirarchy
        // by creating a mapping of views by parent key and recursively calling the delegate's renderWrapper
        // method to build the final tree.
        let viewsByParentKey = new Map([
            [
                null,
                []
            ]
        ]);
        for (let view1 of this._children){
            if (!viewsByParentKey.has(view1.layoutInfo.parentKey)) viewsByParentKey.set(view1.layoutInfo.parentKey, []);
            viewsByParentKey.get(view1.layoutInfo.parentKey).push(view1);
            if (!viewsByParentKey.has(view1.layoutInfo.key)) viewsByParentKey.set(view1.layoutInfo.key, []);
        }
        let buildTree = (parent, views)=>views.map((view)=>{
                let children = viewsByParentKey.get(view.layoutInfo.key);
                return this.delegate.renderWrapper(parent, view, children, (childViews)=>buildTree(view, childViews)
                );
            })
        ;
        let children1 = buildTree(null, viewsByParentKey.get(null));
        this.delegate.setVisibleViews(children1);
    }
    _applyLayoutInfo(view, layoutInfo) {
        if (view.layoutInfo === layoutInfo) return false;
        view.layoutInfo = layoutInfo;
        return true;
    }
    _applyLayoutInfos() {
        let updated = false;
        // Apply layout infos to visible views
        for (let view of this._visibleViews.values()){
            let cur = view.layoutInfo;
            if (cur) {
                let layoutInfo = this.layout.getLayoutInfo(cur.key);
                if (this._applyLayoutInfo(view, layoutInfo)) updated = true;
            }
        }
        // Apply final layout infos for views that will be removed
        if (this._transaction) {
            for (let view of this._transaction.toRemove.values()){
                let cur = view.layoutInfo;
                let layoutInfo = this.layout.getLayoutInfo(cur.key);
                if (this._applyLayoutInfo(view, layoutInfo)) updated = true;
            }
            for (let view2 of this._transaction.removed.values()){
                let cur = view2.layoutInfo;
                let layoutInfo = this._transaction.finalLayoutInfo.get(cur.key) || cur;
                layoutInfo = this.layout.getFinalLayoutInfo(layoutInfo.copy());
                if (this._applyLayoutInfo(view2, layoutInfo)) updated = true;
            }
        }
        if (updated) this._flushVisibleViews();
    }
    _hasLayoutUpdates() {
        if (!this._transaction) return false;
        for (let view of this._visibleViews.values()){
            let cur = view.layoutInfo;
            if (!cur) return true;
            let layoutInfo = this.layout.getLayoutInfo(cur.key);
            if (// Uses equals rather than pointEquals so that width/height changes are taken into account
            !cur.rect.equals(layoutInfo.rect) || cur.opacity !== layoutInfo.opacity || cur.transform !== layoutInfo.transform) return true;
        }
        return false;
    }
    reuseView(view) {
        view.prepareForReuse();
        this._reusableViews[view.viewType].push(view);
    }
    removeViews(toRemove) {
        for (let view of toRemove)this._children.delete(view);
    }
    updateItemSize(key, size) {
        // TODO: we should be able to invalidate a single index path
        // @ts-ignore
        if (!this.layout.updateItemSize) return;
        // If the scroll position is currently animating, add the update
        // to a queue to be processed after the animation is complete.
        if (this._scrollAnimation) {
            this._sizeUpdateQueue.set(key, size);
            return;
        }
        // @ts-ignore
        let changed = this.layout.updateItemSize(key, size);
        if (changed) this.relayout();
    }
    startScrolling() {
        this._isScrolling = true;
    }
    endScrolling() {
        this._isScrolling = false;
        this._correctItemOrder();
        this._flushVisibleViews();
    }
    _resetAnimatedContentOffset() {
        // Reset the animated content offset of subviews. See comment in relayoutNow for details.
        if (!this._animatedContentOffset.isOrigin()) {
            this._animatedContentOffset = new $3041db3296945e6e$export$baf26146a414f24a(0, 0);
            this._applyLayoutInfos();
        }
    }
    /**
   * Scrolls the item with the given key into view, optionally with an animation.
   * @param key The key of the item to scroll into view.
   * @param duration The duration of the scroll animation.
   */ scrollToItem(key, options) {
        // key can be 0, so check if null or undefined
        if (key == null) return;
        let layoutInfo = this.layout.getLayoutInfo(key);
        if (!layoutInfo) return;
        let { duration: duration = 300 , shouldScrollX: shouldScrollX = true , shouldScrollY: shouldScrollY = true , offsetX: offsetX = 0 , offsetY: offsetY = 0  } = options;
        let x = this.visibleRect.x;
        let y = this.visibleRect.y;
        let minX = layoutInfo.rect.x - offsetX;
        let minY = layoutInfo.rect.y - offsetY;
        let maxX = x + this.visibleRect.width;
        let maxY = y + this.visibleRect.height;
        if (shouldScrollX) {
            if (minX <= x || maxX === 0) x = minX;
            else if (layoutInfo.rect.maxX > maxX) x += layoutInfo.rect.maxX - maxX;
        }
        if (shouldScrollY) {
            if (minY <= y || maxY === 0) y = minY;
            else if (layoutInfo.rect.maxY > maxY) y += layoutInfo.rect.maxY - maxY;
        }
        return this.scrollTo(new $3041db3296945e6e$export$baf26146a414f24a(x, y), duration);
    }
    /**
   * Performs an animated scroll to the given offset.
   * @param offset - The offset to scroll to.
   * @param duration The duration of the animation.
   * @returns A promise that resolves when the animation is complete.
   */ scrollTo(offset1, duration = 300) {
        // Cancel the current scroll animation
        if (this._scrollAnimation) {
            this._scrollAnimation.cancel();
            this._scrollAnimation = null;
        }
        // Set the content offset synchronously if the duration is zero
        if (duration <= 0 || this.visibleRect.pointEquals(offset1)) {
            this._setContentOffset(offset1);
            return Promise.resolve();
        }
        this.startScrolling();
        this._scrollAnimation = $3eb131dcf37ad5f8$export$dc0b63720788090c(this.visibleRect, offset1, duration, $3eb131dcf37ad5f8$export$57636bb43b1ccbb0, (offset)=>{
            this._setContentOffset(offset);
        });
        this._scrollAnimation.then(()=>{
            this._scrollAnimation = null;
            // Process view size updates that occurred during the animation.
            // Only views that are still visible will be actually updated.
            for (let [key, size] of this._sizeUpdateQueue)this.updateItemSize(key, size);
            this._sizeUpdateQueue.clear();
            this.relayout();
            this._processTransactionQueue();
            this.endScrolling();
        });
        return this._scrollAnimation;
    }
    _runTransaction(action, animated) {
        this._startTransaction();
        if (this._nextTransaction) this._nextTransaction.actions.push(action);
        this._endTransaction(animated);
    }
    _startTransaction() {
        if (!this._nextTransaction) this._nextTransaction = new $8e135e531d8dcb66$export$febc5573c75cefb0;
        this._nextTransaction.level++;
    }
    _endTransaction(animated) {
        if (!this._nextTransaction) return false;
        // Save whether the transaction should be animated.
        if (animated != null) this._nextTransaction.animated = animated;
        // If we haven't reached level 0, we are still in a
        // nested transaction. Wait for the parent to end.
        if (--this._nextTransaction.level > 0) return false;
        // Do nothing for empty transactions
        if (this._nextTransaction.actions.length === 0) {
            this._nextTransaction = null;
            return false;
        }
        // Default animations to true
        if (this._nextTransaction.animated == null) this._nextTransaction.animated = true;
        // Enqueue the transaction
        this._transactionQueue.push(this._nextTransaction);
        this._nextTransaction = null;
        this._processTransactionQueue();
        return true;
    }
    _processTransactionQueue() {
        // If the current transaction is animating, wait until the end
        // to process the next transaction.
        if (this._transaction || this._scrollAnimation) return;
        let next = this._transactionQueue.shift();
        if (next) this._performTransaction(next);
    }
    _getContentRect() {
        return new $60423f92c7f9ad87$export$c79fc6492f3af13d(0, 0, this.contentSize.width, this.contentSize.height);
    }
    _performTransaction(transaction) {
        this._transaction = transaction;
        this.relayoutNow({
            transaction: transaction,
            animated: transaction.animated,
            beforeLayout: ()=>{
                // Get the initial layout infos for all views before the updates
                // so we can figure out which views to add and remove.
                if (transaction.animated) transaction.initialMap = this._getLayoutInfoMap(this._getContentRect(), true);
                // Apply the actions that occurred during this transaction
                for (let action of transaction.actions)action();
            },
            afterLayout: ()=>{
                // Get the final layout infos after the updates
                if (transaction.animated) {
                    transaction.finalMap = this._getLayoutInfoMap(this._getContentRect());
                    this._setupTransactionAnimations(transaction);
                } else this._transaction = null;
            },
            afterAnimation: ()=>{
                // Remove and reuse views when animations are done
                if (transaction.toRemove.size > 0 || transaction.removed.size > 0) for (let view of $fc36f9a046a9ce79$export$cfc14088dfefce5f(transaction.toRemove.values(), transaction.removed.values())){
                    this._children.delete(view);
                    this.reuseView(view);
                }
                this._transaction = null;
                // Ensure DOM order is correct for accessibility after animations are complete
                this._correctItemOrder();
                this._flushVisibleViews();
                this._processTransactionQueue();
            }
        });
    }
    _setupTransactionAnimations(transaction) {
        let { initialMap: initialMap , finalMap: finalMap  } = transaction;
        // Store initial and final layout infos for animations
        for (let [key, layoutInfo] of initialMap)if (finalMap.has(key)) // Store the initial layout info for use during animations.
        transaction.initialLayoutInfo.set(key, layoutInfo);
        else // This view was removed. Store the layout info for use
        // in Layout#getFinalLayoutInfo during animations.
        transaction.finalLayoutInfo.set(layoutInfo.key, layoutInfo);
        // Get initial layout infos for views that were added
        for (let [key3, layoutInfo1] of finalMap)if (!initialMap.has(key3)) {
            let initialLayoutInfo = this.layout.getInitialLayoutInfo(layoutInfo1.copy());
            transaction.initialLayoutInfo.set(key3, initialLayoutInfo);
        }
        // Figure out which views were removed.
        for (let [key4, view] of this._visibleViews)// If an item has a width of 0, there is no need to remove it from the _visibleViews.
        // Removing an item with  width of 0 can cause a loop where the item gets added, removed,
        // added, removed... etc in a loop. The resize buffer ("spooky column") often has a width of 0.
        if (!finalMap.has(key4) && view.layoutInfo.rect.width > 0) {
            transaction.removed.set(key4, view);
            this._visibleViews.delete(key4);
            // In case something weird happened, where we have a view but no
            // initial layout info, use the one attached to the view.
            if (view.layoutInfo) {
                if (!transaction.finalLayoutInfo.has(view.layoutInfo.key)) transaction.finalLayoutInfo.set(view.layoutInfo.key, view.layoutInfo);
            }
        }
    }
    constructor(options = {
    }){
        this._contentSize = new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec;
        this._visibleRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d;
        this._reusableViews = {
        };
        this._visibleLayoutInfos = new Map();
        this._visibleViews = new Map();
        this._renderedContent = new WeakMap();
        this._children = new Set();
        this._invalidationContext = null;
        this._overscanManager = new $364191b3decf3697$export$4455ee6afb38dcbb();
        this._scrollAnimation = null;
        this._isScrolling = false;
        this._sizeUpdateQueue = new Map();
        this._animatedContentOffset = new $3041db3296945e6e$export$baf26146a414f24a(0, 0);
        this._transaction = null;
        this._nextTransaction = null;
        this._transactionQueue = [];
        var _transitionDuration;
        // Set options from passed object if given
        this.transitionDuration = (_transitionDuration = options.transitionDuration) !== null && _transitionDuration !== void 0 ? _transitionDuration : 500;
        this.anchorScrollPosition = options.anchorScrollPosition || false;
        this.anchorScrollPositionAtTop = options.anchorScrollPositionAtTop || false;
        this.shouldOverscan = options.shouldOverscan !== false;
        for (let key of [
            'delegate',
            'size',
            'layout',
            'collection'
        ])if (options[key]) this[key] = options[key];
    }
}


function $fc0b13b484ac1194$export$1505db82fe357e65(opts) {
    let [visibleViews, setVisibleViews] = useState([]);
    let [contentSize, setContentSize] = useState(new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec());
    let [isAnimating, setAnimating] = useState(false);
    let [isScrolling, setScrolling] = useState(false);
    let virtualizer = useMemo(()=>new $38b9490c1cca8fc4$export$89be5a243e59c4b2()
    , []);
    virtualizer.delegate = {
        setVisibleViews: setVisibleViews,
        setVisibleRect (rect) {
            virtualizer.visibleRect = rect;
            opts.onVisibleRectChange(rect);
        },
        setContentSize: setContentSize,
        renderView: opts.renderView,
        renderWrapper: opts.renderWrapper,
        beginAnimations: ()=>setAnimating(true)
        ,
        endAnimations: ()=>setAnimating(false)
        ,
        getScrollAnchor: opts.getScrollAnchor
    };
    virtualizer.layout = opts.layout;
    virtualizer.collection = opts.collection;
    virtualizer.transitionDuration = opts.transitionDuration;
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        virtualizer.afterRender();
    });
    // eslint-disable-next-line arrow-body-style
    useEffect(()=>{
        return ()=>virtualizer.willUnmount()
        ;
    }, []);
    return {
        virtualizer: virtualizer,
        visibleViews: visibleViews,
        setVisibleRect: useCallback((rect)=>{
            virtualizer.visibleRect = rect;
        }, [
            virtualizer
        ]),
        contentSize: contentSize,
        isAnimating: isAnimating,
        isScrolling: isScrolling,
        startScrolling: useCallback(()=>{
            virtualizer.startScrolling();
            setScrolling(true);
        }, [
            virtualizer
        ]),
        endScrolling: useCallback(()=>{
            virtualizer.endScrolling();
            setScrolling(false);
        }, [
            virtualizer
        ])
    };
}

function $parcel$export$3(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault$1(a) {
  return a && a.__esModule ? a.default : a;
}
var $d1c300d9c497e402$exports = {};

$parcel$export$3($d1c300d9c497e402$exports, "GridKeyboardDelegate", () => $d1c300d9c497e402$export$de9feff04fda126e);

class $d1c300d9c497e402$export$de9feff04fda126e {
    isCell(node) {
        return node.type === 'cell';
    }
    isRow(node) {
        return node.type === 'row' || node.type === 'item';
    }
    findPreviousKey(fromKey, pred) {
        let key = fromKey != null ? this.collection.getKeyBefore(fromKey) : this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (!pred || pred(item)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    findNextKey(fromKey, pred) {
        let key = fromKey != null ? this.collection.getKeyAfter(fromKey) : this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (!pred || pred(item)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getKeyBelow(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus was on a cell, start searching from the parent row
        if (this.isCell(startItem)) key = startItem.parentKey;
        // Find the next item
        key = this.findNextKey(key);
        if (key != null) {
            // If focus was on a cell, focus the cell with the same index in the next row.
            if (this.isCell(startItem)) {
                let item = this.collection.getItem(key);
                return [
                    ...item.childNodes
                ][startItem.index].key;
            }
            // Otherwise, focus the next row
            if (this.focusMode === 'row') return key;
        }
    }
    getKeyAbove(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus is on a cell, start searching from the parent row
        if (this.isCell(startItem)) key = startItem.parentKey;
        // Find the previous item
        key = this.findPreviousKey(key);
        if (key != null) {
            // If focus was on a cell, focus the cell with the same index in the previous row.
            if (this.isCell(startItem)) {
                let item = this.collection.getItem(key);
                return [
                    ...item.childNodes
                ][startItem.index].key;
            }
            // Otherwise, focus the previous row
            if (this.focusMode === 'row') return key;
        }
    }
    getKeyRightOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus is on a row, focus the first child cell.
        if (this.isRow(item)) {
            let children = [
                ...item.childNodes
            ];
            return this.direction === 'rtl' ? children[children.length - 1].key : children[0].key;
        }
        // If focus is on a cell, focus the next cell if any,
        // otherwise focus the parent row.
        if (this.isCell(item)) {
            let parent = this.collection.getItem(item.parentKey);
            let children = [
                ...parent.childNodes
            ];
            let next = this.direction === 'rtl' ? children[item.index - 1] : children[item.index + 1];
            if (next) return next.key;
            // focus row only if focusMode is set to row
            if (this.focusMode === 'row') return item.parentKey;
            return this.direction === 'rtl' ? this.getFirstKey(key) : this.getLastKey(key);
        }
    }
    getKeyLeftOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus is on a row, focus the last child cell.
        if (this.isRow(item)) {
            let children = [
                ...item.childNodes
            ];
            return this.direction === 'rtl' ? children[0].key : children[children.length - 1].key;
        }
        // If focus is on a cell, focus the previous cell if any,
        // otherwise focus the parent row.
        if (this.isCell(item)) {
            let parent = this.collection.getItem(item.parentKey);
            let children = [
                ...parent.childNodes
            ];
            let prev = this.direction === 'rtl' ? children[item.index + 1] : children[item.index - 1];
            if (prev) return prev.key;
            // focus row only if focusMode is set to row
            if (this.focusMode === 'row') return item.parentKey;
            return this.direction === 'rtl' ? this.getLastKey(key) : this.getFirstKey(key);
        }
    }
    getFirstKey(key, global) {
        let item;
        if (key != null) {
            item = this.collection.getItem(key);
            if (!item) return;
            // If global flag is not set, and a cell is currently focused,
            // move focus to the first cell in the parent row.
            if (this.isCell(item) && !global) {
                let parent = this.collection.getItem(item.parentKey);
                return [
                    ...parent.childNodes
                ][0].key;
            }
        }
        // Find the first row
        key = this.findNextKey();
        // If global flag is set (or if focus mode is cell), focus the first cell in the first row.
        if (key != null && item && this.isCell(item) && global || this.focusMode === 'cell') {
            let item = this.collection.getItem(key);
            key = [
                ...item.childNodes
            ][0].key;
        }
        // Otherwise, focus the row itself.
        return key;
    }
    getLastKey(key, global) {
        let item;
        if (key != null) {
            item = this.collection.getItem(key);
            if (!item) return;
            // If global flag is not set, and a cell is currently focused,
            // move focus to the last cell in the parent row.
            if (this.isCell(item) && !global) {
                let parent = this.collection.getItem(item.parentKey);
                let children = [
                    ...parent.childNodes
                ];
                return children[children.length - 1].key;
            }
        }
        // Find the last row
        key = this.findPreviousKey();
        // If global flag is set (or if focus mode is cell), focus the last cell in the last row.
        if (key != null && item && this.isCell(item) && global || this.focusMode === 'cell') {
            let item = this.collection.getItem(key);
            let children = [
                ...item.childNodes
            ];
            key = children[children.length - 1].key;
        }
        // Otherwise, focus the row itself.
        return key;
    }
    getItem(key) {
        return this.ref.current.querySelector(`[data-key="${key}"]`);
    }
    getItemRect(key) {
        var ref;
        if (this.layout) return (ref = this.layout.getLayoutInfo(key)) === null || ref === void 0 ? void 0 : ref.rect;
        let item = this.getItem(key);
        if (item) return new $60423f92c7f9ad87$export$c79fc6492f3af13d(item.offsetLeft, item.offsetTop, item.offsetWidth, item.offsetHeight);
    }
    getPageHeight() {
        var ref, ref1, ref2;
        if (this.layout) return (ref = this.layout.virtualizer) === null || ref === void 0 ? void 0 : ref.visibleRect.height;
        return (ref1 = this.ref) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.current) === null || ref2 === void 0 ? void 0 : ref2.offsetHeight;
    }
    getContentHeight() {
        var ref, ref3;
        if (this.layout) return this.layout.getContentSize().height;
        return (ref = this.ref) === null || ref === void 0 ? void 0 : (ref3 = ref.current) === null || ref3 === void 0 ? void 0 : ref3.scrollHeight;
    }
    getKeyPageAbove(key) {
        let itemRect = this.getItemRect(key);
        if (!itemRect) return null;
        let pageY = Math.max(0, itemRect.maxY - this.getPageHeight());
        while(itemRect && itemRect.y > pageY){
            key = this.getKeyAbove(key);
            itemRect = this.getItemRect(key);
        }
        return key;
    }
    getKeyPageBelow(key) {
        let itemRect = this.getItemRect(key);
        if (!itemRect) return null;
        let pageHeight = this.getPageHeight();
        let pageY = Math.min(this.getContentHeight(), itemRect.y + pageHeight);
        while(itemRect && itemRect.maxY < pageY){
            let nextKey = this.getKeyBelow(key);
            itemRect = this.getItemRect(nextKey);
            // Guard against case where maxY of the last key is barely less than pageY due to rounding
            // and thus it attempts to set key to null
            if (nextKey != null) key = nextKey;
        }
        return key;
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey !== null && fromKey !== void 0 ? fromKey : this.getFirstKey();
        // If the starting key is a cell, search from its parent row.
        let startItem = collection.getItem(key);
        if (startItem.type === 'cell') key = startItem.parentKey;
        let hasWrapped = false;
        while(key != null){
            let item = collection.getItem(key);
            // check row text value for match
            if (item.textValue) {
                let substring = item.textValue.slice(0, search.length);
                if (this.collator.compare(substring, search) === 0) {
                    if (this.isRow(item) && this.focusMode === 'cell') return [
                        ...item.childNodes
                    ][0].key;
                    return item.key;
                }
            }
            key = this.findNextKey(key);
            // Wrap around when reaching the end of the collection
            if (key == null && !hasWrapped) {
                key = this.getFirstKey();
                hasWrapped = true;
            }
        }
        return null;
    }
    constructor(options){
        this.collection = options.collection;
        this.disabledKeys = options.disabledKeys;
        this.ref = options.ref;
        this.direction = options.direction;
        this.collator = options.collator;
        this.layout = options.layout;
        this.focusMode = options.focusMode || 'row';
    }
}


var $83c6e2eafa584c67$exports = {};

$parcel$export$3($83c6e2eafa584c67$exports, "useGrid", () => $83c6e2eafa584c67$export$f6b86a04e5d66d90);


const $1af922eb41e03c8f$export$e6235c0d09b995d0 = new WeakMap();




var $92599c3fd427b763$exports = {};

$parcel$export$3($92599c3fd427b763$exports, "useGridSelectionAnnouncement", () => $92599c3fd427b763$export$137e594ef3218a10);

var $1dbe5ffd32adb38c$exports = {};
var $682989befd4f478d$exports = {};
$682989befd4f478d$exports = JSON.parse("{\"deselectedItem\":\"{item} غير المحدد\",\"longPressToSelect\":\"اضغط مطولًا للدخول إلى وضع التحديد.\",\"select\":\"تحديد\",\"selectedAll\":\"جميع العناصر المحددة.\",\"selectedCount\":\"{count, plural, =0 {لم يتم تحديد عناصر} one {# عنصر محدد} other {# عنصر محدد}}.\",\"selectedItem\":\"{item} المحدد\"}");


var $f7fca02019afd941$exports = {};
$f7fca02019afd941$exports = JSON.parse("{\"deselectedItem\":\"{item} не е избран.\",\"longPressToSelect\":\"Натиснете и задръжте за да влезете в избирателен режим.\",\"select\":\"Изберете\",\"selectedAll\":\"Всички елементи са избрани.\",\"selectedCount\":\"{count, plural, =0 {Няма избрани елементи} one {# избран елемент} other {# избрани елементи}}.\",\"selectedItem\":\"{item} избран.\"}");


var $8f86f40be75387f1$exports = {};
$8f86f40be75387f1$exports = JSON.parse("{\"deselectedItem\":\"Položka {item} není vybrána.\",\"longPressToSelect\":\"Dlouhým stisknutím přejdete do režimu výběru.\",\"select\":\"Vybrat\",\"selectedAll\":\"Vybrány všechny položky.\",\"selectedCount\":\"{count, plural, =0 {Nevybrány žádné položky} one {Vybrána # položka} other {Vybráno # položek}}.\",\"selectedItem\":\"Vybrána položka {item}.\"}");


var $db24ba43c8d652ee$exports = {};
$db24ba43c8d652ee$exports = JSON.parse("{\"deselectedItem\":\"{item} ikke valgt.\",\"longPressToSelect\":\"Lav et langt tryk for at aktivere valgtilstand.\",\"select\":\"Vælg\",\"selectedAll\":\"Alle elementer valgt.\",\"selectedCount\":\"{count, plural, =0 {Ingen elementer valgt} one {# element valgt} other {# elementer valgt}}.\",\"selectedItem\":\"{item} valgt.\"}");


var $f8f1e72c8b5447d6$exports = {};
$f8f1e72c8b5447d6$exports = JSON.parse("{\"deselectedItem\":\"{item} nicht ausgewählt.\",\"longPressToSelect\":\"Gedrückt halten, um Auswahlmodus zu öffnen.\",\"select\":\"Auswählen\",\"selectedAll\":\"Alle Elemente ausgewählt.\",\"selectedCount\":\"{count, plural, =0 {Keine Elemente ausgewählt} one {# Element ausgewählt} other {# Elemente ausgewählt}}.\",\"selectedItem\":\"{item} ausgewählt.\"}");


var $9a73ed2983c3ab0b$exports = {};
$9a73ed2983c3ab0b$exports = JSON.parse("{\"deselectedItem\":\"Δεν επιλέχθηκε το στοιχείο {item}.\",\"longPressToSelect\":\"Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.\",\"select\":\"Επιλογή\",\"selectedAll\":\"Επιλέχθηκαν όλα τα στοιχεία.\",\"selectedCount\":\"{count, plural, =0 {Δεν επιλέχθηκαν στοιχεία} one {Επιλέχθηκε # στοιχείο} other {Επιλέχθηκαν # στοιχεία}}.\",\"selectedItem\":\"Επιλέχθηκε το στοιχείο {item}.\"}");


var $583de0b3587601b9$exports = {};
$583de0b3587601b9$exports = JSON.parse("{\"deselectedItem\":\"{item} not selected.\",\"select\":\"Select\",\"selectedCount\":\"{count, plural, =0 {No items selected} one {# item selected} other {# items selected}}.\",\"selectedAll\":\"All items selected.\",\"selectedItem\":\"{item} selected.\",\"longPressToSelect\":\"Long press to enter selection mode.\"}");


var $147159c978043442$exports = {};
$147159c978043442$exports = JSON.parse("{\"deselectedItem\":\"{item} no seleccionado.\",\"longPressToSelect\":\"Mantenga pulsado para abrir el modo de selección.\",\"select\":\"Seleccionar\",\"selectedAll\":\"Todos los elementos seleccionados.\",\"selectedCount\":\"{count, plural, =0 {Ningún elemento seleccionado} one {# elemento seleccionado} other {# elementos seleccionados}}.\",\"selectedItem\":\"{item} seleccionado.\"}");


var $5cbb62c8a19173ac$exports = {};
$5cbb62c8a19173ac$exports = JSON.parse("{\"deselectedItem\":\"{item} pole valitud.\",\"longPressToSelect\":\"Valikurežiimi sisenemiseks vajutage pikalt.\",\"select\":\"Vali\",\"selectedAll\":\"Kõik üksused valitud.\",\"selectedCount\":\"{count, plural, =0 {Üksusi pole valitud} one {# üksus valitud} other {# üksust valitud}}.\",\"selectedItem\":\"{item} valitud.\"}");


var $a33d71dc804cc59e$exports = {};
$a33d71dc804cc59e$exports = JSON.parse("{\"deselectedItem\":\"Kohdetta {item} ei valittu.\",\"longPressToSelect\":\"Siirry valintatilaan painamalla pitkään.\",\"select\":\"Valitse\",\"selectedAll\":\"Kaikki kohteet valittu.\",\"selectedCount\":\"{count, plural, =0 {Ei yhtään kohdetta valittu} one {# kohde valittu} other {# kohdetta valittu}}.\",\"selectedItem\":\"{item} valittu.\"}");


var $92d800447793d084$exports = {};
$92d800447793d084$exports = JSON.parse("{\"deselectedItem\":\"{item} non sélectionné.\",\"longPressToSelect\":\"Appuyez de manière prolongée pour passer en mode de sélection.\",\"select\":\"Sélectionner\",\"selectedAll\":\"Tous les éléments sélectionnés.\",\"selectedCount\":\"{count, plural, =0 {Aucun élément sélectionné} one {# élément sélectionné} other {# éléments sélectionnés}}.\",\"selectedItem\":\"{item} sélectionné.\"}");


var $fe732cdb32124ea8$exports = {};
$fe732cdb32124ea8$exports = JSON.parse("{\"deselectedItem\":\"{item} לא נבחר.\",\"longPressToSelect\":\"הקשה ארוכה לכניסה למצב בחירה.\",\"select\":\"בחר\",\"selectedAll\":\"כל הפריטים נבחרו.\",\"selectedCount\":\"{count, plural, =0 {לא נבחרו פריטים} one {פריט # נבחר} other {# פריטים נבחרו}}.\",\"selectedItem\":\"{item} נבחר.\"}");


var $e41234e934efb4f5$exports = {};
$e41234e934efb4f5$exports = JSON.parse("{\"deselectedItem\":\"Stavka {item} nije odabrana.\",\"longPressToSelect\":\"Dugo pritisnite za ulazak u način odabira.\",\"select\":\"Odaberite\",\"selectedAll\":\"Odabrane su sve stavke.\",\"selectedCount\":\"{count, plural, =0 {Nije odabrana nijedna stavka} one {Odabrana je # stavka} other {Odabrano je # stavki}}.\",\"selectedItem\":\"Stavka {item} je odabrana.\"}");


var $1b0393182473bf9e$exports = {};
$1b0393182473bf9e$exports = JSON.parse("{\"deselectedItem\":\"{item} nincs kijelölve.\",\"longPressToSelect\":\"Nyomja hosszan a kijelöléshez.\",\"select\":\"Kijelölés\",\"selectedAll\":\"Az összes elem kijelölve.\",\"selectedCount\":\"{count, plural, =0 {Egy elem sincs kijelölve} one {# elem kijelölve} other {# elem kijelölve}}.\",\"selectedItem\":\"{item} kijelölve.\"}");


var $2eed782c1c110ce7$exports = {};
$2eed782c1c110ce7$exports = JSON.parse("{\"deselectedItem\":\"{item} non selezionato.\",\"longPressToSelect\":\"Premi a lungo per passare alla modalità di selezione.\",\"select\":\"Seleziona\",\"selectedAll\":\"Tutti gli elementi selezionati.\",\"selectedCount\":\"{count, plural, =0 {Nessun elemento selezionato} one {# elemento selezionato} other {# elementi selezionati}}.\",\"selectedItem\":\"{item} selezionato.\"}");


var $8b5d459f86e9b23c$exports = {};
$8b5d459f86e9b23c$exports = JSON.parse("{\"deselectedItem\":\"{item} が選択されていません。\",\"longPressToSelect\":\"長押しして選択モードを開きます。\",\"select\":\"選択\",\"selectedAll\":\"すべての項目を選択しました。\",\"selectedCount\":\"{count, plural, =0 {項目が選択されていません} one {# 項目を選択しました} other {# 項目を選択しました}}。\",\"selectedItem\":\"{item} を選択しました。\"}");


var $1949c3ad17295fd4$exports = {};
$1949c3ad17295fd4$exports = JSON.parse("{\"deselectedItem\":\"{item}이(가) 선택되지 않았습니다.\",\"longPressToSelect\":\"선택 모드로 들어가려면 길게 누르십시오.\",\"select\":\"선택\",\"selectedAll\":\"모든 항목이 선택되었습니다.\",\"selectedCount\":\"{count, plural, =0 {선택된 항목이 없습니다} one {#개 항목이 선택되었습니다} other {#개 항목이 선택되었습니다}}.\",\"selectedItem\":\"{item}이(가) 선택되었습니다.\"}");


var $f5e3df4dc8aa7b54$exports = {};
$f5e3df4dc8aa7b54$exports = JSON.parse("{\"deselectedItem\":\"{item} nepasirinkta.\",\"longPressToSelect\":\"Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.\",\"select\":\"Pasirinkti\",\"selectedAll\":\"Pasirinkti visi elementai.\",\"selectedCount\":\"{count, plural, =0 {Nepasirinktas nė vienas elementas} one {Pasirinktas # elementas} other {Pasirinkta elementų: #}}.\",\"selectedItem\":\"Pasirinkta: {item}.\"}");


var $9dd86690a5c2b2c5$exports = {};
$9dd86690a5c2b2c5$exports = JSON.parse("{\"deselectedItem\":\"Vienums {item} nav atlasīts.\",\"longPressToSelect\":\"Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.\",\"select\":\"Atlasīt\",\"selectedAll\":\"Atlasīti visi vienumi.\",\"selectedCount\":\"{count, plural, =0 {Nav atlasīts neviens vienums} one {Atlasīto vienumu skaits: #} other {Atlasīto vienumu skaits: #}}.\",\"selectedItem\":\"Atlasīts vienums {item}.\"}");


var $843964c3bf9a7d24$exports = {};
$843964c3bf9a7d24$exports = JSON.parse("{\"deselectedItem\":\"{item} er ikke valgt.\",\"longPressToSelect\":\"Bruk et langt trykk for å gå inn i valgmodus.\",\"select\":\"Velg\",\"selectedAll\":\"Alle elementer er valgt.\",\"selectedCount\":\"{count, plural, =0 {Ingen elementer er valgt} one {# element er valgt} other {# elementer er valgt}}.\",\"selectedItem\":\"{item} er valgt.\"}");


var $73f50e845f9ef3b4$exports = {};
$73f50e845f9ef3b4$exports = JSON.parse("{\"deselectedItem\":\"{item} niet geselecteerd.\",\"longPressToSelect\":\"Druk lang om de selectiemodus te openen.\",\"select\":\"Selecteren\",\"selectedAll\":\"Alle items geselecteerd.\",\"selectedCount\":\"{count, plural, =0 {Geen items geselecteerd} one {# item geselecteerd} other {# items geselecteerd}}.\",\"selectedItem\":\"{item} geselecteerd.\"}");


var $87f92a7e077514b2$exports = {};
$87f92a7e077514b2$exports = JSON.parse("{\"deselectedItem\":\"Nie zaznaczono {item}.\",\"longPressToSelect\":\"Naciśnij i przytrzymaj, aby wejść do trybu wyboru.\",\"select\":\"Zaznacz\",\"selectedAll\":\"Wszystkie zaznaczone elementy.\",\"selectedCount\":\"{count, plural, =0 {Nie zaznaczono żadnych elementów} one {# zaznaczony element} other {# zaznaczonych elementów}}.\",\"selectedItem\":\"Zaznaczono {item}.\"}");


var $c28c98d58ee9ff6f$exports = {};
$c28c98d58ee9ff6f$exports = JSON.parse("{\"deselectedItem\":\"{item} não selecionado.\",\"longPressToSelect\":\"Mantenha pressionado para entrar no modo de seleção.\",\"select\":\"Selecionar\",\"selectedAll\":\"Todos os itens selecionados.\",\"selectedCount\":\"{count, plural, =0 {Nenhum item selecionado} one {# item selecionado} other {# itens selecionados}}.\",\"selectedItem\":\"{item} selecionado.\"}");


var $b6b1503b17b2254d$exports = {};
$b6b1503b17b2254d$exports = JSON.parse("{\"deselectedItem\":\"{item} não selecionado.\",\"longPressToSelect\":\"Prima continuamente para entrar no modo de seleção.\",\"select\":\"Selecionar\",\"selectedAll\":\"Todos os itens selecionados.\",\"selectedCount\":\"{count, plural, =0 {Nenhum item selecionado} one {# item selecionado} other {# itens selecionados}}.\",\"selectedItem\":\"{item} selecionado.\"}");


var $8bdaeb71e50c3e1a$exports = {};
$8bdaeb71e50c3e1a$exports = JSON.parse("{\"deselectedItem\":\"{item} neselectat.\",\"longPressToSelect\":\"Apăsați lung pentru a intra în modul de selectare.\",\"select\":\"Selectare\",\"selectedAll\":\"Toate elementele selectate.\",\"selectedCount\":\"{count, plural, =0 {Niciun element selectat} one {# element selectat} other {# elemente selectate}}.\",\"selectedItem\":\"{item} selectat.\"}");


var $ec2b852dd7c3d1f2$exports = {};
$ec2b852dd7c3d1f2$exports = JSON.parse("{\"deselectedItem\":\"{item} не выбрано.\",\"longPressToSelect\":\"Нажмите и удерживайте для входа в режим выбора.\",\"select\":\"Выбрать\",\"selectedAll\":\"Выбраны все элементы.\",\"selectedCount\":\"{count, plural, =0 {Нет выбранных элементов} one {# элемент выбран} other {# элементов выбрано}}.\",\"selectedItem\":\"{item} выбрано.\"}");


var $79e6d900d6a4f82d$exports = {};
$79e6d900d6a4f82d$exports = JSON.parse("{\"deselectedItem\":\"Nevybraté položky: {item}.\",\"longPressToSelect\":\"Dlhším stlačením prejdite do režimu výberu.\",\"select\":\"Vybrať\",\"selectedAll\":\"Všetky vybraté položky.\",\"selectedCount\":\"{count, plural, =0 {Žiadne vybraté položky} one {# vybratá položka} other {Počet vybratých položiek:#}}.\",\"selectedItem\":\"Vybraté položky: {item}.\"}");


var $f4c1f0d5d4d03d80$exports = {};
$f4c1f0d5d4d03d80$exports = JSON.parse("{\"deselectedItem\":\"Element {item} ni izbran.\",\"longPressToSelect\":\"Za izbirni način pritisnite in dlje časa držite.\",\"select\":\"Izberite\",\"selectedAll\":\"Vsi elementi so izbrani.\",\"selectedCount\":\"{count, plural, =0 {Noben element ni izbran} one {# element je izbran} other {# elementov je izbranih}}.\",\"selectedItem\":\"Element {item} je izbran.\"}");


var $46252cd87269b10b$exports = {};
$46252cd87269b10b$exports = JSON.parse("{\"deselectedItem\":\"{item} nije izabrano.\",\"longPressToSelect\":\"Dugo pritisnite za ulazak u režim biranja.\",\"select\":\"Izaberite\",\"selectedAll\":\"Izabrane su sve stavke.\",\"selectedCount\":\"{count, plural, =0 {Nije izabrana nijedna stavka} one {Izabrana je # stavka} other {Izabrano je # stavki}}.\",\"selectedItem\":\"{item} je izabrano.\"}");


var $d4d5d8dab362555c$exports = {};
$d4d5d8dab362555c$exports = JSON.parse("{\"deselectedItem\":\"{item} ej markerat.\",\"longPressToSelect\":\"Tryck länge när du vill öppna väljarläge.\",\"select\":\"Markera\",\"selectedAll\":\"Alla markerade objekt.\",\"selectedCount\":\"{count, plural, =0 {Inga markerade objekt} one {# markerat objekt} other {# markerade objekt}}.\",\"selectedItem\":\"{item} markerat.\"}");


var $3d55d1f97c377e83$exports = {};
$3d55d1f97c377e83$exports = JSON.parse("{\"deselectedItem\":\"{item} seçilmedi.\",\"longPressToSelect\":\"Seçim moduna girmek için uzun basın.\",\"select\":\"Seç\",\"selectedAll\":\"Tüm ögeler seçildi.\",\"selectedCount\":\"{count, plural, =0 {Hiçbir öge seçilmedi} one {# öge seçildi} other {# öge seçildi}}.\",\"selectedItem\":\"{item} seçildi.\"}");


var $5368512f1c703a3f$exports = {};
$5368512f1c703a3f$exports = JSON.parse("{\"deselectedItem\":\"{item} не вибрано.\",\"longPressToSelect\":\"Виконайте довге натиснення, щоб перейти в режим вибору.\",\"select\":\"Вибрати\",\"selectedAll\":\"Усі елементи вибрано.\",\"selectedCount\":\"{count, plural, =0 {Жодних елементів не вибрано} one {# елемент вибрано} other {Вибрано елементів: #}}.\",\"selectedItem\":\"{item} вибрано.\"}");


var $f1316b1074463583$exports = {};
$f1316b1074463583$exports = JSON.parse("{\"deselectedItem\":\"未选择 {item}。\",\"longPressToSelect\":\"长按以进入选择模式。\",\"select\":\"选择\",\"selectedAll\":\"已选择所有项目。\",\"selectedCount\":\"{count, plural, =0 {未选择项目} one {已选择 # 个项目} other {已选择 # 个项目}}。\",\"selectedItem\":\"已选择 {item}。\"}");


var $7e60654723031b6f$exports = {};
$7e60654723031b6f$exports = JSON.parse("{\"deselectedItem\":\"未選取「{item}」。\",\"longPressToSelect\":\"長按以進入選擇模式。\",\"select\":\"選取\",\"selectedAll\":\"已選取所有項目。\",\"selectedCount\":\"{count, plural, =0 {未選取任何項目} one {已選取 # 個項目} other {已選取 # 個項目}}。\",\"selectedItem\":\"已選取「{item}」。\"}");


$1dbe5ffd32adb38c$exports = {
    "ar-AE": $682989befd4f478d$exports,
    "bg-BG": $f7fca02019afd941$exports,
    "cs-CZ": $8f86f40be75387f1$exports,
    "da-DK": $db24ba43c8d652ee$exports,
    "de-DE": $f8f1e72c8b5447d6$exports,
    "el-GR": $9a73ed2983c3ab0b$exports,
    "en-US": $583de0b3587601b9$exports,
    "es-ES": $147159c978043442$exports,
    "et-EE": $5cbb62c8a19173ac$exports,
    "fi-FI": $a33d71dc804cc59e$exports,
    "fr-FR": $92d800447793d084$exports,
    "he-IL": $fe732cdb32124ea8$exports,
    "hr-HR": $e41234e934efb4f5$exports,
    "hu-HU": $1b0393182473bf9e$exports,
    "it-IT": $2eed782c1c110ce7$exports,
    "ja-JP": $8b5d459f86e9b23c$exports,
    "ko-KR": $1949c3ad17295fd4$exports,
    "lt-LT": $f5e3df4dc8aa7b54$exports,
    "lv-LV": $9dd86690a5c2b2c5$exports,
    "nb-NO": $843964c3bf9a7d24$exports,
    "nl-NL": $73f50e845f9ef3b4$exports,
    "pl-PL": $87f92a7e077514b2$exports,
    "pt-BR": $c28c98d58ee9ff6f$exports,
    "pt-PT": $b6b1503b17b2254d$exports,
    "ro-RO": $8bdaeb71e50c3e1a$exports,
    "ru-RU": $ec2b852dd7c3d1f2$exports,
    "sk-SK": $79e6d900d6a4f82d$exports,
    "sl-SI": $f4c1f0d5d4d03d80$exports,
    "sr-SP": $46252cd87269b10b$exports,
    "sv-SE": $d4d5d8dab362555c$exports,
    "tr-TR": $3d55d1f97c377e83$exports,
    "uk-UA": $5368512f1c703a3f$exports,
    "zh-CN": $f1316b1074463583$exports,
    "zh-TW": $7e60654723031b6f$exports
};





function $92599c3fd427b763$export$137e594ef3218a10(props, state) {
    let { getRowText: getRowText = (key)=>{
        var ref;
        return (ref = state.collection.getItem(key)) === null || ref === void 0 ? void 0 : ref.textValue;
    }  } = props;
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$1($1dbe5ffd32adb38c$exports)));
    // Many screen readers do not announce when items in a grid are selected/deselected.
    // We do this using an ARIA live region.
    let selection = state.selectionManager.rawSelection;
    let lastSelection = useRef(selection);
    $4f58c5f72bcf79f7$export$496315a1608d9602(()=>{
        var ref;
        if (!state.selectionManager.isFocused) {
            lastSelection.current = selection;
            return;
        }
        let addedKeys = $92599c3fd427b763$var$diffSelection(selection, lastSelection.current);
        let removedKeys = $92599c3fd427b763$var$diffSelection(lastSelection.current, selection);
        // If adding or removing a single row from the selection, announce the name of that item.
        let isReplace = state.selectionManager.selectionBehavior === 'replace';
        let messages = [];
        if (state.selectionManager.selectedKeys.size === 1 && isReplace) {
            if (state.collection.getItem(state.selectionManager.selectedKeys.keys().next().value)) {
                let currentSelectionText = getRowText(state.selectionManager.selectedKeys.keys().next().value);
                if (currentSelectionText) messages.push(formatMessage('selectedItem', {
                    item: currentSelectionText
                }));
            }
        } else if (addedKeys.size === 1 && removedKeys.size === 0) {
            let addedText = getRowText(addedKeys.keys().next().value);
            if (addedText) messages.push(formatMessage('selectedItem', {
                item: addedText
            }));
        } else if (removedKeys.size === 1 && addedKeys.size === 0) {
            if (state.collection.getItem(removedKeys.keys().next().value)) {
                let removedText = getRowText(removedKeys.keys().next().value);
                if (removedText) messages.push(formatMessage('deselectedItem', {
                    item: removedText
                }));
            }
        }
        // Announce how many items are selected, except when selecting the first item.
        if (state.selectionManager.selectionMode === 'multiple') {
            if (messages.length === 0 || selection === 'all' || selection.size > 1 || lastSelection.current === 'all' || ((ref = lastSelection.current) === null || ref === void 0 ? void 0 : ref.size) > 1) messages.push(selection === 'all' ? formatMessage('selectedAll') : formatMessage('selectedCount', {
                count: selection.size
            }));
        }
        if (messages.length > 0) $319e236875307eab$export$a9b970dcc4ae71a9(messages.join(' '));
        lastSelection.current = selection;
    }, [
        selection
    ]);
}
function $92599c3fd427b763$var$diffSelection(a, b) {
    let res = new Set();
    if (a === 'all' || b === 'all') return res;
    for (let key of a.keys())if (!b.has(key)) res.add(key);
    return res;
}


var $5b9b5b5723db6ae1$exports = {};

$parcel$export$3($5b9b5b5723db6ae1$exports, "useHighlightSelectionDescription", () => $5b9b5b5723db6ae1$export$be42ebdab07ae4c2);





function $5b9b5b5723db6ae1$export$be42ebdab07ae4c2(props) {
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$1($1dbe5ffd32adb38c$exports)));
    let modality = $507fabe10e71c6fb$export$98e20ec92f614cfe();
    // null is the default if the user hasn't interacted with the table at all yet or the rest of the page
    let shouldLongPress = (modality === 'pointer' || modality === 'virtual' || modality == null) && typeof window !== 'undefined' && 'ontouchstart' in window;
    let interactionDescription = useMemo(()=>{
        let selectionMode = props.selectionManager.selectionMode;
        let selectionBehavior = props.selectionManager.selectionBehavior;
        let message = undefined;
        if (shouldLongPress) message = formatMessage('longPressToSelect');
        return selectionBehavior === 'replace' && selectionMode !== 'none' && props.hasItemActions ? message : undefined;
    }, [
        props.selectionManager.selectionMode,
        props.selectionManager.selectionBehavior,
        props.hasItemActions,
        formatMessage,
        shouldLongPress
    ]);
    let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(interactionDescription);
    return descriptionProps;
}



function $83c6e2eafa584c67$export$f6b86a04e5d66d90(props, state, ref) {
    let { isVirtualized: isVirtualized , keyboardDelegate: keyboardDelegate , focusMode: focusMode , scrollRef: scrollRef , getRowText: getRowText , onRowAction: onRowAction , onCellAction: onCellAction  } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $325a3faab7a68acd$export$a16aca283550c30d({
        usage: 'search',
        sensitivity: 'base'
    });
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let delegate = useMemo(()=>keyboardDelegate || new $d1c300d9c497e402$export$de9feff04fda126e({
            collection: state.collection,
            disabledKeys: state.disabledKeys,
            ref: ref,
            direction: direction,
            collator: collator,
            focusMode: focusMode
        })
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        ref,
        direction,
        collator,
        focusMode
    ]);
    let { collectionProps: collectionProps  } = $ae20dd8cbca75726$export$d6daf82dcd84e87c({
        ref: ref,
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        isVirtualized: isVirtualized,
        scrollRef: scrollRef
    });
    let id = $bdb11010cef70236$export$f680877a34711e37();
    $1af922eb41e03c8f$export$e6235c0d09b995d0.set(state, {
        keyboardDelegate: delegate,
        actions: {
            onRowAction: onRowAction,
            onCellAction: onCellAction
        }
    });
    let descriptionProps = $5b9b5b5723db6ae1$export$be42ebdab07ae4c2({
        selectionManager: state.selectionManager,
        hasItemActions: !!(onRowAction || onCellAction)
    });
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let gridProps = $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
        role: 'grid',
        id: id,
        'aria-multiselectable': state.selectionManager.selectionMode === 'multiple' ? 'true' : undefined
    }, collectionProps, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = state.collection.columnCount;
    }
    $92599c3fd427b763$export$137e594ef3218a10({
        getRowText: getRowText
    }, state);
    return {
        gridProps: gridProps
    };
}


var $e45487f8ba1cbdbf$exports = {};

$parcel$export$3($e45487f8ba1cbdbf$exports, "useGridRowGroup", () => $e45487f8ba1cbdbf$export$d3037f5d3f3e51bf);
function $e45487f8ba1cbdbf$export$d3037f5d3f3e51bf() {
    return {
        rowGroupProps: {
            role: 'rowgroup'
        }
    };
}


var $4159a7a9cbb0cc18$exports = {};

$parcel$export$3($4159a7a9cbb0cc18$exports, "useGridRow", () => $4159a7a9cbb0cc18$export$96357d5a73f686fa);


function $4159a7a9cbb0cc18$export$96357d5a73f686fa(props, state, ref) {
    let { node: node , isVirtualized: isVirtualized , shouldSelectOnPressUp: shouldSelectOnPressUp , onAction: onAction  } = props;
    let { actions: { onRowAction: onRowAction  }  } = $1af922eb41e03c8f$export$e6235c0d09b995d0.get(state);
    let { itemProps: itemProps , isPressed: isPressed  } = $880e95eb8b93ba9a$export$ecf600387e221c37({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        onAction: onRowAction ? ()=>onRowAction(node.key)
         : onAction
    });
    let isSelected = state.selectionManager.isSelected(node.key);
    let rowProps = {
        role: 'row',
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined,
        ...itemProps
    };
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
    return {
        rowProps: rowProps,
        isPressed: isPressed
    };
}


var $ab90dcbc1b5466d0$exports = {};

$parcel$export$3($ab90dcbc1b5466d0$exports, "useGridCell", () => $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c);






function $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c(props, state, ref) {
    let { node: node , isVirtualized: isVirtualized , focusMode: focusMode = 'child' , shouldSelectOnPressUp: shouldSelectOnPressUp , onAction: onAction  } = props;
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let { keyboardDelegate: keyboardDelegate , actions: { onCellAction: onCellAction  }  } = $1af922eb41e03c8f$export$e6235c0d09b995d0.get(state);
    // Handles focusing the cell. If there is a focusable child,
    // it is focused, otherwise the cell itself is focused.
    let focus = ()=>{
        let treeWalker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current);
        if (focusMode === 'child') {
            // If focus is already on a focusable child within the cell, early return so we don't shift focus
            if (ref.current.contains(document.activeElement) && ref.current !== document.activeElement) return;
            let focusable = state.selectionManager.childFocusStrategy === 'last' ? $ab90dcbc1b5466d0$var$last(treeWalker) : treeWalker.firstChild();
            if (focusable) {
                $6a99195332edec8b$export$80f3e147d781571c(focusable);
                return;
            }
        }
        if (!ref.current.contains(document.activeElement)) $6a99195332edec8b$export$80f3e147d781571c(ref.current);
    };
    let { itemProps: itemProps , isPressed: isPressed  } = $880e95eb8b93ba9a$export$ecf600387e221c37({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        focus: focus,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        onAction: onCellAction ? ()=>onCellAction(node.key)
         : onAction
    });
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target)) return;
        let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current);
        walker.currentNode = document.activeElement;
        switch(e.key){
            case 'ArrowLeft':
                {
                    // Find the next focusable element within the cell.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    // Don't focus the cell itself if focusMode is "child"
                    if (focusMode === 'child' && focusable === ref.current) focusable = null;
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        $6a99195332edec8b$export$80f3e147d781571c(focusable);
                    } else {
                        // If there is no next focusable child, then move to the next cell to the left of this one.
                        // This will be handled by useSelectableCollection. However, if there is no cell to the left
                        // of this one, only one column, and the grid doesn't focus rows, then the next key will be the
                        // same as this one. In that case we need to handle focusing either the cell or the first/last
                        // child, depending on the focus mode.
                        let prev = keyboardDelegate.getKeyLeftOf(node.key);
                        if (prev !== node.key) break;
                        e.preventDefault();
                        e.stopPropagation();
                        if (focusMode === 'cell' && direction === 'rtl') $6a99195332edec8b$export$80f3e147d781571c(ref.current);
                        else {
                            walker.currentNode = ref.current;
                            focusable = direction === 'rtl' ? walker.firstChild() : $ab90dcbc1b5466d0$var$last(walker);
                            if (focusable) $6a99195332edec8b$export$80f3e147d781571c(focusable);
                        }
                    }
                    break;
                }
            case 'ArrowRight':
                {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusMode === 'child' && focusable === ref.current) focusable = null;
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        $6a99195332edec8b$export$80f3e147d781571c(focusable);
                    } else {
                        let next = keyboardDelegate.getKeyRightOf(node.key);
                        if (next !== node.key) break;
                        e.preventDefault();
                        e.stopPropagation();
                        if (focusMode === 'cell' && direction === 'ltr') $6a99195332edec8b$export$80f3e147d781571c(ref.current);
                        else {
                            walker.currentNode = ref.current;
                            focusable = direction === 'rtl' ? $ab90dcbc1b5466d0$var$last(walker) : walker.firstChild();
                            if (focusable) $6a99195332edec8b$export$80f3e147d781571c(focusable);
                        }
                    }
                    break;
                }
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching cell children, e.g. menu buttons. We want arrow keys to navigate
                // to the cell above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && ref.current.contains(e.target)) {
                    e.stopPropagation();
                    e.preventDefault();
                    ref.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    // Grid cells can have focusable elements inside them. In this case, focus should
    // be marshalled to that element rather than focusing the cell itself.
    let onFocus = (e)=>{
        if (e.target !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the gridcell itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row/cell
            // in that case since the table should act like a single tab stop.
            if (!$507fabe10e71c6fb$export$b9b3dfddab17db27()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
        // If the cell itself is focused, wait a frame so that focus finishes propagatating
        // up to the tree, and move focus to a focusable child if possible.
        requestAnimationFrame(()=>{
            if (focusMode === 'child' && document.activeElement === ref.current) focus();
        });
    };
    let gridCellProps = $3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, {
        role: 'gridcell',
        onKeyDownCapture: onKeyDown,
        onFocus: onFocus
    });
    if (isVirtualized) gridCellProps['aria-colindex'] = node.index + 1; // aria-colindex is 1-based
    return {
        gridCellProps: gridCellProps,
        isPressed: isPressed
    };
}
function $ab90dcbc1b5466d0$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}


var $7cb39d07f245a780$exports = {};

$parcel$export$3($7cb39d07f245a780$exports, "useGridSelectionCheckbox", () => $7cb39d07f245a780$export$70e2eed1a92976ad);



function $7cb39d07f245a780$export$70e2eed1a92976ad(props, state) {
    let { key: key  } = props;
    let manager = state.selectionManager;
    let checkboxId = $bdb11010cef70236$export$f680877a34711e37();
    let isDisabled = !state.selectionManager.canSelectItem(key);
    let isSelected = state.selectionManager.isSelected(key);
    let onChange = ()=>manager.select(key)
    ;
    const formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault$1($1dbe5ffd32adb38c$exports)));
    return {
        checkboxProps: {
            id: checkboxId,
            'aria-label': formatMessage('select'),
            isSelected: isSelected,
            isDisabled: isDisabled,
            onChange: onChange
        }
    };
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export$2(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $6e31608fbba75bab$exports = {};

$parcel$export$2($6e31608fbba75bab$exports, "useTable", () => $6e31608fbba75bab$export$25bceaac3c7e4dc7);


const $2140fb2337097f2d$export$552312adfd451dab = new WeakMap();
function $2140fb2337097f2d$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $2140fb2337097f2d$export$37cd4213f2ad742e(state, columnKey) {
    let gridId = $2140fb2337097f2d$export$552312adfd451dab.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${$2140fb2337097f2d$var$normalizeKey(columnKey)}`;
}
function $2140fb2337097f2d$export$19baff3266315d44(state, rowKey, columnKey) {
    let gridId = $2140fb2337097f2d$export$552312adfd451dab.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${$2140fb2337097f2d$var$normalizeKey(rowKey)}-${$2140fb2337097f2d$var$normalizeKey(columnKey)}`;
}
function $2140fb2337097f2d$export$85069b70317f543(state, rowKey) {
    // A row is labelled by it's row headers.
    return [
        ...state.collection.rowHeaderColumnKeys
    ].map((columnKey)=>$2140fb2337097f2d$export$19baff3266315d44(state, rowKey, columnKey)
    ).join(' ');
}


var $ae7e9c471762b4d3$exports = {};
var $ce3de3ff2fd66848$exports = {};
$ce3de3ff2fd66848$exports = JSON.parse("{\"ascending\":\"تصاعدي\",\"ascendingSort\":\"ترتيب حسب العمود {columnName} بترتيب تصاعدي\",\"descending\":\"تنازلي\",\"descendingSort\":\"ترتيب حسب العمود {columnName} بترتيب تنازلي\",\"select\":\"تحديد\",\"selectAll\":\"تحديد الكل\",\"sortable\":\"عمود قابل للترتيب\"}");


var $cb80dcce530985b9$exports = {};
$cb80dcce530985b9$exports = JSON.parse("{\"ascending\":\"възходящ\",\"ascendingSort\":\"сортирано по колона {columnName} във възходящ ред\",\"descending\":\"низходящ\",\"descendingSort\":\"сортирано по колона {columnName} в низходящ ред\",\"select\":\"Изберете\",\"selectAll\":\"Изберете всичко\",\"sortable\":\"сортираща колона\"}");


var $68ac86749db4c0fb$exports = {};
$68ac86749db4c0fb$exports = JSON.parse("{\"ascending\":\"vzestupně\",\"ascendingSort\":\"řazeno vzestupně podle sloupce {columnName}\",\"descending\":\"sestupně\",\"descendingSort\":\"řazeno sestupně podle sloupce {columnName}\",\"select\":\"Vybrat\",\"selectAll\":\"Vybrat vše\",\"sortable\":\"sloupec s možností řazení\"}");


var $9a6cbac08487e661$exports = {};
$9a6cbac08487e661$exports = JSON.parse("{\"ascending\":\"stigende\",\"ascendingSort\":\"sorteret efter kolonne {columnName} i stigende rækkefølge\",\"descending\":\"faldende\",\"descendingSort\":\"sorteret efter kolonne {columnName} i faldende rækkefølge\",\"select\":\"Vælg\",\"selectAll\":\"Vælg alle\",\"sortable\":\"sorterbar kolonne\"}");


var $c963661d89486e72$exports = {};
$c963661d89486e72$exports = JSON.parse("{\"ascending\":\"aufsteigend\",\"ascendingSort\":\"sortiert nach Spalte {columnName} in aufsteigender Reihenfolge\",\"descending\":\"absteigend\",\"descendingSort\":\"sortiert nach Spalte {columnName} in absteigender Reihenfolge\",\"select\":\"Auswählen\",\"selectAll\":\"Alles auswählen\",\"sortable\":\"sortierbare Spalte\"}");


var $ac03861c6e8605f4$exports = {};
$ac03861c6e8605f4$exports = JSON.parse("{\"ascending\":\"αύξουσα\",\"ascendingSort\":\"διαλογή ανά στήλη {columnName} σε αύξουσα σειρά\",\"descending\":\"φθίνουσα\",\"descendingSort\":\"διαλογή ανά στήλη {columnName} σε φθίνουσα σειρά\",\"select\":\"Επιλογή\",\"selectAll\":\"Επιλογή όλων\",\"sortable\":\"Στήλη διαλογής\"}");


var $09e6b82e0d6e466a$exports = {};
$09e6b82e0d6e466a$exports = JSON.parse("{\"select\":\"Select\",\"selectAll\":\"Select All\",\"sortable\":\"sortable column\",\"ascending\":\"ascending\",\"descending\":\"descending\",\"ascendingSort\":\"sorted by column {columnName} in ascending order\",\"descendingSort\":\"sorted by column {columnName} in descending order\"}");


var $8cc39eb66c2bf220$exports = {};
$8cc39eb66c2bf220$exports = JSON.parse("{\"ascending\":\"de subida\",\"ascendingSort\":\"ordenado por columna {columnName} en orden de subida\",\"descending\":\"de bajada\",\"descendingSort\":\"ordenado por columna {columnName} en orden de bajada\",\"select\":\"Seleccionar\",\"selectAll\":\"Seleccionar todos\",\"sortable\":\"columna ordenable\"}");


var $4e11db3c25a38112$exports = {};
$4e11db3c25a38112$exports = JSON.parse("{\"ascending\":\"tõusev järjestus\",\"ascendingSort\":\"sorditud veeru järgi {columnName} tõusvas järjestuses\",\"descending\":\"laskuv järjestus\",\"descendingSort\":\"sorditud veeru järgi {columnName} laskuvas järjestuses\",\"select\":\"Vali\",\"selectAll\":\"Vali kõik\",\"sortable\":\"sorditav veerg\"}");


var $da1e751a92575e02$exports = {};
$da1e751a92575e02$exports = JSON.parse("{\"ascending\":\"nouseva\",\"ascendingSort\":\"lajiteltu sarakkeen {columnName} mukaan nousevassa järjestyksessä\",\"descending\":\"laskeva\",\"descendingSort\":\"lajiteltu sarakkeen {columnName} mukaan laskevassa järjestyksessä\",\"select\":\"Valitse\",\"selectAll\":\"Valitse kaikki\",\"sortable\":\"lajiteltava sarake\"}");


var $1b5d6c6c47d55106$exports = {};
$1b5d6c6c47d55106$exports = JSON.parse("{\"ascending\":\"croissant\",\"ascendingSort\":\"trié en fonction de la colonne {columnName} par ordre croissant\",\"descending\":\"décroissant\",\"descendingSort\":\"trié en fonction de la colonne {columnName} par ordre décroissant\",\"select\":\"Sélectionner\",\"selectAll\":\"Sélectionner tout\",\"sortable\":\"colonne triable\"}");


var $7c18ba27b86d3308$exports = {};
$7c18ba27b86d3308$exports = JSON.parse("{\"ascending\":\"עולה\",\"ascendingSort\":\"מוין לפי עמודה {columnName} בסדר עולה\",\"descending\":\"יורד\",\"descendingSort\":\"מוין לפי עמודה {columnName} בסדר יורד\",\"select\":\"בחר\",\"selectAll\":\"בחר הכול\",\"sortable\":\"עמודה שניתן למיין\"}");


var $2cb40998e20e8a46$exports = {};
$2cb40998e20e8a46$exports = JSON.parse("{\"ascending\":\"rastući\",\"ascendingSort\":\"razvrstano po stupcima {columnName} rastućem redoslijedom\",\"descending\":\"padajući\",\"descendingSort\":\"razvrstano po stupcima {columnName} padajućim redoslijedom\",\"select\":\"Odaberite\",\"selectAll\":\"Odaberite sve\",\"sortable\":\"stupac koji se može razvrstati\"}");


var $189e23eec1d6aa3a$exports = {};
$189e23eec1d6aa3a$exports = JSON.parse("{\"ascending\":\"növekvő\",\"ascendingSort\":\"rendezve a(z) {columnName} oszlop szerint, növekvő sorrendben\",\"descending\":\"csökkenő\",\"descendingSort\":\"rendezve a(z) {columnName} oszlop szerint, csökkenő sorrendben\",\"select\":\"Kijelölés\",\"selectAll\":\"Összes kijelölése\",\"sortable\":\"rendezendő oszlop\"}");


var $3c5ec8e4f015dfd0$exports = {};
$3c5ec8e4f015dfd0$exports = JSON.parse("{\"ascending\":\"crescente\",\"ascendingSort\":\"in ordine crescente in base alla colonna {columnName}\",\"descending\":\"decrescente\",\"descendingSort\":\"in ordine decrescente in base alla colonna {columnName}\",\"select\":\"Seleziona\",\"selectAll\":\"Seleziona tutto\",\"sortable\":\"colonna ordinabile\"}");


var $d021d50e6b315ebb$exports = {};
$d021d50e6b315ebb$exports = JSON.parse("{\"ascending\":\"昇順\",\"ascendingSort\":\"列 {columnName} を昇順で並べ替え\",\"descending\":\"降順\",\"descendingSort\":\"列 {columnName} を降順で並べ替え\",\"select\":\"選択\",\"selectAll\":\"すべて選択\",\"sortable\":\"並べ替え可能な列\"}");


var $52535c35c24ec937$exports = {};
$52535c35c24ec937$exports = JSON.parse("{\"ascending\":\"오름차순\",\"ascendingSort\":\"{columnName} 열을 기준으로 오름차순으로 정렬됨\",\"descending\":\"내림차순\",\"descendingSort\":\"{columnName} 열을 기준으로 내림차순으로 정렬됨\",\"select\":\"선택\",\"selectAll\":\"모두 선택\",\"sortable\":\"정렬 가능한 열\"}");


var $b37ee03672edfd1d$exports = {};
$b37ee03672edfd1d$exports = JSON.parse("{\"ascending\":\"didėjančia tvarka\",\"ascendingSort\":\"surikiuota pagal stulpelį {columnName} didėjančia tvarka\",\"descending\":\"mažėjančia tvarka\",\"descendingSort\":\"surikiuota pagal stulpelį {columnName} mažėjančia tvarka\",\"select\":\"Pasirinkti\",\"selectAll\":\"Pasirinkti viską\",\"sortable\":\"rikiuojamas stulpelis\"}");


var $c7df6686b4189d56$exports = {};
$c7df6686b4189d56$exports = JSON.parse("{\"ascending\":\"augošā secībā\",\"ascendingSort\":\"kārtots pēc kolonnas {columnName} augošā secībā\",\"descending\":\"dilstošā secībā\",\"descendingSort\":\"kārtots pēc kolonnas {columnName} dilstošā secībā\",\"select\":\"Atlasīt\",\"selectAll\":\"Atlasīt visu\",\"sortable\":\"kārtojamā kolonna\"}");


var $da07fe8ec87e6b68$exports = {};
$da07fe8ec87e6b68$exports = JSON.parse("{\"ascending\":\"stigende\",\"ascendingSort\":\"sortert etter kolonne {columnName} i stigende rekkefølge\",\"descending\":\"synkende\",\"descendingSort\":\"sortert etter kolonne {columnName} i synkende rekkefølge\",\"select\":\"Velg\",\"selectAll\":\"Velg alle\",\"sortable\":\"kolonne som kan sorteres\"}");


var $64b7e390f5791490$exports = {};
$64b7e390f5791490$exports = JSON.parse("{\"ascending\":\"oplopend\",\"ascendingSort\":\"gesorteerd in oplopende volgorde in kolom {columnName}\",\"descending\":\"aflopend\",\"descendingSort\":\"gesorteerd in aflopende volgorde in kolom {columnName}\",\"select\":\"Selecteren\",\"selectAll\":\"Alles selecteren\",\"sortable\":\"sorteerbare kolom\"}");


var $2a03621e773f1678$exports = {};
$2a03621e773f1678$exports = JSON.parse("{\"ascending\":\"rosnąco\",\"ascendingSort\":\"posortowano według kolumny {columnName} w porządku rosnącym\",\"descending\":\"malejąco\",\"descendingSort\":\"posortowano według kolumny {columnName} w porządku malejącym\",\"select\":\"Zaznacz\",\"selectAll\":\"Zaznacz wszystko\",\"sortable\":\"kolumna z możliwością sortowania\"}");


var $0a79c0aba9e5ecc6$exports = {};
$0a79c0aba9e5ecc6$exports = JSON.parse("{\"ascending\":\"crescente\",\"ascendingSort\":\"classificado pela coluna {columnName} em ordem crescente\",\"descending\":\"decrescente\",\"descendingSort\":\"classificado pela coluna {columnName} em ordem decrescente\",\"select\":\"Selecionar\",\"selectAll\":\"Selecionar tudo\",\"sortable\":\"coluna classificável\"}");


var $de7b4d0f7dc86fc8$exports = {};
$de7b4d0f7dc86fc8$exports = JSON.parse("{\"ascending\":\"ascendente\",\"ascendingSort\":\"Ordenar por coluna {columnName} em ordem ascendente\",\"descending\":\"descendente\",\"descendingSort\":\"Ordenar por coluna {columnName} em ordem descendente\",\"select\":\"Selecionar\",\"selectAll\":\"Selecionar tudo\",\"sortable\":\"Coluna ordenável\"}");


var $28ea7e849d77bd1c$exports = {};
$28ea7e849d77bd1c$exports = JSON.parse("{\"ascending\":\"crescătoare\",\"ascendingSort\":\"sortate după coloana {columnName} în ordine crescătoare\",\"descending\":\"descrescătoare\",\"descendingSort\":\"sortate după coloana {columnName} în ordine descrescătoare\",\"select\":\"Selectare\",\"selectAll\":\"Selectare totală\",\"sortable\":\"coloană sortabilă\"}");


var $9a09321cf046b187$exports = {};
$9a09321cf046b187$exports = JSON.parse("{\"ascending\":\"возрастание\",\"ascendingSort\":\"сортировать столбец {columnName} в порядке возрастания\",\"descending\":\"убывание\",\"descendingSort\":\"сортировать столбец {columnName} в порядке убывания\",\"select\":\"Выбрать\",\"selectAll\":\"Выбрать все\",\"sortable\":\"сортируемый столбец\"}");


var $5afe469a63fcac7b$exports = {};
$5afe469a63fcac7b$exports = JSON.parse("{\"ascending\":\"vzostupne\",\"ascendingSort\":\"zoradené zostupne podľa stĺpca {columnName}\",\"descending\":\"zostupne\",\"descendingSort\":\"zoradené zostupne podľa stĺpca {columnName}\",\"select\":\"Vybrať\",\"selectAll\":\"Vybrať všetko\",\"sortable\":\"zoraditeľný stĺpec\"}");


var $2956757ac31a7ce2$exports = {};
$2956757ac31a7ce2$exports = JSON.parse("{\"ascending\":\"naraščajoče\",\"ascendingSort\":\"razvrščeno po stolpcu {columnName} v naraščajočem vrstnem redu\",\"descending\":\"padajoče\",\"descendingSort\":\"razvrščeno po stolpcu {columnName} v padajočem vrstnem redu\",\"select\":\"Izberite\",\"selectAll\":\"Izberite vse\",\"sortable\":\"razvrstljivi stolpec\"}");


var $cedee0e66b175529$exports = {};
$cedee0e66b175529$exports = JSON.parse("{\"ascending\":\"rastući\",\"ascendingSort\":\"sortirano po kolonama {columnName} rastućim redosledom\",\"descending\":\"padajući\",\"descendingSort\":\"sortirano po kolonama {columnName} padajućim redosledom\",\"select\":\"Izaberite\",\"selectAll\":\"Izaberite sve\",\"sortable\":\"kolona koja se može sortirati\"}");


var $6db19998ba4427da$exports = {};
$6db19998ba4427da$exports = JSON.parse("{\"ascending\":\"stigande\",\"ascendingSort\":\"sorterat på kolumn {columnName} i stigande ordning\",\"descending\":\"fallande\",\"descendingSort\":\"sorterat på kolumn {columnName} i fallande ordning\",\"select\":\"Markera\",\"selectAll\":\"Markera allt\",\"sortable\":\"sorterbar kolumn\"}");


var $166b7c9cc1adb1a1$exports = {};
$166b7c9cc1adb1a1$exports = JSON.parse("{\"ascending\":\"artan sırada\",\"ascendingSort\":\"{columnName} sütuna göre artan düzende sırala\",\"descending\":\"azalan sırada\",\"descendingSort\":\"{columnName} sütuna göre azalan düzende sırala\",\"select\":\"Seç\",\"selectAll\":\"Tümünü Seç\",\"sortable\":\"Sıralanabilir sütun\"}");


var $c7ab180b401e49ff$exports = {};
$c7ab180b401e49ff$exports = JSON.parse("{\"ascending\":\"висхідний\",\"ascendingSort\":\"відсортовано за стовпцем {columnName} у висхідному порядку\",\"descending\":\"низхідний\",\"descendingSort\":\"відсортовано за стовпцем {columnName} у низхідному порядку\",\"select\":\"Вибрати\",\"selectAll\":\"Вибрати все\",\"sortable\":\"сортувальний стовпець\"}");


var $1648ec00941567f3$exports = {};
$1648ec00941567f3$exports = JSON.parse("{\"ascending\":\"升序\",\"ascendingSort\":\"按列 {columnName} 升序排序\",\"descending\":\"降序\",\"descendingSort\":\"按列 {columnName} 降序排序\",\"select\":\"选择\",\"selectAll\":\"全选\",\"sortable\":\"可排序的列\"}");


var $b26f22384b3c1526$exports = {};
$b26f22384b3c1526$exports = JSON.parse("{\"ascending\":\"遞增\",\"ascendingSort\":\"已依據「{columnName}」欄遞增排序\",\"descending\":\"遞減\",\"descendingSort\":\"已依據「{columnName}」欄遞減排序\",\"select\":\"選取\",\"selectAll\":\"全選\",\"sortable\":\"可排序的欄\"}");


$ae7e9c471762b4d3$exports = {
    "ar-AE": $ce3de3ff2fd66848$exports,
    "bg-BG": $cb80dcce530985b9$exports,
    "cs-CZ": $68ac86749db4c0fb$exports,
    "da-DK": $9a6cbac08487e661$exports,
    "de-DE": $c963661d89486e72$exports,
    "el-GR": $ac03861c6e8605f4$exports,
    "en-US": $09e6b82e0d6e466a$exports,
    "es-ES": $8cc39eb66c2bf220$exports,
    "et-EE": $4e11db3c25a38112$exports,
    "fi-FI": $da1e751a92575e02$exports,
    "fr-FR": $1b5d6c6c47d55106$exports,
    "he-IL": $7c18ba27b86d3308$exports,
    "hr-HR": $2cb40998e20e8a46$exports,
    "hu-HU": $189e23eec1d6aa3a$exports,
    "it-IT": $3c5ec8e4f015dfd0$exports,
    "ja-JP": $d021d50e6b315ebb$exports,
    "ko-KR": $52535c35c24ec937$exports,
    "lt-LT": $b37ee03672edfd1d$exports,
    "lv-LV": $c7df6686b4189d56$exports,
    "nb-NO": $da07fe8ec87e6b68$exports,
    "nl-NL": $64b7e390f5791490$exports,
    "pl-PL": $2a03621e773f1678$exports,
    "pt-BR": $0a79c0aba9e5ecc6$exports,
    "pt-PT": $de7b4d0f7dc86fc8$exports,
    "ro-RO": $28ea7e849d77bd1c$exports,
    "ru-RU": $9a09321cf046b187$exports,
    "sk-SK": $5afe469a63fcac7b$exports,
    "sl-SI": $2956757ac31a7ce2$exports,
    "sr-SP": $cedee0e66b175529$exports,
    "sv-SE": $6db19998ba4427da$exports,
    "tr-TR": $166b7c9cc1adb1a1$exports,
    "uk-UA": $c7ab180b401e49ff$exports,
    "zh-CN": $1648ec00941567f3$exports,
    "zh-TW": $b26f22384b3c1526$exports
};





class $0ba3c81c7f1caedd$export$da43f8f5cb04028d extends $d1c300d9c497e402$export$de9feff04fda126e {
    isCell(node) {
        return node.type === 'cell' || node.type === 'rowheader' || node.type === 'column';
    }
    getKeyBelow(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus was on a column, then focus the first child column if any,
        // or find the corresponding cell in the first row.
        if (startItem.type === 'column') {
            let child = [
                ...startItem.childNodes
            ][0];
            if (child) return child.key;
            let firstKey = this.getFirstKey();
            if (firstKey == null) return;
            let firstItem = this.collection.getItem(firstKey);
            return [
                ...firstItem.childNodes
            ][startItem.index].key;
        }
        return super.getKeyBelow(key);
    }
    getKeyAbove(key) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return;
        // If focus was on a column, focus the parent column if any
        if (startItem.type === 'column') {
            let parent = this.collection.getItem(startItem.parentKey);
            if (parent && parent.type === 'column') return parent.key;
            return;
        }
        // only return above row key if not header row
        let superKey = super.getKeyAbove(key);
        if (superKey != null && this.collection.getItem(superKey).type !== 'headerrow') return superKey;
        // If no item was found, and focus was on a cell, then focus the
        // corresponding column header.
        if (this.isCell(startItem)) return this.collection.columns[startItem.index].key;
        // If focus was on a row, then focus the first column header.
        return this.collection.columns[0].key;
    }
    findNextColumnKey(column) {
        // Search following columns
        let key = this.findNextKey(column.key, (item)=>item.type === 'column'
        );
        if (key != null) return key;
        // Wrap around to the first column
        let row = this.collection.headerRows[column.level];
        for (let item1 of row.childNodes){
            if (item1.type === 'column') return item1.key;
        }
    }
    findPreviousColumnKey(column) {
        // Search previous columns
        let key = this.findPreviousKey(column.key, (item)=>item.type === 'column'
        );
        if (key != null) return key;
        // Wrap around to the last column
        let row = this.collection.headerRows[column.level];
        let childNodes = [
            ...row.childNodes
        ];
        for(let i = childNodes.length - 1; i >= 0; i--){
            let item = childNodes[i];
            if (item.type === 'column') return item.key;
        }
    }
    getKeyRightOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus was on a column, then focus the next column
        if (item.type === 'column') return this.direction === 'rtl' ? this.findPreviousColumnKey(item) : this.findNextColumnKey(item);
        return super.getKeyRightOf(key);
    }
    getKeyLeftOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return;
        // If focus was on a column, then focus the previous column
        if (item.type === 'column') return this.direction === 'rtl' ? this.findNextColumnKey(item) : this.findPreviousColumnKey(item);
        return super.getKeyLeftOf(key);
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey !== null && fromKey !== void 0 ? fromKey : this.getFirstKey();
        if (key == null) return null;
        // If the starting key is a cell, search from its parent row.
        let startItem = collection.getItem(key);
        if (startItem.type === 'cell') key = startItem.parentKey;
        let hasWrapped = false;
        while(key != null){
            let item = collection.getItem(key);
            // Check each of the row header cells in this row for a match
            for (let cell of item.childNodes){
                let column = collection.columns[cell.index];
                if (collection.rowHeaderColumnKeys.has(column.key) && cell.textValue) {
                    let substring = cell.textValue.slice(0, search.length);
                    if (this.collator.compare(substring, search) === 0) {
                        // If we started on a cell, end on the matching cell. Otherwise, end on the row.
                        let fromItem = fromKey != null ? collection.getItem(fromKey) : startItem;
                        return fromItem.type === 'cell' ? cell.key : item.key;
                    }
                }
            }
            key = this.getKeyBelow(key);
            // Wrap around when reaching the end of the collection
            if (key == null && !hasWrapped) {
                key = this.getFirstKey();
                hasWrapped = true;
            }
        }
        return null;
    }
}




function $6e31608fbba75bab$export$25bceaac3c7e4dc7(props, state, ref1) {
    let { keyboardDelegate: keyboardDelegate , isVirtualized: isVirtualized , layout: layout  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = $325a3faab7a68acd$export$a16aca283550c30d({
        usage: 'search',
        sensitivity: 'base'
    });
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let delegate = useMemo(()=>keyboardDelegate || new $0ba3c81c7f1caedd$export$da43f8f5cb04028d({
            collection: state.collection,
            disabledKeys: state.disabledKeys,
            ref: ref1,
            direction: direction,
            collator: collator,
            layout: layout
        })
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        ref1,
        direction,
        collator,
        layout
    ]);
    let id = $bdb11010cef70236$export$f680877a34711e37();
    $2140fb2337097f2d$export$552312adfd451dab.set(state, id);
    let { gridProps: gridProps  } = $83c6e2eafa584c67$export$f6b86a04e5d66d90({
        ...props,
        id: id,
        keyboardDelegate: delegate,
        getRowText (key) {
            let added = state.collection.getItem(key);
            if (!added) return '';
            // If the row has a textValue, use that.
            if (added.textValue != null) return added.textValue;
            // Otherwise combine the text of each of the row header columns.
            let rowHeaderColumnKeys = state.collection.rowHeaderColumnKeys;
            if (rowHeaderColumnKeys) {
                let text = [];
                for (let cell of added.childNodes){
                    let column = state.collection.columns[cell.index];
                    if (rowHeaderColumnKeys.has(column.key) && cell.textValue) text.push(cell.textValue);
                    if (text.length === rowHeaderColumnKeys.size) break;
                }
                return text.join(' ');
            }
            return '';
        }
    }, state, ref1);
    // Override to include header rows
    if (isVirtualized) gridProps['aria-rowcount'] = state.collection.size + state.collection.headerRows.length;
    let { column: column1 , direction: sortDirection  } = state.sortDescriptor || {
    };
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault($ae7e9c471762b4d3$exports)));
    let sortDescription = useMemo(()=>{
        var ref;
        let columnName = (ref = state.collection.columns.find((c)=>c.key === column1
        )) === null || ref === void 0 ? void 0 : ref.textValue;
        return sortDirection && column1 ? formatMessage(`${sortDirection}Sort`, {
            columnName: columnName
        }) : undefined;
    }, [
        sortDirection,
        column1,
        state.collection.columns
    ]);
    let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(sortDescription);
    // Only announce after initial render, tabbing to the table will tell you the initial sort info already
    $4f58c5f72bcf79f7$export$496315a1608d9602(()=>{
        $319e236875307eab$export$a9b970dcc4ae71a9(sortDescription, 'assertive', 500);
    }, [
        sortDescription
    ]);
    return {
        gridProps: $3ef42575df84b30b$export$9d1611c77c2fe928(gridProps, descriptionProps, {
            // merge sort description with long press information
            'aria-describedby': [
                descriptionProps['aria-describedby'],
                gridProps['aria-describedby']
            ].filter(Boolean).join(' ')
        })
    };
}


var $f329116d8ad0aba0$exports = {};

$parcel$export$2($f329116d8ad0aba0$exports, "useTableColumnHeader", () => $f329116d8ad0aba0$export$9514819a8c81e960);







function $f329116d8ad0aba0$export$9514819a8c81e960(props, state, ref) {
    var ref1, ref2;
    let { node: node  } = props;
    // let allowsResizing = node.props.allowsResizing;
    let allowsSorting = node.props.allowsSorting;
    let { gridCellProps: gridCellProps  } = $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c(props, state, ref);
    let isSelectionCellDisabled = node.props.isSelectionCell && state.selectionManager.selectionMode === 'single';
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        // Disabled for allowsResizing because if resizing is allowed, a menu trigger is added to the column header.
        isDisabled: !allowsSorting || isSelectionCellDisabled,
        onPress () {
            state.sort(node.key);
        }
    });
    // Needed to pick up the focusable context, enabling things like Tooltips for example
    let { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c({
    }, ref);
    let ariaSort = null;
    let isSortedColumn = ((ref1 = state.sortDescriptor) === null || ref1 === void 0 ? void 0 : ref1.column) === node.key;
    let sortDirection = (ref2 = state.sortDescriptor) === null || ref2 === void 0 ? void 0 : ref2.direction;
    // aria-sort not supported in Android Talkback
    if (node.props.allowsSorting && !$c87311424ea30a05$export$a11b0059900ceec8()) ariaSort = isSortedColumn ? sortDirection : 'none';
    let formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault($ae7e9c471762b4d3$exports)));
    let sortDescription;
    if (allowsSorting) {
        sortDescription = `${formatMessage('sortable')}`;
        // Android Talkback doesn't support aria-sort so we add sort order details to the aria-described by here
        if (isSortedColumn && sortDirection && $c87311424ea30a05$export$a11b0059900ceec8()) sortDescription = `${sortDescription}, ${formatMessage(sortDirection)}`;
    }
    let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(sortDescription);
    return {
        columnHeaderProps: {
            ...$3ef42575df84b30b$export$9d1611c77c2fe928(gridCellProps, pressProps, focusableProps, descriptionProps),
            role: 'columnheader',
            id: $2140fb2337097f2d$export$37cd4213f2ad742e(state, node.key),
            'aria-colspan': node.colspan && node.colspan > 1 ? node.colspan : null,
            'aria-sort': ariaSort
        }
    };
}


var $b2db214c022798eb$exports = {};

$parcel$export$2($b2db214c022798eb$exports, "useTableRow", () => $b2db214c022798eb$export$7f2f6ae19e707aa5);


function $b2db214c022798eb$export$7f2f6ae19e707aa5(props, state, ref) {
    let { node: node  } = props;
    let { rowProps: rowProps , isPressed: isPressed  } = $4159a7a9cbb0cc18$export$96357d5a73f686fa(props, state, ref);
    return {
        rowProps: {
            ...rowProps,
            'aria-labelledby': $2140fb2337097f2d$export$85069b70317f543(state, node.key)
        },
        isPressed: isPressed
    };
}


var $f917ee10f4c32dab$exports = {};

$parcel$export$2($f917ee10f4c32dab$exports, "useTableHeaderRow", () => $f917ee10f4c32dab$export$1b95a7d2d517b841);
function $f917ee10f4c32dab$export$1b95a7d2d517b841(props, state, ref) {
    let { node: node , isVirtualized: isVirtualized  } = props;
    let rowProps = {
        role: 'row'
    };
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
    return {
        rowProps: rowProps
    };
}


var $7713593715703b24$exports = {};

$parcel$export$2($7713593715703b24$exports, "useTableCell", () => $7713593715703b24$export$49571c903d73624c);


function $7713593715703b24$export$49571c903d73624c(props, state, ref) {
    let { gridCellProps: gridCellProps , isPressed: isPressed  } = $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c(props, state, ref);
    let columnKey = props.node.column.key;
    if (state.collection.rowHeaderColumnKeys.has(columnKey)) {
        gridCellProps.role = 'rowheader';
        gridCellProps.id = $2140fb2337097f2d$export$19baff3266315d44(state, props.node.parentKey, columnKey);
    }
    return {
        gridCellProps: gridCellProps,
        isPressed: isPressed
    };
}


var $2a795c53a101c542$exports = {};

$parcel$export$2($2a795c53a101c542$exports, "useTableSelectionCheckbox", () => $2a795c53a101c542$export$16ea7f650bd7c1bb);
$parcel$export$2($2a795c53a101c542$exports, "useTableSelectAllCheckbox", () => $2a795c53a101c542$export$1003db6a7e384b99);




function $2a795c53a101c542$export$16ea7f650bd7c1bb(props, state) {
    let { key: key  } = props;
    const { checkboxProps: checkboxProps  } = $7cb39d07f245a780$export$70e2eed1a92976ad(props, state);
    return {
        checkboxProps: {
            ...checkboxProps,
            'aria-labelledby': `${checkboxProps.id} ${$2140fb2337097f2d$export$85069b70317f543(state, key)}`
        }
    };
}
function $2a795c53a101c542$export$1003db6a7e384b99(state) {
    let { isEmpty: isEmpty , isSelectAll: isSelectAll , selectionMode: selectionMode  } = state.selectionManager;
    const formatMessage = $321bc95feeb923dd$export$ec23bf898b1eed85((/*@__PURE__*/$parcel$interopDefault($ae7e9c471762b4d3$exports)));
    return {
        checkboxProps: {
            'aria-label': formatMessage(selectionMode === 'single' ? 'select' : 'selectAll'),
            isSelected: isSelectAll,
            isDisabled: selectionMode !== 'multiple',
            isIndeterminate: !isEmpty && !isSelectAll,
            onChange: ()=>state.selectionManager.toggleSelectAll()
        }
    };
}

function $parcel$export$1(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0175d55c2a017ebc$exports = {};

$parcel$export$1($0175d55c2a017ebc$exports, "useTab", () => $0175d55c2a017ebc$export$fdf4756d5b8ef90a);
const $99b62ae3ff97ec45$export$c5f62239608282b6 = new WeakMap();
function $99b62ae3ff97ec45$export$567fc7097e064344(state, key, role) {
    if (typeof key === 'string') key = key.replace(/\s+/g, '');
    let baseId = $99b62ae3ff97ec45$export$c5f62239608282b6.get(state);
    return `${baseId}-${role}-${key}`;
}



function $0175d55c2a017ebc$export$fdf4756d5b8ef90a(props, state, ref) {
    let { key: key , isDisabled: propsDisabled  } = props;
    let { selectionManager: manager , selectedKey: selectedKey  } = state;
    let isSelected = key === selectedKey;
    let isDisabled = propsDisabled || state.disabledKeys.has(key);
    let { itemProps: itemProps  } = $880e95eb8b93ba9a$export$ecf600387e221c37({
        selectionManager: manager,
        key: key,
        ref: ref,
        isDisabled: isDisabled
    });
    let tabId = $99b62ae3ff97ec45$export$567fc7097e064344(state, key, 'tab');
    let tabPanelId = $99b62ae3ff97ec45$export$567fc7097e064344(state, key, 'tabpanel');
    let { tabIndex: tabIndex  } = itemProps;
    return {
        tabProps: {
            ...itemProps,
            id: tabId,
            'aria-selected': isSelected,
            'aria-disabled': isDisabled || undefined,
            'aria-controls': isSelected ? tabPanelId : undefined,
            tabIndex: isDisabled ? undefined : tabIndex,
            role: 'tab'
        }
    };
}


var $34bce698202e07cb$exports = {};

$parcel$export$1($34bce698202e07cb$exports, "useTabPanel", () => $34bce698202e07cb$export$fae0121b5afe572d);




function $34bce698202e07cb$export$fae0121b5afe572d(props, state, ref) {
    let [tabIndex, setTabIndex] = useState(0);
    // The tabpanel should have tabIndex=0 when there are no tabbable elements within it.
    // Otherwise, tabbing from the focused tab should go directly to the first tabbable element
    // within the tabpanel.
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (ref === null || ref === void 0 ? void 0 : ref.current) {
            let update = ()=>{
                // Detect if there are any tabbable elements and update the tabIndex accordingly.
                let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current, {
                    tabbable: true
                });
                setTabIndex(walker.nextNode() ? undefined : 0);
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    'tabIndex',
                    'disabled'
                ]
            });
            return ()=>{
                observer.disconnect();
            };
        }
    }, [
        ref
    ]);
    const id = $99b62ae3ff97ec45$export$567fc7097e064344(state, state === null || state === void 0 ? void 0 : state.selectedKey, 'tabpanel');
    const tabPanelProps = $313b98861ee5dd6c$export$d6875122194c7b44({
        ...props,
        id: id,
        'aria-labelledby': $99b62ae3ff97ec45$export$567fc7097e064344(state, state === null || state === void 0 ? void 0 : state.selectedKey, 'tab')
    });
    return {
        tabPanelProps: $3ef42575df84b30b$export$9d1611c77c2fe928(tabPanelProps, {
            tabIndex: tabIndex,
            role: 'tabpanel',
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details']
        })
    };
}


var $58d314389b21fa3f$exports = {};

$parcel$export$1($58d314389b21fa3f$exports, "useTabList", () => $58d314389b21fa3f$export$773e389e644c5874);



class $bfc6f2d60b8a4c40$export$15010ca3c1abe90b {
    getKeyLeftOf(key) {
        if (this.flipDirection) return this.getNextKey(key);
        else {
            if (this.orientation === 'horizontal') return this.getPreviousKey(key);
            return null;
        }
    }
    getKeyRightOf(key) {
        if (this.flipDirection) return this.getPreviousKey(key);
        else {
            if (this.orientation === 'horizontal') return this.getNextKey(key);
            return null;
        }
    }
    getKeyAbove(key) {
        if (this.orientation === 'vertical') return this.getPreviousKey(key);
        return null;
    }
    getKeyBelow(key) {
        if (this.orientation === 'vertical') return this.getNextKey(key);
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        if (this.disabledKeys.has(key)) key = this.getNextKey(key);
        return key;
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        if (this.disabledKeys.has(key)) key = this.getPreviousKey(key);
        return key;
    }
    getNextKey(key) {
        do {
            key = this.collection.getKeyAfter(key);
            if (key == null) key = this.collection.getFirstKey();
        }while (this.disabledKeys.has(key))
        return key;
    }
    getPreviousKey(key) {
        do {
            key = this.collection.getKeyBefore(key);
            if (key == null) key = this.collection.getLastKey();
        }while (this.disabledKeys.has(key))
        return key;
    }
    constructor(collection, direction, orientation, disabledKeys = new Set()){
        this.collection = collection;
        this.flipDirection = direction === 'rtl' && orientation === 'horizontal';
        this.orientation = orientation;
        this.disabledKeys = disabledKeys;
    }
}




function $58d314389b21fa3f$export$773e389e644c5874(props, state, ref) {
    let { orientation: orientation = 'horizontal' , keyboardActivation: keyboardActivation = 'automatic'  } = props;
    let { collection: collection , selectionManager: manager , disabledKeys: disabledKeys  } = state;
    let { direction: direction  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let delegate = useMemo(()=>new $bfc6f2d60b8a4c40$export$15010ca3c1abe90b(collection, direction, orientation, disabledKeys)
    , [
        collection,
        disabledKeys,
        orientation,
        direction
    ]);
    let { collectionProps: collectionProps  } = $ae20dd8cbca75726$export$d6daf82dcd84e87c({
        ref: ref,
        selectionManager: manager,
        keyboardDelegate: delegate,
        selectOnFocus: keyboardActivation === 'automatic',
        disallowEmptySelection: true,
        scrollRef: ref
    });
    // Compute base id for all tabs
    let tabsId = $bdb11010cef70236$export$f680877a34711e37();
    $99b62ae3ff97ec45$export$c5f62239608282b6.set(state, tabsId);
    let tabListLabelProps = $313b98861ee5dd6c$export$d6875122194c7b44({
        ...props,
        id: tabsId
    });
    return {
        tabListProps: {
            ...$3ef42575df84b30b$export$9d1611c77c2fe928(collectionProps, tabListLabelProps),
            role: 'tablist',
            'aria-orientation': orientation,
            tabIndex: undefined
        }
    };
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $326e436e94273fe1$exports = {};

$parcel$export($326e436e94273fe1$exports, "useTooltip", () => $326e436e94273fe1$export$1c4b08e0eca38426);


function $326e436e94273fe1$export$1c4b08e0eca38426(props, state) {
    let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
        labelable: true
    });
    let { hoverProps: hoverProps  } = $6179b936705e76d3$export$ae780daf29e6d456({
        onHoverStart: ()=>{
            return state === null || state === void 0 ? void 0 : state.open(true);
        },
        onHoverEnd: ()=>{
            return state === null || state === void 0 ? void 0 : state.close();
        }
    });
    return {
        tooltipProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, hoverProps, {
            role: 'tooltip'
        })
    };
}


var $4e1b34546679e357$exports = {};

$parcel$export($4e1b34546679e357$exports, "useTooltipTrigger", () => $4e1b34546679e357$export$a6da6c504e4bba8b);





function $4e1b34546679e357$export$a6da6c504e4bba8b(props, state, ref) {
    let { isDisabled: isDisabled , trigger: trigger  } = props;
    let tooltipId = $bdb11010cef70236$export$f680877a34711e37();
    let isHovered = useRef(false);
    let isFocused = useRef(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    useEffect(()=>{
        let onKeyDown = (e)=>{
            if (ref && ref.current) // Escape after clicking something can give it keyboard focus
            // dismiss tooltip on esc key press
            {
                if (e.key === 'Escape') state.close(true);
            }
        };
        if (state.isOpen) {
            document.addEventListener('keydown', onKeyDown, true);
            return ()=>{
                document.removeEventListener('keydown', onKeyDown, true);
            };
        }
    }, [
        ref,
        state
    ]);
    let onHoverStart = ()=>{
        if (trigger === 'focus') return;
        // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
        // interactions for example, hover will end. When hover is restored after that element disappears,
        // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
        // is the result of moving the mouse.
        if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === 'pointer') isHovered.current = true;
        else isHovered.current = false;
        handleShow();
    };
    let onHoverEnd = ()=>{
        if (trigger === 'focus') return;
        // no matter how the trigger is left, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide();
    };
    let onPressStart = ()=>{
        // no matter how the trigger is pressed, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let onFocus = ()=>{
        let isVisible = $507fabe10e71c6fb$export$b9b3dfddab17db27();
        if (isVisible) {
            isFocused.current = true;
            handleShow();
        }
    };
    let onBlur = ()=>{
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let { hoverProps: hoverProps  } = $6179b936705e76d3$export$ae780daf29e6d456({
        isDisabled: isDisabled,
        onHoverStart: onHoverStart,
        onHoverEnd: onHoverEnd
    });
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        onPressStart: onPressStart
    });
    let { focusableProps: focusableProps  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c({
        isDisabled: isDisabled,
        onFocus: onFocus,
        onBlur: onBlur
    }, ref);
    return {
        triggerProps: {
            'aria-describedby': state.isOpen ? tooltipId : undefined,
            ...$3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, hoverProps, pressProps)
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}

function getValidChildren(children) {
    return React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
}
function mergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
            var ref = refs_1[_i];
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref != null) {
                ref.current = value;
            }
        }
    };
}

var useButtonClass = function (_a) {
    var variant = _a.variant, type = _a.type, size = _a.size, disabled = _a.disabled, loading = _a.loading, rounded = _a.rounded;
    var variants = {
        solid: 'btn-solid',
        ghost: 'btn-ghost',
    };
    var types = {
        success: 'btn-success',
        secondary: 'btn-secondary',
        warning: 'btn-warning',
        error: 'btn-error',
        alert: 'btn-alert',
    };
    var sizes = {
        block: 'btn-block',
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
    };
    var classes = clsx([
        'btn',
        variant && variants[variant],
        type && types[type],
        size && sizes[size],
        disabled && 'btn-disabled',
        loading && 'btn-loading',
        rounded && 'btn-rounded',
    ]);
    return classes;
};

var Button$1 = forwardRef(function (props, extRef) {
    var size = props.size, rounded = props.rounded, _a = props.variant, variant = _a === void 0 ? 'solid' : _a, type = props.type; props.block; var color = props.color, _b = props.focusafterclick, focusafterclick = _b === void 0 ? true : _b, icon = props.icon, notification = props.notification, className = props.className, children = props.children, disabled = props.disabled, loading = props.loading, onClick = props.onClick, rest = __rest(props, ["size", "rounded", "variant", "type", "block", "color", "focusafterclick", "icon", "notification", "className", "children", "disabled", "loading", "onClick"]);
    var buttonRef = useRef(null);
    var _c = useState(false), isFocused = _c[0], setFocused = _c[1];
    var _d = $6179b936705e76d3$export$ae780daf29e6d456({
        isDisabled: disabled || loading,
    }), hoverProps = _d.hoverProps, isHovered = _d.isHovered;
    var _e = $701a24aa0da5b062$export$ea18c227d4417cc3({
        type: 'submit',
        isDisabled: disabled || loading,
        onFocusChange: setFocused,
        onKeyDown: function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                onClick === null || onClick === void 0 ? void 0 : onClick(e);
                setFocused(true);
            }
            return e;
        },
        onPressEnd: function (e) {
            if (e.pointerType === 'touch') ;
            if (e.pointerType === 'mouse') {
                focusafterclick ? '' : e.target.blur();
            }
            return e;
        },
        onPressStart: function (e) {
            if (e.pointerType === 'mouse') {
                setFocused(true);
            }
            return e;
        },
        onPress: function (e) {
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        },
    }, buttonRef), buttonProps = _e.buttonProps, isPressed = _e.isPressed;
    var classes = useButtonClass({
        variant: variant,
        size: size,
        type: type,
        disabled: disabled,
        loading: loading,
        rounded: rounded,
    });
    return (jsxRuntime.exports.jsxs("button", __assign({}, buttonProps, hoverProps, { "data-focus": isFocused ? '' : null, "data-active": isPressed ? '' : null, "data-hover": isHovered ? '' : null, "data-loading": loading ? '' : null, "data-color": color, className: clsx([classes, !!icon ? (!!children ? '' : 'icononly') : ''], className) }, rest, { ref: mergeRefs(buttonRef, extRef) }, { children: [loading && (jsxRuntime.exports.jsx("span", { children: jsxRuntime.exports.jsx("div", { className: "btn-spinner ".concat(loading ? 'opacity-100' : 'opacity-0') }) })), jsxRuntime.exports.jsxs("span", __assign({ className: "btn-content ".concat(loading ? 'opacity-0' : 'opacity-100') }, { children: [icon && jsxRuntime.exports.jsx("span", __assign({ className: clsx('btn-icon') }, { children: icon })), children] })), notification && jsxRuntime.exports.jsx("div", { className: 'btn-notification' })] })));
});
Button$1.displayName = 'Button';
var ButtonGroup = forwardRef(function (props, ref) {
    var size = props.size, color = props.color, variant = props.variant, attached = props.attached, rounded = props.rounded, disabled = props.disabled, children = props.children, className = props.className, rest = __rest(props, ["size", "color", "variant", "attached", "rounded", "disabled", "children", "className"]);
    var validChildren = getValidChildren(children);
    var copies = validChildren.map(function (child) {
        return React.cloneElement(child, {
            size: size || child.props.size,
            color: child.props.color || color,
            variant: child.props.variant || variant,
            disabled: child.props.disabled || disabled,
            rounded: child.props.rounded || rounded,
            focusafterclick: true,
        });
    });
    return (jsxRuntime.exports.jsx("div", __assign({ ref: ref, role: 'group', className: clsx('btn-group', attached && 'btn-group-attached', rounded && 'btn-group-rounded', className) }, rest, { children: copies })));
});
ButtonGroup.displayName = 'ButtonGroup';

var Button = Button$1;
Button.Group = ButtonGroup;

export { Button, ButtonGroup, Clipboard, Collapsible, File, FileViewer, Folder };
