import React from 'react'
import { createPortal } from 'react-dom'

interface PortalProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactElement
	parent?: any
	className?: string
}

function createWrapperAndAppendToBody(wrapperId: string, className?: string) {
	if (document.getElementById(wrapperId))
		return document.getElementById(wrapperId) as HTMLDivElement
	else {
		const wrapperElement = document.createElement('div')
		wrapperElement.setAttribute('id', wrapperId)
		const classList: Array<string> = []

		if (className) {
			className.split(' ').map((c) => classList.push(c))
			wrapperElement.classList.add(...classList)
		}

		document.body.appendChild(wrapperElement)
		return wrapperElement
	}
}

const usePortal =
	(wrapperId: string) =>
	({ children, className }: PortalProps) => {
		const [wrapperElement, setWrapperElement] =
			React.useState<HTMLDivElement | null>(null)

		// This snippet only runs on the client; hence the useLayoutEffect() !!ignore warning
		React.useEffect(() => {
			setWrapperElement(createWrapperAndAppendToBody(wrapperId, className))
			return () => {
				createWrapperAndAppendToBody(wrapperId).remove()
			}
		}, [])

		return wrapperElement ? createPortal(children, wrapperElement) : null
	}

export default usePortal
