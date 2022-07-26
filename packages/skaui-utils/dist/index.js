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
var skaui_utils_exports = {};
__export(skaui_utils_exports, {
  getValidChildren: () => getValidChildren,
  mergeRefs: () => mergeRefs
});
module.exports = __toCommonJS(skaui_utils_exports);

// src/getValidChildren.ts
var import_react = __toESM(require("react"));
function getValidChildren(children) {
  return import_react.default.Children.toArray(children).filter(
    (child) => import_react.default.isValidElement(child)
  );
}

// src/mergeRefs.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LnRzIiwiLi4vc3JjL2dldFZhbGlkQ2hpbGRyZW4udHMiLCIuLi9zcmMvbWVyZ2VSZWZzLnRzIl0sIm5hbWVzIjpbIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtCO0FBRVgsU0FBUyxpQkFBaUIsVUFBMkI7QUFDM0QsU0FBTyxhQUFBQSxRQUFNLFNBQVMsUUFBUSxRQUFRLEVBQUU7QUFBQSxJQUFPLENBQUMsVUFDL0MsYUFBQUEsUUFBTSxlQUFlLEtBQUs7QUFBQSxFQUMzQjtBQUNEOzs7QUNKTyxTQUFTLGFBQ1osTUFDZTtBQUNsQixTQUFPLENBQUMsVUFBVTtBQUNqQixhQUFTLE9BQU8sTUFBTTtBQUNyQixVQUFJLE9BQU8sUUFBUSxZQUFZO0FBQzlCLFlBQUksS0FBSztBQUFBLE1BQ1YsV0FBVyxPQUFPLE1BQU07QUFDdkIsWUFBSSxVQUFVO0FBQUEsTUFDZjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3NyYydcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkQ2hpbGRyZW4oY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSkge1xuXHRyZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikuZmlsdGVyKChjaGlsZCkgPT5cblx0XHRSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZClcblx0KSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRWYWxpZENoaWxkcmVuXG4iLCJpbXBvcnQgeyBGb3J3YXJkZWRSZWYgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUmVmczxUID0gYW55Pihcblx0Li4ucmVmczogRm9yd2FyZGVkUmVmPFQ+W11cbik6IEZvcndhcmRlZFJlZjxUPiB7XG5cdHJldHVybiAodmFsdWUpID0+IHtcblx0XHRmb3IgKGxldCByZWYgb2YgcmVmcykge1xuXHRcdFx0aWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmVmKHZhbHVlKVxuXHRcdFx0fSBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuXHRcdFx0XHRyZWYuY3VycmVudCA9IHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=