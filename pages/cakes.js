import Layout from '../components/layout';
import Product from '../components/product';
import Grid from '../components/grid';
import Cta from '../components/cta';
import FadeIn from 'react-fade-in';

function Cakes() {
  return (
    <Layout>
      <FadeIn>
        <h1> Cakes </h1>
        <p> 
          Our menu includes trusted signature flavors as well as seasonal and monthly favorites all made fresh daily using local, real ingredients. <br/>
          We are inclusive of guests with special dietary needs offering gluten free and vegan cupcake options. <br/>
          Please note our gluten free cupcakes are not vegan. And our vegan cupcakes are not gluten free.
        </p>    
        <Grid>
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
export default Cakes;