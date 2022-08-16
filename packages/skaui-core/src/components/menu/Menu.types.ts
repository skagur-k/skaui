import React, { Key } from 'react'
import { MenuTriggerProps, TreeState } from 'react-stately'
import { AriaMenuProps } from '@react-types/menu'
import { CollectionChildren, Node } from '@react-types/shared'

export interface MenuButtonProps extends MenuTriggerProps {
	menuButton: React.ReactElement
}

export interface MenuProps extends Omit<AriaMenuProps<object>, 'children'> {
	children: CollectionChildren<any>
}

export interface MenuItemProps extends AriaMenuItemProps {
	item: Node<object>
	state: TreeState<unknown>
}

interface AriaMenuItemProps {
	/** Whether the menu item is disabled. */
	isDisabled?: boolean
	/** Whether the menu item is selected. */
	isSelected?: boolean
	/** A screen reader only label for the menu item. */
	'aria-label'?: string
	/** The unique key for the menu item. */
	key?: Key
	/** Handler that is called when the menu should close after selecting an item. */
	onClose?: () => void
	/**
	 * Whether the menu should close when the menu item is selected.
	 * @default true
	 */
	closeOnSelect?: boolean
	/** Whether the menu item is contained in a virtual scrolling menu. */
	isVirtualized?: boolean
	/** Handler that is called when the user activates the item. */
	onAction?: (key: Key) => void
}
