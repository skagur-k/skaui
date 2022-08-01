export type IItem = {
	name: string
	type: string
}

export interface IFile extends IItem {
	contents: string
	isSelected?: boolean
}

export interface IDirectory extends IItem {
	contents: Array<IFile>
	isExpanded: boolean
}
