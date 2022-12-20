import Layout from '../components/theme/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';
import Script from 'next/script'
function MyApp({ Component, pageProps }) {

//g anal
// <!-- Google tag (gtag.js) -->


useEffect(() => {
 
}, [])

 // clarity
  useEffect(() => {
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ey9pj5euqg");
  }, [])

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
       <Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=G-ELC9BDXRZH`}
  />

<Script id="google-analytics" strategy="lazyOnload">
    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ELC9BDXRZH', {
              page_path: window.location.pathname,
            });
                `}
  </Script>
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