import clsx from 'clsx'
import React from 'react'
import type { IAccordionItem, AccordionProps } from './Accordion.types'
import AccordionItem from './AccordionItem'
import styles from './Accordion.module.css'

const Accordion = (props: AccordionProps): JSX.Element => {
	const { items: _items, defaultExpanded } = props
	const [selected, setSelected] = React.useState<number | null>(
		defaultExpanded || null
	)

	const handleToggle = (index: number) => {
		if (index === selected) {
			return setSelected(null)
		}

		setSelected(index)
	}

	const [items] = React.useState<IAccordionItem[]>(_items)

	return (
		<div className={clsx(styles.accordion)}>
			{items.map((item, i) => {
				return (
					<AccordionItem
						key={i}
						onToggle={() => handleToggle(i)}
						title={item.title}
						open={selected === i}
					>
						{item.content}
					</AccordionItem>
				)
			})}
		</div>
	)
}

export default Accordion
