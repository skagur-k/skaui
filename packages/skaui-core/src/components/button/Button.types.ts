import { AriaButtonProps } from '@react-types/button'

export interface IButtonProps extends Omit<AriaButtonProps, 'type'> {
	children?: string
	size?: IButtonSize
	variant?: IButtonVariant
	type?: IButtonType
	onClick?: () => void
}

export type IButtonSize = 'sm' | 'md' | 'lg' | 'block'
export type IButtonVariant = 'solid' | 'ghost'
export type IButtonType = 'default' | 'success' | 'error' | 'secondary'
