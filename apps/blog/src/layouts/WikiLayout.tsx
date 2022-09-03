import clx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Rightbar, Sidebar } from '../components'
import { IWikiPage, IWikiPages } from '../components/WikiComponents/Wiki.types'
import styles from './Layout.module.css'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -20 },
}
interface WikiLayoutProps {
	children: React.ReactElement
	title: string
	pages: IWikiPages
	frontmatter: {
		[key: string]: any
	}
	code: any
}

export const WikiLayout = (props: WikiLayoutProps) => {
	const { children, title, pages, frontmatter, code } = props
	const router = useRouter()

	const isIndex = router.asPath === '/wiki'
	const ref = useRef<HTMLDivElement>(null)

	function handleClick() {
		ref.current?.scrollTo(0, 0)
	}

	const page = { frontmatter, code }
	return (
		<>
			<NextSeo title={title} />
			<motion.div
				variants={variants}
				initial='hidden'
				animate='enter'
				exit='exit'
				transition={{ ease: 'easeInOut', duration: 0.2 }}
				className={styles.wiki_wrapper}
			>
				<Sidebar pages={pages} />
				<div ref={ref} className={clx(styles.wiki_main, 'scrollbar')}>
					<div>{children}</div>
				</div>
				<AnimatePresence exitBeforeEnter>
					{!isIndex && <Rightbar scrollToTop={handleClick} page={page} />}
				</AnimatePresence>
			</motion.div>
		</>
	)
}
