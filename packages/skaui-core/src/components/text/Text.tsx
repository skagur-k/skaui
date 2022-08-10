import clsx from 'clsx'
import { useTextClass } from './styles'
import { CodeBlockProps, InlineCodeProps, TextProps } from './Text.types'
import styles from './Text.module.css'
const Text = ({
	size = 'base',
	weight,
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
	})

	return (
		<Comp
			{...rest}
			className={clsx(textClasses, className)}
			style={{
				WebkitLineClamp: typeof truncate === 'number' ? truncate : 'none',
			}}
		>
			{children}
		</Comp>
	)
}

export const InlineCode = (props: InlineCodeProps) => {
	const { children, className, ...rest } = props

	const inlineCodeClasses = clsx(styles.text_inlinecode, className)
	return (
		<code {...rest} className={inlineCodeClasses}>
			{children}
		</code>
	)
}

export const CodeBlock = (props: CodeBlockProps) => {
	const { children, className, ...rest } = props

	const codeBlockClasses = clsx('block whitespace-pre-wrap', className)
	return (
		<pre {...rest} className={codeBlockClasses}>
			{children}
		</pre>
	)
}

export default Text
