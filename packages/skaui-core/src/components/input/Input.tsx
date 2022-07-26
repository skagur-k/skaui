import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { mergeProps, useFocusRing, useTextField } from 'react-aria'
import XIcon from '../../icons/XIcon'
import { mergeRefs } from '../../utils'
import styles from './Input.module.css'
import { InputProps } from './Input.types'
import { useInputClass } from './styles'

const Input = forwardRef<HTMLElement, InputProps<'input'>>((props, ref) => {
	const {
		size = 'md',
		description,
		errorMessage,
		label,
		isDisabled,
		validationState,
		as: Comp = 'input',
		prefix,
		suffix,
		width = 'fit-content',
		className,
		unstyled,
	} = props

	const _ref = React.useRef(null)
	const { labelProps, inputProps, descriptionProps, errorMessageProps } =
		useTextField(props, _ref)

	const { focusProps, isFocused } = useFocusRing()

	const inputClasses = useInputClass({
		size,
		unstyled,
		validationState,
		isDisabled,
		isFocused,
	})
	return (
		<div className={clsx(inputClasses, className)}>
			<label {...labelProps} className={styles.input_label}>
				{label}
			</label>
			<div className={clsx(styles.input_wrapper)} style={{ width }}>
				{prefix && <div className={styles.input_prefix}>{prefix}</div>}
				<Comp
					className={clsx(styles.input_field, [
						prefix && styles.input_field_w_prefix,
						suffix && styles.input_field_w_suffix,
					])}
					ref={mergeRefs(ref, _ref)}
					{...mergeProps(inputProps, focusProps)}
				/>
				{suffix && <div className={styles.input_suffix}>{suffix}</div>}
			</div>
			{validationState === 'invalid' && errorMessage && (
				<div {...errorMessageProps} className={styles.input_errormsg}>
					<XIcon className={styles.input_erricon} />
					{errorMessage}
				</div>
			)}
			{description && !errorMessage && (
				<div {...descriptionProps} className={styles.input_description}>
					{description}
				</div>
			)}
		</div>
	)
})

Input.displayName = 'SKA UI - Input'

export default Input
