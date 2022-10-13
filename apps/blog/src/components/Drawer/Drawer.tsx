import { Drawer as _Drawer, IconButton } from '@skaui/core'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AnyLink } from '../Link/Link'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import styles from './Drawer.module.css'

const Drawer = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<IconButton onPress={() => setOpen(true)} variant='ghost'>
				<FiMenu className={styles.drawer_icon} />
			</IconButton>
			<_Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
				<div className={styles.drawer_content}>
					<AnyLink href='/' className={styles.drawer_header}>
						SKAGUR.DEV
					</AnyLink>
					<ThemeSelect />
				</div>
			</_Drawer>
		</div>
	)
}

export default Drawer
