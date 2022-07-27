import { Button } from '@skaui/button'
import React from 'react'
import styles from './Header.module.css'
import { FiMenu } from 'react-icons/fi'
import { TbTriangleSquareCircle } from 'react-icons/tb'
export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.select}>
				<TbTriangleSquareCircle className={styles.icon} />
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
