import { useToast } from '@skaui/core'
import clx from 'clsx'
import { cloneElement , ReactElement } from 'react'

interface ClipboardProps {
	text: string
	className?: string
	toastMessage: string
	toastTitle?: string
	children: ReactElement
}

const Clipboard = ({
	text,
	toastTitle,
	toastMessage,
	className,
	children,
}: ClipboardProps) => {
	const toast = useToast()

	function handleClick() {
		toast(toastMessage, { title: toastTitle })
		navigator.clipboard.writeText(text)
	}

	const Clone = () =>
		cloneElement(children, {
			onClick: handleClick,
			className: clx(children.props.children, className),
		})

	return <Clone />
}

export default Clipboard
