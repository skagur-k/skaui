import {
	AriaCheckboxGroupProps,
	AriaCheckboxProps,
} from '@react-types/checkbox'
import React from 'react'

export interface CheckboxProps extends AriaCheckboxProps {}

export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
	children?: React.ReactNode
}
