import { AriaButtonProps } from '@react-types/button'
import React from 'react'

export interface ButtonProps extends Omit<AriaButtonProps, 'type'> {
	children?: React.ReactElement | string | null
	size?: ButtonSize
	variant?: ButtonVariant
	type?: ButtonType
	onClick?: () => void
	className?: string
	prefix?: React.ReactElement
	suffix?: React.ReactElement
	align?: 'start' | 'grow' | 'end' | 'center'
}

export interface IconButtonProps extends Omit<AriaButtonProps, 'type'> {
	children: React.ReactElement
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	variant?: IconButtonVariant
	type?: ButtonType
	onClick?: () => void
	className?: string
}

export interface ButtonGroupProps {
	attached?: boolean
	disabled?: boolean
	rounded?: boolean
	size?: ButtonProps['size']
	variant?: ButtonProps['variant']
	type?: ButtonType
	children?: React.ReactNode
}

export type ButtonSize = 'sm' | 'md' | 'lg' | 'block'
export type ButtonVariant = 'solid' | 'ghost' | 'text'
export type IconButtonVariant = 'solid' | 'ghost' | 'iconOnly'
export type ButtonType = 'success' | 'error' | 'secondary'
