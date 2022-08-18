import clsx from 'clsx'
import { TextAreaProps } from './TextArea.types'
import styles from './TextArea.module.css'

interface TextAreaClassProps extends TextAreaProps<'textarea'> {}

function useTextAreaClass(props: TextAreaClassProps) {
	const { isDisabled, error } = props

	const classes = clsx(styles.textarea, [
		isDisabled && styles.textarea_disabled,
		error && styles.textarea_error,
	])

	return classes
}

export { useTextAreaClass }
