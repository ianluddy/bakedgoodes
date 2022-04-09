import Head from 'next/head';
import Layout from '../components/layout';
import Cta from '../components/cta';
import Section from '../components/section';

export default function() {
  return (
    <>
      <Head>
        <title>Baked Goodes - 404</title>
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <Layout>
        <Section>
          <Cta 
            headline="404" 
            body="Hmmmm, that page couldn't be found"
            buttonText="Back to home"
            buttonLink="/"
          />
        </Section>
      </Layout>
    </>
  );
}