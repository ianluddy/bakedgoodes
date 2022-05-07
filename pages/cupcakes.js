import Head from 'next/head';
import { data as cupcakes } from '../lib/cupcakes';
import Layout from '../components/layout';
import Section from '../components/section';
import { Small as ProductTile } from '../components/productTile';
import Grid, { GridWithSidebar } from '../components/grid';
import Cta from '../components/cta';
import Sidebar from '../components/productSidebar';

const Products = (props) => {
  return (
    <Grid sm={'50%'} md={'33%'} lg={'33%'}>
      {cupcakes.map((cupcake) => (
        <ProductTile
          key={cupcake.id}
          path={`/cupcakes/${cupcake.id}`}
          title={cupcake.meta.title}
          src={cupcake.meta.src}
          buttonText="Order"
          large
        />
      ))}
    </Grid>
  );
};

export default function (props) {
  return (
    <>
      <Head>
        <title>{props.siteName} - Cupcakes</title>
        <meta
          name="description"
          content="Indulge yourself with some delicious home baked goods made with love in Dublin 8"
        />
      </Head>
      <Layout>
        <Section>
          <GridWithSidebar sidebar={<Sidebar />} grid={<Products />} />
        </Section>
        <Section>
          <Grid delay={'0'}>
            <Cta
              headline="Fancy something else?"
              body="Plenty of options available, get in touch!"
              buttonText="Contact me"
              buttonLink="/contact"
            />
          </Grid>
        </Section>
      </Layout>
    </>
  );
}
