import Link from 'next/link'
import Drawer from '../drawer/Drawer'
import styles from './Header.module.css'
export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.select}></div>
			<div className={styles.logo}>
				<Link href='/'>
					<a className={styles.text}>SKA UI</a>
				</Link>
			</div>
			<div className={styles.menu}>
				<Drawer />
			</div>
		</header>
	)
}
