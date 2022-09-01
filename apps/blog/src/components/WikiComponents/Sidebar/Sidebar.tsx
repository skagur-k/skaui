import { AnyLink } from '../../Link'
import styles from './Sidebar.module.css'
export const Sidebar = () => {
	return (
		<aside className={styles.wrapper}>
			<div className={styles.content}>
				<AnyLink href='/wiki' className={styles.heading}>
					WIKI
				</AnyLink>
				<WikiList />
			</div>
		</aside>
	)
}

const WikiList = () => {
	return (
		<div className={styles.list}>
			<ul className={styles.wiki_items}>
				<li className={styles.wiki_item}>1</li>
				<li className={styles.wiki_item}>2</li>
				<li className={styles.wiki_item}>3</li>
				<li className={styles.wiki_item}>4</li>
				<li className={styles.wiki_item}>5</li>
			</ul>
		</div>
	)
}
