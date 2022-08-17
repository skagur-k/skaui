import { ThemeProvider } from '@skaui/core'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</Layout>
	)
}

export default MyApp
