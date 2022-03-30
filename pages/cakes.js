import { data as cakes } from '../lib/cakes';
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
            cakes.map(cake => (
              <ProductTile 
                key={cake.id}
                path={`/cakes/${cake.id}`}
                title={cake.meta.title}
                caption={cake.meta.caption}
                desc={cake.meta.desc}
                src={cake.meta.src}
                link={cake.meta.link}
                large
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