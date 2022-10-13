export type IWikiPages = IWikiPage[]

export interface IWikiPage {
	frontmatter: { [key: string]: any }
	slug: string
}
