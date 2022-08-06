import React from 'react'
import { useButton } from 'react-aria'
import { IButtonProps } from './Button.types'

const Button = (props: IButtonProps) => {
  let ref = React.useRef()
  let {buttonProps} = useButton(props, ref)


	return <button></button>
}

export default Button
