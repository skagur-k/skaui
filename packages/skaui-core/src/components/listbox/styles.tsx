import clsx from 'clsx'
import { ListBoxProps } from './ListBox.types'
import styles from './ListBox.module.css'

interface ListBoxOptionClassProps extends Partial<ListBoxProps> {
	isDisabled?: boolean
	isSelected?: boolean
	isFocused?: boolean
}

function useListBoxOptionClass(props: ListBoxOptionClassProps) {
	const { isDisabled, isSelected, isFocused } = props

	const classes = clsx(styles.listbox_option, [
		isDisabled && styles.listbox_option_disabled,
		isSelected && styles.listbox_option_selected,
		isFocused && styles.listbox_option_focused,
	])

	return classes
}

export { useListBoxOptionClass }
