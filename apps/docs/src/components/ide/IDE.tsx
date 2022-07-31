import { Collapsible } from '@skaui/collapsible'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LiveEditor, LivePreview, LiveProvider, withLive } from 'react-live'
import styles from './IDE.module.css'
import { IDEProps } from './IDE.types'
import theme from './prism'
const Live = ({
	live,
	onEdit,
	onError,
}: {
	live?: any
	onEdit: (code: string | undefined) => void
	onError: (error: boolean) => void
}) => {
	useEffect(() => {
		live.error ? onError(true) : onError(false)
	}, [live.error])

	const style = {
		fontFamily: 'JetBrains Mono',
		selection: {
			color: '#ffffff',
		},
	}

	return (
		<div className='relative px-2'>
			<LiveEditor style={style} className={styles.editor} />
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

const IDE = (props: IDEProps) => {
	const { heading, children } = props
	const [error, setError] = React.useState(false)
	const [code, setCode] = React.useState(props.code)

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>{heading}</h1>
			<p className={styles.description}>{children}</p>
			<div className={styles.provider}>
				{
					<LiveProvider code={code} {...props} theme={theme}>
						<div className={styles.previewWrapper}>
							<AnimatePresence>
								{!error && (
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: 'auto' }}
										exit={{ opacity: 0 }}
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
								<LiveComponent onError={setError} onEdit={setCode} />
							</div>
						</Collapsible>
					</LiveProvider>
				}
			</div>
		</div>
	)
}

export default withLive(IDE)
