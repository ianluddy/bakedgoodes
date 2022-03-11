import Layout from '../components/layout';
import FadeIn from 'react-fade-in';
import PageHeader from '../components/pageHeader';

export default function() {
  return (
    <Layout>
      <FadeIn delay="0">
        <PageHeader>Contact</PageHeader>
      </FadeIn>
    </Layout>
  );
}