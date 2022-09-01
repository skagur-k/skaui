import { Drawer, IconButton } from '@skaui/core'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AnyLink } from '../Link/Link'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import styles from './Drawer.module.css'
const DrawerTrigger = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<IconButton onPress={() => setOpen(true)} variant='ghost'>
				<FiMenu className={styles.drawer_icon} />
			</IconButton>
			<Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
				<div className={styles.drawer_content}>
					<AnyLink href='/' className={styles.drawer_header}>
						SKAGUR.DEV
					</AnyLink>
					<ThemeSelect />
				</div>
			</Drawer>
		</div>
	)
}

export default DrawerTrigger
