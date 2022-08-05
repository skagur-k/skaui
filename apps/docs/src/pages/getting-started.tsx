import { File, FileViewer, Folder, useToast } from '@skaui/core'
import { NextPage } from 'next'
import * as ex from '../data/prismexample'
import PageLayout from '../layouts/PageLayout'

const GettingStarted: NextPage = () => {
	const toast = useToast()

	return (
		<PageLayout>
			<div>
				<FileViewer title='Hello World'>
					<File
						name='javascript.js'
						language='javascript'
						content={ex.js}
						highlight={'4,6,8-10'}
					/>
					<File
						name='index.html'
						language='markup'
						content={ex.html}
						highlight={'4,6,8-10'}
					/>
					<Folder name='src'>
						<File
							name='Diff.diff'
							language='diff'
							content={ex.diff}
							highlight={'4,6,8-10'}
						/>
						<File name='JSX.jsx' content={ex.jsx} />
						<File name='.gitignore' language='git' content={ex.gitignore} />
						<File
							name='package.json'
							language='json'
							content={ex.packagejson}
						/>
						<File
							name='styles.css'
							language='css'
							content={ex.stylescss}
							highlight={'4,6,8-10'}
						/>
					</Folder>
				</FileViewer>
				<button onClick={() => toast('hello world')}>TOAST!</button>
			</div>
		</PageLayout>
	)
}

export default GettingStarted
