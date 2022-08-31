import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './Layout.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.wrapper}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
