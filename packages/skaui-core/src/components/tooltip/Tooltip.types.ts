import { PropsWithChildren } from 'react'
import {
	AriaTooltipProps,
	TooltipTriggerProps as _TriggerProps,
} from 'react-aria'
import { TooltipTriggerState } from 'react-stately'

export interface TooltipProps extends PropsWithChildren<AriaTooltipProps> {
	state: TooltipTriggerState
	position?: position
}
export interface TooltipTriggerProps extends PropsWithChildren<_TriggerProps> {
	tooltip: string
	position?: position
}

type position = 'top' | 'bottom' | 'right' | 'left'
