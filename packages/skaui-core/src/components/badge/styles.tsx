import clsx from 'clsx'
import { BadgeProps } from './Badge.types'
import styles from './Badge.module.css'

interface BadgeClassProps {
	size?: BadgeProps['size']
	outline?: BadgeProps['outline']
	type?: BadgeProps['type']
	pill?: BadgeProps['pill']
}

export const useBadgeClass = ({
	size,
	outline,
	type,
	pill,
}: BadgeClassProps) => {
	const sizes = {
		sm: styles.badge_sm,
		md: styles.badge_md,
		lg: styles.badge_lg,
	}

	const types = {
		success: styles.badge_success,
		error: styles.badge_error,
		warning: styles.badge_warning,
		info: styles.badge_info,
	}

	const classes = clsx(styles.badge, [
		size && sizes[size],
		type && types[type],
		outline && styles.badge_outline,
		pill && styles.badge_pill,
	])

	return classes
}
