import React from 'react';

interface TreeViewProps {
    children: React.ReactNode;
    title?: string;
}
interface BaseProps {
    name: string;
}
interface FolderProps extends BaseProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onToggle?: () => void;
}
interface FileProps extends BaseProps {
    active?: boolean;
    type?: 'lambda';
    isSelected?: boolean;
    icon?: React.ReactElement;
}

declare const TreeView: React.ComponentType<TreeViewProps>;
declare const Folder: React.ComponentType<FolderProps>;
declare const File: React.ComponentType<FileProps>;

export { File, Folder, TreeView, TreeView as Treeview };
