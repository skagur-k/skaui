import Link, { LinkProps as _LinkProps } from 'next/link'

interface LinkProps extends _LinkProps {
	className?: string
	children?: React.ReactNode
}

export const AnyLink = (props: LinkProps) => {
	const { href, children, className } = props
	const isInternalLink = href && href.toString().startsWith('/')
	const isAnchorLink = href && href.toString().startsWith('#')

	if (isInternalLink || isAnchorLink) {
		return (
			<Link {...props}>
				<a className={className}>{children}</a>
			</Link>
		)
	}

	return (
		<a
			target='_blank'
			rel='noopener noreferrer'
			href={href.toString() || undefined}
			className={className}
		>
			{children}
		</a>
	)
}
