import { AriaSwitchProps } from '@react-types/switch'
import React from 'react'

export interface ToggleProps extends AriaSwitchProps {
	defaultSelected?: boolean
	type?: 'success' | 'error'
	size?: 'sm' | 'md' | 'lg'
	rounded?: boolean
	isDisabled?: boolean
	labelPosition?: 'top' | 'bottom' | 'left' | 'right'
	children?: React.ReactNode
}
