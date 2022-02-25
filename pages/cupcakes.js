import styled from 'styled-components';
import Layout from '../components/layout';
import Product from '../components/product';
import Grid from '../components/grid';

function Cupcakes() {
  return (
    <Layout>
      <Grid>
        <Product 
          title="Vanilla"
          desc="Mmmmm vanilla"
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
          title="Gingerbread"
          desc="Mmmmm gingerbread"
          src="images/cup3.jpg" 
          link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
        />
        <Product 
          title="Vanilla"
          desc="Mmmmm vanilla"
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
      </Grid>
    </Layout>
  );
}
export default Cupcakes;