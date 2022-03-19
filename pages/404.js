import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import Cta from '../components/cta';

export default function() {
  return (
    <Layout>
      <PageHeader hideDesktop hideMobile>
        404
      </PageHeader>
      <Cta 
        headline="404" 
        body="Hmmmm, that page couldn't be found"
        buttonText="Back to home"
        buttonLink="/"
      />
    </Layout>
  );
}