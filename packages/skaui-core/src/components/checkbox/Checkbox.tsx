import React, { forwardRef, PropsWithChildren, useRef } from 'react'
import { useCheckbox, useFocusRing } from 'react-aria'
import { useToggleState } from 'react-stately'
import { mergeRefs } from '../..//utils'
import styles from './Checkbox.module.css'
import { CheckboxProps } from './Checkbox.types'

import clsx from 'clsx'

const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
	(props, extRef: React.Ref<HTMLInputElement>) => {
		const { isDisabled, size, className, children } = props
		const ref = useRef<HTMLInputElement>(null)
		const state = useToggleState(props)
		const { inputProps } = useCheckbox(props, state, ref)
		const { focusProps, isFocused } = useFocusRing()

		const isSelected = state.isSelected

		const sizes = {
			sm: styles.checkbox_sm,
			md: styles.checkbox_md,
			lg: styles.checkbox_lg,
		}

		return (
			<label
				className={clsx(styles.checkbox, [size && sizes[size]], className)}
			>
				<input
					{...inputProps}
					{...focusProps}
					type='checkbox'
					disabled={isDisabled}
					className={clsx(styles.sr_only)}
					ref={mergeRefs(ref, extRef)}
				/>
				<div
					className={clsx(styles.checkbox_button, [
						isFocused && styles.checkbox_button_focused,
						isSelected && styles.checkbox_button_selected,
						isDisabled && styles.checkbox_disabled,
					])}
				>
					<svg className={styles.checkbox_button_check} viewBox='0 0 18 18'>
						<polyline
							points='1 9 7 14 15 4'
							fill='none'
							strokeWidth={3}
							strokeDasharray={22}
							strokeDashoffset={state.isSelected ? 44 : 66}
							style={{
								transition: 'all 200ms',
							}}
						/>
					</svg>
				</div>
				<div className={clsx(styles.checkbox_content)}>
					<span
						className={clsx(styles.checkbox_text, [
							isDisabled && styles.checkbox_text_disabled,
						])}
					>
						{children}
					</span>
				</div>
			</label>
		)
	}
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
