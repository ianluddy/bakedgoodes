import styled from 'styled-components';
import { useContext } from 'react';
import { Formik, Form } from 'formik';

import theme from '../themes/default';
import Breadcrumbs from './breadcrumbs';
import Layout from './layout';
import Section from './section';
import Price from './price';
import Image from './image';
import Button from './button';
import { Select } from './form';
import Carousel from './carousel';
import { OrderContext } from './orderProvider';
import Grid from './grid';

import { data as cakes } from '../lib/cakes';
import { data as cupcakes } from '../lib/cupcakes';

const productData = {
  cakes,
  cupcakes,
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
  const { addOrder } = useContext(OrderContext);

  const initialValues = {
    option: Object.keys(postData.options)[0],
  };

  const handleSubmit = (values) => {
    addOrder(
      { id: postData.id, ...postData.meta },
      postData.options[values.option],
      1
    );
  };

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
            <Breadcrumbs />
            <Title>{postData.meta.title}</Title>
            <Desc>
              <p>{postData.meta.desc}</p>
            </Desc>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {(props) => (
                <Form>
                  <Select
                    name="option"
                    label="Option"
                    options={Object.values(postData.options)}
                    {...props}
                  />
                  <Button
                    type="submit"
                    text="Add to basket"
                    large
                    secondary
                    wide
                  />
                </Form>
              )}
            </Formik>
          </MetaWrapper>
        </Grid>
      </Section>
      <Section>
        <Grid delay={'0'}>
          <Carousel
            title={'Also available'}
            products={productData[postType]}
            excludeId={postData.id}
          />
        </Grid>
      </Section>
    </Layout>
  );
}
