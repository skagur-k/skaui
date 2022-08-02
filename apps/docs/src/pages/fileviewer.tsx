import { NextPage } from 'next'
import { File, Folder, TreeView } from '../components/treeview'
import PageLayout from '../layouts/PageLayout'

const Temp: NextPage = () => {
	return (
		<PageLayout>
			<TreeView title='Hello World'>
				<Folder name='Components'>
					<File name='File1' />
					<File name='File2' />
					<Folder name='TreeView'>
						<File name='File1'>Hello World</File>
						<File name='File2' />
						<Folder name='src'>
							<File name='File1' />
							<File name='File2' />
							<Folder name='src'>
								<File name='File1' />
								<File name='File2' />
								<Folder name='src'>
									<File name='File1' />
									<File name='File2' />
								</Folder>
							</Folder>
						</Folder>
					</Folder>
				</Folder>
				<File name='File3' />
				<File name='File4' />
				<File name='File5' />
			</TreeView>
		</PageLayout>
	)
}

export default Temp
