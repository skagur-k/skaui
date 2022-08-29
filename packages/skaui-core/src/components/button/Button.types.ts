import { AriaButtonProps } from '@react-types/button'
import React, { PropsWithChildren } from 'react'

export interface ButtonProps
	extends PropsWithChildren<Omit<AriaButtonProps, 'type'>> {
	size?: ButtonSize
	variant?: ButtonVariant
	ref?: React.LegacyRef<HTMLButtonElement>
	type?: ButtonType
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
