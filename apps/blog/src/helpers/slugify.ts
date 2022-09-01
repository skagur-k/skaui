const slugify = (str: string) =>
	str
		.replace('.mdx', '')
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')
export default slugify
