import Link from 'next/link'
import DrawerTrigger from '../Drawer/Drawer'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<Link href='/'>
				<a className={styles.logo}>SKAGUR.DEV</a>
			</Link>
			<nav className={styles.nav}>
				<ThemeSelect className='w-[120px]' />

				<DrawerTrigger></DrawerTrigger>
			</nav>
		</header>
	)
}

export default Header
