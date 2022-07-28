import { KeyboardEventHandler } from 'react'
import { useFocusManager } from 'react-aria'

export const useFocusKeyDown =
	(): React.KeyboardEventHandler<HTMLLIElement> => {
		const focusManager = useFocusManager()
		const onKeyDown = (e: any) => {
			switch (e.key) {
				case 'ArrowUp':
					focusManager.focusPrevious({ wrap: true })
					break
				case 'ArrowDown':
					focusManager.focusNext({ wrap: true })
					break
			}
		}
		return onKeyDown
	}
