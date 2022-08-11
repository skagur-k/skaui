import React from 'react'

interface IInputProps<T = HTMLInputElement> {
	disabled?: React.InputHTMLAttributes<T>['disabled']
	value?: string
	label?: string
	prefix?: React.ReactNode
	suffix?: React.ReactNode
	description?: string
	errorMessage?: string
	size?: 'sm' | 'md' | 'lg'
	as?: React.ElementType
	type?: string
	invalid?: boolean
	unstyled?: boolean
}

type InputNativeProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	| 'size'
	| 'type'
	| 'aria-label'
	| 'onFocus'
	| 'onBlur'
	| 'value'
	| 'defaultValue'
	| 'onChange'
	| keyof IInputProps
>

export interface InputProps<T = HTMLElement>
	extends IInputProps,
		InputNativeProps,
		React.RefAttributes<T> {}
