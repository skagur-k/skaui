import clsx from 'clsx'
import React, { useEffect } from 'react'
import XIcon from '../../icons/XIcon'
import { TagProps, TagsProps } from './Tag.types'
import styles from './Tag.module.css'

export const Tag = (props: TagProps): JSX.Element => {
	const { children, id, onRemove } = props

	return (
		<div className={clsx(styles.tag)}>
			<div className={styles.tag_text}>{children}</div>
			<div className={clsx(styles.tag_remove)} onClick={() => onRemove!(id)}>
				<XIcon />
			</div>
		</div>
	)
}

export const Tags = (props: TagsProps): JSX.Element => {
	const { tags } = props
	const [tagList, setTagsList] = React.useState([...new Set(tags)])

	return (
		<div className={styles.tags}>
			{tagList.map((tag) => (
				<Tag
					id={tag}
					key={tag}
					onRemove={(id) => setTagsList(tagList.filter((t) => t !== id))}
				>
					{tag}
				</Tag>
			))}
		</div>
	)
}
