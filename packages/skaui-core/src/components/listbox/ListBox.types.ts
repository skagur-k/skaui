import type { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'

import React from 'react'
import { ListState } from 'react-stately'

export interface ListBoxProps extends AriaListBoxOptions<unknown> {
	listBoxRef?: React.RefObject<HTMLUListElement>
	state: ListState<unknown>
	className?: string
}

export interface SectionProps {
	section: Node<unknown>
	state: ListState<unknown>
}

export interface OptionProps {
	item: Node<unknown>
	state: ListState<unknown>
}

export interface OptionContextValue {
	labelProps: React.HTMLAttributes<HTMLElement>
	descriptionProps: React.HTMLAttributes<HTMLElement>
}
