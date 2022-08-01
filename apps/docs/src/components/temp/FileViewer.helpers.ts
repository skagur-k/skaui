import { Item, Items } from './FileViewer.types'

export function getFile(files: any, testFn: (item: Item) => boolean) {
	let items = [...files]

	while (items.length) {
		let item = items.shift()
		if (item!.type === 'file') {
			const matches = testFn(item!)

			if (matches) {
				return item
			}
		}
		if (item!.type === 'directory') {
			items.push(...item!.contents)
		}
	}
}

export function openFile(
	items?: Items,
	fileSlugToOpen?: string,
	slugPrefix?: string
) {
	items?.forEach((item) => {
		const slug = `${slugPrefix}/${item.name}`

		if (item.type === 'file') {
			item.isSelected = fileSlugToOpen === slug
		} else {
			openFile(item.contents, fileSlugToOpen, slug)
		}
	})
}
