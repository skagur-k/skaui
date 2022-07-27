import '../styles/globals.css'
// import '@skagur-k/ska-ui/dist/output.css'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
