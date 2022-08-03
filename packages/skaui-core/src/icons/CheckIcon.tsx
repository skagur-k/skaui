import { useIcon } from '../contexts/IconContext'
import { IconProps, IconDefaultProps } from './icons.types'

const CheckIcon = ({ size, className, ...rest }: IconProps) => {
	const iconSize = useIcon()

	return (
		<svg
			viewBox='0 0 24 24'
			width={size || iconSize.size}
			height={size || iconSize.size}
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			fill='none'
			shapeRendering='geometricPrecision'
			className={className}
			{...rest}
		>
			<polyline points='20 6 9 17 4 12'></polyline>
		</svg>
	)
}

CheckIcon.defaultProps = IconDefaultProps

export default CheckIcon
