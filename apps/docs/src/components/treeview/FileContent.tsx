import React from 'react'
import styles from './TreeView.module.css'
import { IFile } from './TreeView.types'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const FileContent = ({ file }: { file: IFile }) => {
	const { slug, content } = file
	return (
		<div className={styles.filecontentWrapper}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3, ease: 'linear' }}
				key={slug}
				className={styles.filecontent}
			>
				<div className={styles.filecontentSlug}>{slug && slug}</div>
				<div
					className={clsx([
						content
							? styles.filecontentContent
							: styles.filecontentContentNoFile,
					])}
				>
					{!content && !slug ? (
						<span className={styles.filecontentMsg}>Please select a file.</span>
					) : !content && slug ? (
						<span className={styles.filecontentMsg}>Empty</span>
					) : (
						content
					)}
				</div>
			</motion.div>
		</div>
	)
}

export default FileContent
