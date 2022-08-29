import { Drawer, IconButton } from '@skaui/core'
import clsx from 'clsx'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { NavLink } from '../navigation/NavLink'
import ComponentList from '../sidebar/ComponentList'
import ThemeSelect from '../themeSelect/ThemeSelect'
import styles from './Drawer.module.css'
const DrawerTrigger = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<IconButton onPress={() => setOpen(true)} variant='iconOnly'>
				<FiMenu className={styles.drawer_icon} />
			</IconButton>
			<Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
				<div className={styles.drawer_content}>
					<h1 className={styles.drawer_header}>SKA UI</h1>
					<ThemeSelect />
					<NavLink href='/getting-started'>
						{(isActive: boolean) => (
							<a
								className={clsx(
									styles.drawer_pagelink,
									isActive && styles.drawer_pagelink_active
								)}
							>
								<span className={styles.drawer_pagelink_title}>
									Getting Started
								</span>
							</a>
						)}
					</NavLink>
					<h1 className={styles.drawer_heading}>Components</h1>
					<ComponentList />
				</div>
			</Drawer>
		</div>
	)
}

export default DrawerTrigger
