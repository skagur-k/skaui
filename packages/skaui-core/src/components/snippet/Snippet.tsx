import clsx from 'clsx'
import { Clipboard } from '../clipboard'
import styles from './Snippet.module.css'
import { SnippetProps } from './Snippet.types'
import { useSnippetClass } from './styles'

const Snippet = ({
	prompt = true,
	width = '100%',
	text,
	invert,
	className,
}: SnippetProps) => {
	const copyText = text.reduce((current, t) => current + '\n' + t)

	const isOneLine = text.length === 1

	const snippetClasses = useSnippetClass({ invert })
	return (
		<div className={clsx(snippetClasses, className)} style={{ width }}>
			{text?.map((text, index) => (
				<code key={index}>
					{prompt && <span className={styles.snippet_prompt}>$</span>}
					<span className={styles.snippet_text}>{text}</span>
				</code>
			))}
			<Clipboard
				size='sm'
				copyText={copyText}
				className={isOneLine ? styles.snippet_clipboard_single : styles.snippet_clipboard_multi}
			/>
		</div>
	)
}

export default Snippet
