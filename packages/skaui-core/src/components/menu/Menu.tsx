import clsx from 'clsx'
import React from 'react'
import { useMenu, useMenuItem, useMenuSection, useSeparator } from 'react-aria'
import { TreeProps, useTreeState } from 'react-stately'
import { CheckIcon } from '../../icons'
import styles from './Menu.module.css'
import { MenuItemProps, MenuProps, MenuSectionProps } from './Menu.types'

export const Menu = (props: MenuProps) => {
	const state = useTreeState(props as TreeProps<object>)
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
		{ key: item.key },
		state,
		ref
	)

	return (
		<li
			{...menuItemProps}
			ref={ref}
			className={clsx(styles.menu_item, [
				isFocused && styles.menu_item_focused,
				isSelected && styles.menu_item_selected,
				isDisabled && styles.menu_item_disabled,
			])}
		>
			{item.rendered}
			{isSelected && <CheckIcon className={styles.menu_item_check} />}
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
				<li {...separatorProps} className={styles.menu_section_separator} />
			)}
			<li {...itemProps} className={styles.menu_section}>
				{section.rendered && (
					<span {...headingProps} className={styles.menu_section_heading}>
						{section.rendered}
					</span>
				)}
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
