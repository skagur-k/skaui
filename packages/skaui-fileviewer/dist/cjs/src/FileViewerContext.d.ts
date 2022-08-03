/// <reference types="react" />
import { Language } from './FileViewer.types';
export interface IFileViewerContextValueProps {
    selectedFile: {
        slug?: string;
        content?: string;
        language?: Language;
        highlight?: string;
    };
    setSelectedFile: Function;
}
export declare const FileViewerContext: import("react").Context<IFileViewerContextValueProps | undefined>;
export declare const FileContextProvider: import("react").Provider<number>;
export declare const useFileTree: () => number;
export declare const FileViewerContextProvider: import("react").Provider<IFileViewerContextValueProps | undefined>;
export declare const useFileViewer: () => IFileViewerContextValueProps;
