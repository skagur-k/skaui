import { motion } from 'framer-motion'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { IWikiPages } from '../../components/WikiComponents/Wiki.types'
import { getAllFiles } from '../../helpers/getAllFiles'
import { getSlug } from '../../helpers/getSlug'
import { WikiLayout } from '../../layouts/WikiLayout'

interface WikiPageProps {
	pages: IWikiPages
}

const WikiPage = (props: WikiPageProps) => {
	const variants = {
		hidden: { opacity: 0, x: 0, y: 20 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -20 },
	}

	return (
		<motion.div
			key={'index'}
			variants={variants}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			<div className='flex flex-col gap-4'>Hello World</div>
		</motion.div>
	)
}

export default WikiPage

export const getStaticProps = async () => {
	const pages = getAllFiles('wiki')
	return {
		props: { pages },
	}
}

WikiPage.getLayout = function getLayout(page: React.ReactElement) {
	return <WikiLayout {...page.props}>{page}</WikiLayout>
}
