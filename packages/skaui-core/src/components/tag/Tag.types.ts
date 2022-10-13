export interface TagProps {
	id: string
	children: string
	onRemove?: (id: string) => void | null
	className?: string
}
export interface TagsProps {
	tags: string[]
	className?: string
	removable?: boolean
}
