import { useEffect, useRef, useState } from 'react'
import textToSlug from './textToSlug'

export interface IHeading {
	id: string
	text?: string | null
	level: number
}

export interface IPage {
	frontmatter: {
		[key: string]: any
	}
	code: any
}

export const useHeadings = (page: IPage) => {
	const [headings, setHeadings] = useState<IHeading[]>([])

	useEffect(() => {
		const headingArray = Array.from(
			document.querySelectorAll('[data-toc]')
		).map((node) => {
			const slug = textToSlug(node.textContent || '')

			node.setAttribute('id', slug)
			return {
				id: '#' + slug,
				text: node.textContent,
				level: Number(node.getAttribute('data-toc')),
			}
		})

		setHeadings(headingArray)
	}, [page])

	return headings
}

export const useHeadsObserver = () => {
	const observer = useRef<IntersectionObserver>()
	const [activeId, setActiveId] = useState<string>('')

	useEffect(() => {
		const handleObserver = (entries: IntersectionObserverEntry[]) => {
			console.log(entries)

			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio >= 1) {
					setActiveId(entry.target.id)
				}
			})
		}

		// Intersection Observer Options
		const options = {
			root: null,
			rootMargin: '0% 0% 0% 0%',
			threshold: [1],
		}

		observer.current = new IntersectionObserver(handleObserver, options)
		const wikiContent = document.querySelector('.wiki_content')

		const elements = wikiContent?.querySelectorAll('[data-toc]')
		if (elements?.length) {
			elements?.forEach((e) => observer.current?.observe(e))
		}

		return () => observer.current?.disconnect()
	}, [])

	return { activeId }
}
