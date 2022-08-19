import clsx from 'clsx'
import { BadgeProps } from './Badge.types'
import { useBadgeClass } from './styles'

const Badge = ({
	value,
	size = 'sm',
	outline,
	className,
	children,
	type,
	pill,
	...rest
}: BadgeProps) => {
	const BadgeClasses = useBadgeClass({ size, outline, type, pill })
	return (
		<span className={clsx(BadgeClasses, className)} {...rest}>
			{children}
		</span>
	)
}

export default Badge
