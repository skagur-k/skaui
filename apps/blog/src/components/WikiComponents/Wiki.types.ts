export type IWikiPages = IWikiPage[]

interface IWikiPage {
	frontmatter: { [key: string]: any }
	slug: string
}
