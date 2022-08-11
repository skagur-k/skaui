import clsx from 'clsx'
import { InputProps } from './Input.types'
import styles from './Input.module.css'

interface InputClassProps extends Partial<InputProps> {}

function useInputClass({
	size,
	disabled,
	required,
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
		disabled && styles.input_disabled,
		required && styles.input_required,
		unstyled && styles.input_unstyled,
		invalid && styles.input_invalid
	)

	return classes
}

export { useInputClass }
