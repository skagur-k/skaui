import { useIcon } from '../contexts/IconContext'
import { IconProps } from './icons.types'

const HomeIcon = ({ size, className }: IconProps) => {
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
		>
		</svg>
	)
}

export default HomeIcon
