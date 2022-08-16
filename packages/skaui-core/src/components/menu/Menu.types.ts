import { Node } from '@react-types/shared'
import React from 'react'
import { AriaMenuItemProps, AriaMenuOptions } from 'react-aria'
import { MenuTriggerProps, TreeState } from 'react-stately'

export interface MenuButtonProps extends MenuTriggerProps {
	children: React.ReactNode
	menuButton: React.ReactElement
	onAction?: () => void
}

export interface MenuProps extends AriaMenuOptions<unknown> {}

export interface MenuItemProps extends AriaMenuItemProps {
	item: Node<unknown>
	state: TreeState<unknown>
}

export interface MenuSectionProps {
	state: TreeState<unknown>
	onAction?: () => void
	section: Node<unknown>
}
