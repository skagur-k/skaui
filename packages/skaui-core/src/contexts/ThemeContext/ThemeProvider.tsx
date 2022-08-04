import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../hooks'
import { isBrowser } from '../../utils'
import ThemeContext, { ITheme } from './ThemeContext'

const STORAGE_KEY = 'theme'

export const ThemeProvider = ({ children }: any) => {
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

	function handleSelect(theme: ITheme) {
		setTheme(theme)
		localStorage.setItem(STORAGE_KEY, theme)
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme: handleSelect }}>
			{/* Wrap with toast provider && toast container */}
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
