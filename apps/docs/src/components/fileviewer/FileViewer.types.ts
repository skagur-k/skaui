import React from 'react'

export interface FileViewerProps {
	children: React.ReactElement | React.ReactElement[]
	title?: string
}

export interface BaseProps {
	name: string
}

export type IFile = {
	slug?: string
	content?: string
	language?: Language
}

export interface FolderProps extends BaseProps {
	children?: React.ReactElement[]
	open?: boolean
	defaultOpen?: boolean
	slug?: string
	onToggle?: () => void
}

export interface FileProps extends BaseProps {
	language?: Language
	active?: boolean
	type?: 'lambda'
	slug?: string
	content?: string
	icon?: React.ReactElement
}

export type Language =
	| 'markup'
	| 'bash'
	| 'clike'
	| 'c'
	| 'cpp'
	| 'css'
	| 'javascript'
	| 'jsx'
	| 'coffeescript'
	| 'actionscript'
	| 'css-extr'
	| 'diff'
	| 'git'
	| 'go'
	| 'graphql'
	| 'handlebars'
	| 'json'
	| 'less'
	| 'makefile'
	| 'markdown'
	| 'objectivec'
	| 'ocaml'
	| 'python'
	| 'reason'
	| 'sass'
	| 'scss'
	| 'sql'
	| 'stylus'
	| 'tsx'
	| 'typescript'
	| 'wasm'
	| 'yaml'
