import React from 'react'

const Directory = ({ name, slug, isExpanded, onClick, children }) => {
	return (
		<div>
			<h1 onClick={() => onClick(slug)}>{name}</h1>
			<div>{children}</div>
		</div>
	)
}

export default Directory
