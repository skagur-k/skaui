import clsx from 'clsx'
import { AvatarProps } from './Avatar.types'
import styles from './Avatar.module.css'

export interface AvatarNameClassProps {
	size?: AvatarProps['size']
}
export interface AvatarClassProps {
	size?: AvatarProps['size']
	bordered?: AvatarProps['bordered']
}

export const useAvatarNameClass = ({ size }: AvatarNameClassProps) => {
	const sizes = {
		xs: styles.avatar_name_xs,
		sm: styles.avatar_name_sm,
		md: styles.avatar_name_md,
		lg: styles.avatar_name_lg,
		xl: styles.avatar_name_xl,
	}

	const classes = clsx([styles.avatar_name, size && sizes[size]])

	return classes
}

export const useAvatarClass = ({ size }: AvatarClassProps) => {
	const sizes = {
		xs: styles.avatar_xs,
		sm: styles.avatar_sm,
		md: styles.avatar_md,
		lg: styles.avatar_lg,
		xl: styles.avatar_xl,
	}

	const classes = clsx(styles.avatar, [size && sizes[size]])

	return classes
}
