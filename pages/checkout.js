import Layout from '../components/layout';
import { OrderContext } from '../components/orderProvider';
import { useContext } from "react";
import { Order } from '../components/orderSummary';
import PageHeader from '../components/pageHeader';
import FadeIn from 'react-fade-in';

export default function() {
  const { orders } = useContext(OrderContext);
  return (
    <Layout>
      <FadeIn delay="0">
        <PageHeader>Checkout</PageHeader>
        { 
          orders ? orders.map((order, i) => Order(order, i)) : null
        }
      </FadeIn>
    </Layout>
  );
}