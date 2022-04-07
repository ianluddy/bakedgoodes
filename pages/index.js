import styled from 'styled-components';
import Link from 'next/link';
import OrderProvider from '../components/orderProvider';
import Layout from '../components/layout';
import Section from '../components/section';
import { ButtonAnchor } from '../components/anchor';
import Carousel from '../components/carousel';
import Cta from '../components/cta';
import Image from '../components/image';
import Map from '../components/map';
import Grid from '../components/grid';

import { data as cakes } from '../lib/cakes';
import { data as cupcakes } from '../lib/cupcakes';

export default function() {
  return (
    <OrderProvider>
      <Layout>
        <Section>
          <Map/>
        </Section>
        <Section>
          <Grid textAlign={'center'} sm={'50%'} md={'50%'} lg={'50%'}>
            <div>
              <Link href="/cakes">
                <Image 
                  src='images/cakes/10.png'
                  alt='Celebration Cakes'
                  title='Celebration Cakes'
                  padding={'0.5rem'}
                />
              </Link>
              <Cta
                headline="Celebration Cakes"
                body="Custom bakes for all occasions"
                buttonText="Shop now"
                buttonLink="/cakes"
                small
              />
            </div>
            <div>
              <Link href="/weddings">
                <Image
                  src='images/weddings/3.png'
                  alt='Weddings'
                  title='Weddings'
                  padding={'0.5rem'}
                />
              </Link>
              <Cta 
                headline="Wedding Cakes"
                body="Bespoke for your big day"
                buttonText="Enquire now"
                buttonLink="/weddings"
                small
              />
            </div>
          </Grid>
        </Section>
        <Section>
          <Carousel 
            title={"Best Sellers"} 
            products={[
              cakes[7],
              cupcakes[3],
              cakes[6],
              cupcakes[1],
              cakes[5],
              cupcakes[2],
              cakes[4],
              cupcakes[4],
            ]}
          />
        </Section>
      </Layout>
    </OrderProvider>
  );
}