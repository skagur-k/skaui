/// <reference types="react" />
import { Language } from './FileViewer.types';
declare const CodeRenderer: ({ code, lineNumbers, language, highlight, }: {
    code: string;
    lineNumbers?: boolean | undefined;
    language?: Language | undefined;
    highlight?: string | undefined;
}) => JSX.Element;
export default CodeRenderer;
