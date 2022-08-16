import React from 'react'
import { useMenuTrigger } from 'react-aria'
import { useMenuTriggerState } from 'react-stately'
import { Popover } from '../popover'
import { MenuButtonProps } from './Menu.types'
import styles from './Menu.module.css'
import Menu from './Menu'

const MenuButton = (props: MenuButtonProps) => {
	const { menuButton } = props
	const state = useMenuTriggerState(props)
	const ref = React.useRef(null)
	const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)

	const menuButtonClone = React.cloneElement(menuButton, {
		...menuTriggerProps,
		ref: ref,
	})
	return (
		<div className='relative inline-block'>
			{menuButtonClone}
			{state.isOpen && (
				<Popover
					isOpen={state.isOpen}
					onClose={state.close}
					className={styles.menu_popover}
				>
					<Menu {...props} {...menuProps} />
				</Popover>
			)}
		</div>
	)
}

export default MenuButton
