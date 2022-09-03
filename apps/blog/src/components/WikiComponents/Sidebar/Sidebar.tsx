import { Badge } from '@skaui/core'
import { ChevronRightIcon } from '@skaui/core/src/icons'
import clx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { group } from 'radash'
import { useEffect, useState } from 'react'
import { AnyLink } from '../../Link'
import { NavLink } from '../../NavLink'
import { IWikiPage, IWikiPages } from '../Wiki.types'
import styles from './Sidebar.module.css'
interface SidebarProps {
	pages: IWikiPages
}

export const Sidebar = ({ pages }: SidebarProps) => {
	return (
		<aside className={clx(styles.wrapper, 'scrollbar')}>
			<div className={styles.content}>
				<div className={'flex flex-col gap-4'}>
					<NavLink href='/wiki/overview'>
						{(isActive: boolean) => (
							<a
								className={clx(styles.heading, [
									isActive && styles.heading_active,
								])}
							>
								Overview
							</a>
						)}
					</NavLink>
				</div>

				<WikiList pages={pages} />
			</div>
		</aside>
	)
}

const WikiList = ({ pages }: { pages: IWikiPages }) => {
	const filteredPages = pages.filter(
		(page) =>
			!page.slug.match('/wiki/overview') &&
			page.frontmatter.category !== undefined
	)

	const uncategorizedPages = pages.filter(
		(page) =>
			!page.slug.match('/wiki/overview') &&
			page.frontmatter.category === undefined
	)

	const grouped = group(
		filteredPages,
		(page) => page.frontmatter.category || 'No Category'
	)

	const [selected, setSelected] = useState<number | null>(null)

	const handleToggle = (idx: number) => {
		if (idx === selected) {
			return setSelected(null)
		}

		setSelected(idx)
	}

	const router = useRouter()

	useEffect(() => {
		if (router.asPath === '/wiki/overview') setSelected(null)
	}, [router.asPath])

	return (
		<div className={clx(styles.list, 'scrollbar')}>
			<ul className={styles.wiki_categories}>
				{Object.keys(grouped).map((key, idx) => {
					return (
						<Category
							heading={key}
							key={key}
							onToggle={() => handleToggle(idx)}
							pages={grouped[key]}
							open={selected === idx}
						/>
					)
				})}
				<div className='w-full border-b-[1px] border-[color:var(--accents-2)]' />
				{uncategorizedPages.map((page) => {
					return <WikiLink page={page} key={page.frontmatter.title} />
				})}
			</ul>
		</div>
	)
}

interface CategoryProps {
	heading: string
	pages: IWikiPages
	open: boolean
	onToggle: () => void
}

const Category = (props: CategoryProps) => {
	const { heading, pages, open, onToggle } = props
	const [isActive, setActive] = useState(false)

	function handleToggle() {
		onToggle()
	}

	return (
		<div
			className={clx(styles.wiki_category_wrapper, [
				open && styles.wiki_category_open,
				isActive && styles.wiki_category_active,
			])}
		>
			<h1 onClick={handleToggle} className={styles.wiki_category_heading}>
				<div className={styles.wik_category_heading_text_and_badge}>
					<span className={styles.wik_category_heading_text}>{heading}</span>
					<Badge size='sm' className={styles.wik_category_heading_badge}>
						{pages.length} Posts
					</Badge>
				</div>
				<ChevronRightIcon
					className={clx(styles.wiki_category_heading_chevron, [])}
				/>
			</h1>
			<AnimatePresence exitBeforeEnter>
				{open && (
					<motion.div
						key={heading}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ ease: 'linear', duration: 0.1 }}
						style={{ overflow: 'hidden' }}
						className={styles.wiki_category}
					>
						{pages.map((page) => (
							<WikiLink page={page} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

const WikiLink = ({ page }: { page: IWikiPage }) => {
	return (
		<NavLink href={page.slug} key={page.slug}>
			{(isActive: boolean) => {
				return (
					<a
						className={clx(styles.wiki_link, [
							isActive && styles.wiki_link_active,
						])}
					>
						{page.frontmatter.title || 'Untitled'}
					</a>
				)
			}}
		</NavLink>
	)
}
