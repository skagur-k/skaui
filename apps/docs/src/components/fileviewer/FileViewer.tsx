import React from 'react'
import FileContent from './FileContent'
import { getFile } from './FileViewer.helpers'
import { IFile } from './FileViewer.types'

const FileViewer = ({ initialFiles }: any) => {
	const [files, setFiles] = React.useState(initialFiles)
	const activeFile = getFile(files, (file: IFile) => !!file.isSelected)
	return (
		<div>
			<FileContent contents={activeFile!.contents}></FileContent>
		</div>
	)
}

export default FileViewer
