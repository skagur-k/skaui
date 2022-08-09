import { AriaProgressBarProps } from '@react-types/progress'

export interface ProgressProps extends AriaProgressBarProps {
	label?: string
	value?: number
	type?: 'success' | 'error' | 'warning' | 'secondary'
	width?: string
	height?: number
	colors?: {
		[value: number]: string
	}
	isIndeterminate?: boolean
	formatOptions?: Intl.NumberFormatOptions
}
