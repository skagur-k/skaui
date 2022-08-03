import { useIcon } from '../contexts/IconContext'
import { IconProps, IconDefaultProps } from './icons.types'

const SquareMinusIcon = ({ size, className, ...rest }: IconProps) => {
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
			<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
			<line x1='8' y1='12' x2='16' y2='12'></line>
		</svg>
	)
}

SquareMinusIcon.defaultProps = IconDefaultProps

export default SquareMinusIcon
