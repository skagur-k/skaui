import { createContext } from 'react'

export type ITheme = 'light' | 'dark' | 'system'

export interface IThemeContext {
	theme: ITheme
	setTheme: (theme: ITheme) => void
}

const ThemeContext = createContext<IThemeContext>({
	theme: 'system',
	setTheme: () => {},
})

ThemeContext.displayName = 'SKA UI - Theme Context'
export default ThemeContext
