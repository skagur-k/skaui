import { Collapsible } from '@skaui/core'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { FiCheckSquare, FiClipboard, FiRefreshCw } from 'react-icons/fi'
import {
	LiveEditor,
	LivePreview,
	LiveProvider,
	withLive,
} from '@skagur-k/react-live'
import styles from './IDE.module.css'
import { IDEProps } from './IDE.types'
import theme from '../../styles/prism'

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
							There is something wrong with the code : [
							{live.error.split(/[:]/)[0]}]
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
	const [isCopied, setIsCopied] = React.useState(false)

	const style = {
		fontFamily: 'JetBrains Mono',
		selection: {
			color: '#ffffff',
		},
	}

	function handleReset() {
		setCode(codeInit)
	}

	let timer: NodeJS.Timeout

	function handleCopy() {
		clearTimeout(timer)
		navigator.clipboard.writeText(code!)
		setIsCopied(true)

		timer = setTimeout(() => {
			setIsCopied(false)
		}, 2000)
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>{heading}</h1>
			<p className={styles.description}>{children}</p>
			<div className={styles.provider}>
				{
					<LiveProvider {...props} code={code} theme={theme}>
						<div className={styles.previewWrapper}>
							<AnimatePresence exitBeforeEnter>
								{!error && (
									<motion.div
										key='preview'
										initial={{ height: 0 }}
										animate={{ height: 'auto' }}
										exit={{ height: 0 }}
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
										transition={{ opacity: { duration: 0.2 } }}
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
									<AnimatePresence exitBeforeEnter>
										{isCopied ? (
											<motion.div
												key='copied'
												initial={{ y: 3 }}
												animate={{ y: 0, opacity: 1 }}
												exit={{ opacity: 0 }}
												transition={{ opacity: { duration: 0.1 } }}
											>
												<FiCheckSquare
													className={clsx(
														styles.editorActionButton,
														styles.editorActionButtonCopied
													)}
												/>
											</motion.div>
										) : (
											<button onClick={handleCopy}>
												<motion.div
													key='clipboard'
													initial={{ opacity: 0 }}
													animate={{ y: 0, opacity: 1 }}
													exit={{ opacity: 0 }}
													transition={{ opacity: { duration: 0.1 } }}
												>
													<FiClipboard
														className={clsx(
															styles.editorActionButton,
															styles.editorActionButtonClipboard
														)}
													/>
												</motion.div>
											</button>
										)}
									</AnimatePresence>
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
