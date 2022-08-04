export interface IToast {
	id?: string
	title?: string
	message?: string
	type?: string
}

export interface IToastList {
	toasts: IToast[]
}
