import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.wrapper}>
			<Link href='/'>
				<a className={styles.logo}>SKAGUR.DEV</a>
			</Link>
			<h2 className={styles.copyright}>
				© 2022 Nam Hyuck Kim. All Rights Reserved.
			</h2>
		</footer>
	)
}

export default Footer
