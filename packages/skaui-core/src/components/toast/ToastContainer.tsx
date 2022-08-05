import clsx from 'clsx'
import { useToastStateContext } from '../../contexts/ToastContext'
import { usePortal } from '../../hooks'
import Toast from './Toast'
import styles from './Toast.module.css'

const ToastContainer = () => {
	const { toasts, position } = useToastStateContext()

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
			<div>
				{toasts &&
					toasts.map((toast) => {
						return (
							<Toast
								id={toast.id}
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
