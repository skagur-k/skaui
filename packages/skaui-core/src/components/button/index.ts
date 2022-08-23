export { default as IconButton } from './IconButton'
export { Button }

import React from 'react'
import _Button from './Button'
import { ButtonProps } from './Button.types'
import ButtonGroup from './ButtonGroup'

interface Button extends React.ExoticComponent<ButtonProps> {
	Group: typeof ButtonGroup
}

const Button = _Button as Button

Button.Group = ButtonGroup
