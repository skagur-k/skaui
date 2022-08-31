import { Avatar } from '@skaui/core'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../layouts/PageLayout'
import styles from '../styles/Home.module.css'
import { BsFileEarmarkPost } from 'react-icons/bs'

const Home: NextPage = () => {
	return (
		<>
			<PageLayout title='Home'>
				<div className={styles.wrapper}>
					<div className={styles.hero}>
						<div className={styles.text}>
							<span className={styles.name}>NAM HYUCK KIM</span>
							<p className={styles.description}>
								Developer based in Seoul, Korea.
							</p>
							<p className={styles.description}>
								Detailed description goes here
							</p>
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
				</div>
			</PageLayout>
		</>
	)
}

export default Home
