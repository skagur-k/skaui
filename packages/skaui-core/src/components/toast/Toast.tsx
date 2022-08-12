import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useToastDispatchContext } from '../../contexts'
import { Button } from '../button'
import styles from './Toast.module.css'
import { ActionType, IToast } from './Toast.types'

const Toast = (props: IToast) => {
	const { message, type, id, options } = props
	const types = {
		info: styles.toastInfo,
		success: styles.toastSuccess,
		error: styles.toastError,
		loading: styles.toastLoading,
	}

	const title = options?.title
	const action = options?.action

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
			<div className={styles.toastActions}>
				<Button
					size='block'
					className={styles.toastDismissButton}
					onPress={handleClick}
				>
					Dismiss
				</Button>
				{action && (
					<Button
						size='block'
						className={styles.toastActionButton}
						onPress={action.onPress}
					>
						{action.name}
					</Button>
				)}
			</div>
		</motion.div>
	)
}

export default Toast
