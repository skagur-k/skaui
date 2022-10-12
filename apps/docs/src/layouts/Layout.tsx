import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import styles from './Layout.module.css'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'

const Layout = ({ children }: { children: React.ReactElement }) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<div className={styles.layout}>
				<div className={styles.wrapper}>
					<Sidebar />
					<Header />
					<div className={styles.contentWrapper}>
						<main className={styles.main}>{children}</main>
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout
