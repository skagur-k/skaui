import clsx from 'clsx'
import React from 'react'
import { useLink } from 'react-aria'
import styles from './Link.module.css'
import { LinkProps } from './Link.types'

export const Link = (props: LinkProps) => {
	const ref = React.useRef(null)
	const { children, isDisabled, className } = props
	const { linkProps } = useLink(props, ref)

	return (
		<a
			href={props.href}
			target="_blank"
			className={clsx(
				styles.link,
				[isDisabled && styles.link_disabled],
				className
			)}
			{...linkProps}
		>
			{children}
		</a>
	)
}
