import styled from 'styled-components';
import Layout from '../components/layout';
import Product from '../components/product';
import { GridDefault } from '../components/grid';
import Cta from '../components/cta';
import FadeIn from 'react-fade-in';
import { cupcakes } from '../lib/cupcakes';

const productList = cupcakes.map(cupcake => (
  <Product 
    key={cupcake.id}
    path={`/cupcakes/${cupcake.id}`}
    title={cupcake.meta.title}
    caption={cupcake.meta.caption}
    desc={cupcake.meta.desc}
    src={cupcake.meta.src}
    link={cupcake.meta.link}
  />
));

export default function Cupcakes() {
  return (
    <Layout>
      <FadeIn>
        <h1> Cupcakes </h1>
        <GridDefault>
          { productList }
        </GridDefault>
        <Cta 
          headline="Something else?" 
          body="Plenty of options available, get in touch!"
          buttonText="Contact me"
          buttonLink="#"
        />
      </FadeIn>
    </Layout>
  );
}