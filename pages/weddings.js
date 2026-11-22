import Head from 'next/head';
import styled from 'styled-components';
import theme from '../themes/default';
import Cta from '../components/cta';
import Layout from '../components/layout';
import Section from '../components/section';
import Grid from '../components/grid';
import Image from '../components/image';

const Intro = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  > div {
    width: 100%;
  }
  @media (${theme.devices.md}) {
    flex-wrap: nowrap;
    > div {
      width: 50%;
    }
  }
  h2 {
    margin-top: 0;
  }
  p {
    margin-bottom: 1rem;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
  > div {
    width: 100%;
  }
  @media (${theme.devices.md}) {
    flex-wrap: nowrap;
    > div {
      width: 33.33%;
    }
  }
  h3 {
    color: ${theme.primary};
    margin-bottom: 0.5rem;
  }
`;

export default function (props) {
  return (
    <>
      <Head>
        <title>{props.siteName} - Weddings</title>
        <meta
          name="description"
          content="Bespoke wedding cakes designed and handmade in Dublin 8, tailored to your style, your flavours and your big day."
        />
      </Head>
      <Layout>
        <Section padding={'0 0 2rem 0'}>
          <Grid align={'center'} delay={'0'}>
            <h1>Weddings</h1>
          </Grid>
        </Section>
        <Section>
          <Intro>
            <div>
              <Image
                src="images/weddings/3.png"
                alt="Bespoke wedding cake"
                borderRadius
              />
            </div>
            <div>
              <h2>Bespoke Wedding Cakes</h2>
              <p>
                Your wedding cake should be as unique as your love story. Every
                Baked Goodes wedding cake is designed from scratch with you, so
                it reflects your style, your theme and the flavours you love.
              </p>
              <p>
                From elegant tiered centrepieces to relaxed semi-naked cakes,
                delicate sugar flowers to fresh florals and hand-piped details,
                each cake is baked fresh and finished by hand with meticulous
                attention to detail.
              </p>
              <p>
                Whether you're planning an intimate celebration or a grand
                reception, we'll help you create a cake that looks stunning and
                tastes even better.
              </p>
            </div>
          </Intro>
        </Section>
        <Section>
          <Grid align={'center'} delay={'0'}>
            <h2>How it works</h2>
          </Grid>
          <Steps>
            <div>
              <h3>1. Get in touch</h3>
              <p>
                Tell us your date, venue, guest numbers and any ideas or
                inspiration you have. We recommend enquiring as early as
                possible, as dates book up quickly.
              </p>
            </div>
            <div>
              <h3>2. Design &amp; tasting</h3>
              <p>
                We'll work together on a design that suits your day, choose your
                flavours and fillings, and finalise every detail, from tiers and
                finish to decorations.
              </p>
            </div>
            <div>
              <h3>3. Your big day</h3>
              <p>
                Your cake is freshly baked and hand-finished in the days before
                your wedding, then delivered and set up at your venue so you
                don't have to worry about a thing.
              </p>
            </div>
          </Steps>
        </Section>
        <Section>
          <Grid align={'center'} delay={'0'}>
            <Cta
              headline="Let's create your dream cake"
              body="Get in touch to check availability and start designing your bespoke wedding cake."
              buttonText="Enquire now"
              buttonLink="/contact"
            />
          </Grid>
        </Section>
      </Layout>
    </>
  );
}
