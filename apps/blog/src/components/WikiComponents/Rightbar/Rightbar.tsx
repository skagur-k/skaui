import { Tags, useToast } from '@skaui/core'
import clx from 'clsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BiBookContent } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { FiTag } from 'react-icons/fi'
import { HiChevronDoubleUp } from 'react-icons/hi'
import readingTime from 'reading-time'
import styles from './Rightbar.module.css'

interface RightbarProps {
	scrollToTop: () => void
	page: {
		frontmatter: {
			[key: string]: any
		}
		code: any
	}
}

// TODO: Need to set 'id' attribute for toc.

export const Rightbar = ({ page, scrollToTop }: RightbarProps) => {
	const { frontmatter, code } = page

	dayjs.extend(relativeTime)
	const date = dayjs(frontmatter.date).format('MMMM D, YYYY')
	const ago = dayjs(frontmatter.date).fromNow()
	const readTime = readingTime(code)
	const toast = useToast()

	const [headings, setHeadings] = useState<
		{ id: string; text?: string | null }[]
	>([])

	useEffect(() => {
		const headingArray = Array.from(document.querySelectorAll('[data-id]')).map(
			(node) => {
				return {
					id: '#' + node.getAttribute('data-id'),
					text: node.textContent,
				}
			}
		)

		setHeadings(headingArray)
	}, [])

	function handleClick() {
		scrollToTop()
		toast('Scrolled back to top!', { title: 'Wiki' })
	}

	return (
		<motion.aside
			initial={{ opacity: 0, x: 200 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 200 }}
			transition={{ ease: 'easeInOut', duration: 0.1 }}
			className={clx(styles.wrapper, 'scrollbar')}
		>
			<div className={styles.content}>
				<div className={styles.actions}>
					<div className={styles.action}>
						<div className={styles.action_heading}>
							<BiBookContent className={styles.action_icon} />
							<span>On This Page</span>
						</div>
						<div className={styles.action_toc}>
							{headings.map((heading) => (
								<a href={heading.id}>{heading.text}</a>
							))}
						</div>
					</div>

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
					<div className={styles.action}>
						<div
							className={clx(
								styles.action_heading,
								styles.action_heading_clickable
							)}
						>
							<FaGithub className={styles.action_icon} />
							<span>Edit this page on GitHub</span>
						</div>
					</div>
					<button onClick={handleClick} className={styles.action}>
						<div
							className={clx(
								styles.action_heading,
								styles.action_heading_clickable
							)}
						>
							<HiChevronDoubleUp className={styles.action_icon} />
							<span>Back to Top</span>
						</div>
					</button>
				</div>
				<div className='w-full border-b-[1px] border-[color:var(--accents-2)]' />
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
			</div>
		</motion.aside>
	)
}
