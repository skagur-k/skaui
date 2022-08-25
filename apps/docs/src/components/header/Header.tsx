import { FiMenu } from 'react-icons/fi'
import ThemeSelect from '../themeSelect/ThemeSelect'
import styles from './Header.module.css'
export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.select}>
				<ThemeSelect />
			</div>
			<div className={styles.logo}>
				<h1 className={styles.text}>SKA UI</h1>
			</div>
			<div className={styles.menu}>
				<FiMenu className={styles.icon} />
			</div>
		</header>
	)
}
