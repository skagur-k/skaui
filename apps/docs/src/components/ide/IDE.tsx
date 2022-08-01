import { Collapsible } from '@skaui/collapsible'
import clsx from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LiveEditor, LivePreview, LiveProvider, withLive } from 'react-live'
import styles from './IDE.module.css'
import { IDEProps } from './IDE.types'
import theme from './prism'
import { FiClipboard, FiRefreshCw } from 'react-icons/fi'
const Live = ({
	live,
	onError,
}: {
	live?: any
	onError: (error: boolean) => void
}) => {
	useEffect(() => {
		live.error ? onError(true) : onError(false)
	}, [live.error, onError])

	return (
		<div className='relative px-2'>
			{live.error ? (
				<Collapsible
					title={
						<h1 className={styles.errorMsg}>
							There is something wrong with the code.
						</h1>
					}
					className={styles.errorCollapsible}
				>
					<div className='font-mono'>{live.error}</div>
				</Collapsible>
			) : null}
		</div>
	)
}

const LiveComponent = withLive(Live)

const IDE = ({ code: codeInit, ...props }: IDEProps) => {
	const { heading, children } = props
	const [error, setError] = React.useState(false)
	const [code, setCode] = React.useState(codeInit)
	const style = {
		fontFamily: 'JetBrains Mono',
		selection: {
			color: '#ffffff',
		},
	}

	function handleReset() {
		setCode(codeInit)
	}

	function handleCopy() {
		navigator.clipboard.writeText(code!)
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>{heading}</h1>
			<p className={styles.description}>{children}</p>
			<div className={styles.provider}>
				{
					<LiveProvider {...props} code={code} theme={theme}>
						<div className={styles.previewWrapper}>
							<AnimatePresence>
								{!error && (
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: 'auto' }}
									>
										<LivePreview
											className={clsx(styles.preview, [
												error && styles.previewErrored,
											])}
										/>
									</motion.div>
								)}
							</AnimatePresence>

							<AnimatePresence>
								{error && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ opacity: { duration: 0.3 } }}
										className={styles.previewError}
									>
										<span>✨ Waiting for magic. ✨</span>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<Collapsible
							open
							title={<p>Code Editor</p>}
							className={clsx(styles.editorCollapsible, '')}
						>
							<div className={styles.editorCollapsibleContent}>
								<div className={styles.editorActionButtons}>
									<button onClick={handleReset}>
										<FiRefreshCw
											className={clsx(
												styles.editorActionButton,
												styles.editorActionButtonReset
											)}
										/>
									</button>
									<button onClick={handleCopy}>
										<FiClipboard
											className={clsx(
												styles.editorActionButton,
												styles.editorActionButtonClipboard
											)}
										/>
									</button>
								</div>
								<LiveEditor
									style={style}
									className={styles.editor}
									onChange={setCode}
								/>
								<LiveComponent onError={setError} />
							</div>
						</Collapsible>
					</LiveProvider>
				}
			</div>
		</div>
	)
}

export default withLive(IDE)
