import { IButtonGroupProps } from './Button.types'
import React, { forwardRef } from 'react'
import { getValidChildren } from '../../utils'
import clsx from 'clsx'
import styles from './Button.module.css'

const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroupProps>(
	(props, ref) => {
		const {
			size = 'md',
			variant = 'solid',
			type = 'default',
			attached,
			disabled,
			children,
			...rest
		} = props

		const variants = {
			solid: styles.button_solid,
			ghost: styles.button_ghost,
			text: styles.button_text,
		}

		const sizes = {
			sm: styles.button_sm,
			md: styles.button_md,
			lg: styles.button_lg,
			block: styles.button_block,
		}

		const types = {
			default: styles.button_default,
			success: styles.button_success,
			error: styles.button_error,
			secondary: styles.button_secondary,
		}

		const validChildren = getValidChildren(children)
		const copies = validChildren.map((child) => {
			return React.cloneElement(child, {
				className: clsx(child.props.className, [
					child.props.size || (size && sizes[size]),
					child.props.variant || (variant && variants[variant]),
					child.props.type || (type && types[type]),
				]),
			})
		})

		return (
			<div
				ref={ref}
				role='group'
				className={clsx(
					styles.button_group,
					attached && styles.button_group_attached
				)}
				{...rest}
			>
				{copies}
			</div>
		)
	}
)
ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
