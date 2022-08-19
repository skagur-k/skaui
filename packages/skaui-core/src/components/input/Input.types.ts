import React from 'react'
import { AriaTextFieldOptions } from 'react-aria'

export interface InputProps<T extends 'input'> extends AriaTextFieldOptions<T> {
	value?: string
	prefix?: React.ReactNode
	suffix?: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
	as?: React.ElementType
	type?: string
	className?: string
	width?: string
	unstyled?: boolean
}
