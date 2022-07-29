import React from 'react';

interface CollapsibleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    transition?: boolean;
    open?: boolean;
    title: React.ReactElement;
    onToggle?: () => void;
    children?: React.ReactElement | string;
}

declare const Collapsible: (props: CollapsibleProps) => JSX.Element;

export { Collapsible };
