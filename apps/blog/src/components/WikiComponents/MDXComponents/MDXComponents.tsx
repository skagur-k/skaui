import { InlineCode, LI, Link, Note, Snippet, UL, useToast } from '@skaui/core'
import clx from 'clsx'
import Image from 'next/image'
import { useHover } from 'react-aria'
import { FiLink } from 'react-icons/fi'
import getCurrentUrl from '../../../helpers/getCurrentUrl'
import textToSlug from '../../../helpers/textToSlug'
import styles from './MDXComponents.module.css'

interface ComponentProps {
	[key: string]: any
}

const Heading = (props: ComponentProps) => {
	const { as: Comp } = props
	const { hoverProps, isHovered } = useHover(props)
	const toast = useToast()

	const level = Comp.charAt(1)

	function handleClickAnchor(title: string) {
		const link = getCurrentUrl() + '#' + textToSlug(props.children)
		toast(`Link to [ ${title} ] was copied to clipboard.`, { title: `Wiki` })
		navigator.clipboard.writeText(link)
	}

	return (
		<Comp
			{...props}
			{...hoverProps}
			data-toc={level}
			className={clx(styles[Comp], styles.heading)}
		>
			<FiLink
				onClick={() => handleClickAnchor(props.children)}
				className={clx(styles.anchor, [isHovered && styles.anchor_hover])}
			/>
			<span
				onClick={() => (location.href = `#${textToSlug(props.children)}`)}
				className={styles.heading_content}
			>
				{props.children}
			</span>
		</Comp>
	)
}

const h1 = (props: ComponentProps) => {
	return <Heading as='h1' {...props} />
}

const h2 = (props: ComponentProps) => {
	return <Heading as='h2' {...props} />
}

const h3 = (props: ComponentProps) => {
	return <Heading as='h3' {...props} />
}

const h4 = (props: ComponentProps) => {
	return <Heading as='h4' {...props} />
}

const p = (props: ComponentProps) => {
	return <p {...props} className={clx(styles.p)}></p>
}

const blockquote = (props: ComponentProps) => {
	return <Note label={false} {...props} className='my-4 mx-2' />
}

const code = (props: ComponentProps) => {
	return <InlineCode {...props} />
}

const ul = (props: ComponentProps) => {
	return <UL {...props} />
}

const li = (props: ComponentProps) => {
	return <LI {...props} />
}

const a = (props: ComponentProps) => {
	return <Link {...props} />
}

const pre = (props: ComponentProps) => {
	return <Snippet {...props} text={['hello']} />
}

const img = (props: ComponentProps) => {
	return <Image alt={props.alt || 'image'} src={props.src} />
}

const MDXComponents = {
	a,
	h1,
	h2,
	h3,
	h4,
	blockquote,
	code,
	Note,
	p,
	ul,
	li,
	pre,
	img,
}

export default MDXComponents
