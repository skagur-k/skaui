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
	description?: any
	githubRepo?: string
	projectUrl?: string
	stacks?: ITechStack[]
	coverimagelight?: any
	coverimagedark?: any
}

export interface ProjectDetailProps {
	project: IProject
	isOpen?: boolean
	onClose?: () => void
}
