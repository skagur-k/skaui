import { DirectoryProps } from './FileViewer.types'

const Directory = ({
	name,
	slug,
	isExpanded,
	onClick,
	children,
}: DirectoryProps) => {
	return (
		<div>
			<h1 onClick={() => onClick(slug)}>{name}</h1>
			<div>{children}</div>
		</div>
	)
}

export default Directory
