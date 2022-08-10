import { AriaSwitchProps as _ToggleProps } from '@react-types/switch'
import React from 'react'

export interface ToggleProps extends _ToggleProps {
	size?: 'sm' | 'md' | 'lg'
	rounded?: boolean
	disabled?: boolean
	labelPosition?: 'top' | 'bottom' | 'left' | 'right'
	children?: React.ReactNode
}
