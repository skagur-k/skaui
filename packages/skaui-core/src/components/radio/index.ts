import React from 'react'
import _Radio from './Radio'
import { RadioProps } from './Radio.types'
import { RadioGroup } from './RadioGroup'

interface Radio extends React.ForwardRefExoticComponent<RadioProps> {
	Group: typeof RadioGroup
}

const Radio = _Radio as Radio

Radio.Group = RadioGroup

export { Radio, RadioGroup }
