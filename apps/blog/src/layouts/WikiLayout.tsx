import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Rightbar, Sidebar } from '../components'
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
}

export const WikiLayout = (props: WikiLayoutProps) => {
	const { children, title, pages } = props

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
				<div className={clsx(styles.wiki_main, 'scrollbar')}>{children}</div>
				<Rightbar />
			</motion.div>
		</>
	)
}
