import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import OrderProvider from '../components/orderProvider';

export default function() {
  return (
    <OrderProvider>
      <Layout>
        <PageHeader hideDesktop hideMobile>
          Home
        </PageHeader>
      </Layout>
    </OrderProvider>
  );
}