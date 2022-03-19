import styled from 'styled-components';
import { useContext } from "react";

import Layout from '../components/layout';
import { OrderContext } from '../components/orderProvider';
import { GridSplit } from '../components/grid';
import Order from '../components/order';
import OrderTotal from '../components/orderTotal';
import PageHeader from '../components/pageHeader';

const OrderWrapper = styled.div`
`;

export default function() {
  const { orders, count } = useContext(OrderContext);
  return (
    <Layout>
      <PageHeader>Checkout</PageHeader>
      <GridSplit hide={!count}>
        <OrderWrapper>
          { 
            orders ? orders.map((order, i) => Order(order, i)) : null
          }
          <OrderTotal/>
        </OrderWrapper>
      </GridSplit>
    </Layout>
  );
}