import { IDirectory, IFile } from './FileViewer.types'

export function getFile(
	files: Array<IFile | IDirectory>,
	testFn: Function
): IFile {
	let items = [...files]

	while (items.length) {
		let item = items.shift()
		// console.log(item?.name)

		if (item && item.type === 'file') {
			const matches = testFn(item)
			if (matches) {
				console.log(matches.name)
				return item as IFile
			}
		}

		if (item && item.type === 'directory') {
			items.push(...(item.contents as IFile[]))
		}
	}

	return {
		name: 'No files present',
		type: 'file',
		contents: 'No files were provided',
	}
}
