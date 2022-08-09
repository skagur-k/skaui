import clsx from 'clsx'
import { Badge } from '../badge'
import React from 'react'
import { getValidChildren } from '../../utils'
import { AvatarGroupProps } from './Avatar.types'
import styles from './Avatar.module.css'

const AvatarGroup = ({ size, children, max, className }: AvatarGroupProps) => {
	const validChildren = getValidChildren(children)
	const displayChildren = max ? validChildren.slice(0, max) : validChildren

	const excess = max != null && validChildren.length - max

	const clones = displayChildren.map((child) => {
		return React.cloneElement(child, {
			size,
			className: clsx(child.props.className, styles.avatar_group_item),
			bordered: true,
		})
	})

	return (
		<div role='group' className={clsx(styles.avatar_group, className)}>
			{clones}
			{excess > 0 && <Badge className={styles.avatar_excess}>+{excess}</Badge>}
		</div>
	)
}

export default AvatarGroup

AvatarGroup.displayName = 'AvatarGroup'
