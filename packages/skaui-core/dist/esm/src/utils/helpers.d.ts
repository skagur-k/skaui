import React from 'react';
import type { Dict } from './utils.types';
import { ForwardedRef } from 'react';
export declare function getValidChildren(children: React.ReactNode): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
export declare function mergeRefs<T = any>(...refs: ForwardedRef<T>[]): ForwardedRef<T>;
export declare let nanoid: (t?: number) => string;
export declare const isBrowser: () => boolean;
export declare function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]): Omit<T, K>;
export declare const clamp: (value: number, min?: number, max?: number) => number;
