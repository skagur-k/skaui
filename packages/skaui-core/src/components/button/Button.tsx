import React from 'react'
import { useButton } from 'react-aria'
import { ButtonProps } from './Button.types'
import styles from './Button.module.css'
import clsx from 'clsx'
import { mergeRefs } from '../../utils'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			variant = 'solid',
			type,
			size = 'md',
			prefix,
			suffix,
			align = 'center',
			className,
			...props
		},
		externalRef
	) => {
		const ref = React.useRef<HTMLButtonElement>(null)
		const { buttonProps } = useButton(
			{
				...props,
			},
			ref
		)

		const variants = {
			solid: styles.button_solid,
			ghost: styles.button_ghost,
			text: styles.button_text,
		}

		const types = {
			success: styles.button_success,
			error: styles.button_error,
			secondary: styles.button_secondary,
		}

		const sizes = {
			sm: styles.button_sm,
			md: styles.button_md,
			lg: styles.button_lg,
			block: styles.button_block,
		}

		const alignments = {
			start: styles.button_start,
			grow: styles.button_grow,
			end: styles.button_end,
			center: styles.button_center,
		}

		const buttonClasses = clsx(
			styles.button_base,
			[variant && variants[variant], type && types[type], size && sizes[size]],
			className
		)

		const mergedRefs = mergeRefs(ref, externalRef)

		return (
			<button
				{...buttonProps}
				ref={mergedRefs}
				className={buttonClasses}
				{...props}
			>
				{prefix && <span className={styles.button_prefix}>{prefix}</span>}
				{children && (
					<span className={clsx(alignments[align])}> {children}</span>
				)}
				{suffix && <span className={styles.button_suffix}>{suffix}</span>}
			</button>
		)
	}
)
Button.displayName = 'SKA UI - Button'

export default Button
