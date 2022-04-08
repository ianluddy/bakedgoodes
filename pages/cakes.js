import { data as cakes } from '../lib/cakes';
import Layout from '../components/layout';
import Section from '../components/section';
import { Small as ProductTile } from '../components/productTile';
import Grid from '../components/grid';
import Cta from '../components/cta';

export default function() {
  return (
    <Layout>
      <Section>
        <Grid sm={'50%'} md={'33%'} lg={'33%'}>
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
  );
}