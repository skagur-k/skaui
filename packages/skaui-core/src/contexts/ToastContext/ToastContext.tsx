import { createContext, useContext } from 'react'
import {
	Action,
	ActionType,
	IToaster,
} from '../../components/toast/Toast.types'

export const ToastStateContext = createContext<IToaster | null>(null)
export const ToastDispatchContext = createContext<any>(null)

// TODO: Toast transitions

export function ToastReducer(state: IToaster, action: Action) {
	switch (action.type) {
		case ActionType.SET_POSITION: {
			return {
				...state,
				position: action.position || state.position,
			}
		}

		case ActionType.SET_MAXTOASTS: {
			return {
				...state,
				maxToasts: action.maxToasts || state.maxToasts,
			}
		}

		case ActionType.ADD_TOAST: {
			return {
				...state,
				toasts: [action.toast, ...state.toasts].slice(0, state.maxToasts),
			}
		}

		case ActionType.REMOVE_TOAST: {
			// Remove all toasts if no id is provided.
			if (action.toastId === undefined) {
				return {
					...state,
					toasts: [],
				}
			}

			// Filter toast that has the provided id.
			const updatedToasts = state.toasts.filter(
				(toast: any) => toast.id != action.toastId
			)

			return {
				...state,
				toasts: updatedToasts,
			}
		}
		default: {
			throw new Error('Unhandled Toast Reducer Action')
		}
	}
}

export const useToastStateContext = () => {
	const stateContext = useContext(ToastStateContext)
	if (!stateContext) {
		throw Error('useToastStateContext must be used inside Toast Provider')
	}
	return stateContext
}

export const useToastDispatchContext = () => {
	const dispatchContext = useContext(ToastDispatchContext)
	if (!dispatchContext) {
		throw Error('useToastDispatchContext must be used inside Toast Provider')
	}
	return dispatchContext
}
