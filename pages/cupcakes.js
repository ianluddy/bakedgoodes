import styled from 'styled-components';
import Layout from '../components/layout';
import Product from '../components/product';
import Grid from '../components/grid';
import Cta from '../components/cta';
import FadeIn from 'react-fade-in';
import { cupcakes } from '../lib/cupcakes';

const productList = cupcakes.map(cupcake => (
  <Product 
    key={cupcake.id}
    path={`/cupcakes/${cupcake.id}`}
    title={cupcake.title}
    desc={cupcake.desc}
    src={cupcake.src}
    link={cupcake.link}
  />
));

function Cupcakes() {
  return (
    <Layout>
      <FadeIn>
        <h1> Cupcakes </h1>
        <Grid>
          { productList }
        </Grid>
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
export default Cupcakes;