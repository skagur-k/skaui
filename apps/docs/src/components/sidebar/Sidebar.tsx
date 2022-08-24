import { Button, Toggle, useTheme } from '@skaui/core'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { components } from '../../data'
import { Navigation } from '../navigation/Navigation'
import { NavLink } from '../navigation/NavLink'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
	const router = useRouter()
	const path = router.asPath

	const { mode, isDarkMode, selectTheme } = useTheme()
	const [dark, setDark] = useState(false)
	function handleToggle() {
		setDark(!dark)
		selectTheme(dark ? 'dark' : 'light')
	}

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
						<Link
							href='https://github.com/skagur-k/skaui'
							target='_blank'
							passHref
						>
							<Button size='sm' className={styles.button}>
								GitHub
							</Button>
						</Link>
						<Link href='https://skagur.dev' target='_blank' passHref>
							<Button size='sm' type='secondary' className={styles.button}>
								skagur.dev
							</Button>
						</Link>
					</div>
				</div>

				<div className={styles.navigation}>
					<div className={styles.darkmode}>
						<Toggle
							aria-label='dark mode'
							className={styles.toggle}
							isSelected={isDarkMode ? true : false}
							onChange={handleToggle}
						>
							{mode}
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
