import { FileProps } from './FileViewer.types'

const File = ({ file, slug, isExpanded, onClick }: FileProps) => {
	return (
		<div
			onClick={() => onClick(slug)}
			tabIndex={isExpanded === false ? -1 : undefined}
		>
			{file.name}
		</div>
	)
}

export default File
