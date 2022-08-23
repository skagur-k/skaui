import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../hooks'
import { isBrowser } from '../../utils'
import ThemeContext, { ITheme } from './ThemeContext'
import { OverlayProvider, SSRProvider } from 'react-aria'
import { ToastProvider } from '..'

const STORAGE_KEY = 'theme'

const ThemeProvider = ({ children }: any) => {
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark')

	const [theme, setTheme] = useState<ITheme>(() => {
		if (isBrowser()) {
			return prefersDark ? 'dark' : 'light'
		}
		return 'system'
	})

	const isDarkMode = true

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	const selectTheme = (theme: ITheme) => {
		console.log('SELECTING THEME')
		setTheme(theme)
		localStorage.setItem(STORAGE_KEY, theme)
	}

	return (
		<SSRProvider>
			<ThemeContext.Provider value={{ theme, isDarkMode, selectTheme }}>
				<ToastProvider>
					<OverlayProvider>{children}</OverlayProvider>
				</ToastProvider>
			</ThemeContext.Provider>
		</SSRProvider>
	)
}

export { ThemeProvider }
