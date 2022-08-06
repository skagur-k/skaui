import clsx from 'clsx'
import {
	AnimatePresence,
	motion,
	useIsPresent,
	usePresence,
} from 'framer-motion'
import { useToastStateContext } from '../../contexts/ToastContext'
import Toast from './Toast'
import styles from './Toast.module.css'
import ToastPortal from './ToastPortal'

const ToastContainer = () => {
	const { toasts, position, maxToasts } = useToastStateContext()

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
				<AnimatePresence>
					{toasts
						.slice(0, maxToasts)
						.reverse()
						.map((toast) => {
							return (
								<Toast
									id={toast.id}
									key={toast.id}
									title={toast.title}
									type={toast.type}
									message={toast.message}
								/>
							)
						})}
				</AnimatePresence>
			</ul>
		</ToastPortal>
	)
}

export default ToastContainer
