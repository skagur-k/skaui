import React from 'react'

export interface DirectoryProps {
	name: string
	slug: string
	isExpanded: boolean
	onClick: Function
	children: React.ReactElement[]
}

const Directory = ({
	name,
	slug,
	isExpanded,
	onClick,
	children,
}: DirectoryProps) => {
	return (
		<div>
			<h1 onClick={() => onClick(slug)}>{name}</h1>
			{children}
		</div>
	)
}

export default Directory
