import { useIcon } from '../contexts/IconContext'
import { IconProps, IconDefaultProps } from './icons.types'

const SquarePlusIcon = ({ size, className, ...rest }: IconProps) => {
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
			<line x1='12' y1='8' x2='12' y2='16'></line>
			<line x1='8' y1='12' x2='16' y2='12'></line>
		</svg>
	)
}

SquarePlusIcon.defaultProps = IconDefaultProps

export default SquarePlusIcon
