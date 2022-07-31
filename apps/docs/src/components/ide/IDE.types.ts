import { Language, PrismTheme } from 'prism-react-renderer'
import React from 'react'

export interface IDEProps {
	heading?: string
	children?: React.ReactNode
	scope?: { [key: string]: any }
	code?: string
	noInline?: boolean
	transformCode?: (code: string) => string
	language?: Language
	disabled?: boolean
	theme?: PrismTheme
}
