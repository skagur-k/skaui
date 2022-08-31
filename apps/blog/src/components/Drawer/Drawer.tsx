import { Drawer, IconButton } from '@skaui/core'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
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
					<Link href='/'>
						<a className={styles.drawer_header}>SKAGUR.DEV</a>
					</Link>
					<ThemeSelect />
				</div>
			</Drawer>
		</div>
	)
}

export default DrawerTrigger
