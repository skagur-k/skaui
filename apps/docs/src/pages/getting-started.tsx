import { NextPage } from 'next'
import { IDE } from '../components/ide'
import { TreeView, Folder, File } from '@skaui/treeview'
import { CSSTransition } from 'react-transition-group'

const GettingStarted: NextPage = () => {
	const code = `<TreeView title="TreeView">
<Folder name="Hello">
	<File name="File1.js"/>
	<File name="File2.js"/>
</Folder>
<Folder name="Hello">
	<File name="File1.js"/>
	<File name="File2.js"/>
</Folder>
	<File name="File1.js"/>
	<File name="File2.js"/>
</TreeView>`
	const scope = { TreeView, Folder, File, CSSTransition }
	return (
		<div className={'flex flex-col gap-20'}>
			<div className='title flex flex-col gap-10'>
				<h1 className='text-4xl font-black'>Getting Started</h1>
				<p className='text-xl'>This is a description for the component</p>
			</div>

			<div>
				<IDE heading='TreeView' code={code} scope={scope} />
			</div>
		</div>
	)
}

export default GettingStarted
