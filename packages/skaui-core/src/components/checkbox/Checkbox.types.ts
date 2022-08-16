import {
	AriaCheckboxGroupProps,
	AriaCheckboxProps,
} from '@react-types/checkbox'
import React from 'react'

export interface CheckboxProps extends AriaCheckboxProps {
	size?: CheckboxSizes
	className?: string
}

export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
	children?: React.ReactNode
	className?: string
	size?: CheckboxSizes
	row?: boolean
}

type CheckboxSizes = 'sm' | 'md' | 'lg'
