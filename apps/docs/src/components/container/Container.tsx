import clsx from 'clsx'
import React from 'react'
import styles from './Container.module.css'

interface ContainerProps {
	children?: React.ReactNode
	col?: boolean
	gap?: number
}

export const Container = (props: ContainerProps) => {
	const { children, col, gap = 6 } = props

	return (
		<div className={clsx(styles.container, [col && styles.container_col])}>
			{children}
		</div>
	)
}
