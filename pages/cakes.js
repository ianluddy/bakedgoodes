import Head from 'next/head';
import { data as cakes } from '../lib/cakes';
import Layout from '../components/layout';
import Section from '../components/section';
import { Small as ProductTile } from '../components/productTile';
import Grid, { GridWithSidebar } from '../components/grid';
import Cta from '../components/cta';
import Sidebar from '../components/productSidebar';

const Products = (props) => {
  return (
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
  );
};

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
          <GridWithSidebar sidebar={<Sidebar />} grid={<Products />} />
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
