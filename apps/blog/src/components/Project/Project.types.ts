import React from 'react'

interface ITechStack {
	name: string
	icon?: React.ReactNode
	url?: string
}

export interface IProject {
	id: number
	name?: string
	slug: string
	period?: string
	summary?: string
	description?: React.ReactNode
	githubRepo?: string
	projectUrl?: string
	stacks?: ITechStack[]
}

export interface ProjectDetailProps {
	project?: IProject
	onClose: () => void
}
