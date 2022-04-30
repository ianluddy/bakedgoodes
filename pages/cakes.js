import Head from 'next/head';
import { data as cakes } from '../lib/cakes';
import Layout from '../components/layout';
import Section from '../components/section';
import { Small as ProductTile } from '../components/productTile';
import Grid from '../components/grid';
import Cta from '../components/cta';

export default function (props) {
  return (
    <>
      <Head>
        <title>{props.siteName} - Cakes</title>
        <meta
          name="description"
          content="Indulge yourself with some delicious home baked goods made with love in Dublin 8"
        />
      </Head>
      <Layout>
        <Section>
          <Grid sm={'50%'} md={'33%'} lg={'33%'}>
            {cakes.map((cake) => (
              <ProductTile
                key={cake.id}
                path={`/cakes/${cake.id}`}
                title={cake.meta.title}
                src={cake.meta.src}
                buttonText="Order"
                large
              />
            ))}
          </Grid>
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
