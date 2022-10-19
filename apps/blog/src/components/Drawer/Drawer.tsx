import { Drawer as _Drawer, IconButton } from '@skaui/core'
import clx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiExternalLink, FiMenu } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { AnyLink } from '../Link/Link'
import ThemeSelect from '../ThemeSelect/ThemeSelect'
import styles from './Drawer.module.css'

const Drawer = () => {
	const [isOpen, setOpen] = useState(false)
	const router = useRouter()
	const path = router.asPath

	const links = [
		{
			heading: 'Home',
			href: '/',
		},
		{
			heading: 'Resume',
			href: '/resume/en',
		},
		{
			heading: 'Wiki',
			href: '/wiki',
		},
	]

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

					<div className={styles.links}>
						{links.map((link) => {
							return (
								<AnyLink
									className={clx(styles.link, [
										link.href === path && styles.link_active,
									])}
									href={link.href}
								>
									{link.heading}
								</AnyLink>
							)
						})}

						<div className={styles.footer}>
							<AnyLink
								className={clx(styles.link)}
								href='https://github.com/skagur-k'
							>
								<div className={styles.link_external}>
									<SiGithub />
									GitHub
								</div>
								<FiExternalLink />
							</AnyLink>
						</div>
					</div>
				</div>
			</_Drawer>
		</div>
	)
}

export default Drawer
