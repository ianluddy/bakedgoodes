import styled from 'styled-components';
import theme from '../../themes/default';
import Layout from '../../components/layout';
import { OrderContext } from '../../components/order';
import { useState, useContext } from "react";
import Button from '../../components/button';
import { Anchor } from '../../components/anchor';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/cupcakes';

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
  text-align: center;
  @media (${theme.devices.md}) {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem;
  }
`;

const Back = styled.div`
  text-align: left;
  display: none;
`

const Image = styled.div`
  width: 100%;
  display: inline-block;  
  img {
    width: 100%;
  }
  @media (${theme.devices.md}) {
    width: 50%;
  }
`

const Meta = styled.div`
  width: 100%;
  display: inline-block;  
  vertical-align: top;
  text-align: left;  
  padding: 0 1rem;
  @media (${theme.devices.md}) {
    width: calc(50% - 2rem);
  }
  div {
    padding: 1rem 0;
  }
`

export default function Post({ postData }) {
  const [quantity, setQuantity] = useState(12);
  const {addOrder, removeOrder, orders} = useContext(OrderContext);  
  return (
    <Layout>
      <Wrapper>
        <Back>
          <Link href='/cupcakes'>
            <Anchor color={theme.primary}>
              Back 
            </Anchor>
          </Link>
        </Back>      
        <Image>
          <img src={postData.src} alt="TODO" title="TODO"/>
        </Image>
        <Meta>
          <h2> {postData.title} </h2>
          <div> {postData.desc} </div>
          <div> {quantity} </div>
          <div>
            <Button href="#" text={"Add to basket"} onClick={() => addOrder(postData, quantity)} large/>
          </div>
        </Meta>
      </Wrapper>
    </Layout>
  )
}