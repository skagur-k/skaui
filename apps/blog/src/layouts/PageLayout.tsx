import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import React from 'react'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -20 },
}

const PageLayout = ({
	children,
	title,
}: {
	children: React.ReactElement
	title?: string
}) => {
	return (
		<>
			<NextSeo title={title} />
			<motion.div
				variants={variants}
				initial='hidden'
				animate='enter'
				exit='exit'
				transition={{ ease: 'easeInOut', duration: 0.2 }}
			>
				{children}
			</motion.div>
		</>
	)
}

export default PageLayout
