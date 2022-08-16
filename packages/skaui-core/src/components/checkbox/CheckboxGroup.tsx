import clsx from 'clsx'
import React from 'react'
import { useCheckboxGroup } from 'react-aria'
import { useCheckboxGroupState } from 'react-stately'

import { getValidChildren } from '../../utils'
import styles from './Checkbox.module.css'
import { CheckboxGroupProps } from './Checkbox.types'

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

export default CheckboxGroup
