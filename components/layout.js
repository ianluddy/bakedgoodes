import styled from 'styled-components';
import Canopy from './canopy';
import Footer from './footer';
import Scroller from './scroller';
import Basket from './basket';
import Nav from './nav';
import Page from './page';
import Hamburger from './hamburger';
import { HeaderSocials } from './socials';
import theme from '../themes/default';

const Layout = styled.div`
  max-width: ${theme.breakpoints.lg};
  margin: 0 auto;
  padding: 3rem 1rem 0 1rem;
  position: relative;
  
  @media (${theme.devices.md}) {
    padding: 3rem 2rem 0 2rem;
  }
`;

export default function ({ children }) {
  return (
    <>
      <Canopy/>
      <Layout>
        <Nav/>
        <Hamburger/>
        <Basket/>
        <HeaderSocials/>
        <Page>{children}</Page>
        <Scroller/>
        <Footer/>
      </Layout>      
    </>
  )
}