// src/getValidChildren.ts
import React from "react";
function getValidChildren(children) {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
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
export {
  getValidChildren,
  mergeRefs
};
