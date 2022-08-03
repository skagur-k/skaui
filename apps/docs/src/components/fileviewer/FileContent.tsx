import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { FiEye, FiFile } from 'react-icons/fi'
import CodeRenderer from './CodeRenderer'
import styles from './FileViewer.module.css'
import { IFile } from './FileViewer.types'
import { useFileViewer } from './FileViewerContext'

const FileContent = ({
	file,
	lineNumbers,
}: {
	file: IFile
	lineNumbers: boolean
}) => {
	const { selectedFile } = useFileViewer()
	const { slug, content, language, highlight } = selectedFile

	useEffect(() => {}, [content])
	return (
		<div className={styles.filecontentWrapper}>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={file.slug}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						opacity: { duration: 0.1 },
						ease: 'linear',
					}}
					className={styles.filecontent}
				>
					{slug && (
						<div className='flex flex-col items-center justify-center gap-2'>
							<span className={styles.filecontentSlug}>{slug}</span>
							<span className={styles.filecontentLanguage}>
								{language?.toUpperCase()}
							</span>
						</div>
					)}
					<div
						className={clsx([
							content
								? styles.filecontentContent
								: styles.filecontentContentNoFile,
						])}
					>
						{!content && !slug ? (
							<div className={styles.filecontentMsgWrapper}>
								<FiEye className={styles.filecontentMsgIcon} />
								<span className={styles.filecontentMsg}>No file selected.</span>
								<span className={styles.filecontentMsgDescription}>
									Please select a file to view.
								</span>
							</div>
						) : !content && slug ? (
							<div className={styles.filecontentMsgWrapper}>
								<FiFile className={styles.filecontentMsgIcon} />
								<span className={styles.filecontentMsg}>File Empty</span>
								<span className={styles.filecontentMsgDescription}>
									Please provide the content for the file.
								</span>
							</div>
						) : (
							<CodeRenderer
								code={content!}
								lineNumbers={lineNumbers}
								language={language}
								highlight={highlight}
							/>
						)}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default FileContent
