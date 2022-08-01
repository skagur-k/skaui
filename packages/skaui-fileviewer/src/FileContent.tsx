import React from 'react'

const FileContent = ({ contents, ...delegated }) => {
	return <div {...delegated}>{contents}</div>
}

export default FileContent
