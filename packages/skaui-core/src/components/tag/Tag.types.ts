export interface TagProps {
	id: string
	children: string
	onRemove?: (id: string) => void | null
}
export interface TagsProps {
	tags: string[]
	className?: string
	removable?: boolean
}
