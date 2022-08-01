import React from 'react'
import { File } from './FileViewer.types'

export type FileProps = {
	file: File
	slug: string
	isExpanded: boolean
	onClick: Function
}

const File = ({ file, slug, isExpanded, onClick }: FileProps) => {
	return (
		<div
			onClick={() => onClick(slug)}
			tabIndex={isExpanded === false ? -1 : undefined}
		>
			{file.name}
		</div>
	)
}

export default File
