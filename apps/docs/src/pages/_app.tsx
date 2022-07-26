import '../styles/globals.css'
// import '@skagur-k/ska-ui/dist/output.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default MyApp
