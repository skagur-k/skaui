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
			<PageLayout>
				<div className={styles.wrapper}>
					{/* HERO */}

					<div className={styles.hero}>
						<div className={styles.text}>
							<span className={styles.name}>NAM HYUCK KIM</span>

							<p className={styles.description}>
								Versatile developer based in Seoul, Korea, with +10 years
								development experience, striving to become an iconic engineer.
							</p>
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
						<AnyLink href='/resume/en' className={styles.link}>
							Résumé
						</AnyLink>
						<AnyLink href='/wiki' className={styles.link}>
							Wiki
						</AnyLink>
						<AnyLink href='https://github.com/skagur-k' className={styles.link}>
							GitHub
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
