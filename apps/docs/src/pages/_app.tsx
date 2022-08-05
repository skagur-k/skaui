import '../styles/globals.css'
// import '@skagur-k/ska-ui/dist/output.css'
import { ThemeProvider } from '@skaui/core'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts'
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
