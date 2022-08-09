import { useIcon } from '../contexts/IconContext'
import { IconProps } from './icons.types'

export const CommandIcon = ({ size, className }: IconProps) => {
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
			<path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'></path>
		</svg>
	)
}

export const ReturnLeftIcon = ({ size, className }: IconProps) => {
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
			<polyline points='9 10 4 15 9 20'></polyline>
			<path d='M20 4v7a4 4 0 0 1-4 4H4'></path>
		</svg>
	)
}

export const DeleteIcon = ({ size, className }: IconProps) => {
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
			<path d='M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z'></path>
			<line x1='18' y1='9' x2='12' y2='15'></line>
			<line x1='12' y1='9' x2='18' y2='15'></line>
		</svg>
	)
}

export const OptionsIcon = ({ size, className }: IconProps) => {
	const iconSize = useIcon()

	return (
		<svg
			viewBox='0 0 16 16'
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
			<path d='M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5zm10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z' />
		</svg>
	)
}

export const ShiftIcon = ({ size, className }: IconProps) => {
	const iconSize = useIcon()

	return (
		<svg
			viewBox='0 0 16 16'
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
			<path d='M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z' />
		</svg>
	)
}
export const WindowsIcon = ({ size, className }: IconProps) => {
	const iconSize = useIcon()

	return (
		<svg
			viewBox='0 0 16 16'
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
			<path d='M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z' />
		</svg>
	)
}
