import React from 'react'
import InternalCheckbox from './Checkbox'
import { CheckboxProps } from './Checkbox.types'
import { CheckboxGroup, CheckboxGroupItem } from './CheckboxGroup'

interface Checkbox extends React.ForwardRefExoticComponent<CheckboxProps> {
	Group: typeof CheckboxGroup
	GroupItem: typeof CheckboxGroupItem
}

const Checkbox = InternalCheckbox as Checkbox

Checkbox.Group = CheckboxGroup
Checkbox.GroupItem = CheckboxGroupItem

export { Checkbox, CheckboxGroup }
