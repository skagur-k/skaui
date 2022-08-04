import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const useTheme = () => {
	const themeContext = useContext(ThemeContext)

	if (!themeContext) {
		throw Error('useTheme must be used inside Theme Provider.')
	}
	return themeContext
}

export default useTheme
