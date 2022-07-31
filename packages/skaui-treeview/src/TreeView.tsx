import clsx from 'clsx'
import React from 'react'
import { FocusScope, useFocusRing } from 'react-aria'
import {
	AiOutlineFile,
	AiOutlineMinusSquare,
	AiOutlinePlusSquare,
} from 'react-icons/ai'
import { BsFolder } from 'react-icons/bs'
import { TreeContextProvider, useTree } from './TreeContext'
import { FileProps, FolderProps, TreeViewProps } from './TreeView.types'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './TreeView.module.css'

export const TreeView: React.ComponentType<TreeViewProps> = React.memo(
	({ children, title }: TreeViewProps) => {
		return (
			<FocusScope>
				<div className={styles.treeviewtemp}>
					{title && <div className='text-base font-bold mb-4'>{title}</div>}
					{children}
				</div>
			</FocusScope>
		)
	}
)

TreeView.displayName = 'SKA UI - TreeView'

export const Folder: React.ComponentType<FolderProps> = React.memo(
	({ children, name, open, defaultOpen = false }) => {
		const depth = useTree()

		const [isOpen, setIsOpen] = React.useState(defaultOpen)

		const ref = React.useRef<HTMLUListElement>(null)
		const { focusProps, isFocusVisible } = useFocusRing()

		const onKeyDown = (e: any) => {
			switch (e.key) {
				case 'Enter':
					setIsOpen(!isOpen)
					break
			}
		}
		return (
			<TreeContextProvider value={1 + depth}>
				<li
					{...focusProps}
					tabIndex={0}
					onKeyDown={onKeyDown}
					className={clsx('treeview-folder', {
						'treeview-folder-open': isOpen || open,
						'treeview-folder-focused': isFocusVisible,
					})}
				>
					<a
						className={clsx('treeview-folder-label')}
						title={name}
						onClick={() => setIsOpen((open) => !open)}
					>
						{Array.from(Array(depth)).map((_e, i) => {
							return (
								<span
									key={i}
									className='treeview-indent treeview-indent-folder'
								/>
							)
						})}
						<div className='treeview-folder-label'>
							<span
								className={clsx('treeview-folder-label-status treeview-icons', {
									'treeview-folder-label-status-disabled': open,
								})}
							>
								{open || isOpen ? (
									<AiOutlineMinusSquare className='align-middle' />
								) : (
									<AiOutlinePlusSquare />
								)}
							</span>
							<span className='treeview-folder-label-icon'>
								<BsFolder className='treeview-icons' />
							</span>
							<span className='treeview-folder-label-name'>{name}</span>
						</div>
					</a>

					<AnimatePresence>
						{open ||
							(isOpen && (
								<motion.ul
									initial={{ height: 0 }}
									animate={{ height: 'auto' }}
									exit={{ height: 0 }}
									transition={{ duration: 0.1, ease: 'linear' }}
									ref={ref}
									className='treeview-folder-children overflow-hidden'
								>
									{children}
								</motion.ul>
							))}
					</AnimatePresence>
				</li>
			</TreeContextProvider>
		)
	}
)

Folder.displayName = 'SKA UI - TreeView/Folder'

export const File: React.ComponentType<FileProps> = React.memo(
	({ name, active, isSelected, icon }) => {
		const depth = useTree()
		const ref = React.useRef<HTMLLIElement>(null)
		const [selected] = React.useState(isSelected)
		const { focusProps, isFocusVisible } = useFocusRing()

		let iconClone

		if (icon) {
			iconClone = React.cloneElement(icon!, {
				className: 'treeview-icons',
			})
		}

		return (
			<li
				{...focusProps}
				ref={ref}
				tabIndex={0}
				className={clsx('treeview-file', {
					'treeview-file-active': active,
					'treeview-file-focused': isFocusVisible,
					'treeview-file-selected': selected,
				})}
			>
				<a title={name}>
					{Array.from(Array(depth)).map((_e, i) => {
						return (
							<span className='treeview-indent treeview-indent-file' key={i} />
						)
					})}
				</a>
				<div className={clsx('treeview-file-label')}>
					<span className='treeview-file-label-icon '>
						{icon ? iconClone : <AiOutlineFile className='treeview-icons' />}
					</span>
					<span className='treeview-file-label-name'>{name}</span>
				</div>
			</li>
		)
	}
)

File.displayName = 'SKA UI - TreeView/File'

export default TreeView
