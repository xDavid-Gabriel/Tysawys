// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <script
            id="gtag"
            async
            src="https://www.googletagmanager.com/gtm.js?id=GTM-WDP8K7Q"
          />
          {/* Google Tag Manager - Global base code */}
          <Script
            id="gtag-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WDP8K7Q')
          `,
            }}
          />
          <script
            id="ganalytics"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-GML39DNVPJ"
          />
          <Script
            id="analytics-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-GML39DNVPJ')`,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
