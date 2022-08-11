import clsx from 'clsx'
import { RadioProps } from './Radio.types'

import { useFocusRing, useRadio } from 'react-aria'
import React from 'react'
import { RadioContext } from './RadioGroup'

const Radio = (props: RadioProps) => {
	const { children, rounded, className, disabled, caption, ...rest } = props
	const state = React.useContext(RadioContext)
	const ref = React.useRef(null)
	const { inputProps } = useRadio(props, state, ref)

	const { isFocused, focusProps } = useFocusRing()

	const isSelected = state.selectedValue === props.value

	return (
		<label
			className={clsx('radio group', [
				disabled && 'radio-disabled',
				{ ...rest },
			])}>
			<input
				{...inputProps}
				{...focusProps}
				disabled={disabled}
				className={clsx('sr-only')}
			/>
			<div
				className={clsx('radio-button', [
					isFocused && 'radio-button-focused',
					isSelected && 'radio-button-selected',
					disabled && 'radio-button-disabled',
					rounded && 'radio-button-rounded',
				])}>
				<svg
					className='stroke-current radio-button-check'
					viewBox='0 0 18 18'>
					<polyline
						points='1 9 7 14 15 4'
						fill='none'
						strokeWidth={4}
						strokeDasharray={22}
						strokeDashoffset={isSelected ? 44 : 66}
						style={{
							transition: 'all 400ms',
						}}
					/>
				</svg>
			</div>
			<div className={clsx('radio-content')}>
				<div className='radio-text'>{children}</div>
				{caption && <div className='radio-caption'>{caption}</div>}
			</div>
		</label>
	)
}

export { Radio }
