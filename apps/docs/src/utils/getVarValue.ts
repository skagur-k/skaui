import { isBrowser } from '@skaui/core/src/utils'

export default function getPropertyValue(value: string) {
	if (isBrowser())
		return getComputedStyle(document.documentElement).getPropertyValue(value)
}
