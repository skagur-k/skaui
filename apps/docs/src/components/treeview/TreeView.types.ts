import React from 'react'

export interface TreeViewProps {
	children: React.ReactNode
	title?: string
}

export interface BaseProps {
	name: string
}

export interface FolderProps extends BaseProps {
	children?: React.ReactElement[]
	open?: boolean
	defaultOpen?: boolean
	slug?: string
	onToggle?: () => void
}

export interface FileProps extends BaseProps {
	active?: boolean
	type?: 'lambda'
	slug?: string
	children?: string
	icon?: React.ReactElement
}
