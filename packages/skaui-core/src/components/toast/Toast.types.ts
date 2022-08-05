export type Renderable = JSX.Element | string | null
export interface IToast {
	id: string
	title?: string
	icon?: Renderable
	message: ToastMessage
	type: ToastType
}

export type ToastMessage = string
export type ToastType = 'success' | 'error' | 'info' | 'loading'
export type ToastHandler = (message: ToastMessage) => string

export type TOAST_POSITION =
	| 'top-right'
	| 'top-left'
	| 'bottom-right'
	| 'bottom-left'

export interface IToaster {
	toasts: IToast[]
	position: TOAST_POSITION
	maxToasts: number
}

export enum ActionType {
	ADD_TOAST,
	REMOVE_TOAST,
	SET_POSITION,
	SET_MAXTOASTS,
}

export type Action =
	| {
			type: ActionType.ADD_TOAST
			toast: IToast
	  }
	| {
			type: ActionType.REMOVE_TOAST
			toastId?: string
	  }
	| {
			type: ActionType.SET_POSITION
			position: TOAST_POSITION
	  }
	| {
			type: ActionType.SET_MAXTOASTS
			position: number
	  }
