import Layout from '../components/layout';
import Product from '../components/product';
import Grid from '../components/grid';

function Cakes() {
  return (
    <Layout>
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
    </Layout>
  );
}
export default Cakes;