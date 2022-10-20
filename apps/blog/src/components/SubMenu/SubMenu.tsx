import { Drawer as _Drawer, IconButton } from '@skaui/core'
import clx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiExternalLink, FiMenu } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { AnyLink } from '../Link/Link'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import { WikiList } from '../WikiComponents'
import { IWikiPages } from '../WikiComponents/Wiki.types'
import styles from './SubMenu.module.css'

interface SubMenuProps {
	pages: IWikiPages
}

const SubMenu = ({ pages }: SubMenuProps) => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<div onClick={() => setOpen(true)} className={styles.menu_button}>
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

export default SubMenu
