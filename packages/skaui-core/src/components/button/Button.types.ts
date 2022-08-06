import { AriaButtonProps } from '@react-types/button'

export interface IButtonProps extends Omit<AriaButtonProps, 'type'> {
	children?: string
	size?: IButtonSize
	variant?: IButtonVariant
	type?: IButtonType
	onClick?: () => void
}

export type IButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type IButtonVariant = 'solid' | 'ghost'
export type IButtonType = 'default' | 'success' | 'error' | 'secondary'
