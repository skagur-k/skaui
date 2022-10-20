import clx from 'clsx'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef } from 'react'
import { Rightbar, Sidebar } from '../components'
import { SubMenu } from '../components/SubMenu'
import { IWikiPages } from '../components/WikiComponents/Wiki.types'
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

	function scrollToTop() {
		ref.current?.scrollTo(0, 0)
	}

	const { scrollYProgress } = useScroll({ container: ref })

	const page = useMemo(() => ({ frontmatter, code }), [frontmatter, code])

	useEffect(() => {
		scrollToTop()
	}, [page])

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
				<SubMenu pages={pages} />
				<motion.div
					className={styles.wiki_progress}
					style={{ scaleX: scrollYProgress }}
				/>
				<div ref={ref} className={clx(styles.wiki_main, 'scrollbar')}>
					{children}
				</div>
				<AnimatePresence exitBeforeEnter>
					{!isIndex && <Rightbar scrollToTop={scrollToTop} page={page} />}
				</AnimatePresence>
			</motion.div>
		</>
	)
}
