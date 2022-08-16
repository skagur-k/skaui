import React from 'react'
import { AriaDialogProps } from '@react-types/dialog'
import { AriaOverlayProps } from 'react-aria'

export interface ModalProps extends AriaOverlayProps, AriaDialogProps {
	title?: string
	children?: React.ReactElement
	confirmLabel?: string
	confirmAction?: () => void
}
