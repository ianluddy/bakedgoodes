import styled from 'styled-components';
import { useContext } from "react";
import Layout from '../components/layout';
import { OrderContext } from '../components/orderProvider';
import { GridRight } from '../components/grid';
import Order from '../components/order';
import OrderTotal from '../components/orderTotal';
import PageHeader from '../components/pageHeader';
import FadeIn from 'react-fade-in';

const OrderWrapper = styled.div`
`;

export default function() {
  const { orders, count } = useContext(OrderContext);
  return (
    <Layout>
      <FadeIn delay="0">
        <PageHeader>Checkout</PageHeader>
        <GridRight hide={!count}>
          <OrderWrapper>
            { 
              orders ? orders.map((order, i) => Order(order, i)) : null
            }
            <OrderTotal/>
          </OrderWrapper>
        </GridRight>
      </FadeIn>
    </Layout>
  );
}