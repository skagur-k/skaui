import { useToastStateContext } from '../../contexts/ToastContext'
import Portal from '../../hooks/usePortal'
import Toast from './Toast'

const ToastContainer = () => {
	const { toasts } = useToastStateContext()

	return (
		<Portal className='toast-container'>
			<div className='max-w-xl mx-auto '>
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
		</Portal>
	)
}

export default ToastContainer
