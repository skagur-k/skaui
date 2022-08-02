import Directory from './Directory'
import File from './File'
import { IDirectory, IFile } from './FileViewer.types'

interface generateChildrenProps {
	items: Array<IFile | IDirectory>
	slugPrefix: string
	handleToggleDirectory?: Function
	handleSelectFile?: Function
	isExpanded?: boolean
}

function generateChildren(items: Array<IFile|IDirectory>, slugPrefix: string, props: any[]) {
	return items.map((item) => {
		const slug = `${slugPrefix}/${item.name}`

		if (item.type === 'directory') {
			return (
				<Directory
					key={slug}
					slug={slug}
					name={item.name}
					isExpanded={(item as IDirectory).isExpanded}
					onClick={props.handleToggleDirectory!}
				>
					{generateChildren(item.contents as IFile[], slug, {
						...rest,
						isExpanded: item.isExpanded,
					})}
				</Directory>
			)
		} else {
			return (
				<File
					key={slug}
					file={item}
					slug={slug}
					onClick={props.handleSelectFile!}
					isExpanded={props.isExpanded!}
				/>
			)
		}
	})
}
