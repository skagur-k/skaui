import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import React from 'react'
import styles from './Layout.module.css'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -20 },
}

const ResumeLayout = ({
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
				<div className={styles.resume_wrapper}>{children}</div>
			</motion.div>
		</>
	)
}

export default ResumeLayout
