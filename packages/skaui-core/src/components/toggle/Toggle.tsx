import clsx from 'clsx'
import React from 'react'
import { useFocusRing, useLabel, useSwitch, VisuallyHidden } from 'react-aria'
import { useToggleState } from 'react-stately'
import styles from './Toggle.module.css'
import { ToggleProps } from './Toggle.types'

const Toggle = (props: ToggleProps) => {
	const {
		size = 'md',
		labelPosition = 'right',
		isDisabled,
		children,
		className,
		type,
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

	const types = {
		success: styles.toggle_success,
		error: styles.toggle_error,
	}

	return (
		<label
			className={clsx(
				styles.toggle,
				[
					labelPosition && labelPositions[labelPosition],
					size && toggleSizes[size],
					type && types[type],
					isDisabled && styles.toggle_disabled,
				],
				className
			)}
			{...labelProps}
		>
			<VisuallyHidden>
				<input
					disabled={isDisabled}
					ref={ref}
					{...inputProps}
					{...focusProps}
				/>
			</VisuallyHidden>

			{children && (
				<div
					className={clsx(styles.toggle_label, [
						isFocusVisible && styles.toggle_label_focused,
						state.isSelected && styles.toggle_label_selected,
					])}
				>
					{children}
				</div>
			)}

			<div
				className={clsx(styles.toggle_switch, [
					state.isSelected && styles.toggle_switch_selected,
					isFocusVisible && styles.toggle_switch_focused,
					size && toggleSizes[size],
				])}
			>
				<div
					className={clsx(styles.toggle_switch_switch, [
						state.isSelected && styles.toggle_switch_switch_selected,
					])}
				></div>
				<div />
			</div>
		</label>
	)
}

export default Toggle
