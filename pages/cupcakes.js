import { data as cupcakes } from '../lib/cupcakes';
import Layout from '../components/layout';
import Section from '../components/section';
import ProductTile from '../components/productTile';
import { GridDefault } from '../components/grid';
import Cta from '../components/cta';

export default function() {
  return (
    <Layout>
      <Section>
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
                orderButton
              />
            ))
          }
        </GridDefault>
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
  );
}