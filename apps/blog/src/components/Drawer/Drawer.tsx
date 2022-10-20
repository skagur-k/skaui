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
										path.startsWith(link.href) && styles.link_active,
									])}
									href={link.href}
									key={link.href}
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
									GitHub
									<SiGithub
										className={'text-[color:var(--accents-2)] w-4 h-4'}
									/>
								</div>
								<FiExternalLink />
							</AnyLink>
							<AnyLink
								className={clx(styles.link)}
								href='https://skaui.skagur.dev'
							>
								<div className={styles.link_external}>SKA UI</div>
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
