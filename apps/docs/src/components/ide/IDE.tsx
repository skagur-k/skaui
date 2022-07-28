import { Collapsible } from '@skaui/collapsible'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { LiveEditor, LivePreview, LiveProvider, withLive } from 'react-live'
import styles from './IDE.module.css'
import { IDEProps } from './IDE.types'
import { debounce } from 'lodash'

const noTheme = {
	plain: {},
	styles: [],
}

const Live = ({
	live,
	onEdit,
	onError,
}: {
	live?: any
	onEdit: (code: string | undefined) => void
	onError: (error: boolean) => void
}) => {
	live.error ? onError(true) : onError(false)
	const delay = 0

	function handleChange(code: string) {
		debounce(() => {
			onEdit(code)
		}, delay)()
	}

	return (
		<div className='px-2'>
			<LiveEditor className={styles.editor} onChange={onEdit} />

			{live.error ? (
				<Collapsible
					title={
						<h1 className='text-sm font-medium text-red-500'>
							There is something wrong with the code. Click to Expand
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

	useEffect(() => {
		setCode(code)
		console.log('Rendered')
	}, [code])

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>{heading}</h1>
			{code}
			<div className={styles.provider}>
				{
					<LiveProvider {...props} code={code} theme={noTheme}>
						<LivePreview
							className={clsx(styles.preview, [error && styles.previewError])}
						/>

						<Collapsible
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
