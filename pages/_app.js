import Layout from '../components/theme/Layout'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>theglu.in</title>
        <meta name="description" content="theglu.in is an independent magazine we aim to deliver on developmenr jobs and sustainability." />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
)
}

export default MyApp