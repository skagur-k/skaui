import { AriaTextFieldOptions } from 'react-aria'
export interface TextAreaProps<T extends 'textarea'>
	extends AriaTextFieldOptions<T> {
	placeholder?: string
	defaultText?: string
	error?: boolean
	disabled?: boolean
	resize?: 'none' | 'x' | 'y' | 'both'
	rows?: number
	className?: string
}
