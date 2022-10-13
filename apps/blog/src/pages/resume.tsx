import { Tags } from '@skaui/core'
import { FiGithub, FiHome, FiMail } from 'react-icons/fi'
import { AnyLink } from '../components'
import ResumeLayout from '../layouts/ResumeLayout'
import styles from '../styles/Resume.module.css'

const info = {
	name: 'Nam Hyuck Kim (James)',
	subheading: 'Fronted Developer based in Seoul, Korea',
}

const ResumePage = () => {
	const { name, subheading } = info

	return (
		<ResumeLayout title='Resume'>
			<div className={styles.wrapper}>
				<h1 className={styles.big_heading}>Résumé</h1>
				<div className={styles.about}>
					<div className={styles.title}>
						<h1 className={styles.name}>{name}</h1>
						<h2 className={styles.subheading}>{subheading}</h2>
					</div>
					<div className={styles.contacts}>
						<div className={styles.contact}>
							<FiMail className={styles.contact_icon} />
							<h2>namhyuck.james@gmail.com</h2>
						</div>
						<AnyLink
							href={'https://github.com/skagur-k'}
							className={styles.contact}
						>
							<FiGithub className={styles.contact_icon} />
							<h2>skagur-k</h2>
						</AnyLink>
						<AnyLink href={'/'} className={styles.contact}>
							<FiHome className={styles.contact_icon} />
							<h2>skagur.dev</h2>
						</AnyLink>
					</div>
				</div>

				<div className={styles.section}>
					<h1 className={styles.heading}>Projects</h1>
					<div className={styles.entries}>
						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>SKA UI</h2>
								<h2 className={styles.row_text_small}>2022 - Current</h2>
							</div>
							<div className={styles.row}>
								<h2 className={styles.row_text_small}>AWS Certified</h2>
								<h2 className={styles.row_text_small}>Seoul, Korea</h2>
							</div>
						</div>

						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>skagur.dev</h2>
								<h2 className={styles.row_text_small}>2022 - Current</h2>
							</div>
							<div className={styles.row}>
								<h2 className={styles.row_text_small}>AWS Certified</h2>
							</div>
						</div>

						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>
									Performance Analysis of Cryptographic Schemes on Mobile
									Devices
								</h2>
								<h2 className={styles.row_text_small}>2019</h2>
							</div>
							<div className={styles.row}>
								<h2 className={styles.row_text_small}>HKPU</h2>
								<h2 className={styles.row_text_small}>HKPU, Hong Kong</h2>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<h1 className={styles.heading}>Tech Stack / Skills</h1>
					<div className={styles.entries}>
						<div className={styles.entry}>
							<h2 className={styles.row}>Programming Languages</h2>
							<div className={styles.row}>
								<div className={styles.row_text_small}>
									<Tags
										removable={false}
										tags={['Java', 'C', 'Javascript', 'Python']}
									/>
								</div>
							</div>
						</div>

						<div className={styles.entry}>
							<h2 className={styles.row}>Frontend</h2>
							<div className={styles.row}>
								<div className={styles.row_text_small}>
									<Tags
										removable={false}
										tags={[
											'Typescript',
											'Next.JS',
											'React.JS',
											'HTML',
											'CSS',
											'SEO',
										]}
									/>
								</div>
							</div>
						</div>

						<div className={styles.entry}>
							<h2 className={styles.row}>Backend</h2>
							<div className={styles.row}>
								<div className={styles.row_text_small}>
									<Tags
										removable={false}
										tags={[
											'Node JS',
											'Java',
											'Spring Boot',
											'RESTful API',
											'AWS',
										]}
									/>
								</div>
							</div>
						</div>
						<div className={styles.entry}>
							<h2 className={styles.row}>Others</h2>
							<div className={styles.row}>
								<div className={styles.row_text_small}>
									<Tags
										removable={false}
										tags={[
											'Git',
											'Linux',
											'AWS',
											'Package Managers (NPM, PNPM, YARN)',
										]}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<h1 className={styles.heading}>Certification</h1>
					<div className={styles.entries}>
						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>AWS Certified Cloud Practitioner</h2>
								<h2 className={styles.row_text_small}>March, 2022</h2>
							</div>
							<div className={styles.row}>
								<h2 className={styles.row_text_small}>AWS Certified</h2>
								<h2 className={styles.row_text_small}>Seoul, Korea</h2>
							</div>
						</div>
						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>TOEIC Speaking Test</h2>
								<h2 className={styles.row_text_small}>January, 2022</h2>
							</div>
							<div className={styles.row}>
								<h2 className={styles.row_text_small}>Level 7</h2>
								<h2 className={styles.row_text_small}>Seoul, Korea</h2>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<h1 className={styles.heading}>Linguistics</h1>
					<div className={styles.entries}>
						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>Korean</h2>
								<h2 className={styles.row_text_small}>Native</h2>
							</div>
						</div>
						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>English</h2>
								<h2 className={styles.row_text_small}>Fluent</h2>
							</div>
						</div>
						<div className={styles.entry}>
							<div className={styles.row}>
								<h2>Mandarin Chinese</h2>
								<h2 className={styles.row_text_small}>Fluent</h2>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<h1 className={styles.heading}>Education</h1>
					<div className={styles.entry}>
						<div className={styles.row}>
							<h2>Hong Kong Polytechnic University</h2>
							<h2 className={styles.row_text_small}>2013-2019</h2>
						</div>
						<div className={styles.row}>
							<h2 className={styles.row_text_small}>
								Bachelor&apos;s Degree - Information Technology
							</h2>
							<h2 className={styles.row_text_small}>Hong Kong</h2>
						</div>
					</div>
				</div>

				<hr className={'border-[1px] border-[color:var(--accents-2)]'} />
			</div>
		</ResumeLayout>
	)
}

export default ResumePage
