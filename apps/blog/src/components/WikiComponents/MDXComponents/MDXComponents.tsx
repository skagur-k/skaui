import { InlineCode, Note, UL, LI, Link, CodeBlock, Snippet } from '@skaui/core'
import clx from 'clsx'
import styles from './MDXComponents.module.css'

interface ComponentProps {
	[key: string]: any
}

function textToSlug(str: string) {
	return str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

const h1 = (props: ComponentProps) => {
	console.log(textToSlug(props.children))

	return (
		<h1
			{...props}
			data-id={textToSlug(props.children)}
			className={clx(styles.h1, styles.heading)}
		></h1>
	)
}

const h2 = (props: ComponentProps) => {
	return (
		<h2
			{...props}
			data-id={textToSlug(props.children)}
			className={clx(styles.h2, styles.heading)}
		></h2>
	)
}

const h3 = (props: ComponentProps) => {
	return (
		<h3
			{...props}
			data-id={textToSlug(props.children)}
			className={clx(styles.h3, styles.heading)}
		></h3>
	)
}

const h4 = (props: ComponentProps) => {
	return (
		<h4
			{...props}
			data-id={textToSlug(props.children)}
			className={clx(styles.h4, styles.heading)}
		></h4>
	)
}

const p = (props: ComponentProps) => {
	return <p {...props} className={clx(styles.p, styles.heading)}></p>
}

const blockquote = (props: ComponentProps) => {
	return <Note label={false} {...props} className='my-4' />
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
}

export default MDXComponents
