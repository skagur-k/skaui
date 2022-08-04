import { IToast } from '../components/toast/Toast.types'
import { useToastDispatchContext } from '../contexts/ToastContext'
import { nanoid } from '../utils'

export function useToast() {
	const dispatch = useToastDispatchContext()

	function toast({ type, message }: Partial<IToast>) {
		const id = nanoid(8)
		dispatch({
			type: 'ADD_TOAST',
			toast: {
				type,
				message,
				id,
			},
		})

		setTimeout(() => {
			dispatch({ type: 'DELETE_TOAST', id })
		}, 4000)
	}

	return toast
}
