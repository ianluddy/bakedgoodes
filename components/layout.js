import styled from 'styled-components';
import Canopy from './canopy';
import Footer from './footer';
import Scroller from './scroller';
import Basket from './basket';
import Nav from './nav';
import Page from './page';
import Hamburger from './hamburger';
import theme from '../themes/default';

const Layout = styled.div`
  max-width: ${theme.breakpoints.lg};
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (${theme.devices.md}) {
    padding: 3rem 2rem;
  }
`;

export default function ({ children }) {
  return (
    <>
      <Nav/>
      <Hamburger/>
      <Basket/>
      <Layout>
        <Page>{children}</Page>
      </Layout>
      <Scroller/>
      <Footer/>
    </>
  )
}