export interface TagProps {
	id: string
	key: string
	children: string
	onRemove?: (id: string) => void
}
export interface TagsProps {
	tags: string[]
}
