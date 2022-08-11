import clsx from 'clsx'
import { RadioProps } from './Radio.types'

import React from 'react'
import { useFocusRing, useRadio } from 'react-aria'
import { RadioContext } from './RadioGroup'

import styles from './Radio.module.css'

const Radio = (props: RadioProps) => {
	const { children, isDisabled } = props
	const state = React.useContext(RadioContext)
	const ref = React.useRef(null)
	const { inputProps } = useRadio(props, state, ref)

	const { isFocused, focusProps } = useFocusRing()

	const isSelected = state.selectedValue === props.value

	return (
		<label
			className={clsx(styles.radio, [isDisabled && styles.radio_disabled])}
		>
			<input {...inputProps} {...focusProps} className={clsx(styles.sr_only)} />
			<div
				className={clsx(styles.radio_button, [
					isFocused && styles.radio_button_focused,
					isSelected && styles.radio_button_selected,
				])}
			>
				<svg className={styles.radio_button_check} viewBox='0 0 18 18'>
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
			<div className={clsx(styles.radio_content)}>
				<div className={styles.radio_text}>{children}</div>
			</div>
		</label>
	)
}

export { Radio }
