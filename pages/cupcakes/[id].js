import styled from 'styled-components';
import theme from '../../themes/default';
import { useState, useContext } from "react";
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/cupcakes';
import Layout from '../../components/layout';
import Price from '../../components/price';
import Button from '../../components/button';
import Select from '../../components/select';
import { OrderContext } from '../../components/basket/orderProvider';
import { GridRight } from '../../components/grid';
import { Anchor } from '../../components/anchor';

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

const Wrapper = styled.div`
  @media (${theme.devices.md}) {
    margin: 0 auto;
    padding: 3rem 0 1rem 0;
  }
`;

const Back = styled.div`
  text-align: left;
  display: none;
`;

const Image = styled.div`
  width: 100%;
  display: inline-block;  
  img {
    width: 100%;
  }
`;

const Meta = styled.div`
  width: 100%;
  display: inline-block;  
  vertical-align: top;
  text-align: left;  
  padding: 0 1rem;
`;

const MetaTitle = styled.h2`
  color: ${theme.secondary};
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

const MetaDesc = styled.div`
  padding: 0 0 1rem;
  max-width: ${theme.textMaxWidth};
`;

const ButtonWrapper = styled.div`
  padding-top: 2rem;
`;

export default function Post({ postData }) {
  const [quantity, setQuantity] = useState(postData.quantities[0]);
  const {addOrder, removeOrder, orders} = useContext(OrderContext);

  return (
    <Layout>
      <Back>
        <Link href='/cupcakes'>
          <Anchor color={theme.primary}>
            Back 
          </Anchor>
        </Link>
      </Back>
      <GridRight>
        <Image>
          <img src={postData.meta.src} alt="TODO" title="TODO"/>
        </Image>
        <Meta>
          <MetaTitle> {postData.meta.title} </MetaTitle>
          <MetaDesc> {postData.meta.desc} </MetaDesc>
          <div>
            <Select 
              options={postData.quantities} 
              selected={quantity}
              setSelected={setQuantity}
            />
            <Price value={quantity.price}/>          
          </div>  
          <ButtonWrapper>
            <Button 
              href="#" 
              text={"Add to basket"} 
              onClick={() => addOrder({ id: postData.id, ...postData.meta }, quantity)} 
              large
            />
          </ButtonWrapper>
        </Meta>
      </GridRight>
    </Layout>
  )
}