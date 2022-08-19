import clsx from 'clsx'
import React from 'react'
import styles from './Container.module.css'

interface ContainerProps {
	children?: React.ReactNode
	col?: boolean
	gap?: number
	align?: 'start' | 'center' | 'end'
	className?: string
}

export const Container = (props: ContainerProps) => {
	const { children, col, gap = 4, align, className } = props

	const alignments = {
		start: styles.container_start,
		center: styles.container_center,
		end: styles.container_end,
	}

	return (
		<div
			className={clsx(
				styles.container,
				[col && styles.container_col],
				[align && alignments[align]],
				className
			)}
		>
			{children}
		</div>
	)
}
