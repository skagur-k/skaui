import React from 'react'
import Header from '../components/Header/Header'
import styles from './Layout.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.wrapper}>
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	)
}

export default Layout
