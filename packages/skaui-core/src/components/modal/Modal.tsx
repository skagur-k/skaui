import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import {
	FocusScope,
	mergeProps,
	OverlayContainer,
	useDialog,
	useModal,
	useOverlay,
	usePreventScroll,
} from 'react-aria'
import { Button } from '../button'
import styles from './Modal.module.css'
import { ModalProps } from './Modal.types'

export const Modal = (props: ModalProps) => {
	const [isBrowser, setIsBrowser] = React.useState(false)
	const { children, isOpen, onExitComplete } = props

	React.useEffect(() => {
		setIsBrowser(typeof window !== 'undefined')
	}, [])

	return isBrowser ? (
		<OverlayContainer>
			<AnimatePresence exitBeforeEnter onExitComplete={onExitComplete}>
				{isOpen && <ModalDialog {...props}>{children}</ModalDialog>}
			</AnimatePresence>
		</OverlayContainer>
	) : null
}

const ModalDialog = (props: ModalProps) => {
	const { title, children, onClose, confirmLabel, confirmAction } = props
	const ref = React.useRef(null)
	const { overlayProps, underlayProps } = useOverlay(
		{
			...props,
			isDismissable: true,
		},
		ref
	)
	// usePreventScroll()
	const { modalProps } = useModal()
	const { dialogProps, titleProps } = useDialog(props, ref)
	usePreventScroll()

	return (
		<motion.div
			key={'modal'}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			<div className={styles.modal_underlay} {...underlayProps}>
				<FocusScope contain restoreFocus autoFocus>
					<motion.div
						initial={{ y: 5 }}
						animate={{ y: 0 }}
						exit={{ y: 5 }}
						transition={{ ease: 'easeInOut' }}
					>
						<div
							className={styles.modal_overlay}
							{...mergeProps(overlayProps, dialogProps, modalProps)}
							ref={ref}
						>
							<h3 className={styles.modal_title} {...titleProps}>
								{title}
							</h3>
							<div className={styles.modal_content}>{children}</div>
							<div className={styles.modal_buttons}>
								<Button onPress={onClose} type='secondary'>
									Close
								</Button>
								{confirmLabel && (
									<Button type='success' onPress={confirmAction}>
										{confirmLabel}
									</Button>
								)}
							</div>
						</div>
					</motion.div>
				</FocusScope>
			</div>
		</motion.div>
	)
}
