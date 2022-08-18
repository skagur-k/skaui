import React from 'react'
import { Item } from 'react-stately'
import _Tabs from './Tabs'
import { TabsProps } from './Tabs.types'

interface Tabs extends React.ForwardRefExoticComponent<TabsProps<object>> {
	Item: typeof Item
}

const Tabs = _Tabs as Tabs

Tabs.Item = Item

export { Tabs }
