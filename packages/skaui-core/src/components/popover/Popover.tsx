import clsx from 'clsx'
import React from 'react'
import { DismissButton, FocusScope, useOverlay } from 'react-aria'
import styles from './Popover.module.css'
import { PopoverProps } from './Popover.types'

const Popover = (props: PopoverProps) => {
	const ref = React.useRef<HTMLDivElement>(null)
	const { popoverRef = ref, isOpen, onClose, children, className } = props

	const { overlayProps } = useOverlay(
		{
			isOpen,
			onClose,
			shouldCloseOnBlur: true,
			isDismissable: false,
		},
		popoverRef
	)

	return (
		<FocusScope restoreFocus>
			<div
				ref={popoverRef}
				className={clsx(styles.popover, className)}
				{...overlayProps}
			>
				{children}
				{/* Hidden DismissButton to allow ScreenReader users to dismiss the popover */}
				<DismissButton onDismiss={onClose} />
			</div>
		</FocusScope>
	)
}

export default Popover
