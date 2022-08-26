import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import {
	FocusScope,
	mergeProps,
	OverlayContainer,
	useModal,
	useOverlay,
	usePreventScroll,
} from 'react-aria'
import styles from './Drawer.module.css'
import { DrawerProps } from './Drawer.types'

export const Drawer = (props: DrawerProps) => {
	const [isBrowser, setIsBrowser] = React.useState(false)
	const { children, isOpen } = props

	React.useEffect(() => {
		setIsBrowser(typeof window !== 'undefined')
	}, [])

	return isBrowser ? (
		<OverlayContainer>
			<AnimatePresence exitBeforeEnter>
				{isOpen && <DrawerOverlay {...props}>{children}</DrawerOverlay>}
			</AnimatePresence>
		</OverlayContainer>
	) : null
}

Drawer.displayName = 'SKA UI - Drawer'

// @ts-ignore
const DrawerOverlay = (props: DrawerProps) => {
	const { children, position = 'right' } = props
	const ref = React.useRef(null)
	const { overlayProps, underlayProps } = useOverlay(
		{
			...props,
			isDismissable: true,
		},
		ref
	)

	const positions = {
		right: styles.drawer_position_right,
		left: styles.drawer_position_left,
		top: styles.drawer_position_top,
		bottom: styles.drawer_position_bottom,
	}

	const transitions = {
		right: {
			initial: { x: 100 },
			animate: { x: 0 },
			exit: { x: 100 },
		},
		left: {
			initial: { x: -100 },
			animate: { x: 0 },
			exit: { x: -100 },
		},
		top: {
			initial: { y: -100 },
			animate: { y: 0 },
			exit: { y: -100 },
		},
		bottom: {
			initial: { y: 100 },
			animate: { y: 0 },
			exit: { y: 100 },
		},
	}

	// usePreventScroll()
	const { modalProps } = useModal()
	usePreventScroll()

	return (
		<motion.div
			key={'drawer'}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			<div className={styles.drawer_underlay} {...underlayProps}>
				<FocusScope contain restoreFocus autoFocus>
					<motion.div
						{...transitions[position]}
						transition={{ ease: 'easeInOut' }}
						className={clsx(styles.drawer_overlay, [
							position && positions[position],
						])}
					>
						<div
							ref={ref}
							{...mergeProps(overlayProps, modalProps)}
							className={styles.drawer_overlay_content}
						>
							{children}
						</div>
					</motion.div>
				</FocusScope>
			</div>
		</motion.div>
	)
}
