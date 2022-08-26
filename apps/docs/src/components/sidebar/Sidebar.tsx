import { Button } from '@skaui/core'
import { Navigation } from '../navigation/Navigation'
import { NavLink } from '../navigation/NavLink'
import ThemeSelect from '../themeSelect/ThemeSelect'
import ComponentList from './ComponentList'
import styles from './Sidebar.module.css'

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
						<a
							href='https://github.com/skagur-k/skaui'
							target='_blank'
							rel='noreferrer'
						>
							<Button size='md' className={styles.button} variant='ghost'>
								<div className='flex items-center gap-2'>GitHub</div>
							</Button>
						</a>
						<a href='https://skagur.dev' target='_blank' rel='noreferrer'>
							<Button size='md' variant='ghost' className={styles.button}>
								skagur.dev
							</Button>
						</a>
					</div>
				</div>

				<div className={styles.navigation}>
					<div className={styles.themeselectWrapper}>
						<ThemeSelect className={styles.themeselect} />
					</div>

					<Navigation />
				</div>

				{/* Component List */}
				<h1 className={styles.heading}>Components</h1>

				<ComponentList />
			</div>
		</aside>
	)
}
