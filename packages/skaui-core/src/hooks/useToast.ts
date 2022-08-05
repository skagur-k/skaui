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
}

const useToast = ({ position = 'bottom-right' }: useToastProps) => {
	const dispatch = useToastDispatchContext()

	React.useEffect(() => {
		dispatch({ type: ActionType.SET_POSITION, position }), []
	})

	const generateToast = (
		title: string,
		message: ToastMessage,
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

	const toast = (message: ToastMessage) => createHandler('info')(message)

	toast.errror = createHandler('error')
	toast.success = createHandler('success')
	toast.remove = (toastId?: string) =>
		dispatch({ type: ActionType.REMOVE_TOAST, toastId })

	return toast
}

export default useToast
