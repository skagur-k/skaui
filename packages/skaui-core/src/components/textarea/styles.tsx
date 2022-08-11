import clsx from 'clsx'
import { TextAreaProps } from './TextArea.types'
import styles from './TextArea.module.css'

interface TextAreaClassProps extends TextAreaProps {
	isFocused: boolean
}

function useTextAreaClass(props: TextAreaClassProps) {
	const { disabled, error, isFocused } = props

	const classes = clsx(styles.textarea, [
		disabled && styles.textarea_disabled,
		error && styles.textarea_error,
		isFocused && styles.textarea_focused,
	])

	return classes
}

export { useTextAreaClass }
