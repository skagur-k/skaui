import React from 'react'
import { AriaDialogProps } from '@react-types/dialog'
import { AriaOverlayProps } from 'react-aria'

export interface DrawerProps extends AriaOverlayProps, AriaDialogProps {
	children?: React.ReactElement
	position?: 'right' | 'left' | 'top' | 'bottom'
}
