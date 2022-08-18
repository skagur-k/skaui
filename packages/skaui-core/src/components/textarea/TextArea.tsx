import clsx from 'clsx'
import React from 'react'
import { mergeProps, useTextField } from 'react-aria'
import { useTextAreaClass } from './styles'
import styles from './TextArea.module.css'
import { TextAreaProps } from './TextArea.types'

const TextArea = (props: TextAreaProps<'textarea'>) => {
	const {
		label,
		placeholder,
		isDisabled,
		rows = 5,
		error = false,
		className,
	} = props

	const ref = React.useRef(null)
	const { labelProps, inputProps } = useTextField(
		{
			...props,
			inputElementType: 'textarea',
		},
		ref
	)

	const textAreaClasses = useTextAreaClass({
		isDisabled,
		error,
	})
	return (
		<div className={styles.textarea_wrapper}>
			<label {...labelProps} className={styles.textarea_label}>
				{label}
			</label>
			<textarea
				className={clsx(textAreaClasses, className)}
				placeholder={placeholder}
				rows={rows}
				disabled={isDisabled}
				ref={ref}
				{...mergeProps(inputProps)}
			/>
		</div>
	)
}

export default TextArea
