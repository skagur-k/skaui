import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import Drawer from '../drawer/Drawer'
import styles from './Header.module.css'
export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.select}>
				<a href='https://github.com/skagur-k/' target='_blank' rel="noreferrer">
					<FaGithub className='h-8 w-8' />
				</a>
			</div>
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
