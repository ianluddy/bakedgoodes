import styled from 'styled-components';
import { useState, useContext } from "react";

import theme from '../../themes/default';
import { getAllPostIds, getPostData } from '../../lib/cakes';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import Price from '../../components/price';
import Image from '../../components/image';
import Button from '../../components/button';
import Select from '../../components/select';
import { 
  ImageWrapper, 
  MetaWrapper, 
  Title, 
  PriceWrapper, 
  Desc, 
  ButtonWrapper
} from '../../components/productMeta';
import { OrderContext } from '../../components/orderProvider';
import { GridSplit } from '../../components/grid';

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

export default function Post({ postData }) {
  const [variant, setVariant] = useState(postData.variants[0]);
  const { addOrder } = useContext(OrderContext);
  return (
    <Layout>
      <GridSplit>
        <ImageWrapper>
          <Image 
            src={postData.meta.src}
            alt={postData.meta.title}
            title={postData.meta.title}
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
      </GridSplit>
    </Layout>
  )
}