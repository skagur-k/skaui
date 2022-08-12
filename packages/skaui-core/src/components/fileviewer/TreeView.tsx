import FileViewer from './FileViewer'
import { TreeViewProps } from './FileViewer.types'

const TreeView = (props: TreeViewProps) => {
	const { children, title, nocontent = true } = props

	return (
		<FileViewer title={title} nocontent={nocontent}>
			{children}
		</FileViewer>
	)
}

export default TreeView
