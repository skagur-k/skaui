import { PDFDownloadLink } from '@react-pdf/renderer'
import { Tags } from '@skaui/core'
import clx from 'clsx'
import { FaGithub } from 'react-icons/fa'
import { FiGlobe, FiHome, FiMail } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { AnyLink } from '../../components'
import Resume from '../../helpers/generateResumePDF'
import ResumeLayout from '../../layouts/ResumeLayout'
import styles from '../../styles/Resume.module.css'

const ResumePage = () => {
	return (
		<ResumeLayout title='Resume'>
			<div className={styles.wrapper}>
				<div className={styles.resume}>
					<div className={styles.summary}>
						<section className={styles.personal_info}>
							<h1 className={styles.name}>김남혁</h1>
							<p className={styles.description}>
								10년 전 조우한 첫 &apos;Hello World&apos; 의 설렘으로 시작한
								개발 여정을 이어가고 있는 개발자, 김남혁입니다. 끝없는 배움을
								거름 삼아 아이코닉한 개발자가 되기를 꿈 꾸고 있습니다.
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
							<AnyLink className={styles.version_link} href='/resume/en'>
								English Resume
							</AnyLink>
							<PDFDownloadLink
								className={styles.version_link}
								document={<Resume />}
								fileName='somename.pdf'
							>
								{({ loading }) =>
									loading ? 'Loading PDF Document...' : 'PDF 다운로드'
								}
							</PDFDownloadLink>
						</div>
					</div>
					<div className={clx(styles.detail, 'scrollbar')}>
						<section className={styles.section}>
							<h1 className={styles.heading}>프로젝트</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2 className={styles.project_heading}>SKA UI</h2>
										<h2 className={styles.row_text_small}>2022 - 현재</h2>
									</div>
									<div className={styles.row}>
										<div className={styles.project_description}>
											<p>
												SKA UI 는 미니멀리즘과 심플함을 추구하는 리액트 컴포넌트
												라이브러리 / 디자인 시스템입니다. 어도비사의 React
												Spectrum Library 를 차용하여 스크린리더 및 키보드 탐색
												등, 접근성을 고려하여 개발을 하였습니다. 직관적인 UX 와
												사용성을 위해 불필요한 요소 등은 제외하되 유려한
												디자인을 구현할 수 있도록 노력하였습니다.
											</p>
											<p>
												본 프로젝트는 Tailwind CSS 를 이용하여 일관성 있는
												디자인을 구현하였고. 추후 유지보수 편의를 위해
												TypeScript로 개발을 하였습니다. SKA UI 의 문서사이트{' '}
												<AnyLink
													className={'font-bold px-1'}
													href='https://skaui.skagur.dev'
												>
													https://skaui.skagur.dev
												</AnyLink>
												는 리액트를 기반으로한 서버 사이드 렌더링 (SSR)
												프레임워크인 Next JS를 사용하여 구축하였고 Vercel에
												배포되어 있습니다.
											</p>
											<p>
												개발 편의를 위해 본 프로젝트는 Vercel사의 Turbo Repo
												빌드시스템을 사용해 프로젝트 구성을 하였고, SKA UI
												디자인시스템을 이용하는 개인 프로젝트들은 해당 리포에
												포함될 예정입니다.
											</p>

											<div className={styles.footer}>
												<Tags
													removable={false}
													tags={[
														'React',
														'TypeScript',
														'Tailwind',
														'Next JS',
														'Vercel',
														'Rollup',
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
										<h2 className={styles.row_text_small}>2021 - 현재</h2>
									</div>
									<div className={styles.row}>
										<div className={styles.project_description}>
											<p>
												skagur.dev 는 SKA UI를 기반으로 구축한 개인 포트폴리오
												및 블로그 애플리케이션입니다. 서버 사이드 렌더링와 SSG를
												위해 Next.JS 리액트 프레임워크를 이용하였고, SKA UI 와의
												일관성을 위해 TailWind CSS 를 사용하여 스타일링을
												하였습니다.
											</p>
											<p>
												본 프로젝트와 SKA UI의 연동성, 및 유지보수 편의를 위해
												동일한 모노리포로 구성하였고, 일관성을 위해 기타
												컴포넌트도 SKA UI와의 동일한 디자인 철학을 베이스로
												개발하였습니다.
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
							<h1 className={styles.heading}>기술 스택</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<h2 className={styles.row}>개발 언어</h2>
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
									<h2 className={styles.row}>프론트엔드</h2>
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
									<h2 className={styles.row}>백엔드</h2>
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
									<h2 className={styles.row}>기타</h2>
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
							<h1 className={styles.heading}>자격증</h1>
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
							<h1 className={styles.heading}>어학능력</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2>영어</h2>
										<h2 className={styles.row_text_small}>수준급</h2>
									</div>
								</div>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2>중국어</h2>
										<h2 className={styles.row_text_small}>능통</h2>
									</div>
								</div>
							</div>
						</section>

						<section className={styles.section}>
							<h1 className={styles.heading}>교육사항</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2>홍콩 이공 대학교 (Hong Kong Polytechnic University)</h2>
										<h2 className={styles.row_text_small}>2013-2019</h2>
									</div>
									<div className={styles.row}>
										<h2 className={styles.row_text_normal}>
											학사 - 정보통신(Information Technology)
										</h2>
										<h2 className={styles.row_text_normal}>홍콩</h2>
									</div>
								</div>
							</div>
						</section>

						<section className={styles.section}>
							<h1 className={styles.heading}>경력</h1>
							<div className={styles.entries}>
								<div className={styles.entry}>
									<div className={styles.row}>
										<h2>레전드 엔터테인먼트 그룹, 코리아</h2>
										<h2 className={styles.row_text_small}>2019-2021</h2>
									</div>
									<div className={styles.row}>
										<h2>프리랜서</h2>
									</div>
									<div className={styles.row}>
										<ul className={styles.contribution_list}>
											<li>
												홍콩 및 글로벌 브랜드 행사와 한국 인플루언서들과의
												콜라보를 기획하고 진행하였습니다.
											</li>
											<li>
												홍콩 럭셔리 매거진 #Legend 의 한국 아트스트 커버 촬영을
												기획하고 진행하였습니다.
											</li>
											<li>
												한국 아티스트 뮤직비디오 홍콩 현지 촬영 기획 및 제작에
												참여하였습니다.
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
