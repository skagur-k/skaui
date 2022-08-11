import clsx from 'clsx'
import { useFocusRing } from 'react-aria'
import { useTextAreaClass } from './styles'
import { TextAreaProps } from './TextArea.types'

const TextArea = (props: TextAreaProps) => {
	const {
		placeholder,
		defaultText,
		disabled = false,
		rows = 5,
		error = false,
		className,
		...rest
	} = props

	const { focusProps, isFocused } = useFocusRing()
	const textAreaClasses = useTextAreaClass({
		disabled,
		error,
		isFocused,
	})
	return (
		<textarea
			className={clsx(textAreaClasses, className)}
			placeholder={placeholder}
			defaultValue={defaultText}
			disabled={disabled}
			rows={rows}
			{...rest}
			{...focusProps}
		/>
	)
}

export default TextArea
