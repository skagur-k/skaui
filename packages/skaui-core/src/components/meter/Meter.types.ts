import { AriaMeterProps } from '@react-types/meter'

export interface MeterProps extends AriaMeterProps {
	type?: 'success' | 'error' | 'warning' | 'secondary'
	width?: string
	height?: number
	colors?: {
		[value: number]: string
	}
}
