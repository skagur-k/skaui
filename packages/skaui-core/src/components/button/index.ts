export { default as IconButton } from './IconButton'

import React from 'react'
import _Button from './Button'
import { ButtonGroupProps } from './Button.types'
import ButtonGroup from './ButtonGroup'

interface Button extends React.ExoticComponent<ButtonGroupProps> {
	Group: typeof ButtonGroup
}

const Button = _Button as Button

Button.Group = ButtonGroup

export { Button }
