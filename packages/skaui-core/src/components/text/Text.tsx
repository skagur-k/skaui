import clsx from 'clsx'
import { useTextClass } from './styles'
import styles from './Text.module.css'
import {
	CodeBlockProps,
	InlineCodeProps,
	LIProps,
	ListProps,
	TextProps,
} from './Text.types'

export const Text = ({
	size = 'base',
	weight,
	mono = false,
	transform,
	truncate,
	align,
	as: Comp = 'p',
	children,
	className,
	...rest
}: TextProps) => {
	const textClasses = useTextClass({
		size,
		weight,
		transform,
		truncate,
		align,
		mono,
	})

	return (
		<Comp
			className={clsx(textClasses, className)}
			style={{
				WebkitLineClamp: typeof truncate === 'number' ? truncate : undefined,
			}}
			{...rest}
		>
			{children}
		</Comp>
	)
}

Text.displayName = 'SKA UI - Text'

export const InlineCode = (props: InlineCodeProps) => {
	const { children, className, ...rest } = props

	const inlineCodeClasses = clsx(styles.text_inlinecode, className)
	return (
		<code {...rest} className={inlineCodeClasses}>
			{children}
		</code>
	)
}

InlineCode.displayName = 'SKA UI - InlineCode'

export const CodeBlock = (props: CodeBlockProps) => {
	const { children, className, ...rest } = props

	const codeBlockClasses = clsx(styles.text_codeblock, className)
	return (
		<pre {...rest} className={codeBlockClasses}>
			{children}
		</pre>
	)
}

CodeBlock.displayName = 'SKA UI - CodeBlock'

export const UL = (props: ListProps) => {
	const { children, className, ...rest } = props

	const ulClasses = clsx(styles.ul, className)

	return (
		<ul {...rest} className={ulClasses}>
			{children}
		</ul>
	)
}

UL.displayName = 'SKA UI - UL'

export const OL = (props: ListProps) => {
	const { children, className, ...rest } = props

	const olClasses = clsx(styles.ol, className)

	return (
		<ol {...rest} className={olClasses}>
			{children}
		</ol>
	)
}

OL.displayName = 'SKA UI - OL'

export const LI = (props: LIProps) => {
	const { children, className, ...rest } = props

	const liClasses = clsx(styles.li, className)

	return (
		<li {...rest} className={liClasses}>
			{children}
		</li>
	)
}

LI.displayName = 'SKA UI - LI'
