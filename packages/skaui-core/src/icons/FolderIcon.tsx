import { useIcon } from '../contexts/IconContext'
import { IconProps, IconDefaultProps } from './icons.types'

const FolderIcon = ({ size, className, ...rest }: IconProps) => {
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
			<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
		</svg>
	)
}

FolderIcon.defaultProps = IconDefaultProps

export default FolderIcon
