import clsx from 'clsx'
import styles from './Snippet.module.css'

interface snippetClassProps {
	dark?: boolean
}

function useSnippetClass(props: snippetClassProps) {
	const { dark } = props
	const classes = clsx(styles.snippet, [dark && styles.snippet_dark])

	return classes
}

export { useSnippetClass }
