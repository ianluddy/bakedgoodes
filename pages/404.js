import Layout from '../components/layout';
import Cta from '../components/cta';

export default function() {
  return (
    <Layout>
      <h1>
        404
      </h1>
      <Cta 
        headline="404" 
        body="Hmmmm, that page couldn't be found"
        buttonText="Back to home"
        buttonLink="/"
      />
    </Layout>
  );
}