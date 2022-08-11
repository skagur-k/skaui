import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useFocusRing, useTextField } from 'react-aria'
import XIcon from '../../icons/XIcon'
import { mergeRefs } from '../../utils'
import { InputProps } from './Input.types'
import { useInputClass } from './styles'
import styles from './Input.module.css'

const Input = forwardRef<HTMLElement, InputProps>((props: InputProps, ref) => {
	const {
		size,
		description,
		errorMessage,
		label,
		disabled,
		invalid,
		value,
		as: Comp = 'input',
		type = 'text',
		className,
		prefix,
		suffix,
		unstyled,
		...rest
	} = props

	const _ref = React.useRef(null)
	const { labelProps, inputProps, descriptionProps, errorMessageProps } =
		useTextField(props, _ref)

	const inputClasses = useInputClass({
		size,
		disabled,
		unstyled,
		invalid,
	})

	const { focusProps, isFocused } = useFocusRing()

	return (
		<div
			className={clsx(inputClasses, className, [
				isFocused && styles.input_focused,
			])}
		>
			<label {...labelProps} className={styles.input_label}>
				{label}
			</label>
			<div className={clsx(styles.input_wrapper)}>
				{prefix && <div className={styles.input_prefix}>{prefix}</div>}
				<Comp
					{...inputProps}
					{...focusProps}
					aria-label={label}
					value={value}
					disabled={disabled}
					className={clsx(styles.input_field, [
						prefix && styles.input_field_w_prefix,
						suffix && styles.input_field_w_suffix,
					])}
					{...rest}
					ref={mergeRefs(ref, _ref)}
				/>
				{suffix && <div className={styles.input_suffix}>{suffix}</div>}
			</div>
			{errorMessage && (
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
