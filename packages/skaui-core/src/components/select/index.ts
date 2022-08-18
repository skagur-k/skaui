import React from 'react'
import { Item, Section } from 'react-stately'
import { SelectProps } from './Select.types'
import _Select from './Select'

interface Select extends React.ForwardRefExoticComponent<SelectProps<object>> {
	Item: typeof Item
	Section: typeof Section
}

const Select = _Select as Select

Select.Item = Item
Select.Section = Section

export { Select }
