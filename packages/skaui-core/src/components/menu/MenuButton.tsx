import React from 'react'
import { useMenuTrigger } from 'react-aria'
import { useMenuTriggerState } from 'react-stately'
import { Popover } from '../popover'
import { MenuButtonProps } from './Menu.types'
import styles from './Menu.module.css'
import { Menu } from './Menu'
import { AnimatePresence, motion } from 'framer-motion'

const MenuButton = (props: MenuButtonProps) => {
	const { menuButton, onAction } = props
	const state = useMenuTriggerState(props)
	const ref = React.useRef(null)
	const { menuTriggerProps, menuProps } = useMenuTrigger(
		{ type: 'menu' },
		state,
		ref
	)

	const menuButtonClone = React.cloneElement(menuButton, {
		...menuTriggerProps,
		ref: ref,
	})
	return (
		<div className='relative inline-block'>
			{menuButtonClone}
			<AnimatePresence exitBeforeEnter>
				{state.isOpen && (
					<motion.div
						initial={{ y: 5, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 5, opacity: 0 }}
						transition={{ ease: 'easeInOut' }}
					>
						<Popover
							isOpen={state.isOpen}
							onClose={state.close}
							className={styles.menu_popover}
						>
							<Menu onAction={onAction} {...props} {...menuProps} />
						</Popover>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export { MenuButton }
