import { ThemeProvider } from '@skaui/core'
import '@skaui/core/src/styles/global.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import defaultseo from '../../next-seo.config'
import Layout from '../layouts/Layout'
import '../styles/globals.css'
import { NextPageWithLayout } from '../types/page'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			<DefaultSeo {...defaultseo} />
			<ThemeProvider>
				<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
