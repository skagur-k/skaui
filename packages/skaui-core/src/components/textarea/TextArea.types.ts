import React from 'react'

interface TextAreaNativeProps
	extends React.HTMLAttributes<HTMLTextAreaElement> {}

interface ITextAreaProps {
	placeholder?: string
	defaultText?: string
	error?: boolean
	disabled?: boolean
	resize?: 'none' | 'x' | 'y' | 'both'
	rows?: number
	className?: string
}

export interface TextAreaProps extends ITextAreaProps, TextAreaNativeProps {}
