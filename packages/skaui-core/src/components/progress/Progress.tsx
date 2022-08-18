import clsx from 'clsx'
import React from 'react'
import { useProgressBar } from 'react-aria'
import styles from './Progress.module.css'
import { ProgressProps } from './Progress.types'

const Progress = (props: ProgressProps) => {
	const {
		label,
		showValueLabel = !!label,
		value,
		minValue = 0,
		maxValue = 100,
		width = '300px',
		type,
		colors,
		height = 4,
		isIndeterminate = false,
	} = props

	const { progressBarProps, labelProps } = useProgressBar({
		'aria-label': `${isIndeterminate ? 'Loading...' : label}`,
		...props,
	})

	let percentage = (value! - minValue) / (maxValue - minValue)
	let barWidth = `${Math.round(percentage * 100)}%`

	const types = {
		success: styles.progress_success,
		warning: styles.progress_warning,
		error: styles.progress_error,
		secondary: styles.progress_secondary,
	}

	function getColor(value: number) {
		let color: string = ''
		if (colors) {
			Object.keys(colors).map((key) => {
				if (value > Number(key)) color = colors[Number(key)]
			})
		}
		return color
	}

	const barColor = React.useMemo(() => getColor(value!), [value])

	return (
		<div
			{...progressBarProps}
			className={clsx(styles.progress, [type && types[type]])}
			style={{ width: width }}
		>
			<div className={styles.progress_labels}>
				{label && (
					<span {...labelProps} className={styles.progress_labels_label}>
						{label}
					</span>
				)}
				{showValueLabel && (
					<span className={styles.progress_labels_value}>
						{isIndeterminate ? '' : progressBarProps['aria-valuetext']}
					</span>
				)}
			</div>
			<div className={styles.progress_bar} style={{ height }}>
				<div className={styles.progress_bar_track}>
					{isIndeterminate ? (
						<div
							className={clsx(styles.progress_bar_indeterminate)}
							style={{ background: barColor }}
						/>
					) : (
						<div
							className={clsx(styles.progress_bar_fill)}
							style={{ width: barWidth, background: barColor }}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Progress
