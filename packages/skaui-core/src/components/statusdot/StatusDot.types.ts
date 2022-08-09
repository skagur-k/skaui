import React from 'react'

export interface StatusDotProps {
	type: 'positive' | 'negative' | 'info' | 'notice' | 'neutral'
	children?: React.ReactElement | string
}
