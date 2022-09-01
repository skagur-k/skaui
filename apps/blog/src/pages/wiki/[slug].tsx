import { useRouter } from 'next/router'
import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const WikiPage = ({ frontmatter }: { [key: string]: any }) => {
	const router = useRouter()
	const { slug } = router.query

	return <div>{frontmatter.title}</div>
}

export default WikiPage

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join('wiki'))

	const paths = files.map((filename) => ({
		params: {
			slug: filename.split('.')[0],
		},
	}))

	return { paths, fallback: false }
}

interface Props {
	params: { slug: string }
	[key: string]: any
}

export const getStaticProps = async ({ params }: Props) => {
	console.log(params.slug)

	const mdxWithMeta = fs.readFileSync(
		path.join('wiki', params.slug.concat('.mdx'))
	)

	const { data: frontmatter, content } = matter(mdxWithMeta)

	return {
		props: { frontmatter },
	}
}
