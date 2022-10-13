import { getSlug } from './getSlug'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export const getAllFiles = (dir: string) => {
	const files = getSlug(path.join(dir))

	const pages = files.map((filename) => {
		let mdxSource
		try {
			mdxSource = fs.readFileSync(path.join(filename))
		} catch (err) {
			mdxSource = ''
		}

		const { data: frontmatter } = matter(mdxSource)
		const slug = `/${filename.split('.')[0]}`

		return {
			frontmatter,
			slug,
		}
	})

	return pages
}
