import '../styles/globals.css'
// import '@skagur-k/ska-ui/dist/output.css'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts'
import { ToastProvider } from '@skaui/core/'
import ToastContainer from '@skaui/core/src/components/toast/ToastContainer'
const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<ToastProvider>
				<Component {...pageProps} />
				<ToastContainer />
			</ToastProvider>
		</Layout>
	)
}

export default MyApp
