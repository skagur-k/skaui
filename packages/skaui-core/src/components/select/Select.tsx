import clsx from 'clsx'
import React from 'react'
import {
	HiddenSelect,
	mergeProps,
	useButton,
	useFocusRing,
	useHover,
	useSelect,
} from 'react-aria'
import { useSelectState } from 'react-stately'
import { ChevronDownIcon } from '../../icons'
import { ListBox } from '../listbox'
import { Popover } from '../popover'
import styles from './Select.module.css'
import { SelectProps } from './Select.types'

const Select = <T extends object>(props: SelectProps<T>) => {
	const { isDisabled, placeholder = 'Select an Option' } = props
	const state = useSelectState(props)
	const ref = React.useRef(null)
	const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
		props,
		state,
		ref
	)

	const { buttonProps } = useButton(triggerProps, ref)
	const { focusProps, isFocused } = useFocusRing()
	const { hoverProps, isHovered } = useHover(props)

	return (
		<div
			className={clsx(styles.select, [isDisabled && styles.select_disabled])}
		>
			<div className={clsx(styles.select_label, [])} {...labelProps}>
				{props.label}
			</div>
			<HiddenSelect
				state={state}
				triggerRef={ref}
				label={props.label}
				name={props.name}
			/>
			<button
				{...mergeProps(buttonProps, focusProps, hoverProps)}
				ref={ref}
				disabled={props.isDisabled}
				className={clsx(styles.select_button, [
					isHovered && styles.select_button_hovered,
					isFocused && styles.select_button_focused,
					state.isOpen && styles.select_button_opened,
				])}
			>
				<div className={styles.select_button_content} {...valueProps}>
					{state.selectedItem ? state.selectedItem.rendered : placeholder}
				</div>
				<ChevronDownIcon
					className={clsx(styles.select_button_icon, [
						state.isOpen && styles.select_button_icon_opened,
					])}
				/>
			</button>

			{state.isOpen && (
				<Popover
					isOpen={state.isOpen}
					onClose={state.close}
					className={clsx(styles.select_popover)}
				>
					<ListBox state={state} {...menuProps} />
				</Popover>
			)}
		</div>
	)
}

Select.displayName = 'SKA UI - Select'

export default Select
