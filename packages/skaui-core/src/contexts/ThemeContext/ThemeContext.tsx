import { createContext, useContext } from 'react'

export type ITheme = 'light' | 'dark' | 'system'

export interface IThemeContext {
	theme: ITheme
	selectTheme: (theme: ITheme) => void
	isDarkMode: null | boolean
}

const ThemeContext = createContext<IThemeContext>({
	theme: 'system',
	isDarkMode: null,
	selectTheme: () => {},
})

export const useTheme = () => {
	const themeContext = useContext(ThemeContext)

	if (!themeContext) {
		throw Error('useTheme must be used inside Theme Provider.')
	}
	return themeContext
}

ThemeContext.displayName = 'SKA UI - Theme Context'
export default ThemeContext
