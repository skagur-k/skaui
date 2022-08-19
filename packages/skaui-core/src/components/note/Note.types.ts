import React from 'react'

export interface NoteProps {
	label?: boolean | string
	action?: () => void
	actionLabel?: string
	type?: 'success' | 'warning' | 'error' | 'secondary'
	size?: 'sm' | 'md' | 'lg'
	filled?: boolean
	contrast?: boolean
	children?: React.ReactElement | string
	className?: string
}
