import Layout from '../components/theme/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   window.$crisp = [];
  //   window.CRISP_WEBSITE_ID = "Y6cfe4fb0-37c4-4e3d-bb25-34dec5b92a9a";
  //   (() => {
  //     const d = document;
  //     const s = d.createElement("script");
  //     s.src = "https://client.crisp.chat/l.js";
  //     s.async = 1;
  //     d.getElementsByTagName("body")[0].appendChild(s);
  //   })();
  // });
  useEffect(() => {
    (function (d) {
      var appziScript = d.createElement('script');
      appziScript.src = `https://w.appzi.io/w.js?token=sXoA8`;
      d.head.appendChild(appziScript);
    })(document);
  }, [])
  
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