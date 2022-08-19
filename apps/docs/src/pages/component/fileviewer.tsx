import { FileViewer, Folder, File, InlineCode } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import * as example from '../../data/prismexample'

import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'
import { SettingsIcon } from '@skaui/core/src/icons'

const treeviewCode = `
<FileViewer title='File Viewer Project' nocontent={true}>
	<Folder name='src'>
		<File
		name='Diff.diff'
		language='diff'
		content={example.diff}
		highlight={'4,6,8-10'}
		/>
		<File name='JSX.jsx' content={example.jsx} />
		<File name='.gitignore' language='git' content={example.gitignore} />
		<File
		name='package.json'
		language='json'
		content={example.packagejson}
		/>
		<File
		name='styles.css'
		language='css'
		content={example.stylescss}
		highlight={'4,6,8-10'}
		/>
		<Folder name='src'>
		<File
			name='Diff.diff'
			language='diff'
			content={example.diff}
			highlight={'4,6,8-10'}
		/>

		<File
			name='styles.css'
			language='css'
			content={example.stylescss}
			highlight={'4,6,8-10'}
		/>
		</Folder>
	</Folder>
	<File
	name='javascript.js'
	language='javascript'
	content={example.js}
	highlight={'4,6,8-10'}
	/>
	<File
	name='index.html'
	language='markup'
	content={example.html}
	highlight={'4,6,8-10'}
	/>
	<File name='nocontent.html' language='markup' />
</FileViewer>
`
const treeviewScope = { FileViewer, Container, example, Folder, File }

const fileviewerCode = `
<FileViewer title='File Viewer Project'>
	<Folder name='src'>
		<File
		name='Diff.diff'
		language='diff'
		content={example.diff}
		highlight={'4,6,8-10'}
		/>
		<File name='JSX.jsx' content={example.jsx} />
		<File name='.gitignore' language='git' content={example.gitignore} />
		<File
		name='package.json'
		language='json'
		content={example.packagejson}
		/>
		<File
		name='styles.css'
		language='css'
		content={example.stylescss}
		highlight={'4,6,8-10'}
		/>
		<Folder name='src'>
		<File
			name='Diff.diff'
			language='diff'
			content={example.diff}
			highlight={'4,6,8-10'}
		/>

		<File
			name='styles.css'
			language='css'
			content={example.stylescss}
			highlight={'4,6,8-10'}
		/>
		</Folder>
	</Folder>
	<File
	name='javascript.js'
	language='javascript'
	content={example.js}
	highlight={'4,6,8-10'}
	/>
	<File
	name='index.html'
	language='markup'
	content={example.html}
	highlight={'4,6,8-10'}
	/>
	<File name='nocontent.html' language='markup' />
</FileViewer>
`
const fileviewerScope = { FileViewer, Container, example, Folder, File }

const FileViewerPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>File Viewer</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					A UI Component that displays list of files and their contents.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Tree View</h2>
					<h3 className='text-lg text-neutral-400'>
						The content section of the fileviewer can be hidden by default by
						setting <InlineCode>nocontent</InlineCode> prop to true.
					</h3>
					<h3 className='text-lg text-neutral-400'>
						Content can be shown by checking Show Content{' '}
						<SettingsIcon className='inline-flex h-5 w-5 align-middle' />{' '}
						option.
					</h3>
					<IDE code={treeviewCode} scope={treeviewScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Tree View</h2>
					<h3 className='text-lg text-neutral-400'>
						Line numbers can be toggled by checking Line Numbers{' '}
						<SettingsIcon className='inline-flex h-5 w-5 align-middle' />{' '}
						option.
					</h3>
					<IDE code={fileviewerCode} scope={fileviewerScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default FileViewerPage
