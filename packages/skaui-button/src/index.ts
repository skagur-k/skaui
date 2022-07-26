import React from 'react'
import InternalButton from './button'
import { ButtonProps } from './button.types'
import ButtonGroup from './buttonGroup'

interface Button extends React.ForwardRefExoticComponent<ButtonProps> {
	Group: typeof ButtonGroup
}

const Button = InternalButton as Button

Button.Group = ButtonGroup

export { Button, ButtonGroup }
