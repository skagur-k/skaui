export interface IconProps extends React.SVGAttributes<SVGElement> {
	size?: number
	className?: string
}

export const IconDefaultProps: IconProps = {
	size: 16,
}
