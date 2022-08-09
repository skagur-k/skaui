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
			strokeWidth='3'
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
			strokeWidth='2'
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
			strokeWidth='2'
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
			strokeWidth='2'
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
			viewBox='0 0 30 30'
			width={size || iconSize.size}
			height={size || iconSize.size}
			stroke='currentColor'
			strokeWidth='3'
			strokeLinecap='round'
			strokeLinejoin='round'
			fill='none'
			shapeRendering='geometricPrecision'
			className={className}
		>
			<path d='M 12.130859 4.4179688 C 10.983178 4.4605254 9.6274375 4.7643281 7.9609375 5.4550781 L 5.8105469 12.898438 C 6.9835469 12.424437 8.46 12 10 12 C 11.486 12 12.941328 12.709391 14.361328 13.525391 L 16.59375 5.796875 C 15.375625 5.00125 14.043662 4.347041 12.130859 4.4179688 z M 18.333984 6.9785156 L 16.142578 14.572266 C 17.458578 15.335266 18.785 16 20 16 C 21.851 16 23.657172 15.351266 24.826172 14.822266 L 26.990234 7.3339844 C 22.527234 9.1759844 20.286984 8.2585156 18.333984 6.9785156 z M 10 14 C 8.016 14 6.0696563 14.911266 5.0976562 15.447266 L 2.9902344 22.78125 C 7.4332344 20.94125 9.6379844 21.874578 11.583984 23.142578 L 13.789062 15.505859 C 12.421063 14.698859 11.132 14 10 14 z M 15.570312 16.550781 L 13.365234 24.181641 C 15.321234 25.468641 17.560437 26.395875 22.023438 24.546875 L 24.123047 17.248047 C 22.927047 17.658047 21.49 18 20 18 C 18.451 18 16.987313 17.343781 15.570312 16.550781 z' />
		</svg>
	)
}
