import clsx from 'clsx'
import { BadgeProps } from './Badge.types'
import { useBadgeClass } from './styles'

const Badge = ({
	value,
	color,
	size = 'md',
	outline,
	contrast,
	className,
	children,
	...rest
}: BadgeProps) => {
	const BadgeClasses = useBadgeClass({ size, outline, contrast })
	return (
		<div
			data-color={color}
			className={clsx(BadgeClasses, className)}
			{...rest}>
			{children}
		</div>
	)
}

export default Badge
