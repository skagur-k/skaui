import { useToastStateContext } from '../../contexts/ToastContext'
import { usePortal } from '../../hooks'
import Toast from './Toast'

const ToastContainer = () => {
	const { toasts } = useToastStateContext()
	const ToastPortal = usePortal('skaui-toastbox')
	return (
		<ToastPortal>
			<div className='absolute bottom-4 right-10 max-w-xl mx-auto '>
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
