import { sync } from 'glob'

export const getSlug = (dir: string) => {
	const files = sync(`${dir}/**/*.mdx`)
	return files
}
