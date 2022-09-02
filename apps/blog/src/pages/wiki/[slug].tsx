import { motion } from 'framer-motion'
import matter from 'gray-matter'
import React from 'react'
import { getSlug } from '../../helpers/getSlug'
import { WikiLayout } from '../../layouts/WikiLayout'

const WikiPage = ({ frontmatter }: { [key: string]: any }) => {
	const variants = {
		hidden: { opacity: 0, x: 0, y: 20 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -20 },
	}

	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			{frontmatter.title}
		</motion.div>
	)
}

export default WikiPage

export const getStaticPaths = async () => {
	const files = getSlug('wiki')
	console.log(files)

	const paths = files.map((filename) => ({
		params: {
			slug: filename.split('.')[0].replace('wiki/', ''),
		},
	}))

	return { paths, fallback: false }
}

interface Props {
	params: { slug: string }
	[key: string]: any
}

export const getStaticProps = async ({ params }: Props) => {
	const { data: frontmatter, content } = matter('mdxWithMeta')

	return {
		props: { frontmatter, content },
	}
}

WikiPage.getLayout = function getLayout(page: React.ReactElement) {
	return <WikiLayout>{page}</WikiLayout>
}
