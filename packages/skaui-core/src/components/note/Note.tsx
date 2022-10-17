import clsx from 'clsx'
import { Button } from '../button'
import { NoteProps } from './Note.types'
import { useNoteClass } from './styles'
import styles from './Note.module.css'

const Note = (props: NoteProps) => {
	const {
		label = 'Note',
		size = 'md',
		action,
		actionLabel,
		type,
		filled,
		contrast,
		children,
		className,
		...rest
	} = props

	const noteClasses = useNoteClass({ size, type, filled, contrast })
	return (
		<div className={clsx(noteClasses, className)} {...rest}>
			<div className={clsx(styles.note_text, className)}>
				{label != false && typeof label === 'string' && (
					<span className={styles.note_label}>{label}:</span>
				)}
				{children}
			</div>
			{actionLabel && (
				<Button onPress={action} size='sm'>
					Action
				</Button>
			)}
		</div>
	)
}

export default Note
