import clsx from 'clsx'
import { useToastDispatchContext } from '../../contexts'
import styles from './Toast.module.css'
import { ActionType, IToast } from './Toast.types'
import { motion } from 'framer-motion'

const Toast = (props: IToast) => {
	const { title, message, type, id } = props

	const types = {
		info: styles.toastInfo,
		success: styles.toastSuccess,
		error: styles.toastError,
	}

	const dispatch = useToastDispatchContext()

	function handleClick() {
		dispatch({ type: ActionType.REMOVE_TOAST, toastId: id })
	}

	const transiton = {
		initial: {
			y: 200,
			x: 0,
		},
		animate: {
			y: 0,
			x: 0,
		},
		exit: {
			x: 800,
			y: 0,
		},
		transition: {
			y: {
				duration: 0.4,
				ease: 'easeInOut',
			},
			x: {
				duration: 0.05,
				ease: 'linear',
			},
		},
	}

	return (
		<motion.div
			{...transiton}
			layout
			className={clsx(styles.toast, types[type])}
		>	
			<div className={styles.toastContentWrapper}>
				{title && <div className={styles.toastTitle}>{title}</div>}
				<div className={styles.toastMessage}>{message}</div>
			</div>
			<button className={styles.toastDismissButton} onClick={handleClick}>
				Dismiss
			</button>
		</motion.div>
	)
}

export default Toast
