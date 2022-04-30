import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { init } from '@emailjs/browser';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

import theme from '../themes/default';
import OrderProvider from '../components/orderProvider';
import { GlobalStyle } from '../components/base';

const name = 'Baked Goodes';
export const siteTitle = 'Home baking from Dublin 8';

export default function ({ Component, pageProps }) {
  init('u4Pqy4omgBsiy3ghJ'); // Email JS

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5FGM2ZM' });
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="name" content={name} />
          <meta name="color" content={theme.primary} />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <meta property="og:image" content="images/favicon/favicon.ico" />
          <link rel="shortcut icon" href="images/favicon/favicon.ico" />
        </Head>
        <OrderProvider>
          <Component {...pageProps} siteName={name} />
        </OrderProvider>
      </ThemeProvider>
    </>
  );
}
