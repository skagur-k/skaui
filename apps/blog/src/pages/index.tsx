import { Note } from '@skaui/core'
import { ChevronRightIcon } from '@skaui/core/src/icons'
import type { NextPage } from 'next'
import Image from 'next/image'
import { AnyLink } from '../components/Link'
import ProjectCard from '../components/Project/ProjectCard'
import projects from '../data/projects'
import PageLayout from '../layouts/PageLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<>
			<PageLayout title='Home'>
				<div className={styles.wrapper}>
					{/* HERO */}

					<div className={styles.hero}>
						<div className={styles.text}>
							<span className={styles.name}>NAM HYUCK KIM</span>
							<p className={styles.description}>
								Developer based in Seoul, Korea.
							</p>
							<p className={styles.description}>Description goes here.</p>
						</div>
						<div className={styles.avatar}>
							<Image
								src='https://avatars.githubusercontent.com/u/8953479?v=4'
								alt='profile'
								layout='fill'
								priority
							/>
						</div>
					</div>
					<div className={styles.links}>
						<AnyLink href='https://github.com/skagur-k' className={styles.link}>
							GITHUB
						</AnyLink>
						<AnyLink href='/wiki' className={styles.link}>
							WIKI
						</AnyLink>
						<AnyLink href='/resume/en' className={styles.link}>
							Résumé
						</AnyLink>
						<AnyLink href='https://skaui.skagur.dev' className={styles.link}>
							SKA UI
						</AnyLink>
					</div>

					<div className='my-12'>
						<Note label={false} className={'flex justify-center'}>
							Website is currently under active development. More to come soon.
						</Note>
					</div>

					{/* FEATURED PROJECTS */}
					<div>
						<h1 className={styles.heading}>Featured Projects</h1>
						<div className={styles.featured_projects}>
							{projects &&
								projects.map((project) => (
									<ProjectCard project={project} key={project!.id} />
								))}
							<div className={styles.checkout}>
								<a
									href='https://github.com/skagur-k?tab=repositories'
									rel='noreferrer'
									target='_blank'
								>
									Check out more projects
								</a>
								<ChevronRightIcon className='stroke-[3px]' />
							</div>
						</div>
					</div>
					<div className={styles.separator} />
				</div>
			</PageLayout>
		</>
	)
}

export default Home
