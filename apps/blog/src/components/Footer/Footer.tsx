import { useRouter } from 'next/router'
import { AnyLink } from '../Link'
import styles from './Footer.module.css'

const Footer = () => {
	const router = useRouter()

	const hasFooter =
		router.asPath.startsWith('/wiki') || router.asPath.startsWith('/resume')

	return hasFooter ? null : (
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
