import { LinkProps } from 'next/link'
import React from 'react'

export interface INavigation {
	icon?: React.ReactElement
	title: string
	path: string
	hidden?: boolean
}

export interface NavLinkProps extends LinkProps {
	href: string
	children:
		| string
		| React.ReactElement
		| ((isActive: boolean) => React.ReactElement)
}
