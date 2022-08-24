import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from '../../styles/prism'
import clsx from 'clsx'
import styles from './FileViewer.module.css'
import { Language } from './FileViewer.types'
import rangeParser from 'parse-numeric-range'

const CodeRenderer = ({
	code,
	lineNumbers = true,
	language = 'jsx',
	highlight,
	className,
}: {
	code: string
	lineNumbers?: boolean
	language?: Language
	highlight?: string
	className?: string
}) => {
	const highlights = rangeParser(highlight || '')

	return (
		<div className={className}>
			<Highlight
				{...defaultProps}
				code={code}
				language={language}
				theme={theme}
			>
				{({ className, tokens, getLineProps, getTokenProps }) => (
					<pre className={clsx(className, styles.codePre)}>
						{tokens.map((line, i) => (
							<div
								{...getLineProps({ line, key: i })}
								className={clsx(styles.codeLine, [
									highlights.includes(i + 1) && styles.codeHighlight,
								])}
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
		</div>
	)
}

export default CodeRenderer
