import React from 'react'
import {
	FocusScope,
	mergeProps,
	useDialog,
	useModal,
	useOverlay,
	usePreventScroll,
} from 'react-aria'
import { Button } from '../button'
import styles from './Modal.module.css'
import { ModalProps } from './Modal.types'
import { AnimatePresence, motion } from 'framer-motion'

const Modal = (props: ModalProps) => {
	const { title, children, onClose, confirmLabel, confirmAction, isOpen } =
		props

	const ref = React.useRef(null)

	const { overlayProps, underlayProps } = useOverlay(
		{
			...props,
			isDismissable: true,
		},
		ref
	)

	usePreventScroll()
	const { modalProps } = useModal()

	const { dialogProps, titleProps } = useDialog(props, ref)

	return (
		<AnimatePresence exitBeforeEnter>
			{isOpen && (
				<motion.div
					key={'modal'}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className={styles.modal_underlay} {...underlayProps}>
						<FocusScope contain restoreFocus autoFocus>
							<motion.div
								initial={{ y: 40 }}
								animate={{ y: 0 }}
								exit={{ y: 20 }}
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
											<Button onPress={confirmAction}>{confirmLabel}</Button>
										)}
									</div>
								</div>
							</motion.div>
						</FocusScope>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Modal
