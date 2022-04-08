import styled from 'styled-components';
import { useState, useContext } from "react";

import theme from '../themes/default';
import Breadcrumbs from './breadcrumbs';
import Layout from './layout';
import Section from './section';
import Price from './price';
import Image from './image';
import Button from './button';
import Select from './select';
import Carousel from './carousel';
import { OrderContext } from './orderProvider';
import Grid from './grid';

import { data as cakes } from '../lib/cakes';
import { data as cupcakes } from '../lib/cupcakes';

const productData = {
  cakes,
  cupcakes
};

const Title = styled.h1`
  color: ${theme.secondary};
  margin: 0.75rem 0 0.1rem 0;
`;

const ImageWrapper = styled.div`
  width: 100vw;
  position: relative;
  right: 1rem;
  padding-bottom: 1rem;
  @media (${theme.devices.md}) {
    width: initial;
    position: static;
    padding: 1rem;
  }
`;

const PriceWrapper = styled.div`
  color: ${theme.secondary};
  font-size: 1.8rem;
  padding-bottom: 0.75rem;
`;

const Desc = styled.div`
  padding: 0 1rem;
  p {
    text-align: center;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
  @media (${theme.devices.md}) {
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 1.5rem;
`;

const MetaWrapper = styled.div`
  text-align: center;
  @media (${theme.devices.md}) {
    padding: 1rem;
  }
`;

export default function Post({ postData, postType }) {
  const [variant, setVariant] = useState(postData.variants[0]);
  const { addOrder } = useContext(OrderContext);
  return (
    <Layout>
      <Section>
        <Grid md={'50%'} lg={'50%'}>
          <ImageWrapper>
            <Image 
              src={postData.meta.src}
              alt={postData.meta.title}
              title={postData.meta.title}
              borderRadius
            />
          </ImageWrapper>
          <MetaWrapper>
            <Breadcrumbs/>
            <Title>
              {postData.meta.title}
            </Title>
            <Desc>
              <p>
                {postData.meta.desc} 
              </p>
            </Desc>
            <div>
              <Select 
                options={postData.variants}
                selected={variant}
                setSelected={setVariant}
              />
            </div>
            <ButtonWrapper>
              <Button 
                href="#" 
                text={"Add to basket"} 
                onClick={() => addOrder({ id: postData.id, ...postData.meta }, variant, 1)}
                large
                secondary
              />
            </ButtonWrapper>
          </MetaWrapper>
        </Grid>
      </Section>
      <Section>
        <Carousel 
          title={"Also available"}
          products={productData[postType]}
          excludeId={postData.id}
        />
      </Section>
    </Layout>
  )
}