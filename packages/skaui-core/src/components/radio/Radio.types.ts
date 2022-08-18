import {
	AriaRadioProps,
	RadioGroupProps as _RadioGroupProps,
} from '@react-types/radio'
import React from 'react'

interface SharedProps {
	children?: React.ReactNode
	className?: string
	size?: RadioSize
	disabled?: boolean
}

export interface RadioProps extends SharedProps, AriaRadioProps {}

export interface RadioGroupProps extends SharedProps, _RadioGroupProps {
	label?: string
	row?: boolean
}

type RadioSize = 'sm' | 'md' | 'lg'
