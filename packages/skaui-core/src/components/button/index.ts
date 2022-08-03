import React from 'react'
import { Button as InternalButton } from './button'
import { ButtonProps } from './button.types'
import { ButtonGroup } from './button'

interface Button extends React.ForwardRefExoticComponent<ButtonProps> {
	Group: typeof ButtonGroup
}

const Button = InternalButton as Button

Button.Group = ButtonGroup

export { Button, ButtonGroup }
