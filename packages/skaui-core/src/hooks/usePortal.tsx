import React, { useLayoutEffect } from 'react'
import ReactDOM, { createPortal } from 'react-dom'

interface PortalProps {
	children: React.ReactElement
	parent?: any
}

function createWrapperAndAppendToBody(wrapperId: string) {
	if (document.getElementById(wrapperId))
		return document.getElementById(wrapperId) as HTMLDivElement
	else {
		const wrapperElement = document.createElement('div')
		wrapperElement.setAttribute('id', wrapperId)
		document.body.appendChild(wrapperElement)
		return wrapperElement
	}
}

const usePortal =
	(wrapperId: string) =>
	({ children }: PortalProps) => {
		const [wrapperElement, setWrapperElement] =
			React.useState<HTMLDivElement | null>(null)

		React.useLayoutEffect(() => {
			setWrapperElement(createWrapperAndAppendToBody(wrapperId))
			return () => {
				createWrapperAndAppendToBody(wrapperId).remove()
			}
		}, [wrapperId])

		return wrapperElement ? createPortal(children, wrapperElement) : null
	}

export default usePortal
