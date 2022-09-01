import { useRouter } from 'next/router'
import DrawerTrigger from '../Drawer/Drawer'
import { AnyLink } from '../Link'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import styles from './Header.module.css'

const Header = () => {
	const router = useRouter()

	return (
		<header className={styles.wrapper}>
			<div className='flex items-center gap-1'>
				<AnyLink className={styles.logo} href='/'>
					SKAGUR.DEV
				</AnyLink>
				{router.asPath === '/wiki' && (
					<AnyLink className={styles.logo} href='/wiki'>
						WIKI
					</AnyLink>
				)}
			</div>
			<nav className={styles.nav}>
				<ThemeSelect className='w-[120px]' />

				<DrawerTrigger></DrawerTrigger>
			</nav>
		</header>
	)
}

export default Header
