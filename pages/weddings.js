import Head from 'next/head';
import Cta from '../components/cta';
import Layout from '../components/layout';
import Section from '../components/section';

export default function(props) {
  return (
    <>
      <Head>
        <title>{props.siteName} - Weddings</title>
        <meta name="description" content="Indulge yourself with some delicious home baked goods made with love in Dublin 8"/>
      </Head>
      <Layout>
        <Section padding={"0 0 2rem 0"}>
          <h1>
            Weddings
          </h1>
        </Section>
        <Section>
          <Cta 
            headline="Fancy something else?"
            body="Plenty of options available, get in touch!"
            buttonText="Contact me"
            buttonLink="/contact"
          />
        </Section>
      </Layout>
    </>
  );
}