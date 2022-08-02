import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import {
	AiOutlineFile,
	AiOutlineMinusSquare,
	AiOutlinePlusSquare,
} from 'react-icons/ai'
import { BsFolder } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import Clipboard from '../clipboard/Clipboard'
import FileContent from './FileContent'
import styles from './FileViewer.module.css'
import {
	FileProps,
	FileViewerProps,
	FolderProps,
	IFile,
} from './FileViewer.types'
import {
	FileContextProvider,
	FileViewerContextProvider,
	useFileTree,
	useFileViewer,
} from './FileViewerContext'

export const FileViewer: React.ComponentType<FileViewerProps> = React.memo(
	({ children, title }: FileViewerProps) => {
		const [selectedFile, setSelectedFile] = React.useState<IFile>({
			slug: undefined,
			content: undefined,
			language: undefined,
		})

		const [optionOpened, setOptionOpened] = React.useState(false)
		const [lineNumbers, setLineNumbers] = React.useState(false)
		React.useEffect(() => {
			console.log('mount')
		}, [])

		function handleOptionToggle() {
			setOptionOpened(!optionOpened)
		}

		function handleLineNumbersToggle() {
			setLineNumbers(!lineNumbers)
		}

		const ctx = {
			selectedFile: selectedFile,
			setSelectedFile: setSelectedFile,
		}

		useEffect(() => {
			setOptionOpened(false)
		}, [selectedFile])

		return (
			<FileViewerContextProvider value={ctx}>
				<AnimatePresence exitBeforeEnter>
					<motion.div
						key={'fileviewer'}
						animate={{ height: 'auto' }}
						className={styles.fileviewer}
					>
						<div className={styles.filetreeview}>
							{title && <div className={styles.filetreetitle}>{title}</div>}
							{children}
							<div className={styles.codeSetting}>
								<FiSettings
									className={clsx(styles.codeSettingIcon)}
									onClick={() => handleOptionToggle()}
								/>
								<AnimatePresence exitBeforeEnter>
									{optionOpened && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{
												duration: 0.1,
												ease: 'linear',
											}}
											className='flex items-center gap-2'
										>
											<input
												type='checkbox'
												id='linenumbers'
												name='linenumbers'
												checked={lineNumbers}
												onChange={handleLineNumbersToggle}
											/>
											<label
												htmlFor='linenumbers'
												className='text-sm text-neutral-600'
											>
												Line numbers
											</label>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
						<FileContent lineNumbers={lineNumbers} file={selectedFile} />
						{selectedFile.content && (
							<Clipboard
								copyText={selectedFile.content}
								className='absolute bottom-6 right-10'
							/>
						)}
					</motion.div>
				</AnimatePresence>
			</FileViewerContextProvider>
		)
	}
)

FileViewer.displayName = 'SKA UI - TreeView'

export const Folder: React.ComponentType<FolderProps> = React.memo(
	({ children, name, open, defaultOpen = false, slug = `${name}` }) => {
		const depth = useFileTree()
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
			sluggedChildren = children.map((child, idx) =>
				React.cloneElement(child, {
					slug: slug + ' / ' + child.props.name,
					key: idx,
				})
			)
		}

		return (
			<FileContextProvider value={1 + depth}>
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
			</FileContextProvider>
		)
	}
)

Folder.displayName = 'SKA UI - TreeView/Folder'

export const File: React.ComponentType<FileProps> = React.memo(
	({ name, active, slug = name, icon, children, language = 'jsx' }) => {
		const depth = useFileTree()
		const ref = React.useRef<HTMLLIElement>(null)
		const { selectedFile, setSelectedFile } = useFileViewer()

		const selected = selectedFile.slug === slug

		let iconClone = null

		if (icon) {
			iconClone = React.cloneElement(icon!, {
				className: 'treeview-icons',
			})
		}

		function handleSelect() {
			const file = {
				slug: slug,
				content: children,
				language: language,
			}
			setSelectedFile(file)
		}

		return (
			<li
				ref={ref}
				onClick={handleSelect}
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

export default FileViewer
