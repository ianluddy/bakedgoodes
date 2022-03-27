import Layout from '../components/layout';
import OrderProvider from '../components/orderProvider';
import Section from '../components/section';

export default function() {
  return (
    <OrderProvider>
      <Layout>
      </Layout>
    </OrderProvider>
  );
}