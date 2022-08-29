import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import React from 'react'
import WorkInProgress from './WorkInProgress'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -20 },
}

const PageLayout = ({
	children,
	title,
	workinprogress,
}: {
	children: React.ReactElement
	title?: string
	workinprogress?: boolean
}) => {
	const env = process.env.NODE_ENV
	let render = true

	if (workinprogress && env === 'production') {
		render = false
	}

	return (
		<>
			<NextSeo title={title} />
			<motion.div
				variants={variants}
				initial='hidden'
				animate='enter'
				exit='exit'
				transition={{ type: 'linear', duration: 0.2 }}
				className={'w-full'}
			>
				{render ? children : <WorkInProgress />}
			</motion.div>
		</>
	)
}

export default PageLayout
