import clsx from 'clsx'
import { InputProps } from './Input.types'
import styles from './Input.module.css'

interface InputClassProps extends Partial<InputProps<'input'>> {
	isFocused?: boolean
}

function useInputClass({
	size,
	isDisabled,
	isRequired,
	isFocused,
	invalid,
	unstyled,
}: InputClassProps) {
	const sizes = {
		sm: styles.input_sm,
		md: styles.input_md,
		lg: styles.input_lg,
	}

	const classes = clsx(
		styles.input,
		size && sizes[size],
		isDisabled && styles.input_disabled,
		isRequired && styles.input_required,
		isFocused && styles.input_focused,
		unstyled && styles.input_unstyled,
		invalid && styles.input_invalid
	)

	return classes
}

export { useInputClass }
