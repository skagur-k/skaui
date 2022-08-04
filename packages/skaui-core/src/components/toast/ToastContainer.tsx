import { useToastStateContext } from '../../contexts/ToastContext'
import Toast from './Toast'

const ToastContainer = () => {
	const { toasts } = useToastStateContext()

	return (
		<div className='w-full z-50'>
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
		</div>
	)
}

export default ToastContainer
