import { AriaRadioProps } from '@react-types/radio'
import React from 'react'

interface SharedProps {
	children?: React.ReactNode
	className?: string
}

export interface RadioProps extends SharedProps, AriaRadioProps {}

export interface RadioGroupProps extends SharedProps {
	label?: string
	disabled?: boolean
}
