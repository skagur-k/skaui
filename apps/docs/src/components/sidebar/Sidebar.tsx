import { Button, Toggle, useTheme } from '@skaui/core'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { components } from '../../data'
import { Navigation } from '../navigation/Navigation'
import { NavLink } from '../navigation/NavLink'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
	const router = useRouter()
	const path = router.asPath

	const { theme, selectTheme, isDarkMode } = useTheme()
	const [dark, setDark] = useState(false)
	function handleToggle() {
		console.log('TOGGLED: ', dark ? 'dark' : 'light')
		setDark(!dark)
		if (dark) {
			selectTheme('dark')
		} else selectTheme('light')
	}

	useEffect(() => {
		console.log(theme, isDarkMode)
	})

	return (
		<aside className='hidden lg:flex'>
			{/* Aside */}
			<div className={styles.aside}>
				{/* Header + Component List */}
				<div className={styles.content}>
					{/* Header */}
					<div className={styles.header}>
						<NavLink href='/'>SKA-UI</NavLink>
					</div>
					<div className={styles.buttonGroup}>
						<Button size='sm' className={styles.button}>
							GitHub
						</Button>
						<Button size='sm' type='secondary' className={styles.button}>
							skagur.dev
						</Button>
					</div>
				</div>

				<div className={styles.navigation}>
					<div className={styles.darkmode}>
						<Toggle
							aria-label='dark mode'
							className={styles.toggle}
							onChange={() => handleToggle()}
						>
							{dark ? 'Dark' : 'Light'}
						</Toggle>
					</div>
					<Navigation />
				</div>

				{/* Component List */}
				<div className={styles.components}>
					{components.map((section, idx) => (
						<div key={idx}>
							<h1 className={styles.sectionHeading}>{section.heading}</h1>
							<ul className={styles.componentList}>
								{section.components.map((component) => (
									<li
										key={component.key}
										className={clsx(styles.component, [
											component.key === path && styles.componentActive,
										])}
									>
										<NavLink href={`${component.key}`} passHref>
											<a
												key={component.key}
												className={clsx(styles.componentTitle)}
											>
												{component.title}
											</a>
										</NavLink>
										{component.badge && component.badge}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</aside>
	)
}
