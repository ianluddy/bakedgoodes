import styled from 'styled-components';
import theme from '../../themes/default';
import { useState, useContext } from "react";
import { getAllPostIds, getPostData } from '../../lib/cakes';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import Price from '../../components/price';
import Image from '../../components/image';
import Button from '../../components/button';
import Select from '../../components/select';
import { Title, PriceWrapper, Desc, ButtonWrapper } from '../../components/productMeta';
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
        <Image src={postData.meta.src} alt="TODO" title="TODO"/>
        <div>
          <Breadcrumbs/>
          <Title>
            {postData.meta.title}
          </Title>
          <PriceWrapper>
            <Price value={variant.price}/>
          </PriceWrapper>
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
        </div>
      </GridSplit>
    </Layout>
  )
}