import clsx from 'clsx'
import { useComboBoxState } from 'react-stately'
import { ListBox } from '../listbox'
import { Popover } from '../popover'

import React from 'react'
import { useButton, useComboBox, useFilter, useHover } from 'react-aria'
import { ChevronDownIcon } from '../../icons'
import { ComboBoxProps } from './ComboBox.types'
import styles from './ComboBox.module.css'

const ComboBox = <T extends object>(props: ComboBoxProps<T>) => {
	const { isDisabled } = props
	const { contains } = useFilter({ sensitivity: 'base' })
	const state = useComboBoxState({
		...props,
		defaultFilter: contains,
		menuTrigger: 'focus',
	})

	const buttonRef = React.useRef<HTMLButtonElement>(null)
	const inputRef = React.useRef<HTMLInputElement>(null)
	const listBoxRef = React.useRef<HTMLUListElement>(null)
	const popoverRef = React.useRef<HTMLDivElement>(null)

	const {
		buttonProps: triggerProps,
		inputProps,
		listBoxProps,
		labelProps,
	} = useComboBox(
		{
			...props,
			inputRef,
			buttonRef,
			listBoxRef,
			popoverRef,
		},
		state
	)

	const { buttonProps } = useButton(triggerProps, buttonRef)
	const { hoverProps, isHovered } = useHover(props)

	return (
		<div
			className={clsx(styles.combobox, [
				isDisabled && styles.combobox_disabled,
			])}
		>
			<label className={clsx(styles.combobox_label, [])} {...labelProps}>
				{props.label}
			</label>
			<div
				{...hoverProps}
				className={clsx(styles.combobox_button, [
					isHovered && styles.combobox_button_hovered,
					state.isFocused && styles.combobox_button_focused,
				])}
			>
				<input
					{...inputProps}
					ref={inputRef}
					className={styles.combobox_input}
				/>
				<button
					{...buttonProps}
					ref={buttonRef}
					className={styles.combobox_input_button}
				>
					<ChevronDownIcon
						className={clsx(styles.combobox_input_button_icon, [
							state.isOpen && styles.combobox_input_button_icon_opened,
						])}
					/>
				</button>
			</div>
			{state.isOpen && (
				<Popover
					popoverRef={popoverRef}
					isOpen={state.isOpen}
					onClose={state.close}
					className={styles.combobox_popover}
				>
					<ListBox
						{...listBoxProps}
						listBoxRef={listBoxRef}
						state={state}
						className={styles.combobox_listbox}
					/>
				</Popover>
			)}
		</div>
	)
}

ComboBox.displayName = 'SKA UI - ComboBox'

export default ComboBox
