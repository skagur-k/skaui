import clsx from 'clsx'
import { StatusDotProps } from './StatusDot.types'
import styles from './StatusDot.module.css'

const StatusDot = (props: StatusDotProps): JSX.Element => {
	const { type, children } = props

	const types = {
		positive: styles.statusdot_positive,
		negative: styles.statusdot_negative,
		info: styles.statusdot_info,
		notice: styles.statusdot_notice,
		neutral: styles.statusdot_neutral,
	}

	return (
		<div className={clsx(styles.statusdot, [types[type]])}>
			<div className={styles.statusdot_dot} />
			{children && <div className={styles.statusdot_label}>{children}</div>}
		</div>
	)
}

export default StatusDot
