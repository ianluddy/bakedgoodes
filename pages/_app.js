import Head from 'next/head';
import theme from '../themes/default';
import { GlobalStyle } from '../components/base';
import { ThemeProvider } from "styled-components";

const name = 'Baked Goodes';
export const siteTitle = 'Home baking from Dublin 8';

export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@300;400&family=Lobster&display=swap" rel="stylesheet"/>
      </Head>    
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}