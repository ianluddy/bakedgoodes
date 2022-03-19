import styled from 'styled-components';
import { useState, useContext } from "react";

import theme from '../../themes/default';
import { getAllPostIds, getPostData } from '../../lib/cupcakes';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import Price from '../../components/price';
import Paragraph from '../../components/paragraph';
import Image from '../../components/image';
import Button from '../../components/button';
import Select from '../../components/select';
import { MetaWrapper, Title, PriceWrapper, Desc, ButtonWrapper } from '../../components/productMeta';
import { OrderContext } from '../../components/orderProvider';
import { GridSplit } from '../../components/grid';
import { Wrapper } from '../../components/wrapper';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

const ImageWrapper = styled(Wrapper)``;

export default function Post({ postData }) {
  const [variant, setVariant] = useState(postData.variants[0]);
  const { addOrder } = useContext(OrderContext);
  return (
    <Layout>
      <GridSplit>
        <ImageWrapper hideMobile>
          <Image src={postData.meta.src} alt="TODO" title="TODO"/>
        </ImageWrapper>
        <MetaWrapper>
          <Breadcrumbs/>
          <Title>
            {postData.meta.title}
          </Title>
          <PriceWrapper>
            <Price 
              value={variant.price} 
              color={theme.secondary}
              weight={"bold"}
            />
          </PriceWrapper>
          <ImageWrapper hideDesktop>
            <Image src={postData.meta.src} alt="TODO" title="TODO"/>
          </ImageWrapper>
          <Desc>
            <Paragraph centred>
              {postData.meta.desc} 
            </Paragraph>
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
      </GridSplit>
    </Layout>
  )
}