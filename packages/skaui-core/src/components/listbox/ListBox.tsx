import { useListBox, useListBoxSection, useOption } from 'react-aria'
import clsx from 'clsx'
import React from 'react'
import { CheckIcon } from '../../icons'
import type {
	ListBoxProps,
	OptionContextValue,
	OptionProps,
	SectionProps,
} from './ListBox.types'
import { useListBoxOptionClass } from './styles'
import styles from './ListBox.module.css'

const ListBox = (props: ListBoxProps) => {
	const ref = React.useRef<HTMLUListElement>(null)
	const { listBoxRef = ref, state, className } = props
	const { listBoxProps } = useListBox(props, state, listBoxRef)

	return (
		<ul
			ref={listBoxRef}
			className={clsx(styles.listbox, className)}
			{...listBoxProps}
		>
			<div className={styles.listbox_items}>
				{[...state.collection].map((item) =>
					item.type === 'section' ? (
						<ListBoxSection key={item.key} section={item} state={state} />
					) : (
						<ListBoxOption key={item.key} item={item} state={state} />
					)
				)}
			</div>
		</ul>
	)
}

const ListBoxSection = ({ section, state }: SectionProps) => {
	const { itemProps, headingProps, groupProps } = useListBoxSection({
		heading: section.rendered,
		'aria-label': section['aria-label'],
	})

	return (
		<>
			<li className={styles.listbox_section} {...itemProps}>
				{section.rendered && (
					<div className={styles.listbox_section_heading} {...headingProps}>
						{section.rendered}
					</div>
				)}
				<ul className={styles.listbox_section_item} {...groupProps}>
					{[...section.childNodes].map((node) => {
						return <ListBoxOption key={node.key} item={node} state={state} />
					})}
				</ul>
			</li>
		</>
	)
}

const ListBoxOption = ({ item, state }: OptionProps) => {
	const ref = React.useRef<HTMLLIElement>(null)
	const { optionProps, isDisabled, isSelected, isFocused } = useOption(
		{
			key: item.key,
		},
		state,
		ref
	)

	const optionClasses = useListBoxOptionClass({
		isDisabled,
		isSelected,
		isFocused,
	})
	return (
		<li ref={ref} className={optionClasses} {...optionProps}>
			<div className={styles.listbox_content}>{item.rendered}</div>
			{isSelected && <CheckIcon aria-hidden='true' />}
		</li>
	)
}

export default ListBox
