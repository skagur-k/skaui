import { mergeProps, useTooltip, useTooltipTrigger } from 'react-aria'
import { TooltipProps, TooltipTriggerProps } from './Tooltip.types'
import styles from './Tooltip.module.css'
import { useTooltipTriggerState } from 'react-stately'
import React from 'react'
import { Button } from '../button'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

export const Tooltip = (props: TooltipProps) => {
	const { children, state, position = 'bottom' } = props

	const { tooltipProps } = useTooltip(props, state)
	const positions = {
		top: styles.tooltip_top,
		bottom: styles.tooltip_bottom,
		left: styles.tooltip_left,
		right: styles.tooltip_right,
	}

	return (
		<span
			className={clsx(styles.tooltip, [position && positions[position]])}
			{...mergeProps(props, tooltipProps)}
		>
			{children}
		</span>
	)
}

export const TooltipTrigger = (props: TooltipTriggerProps) => {
	const state = useTooltipTriggerState(props)
	const ref = React.useRef(null)
	const { position, tooltip, children } = props
	const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref)

	return (
		<span className={styles.trigger}>
			<Button ref={ref} {...triggerProps}>
				{children}
			</Button>

			<AnimatePresence exitBeforeEnter>
				{state.isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.2 }}
					>
						<Tooltip state={state} {...tooltipProps} position={position}>
							{tooltip}
						</Tooltip>
					</motion.div>
				)}
			</AnimatePresence>
		</span>
	)
}
