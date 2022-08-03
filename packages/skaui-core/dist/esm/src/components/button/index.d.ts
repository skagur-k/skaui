import React from 'react';
import { ButtonProps } from './button.types';
import { ButtonGroup } from './button';
interface Button extends React.ForwardRefExoticComponent<ButtonProps> {
    Group: typeof ButtonGroup;
}
declare const Button: Button;
export { Button, ButtonGroup };
