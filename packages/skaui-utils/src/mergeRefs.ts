import { ForwardedRef } from 'react'

export function mergeRefs<T = any>(
	...refs: ForwardedRef<T>[]
): ForwardedRef<T> {
	return (value) => {
		for (let ref of refs) {
			if (typeof ref === 'function') {
				ref(value)
			} else if (ref != null) {
				ref.current = value
			}
		}
	}
}
