import clsx from 'clsx'
import React from 'react'
import XIcon from '../../icons/XIcon'
import styles from './Tag.module.css'
import { TagProps, TagsProps } from './Tag.types'

export const Tag = (props: TagProps) => {
	const { children, id, onRemove, className } = props

	return (
		<div className={clsx(styles.tag)}>
			<div className={clsx(styles.tag_text, className)}>{children}</div>
			{onRemove && (
				<div
					className={clsx(styles.tag_remove)}
					onClick={() => {
						onRemove ? onRemove(id) : null
					}}
				>
					<XIcon />
				</div>
			)}
		</div>
	)
}

export const Tags = (props: TagsProps) => {
	const { tags, className, removable = true } = props
	const [tagList, setTagsList] = React.useState([...new Set(tags)])

	return (
		<div className={clsx(styles.tags, className)}>
			{tagList.map((tag) => (
				<Tag
					className={className}
					id={tag}
					key={tag}
					onRemove={
						removable
							? (id) => setTagsList(tagList.filter((t) => t !== id))
							: undefined
					}
				>
					{tag}
				</Tag>
			))}
		</div>
	)
}
