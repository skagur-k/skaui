import React from 'react'
import styles from './Breadcrumbs.module.css'
import { useBreadcrumbItem, useBreadcrumbs } from 'react-aria'
import { BreadcrumbItemProps, BreadcrumbsProps } from './Breadcrumbs.types'
import clsx from 'clsx'
import { ChevronRightIcon } from '../../icons'

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	const children = React.Children.toArray(props.children)

	const { navProps } = useBreadcrumbs(props)
	return (
		<nav {...navProps} className={styles.breadcrumbsWrapper}>
			<ol className={styles.breadcrumbs}>
				{children.map((child, i) =>
					React.cloneElement(child as React.ReactElement, {
						isCurrent: i === children.length - 1,
					})
				)}
			</ol>
		</nav>
	)
}

export const BreadcrumbItem = (props: BreadcrumbItemProps) => {
	const { children, isCurrent, isDisabled } = props
	const ref = React.useRef(null)
	const { itemProps } = useBreadcrumbItem(props, ref)

	return (
		<li
			className={clsx(styles.breadcrumbs_item, [
				isDisabled && styles.breadcrumbs_item_disabled,
				isCurrent && styles.breadcrumbs_item_current,
			])}
		>
			<span
				{...itemProps}
				ref={ref}
				className={styles.breadcrumbs_item_heading}
			>
				{children}
			</span>
			{!isCurrent && (
				<ChevronRightIcon className={styles.breadcrumbs_separator} />
			)}
		</li>
	)
}
