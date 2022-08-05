import { useToastDispatchContext } from './../contexts/ToastContext'
import { nanoid } from '../utils'
import {
	ActionType,
	IToast,
	ToastMessage,
	ToastHandler,
	ToastType,
	TOAST_POSITION,
} from './../components/toast/Toast.types'
import React from 'react'

interface useToastProps {
	position?: TOAST_POSITION
	maxToasts?: number
}

const useToast = (props?: useToastProps) => {
	const dispatch = useToastDispatchContext()
	const position = props?.position
	const maxToasts = props?.maxToasts

	React.useEffect(() => {
		dispatch({ type: ActionType.SET_POSITION, position })
		dispatch({ type: ActionType.SET_MAXTOASTS, maxToasts })
	}, [])

	const generateToast = ({
		title,
		message,
		type,
	}: {
		title?: string
		message: ToastMessage
		type: ToastType
	}): IToast => {
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
		(message, title) => {
			const toast = generateToast({ title, message, type })
			console.log(toast)

			dispatch({ type: ActionType.ADD_TOAST, toast })
			return toast.id
		}

	const toast = (message: ToastMessage, title?: string) =>
		createHandler('info')(message, title)

	toast.error = createHandler('error')
	toast.success = createHandler('success')

	toast.remove = (toastId?: string) =>
		dispatch({ type: ActionType.REMOVE_TOAST, toastId })

	return toast
}

export default useToast
