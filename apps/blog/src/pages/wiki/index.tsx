import { motion } from 'framer-motion'
import { AnyLink } from '../../components'
import { IWikiPages } from '../../components/WikiComponents/Wiki.types'
import { getAllFiles } from '../../helpers/getAllFiles'
import { WikiLayout } from '../../layouts/WikiLayout'
import styles from './Wiki.module.css'

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
			className={styles.wrapper}
		>
			<div className={styles.welcome}>
				<h1 className={styles.heading}>WIKI 🌱</h1>
				<h2 className={styles.description}>
					A Digital Garden where I share things I know.
				</h2>
			</div>
			<div className={styles.texts}>
				<h1 className={styles.title}>Getting Started</h1>
				<p className={styles.text}>
					This is my digital garden where I organized and archive things I know
					and experienced.
				</p>
				<p className={styles.text}>
					All notes published on this page are not final, and are subject to
					continuous editing.
				</p>
				<p className={styles.text}>
					Please note that the contents reflect heavily my thinking style and
					preference.
				</p>
			</div>
			<div className={styles.texts}>
				<h1 className={styles.title}>Contribution</h1>
				<p className={styles.text}>
					Contents are written in MDX formats, with customized components. I am
					currently in the process of migrating notes to this Wiki page. All
					files can be found on{' '}
					<AnyLink href={'https://github.com/skagur-k/skagur.dev'}>
						<span className={'font-bold px-2'}>skagur.dev</span>
					</AnyLink>{' '}
					GitHub repository.
				</p>
				<p className={styles.text}>
					Feel free to submit a pull request if any changes are necessary.
				</p>
			</div>
			<div className={styles.texts}>
				<h1 className={styles.title}>Featured Posts</h1>
				<p className={styles.text}></p>
			</div>
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
