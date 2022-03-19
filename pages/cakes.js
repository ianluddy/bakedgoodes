import { data as cakes } from '../lib/cakes';
import Layout from '../components/layout';
import ProductTile from '../components/productTile';
import { GridDefault } from '../components/grid';
import Cta from '../components/cta';
import PageHeader from '../components/pageHeader';

export default function() {
  return (
    <Layout>
      <PageHeader> Cakes </PageHeader>
      <GridDefault>
        {
          cakes.map(cake => (
            <ProductTile 
              key={cake.id}
              path={`/cakes/${cake.id}`}
              title={cake.meta.title}
              caption={cake.meta.caption}
              desc={cake.meta.desc}
              src={cake.meta.src}
              link={cake.meta.link}
            />
          ))
        }
      </GridDefault>
      <Cta 
        headline="Something else?" 
        body="Plenty of options available, get in touch!"
        buttonText="Contact me"
        buttonLink="/contact"
      />
    </Layout>
  );
}