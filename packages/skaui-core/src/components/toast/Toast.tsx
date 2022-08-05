import { ActionType, IToast } from './Toast.types'
import styles from './Toast.module.css'
import clsx from 'clsx'
import { useToastDispatchContext } from '../../contexts'
import { useMediaQuery } from '../../hooks'

const Toast = (props: IToast) => {
	const { title, message, type, id, icon } = props

	const types = {
		info: styles.toastInfo,
		success: styles.toastSuccess,
		error: styles.toastError,
	}

	const dispatch = useToastDispatchContext()

	const isMobile = useMediaQuery('(max-width: 768px)')

	console.log(isMobile)

	function handleClick() {
		dispatch({ type: ActionType.REMOVE_TOAST, toastId: id })
	}

	return (
		<div className={clsx(styles.toast, types[type])}>
			<div className={styles.toastContentWrapper}>
				{title && <div className={styles.toastTitle}>{title}</div>}
				<div className={styles.toastMessage}>{message}</div>
			</div>
			<button className={styles.toastDismissButton} onClick={handleClick}>
				Dismiss
			</button>
		</div>
	)
}

export default Toast
