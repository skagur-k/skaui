import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'
import { components } from '../../data'
import { NavLink } from '../navigation/NavLink'
import styles from './ComponentList.module.css'

const ComponentList = () => {
	const router = useRouter()
	const path = router.asPath

	return (
		<div className={styles.wrapper}>
			<div className={styles.components}>
				{components.map((section, idx) => (
					<div key={idx}>
						<h1 className={styles.section_heading}>{section.heading}</h1>
						<ul className={styles.section_components}>
							{section.components.map((component) => (
								<NavLink href={`${component.key}`} passHref key={component.key}>
									<li
										className={clsx(styles.component, [
											component.key === path && styles.component_active,
										])}
									>
										<a
											key={component.key}
											className={clsx(styles.component_heading)}
										>
											{component.title}
											{component.badge && component.badge}
										</a>
									</li>
								</NavLink>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default ComponentList
