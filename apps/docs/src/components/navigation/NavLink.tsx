import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { NavLinkProps } from './Navigation.types'

export const NavLink = ({ children, ...props }: NavLinkProps) => {
	const router = useRouter()
	let isActive: boolean = false

	if (router.pathname === props.href) {
		isActive = true
	}

	return (
		<Link passHref {...props}>
			{typeof children === 'function' ? children(isActive) : children}
		</Link>
	)
}
