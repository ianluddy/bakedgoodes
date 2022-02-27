import styled from 'styled-components';
import Layout from '../components/layout';
import Product from '../components/product';
import Grid from '../components/grid';
import Cta from '../components/cta';
import FadeIn from 'react-fade-in';


function Cupcakes() {
  return (
    <Layout>
      <FadeIn>
        <h1> Cupcakes </h1>
        <Grid>
          <Product 
            title="Vanilla"
            desc="Plenty of toppings available"
            src="images/cup1.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Chocolate"
            desc="Mmmmm chocolate"
            src="images/cup2.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Lemon"
            desc="Plenty of toppings available"
            src="images/cup3.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Vanilla"
            desc="Plenty of toppings available"
            src="images/cup4.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Gingerbread"
            desc="Mmmmm gingerbread"
            src="images/cup5.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Vanilla"
            desc="Mmmmm vanilla"
            src="images/cup6.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />  
          <Product 
            title="Vanilla"
            desc="Mmmmm vanilla"
            src="images/cup7.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Gingerbread"
            desc="Mmmmm gingerbread"
            src="images/cup8.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />
          <Product 
            title="Vanilla"
            desc="Mmmmm vanilla"
            src="images/cup9.jpg" 
            link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          />                
        </Grid>
        <Cta/>
      </FadeIn>
    </Layout>
  );
}
export default Cupcakes;