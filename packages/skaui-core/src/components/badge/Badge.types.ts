import React from 'react'

export interface BadgeProps {
	value?: string
	children?: React.ReactNode
	outline?: boolean
	pill?: boolean
	type?: 'success' | 'error' | 'warning' | 'info'
	size?: 'sm' | 'md' | 'lg'
	color?: string
	className?: string
}

export type Badge = JSX.Element
