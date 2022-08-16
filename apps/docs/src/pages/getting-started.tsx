import { Button, File, Folder, OverlayContainer, TreeView } from '@skaui/core'
import Modal from '@skaui/core/src/components/modal/Modal'
import { NextPage } from 'next'
import { useState } from 'react'
import * as ex from '../data/prismexample'
import PageLayout from '../layouts/PageLayout'

const GettingStarted: NextPage = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<PageLayout>
			<div className='flex flex-col justify-center gap-10'>
				<TreeView title='Hello World'>
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
						<Folder name='src'>
							<File
								name='Diff.diff'
								language='diff'
								content={ex.diff}
								highlight={'4,6,8-10'}
							/>

							<File
								name='styles.css'
								language='css'
								content={ex.stylescss}
								highlight={'4,6,8-10'}
							/>
						</Folder>
					</Folder>
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
					<File name='nocontent.html' language='markup' />
				</TreeView>
				<div>
					<Button onPress={() => setOpen(true)}>Open Dialog</Button>
					<OverlayContainer>
						<Modal
							title='Title for the dialog'
							isOpen={isOpen}
							onClose={() => setOpen(false)}
							confirmAction={() => setOpen(false)}
							confirmLabel='Delete'
						>
							<div>
								Are you sure you want to delete Documents? All contents will
								be perminately destroyed.
							</div>
						</Modal>
					</OverlayContainer>
				</div>
			</div>
		</PageLayout>
	)
}

export default GettingStarted
