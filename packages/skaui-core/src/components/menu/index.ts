import React from 'react'
import { Menu as _Menu, MenuItem, MenuSection } from './Menu'
import { MenuProps } from './Menu.types'
import { MenuButton } from './MenuButton'

interface Menu extends React.ForwardRefExoticComponent<MenuProps> {
	Item: typeof MenuItem
	Section: typeof MenuSection
	Trigger: typeof MenuButton
}

const Menu = _Menu as Menu

Menu.Item = MenuItem
Menu.Section = MenuSection
Menu.Trigger = MenuButton

export { Menu, MenuItem }
