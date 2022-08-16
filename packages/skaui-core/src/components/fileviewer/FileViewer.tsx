import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import {
	ChevronDownIcon,
	FileIcon,
	FolderIcon,
	SettingsIcon,
} from '../../icons'
import ChevronRightIcon from '../../icons/ChevronRightIcon'
import XIcon from '../../icons/XIcon'
import { Checkbox, CheckboxGroup } from '../checkbox'
import { Clipboard } from '../clipboard'
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

// TODO: Redo treeview styles

export const FileViewer: React.ComponentType<FileViewerProps> = React.memo(
	({ children, title, nocontent = false }: FileViewerProps) => {
		const [selectedFile, setSelectedFile] = React.useState<IFile>({
			slug: undefined,
			content: undefined,
			language: undefined,
			highlight: undefined,
		})

		const [optionOpened, setOptionOpened] = React.useState(false)
		const [showContent, setShowContent] = React.useState(!nocontent)
		const [lineNumbers, setLineNumbers] = React.useState(false)

		function handleOptionToggle() {
			setOptionOpened(!optionOpened)
		}

		function handleUnselectFile() {
			setSelectedFile({
				slug: undefined,
				content: undefined,
				language: undefined,
				highlight: undefined,
			})
		}

		function handleLineNumbersToggle() {
			setLineNumbers(!lineNumbers)
		}

		function handleShowContentToggle() {
			setShowContent(!showContent)
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
						<div
							className={clsx(styles.filetreeview, [
								!showContent && styles.filetreeviewOnly,
							])}
						>
							{title && <div className={styles.filetreetitle}>{title}</div>}
							{children}
							<div className={styles.codeSetting}>
								<SettingsIcon
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
											className={clsx(styles.fileviewoptions)}
										>
											<CheckboxGroup size='sm' row className='gap-4'>
												<Checkbox
													isSelected={showContent}
													onChange={handleShowContentToggle}
												>
													Show Content
												</Checkbox>
												<Checkbox
													isSelected={lineNumbers}
													onChange={handleLineNumbersToggle}
												>
													Line Numbers
												</Checkbox>
											</CheckboxGroup>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
						{showContent && (
							<FileContent lineNumbers={lineNumbers} file={selectedFile} />
						)}
						{selectedFile.content && showContent && (
							<>
								<Clipboard
									size={'sm'}
									copyText={selectedFile.content}
									className={styles.clipboard}
								/>
								<XIcon onClick={handleUnselectFile} className={styles.xicon} />
							</>
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
					className={clsx(
						styles.treeview_folder,
						(isExpanded || open) && styles.treeview_folder_open
					)}
				>
					<a
						className={clsx(styles.treeview_folder_label)}
						title={name}
						onClick={() => setIsExpanded((open) => !open)}
					>
						{Array.from(Array(depth)).map((_e, i) => {
							return (
								<span
									key={i}
									className={clsx(
										styles.treeview_indent,
										styles.treeview_indent_folder
									)}
								/>
							)
						})}
						<div className={styles.treeview_folder_label}>
							<span
								className={clsx(styles.treeview_folder_label_status, [
									open && styles.treeview_folder_label_status_disabled,
								])}
							>
								{open || isExpanded ? (
									<ChevronDownIcon className={styles.treeview_icons} />
								) : (
									<ChevronRightIcon className={styles.treeview_icons} />
								)}
							</span>
							<span className={styles.treeview_folder_label_icon}>
								<FolderIcon className={styles.treeview_icons} />
							</span>
							<span className={styles.treeview_folder_label_name}>{name}</span>
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
									className={styles.treeview_folder_children}
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
	({
		name,
		active,
		slug = name,
		icon,
		content,
		language = 'jsx',
		highlight,
	}) => {
		const depth = useFileTree()
		const ref = React.useRef<HTMLLIElement>(null)
		const { selectedFile, setSelectedFile } = useFileViewer()

		const selected = selectedFile.slug === slug

		let iconClone = null

		if (icon) {
			iconClone = React.cloneElement(icon!, {
				className: styles.treeview_icon,
			})
		}

		function handleSelect() {
			const file = {
				slug: slug,
				content: content,
				language: language,
				highlight: highlight,
			}
			setSelectedFile(file)
		}

		return (
			<li
				ref={ref}
				onClick={handleSelect}
				tabIndex={0}
				className={clsx(styles.treeview_file, [
					active && styles.treeview_file_active,
					selected && styles.treeview_file_selected,
				])}
			>
				<a title={name}>
					{Array.from(Array(depth)).map((_e, i) => {
						return (
							<span
								className={clsx(
									styles.treeview_indent,
									styles.treeview_indent_file
								)}
								key={i}
							/>
						)
					})}
				</a>
				<div className={clsx(styles.treeview_file_label)}>
					<span className={styles.treeview_file_label_icon}>
						{icon ? iconClone : <FileIcon className={styles.treeview_icons} />}
					</span>
					<span className={styles.treeview_file_label_name}>{name}</span>
				</div>
			</li>
		)
	}
)

File.displayName = 'SKA UI - TreeView/File'

export default FileViewer
