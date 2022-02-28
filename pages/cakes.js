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
          <Product 
            title="Vanilla"
            desc="Mmmmm vanilla"
            src="images/cake1.png" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Chocolate"
            desc="Mmmmm chocolate"
            src="images/cake2.png" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Gingerbread"
            desc="Mmmmm gingerbread"
            src="images/cake3.png"
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Vanilla"
            desc="Mmmmm vanilla"
            src="images/cake1.png" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Chocolate"
            desc="Mmmmm chocolate"
            src="images/cake2.png" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Gingerbread"
            desc="Mmmmm gingerbread"
            src="images/cake3.png"
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />     
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