import clsx from 'clsx'
import React, { forwardRef, PropsWithChildren, useRef } from 'react'
import {
	useCheckboxGroup,
	useCheckboxGroupItem,
	useFocusRing,
} from 'react-aria'
import { useCheckboxGroupState } from 'react-stately'

import { getValidChildren, mergeRefs } from '../../utils'
import styles from './Checkbox.module.css'
import { CheckboxGroupItemProps, CheckboxGroupProps } from './Checkbox.types'

const CheckboxGroupContext = React.createContext<any>(null)

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const { children, isDisabled, row, className, size, label } = props
	const state = useCheckboxGroupState(props)
	const { groupProps, labelProps } = useCheckboxGroup(props, state)

	const validChildren = getValidChildren(children)
	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			isDisabled: child.props.isDisabled || isDisabled,
			size: child.props.size || size,
		})
	})

	const sizes = {
		sm: styles.checboxgroup_sm,
		md: styles.checboxgroup_md,
		lg: styles.checboxgroup_lg,
	}

	return (
		<div
			className={clsx(styles.checkboxgroup, [
				row && styles.checkboxgroup_row,
				size && sizes[size],
			])}
			{...groupProps}
		>
			{label && (
				<div {...labelProps} className={styles.checkboxgroup_label}>
					<div>{label}</div>
				</div>
			)}
			<CheckboxGroupContext.Provider value={state}>
				<div className={clsx(styles.checkboxgroup_items, className)}>
					{copies}
				</div>
			</CheckboxGroupContext.Provider>
		</div>
	)
}

export const CheckboxGroupItem = forwardRef<
	HTMLInputElement,
	PropsWithChildren<CheckboxGroupItemProps>
>((props, extRef: React.Ref<HTMLInputElement>) => {
	const { isDisabled, size, className, children } = props
	const ref = useRef<HTMLInputElement>(null)
	const state = React.useContext(CheckboxGroupContext)
	const { inputProps } = useCheckboxGroupItem(props, state, ref)
	const { focusProps, isFocused } = useFocusRing()

	const isSelected = state.isSelected(props.value)

	const sizes = {
		sm: styles.checkbox_sm,
		md: styles.checkbox_md,
		lg: styles.checkbox_lg,
	}

	return (
		<label className={clsx(styles.checkbox, [size && sizes[size]], className)}>
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
						strokeDashoffset={isSelected ? 44 : 66}
						style={{
							transition: 'all 400ms',
						}}
					/>
				</svg>
			</div>
			<div className={clsx(styles.checkbox_content)}>
				<span className={styles.checkbox_text}>{children}</span>
			</div>
		</label>
	)
})

CheckboxGroupItem.displayName = 'SKA UI - Checkbox Group Item'
