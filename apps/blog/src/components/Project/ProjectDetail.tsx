import { Modal } from '@skaui/core'
import React from 'react'
import { useState } from 'react'
import { ProjectDetailProps } from './Project.types'

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
	const [isOpen, setOpen] = useState(true)

	function handleClose() {
		setOpen(false)
	}

	return (
		<div>
			<Modal isOpen={isOpen} onClose={handleClose} onExitComplete={onClose}>
				<div>{project?.name}</div>
			</Modal>
		</div>
	)
}

export default ProjectDetail
