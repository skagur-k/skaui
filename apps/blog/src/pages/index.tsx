import { ChevronRightIcon } from '@skaui/core/src/icons'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
						<Link href='/about'>
							<a className={styles.link}>Résumé</a>
						</Link>
						<a
							href='https://github.com/skagur-k'
							rel='noreferrer'
							target='_blank'
							className={styles.link}
						>
							GitHub
						</a>
						<a
							href='https://skaui.skagur.dev'
							rel='noreferrer'
							target='_blank'
							className={styles.link}
						>
							SKA UI
						</a>
					</div>

					<div className={styles.separator} />

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
				</div>
			</PageLayout>
		</>
	)
}

export default Home
