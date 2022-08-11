import { AriaRadioProps } from '@react-types/radio'
import React from 'react'

interface SharedProps {
	children?: React.ReactNode
	className?: string
}

export interface RadioProps extends SharedProps, AriaRadioProps {
	caption?: string
	disabled?: boolean
	rounded?: boolean
}

export interface RadioGroupProps extends SharedProps {
	label?: string
	row?: boolean
	disabled?: boolean
	rounded?: boolean
	description?: string
}
