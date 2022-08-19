import { Button } from '@skaui/core'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { components } from '../../data'
import { Navigation } from '../navigation/Navigation'
import { NavLink } from '../navigation/NavLink'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
	const router = useRouter()
	const path = router.asPath

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
						<Button size='block' className={styles.button}>
							GitHub
						</Button>
						<Button size='block' type='secondary' className={styles.button}>
							skagur.dev
						</Button>
					</div>
				</div>

				<Navigation />

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
