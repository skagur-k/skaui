import { PDFDownloadLink } from '@react-pdf/renderer'
import { Tags } from '@skaui/core'
import clx from 'clsx'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiGlobe, FiHome, FiMail } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { AnyLink } from '../../components'
import Resume from '../../helpers/generateResumePDF'
import ResumeLayout from '../../layouts/ResumeLayout'
import styles from '../../styles/Resume.module.css'

export const PDFDownloadButton = () => {
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(typeof window !== 'undefined')
	}, [])
	return isBrowser ? (
		<PDFDownloadLink
			className={styles.version_link}
			document={<Resume />}
			fileName='somename.pdf'
		>
			{({ loading }) => (loading ? 'Loading PDF Document...' : 'Download PDF')}
		</PDFDownloadLink>
	) : null
}

const ResumePage = () => {
	return (
		<ResumeLayout title='Resume'>
			<div className={styles.wrapper}>
				<div className={styles.resume}>
					<div className={styles.summary}>
						<section className={styles.personal_info}>
							<h1 className={styles.name}>Nam Hyuck Kim</h1>
							<p className={styles.description}>
								Versatile developer based in Seoul, Korea, with +10 years
								development experience.
							</p>
							<ul className={styles.contacts}>
								<h2 className={styles.section_heading}>Contacts</h2>
								<li className={styles.contact}>
									<FiMail className={styles.icon} />
									<h2>namhyuck.james@gmail.com</h2>
								</li>

								<li>
									<AnyLink href={'/'} className={styles.contact}>
										<FiHome className={styles.icon} />
										<h2>skagur.dev</h2>
									</AnyLink>
								</li>
							</ul>
						</section>
						<section className={styles.repo}>
							<h2 className={styles.section_heading}>GitHub Profile</h2>
							<AnyLink
								href={'https://github.com/skagur-k'}
								className={styles.contact}
							>
								<FaGithub className={styles.icon} />
								<p>skagur-k</p>
							</AnyLink>
						</section>

						<div className={styles.summary_links}>
							<AnyLink className={styles.version_link} href='/resume/kr'>
								국문 이력서
							</AnyLink>
							<PDFDownloadButton />
						</div>
					</div>
					<div className={clx(styles.detail, 'scrollbar')}>
						<section className={styles.section}>
							<h1 className={styles.heading}>Projects</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2 className={styles.project_heading}>SKA UI</h2>
										<h2 className={styles.row_text_small}>2022 - Current</h2>
									</div>
									<div className={styles.row}>
										<div className={styles.project_description}>
											<p>
												SKA UI is a React Component Library / Design System that
												emphasizes on minimalism and simplicity. The project
												adopts Adobe&apos;s React Spectrum Library that provides
												accessible UI primitives. The library provides
												accessibility behavior according to WAI-ARIA practices,
												supporting screen readers and keyboard navigation.
											</p>

											<div className={styles.footer}>
												<Tags
													removable={false}
													tags={[
														'React',
														'TypeScript',
														'Tailwind',
														'HTML',
														'CSS',
													]}
												/>
												<div className={styles.footer_links}>
													<AnyLink
														href='https://github.com/skagur-k/skaui'
														className={styles.footer_link}
													>
														<SiGithub className={styles.footer_link_icon} />
														GitHub
													</AnyLink>
													<AnyLink
														href='https://skaui.skagur.dev'
														className={styles.footer_link}
													>
														<FiGlobe className={styles.footer_link_icon} />
														Website
													</AnyLink>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className={styles.entry}>
									<div className={styles.row}>
										<h2 className={styles.project_heading}>skagur.dev</h2>
										<h2 className={styles.row_text_small}>2021 - Current</h2>
									</div>
									<div className={styles.row}>
										<div className={styles.project_description}>
											<p>
												skagur.dev is a portfolio website that adopts SKA UI
												React Component Library. The site uses Next.JS and is
												designed with Tailwind CSS. skagur.dev and SKA UI
												projects are maintained within the same monorepo for
												build performance and scalability.
											</p>

											<div className={styles.footer}>
												<Tags
													removable={false}
													tags={[
														'React',
														'TypeScript',
														'Tailwind',
														'SKA UI',
														'Vercel',
														'TURBOREPO',
													]}
												/>
												<div className={styles.footer_links}>
													<AnyLink
														href='https://github.com/skagur-k/skagur.dev'
														className={styles.footer_link}
													>
														<SiGithub className={styles.footer_link_icon} />
														GitHub
													</AnyLink>
													<AnyLink href='/' className={styles.footer_link}>
														<FiGlobe className={styles.footer_link_icon} />
														Website
													</AnyLink>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className={styles.section}>
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
						</section>

						<section className={styles.section}>
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
						</section>

						<section className={styles.section}>
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
						</section>

						<section className={styles.section}>
							<h1 className={styles.heading}>Education</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2>Hong Kong Polytechnic University</h2>
										<h2 className={styles.row_text_small}>2013-2019</h2>
									</div>
									<div className={styles.row}>
										<h2 className={styles.row_text_small}>
											Bachelor&apos;s Degree - Information Technology
											(Computing)
										</h2>
										<h2 className={styles.row_text_small}>Hong Kong</h2>
									</div>
								</div>
							</div>
						</section>

						<section className={styles.section}>
							<h1 className={styles.heading}>Experience</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2>Legend Entertainment Group Limited, Korea</h2>
										<h2 className={styles.row_text_small}>2019-2021</h2>
									</div>
									<div className={styles.row}>
										<h2>(General Manager, Freelance)</h2>
									</div>
									<div className={styles.row}>
										<ul className={styles.contribution_list}>
											<li>
												Planned & Executed numerous events involving Luxury
												brands and Korean celebrity.
											</li>
											<li>
												Organized numerous magazine cover shoots in partnership
												with Hong Kong #Legend magazine.
											</li>
											<li>
												Collaborated with various artists and coordinated music
												video shoots.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</ResumeLayout>
	)
}

export default ResumePage
