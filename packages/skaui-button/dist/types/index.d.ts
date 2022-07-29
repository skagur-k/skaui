import React from 'react';

interface IButtonProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'block';
    color?: string;
    block?: boolean;
    type?: 'secondary' | 'success' | 'error' | 'warning' | 'alert';
    rounded?: boolean;
    icon?: JSX.Element | string;
    notification?: boolean;
    focusafterclick?: boolean;
    iconRight?: boolean;
    variant?: 'solid' | 'ghost';
    disabled?: boolean;
    loading?: boolean;
}
interface ButtonNativeAttrs extends Omit<React.ButtonHTMLAttributes<any>, keyof IButtonProps> {
}
interface IButtonGroupProps {
    attached?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    size?: ButtonProps['size'];
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
    children?: React.ReactNode;
}
interface ButtonGroupNativeAttrs extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof IButtonGroupProps> {
}
interface ButtonProps extends ButtonNativeAttrs, IButtonProps {
    ref?: any;
}
interface ButtonGroupProps extends ButtonGroupNativeAttrs, IButtonGroupProps {
}

declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;

interface Button extends React.ForwardRefExoticComponent<ButtonProps> {
    Group: typeof ButtonGroup;
}
declare const Button: Button;

export { Button, ButtonGroup };
