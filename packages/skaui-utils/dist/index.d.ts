import React, { ForwardedRef } from 'react';

declare function getValidChildren(children: React.ReactNode): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];

declare function mergeRefs<T = any>(...refs: ForwardedRef<T>[]): ForwardedRef<T>;

export { getValidChildren, mergeRefs };
