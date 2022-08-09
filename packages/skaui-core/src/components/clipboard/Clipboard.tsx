import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useToast } from '../../hooks'
import { CheckIcon, ClipboardIcon } from '../../icons'
import styles from './Clipboard.module.css'

const Clipboard = ({
	copyText,
	className,
	size = 'md',
}: {
	copyText?: string
	className?: string
	size?: 'sm' | 'md'
}) => {
	let timer: NodeJS.Timeout
	const [isCopied, setIsCopied] = React.useState(false)
	const toast = useToast()

	function handleCopy() {
		clearTimeout(timer)
		navigator.clipboard.writeText(copyText || '')
		setIsCopied(true)
		toast('Copied')
		timer = setTimeout(() => {
			setIsCopied(false)
		}, 2000)
	}

	const variants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	const sizes = {
		sm: styles.sm,
		md: styles.md,
	}

	return (
		<div className={clsx(className, styles.wrapper)}>
			<AnimatePresence exitBeforeEnter>
				{isCopied ? (
					<motion.button
						key={'copied'}
						variants={variants}
						initial='hidden'
						animate='show'
						exit='hidden'
						transition={{ duration: 0.2 }}
					>
						<CheckIcon
							className={clsx(styles.icons, styles.copied, [
								size && sizes[size],
							])}
						/>
					</motion.button>
				) : (
					<motion.button
						key={'clipboard'}
						onClick={handleCopy}
						variants={variants}
						initial='hidden'
						animate='show'
						exit='hidden'
						transition={{ duration: 0.2 }}
					>
						<ClipboardIcon
							className={clsx(styles.icons, styles.clipboard, [
								size && sizes[size],
							])}
						/>
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Clipboard
