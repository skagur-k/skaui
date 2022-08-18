import clsx from 'clsx'
import React from 'react'
import { ChevronDownIcon } from '../../icons'
import { CollapsibleProps } from './Collapsible.types'
import styles from './Collapsible.module.css'

const Collapsible = (props: CollapsibleProps): JSX.Element => {
	const {
		className,
		children,
		open: _open = false,
		title,
		onToggle,
		transition,
		...rest
	} = props
	const [open, setOpen] = React.useState<boolean>(_open)
	const [height, setHeight] = React.useState<number | undefined>(
		open ? undefined : 0
	)
	function handleToggle() {
		if (onToggle) {
			onToggle(!open)
		}
		setOpen(!open)
	}

	const ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (!height || !open || !ref.current) return undefined
		const resizeObserver = new ResizeObserver((el) => {
			setHeight(el[0].contentRect.height + 32)
		})

		resizeObserver.observe(ref.current)
		return () => {
			resizeObserver.disconnect()
		}
	}, [height, open])

	React.useEffect(() => {
		if (open) {
			setHeight(ref.current?.getBoundingClientRect().height!)
		} else setHeight(0)
	}, [open])

	return (
		<div {...rest} className={clsx(styles.collapsible, className)}>
			<div onClick={handleToggle} className={styles.collapsible_title}>
				<span>{title}</span>
				<span>
					<ChevronDownIcon
						className={clsx(styles.collapsible_chevron, [
							open && styles.collapsible_chevron_open,
						])}
					/>
				</span>
			</div>
			<div
				className={clsx(styles.collapsible_content_wrapper)}
				style={{ height }}
			>
				<div ref={ref} className={styles.collapsible_content}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Collapsible
