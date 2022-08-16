import React from 'react'
import { useMenu, useMenuItem, useMenuSection, useSeparator } from 'react-aria'
import { useTreeState } from 'react-stately'
import styles from './Menu.module.css'
import { MenuItemProps, MenuProps } from './Menu.types'

const Menu = (props: MenuProps) => {
	const state = useTreeState(props)
	const ref = React.useRef(null)
	const { menuProps } = useMenu(props, state, ref)

	return (
		<ul {...menuProps} ref={ref} className={styles.menu}>
			{[...state.collection].map((item) =>
				item.type === 'section' ? (
					<MenuSection key={item.key} section={item} state={state} />
				) : (
					<MenuItem key={item.key} item={item} state={state} />
				)
			)}
		</ul>
	)
}

export const MenuItem = (props: MenuItemProps) => {
	const { item, state } = props
	const ref = React.useRef(null)
	const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
		{ key: item.key, ...props },
		state,
		ref
	)

	return (
		<li {...menuItemProps} ref={ref}>
			{item.rendered}
			{isSelected && <span>o</span>}
		</li>
	)
}

export const MenuSection = (props: MenuSectionProps) => {
	const { section, state, onAction } = props
	const { itemProps, headingProps, groupProps } = useMenuSection({
		heading: section.rendered,
		'aria-label': section['aria-label'],
	})

	const { separatorProps } = useSeparator({
		elementType: 'li',
	})

	return (
		<>
			{section.key !== state.collection.getFirstKey() && (
				<li {...separatorProps} />
			)}
			<li {...itemProps}>
				{section.rendered && <span {...headingProps}>{section.rendered}</span>}
				<ul {...groupProps}>
					{[...section.childNodes].map((node) => (
						<MenuItem
							key={node.key}
							item={node}
							state={state}
							onAction={onAction}
						/>
					))}
				</ul>
			</li>
		</>
	)
}

export default Menu
