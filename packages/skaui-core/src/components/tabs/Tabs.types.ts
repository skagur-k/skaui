import { AriaTabListProps, AriaTabPanelProps } from '@react-types/tabs'
import { Node } from '@react-types/shared'
import { TabListState } from 'react-stately'
import React from 'react'

export interface TabProps<T> {
	item: Node<T>
	state: TabListState<T>
	focused?: boolean
	className?: string
	children?: React.ReactElement[] | string
}
export interface TabsProps<T> extends AriaTabListProps<T> {}
export interface TabPanelProps extends AriaTabPanelProps {
	state: TabListState<unknown>
	className?: string
}
