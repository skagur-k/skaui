import { motion } from 'framer-motion'
import React from 'react'
const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -20 },
}

const PageLayout = ({ children }: { children: React.ReactElement }) => {
	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{ type: 'linear', duration: 0.2 }}
			className={'w-full'}
		>
			{children}
		</motion.div>
	)
}

export default PageLayout
