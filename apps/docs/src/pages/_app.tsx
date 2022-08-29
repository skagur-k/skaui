import { ThemeProvider } from '@skaui/core'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts'
import '@skaui/core/src/styles/global.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
