import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import OrderProvider from '../components/orderProvider';
import Layout from '../components/layout';
import Section from '../components/section';
import { ButtonAnchor } from '../components/anchor';
import { 
  Large as ProductTile, 
  LargeWithCTA as CTAProductTile 
} from '../components/productTile';
import Carousel from '../components/carousel';
import Cta from '../components/cta';
import Image from '../components/image';
import Grid from '../components/grid';

import { data as cakes } from '../lib/cakes';
import { data as cupcakes } from '../lib/cupcakes';

const Wrapper = styled.div`
  text-align: center;
`;

const BestSellers = () => {
  return (
    <Carousel 
      title={'Best Sellers'} 
      products={[
        cakes[1],
        cakes[2],
        cakes[3],
        cakes[4],
        cupcakes[3],
        cupcakes[1],
        cupcakes[2],
        cupcakes[4],
      ]}
    />
  );
}

const CakeTypes = () => {
  return (
    <Grid align={'center'} sm={'50%'} md={'50%'} lg={'50%'}>
      <CTAProductTile
        path='/cakes'
        src='images/cakes/1.png'
        title='Celebration Cakes'
        body='Custom bakes for all occasions'
        buttonText='Shop now'
      />
      <CTAProductTile
        path='/weddings'
        src='images/weddings/3.png'
        title='Weddings'
        body='Bespoke for your big day'
        buttonText='Enquire now'
      />
    </Grid>
  );
}

const Categories = () => {
  return (
    <>
      <h2>
        Shop by Category
      </h2>
      <Grid align={'center'} sm={'33%'} md={'33%'} lg={'33%'}>
        <ProductTile
          path='/cakes'
          src='images/cakes/1.png'
          title='Celebration Cakes'
          body='Custom bakes for all occasions'
          buttonText='Shop now'
        />
        <ProductTile
          path='/cupcakes'
          src='images/cupcakes/1.png'
          title='Cupcakes'
          buttonText='Shop now'
        />
        <ProductTile
          path='/weddings'
          src='images/weddings/3.png'
          title='Weddings'
          body='Bespoke for your big day'
          buttonText='Enquire now'
        />
      </Grid>
    </>
  );
}

const Bio = () => {
  return(
    <Grid align={'center'}>
      <div>
        <h2> About Me </h2>
        <p>
          At Baked Goodes, we want to help you to mark life’s milestones and make memories that last forever. We harness the power of taste and explore edible art to make luxury wedding cakes that spark joy and celebrate human connection. Our cakes have gained a reputation for having exquisite style and exceptional flavour in equal measure. We are passionate about what we do and are meticulous about the details. We know you love good food and have impeccable taste.
        </p>
        <br/>
        <p>
          Let’s bake something beautiful.
        </p>
      </div>
    </Grid>
  );
}

export default function(props) {
  return (
    <>
      <Head>
        <title>{props.siteName} - Custom cakes, cupcakes, blondies and brownies</title>
        <meta name="description" content="Indulge yourself with some delicious home baked goods made with love in Dublin 8"/>
      </Head>
      <OrderProvider>
        <Layout>
          <Wrapper>
            <Section>
              <CakeTypes/>
            </Section>
            <Section>
              <Bio/>
            </Section>
            <Section>
              <Categories/>
            </Section>
            <Section>
              <Bio/>
            </Section>
            <Section>
              <BestSellers/>
            </Section>
            <Section>
              <Cta 
                headline="Fancy something else?"
                body="Plenty of options available, get in touch!"
                buttonText="Contact me"
                buttonLink="/contact"
              />
            </Section>
          </Wrapper>
        </Layout>
      </OrderProvider>
    </>
  );
}