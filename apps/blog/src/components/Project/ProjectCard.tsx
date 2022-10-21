import { Badge, useTheme } from '@skaui/core'
import clx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
	FocusScope,
	mergeProps,
	OverlayContainer,
	useModal,
	useOverlay,
	usePreventScroll,
} from 'react-aria'
import { FaLink } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { AnyLink } from '../Link'
import { IProject, ProjectDetailProps } from './Project.types'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }: { project: IProject }) => {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<ProjectDetail
				project={project}
				isOpen={isOpen}
				onClose={() => setOpen(false)}
			/>
			<div onClick={() => setOpen(true)} className={clx(styles.featured)}>
				<div className={styles.featured_details}>
					<div className={styles.featured_title}>
						<span className={clx(styles.featured_title_heading)}>
							{project.name}
						</span>
						<div className={styles.featured_title_techs}>
							{project.stacks?.slice(0, 3).map((stack, id) => {
								return (
									<div key={id}>
										<span>{stack.icon}</span>
									</div>
								)
							})}
						</div>
					</div>
					<p className={styles.featured_description}>{project.summary}</p>
				</div>
			</div>
		</>
	)
}

export const ProjectDetail = (props: ProjectDetailProps) => {
	const [isBrowser, setIsBrowser] = useState(false)
	const { isOpen } = props

	useEffect(() => {
		setIsBrowser(typeof window !== 'undefined')
	}, [])

	return isBrowser ? (
		<OverlayContainer>
			<AnimatePresence exitBeforeEnter>
				{isOpen && <DetailOverlay {...props} />}
			</AnimatePresence>
		</OverlayContainer>
	) : null
}

const DetailOverlay = (props: ProjectDetailProps) => {
	const { project } = props
	const ref = useRef(null)
	const { overlayProps, underlayProps } = useOverlay(
		{
			...props,
			isDismissable: true,
		},
		ref
	)
	const { modalProps } = useModal()
	usePreventScroll()

	const { mode } = useTheme()
	
	let imgSrc

	switch (mode) {
		case 'dark':
			imgSrc = project?.coverimagedark
			break
		default:
			imgSrc = project?.coverimagelight
			break
	}

	return (
		<motion.div
			key={'modal'}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			<div className={styles.underlay} {...underlayProps}>
				<FocusScope contain restoreFocus autoFocus>
					{/* Underlay */}
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.8 }}
						transition={{ ease: 'easeInOut', duration: 0.2 }}
					>
						{/* Overlay */}
						<div
							className={styles.overlay}
							{...mergeProps(overlayProps, modalProps)}
							ref={ref}
						>
							{/* Overlay Back Button */}
							<button
								className={styles.overlay_backbutton}
								onClick={props.onClose}
							>
								<FiChevronLeft className='text-2xl' />
								<span>Back</span>
							</button>

							{/* Project Cover Image */}
							{project?.coverimagelight && (
								<div className='relative flex justify-center items-center'>
									<Image src={imgSrc} alt='project image' />
								</div>
							)}

							{/* Overlay Content */}
							<div className={styles.overlay_content}>
								{/* Project Info & Description */}
								<div className={styles.overlay_info}>
									<span className={styles.overlay_name}>{project.name}</span>
									<p className={styles.overlay_period}>{project.period}</p>
								</div>
								<div className={styles.overlay_description}>
									{project.description}
								</div>

								{/* Tech Stack */}
								{project.stacks && (
									<div className={styles.overlay_techstack}>
										<div className='flex justify-between items-center'>
											<h3 className={styles.overlay_techstack_heading}>
												Tech Stack
											</h3>
											{project.stacks.length > 6 && (
												<Badge>and {project.stacks.length - 6} more</Badge>
											)}
										</div>
										<div className={styles.overlay_techstack_techs}>
											{project.stacks.slice(0, 6).map((stack) => {
												return (
													<AnyLink key={stack.name} href={stack.url || ''}>
														<div className={styles.overlay_techstack_tech}>
															<span>{stack.icon}</span>
															<span>{stack.name}</span>
														</div>
													</AnyLink>
												)
											})}
										</div>
									</div>
								)}
							</div>

							{/* LINKS */}
							<div className={styles.overlay_links}>
								{project.projectUrl && (
									<AnyLink
										href={project.projectUrl}
										className={styles.overlay_link}
									>
										<FaLink className='w-4 h-4' />
										<p>Website</p>
									</AnyLink>
								)}

								{project.githubRepo && (
									<AnyLink
										href={project.githubRepo}
										className={styles.overlay_link}
									>
										<SiGithub className='w-5 h-5' />
										<p>GitHub</p>
									</AnyLink>
								)}
							</div>
						</div>
					</motion.div>
				</FocusScope>
			</div>
		</motion.div>
	)
}

export default ProjectCard
