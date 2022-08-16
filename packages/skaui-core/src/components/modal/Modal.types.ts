import React from 'react'
import { AriaDialogProps } from '@react-types/dialog'

export interface ModalProps extends OverlayProps, AriaDialogProps {
	title?: string
	children?: React.ReactElement
	confirmLabel?: string
	confirmAction?: () => void
}

interface OverlayProps {
	/** Whether the overlay is currently open. */
	isOpen?: boolean
	/** Handler that is called when the overlay should close. */
	onClose?: () => void
	/**
	 * Whether to close the overlay when the user interacts outside it.
	 * @default false
	 */
	isDismissable?: boolean
	/** Whether the overlay should close when focus is lost or moves outside it. */
	shouldCloseOnBlur?: boolean
	/**
	 * Whether pressing the escape key to close the overlay should be disabled.
	 * @default false
	 */
	isKeyboardDismissDisabled?: boolean
	/**
	 * When user interacts with the argument element outside of the overlay ref,
	 * return true if onClose should be called.  This gives you a chance to filter
	 * out interaction with elements that should not dismiss the overlay.
	 * By default, onClose will always be called on interaction outside the overlay ref.
	 */
	shouldCloseOnInteractOutside?: (element: HTMLElement) => boolean
}
