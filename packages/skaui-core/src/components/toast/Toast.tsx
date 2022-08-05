import { IToast } from './Toast.types'
import styles from './Toast.module.css'

const Toast = (props: IToast) => {
	return (
		<div className={styles.wrapper}>
			<div className='flex border-2 text-red-500 m-4'>
				<div>{props.id}</div>
				<div>{props.title}</div>
				<div>{props.message}</div>
			</div>
		</div>
	)
}

export default Toast
