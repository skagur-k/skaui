import { Modal } from '@skaui/core'
import clsx from 'clsx'
import { useState } from 'react'
import { IProject } from './Project.types'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }: { project: IProject }) => {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<Modal isOpen={isOpen} onClose={() => setOpen(false)}>
				<div>{project.id}</div>
			</Modal>
			<div onClick={() => setOpen(true)} className={clsx(styles.featured)}>
				<span className={styles.featured_index}>{project.id}</span>
				<div className={styles.featured_details}>
					<div className={styles.featured_title}>
						<span className={clsx(styles.featured_title_heading)}>
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

export default ProjectCard
