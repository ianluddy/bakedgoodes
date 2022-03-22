import { data as cupcakes } from '../lib/cupcakes';
import Layout from '../components/layout';
import ProductTile from '../components/productTile';
import { GridDefault } from '../components/grid';
import Cta from '../components/cta';
import PageHeader from '../components/pageHeader';

export default function() {
  return (
    <Layout>
      <PageHeader hideDesktop>
        Cupcakes
      </PageHeader>
      <GridDefault>
        {
          cupcakes.map(cupcake => (
            <ProductTile 
              key={cupcake.id}
              path={`/cupcakes/${cupcake.id}`}
              title={cupcake.meta.title}
              caption={cupcake.meta.caption}
              desc={cupcake.meta.desc}
              src={cupcake.meta.src}
              link={cupcake.meta.link}
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