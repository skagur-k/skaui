import { Collapsible } from '@skaui/collapsible'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { FiCopy } from 'react-icons/fi'
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
			<div className='flex'>
				<LiveEditor style={style} className={styles.editor} />
				{/* <div className='flex-none'>
					<FiCopy className='mr-[9px] h-5 w-5' />
				</div> */}
			</div>
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
	const { heading } = props
	const [error, setError] = React.useState(false)
	const [code, setCode] = React.useState(props.code)

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>{heading}</h1>
			<div className={styles.provider}>
				{
					<LiveProvider code={code} {...props} theme={theme}>
						<div className={styles.previewWrapper}>
							<LivePreview
								className={clsx(styles.preview, [
									error && styles.previewErrored,
								])}
							/>
							{error && (
								<div className={styles.previewError}>
									<span>✨ Waiting for magic. ✨</span>
								</div>
							)}
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
