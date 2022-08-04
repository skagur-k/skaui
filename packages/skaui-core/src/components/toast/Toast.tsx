import React from 'react'
import { IToast } from './Toast.types'

const Toast = (props: IToast) => {
	return (
		<div className='m-1 p-2 bg-green-500 rounded-md'>
			<div className='flex flex-col'>
				<div>{props.id}</div>
				<div>{props.title}</div>
				<div>{props.message}</div>
			</div>
		</div>
	)
}

// const dispatch = useToastDispatch() -> onClick "DELETE_POST" -> id

export default Toast
