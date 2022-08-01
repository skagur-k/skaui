import React from 'react'
import FileContent from './FileContent'
import { getFile } from './FileViewer.helpers'
import Sidebar from './Sidebar'

const FileViewer = ({ initialFiles }) => {
	const [files, setFiles] = React.useState(initialFiles)

	const activeFile = getFile(files, (file) => !!file.isSelected)

	return (
		<div>
			<Sidebar files={files} setFiles={setFiles} />
			<FileContent contents={activeFile.contents} />
		</div>
	)
}

export default FileViewer
