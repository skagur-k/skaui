import { useReducer } from 'react'
import { ToastReducer, ToastStateContext, ToastDispatchContext } from '..'
import ToastContainer from '../../components/toast/ToastContainer'

export const ToastProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(ToastReducer, {
		toasts: [],
		position: 'bottom-right',
		maxToasts: 3,
	})

	return (
		<ToastStateContext.Provider value={state}>
			<ToastDispatchContext.Provider value={dispatch}>
				{children}
				<ToastContainer />
			</ToastDispatchContext.Provider>
		</ToastStateContext.Provider>
	)
}
