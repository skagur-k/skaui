import React from 'react'

export type Item = File | Directory
export type Items = Item[]

export type File = {
	name: string
	slug?: string
	type: 'file'
	isSelected?: boolean
	contents: string
}

export type DirectoryProps = {
	name: string
	slug: string
	isExpanded: boolean
	onClick: (slug: DirectoryProps['slug']) => void
	children: React.ReactNode
}

export type FileContentProps = {
	contents: File['contents'][]
}

export type Directory = {
	name: string
	slug: string
	isSelected?: boolean
	isExpanded: boolean
	type: 'directory'
	contents: any
}

export interface FileProps {
	file: File
	slug: string
	isExpanded: boolean
	onClick: (slug: FileProps['slug']) => void
}

export interface FileViewerProps {
	initialFiles: any
}
