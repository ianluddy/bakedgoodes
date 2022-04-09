import Head from 'next/head';
import { data as cupcakes } from '../lib/cupcakes';
import Layout from '../components/layout';
import Section from '../components/section';
import { Small as ProductTile } from '../components/productTile';
import Grid from '../components/grid';
import Cta from '../components/cta';

export default function() {
  return (
    <>
      <Head>
      <title>Baked Goodes - Cupcakes</title>
      <meta name="description" content="Indulge yourself with some delicious home baked goods made with love in Dublin 8"/>
      </Head>
      <Layout>
        <Section>
          <Grid sm={'50%'} md={'33%'} lg={'33%'}>
            {
              cupcakes.map(cupcake => (
                <ProductTile 
                  key={cupcake.id}
                  path={`/cupcakes/${cupcake.id}`}
                  title={cupcake.meta.title}
                  src={cupcake.meta.src}
                  buttonText="Order"
                  large
                />
              ))
            }
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