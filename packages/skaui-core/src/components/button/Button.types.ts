import { AriaButtonProps } from '@react-types/button'
import React from 'react'

export interface IButtonProps extends Omit<AriaButtonProps, 'type'> {
	children?: React.ReactElement | string | null
	size?: IButtonSize
	variant?: IButtonVariant
	type?: IButtonType
	onClick?: () => void
	className?: string
	prefix?: React.ReactElement
	suffix?: React.ReactElement
	align?: 'start' | 'grow' | 'end'
}

export interface IIconButtonProps extends Omit<AriaButtonProps, 'type'> {
	children: React.ReactElement
	size?: IButtonSize
	variant?: IButtonVariant
	type?: IButtonType
	onClick?: () => void
	className?: string
}

export type IButtonSize = 'sm' | 'md' | 'lg' | 'block'
export type IButtonVariant = 'solid' | 'ghost' | 'text'
export type IButtonType = 'default' | 'success' | 'error' | 'secondary'
