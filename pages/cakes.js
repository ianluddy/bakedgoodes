import Layout from '../components/layout';
import Product from '../components/product';
import { GridDefault } from '../components/grid';
import Cta from '../components/cta';
import FadeIn from 'react-fade-in';
import PageHeader from '../components/pageHeader';

export default function() {
  return (
    <Layout>
      <FadeIn>
        <PageHeader style={{display:"none"}}> Cakes </PageHeader>
        <p> 
          Our menu includes trusted signature flavors as well as seasonal and monthly favorites all made fresh daily using local, real ingredients. <br/>
          We are inclusive of guests with special dietary needs offering gluten free and vegan cupcake options. <br/>
          Please note our gluten free cupcakes are not vegan. And our vegan cupcakes are not gluten free.
        </p>    
        <Cta 
          headline="Something else?" 
          body="Plenty of options available, get in touch!"
          buttonText="Contact me"
          buttonLink="/contact"
        />        
      </FadeIn>
    </Layout>
  );
}