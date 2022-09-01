import DrawerTrigger from '../Drawer/Drawer'
import { AnyLink } from '../Link'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<AnyLink className={styles.logo} href='/'>
				SKAGUR.DEV
			</AnyLink>
			<nav className={styles.nav}>
				<ThemeSelect className='w-[120px]' />

				<DrawerTrigger></DrawerTrigger>
			</nav>
		</header>
	)
}

export default Header
