import { useEffect, useState } from 'react'
import ToastContainer from '../../components/toast/ToastContainer'
import { useMediaQuery } from '../../hooks'
import { isBrowser } from '../../utils'
import { ToastProvider } from '../ToastContext'
import ThemeContext, { ITheme } from './ThemeContext'

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
			<ToastProvider>
				{children}
				<ToastContainer />
			</ToastProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
