import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from '../../styles/prism'
import clsx from 'clsx'
import styles from './FileViewer.module.css'
import { Language } from './FileViewer.types'

const CodeRenderer = ({
	code,
	lineNumbers = true,
	language = 'jsx',
}: {
	code: string
	lineNumbers?: boolean
	language?: Language
}) => {
	return (
		<Highlight {...defaultProps} code={code} language={language} theme={theme}>
			{({ className, tokens, getLineProps, getTokenProps }) => (
				<pre className={clsx(className, styles.codePre)}>
					{tokens.map((line, i) => (
						<div
							{...getLineProps({ line, key: i })}
							className={styles.codeLine}
						>
							{lineNumbers && (
								<div className={styles.codeLineNumber}>{i + 1}</div>
							)}
							{line.map((token, key) => (
								<span
									{...getTokenProps({ token, key })}
									className={styles.codeTag}
								/>
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeRenderer
