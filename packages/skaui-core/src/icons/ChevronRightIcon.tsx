import { useIcon } from '../contexts/IconContext'
import { IconProps, IconDefaultProps } from './icons.types'

const ChevronRightIcon = ({ size, className, ...rest }: IconProps) => {
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
			<polyline points='9 18 15 12 9 6'></polyline>
		</svg>
	)
}

ChevronRightIcon.defaultProps = IconDefaultProps

export default ChevronRightIcon
