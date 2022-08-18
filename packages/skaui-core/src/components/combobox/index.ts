import React from 'react'
import { Item, Section } from 'react-stately'
import { ComboBoxProps } from './ComboBox.types'
import _ComboBox from './ComboBox'

interface Combobox
	extends React.ForwardRefExoticComponent<ComboBoxProps<object>> {
	Item: typeof Item
	Section: typeof Section
}

const ComboBox = _ComboBox as Combobox

ComboBox.Item = Item
ComboBox.Section = Section

export { ComboBox }
