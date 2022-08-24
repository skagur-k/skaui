import clsx from 'clsx'
import styles from './Navigation.module.css'
import { INavigation } from './Navigation.types'
import { NavLink } from './NavLink'

export const mainNavigation: INavigation[] = [
	{
		// icon: <FiAnchor />,
		title: 'Getting Started',
		path: '/getting-started',
	},
	{
		// icon: <FiHome />,
		title: 'Theming',
		path: '/theming',
	},
]

export const Navigation = () => {
	return (
		<nav>
			<div className={styles.navigation}>
				{mainNavigation.map((item, idx) => {
					return (
						<NavLink href={item.path} key={idx}>
							{(isActive: boolean) => (
								<a
									className={clsx(
										styles.navigationItem,
										isActive && styles.navigationItemActive
									)}
								>
									{item.icon && (
										<span className={styles.icon}>{item.icon}</span>
									)}
									<span className={styles.title}>{item.title}</span>
								</a>
							)}
						</NavLink>
					)
				})}
			</div>
		</nav>
	)
}
