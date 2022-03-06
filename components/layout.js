import styled from 'styled-components';
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
  padding: 8rem 1rem 0 1rem;
  position: relative;

  @media (${theme.devices.md}) {
    padding: 3rem 2rem 0 2rem;
  }
`;

export default function ({ children }) {
  return (
    <>
      <Layout>
        <Nav/>
        <Hamburger/>
        <Basket/>
        <Page>{children}</Page>
        <Scroller/>
        <Footer/>
      </Layout>      
    </>
  )
}