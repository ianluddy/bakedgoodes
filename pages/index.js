import Layout from '../components/layout';
import OrderProvider from '../components/orderProvider';

export default function() {
  return (
    <OrderProvider>
      <Layout>
      </Layout>
    </OrderProvider>
  );
}