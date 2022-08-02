import { Button } from '@skaui/button'
import React from 'react'
import styles from './Sidebar.module.css'
import { SiGithub } from 'react-icons/si'
import { FiTriangle } from 'react-icons/fi'
import { Navigation } from '../navigation/Navigation'
import { NavLink } from '../navigation/NavLink'
import { components } from '../../data'
import clsx from 'clsx'

export const Sidebar = () => {
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
						<div className={styles.button}>
							<Button
								size='md'
								icon={<SiGithub className='h-6 w-6' />}
								className='shadow-sm'
							>
								GitHub
							</Button>
						</div>
						<div className={styles.button}>
							<Button
								size='md'
								type='secondary'
								icon={<FiTriangle className='h-6 w-6' />}
								className='shadow-sm'
							>
								skagur.dev
							</Button>
						</div>
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
											component.key === 'select' && styles.componentActive,
										])}
									>
										<NavLink href={`/${component.key}`} passHref>
											<a
												key={component.key}
												className={clsx(styles.componentTitle)}
											>
												{component.title}
											</a>
										</NavLink>
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
