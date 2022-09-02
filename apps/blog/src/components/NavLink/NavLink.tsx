import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { NavLinkProps } from './NavLink.types'

export const NavLink = ({ children, ...props }: NavLinkProps) => {
	const router = useRouter()
	let isActive: boolean = false

	if (router.asPath === props.href) {
		isActive = true
	}

	console.log(router.asPath)
	console.log(props.href)

	return (
		<Link passHref {...props}>
			{typeof children === 'function' ? children(isActive) : children}
		</Link>
	)
}
