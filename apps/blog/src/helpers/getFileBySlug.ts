import fs from 'fs'

const getFileBySlug = (slug: string) => {
	return fs.readFileSync(slug)
}

export default getFileBySlug
