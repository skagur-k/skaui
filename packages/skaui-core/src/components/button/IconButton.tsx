import clsx from 'clsx'
import React from 'react'
import { useButton } from 'react-aria'
import { mergeRefs } from '../../utils'
import styles from './Button.module.css'
import { IIconButtonProps } from './Button.types'

const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
	(
		{
			children,
			variant = 'solid',
			type = 'default',
			size = 'md',
			className,
			...props
		},
		externalRef
	) => {
		const ref = React.useRef<HTMLButtonElement>(null)
		const { buttonProps } = useButton(props, ref)

		const variants = {
			solid: styles.button_solid,
			ghost: styles.button_ghost,
			iconOnly: styles.button_iconOnly,
		}

		const types = {
			default: styles.button_default,
			success: styles.button_success,
			error: styles.button_error,
			secondary: styles.button_secondary,
		}

		const sizes = {
			xs: styles.iconbutton_xs,
			sm: styles.iconbutton_sm,
			md: styles.iconbutton_md,
			lg: styles.iconbutton_lg,
			xl: styles.iconbutton_xl,
		}

		const iconSizes = {
			xs: styles.iconbutton_icon_xs,
			sm: styles.iconbutton_icon_sm,
			md: styles.iconbutton_icon_md,
			lg: styles.iconbutton_icon_lg,
			xl: styles.iconbutton_icon_xl,
		}

		const iconbuttonClasses = clsx(
			styles.button_base,
			styles.iconbutton,
			[variant && variants[variant], type && types[type], size && sizes[size]],
			className
		)

		const styledChildren = React.cloneElement(children, {
			className: clsx(size && iconSizes[size]),
		})

		const mergedRefs = mergeRefs(ref, externalRef)

		return (
			<button {...buttonProps} ref={mergedRefs} className={iconbuttonClasses}>
				{children && <div> {styledChildren}</div>}
			</button>
		)
	}
)
IconButton.displayName = 'SKA UI - IconButton'

export default IconButton
