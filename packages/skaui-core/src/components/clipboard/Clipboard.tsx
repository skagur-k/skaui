import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { CheckIcon, ClipboardIcon } from '../../icons'
import styles from './Clipboard.module.css'

const Clipboard = ({
	copyText,
	className,
}: {
	copyText?: string
	className?: string
}) => {
	let timer: NodeJS.Timeout
	const [isCopied, setIsCopied] = React.useState(false)

	function handleCopy() {
		clearTimeout(timer)
		navigator.clipboard.writeText(copyText || '')
		setIsCopied(true)

		timer = setTimeout(() => {
			setIsCopied(false)
		}, 2000)
	}

	const variants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
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
						<CheckIcon className={clsx(styles.icons, styles.copied)} />
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
						<ClipboardIcon className={clsx(styles.icons, styles.clipboard)} />
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Clipboard
