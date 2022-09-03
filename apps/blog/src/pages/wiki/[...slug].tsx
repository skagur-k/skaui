import { motion } from 'framer-motion'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import getFileBySlug from '../../helpers/getFileBySlug'
import { getSlug } from '../../helpers/getSlug'
import { WikiLayout } from '../../layouts/WikiLayout'

interface PageProps {
	frontmatter: {
		[key: string]: any
	}
	content: any
}

const WikiPage = ({ frontmatter, content }: PageProps) => {
	const variants = {
		hidden: { opacity: 0, x: 0, y: 20 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -20 },
	}

	const readtime = readingTime(content)

	return (
		<motion.div
			key={content}
			variants={variants}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			{content}
		</motion.div>
	)
}

export default WikiPage

export const getStaticPaths = async () => {
	const files = getSlug('wiki')
	const paths = files.map((filename) => {
		const slug = filename.split('.')[0].replace('wiki/', '').split('/')
		return {
			params: {
				slug,
			},
		}
	})

	return { paths, fallback: false }
}

interface Props {
	params: { slug: string[] }
	[key: string]: any
}

export const getStaticProps = async ({ params }: Props) => {
	// Frontmatter & Content for the current route
	const { slug } = params

	const mdxWithMeta = getFileBySlug(
		path.join('wiki', slug.join('/').concat('.mdx'))
	)

	const { data: frontmatter, content } = matter(mdxWithMeta)

	//=========================Pages prop for sidebar
	const files = getSlug(path.join('wiki'))

	const pages = files.map((filename) => {
		let mdxWithMeta
		let filestats
		try {
			mdxWithMeta = fs.readFileSync(path.join(filename))
		} catch (err) {
			mdxWithMeta = ''
			filestats = null
		}

		const { data: frontmatter } = matter(mdxWithMeta)
		const slug = `/${filename.split('.')[0]}`

		return {
			frontmatter,
			slug,
		}
	})
	//==========================

	return {
		props: { frontmatter, content, pages },
	}
}

WikiPage.getLayout = function getLayout(page: React.ReactElement) {
	return <WikiLayout {...page.props}>{page}</WikiLayout>
}
