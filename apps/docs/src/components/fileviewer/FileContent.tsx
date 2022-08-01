import React from 'react'

const FileContent = ({ contents, ...delegated }: { contents: string }) => {
	return <div {...delegated}>{contents}</div>
}

export default FileContent
