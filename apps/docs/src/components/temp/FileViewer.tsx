import React from 'react'
import FileContent from './FileContent'
import { getFile } from './FileViewer.helpers'
import { FileViewerProps } from './FileViewer.types'
import Sidebar from './Sidebar'

const FileViewer = ({ initialFiles }: FileViewerProps) => {
	const [files, setFiles] = React.useState(initialFiles)
	console.log(files)

	const activeFile = getFile(files, (file) => !!file.isSelected)

	return (
		<div>
			<Sidebar files={files} setFiles={setFiles} />
			{/* <FileContent contents={activeFile!.contents} /> */}
			<FileContent contents={'Hello World'} />
		</div>
	)
}

export default FileViewer
