import styled from 'styled-components';
import { useState, useContext } from 'react';

import theme from '../../themes/default';
import { getAllPostIds, getPostData } from '../../lib/cupcakes';
import Product from '../../components/product';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return <Product postData={postData} postType={'cupcakes'} />;
}
