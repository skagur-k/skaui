import React from 'react';
export interface FileViewerProps {
    children: React.ReactElement | React.ReactElement[];
    title?: string;
    nocontent?: boolean;
}
export interface BaseProps {
    name: string;
}
export declare type IFile = {
    slug?: string;
    content?: string;
    language?: Language;
    highlight?: string;
};
export interface FolderProps extends BaseProps {
    children?: React.ReactElement[];
    open?: boolean;
    defaultOpen?: boolean;
    slug?: string;
    onToggle?: () => void;
}
export interface FileProps extends BaseProps, IFile {
    active?: boolean;
    type?: 'lambda';
    icon?: React.ReactElement;
}
export declare type Language = 'markup' | 'bash' | 'clike' | 'c' | 'cpp' | 'css' | 'javascript' | 'jsx' | 'coffeescript' | 'actionscript' | 'css-extr' | 'diff' | 'git' | 'go' | 'graphql' | 'handlebars' | 'json' | 'less' | 'makefile' | 'markdown' | 'objectivec' | 'ocaml' | 'python' | 'reason' | 'sass' | 'scss' | 'sql' | 'stylus' | 'tsx' | 'typescript' | 'wasm' | 'yaml';
