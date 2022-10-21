import { Drawer as _Drawer } from '@skaui/core'
import clsx from 'clsx'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { WikiList } from '..'
import { AnyLink } from '../../Link/Link'
import { IWikiPages } from '../Wiki.types'
import styles from './SubMenu.module.css'

interface SubMenuProps {
	pages: IWikiPages
}

export const SubMenu = ({ pages }: SubMenuProps) => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<div
				onClick={() => setOpen(true)}
				className={clsx(styles.menu_button, styles.menu_left)}
			>
				<FiMenu className={styles.icon} />
			</div>

			<_Drawer position='left' isOpen={isOpen} onClose={() => setOpen(false)}>
				<div className={styles.drawer_content}>
					<AnyLink href='/wiki' className={styles.drawer_header}>
						WIKI
					</AnyLink>
					<WikiList pages={pages} />
				</div>
			</_Drawer>
		</div>
	)
}
