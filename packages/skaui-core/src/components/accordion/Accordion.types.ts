import React from 'react'

export type IAccordionItem = {
	title: string
	content: React.ReactNode
}

export interface AccordionProps {
	items: IAccordionItem[]
	children?: React.ReactNode
	defaultExpanded?: number
}

export interface AccordionItemProps
	extends React.HTMLAttributes<HTMLDivElement> {
	open?: boolean
	title: string
	onToggle?: () => void
}
