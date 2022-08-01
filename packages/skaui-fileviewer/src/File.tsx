import React from 'react'

const File = ({ file, slug, isExpanded, onClick }) => {
	return (
		<div
			onClick={() => onClick(slug)}
			tabIindex={isExpanded === false ? -1 : undefined}
		>
			{file.name}
		</div>
	)
}

export default File
