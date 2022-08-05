export type Renderable = JSX.Element | string | null
export interface IToast {
	id: string
	title?: string
	icon?: Renderable
	message: Message
	type: ToastType
}

export type Message = string
export type ToastType = 'success' | 'error' | 'info' | 'loading'
export type ToastHandler = (message: Message) => string

export interface IToasts {
	toasts: IToast[]
}

export enum ActionType {
	ADD_TOAST,
	REMOVE_TOAST,
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

// export type DefaultToastOptions = ToastOptions & {
// 	[key in ToastType]: ToastOptions
// }
