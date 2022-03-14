import styled from 'styled-components';
import theme from '../../themes/default';
import { useState, useContext } from "react";
import { getAllPostIds, getPostData } from '../../lib/cupcakes';
import Layout from '../../components/layout';
import Price from '../../components/price';
import Image from '../../components/image';
import Button from '../../components/button';
import Select from '../../components/select';
import { OrderContext } from '../../components/orderProvider';
import { GridSplit } from '../../components/grid';
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

const ImageWrapper = styled.div`
  width: 100%;
  display: inline-block;  
`;

const Meta = styled.div`
  width: 100%;
  display: inline-block;  
  vertical-align: top;
  padding: 0;
  @media (${theme.devices.md}) {
    padding: 0 1rem;
    text-align: left;
  }
`;

const MetaTitle = styled.h1`
  color: ${theme.secondary};
  text-transform: uppercase;
  font-size: 1.7rem;
  margin: 0.5rem 0;
`;

const PriceWrapper = styled.div`
  font-size: 1.3rem;
  padding-bottom: 0.75rem;
`;

const SelectWrapper = styled.div`
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
        <ImageWrapper>
          <Image src={postData.meta.src} alt="TODO" title="TODO"/>
        </ImageWrapper>
        <Meta>
          <MetaTitle> {postData.meta.title} </MetaTitle>
          <PriceWrapper>
            <Price value={variant.price}/>
          </PriceWrapper>
          <MetaDesc> {postData.meta.desc} </MetaDesc>
          <SelectWrapper>
            <Select 
              options={postData.variants}
              selected={variant}
              setSelected={setVariant}
            />
          </SelectWrapper>  
          <ButtonWrapper>
            <Button 
              href="#" 
              text={"Add to basket"} 
              onClick={() => addOrder({ id: postData.id, ...postData.meta }, variant, 1)}
              large
            />
          </ButtonWrapper>
        </Meta>
      </GridSplit>
    </Layout>
  )
}