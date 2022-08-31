import { ThemeProvider } from '@skaui/core'
import '@skaui/core/src/styles/global.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import defaultseo from '../../next-seo.config'
import Layout from '../layouts/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...defaultseo} />
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
