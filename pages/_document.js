import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /><link href="https://fonts.googleapis.com/css2?family=Alata&family=Mingzat&family=Inter&family=Andika&family=Poppins&family=Lato&family=Sniglet&display=swap" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
                
            
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument 

