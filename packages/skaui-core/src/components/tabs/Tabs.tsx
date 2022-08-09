import clsx from 'clsx'
import React from 'react'
import { useFocusRing, useTab, useTabList, useTabPanel } from 'react-aria'
import { useTabListState } from 'react-stately'
import type { TabPanelProps, TabProps, TabsProps } from './Tabs.types'
import styles from './Tabs.module.css'

const Tabs = <T extends object>(props: TabsProps<T>): JSX.Element => {
	const state = useTabListState(props)
	const ref = React.useRef<HTMLDivElement>(null)
	const { tabListProps } = useTabList(props, state, ref)
	const { focusProps, isFocusVisible } = useFocusRing({ within: true })

	return (
		<div className={clsx(styles.tabs)}>
			<div
				{...tabListProps}
				{...focusProps}
				ref={ref}
				className={clsx(styles.tabs_list)}
			>
				{[...state.collection].map((item) => (
					<Tab
						key={item.key}
						item={item}
						state={state}
						className={clsx(
							styles.tabs_list_tab,
							isFocusVisible && styles.tabs_list_tab_focused
						)}
					/>
				))}
			</div>
			<TabPanel key={state.selectedItem?.key} state={state} />
		</div>
	)
}

const Tab = <T extends object>({
	item,
	state,
	className,
}: TabProps<T>): JSX.Element => {
	const { key, rendered } = item
	const ref = React.useRef(null)
	const { tabProps } = useTab({ key }, state, ref)
	const isSelected = state.selectedKey === key
	const isDisabled = state.disabledKeys.has(key)

	return (
		<div
			{...tabProps}
			ref={ref}
			className={clsx(
				[
					isSelected && styles.tabs_list_tab_selected,
					isDisabled && styles.tabs_list_tab_disabled,
				],
				className
			)}
		>
			{rendered}
		</div>
	)
}

const TabPanel = ({
	state,
	className,
	...props
}: TabPanelProps): JSX.Element => {
	const ref = React.useRef(null)
	const { focusProps, isFocusVisible } = useFocusRing()
	const { tabPanelProps } = useTabPanel(props, state, ref)
	return (
		<div
			{...tabPanelProps}
			{...focusProps}
			ref={ref}
			className={clsx(
				styles.tabs_panel,
				isFocusVisible && styles.tabs_panel_focused
			)}
		>
			{state.selectedItem?.props.children}
		</div>
	)
}

export default Tabs
