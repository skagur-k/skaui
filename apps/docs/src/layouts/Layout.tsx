import React from 'react'
import { Aside } from '../components/aside'
import { Header } from '../components/header'
import styles from './Layout.module.css'

export const Layout = ({ children }: { children: React.ReactElement }) => {
	return (
		<div
			className={
				'bg-neutral-50 text-gray-700 dark:bg-neutral-800 dark:text-white'
			}
		>
			<div className={styles.wrapper}>
				<Aside />
				<Header />
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}
