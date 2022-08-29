import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import {
	FocusScope,
	mergeProps,
	OverlayContainer,
	useModal,
	useOverlay,
	usePreventScroll,
} from 'react-aria'
import { Tags } from '../tag'
import Image from './Image'
import styles from './Image.module.css'
import { ImageViewerProps } from './Image.types'

export const ImageViewer = (props: ImageViewerProps) => {
	const [isBrowser, setIsBrowser] = React.useState(false)

	const [isOpen, setOpen] = useState(false)

	React.useEffect(() => {
		setIsBrowser(typeof window !== 'undefined')
	}, [])

	return isBrowser ? (
		<>
			<Image {...props} onClick={() => setOpen(true)} />
			<OverlayContainer>
				<AnimatePresence exitBeforeEnter>
					{isOpen && (
						<ImageOverlay
							isOpen={isOpen}
							onClose={() => setOpen(false)}
							{...props}
						>
							<Image {...props} loading='lazy' onClick={() => setOpen(false)} />
						</ImageOverlay>
					)}
				</AnimatePresence>
			</OverlayContainer>
		</>
	) : null
}

ImageViewer.displayName = 'SKA UI - ImageViewer'

// @ts-ignore
const ImageOverlay = (props: ImageViewerProps) => {
	const { children } = props
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
	usePreventScroll()

	return (
		<motion.div
			key={'drawer'}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			<div className={styles.image_underlay} {...underlayProps}>
				<FocusScope contain restoreFocus autoFocus>
					<motion.div
						initial={{ scale: 0.5 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.5 }}
						transition={{ ease: 'easeInOut', duration: 0.2 }}
						className={clsx(styles.image_overlay, [])}
					>
						<div
							ref={ref}
							{...mergeProps(overlayProps, modalProps)}
							className={styles.image_overlay_content}
						>
							{children}
							<div className={styles.image_overlay_misc}>
								{props.tags && (
									<Tags
										className={styles.image_overlay_tags}
										removable={false}
										tags={props.tags}
									/>
								)}
							</div>
						</div>
					</motion.div>
				</FocusScope>
			</div>
		</motion.div>
	)
}
