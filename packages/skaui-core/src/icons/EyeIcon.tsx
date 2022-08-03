import { useIcon } from '../contexts/IconContext'
import { IconProps, IconDefaultProps } from './icons.types'

const EyeIcon = ({ size, className, ...rest }: IconProps) => {
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
			<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
			<circle cx='12' cy='12' r='3'></circle>
		</svg>
	)
}

EyeIcon.defaultProps = IconDefaultProps

export default EyeIcon
