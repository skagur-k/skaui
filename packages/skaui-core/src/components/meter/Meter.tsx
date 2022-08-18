import clsx from 'clsx'
import React from 'react'
import { useMeter } from 'react-aria'
import styles from './Meter.module.css'
import { MeterProps } from './Meter.types'

const Meter = (props: MeterProps) => {
	const {
		label,
		showValueLabel = !!label,
		value = 50,
		minValue = 0,
		maxValue = 100,
		width = '300px',
		height = 4,
		type,
		colors,
	} = props

	const { meterProps, labelProps } = useMeter(props)

	let percentage = (value - minValue) / (maxValue - minValue)

	let barWidth = `${Math.round(percentage < 0 ? 0 : percentage * 100)}%`

	const types = {
		success: styles.meter_success,
		warning: styles.meter_warning,
		error: styles.meter_error,
		secondary: styles.meter_secondary,
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

	const barColor = React.useMemo(() => getColor(value), [value])

	return (
		<div
			{...meterProps}
			className={clsx(styles.meter, [type && types[type]])}
			style={{ width: width }}
		>
			<div className={styles.meter_labels}>
				{label && (
					<span {...labelProps} className={styles.meter_labels_label}>
						{label}
					</span>
				)}
				{showValueLabel && (
					<span className={styles.meter_labels_value}>
						{meterProps['aria-valuetext']}
					</span>
				)}
			</div>
			<div className={styles.meter_bar} style={{ height }}>
				<div className={styles.meter_bar_track}>
					<div
						className={clsx(styles.meter_bar_fill)}
						style={{ width: barWidth, background: barColor }}
					/>
				</div>
			</div>
		</div>
	)
}

export default Meter
