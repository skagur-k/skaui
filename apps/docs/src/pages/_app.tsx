import '../styles/globals.css'
import { ThemeProvider, ToastProvider } from '@skaui/core'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts'
const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<ThemeProvider>
				<ToastProvider>
					<Component {...pageProps} />
				</ToastProvider>
			</ThemeProvider>
		</Layout>
	)
}

export default MyApp
