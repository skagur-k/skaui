import { LinkProps } from 'next/link'

export interface NavLinkProps extends LinkProps {
	href: string
	children:
		| string
		| React.ReactElement
		| ((isActive: boolean) => React.ReactElement)
}
