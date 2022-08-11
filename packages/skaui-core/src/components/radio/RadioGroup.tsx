import clsx from 'clsx'
import React from 'react'

import { useRadioGroup } from 'react-aria'
import { RadioGroupState, useRadioGroupState } from 'react-stately'
import { getValidChildren } from '../../utils'
import styles from './Radio.module.css'
import { RadioGroupProps } from './Radio.types'

const RadioContext = React.createContext<RadioGroupState>({} as RadioGroupState)

const RadioGroup = (props: RadioGroupProps) => {
	const { label, disabled, children, className } = props
	const state = useRadioGroupState(props)
	const { radioGroupProps, labelProps } = useRadioGroup(props, state)

	const radioGroupClasses = clsx(styles.radiogroup, className)

	const validChildren = getValidChildren(children)

	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			disabled: child.props.disabled || disabled,
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
