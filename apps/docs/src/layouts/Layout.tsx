import React from 'react'
import { Sidebar } from '../components/sidebar'
import { Header } from '../components/header'
import styles from './Layout.module.css'
import { Footer } from '../components/footer/Footer'

export const Layout = ({ children }: { children: React.ReactElement }) => {
	return (
		<div
			className={
				'bg-neutral-50 text-gray-700 dark:bg-neutral-800 dark:text-white'
			}
		>
			<div className={styles.wrapper}>
				<Sidebar />
				<Header />
				<div className={styles.contentWrapper}>
					<main className={styles.main}>{children}</main>
					<Footer />
				</div>
			</div>
		</div>
	)
}
