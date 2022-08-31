import clsx from 'clsx'
import Link from 'next/link'
import DrawerTrigger from '../Drawer/Drawer'
import { NavLink } from '../NavLink/NavLink'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<Link href='/'>
				<a className={styles.logo}>SKAGUR.DEV</a>
			</Link>
			<nav className={styles.nav}>
				<NavLink href='/about'>
					{(isActive: boolean) => (
						<a
							className={clsx(styles.navLink, [
								isActive && styles.navLink_active,
							])}
						>
							About
						</a>
					)}
				</NavLink>
				<NavLink href='/projects'>
					{(isActive: boolean) => (
						<a
							className={clsx(styles.navLink, [
								isActive && styles.navLink_active,
							])}
						>
							Projects
						</a>
					)}
				</NavLink>
				<DrawerTrigger></DrawerTrigger>
			</nav>
		</header>
	)
}

export default Header
