import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import{ init } from '@emailjs/browser';

import theme from '../themes/default';
import OrderProvider from '../components/orderProvider';
import { GlobalStyle } from '../components/base';

const name = 'Baked Goodes';
export const siteTitle = 'Home baking from Dublin 8';

export default function({ Component, pageProps }) {
  init("u4Pqy4omgBsiy3ghJ");
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="name" content={name} />
          <meta name="color" content={theme.primary} />        
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@300;400&family=Lobster&family=Montserrat:wght@300;400;700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Head>
        <OrderProvider>
          <Component {...pageProps} />
        </OrderProvider>
      </ThemeProvider>
    </>
  )
}