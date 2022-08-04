import { createContext, useReducer, useContext } from 'react'
import { IToastList } from '../components/toast/Toast.types'

const ToastStateContext = createContext<IToastList>({ toasts: [] })
const ToastDispatchContext = createContext<any>(null)

function ToastReducer(state: any, action: any) {
	switch (action.type) {
		case 'ADD_TOAST': {
			console.log('Toast Added!')
			return {
				...state,
				toasts: [...state.toasts, action.toast],
			}
		}
		case 'DELETE_TOAST': {
			console.log('Toast Removed!!')

			const updatedToasts = state.toasts.filter(
				(toast: any) => toast.id != action.id
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
