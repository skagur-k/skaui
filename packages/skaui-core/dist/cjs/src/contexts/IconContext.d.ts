/// <reference types="react" />
export interface IIconContext {
    size: number;
}
export declare const IconContextProvider: import("react").Provider<IIconContext>;
export declare const useIcon: () => IIconContext;
