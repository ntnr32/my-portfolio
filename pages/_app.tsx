import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from 'components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{Component.displayName}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
