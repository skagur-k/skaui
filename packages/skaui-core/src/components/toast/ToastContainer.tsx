import clsx from 'clsx'
import { useEffect } from 'react'
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
			<div className={styles.toastContainer}>
				{toasts &&
					toasts
						.slice(0, maxToasts)
						.reverse()
						.map((toast) => {
							return (
								<Toast
									id={toast.id}
									title={toast.title}
									key={toast.id}
									type={toast.type}
									message={toast.message}
								/>
							)
						})}
			</div>
		</ToastPortal>
	)
}

export default ToastContainer
