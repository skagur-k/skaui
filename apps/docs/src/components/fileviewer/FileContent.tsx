import React from 'react'
import styles from './FileViewer.module.css'
import { IFile, Language } from './FileViewer.types'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import CodeRenderer from './CodeRenderer'

const FileContent = ({
	file,
	lineNumbers,
}: {
	file: IFile
	lineNumbers: boolean
}) => {
	const { slug, content } = file
	return (
		<AnimatePresence exitBeforeEnter>
			<div className={styles.filecontentWrapper}>
				<motion.div
					key={file.slug}
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0, height: 0 }}
					transition={{
						opacity: { duration: 0.5 },
						height: { duration: 0.2 },
						ease: 'linear',
					}}
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
							<span className={styles.filecontentMsg}>
								Please select a file.
							</span>
						) : !content && slug ? (
							<span className={styles.filecontentMsg}>File Empty</span>
						) : (
							<CodeRenderer code={content!} lineNumbers={lineNumbers} />
						)}
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	)
}

export default FileContent
