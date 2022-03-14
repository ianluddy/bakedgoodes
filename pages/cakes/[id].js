import styled from 'styled-components';
import theme from '../../themes/default';
import { useState, useContext } from "react";
import { getAllPostIds, getPostData } from '../../lib/cakes';
import Layout from '../../components/layout';
import Price from '../../components/price';
import Image from '../../components/image';
import Button from '../../components/button';
import Select from '../../components/select';
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

const MetaTitle = styled.h1`
  color: ${theme.secondary};
  font-size: 1.7rem;
  margin: 0.5rem 0;
`;

const PriceWrapper = styled.div`
  font-size: 1.3rem;
  padding-bottom: 0.75rem;
`;

const MetaDesc = styled.div`
  padding: 0 0 1.5rem 0;
  max-width: ${theme.textMaxWidth};
`;

const ButtonWrapper = styled.div`
  padding-top: 1.5rem;
`;

export default function Post({ postData }) {
  const [variant, setVariant] = useState(postData.variants[0]);
  const { addOrder } = useContext(OrderContext);
  return (
    <Layout>
      <GridSplit>
        <Image src={postData.meta.src} alt="TODO" title="TODO"/>
        <div>
          <MetaTitle>
            {postData.meta.title}
          </MetaTitle>
          <PriceWrapper>
            <Price value={variant.price}/>
          </PriceWrapper>
          <MetaDesc> 
            {postData.meta.desc} 
          </MetaDesc>
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