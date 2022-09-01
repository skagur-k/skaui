import { useRouter } from 'next/router'
import DrawerTrigger from '../Drawer/Drawer'
import { AnyLink } from '../Link'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import styles from './Header.module.css'
import { motion } from 'framer-motion'
const Header = () => {
	const router = useRouter()

	return (
		<header className={styles.wrapper}>
			<div className='flex items-center gap-1'>
				<AnyLink className={styles.logo} href='/'>
					SKAGUR.DEV
				</AnyLink>

				{router.asPath.startsWith('/wiki') && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.logo}
					>
						<AnyLink href='/wiki'>WIKI</AnyLink>
					</motion.div>
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
