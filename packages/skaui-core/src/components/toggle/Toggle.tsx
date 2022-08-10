import clsx from 'clsx'
import React from 'react'
import { useFocusRing, useLabel, useSwitch, VisuallyHidden } from 'react-aria'
import { useToggleState } from 'react-stately'
import { ToggleProps } from './Toggle.types'
import styles from './Toggle.module.css'

const Toggle = (props: ToggleProps): JSX.Element => {
	const {
		size = 'md',
		labelPosition = 'right',
		rounded = true,
		disabled,
		children,
	} = props
	const state = useToggleState(props)
	const ref = React.useRef(null)
	const { inputProps } = useSwitch(props, state, ref)
	const { labelProps } = useLabel(props)
	const { isFocusVisible, focusProps } = useFocusRing()

	const labelPositions = {
		top: styles.toggle_label_top,
		bottom: styles.toggle_label_bottom,
		left: styles.toggle_label_left,
		right: styles.toggle_label_right,
	}

	const toggleSizes = {
		sm: styles.toggle_sm,
		md: styles.toggle_md,
		lg: styles.toggle_lg,
	}

	return (
		<label
			{...labelProps}
			className={clsx(styles.toggle, [
				labelPosition && labelPositions[labelPosition],
				size && toggleSizes[size],
			])}
		>
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} disabled={disabled} ref={ref} />
			</VisuallyHidden>

			{children && (
				<div
					className={clsx(styles.toggle_label, [
						isFocusVisible && styles.toggle_label_focused,
						state.isSelected && styles.toggle_label_selected,
						disabled && styles.toggle_label_disabled,
					])}
				>
					{children}
				</div>
			)}

			<div
				className={clsx(styles.toggle_switch, [
					state.isSelected && styles.toggle_switch_selected,
					isFocusVisible && styles.toggle_switch_focused,
					disabled && styles.toggle_disabled,
					size && toggleSizes[size],
				])}
			>
				{/* <div className={classNames('toggle-switch-label')}>Label</div> */}
				<div className={clsx(styles.toggle_switch_switch)}></div>
				<div />
			</div>
		</label>
	)
}

export default Toggle
