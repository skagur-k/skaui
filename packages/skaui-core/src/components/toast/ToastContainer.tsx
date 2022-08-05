import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useToastStateContext } from '../../contexts/ToastContext'
import { usePortal } from '../../hooks'
import Toast from './Toast'
import styles from './Toast.module.css'

const ToastContainer = () => {
	const { toasts, position, maxToasts } = useToastStateContext()

	const ToastPortal = usePortal('skaui-toastbox')

	const positions = {
		'top-right': styles.containerWrapperTR,
		'bottom-right': styles.containerWrapperBR,
		'top-left': styles.containerWrapperTL,
		'bottom-left': styles.containerWrapperBL,
	}
	const WrapperPosition = positions[position]

	return (
		<ToastPortal className={clsx(styles.containerWrapper, WrapperPosition)}>
			<ul className={styles.toastContainer}>
				<AnimatePresence exitBeforeEnter>
					{toasts
						.slice(0, maxToasts)
						.reverse()
						.map((toast) => (
							<div>
								<motion.li
									initial={{
										y: 100,
										x: 0,
									}}
									animate={{
										y: 0,
										x: 0,
									}}
									exit={{
										opacity: 0,
									}}
									transition={{
										duration: 0.5,
									}}
									key={toast.id}
									layout
								>
									<Toast
										id={toast.id}
										title={toast.title}
										type={toast.type}
										message={toast.message}
									/>
								</motion.li>
							</div>
						))}
				</AnimatePresence>
			</ul>
		</ToastPortal>
	)
}

export default ToastContainer
