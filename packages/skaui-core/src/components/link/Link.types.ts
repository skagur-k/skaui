import { AriaLinkOptions } from 'react-aria'

export interface LinkProps extends React.PropsWithChildren<AriaLinkOptions> {
	className?: string
	href?: string
}
