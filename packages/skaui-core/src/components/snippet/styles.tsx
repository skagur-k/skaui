import clsx from 'clsx'
import styles from './Snippet.module.css'

interface snippetClassProps {
	invert?: boolean
}

function useSnippetClass(props: snippetClassProps) {
	const { invert } = props
	const classes = clsx(styles.snippet, [invert && styles.snippet_invert])

	return classes
}

export { useSnippetClass }
