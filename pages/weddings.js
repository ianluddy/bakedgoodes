import Cta from '../components/cta';
import Layout from '../components/layout';
import Section from '../components/section';

export default function() {
  return (
    <Layout>
      <Section padding={"0 0 2rem 0"}>
        <h1>
          Weddings
        </h1>
      </Section>
      <Section>
        <Cta 
          headline="Fancy something else?"
          body="Plenty of options available, get in touch!"
          buttonText="Contact me"
          buttonLink="/contact"
        />
      </Section>
    </Layout>
  );
}