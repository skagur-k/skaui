import { useButton, useHover } from 'react-aria'
import { getValidChildren, mergeRefs } from '../../utils'
import clsx from 'clsx'
import React, { forwardRef, PropsWithChildren, useRef, useState } from 'react'
import { ButtonGroupProps, ButtonProps } from './Button.types'
import { useButtonClass } from './styles'

export const Button = forwardRef<
	HTMLButtonElement,
	PropsWithChildren<ButtonProps>
>((props: ButtonProps, extRef: React.Ref<HTMLButtonElement | null>) => {
	const {
		size,
		rounded,
		variant = 'solid',
		type,
		block,
		color,
		focusafterclick = true,
		icon,
		notification,
		className,
		children,
		disabled,
		loading,
		onClick,
		...rest
	} = props
	const buttonRef = useRef<HTMLButtonElement>(null)

	const [isFocused, setFocused] = useState(false)
	const { hoverProps, isHovered } = useHover({
		isDisabled: disabled || loading,
	})
	const { buttonProps, isPressed } = useButton(
		{
			type: 'submit',
			isDisabled: disabled || loading,
			onFocusChange: setFocused,
			onKeyDown: (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick?.(e as any)
					setFocused(true)
				}
				return e
			},
			onPressEnd: (e) => {
				if (e.pointerType === 'touch') {
				}
				if (e.pointerType === 'mouse') {
					focusafterclick ? '' : e.target.blur()
				}
				return e
			},
			onPressStart: (e) => {
				if (e.pointerType === 'mouse') {
					setFocused(true)
				}
				return e
			},
			onPress: (e) => {
				onClick?.(e as any)
			},
		},
		buttonRef
	)

	const classes = useButtonClass({
		variant,
		size,
		type,
		disabled,
		loading,
		rounded,
	})

	return (
		<button
			{...buttonProps}
			{...hoverProps}
			data-focus={isFocused ? '' : null}
			data-active={isPressed ? '' : null}
			data-hover={isHovered ? '' : null}
			data-loading={loading ? '' : null}
			data-color={color}
			className={clsx(
				[classes, !!icon ? (!!children ? '' : 'icononly') : ''],
				className
			)}
			{...rest}
			ref={mergeRefs(buttonRef, extRef)}
		>
			{loading && (
				<span>
					{
						<div
							className={`btn-spinner ${loading ? 'opacity-100' : 'opacity-0'}`}
						></div>
					}
				</span>
			)}
			<span className={`btn-content ${loading ? 'opacity-0' : 'opacity-100'}`}>
				{icon && <span className={clsx('btn-icon')}>{icon}</span>}
				{children}
			</span>
			{notification && <div className='btn-notification' />}
		</button>
	)
})

Button.displayName = 'Button'

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	(props, ref) => {
		const {
			size,
			color,
			variant,
			attached,
			rounded,
			disabled,
			children,
			className,
			...rest
		} = props

		const validChildren = getValidChildren(children)
		const copies = validChildren.map((child) => {
			return React.cloneElement(child, {
				size: size || child.props.size,
				color: child.props.color || color,
				variant: child.props.variant || variant,
				disabled: child.props.disabled || disabled,
				rounded: child.props.rounded || rounded,
				focusafterclick: true,
			})
		})

		return (
			<div
				ref={ref}
				role='group'
				className={clsx(
					'btn-group',
					attached && 'btn-group-attached',
					rounded && 'btn-group-rounded',
					className
				)}
				{...rest}
			>
				{copies}
			</div>
		)
	}
)
ButtonGroup.displayName = 'ButtonGroup'
