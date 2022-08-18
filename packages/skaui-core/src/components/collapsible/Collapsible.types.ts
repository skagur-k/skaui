import React from 'react'

export interface CollapsibleProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
	transition?: boolean
	open?: boolean
	title: React.ReactElement | string
	onToggle?: (open: boolean) => void
	children?: React.ReactElement | string
}
