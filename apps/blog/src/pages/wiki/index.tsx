import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { AnyLink } from '../../components'
import { WikiLayout } from '../../layouts/WikiLayout'

interface WikiPageProps {
	pages: {
		frontmatter: { [key: string]: any }
		slug: string
	}[]
}

const WikiPage = ({ pages }: WikiPageProps) => {
	console.log(pages)

	return (
		<WikiLayout title={'Wiki'}>
			<div>
				{pages.map((page) => {
					return (
						<AnyLink href={`/wiki/${page.slug}`} key={page.slug}>
							{page.frontmatter.title}
						</AnyLink>
					)
				})}
			</div>
		</WikiLayout>
	)
}

export default WikiPage

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('wiki'))

	const pages = files.map((filename) => {
		const mdxWithMeta = fs.readFileSync(path.join('wiki', filename))
		const { data: frontmatter } = matter(mdxWithMeta)

		return {
			frontmatter,
			slug: filename.split('.')[0],
		}
	})

	return {
		props: { pages },
	}
}
