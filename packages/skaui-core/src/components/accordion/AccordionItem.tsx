import clsx from 'clsx'
import React from 'react'
import { ChevronDownIcon } from '../../icons'
import { AccordionItemProps } from './Accordion.types'
import styles from './Accordion.module.css'

const AccordionItem = (props: AccordionItemProps): JSX.Element => {
	const { className, children, open, title, onToggle, ...rest } = props
	// const [open, setOpen] = React.useState<boolean>(_open!)
	const [height, setHeight] = React.useState<number | undefined>(
		open ? undefined : 0
	)

	const ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (!height || !open || !ref.current) return undefined
		const resizeObserver = new ResizeObserver((el) => {
			setHeight(el[0].contentRect.height + 48)
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
		<div className={clsx(styles.accordion_item, className)} {...rest}>
			<div onClick={onToggle} className={styles.accordion_item_title}>
				<span>{title}</span>
				<span>
					<ChevronDownIcon
						className={clsx(styles.accordion_item_title_chevron, [
							open && styles.accordion_item_title_chevron_open,
						])}
					/>
				</span>
			</div>
			<div
				className={clsx(styles.accordion_item_content_wrapper)}
				style={{ height }}
			>
				<div ref={ref} className={styles.accordion_item_content_content}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default AccordionItem
