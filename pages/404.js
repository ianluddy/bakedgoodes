import Layout from '../components/layout';
import Cta from '../components/cta';
import Section from '../components/section';

export default function() {
  return (
    <Layout>
      <Section>
        <Cta 
          headline="404" 
          body="Hmmmm, that page couldn't be found"
          buttonText="Back to home"
          buttonLink="/"
        />
      </Section>
    </Layout>
  );
}