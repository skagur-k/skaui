import clsx from 'clsx'
import React from 'react'

import { useRadioGroup } from 'react-aria'
import { RadioGroupState, useRadioGroupState } from 'react-stately'
import { getValidChildren } from '../../utils'
import styles from './Radio.module.css'
import { RadioGroupProps } from './Radio.types'

const RadioContext = React.createContext<RadioGroupState>({} as RadioGroupState)

const RadioGroup = (props: RadioGroupProps) => {
	const { label, children, className, size = 'md', isDisabled, row } = props
	const state = useRadioGroupState(props)
	const { radioGroupProps, labelProps } = useRadioGroup(props, state)
	const sizes = {
		sm: styles.radio_sm,
		md: styles.radio_md,
		lg: styles.radio_lg,
	}

	const radioGroupClasses = clsx(styles.radiogroup, className, [
		size && sizes[size],
		row && styles.radiogroup_row,
	])

	const validChildren = getValidChildren(children)
	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			isDisabled: child.props.isDisabled || isDisabled,
			size: child.props.size || sizes[size],
		})
	})

	return (
		<div {...radioGroupProps} className={radioGroupClasses}>
			{label && (
				<div className={styles.radiogroup_label} {...labelProps}>
					{label}
				</div>
			)}

			<RadioContext.Provider value={state}>
				<div className={styles.radiogroup_items}>{copies}</div>
			</RadioContext.Provider>
		</div>
	)
}

export { RadioGroup, RadioContext }
