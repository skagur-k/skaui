import { Breadcrumbs, Tag } from '@skaui/core'
import clx from 'clsx'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import path from 'path'
import { useEffect, useMemo, useRef } from 'react'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import { AnyLink } from '../../components'
import { MDXComponents } from '../../components/WikiComponents/MDXComponents'
import { getAllFiles } from '../../helpers/getAllFiles'
import getFileBySlug from '../../helpers/getFileBySlug'
import { getSlug } from '../../helpers/getSlug'
import { WikiLayout } from '../../layouts/WikiLayout'
import styles from '../../styles/Wiki.module.css'
interface PageProps {
	frontmatter: {
		[key: string]: any
	}
	code: any
}

const WikiPage = ({ frontmatter, code }: PageProps) => {
	const MDXComponent = useMemo(() => getMDXComponent(code), [code])
	const variants = {
		hidden: { opacity: 0, x: 0, y: 20 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -20 },
	}
	const categorySlug = `/wiki/${
		frontmatter.category || ''
	}/overview`.toLowerCase()

	const isNew = dayjs(dayjs()).diff(frontmatter.date, 'day') < 10
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		ref.current?.scrollTo(0, 0)
	}, [])

	return (
		<motion.div
			key={code}
			variants={variants}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{ ease: 'easeInOut', duration: 0.2 }}
			className={clx(styles.wiki_content, 'wiki_content')}
		>
			<div className={styles.wiki_meta}>
				<div className={styles.wiki_breadcrumbs}>
					<Breadcrumbs>
						<Breadcrumbs.Item>
							<AnyLink href='/wiki'>Wiki</AnyLink>
						</Breadcrumbs.Item>
						{frontmatter.category && (
							<Breadcrumbs.Item>
								<AnyLink href={categorySlug}>{frontmatter.category}</AnyLink>
							</Breadcrumbs.Item>
						)}
						<Breadcrumbs.Item>
							<span>{frontmatter.title}</span>
						</Breadcrumbs.Item>
					</Breadcrumbs>
				</div>
				<div className={styles.wiki_title}>
					{frontmatter.title}
					{isNew && (
						<Tag className={styles.wiki_title_tag} id={'recent'}>
							New
						</Tag>
					)}
				</div>
				{frontmatter.summary && (
					<div className={styles.wiki_summary}>{frontmatter.summary}</div>
				)}
			</div>
			<MDXComponent ref={ref} components={MDXComponents} />
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
	const { slug } = params

	const pages = getAllFiles('wiki')

	const mdxSource = getFileBySlug(
		path.join('wiki', slug.join('/').concat('.mdx'))
	)

	const { code, frontmatter } = await bundleMDX({
		source: mdxSource.toString(),
		mdxOptions(options, frontmatter) {
			options.remarkPlugins = [
				...(options.remarkPlugins ?? []),
				remarkGfm,
				remarkToc,
			]
			options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]

			return options
		},
	})

	return {
		props: { frontmatter, code, pages },
	}
}

WikiPage.getLayout = function getLayout(page: React.ReactElement) {
	return <WikiLayout {...page.props}>{page}</WikiLayout>
}