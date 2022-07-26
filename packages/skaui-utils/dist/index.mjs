// src/getValidChildren.ts
import React from "react";
function getValidChildren(children) {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  );
}
export {
  getValidChildren
};
