import React from 'react'
import {
	LiveEditor,
	LiveError,
	LivePreview,
	LiveProvider,
	withLive,
} from 'react-live'
import styles from './IDE.module.css'
import { IDEProps } from './IDE.types'

const IDE = (props: IDEProps) => {
	return (
		<div className={styles.wrapper}>
			<LiveProvider {...props} className={styles.provider}>
				<LivePreview className={styles.preview} />
				<LiveEditor className={styles.editor} />
				<LiveError className={styles.error} />
			</LiveProvider>
		</div>
	)
}

export default IDE
