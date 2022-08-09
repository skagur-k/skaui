import clsx from 'clsx'
import { DescriptionProps } from './Description.types'
import styles from './Description.module.css'

const Description = ({
	title,
	tooltip,
	children,
	className,
	...rest
}: DescriptionProps) => {
	return (
		<div {...rest} className={clsx(styles.description, className)}>
			<div className={styles.description_wrapper}>
				{<div className={styles.description_title}>{title}</div>}
			</div>
			<div className={styles.description_content}>{children}</div>
		</div>
	)
}

export default Description
