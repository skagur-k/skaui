import { createContext, useReducer, useContext } from 'react'
import { Action, ActionType, IToasts } from '../components/toast/Toast.types'

const ToastStateContext = createContext<IToasts>({ toasts: [] })
const ToastDispatchContext = createContext<any>(null)

const TOAST_LIMIT = 10

function ToastReducer(state: IToasts, action: Action) {
	switch (action.type) {
		case ActionType.ADD_TOAST: {
			console.log('Toast Added!')
			return {
				...state,
				toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
			}
		}

		case ActionType.REMOVE_TOAST: {
			console.log('Toast Removed!!')

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

export const ToastProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(ToastReducer, {
		toasts: [],
	})

	return (
		<ToastStateContext.Provider value={state}>
			<ToastDispatchContext.Provider value={dispatch}>
				{children}
			</ToastDispatchContext.Provider>
		</ToastStateContext.Provider>
	)
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
