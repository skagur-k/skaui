import clsx from 'clsx'
import React from 'react'

import {
	CommandIcon,
	DeleteIcon,
	OptionsIcon,
	ReturnLeftIcon,
	ShiftIcon,
	WindowsIcon,
} from '../../icons/KBDIcons'
import styles from './KBD.module.css'
import { KBDProps } from './KBD.types'

const kbdIcons = {
	windows: <WindowsIcon className={styles.kbd_icons} />,
	command: <CommandIcon className={styles.kbd_icons} />,
	option: <OptionsIcon className={styles.kbd_icons} />,
	shift: <ShiftIcon className={styles.kbd_icons} />,
	returnkey: <ReturnLeftIcon className={styles.kbd_icons} />,
	deletekey: <DeleteIcon className={styles.kbd_icons} />,
}

const KBD = (props: KBDProps) => {
	const {
		mac = false,
		meta,
		shift,
		ctrl,
		alt,
		enter,
		deletekey,
		children,
		...rest
	} = props

	return (
		<kbd className={clsx(styles.kbd)} {...rest}>
			{meta &&
				(mac ? (
					<Key>{kbdIcons['command']}</Key>
				) : (
					<Key>
						<Key>{kbdIcons['windows']}</Key>
					</Key>
				))}
			{ctrl && <Key>CTRL</Key>}
			{shift && (mac ? <Key>{kbdIcons['shift']}</Key> : <Key>SHIFT</Key>)}
			{alt && (mac ? <Key>{kbdIcons['option']}</Key> : <Key>ALT</Key>)}
			{enter && kbdIcons['returnkey']}
			{deletekey && kbdIcons['deletekey']}
			{/* {children && !noModifiers && <span>+</span>} */}
			{children && <span className=''>{children}</span>}
		</kbd>
	)
}

const Key = ({ children }: { children: React.ReactElement | string }) => {
	return <kbd className='flex justify-center items-center'>{children}</kbd>
}

export default KBD
