import { LiveProviderProps } from 'react-live'
import { Language, PrismTheme } from 'prism-react-renderer'

export interface IDEProps {
	heading?: string
	scope?: { [key: string]: any }
	code?: string
	noInline?: boolean
	transformCode?: (code: string) => string
	language?: Language
	disabled?: boolean
	theme?: PrismTheme
}
