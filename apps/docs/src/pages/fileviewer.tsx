import { NextPage } from 'next'
import FileViewer from '../components/fileviewer/FileViewer'
import PageLayout from '../layouts/PageLayout'

const Temp: NextPage = () => {
	const files = [
		{
			name: 'File1',
			type: 'file',
			contents: 'Fuck!',
		},
		{
			name: 'File2',
			type: 'file',
			contents: 'Fuck World!',
		},
		{
			name: 'File3',
			type: 'file',
			contents: 'Fuck World!',
		},
		{
			name: 'File4',
			type: 'file',
			contents: 'Fuck World!',
		},
		{
			name: 'Folder1',
			type: 'directory',
			contents: [
				{
					name: 'File5',
					type: 'file',
					contents: 'Fuck!',
				},
				{
					name: 'File6',
					type: 'file',
					contents: 'Fuck World!',
				},
			],
		},
	]

	return (
		<PageLayout>
			<FileViewer initialFiles={files} />
		</PageLayout>
	)
}

export default Temp
