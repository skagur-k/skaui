import React, { ForwardedRef } from 'react'
import type { Dict } from './utils.types'

export function getValidChildren(children: React.ReactNode) {
	return React.Children.toArray(children).filter((child) =>
		React.isValidElement(child)
	) as React.ReactElement[]
}

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

export const isBrowser = () => typeof window !== 'undefined'

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result: Dict = {}

	Object.keys(object).forEach((key) => {
		if (keys.includes(key as K)) return
		result[key] = object[key]
	})

	return result as Omit<T, K>
}

export const clamp = (
	value: number,
	min: number = -Infinity,
	max: number = Infinity
): number => {
	let newValue = Math.min(Math.max(value, min), max)
	return newValue
}
