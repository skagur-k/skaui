import { useIcon } from '../contexts/IconContext'
import { IconProps, IconDefaultProps } from './icons.types'

const ChevronDownIcon = ({ size, className, ...rest }: IconProps) => {
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
			<polyline points='6 9 12 15 18 9'></polyline>
		</svg>
	)
}

ChevronDownIcon.defaultProps = IconDefaultProps

export default ChevronDownIcon
