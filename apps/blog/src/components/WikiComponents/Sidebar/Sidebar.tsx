import { ChevronRightIcon } from '@skaui/core/src/icons'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { group } from 'radash'
import { useState } from 'react'
import { AnyLink } from '../../Link'
import { NavLink } from '../../NavLink'
import { IWikiPages } from '../Wiki.types'
import styles from './Sidebar.module.css'
interface SidebarProps {
	pages: IWikiPages
}

export const Sidebar = ({ pages }: SidebarProps) => {
	return (
		<aside className={clsx(styles.wrapper, 'scrollbar')}>
			<div className={styles.content}>
				<div className={'flex justify-evenly'}>
					<AnyLink href='/wiki' className={styles.heading}>
						WIKI
					</AnyLink>
					<AnyLink href='/wiki' className={styles.heading}>
						Blog
					</AnyLink>
					<AnyLink href='/wiki' className={styles.heading}>
						Snippets
					</AnyLink>
				</div>
				<WikiList pages={pages} />
			</div>
		</aside>
	)
}

const WikiList = ({ pages }: { pages: IWikiPages }) => {
	const grouped = group(pages, (page) => page.frontmatter.category)

	return (
		<div className={clsx(styles.list, 'scrollbar')}>
			<ul className={styles.wiki_categories}>
				{Object.keys(grouped).map((key) => {
					return <Category heading={key} pages={grouped[key]} />
				})}
			</ul>
		</div>
	)
}

interface CategoryProps {
	heading: string
	pages: IWikiPages
}

const Category = (props: CategoryProps) => {
	const { heading, pages } = props
	const [isActive, setActive] = useState(false)
	const [isOpen, setOpen] = useState(false)

	console.log(heading + ':' + isActive)

	function handleToggle() {
		setOpen((isOpen) => !isOpen)
	}
	return (
		<div
			className={clsx(styles.wiki_category_wrapper, [
				isOpen && styles.wiki_category_open,
				isActive && styles.wiki_category_active,
			])}
		>
			<h1 onClick={handleToggle} className={styles.wiki_category_heading}>
				{heading}
				<ChevronRightIcon
					className={clsx(styles.wiki_category_heading_chevron, [])}
				/>
			</h1>
			<AnimatePresence exitBeforeEnter>
				{isOpen && (
					<motion.div
						key={heading}
						initial={{ height: 0 }}
						animate={{ height: 'auto' }}
						exit={{ height: 0 }}
						transition={{ ease: 'linear', duration: 0.1 }}
						style={{ overflow: 'hidden' }}
						className={styles.wiki_category}
					>
						{pages.map((page) => (
							<NavLink href={page.slug}>
								{(isActive: boolean) => {
									setActive(isActive)
									return (
										<a
											className={clsx(styles.wiki_link, [
												isActive && styles.wiki_link_active,
											])}
										>
											{page.frontmatter.title}
										</a>
									)
								}}
							</NavLink>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
