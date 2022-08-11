import React from 'react'
import { useCheckboxGroup } from 'react-aria'
import { useCheckboxGroupState } from 'react-stately'

import { getValidChildren } from '../../utils'
import styles from './Checkbox.module.css'
import { CheckboxGroupProps } from './Checkbox.types'

const CheckboxGroupContext = React.createContext<any>(null)

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const { children, isDisabled } = props
	const state = useCheckboxGroupState(props)
	const { groupProps, labelProps } = useCheckboxGroup(props, state)

	const validChildren = getValidChildren(children)
	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			isDisabled: child.props.isDisabled || isDisabled,
		})
	})

	return (
		<div className={styles.checkboxgroup} {...groupProps}>
			<div {...labelProps} className={styles.checkboxgroup_label}>
				<div>{props.label}</div>
			</div>
			<CheckboxGroupContext.Provider value={state}>
				<div className={styles.checkboxgroup_items}>{copies}</div>
			</CheckboxGroupContext.Provider>
		</div>
	)
}

export default CheckboxGroup
