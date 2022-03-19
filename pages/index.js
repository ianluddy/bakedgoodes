import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';

export default function() {
  return (
    <Layout>
      <PageHeader hideDesktop hideMobile>
        Home
      </PageHeader>
    </Layout>
  );
}