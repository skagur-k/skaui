import clsx from 'clsx'
import { NoteProps } from './Note.types'
import styles from './Note.module.css'

interface NoteClassProps extends Partial<NoteProps> {}

export function useNoteClass(props: NoteClassProps) {
	const { size, type, filled, contrast } = props

	const sizes = {
		sm: styles.note_sm,
		md: styles.note_md,
		lg: styles.note_lg,
	}

	const types = {
		success: styles.note_success,
		warning: styles.note_warning,
		error: styles.note_error,
		secondary: styles.note_secondary,
	}

	const classes = clsx(styles.note, [
		size && sizes[size],
		type && types[type],
		filled && styles.note_filled,
		contrast && styles.note_contrast,
	])
	return classes
}
