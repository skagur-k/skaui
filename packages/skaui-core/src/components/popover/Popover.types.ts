import React from 'react'

export interface PopoverProps {
	popoverRef?: React.RefObject<HTMLDivElement>
	isOpen?: boolean
	onClose: () => void
	children: React.ReactNode
	className?: string
}
