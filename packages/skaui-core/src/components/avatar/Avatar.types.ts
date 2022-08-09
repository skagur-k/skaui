import React from 'react'

interface IAvatarProps {
	name?: string
	src?: string
	srcSet?: string
	icon?: any
	bordered?: boolean
	onError?: () => void
	loading?: 'eager' | 'lazy'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	getInitials?: (name: string) => string
	children?: React.ReactNode
	isFullName?: boolean
	className?: string
}

export interface AvatarNameProps
	extends React.HTMLAttributes<HTMLDivElement>,
		Pick<
			IAvatarProps,
			'name' | 'getInitials' | 'size' | 'isFullName' | 'className'
		> {}

export interface AvatarPlaceholderProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	'aria-label'?: string
}

export interface AvatarProps
	extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onError'>,
		IAvatarProps {
	iconLabel?: string
}

export interface IAvatarGroupProps {
	children: React.ReactNode
	max?: number
	size?: AvatarProps['size']
}

export interface AvatarGroupProps
	extends IAvatarGroupProps,
		Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}
