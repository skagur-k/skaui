import {AriaButtonProps} from 'react'

export interface IButtonProps extends AriaButtonProps {
	children?: string
	variant?: IButtonVariant
	type?: IButtonType
}

export type IButtonVariant = 'solid' | 'ghost'
export type IButtonType = 'default' | 'success' | 'error'
