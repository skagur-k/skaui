import { useToastDispatchContext } from './../contexts/ToastContext'
import { nanoid } from 'nanoid'
import {
	ActionType,
	IToast,
	Message,
	ToastHandler,
	ToastType,
} from './../components/toast/Toast.types'

const useToast = () => {
	const dispatch = useToastDispatchContext()

	const generateToast = (
		title: string,
		message: Message,
		type: ToastType = 'info'
	): IToast => {
		const toast = {
			id: nanoid(6),
			title,
			message,
			type,
		}

		return toast
	}

	const createHandler =
		(type: ToastType): ToastHandler =>
		(message) => {
			const toast = generateToast(message, type)
			dispatch({ type: ActionType.ADD_TOAST, toast })
			return toast.id
		}

	const toast = (message: Message) => createHandler('info')(message)

	toast.errror = createHandler('error')
	toast.success = createHandler('success')
	toast.remove = (toastId?: string) =>
		dispatch({ type: ActionType.REMOVE_TOAST, toastId })

	return toast
}

export default useToast
