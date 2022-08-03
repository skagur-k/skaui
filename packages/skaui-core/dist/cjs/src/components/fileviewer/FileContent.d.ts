/// <reference types="react" />
import { IFile } from './FileViewer.types';
declare const FileContent: ({ file, lineNumbers, }: {
    file: IFile;
    lineNumbers: boolean;
}) => JSX.Element;
export default FileContent;
