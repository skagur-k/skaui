import { useToastDispatchContext } from '../contexts/ToastContext/ToastContext'
import { nanoid } from 'nanoid'
import {
	ActionType,
	IToast,
	ToastMessage,
	ToastHandler,
	ToastType,
	TOAST_POSITION,
	ToastOptions,
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
	}, [position, maxToasts, dispatch])

	const generateToast = ({
		message,
		type,
		options,
		duration,
	}: {
		message: IToast['message']
		type: IToast['type']
		options?: ToastOptions
		duration?: number
	}): IToast => {
		const toast: IToast = {
			id: nanoid(6),
			message,
			type,
			options,
			duration,
		}

		return toast
	}

	const createHandler =
		(type: ToastType): ToastHandler =>
		(message, options) => {
			const toast = generateToast({ message, type, options })

			dispatch({ type: ActionType.ADD_TOAST, toast })
			return toast.id
		}

	const toast = (message: ToastMessage, options?: ToastOptions) =>
		createHandler('info')(message, options)

	toast.error = createHandler('error')
	toast.success = createHandler('success')

	toast.remove = (toastId?: string) =>
		dispatch({ type: ActionType.REMOVE_TOAST, toastId })

	return toast
}

export default useToast
