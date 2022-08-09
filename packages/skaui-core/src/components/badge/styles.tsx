import clsx from 'clsx'
import { BadgeProps } from './Badge.types'
import styles from './Badge.module.css'

interface BadgeClassProps {
	size?: BadgeProps['size']
	contrast?: BadgeProps['contrast']
	outline?: BadgeProps['outline']
}

export const useBadgeClass = ({ size, contrast, outline }: BadgeClassProps) => {
	const sizes = {
		sm: styles.badge_sm,
		md: styles.badge_md,
		lg: styles.badge_lg,
	}

	const classes = clsx(
		styles.badge,
		size && [sizes[size]],
		contrast && styles.badge_contrast,
		outline && styles.badge_outline
	)

	return classes
}
