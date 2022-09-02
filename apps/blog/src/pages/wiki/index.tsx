import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { AnyLink } from '../../components'
import { getSlug } from '../../helpers/getSlug'
import { WikiLayout } from '../../layouts/WikiLayout'
interface WikiPageProps {
	pages: {
		frontmatter: { [key: string]: any }
		slug: string
	}[]
}

const WikiPage = ({ pages }: WikiPageProps) => {
	return (
		<div>
			<div className='flex flex-col gap-4 py-2 px-1'>
				{pages.map((page, idx) => {
					return (
						<AnyLink href={page.slug} key={idx} className='bg-neutral-700'>
							{page.slug}s
						</AnyLink>
					)
				})}
			</div>
		</div>
	)
}

export default WikiPage

export const getStaticProps = async () => {
	const files = getSlug(path.join('wiki'))

	const pages = files.map((filename) => {
		let mdxWithMeta
		try {
			mdxWithMeta = fs.readFileSync(path.join(filename))
		} catch (err) {
			mdxWithMeta = ''
		}

		const { data: frontmatter } = matter(mdxWithMeta)

		return {
			frontmatter,
			slug: `/${filename.split('.')[0]}`,
		}
	})

	return {
		props: { pages },
	}
}

WikiPage.getLayout = function getLayout(page: React.ReactElement) {
	return <WikiLayout {...page.props}>{page}</WikiLayout>
}
