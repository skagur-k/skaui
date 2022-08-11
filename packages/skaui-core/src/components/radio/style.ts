import clsx from 'clsx'
import { RadioGroupProps } from './Radio.types'

interface RadioGroupClassProps extends RadioGroupProps {}

function useRadioGroupClass(props: RadioGroupClassProps) {
	const { row } = props

	const classes = clsx('radio-group', [row && 'radio-group-row'])

	return classes
}

export { useRadioGroupClass }
