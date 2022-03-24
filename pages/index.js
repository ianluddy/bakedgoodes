import Layout from '../components/layout';
import OrderProvider from '../components/orderProvider';

export default function() {
  return (
    <OrderProvider>
      <Layout>
        <h1>
          Home
        </h1>
      </Layout>
    </OrderProvider>
  );
}