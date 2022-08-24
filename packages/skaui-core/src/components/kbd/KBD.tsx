import clsx from 'clsx'
import React from 'react'

import {
	CommandIcon,
	ControlIcon,
	DeleteIcon,
	OptionsIcon,
	ReturnLeftIcon,
	ShiftIcon,
} from '../../icons/KBDIcons'
import styles from './KBD.module.css'
import { KBDProps } from './KBD.types'

// windows: <WindowsIcon className={styles.kbd_icons} />,
const kbdIcons = {
	windows: 'WIN',
	command: <CommandIcon className={styles.kbd_icons} />,
	option: <OptionsIcon className={styles.kbd_icons} />,
	ctrl: <ControlIcon className={styles.kbd_icons} />,
	shift: <ShiftIcon className={styles.kbd_icons} />,
	returnkey: <ReturnLeftIcon className={styles.kbd_icons} />,
	deletekey: <DeleteIcon className={styles.kbd_icons} />,
}

const KBD = (props: KBDProps) => {
	const {
		mac = false,
		meta,
		windows,
		shift,
		ctrl,
		command,
		alt,
		enter,
		deletekey,
		children,
		...rest
	} = props

	return (
		<div className={clsx(styles.kbd)} {...rest}>
			{windows && <Key>WIN</Key>}
			{ctrl && (mac ? <Key>{kbdIcons['ctrl']}</Key> : <Key>CTRL</Key>)}
			{shift && (mac ? <Key>{kbdIcons['shift']}</Key> : <Key>SHIFT</Key>)}
			{alt && (mac ? <Key>{kbdIcons['option']}</Key> : <Key>ALT</Key>)}
			{command && kbdIcons['command']}
			{enter && kbdIcons['returnkey']}
			{deletekey && kbdIcons['deletekey']}
			{/* {children && !noModifiers && <span>+</span>} */}
			{children && <span className=''>{children}</span>}
		</div>
	)
}

const Key = ({ children }: { children: React.ReactElement | string }) => {
	return <span className='flex justify-center items-center'>{children}</span>
}

export default KBD
