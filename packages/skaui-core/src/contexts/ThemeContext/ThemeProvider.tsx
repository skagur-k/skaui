import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../hooks'
import { isBrowser } from '../../utils'
import ThemeContext, { ITheme } from './ThemeContext'
import { OverlayProvider, SSRProvider } from 'react-aria'

const STORAGE_KEY = 'theme'

const ThemeProvider = ({ children }: any) => {
	const prefersDark = useMediaQuery('(prefers-color-schemes: dark')

	const [theme, setTheme] = useState<ITheme>(() => {
		if (isBrowser()) {
			return (window as any).__theme
		}
	})

	const isDarkMode = theme === 'system' ? prefersDark : theme === 'dark'

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	useEffect(() => {
		setTheme(theme)
		localStorage.setItem(STORAGE_KEY, theme)
	}, [theme])

	// use useEffect

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<SSRProvider>
				<OverlayProvider>{children}</OverlayProvider>
			</SSRProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
