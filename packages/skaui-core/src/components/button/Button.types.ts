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
	align?: 'start' | 'grow' | 'end' | 'center'
}

export interface IIconButtonProps extends Omit<AriaButtonProps, 'type'> {
	children: React.ReactElement
	size?: 'sm' | 'md' | 'lg'
	variant?: IIconButtonVariant
	type?: IButtonType
	onClick?: () => void
	className?: string
}

export interface IButtonGroupProps {
	attached?: boolean
	disabled?: boolean
	rounded?: boolean
	size?: IButtonProps['size']
	variant?: IButtonProps['variant']
	type?: IButtonType
	children?: React.ReactNode
}

export type IButtonSize = 'sm' | 'md' | 'lg' | 'block'
export type IButtonVariant = 'solid' | 'ghost' | 'text'
export type IIconButtonVariant = 'solid' | 'ghost' | 'iconOnly'
export type IButtonType = 'default' | 'success' | 'error' | 'secondary'
