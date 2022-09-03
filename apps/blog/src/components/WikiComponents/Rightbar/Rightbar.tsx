import clx from 'clsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiTag } from 'react-icons/fi'
import { BiBookContent } from 'react-icons/bi'
import { HiChevronDoubleUp } from 'react-icons/hi'
import readingTime from 'reading-time'
import styles from './Rightbar.module.css'
import { Tag, Tags, useToast } from '@skaui/core'

interface RightbarProps {
	scrollToTop: () => void
	page: {
		frontmatter: {
			[key: string]: any
		}
		content: any
	}
}

export const Rightbar = ({ page, scrollToTop }: RightbarProps) => {
	const { frontmatter, content } = page

	dayjs.extend(relativeTime)
	const date = dayjs(frontmatter.date).format('MMMM D, YYYY')
	const readTime = readingTime(content)
	const toast = useToast()

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
						<div className={styles.action_heading}>
							<FaGithub className={styles.action_icon} />
							<span>Edit this page on GitHub</span>
						</div>
					</div>
					<button onClick={handleClick} className={styles.action}>
						<div className={styles.action_heading}>
							<HiChevronDoubleUp className={styles.action_icon} />
							<span>Back to Top</span>
						</div>
					</button>
				</div>
				<div className='w-full border-b-[1px] border-[color:var(--accents-2)]' />
				<div className={styles.section}>
					<span className={styles.section_heading}>Date</span>
					<span>{date}</span>
				</div>
				<div className={styles.section}>
					<span className={styles.section_heading}>Reading Time</span>
					<span className={styles.section_content}>{readTime.text}</span>
				</div>
			</div>
		</motion.aside>
	)
}
