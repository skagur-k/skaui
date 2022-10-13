import clsx from 'clsx'
import { useImage } from '../../hooks'
import React from 'react'
import {
	AvatarNameProps,
	AvatarPlaceholderProps,
	AvatarProps,
} from './Avatar.types'
import { Image } from '../image'
import { useAvatarClass, useAvatarNameClass } from './styles'
import styles from './Avatar.module.css'

const getInitials = (name: string) => {
	const [firstName, lastName] = name.split(' ')

	if (firstName && lastName) {
		return `${firstName.charAt(0)}${lastName.charAt(0)}`
	} else return firstName.charAt(0)
}

const AvatarPlaceholder = ({
	className,
	children,
	...props
}: AvatarPlaceholderProps) => {
	return (
		<div className={clsx(styles.avatar_placeholder, className)} {...props}>
			<svg viewBox='0 0 128 128' role='img'>
				<g>
					<path d='M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z' />
					<path d='M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24' />
				</g>
			</svg>
			<div className={styles.avatar_placeholder_content}>{children}</div>
		</div>
	)
}

AvatarPlaceholder.displayName = 'AvatarPlaceholder'

const AvatarName = (props: AvatarNameProps) => {
	const { name, isFullName, size, className, ...rest } = props
	const avatarNameClasses = useAvatarNameClass({ size })
	return (
		<div
			className={clsx(avatarNameClasses, className)}
			aria-label={name}
			{...rest}
		>
			{name ? getInitials(name) : null}
		</div>
	)
}

AvatarName.displayName = 'AvatarName'

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	(props: AvatarProps, ref) => {
		const {
			size = 'md',
			bordered = false,
			name,
			width,
			height,
			icon,
			src,
			srcSet,
			onError,
			loading,
			getInitials,
			children,
			isFullName,
			className,
			...rest
		} = props

		const status = useImage({ src, onError })
		const hasLoaded = status === 'loaded'
		const Icon = icon

		const avatarClasses = useAvatarClass({ size, bordered })

		const renderChildren = () => {
			if (src && hasLoaded) {
				return (
					<Image
						className={clsx(styles.avatar_image, className)}
						src={src}
						alt={name}
						style={{ width, height }}
					/>
				)
			}

			if (src && !hasLoaded) {
				if (name) {
					return <AvatarName size={size} name={name} isFullName={isFullName} />
				} else {
					return <AvatarPlaceholder aria-label={name} />
				}
			}

			if (!src && name) {
				return (
					<AvatarPlaceholder>
						<AvatarName size={size} name={name} isFullName={isFullName} />
					</AvatarPlaceholder>
				)
			}
			if (!src && !name) {
				return <AvatarPlaceholder />
			}

			return null
		}

		return (
			<div className='inline-flex'>
				<div className='relative'>
					<div
						ref={ref}
						className={clsx(avatarClasses, className)}
						style={{ width, height }}
						{...rest}
					>
						{renderChildren()}
					</div>
					{icon && <Icon className={styles.avatar_icon} />}
				</div>
			</div>
		)
	}
)

Avatar.displayName = 'SKA UI - Avatar'

export default Avatar
