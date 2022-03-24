import { data as cakes } from '../lib/cakes';
import Layout from '../components/layout';
import ProductTile from '../components/productTile';
import { GridDefault } from '../components/grid';
import Cta from '../components/cta';

export default function() {
  return (
    <Layout>
      <h1>
        Cakes 
      </h1>
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
        headline="Fancy something else?"
        body="Plenty of options available, get in touch!"
        buttonText="Contact me"
        buttonLink="/contact"
      />
    </Layout>
  );
}