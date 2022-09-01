import clsx from 'clsx'
import { AnyLink } from '../../Link'
import styles from './Sidebar.module.css'
export const Sidebar = () => {
	return (
		<aside className={clsx(styles.wrapper, 'scrollbar')}>
			<AnyLink href='/wiki' className={styles.heading}>
				WIKI
			</AnyLink>
			<AnyLink href='/wiki' className={styles.category}>
				Overview
			</AnyLink>
			<WikiList />
		</aside>
	)
}

const WikiList = () => {
	return (
		<div className={clsx(styles.list, 'scrollbar')}>
			<ul className={styles.wiki_items}>
				<AnyLink href='#' className={styles.wiki_item}>
					1
				</AnyLink>
				<AnyLink href='#' className={styles.wiki_item}>
					2
				</AnyLink>
				<AnyLink href='#' className={styles.wiki_item}>
					3
				</AnyLink>
				<AnyLink href='#' className={styles.wiki_item}>
					4
				</AnyLink>
			</ul>
		</div>
	)
}
