import clx from 'clsx'
import { useHeadings, useHeadsObserver } from '../../../helpers/useHeadings'
import styles from './Rightbar.module.css'

type Props = {
	page: {
		frontmatter: {
			[key: string]: any
		}
		code: any
	}
}

export const TOC = ({ page }: Props) => {
	const headings = useHeadings(page)

	const { activeId } = useHeadsObserver()

	return (
		<div className={styles.action_toc}>
			{headings.map((heading) => {
				return (
					<a
						className={clx(styles.action_toc_item, [
							'#' + activeId === heading.id && styles.action_toc_item_active,
						])}
						key={heading.id}
						href={heading.id}
					>
						{Array.from(Array(heading.level - 1)).map((_e, i) => {
							return <span key={i} className={styles.action_toc_indent} />
						})}
						<span className={styles.action_toc_heading}>{heading.text}</span>
					</a>
				)
			})}
		</div>
	)
}
