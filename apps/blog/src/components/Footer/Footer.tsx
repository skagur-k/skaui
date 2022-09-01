import { AnyLink } from '../Link'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.wrapper}>
			<AnyLink href='/' className={styles.logo}>
				SKAGUR.DEV
			</AnyLink>
			<h2 className={styles.copyright}>
				© 2022 Nam Hyuck Kim. All Rights Reserved.
			</h2>
		</footer>
	)
}

export default Footer
