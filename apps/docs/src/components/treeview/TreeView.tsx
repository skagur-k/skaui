import React, { useEffect, useReducer } from 'react'
import clsx from 'clsx'
import {
	AiOutlineFile,
	AiOutlineMinusSquare,
	AiOutlinePlusSquare,
} from 'react-icons/ai'
import { BsFolder } from 'react-icons/bs'
import {
	TreeContextProvider,
	TreeViewContextProvider,
	useTree,
	useTreeView,
} from './TreeContext'
import { FileProps, FolderProps, TreeViewProps } from './TreeView.types'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './TreeView.module.css'
import FileContent from './FileContent'

export const TreeView: React.ComponentType<TreeViewProps> = React.memo(
	({ children, title }: TreeViewProps) => {
		const [selectedFile, setSelectedFile] = React.useState<string>('')

		const ctx = {
			selectedFile: selectedFile,
			setSelectedFile: setSelectedFile,
			fileOpened: false,
		}

		return (
			<TreeViewContextProvider value={ctx}>
				<div className={styles.fileviewer}>
					<div className={styles.treeview}>
						{title && <div className={styles.title}>{title}</div>}
						{children}
					</div>
					<FileContent content={selectedFile} />
				</div>
			</TreeViewContextProvider>
		)
	}
)

TreeView.displayName = 'SKA UI - TreeView'

export const Folder: React.ComponentType<FolderProps> = React.memo(
	({ children, name, open, defaultOpen = false, slug = `./${name}` }) => {
		const depth = useTree()
		const [isExpanded, setIsExpanded] = React.useState(defaultOpen)

		const ref = React.useRef<HTMLUListElement>(null)

		const onKeyDown = (e: any) => {
			switch (e.key) {
				case 'Enter':
					setIsExpanded(!isExpanded)
					break
			}
		}

		let sluggedChildren

		if (children) {
			sluggedChildren = children.map((child) =>
				React.cloneElement(child, {
					slug: slug + '/' + child.props.name,
				})
			)
		}

		return (
			<TreeContextProvider value={1 + depth}>
				<li
					tabIndex={0}
					onKeyDown={onKeyDown}
					className={clsx('treeview-folder', {
						'treeview-folder-open': isExpanded || open,
					})}
				>
					<a
						className={clsx('treeview-folder-label')}
						title={name}
						onClick={() => setIsExpanded((open) => !open)}
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
								className={clsx('treeview-icons treeview-folder-label-status', {
									'treeview-folder-label-status-disabled': open,
								})}
							>
								{open || isExpanded ? (
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
							(isExpanded && (
								<motion.ul
									initial={{ height: 0 }}
									animate={{ height: 'auto' }}
									exit={{ height: 0 }}
									transition={{ duration: 0.1, ease: 'linear' }}
									ref={ref}
									className='treeview-folder-children overflow-hidden'
								>
									{sluggedChildren}
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
	({ name, active, slug = name, icon }) => {
		const depth = useTree()
		const ref = React.useRef<HTMLLIElement>(null)
		const { selectedFile, setSelectedFile } = useTreeView()

		const selected = selectedFile === slug

		useEffect(() => {
			console.log(slug)
		})

		let iconClone = null

		if (icon) {
			iconClone = React.cloneElement(icon!, {
				className: 'treeview-icons',
			})
		}

		return (
			<li
				ref={ref}
				onClick={() => setSelectedFile!(slug)}
				tabIndex={0}
				className={clsx('treeview-file', {
					'treeview-file-active': active,
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
