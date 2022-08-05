import React from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
	children: React.ReactElement
	parent?: any
	className: string
}

const Portal = ({ children, parent, className }: PortalProps) => {
	const [element, setElement] = React.useState<HTMLElement | null>(null)

	React.useEffect(() => {
		setElement(document.createElement('div'))
		const target = parent && parent.appendChild ? parent : document.body

		const classList = ['portal']
		console.log()

		if (className) {
			className.split(' ').forEach((item) => {
				classList.push(item)
			})
		}
		console.log(element)

		classList.forEach((item) => element?.classList.add(item))

		target.appendChild(element)

		return () => {
			target.removeChild(element)
		}
	}, [])

	if (!element) {
		return <></>
	}

	return ReactDOM.createPortal(children, element)
}

export default Portal
