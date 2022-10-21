import { Tag, Tags } from '@skaui/core'
import clx from 'clsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from 'framer-motion'
import { BiBookContent } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { FiTag } from 'react-icons/fi'
import { HiChevronDoubleUp } from 'react-icons/hi'
import readingTime from 'reading-time'
import { Footer } from '../../Footer'
import { AnyLink } from '../../Link'
import styles from './Rightbar.module.css'
import { TOC } from './TOC'

interface RightbarProps {
	scrollToTop: () => void
	page: {
		frontmatter: {
			[key: string]: any
		}
		code: any
	}
}

export const Rightbar = ({ page, scrollToTop }: RightbarProps) => {
	return (
		<motion.aside
			initial={{ opacity: 0, x: 200 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 200 }}
			transition={{ ease: 'easeInOut', duration: 0.1 }}
			className={clx(styles.wrapper, 'scrollbar')}
		>
			<RightbarContent page={page} scrollToTop={scrollToTop} />
		</motion.aside>
	)
}

export const RightbarContent = ({ page, scrollToTop }: RightbarProps) => {
	const { frontmatter, code } = page

	dayjs.extend(relativeTime)
	const date = dayjs(frontmatter.date).format('MMMM D, YYYY')
	const ago = dayjs(frontmatter.date).fromNow()
	const readTime = readingTime(code)

	function handleToTop() {
		scrollToTop()
	}

	return (
		<div className={styles.content}>
			<div className={styles.actions}>
				<div className={styles.action}>
					<div className={styles.action_heading}>
						<BiBookContent className={styles.action_icon} />
						<span>On This Page</span>
					</div>
					<TOC page={page} />
				</div>

				<div className={styles.hr} />

				<div onClick={handleToTop} className={styles.action}>
					<div
						className={clx(
							styles.action_heading,
							styles.action_heading_clickable
						)}
					>
						<HiChevronDoubleUp className={styles.action_icon} />
						<span>Back to Top</span>
					</div>
				</div>

				<div className={styles.hr} />

				{/* Tags */}
				<div className={styles.action}>
					<div className={styles.action_heading}>
						<FiTag className={styles.action_icon} />
						<span>Tags</span>
					</div>
					{frontmatter.tags && (
						<div className={styles.action_tags}>
							<Tags
								removable={false}
								tags={frontmatter.tags}
								className='text-xs'
							/>
						</div>
					)}
				</div>

				{/* Edit This Page On GitHub */}
				<div className={styles.action}>
					<div
						className={clx(styles.action_heading, [
							page.frontmatter.github && styles.action_heading_clickable,
							!page.frontmatter.github && styles.action_heading_disabled,
						])}
					>
						<FaGithub className={styles.action_icon} />
						<AnyLink href={page.frontmatter.github}>
							Edit this page on GitHub
						</AnyLink>
					</div>
				</div>
			</div>
			<div className='w-full border-b-[1px] border-[color:var(--accents-2)]' />
			<div className={styles.section}>
				<span className={styles.section_heading}>Author</span>
				<span className={styles.author_name}>Nam Hyuck Kim</span>
			</div>

			<div className={styles.section}>
				<span className={styles.section_heading}>Date</span>
				<span>
					{date} ({ago})
				</span>
			</div>
			<div className={styles.section}>
				<span className={styles.section_heading}>Reading Time</span>
				<span className={styles.section_content}>{readTime.text}</span>
			</div>
			<div className='w-full border-b-[1px] border-[color:var(--accents-2)]' />
			<WikiFooter />
		</div>
	)
}

export const WikiFooter = () => {
	return (
		<div className={clx(styles.footer)}>
			<Tag className='text-xs' id={'copyright'}>
				WIKI - SKAGUR.DEV
			</Tag>
		</div>
	)
}
