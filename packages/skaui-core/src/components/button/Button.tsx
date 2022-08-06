import React from 'react'
import { useButton } from 'react-aria'
import { IButtonProps } from './Button.types'
import styles from './Button.module.css'
import clsx from 'clsx'
import { mergeRefs } from '../../utils'

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
	(
		{ children, variant = 'solid', type = 'default', size = 'md', ...props },
		externalRef
	) => {
		const ref = React.useRef<HTMLButtonElement>(null)
		const { buttonProps } = useButton(props, ref)

		const variants = {
			solid: styles.button_solid,
			ghost: styles.button_ghost,
			text: styles.button_text,
		}

		const types = {
			default: styles.button_default,
			success: styles.button_success,
			error: styles.button_error,
			secodary: styles.button_secondary,
		}

		const sizes = {
			xs: styles.button_xs,
			sm: styles.button_sm,
			md: styles.button_md,
			lg: styles.button_lg,
			xl: styles.button_xl,
		}

		const buttonClasses = clsx(styles.button_base, [
			variant && variants[variant],
			type && types[type],
			size && sizes[size],
		])

		const mergedRefs = mergeRefs(ref, externalRef)

		return (
			<button {...buttonProps} ref={mergedRefs} className={buttonClasses}>
				{children}
			</button>
		)
	}
)

export default Button
