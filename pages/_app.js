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
 

  // chatwoot
  useEffect(() => {
    (function(d,t) {
      var BASE_URL="https://app.chatwoot.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'eK97MwZ5BZqogJSmy1iT358T',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }, [])
  // chatwoot
  
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