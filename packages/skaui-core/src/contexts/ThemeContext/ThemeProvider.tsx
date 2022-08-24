import { useEffect, useState } from 'react'
import { OverlayProvider, SSRProvider } from 'react-aria'
import { ToastProvider } from '..'
import { useMediaQuery } from '../../hooks'
import { isBrowser } from '../../utils'
import { ITheme, ThemeContext } from './ThemeContext'

const STORAGE_KEY = 'mode'

export const ThemeProvider = ({ children }: any) => {
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark')
	const systemMode = prefersDark ? 'dark' : 'light'

	const [mode, setMode] = useState<ITheme>(() => {
		if (isBrowser()) {
			return localStorage.getItem(STORAGE_KEY) || 'light'
		}

		return 'light'
	})

	const isDarkMode = mode === 'system' ? prefersDark : mode === 'dark'

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	const selectTheme = (theme: ITheme) => {
		setMode(theme)
		localStorage.setItem(STORAGE_KEY, theme)
	}

	return (
		<ThemeContext.Provider
			value={{ mode, systemMode, isDarkMode, selectTheme }}
		>
			<SSRProvider>
				<ToastProvider>
					<OverlayProvider>{children}</OverlayProvider>
				</ToastProvider>
			</SSRProvider>
		</ThemeContext.Provider>
	)
}
