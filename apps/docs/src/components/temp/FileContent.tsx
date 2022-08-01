import React from 'react'
import { FileContentProps } from './FileViewer.types'

const FileContent = ({ contents, ...delegated }: FileContentProps) => {
	return <div {...delegated}>{contents}</div>
}

export default FileContent
