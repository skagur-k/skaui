import React from 'react'
import { AriaTextFieldOptions } from 'react-aria'

export interface InputProps<T extends 'input'> extends AriaTextFieldOptions<T> {
	value?: string
	prefix?: React.ReactNode
	suffix?: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
	as?: React.ElementType
	type?: string
	invalid?: boolean
	className?: string
	unstyled?: boolean
}

type TextFieldIntrinsicElements = 'input' | 'textarea'
