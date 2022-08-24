import { createContext, useContext } from 'react'

export type ITheme = 'light' | 'dark' | 'system' | string

export interface IThemeContext {
	selectTheme: (theme: ITheme) => void
	systemMode: 'light' | 'dark'
	isDarkMode: null | boolean
	mode: ITheme
}

export const ThemeContext = createContext<IThemeContext>({
	selectTheme: () => {},
	systemMode: 'light',
	isDarkMode: null,
	mode: 'system',
})

ThemeContext.displayName = 'SKA UI - Theme Context'

export const useTheme = () => {
	const themeContext = useContext(ThemeContext)

	if (!themeContext) {
		throw Error('useTheme must be used inside Theme Provider.')
	}
	return themeContext
}
