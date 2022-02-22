import styled from 'styled-components';
import Canopy from './canopy';
import Footer from './footer';
import Nav from './nav';
import Page from './page';
import Hamburger from './hamburger';
import theme from '../themes/default';

const Layout = styled.div`
  max-width: ${theme.breakpoints.lg};
  margin: 0 auto;
  padding: 0 1rem;
`;

export default function ({ children }) {
  return (
    <>
      <Layout>
        <Canopy></Canopy>
        <Hamburger></Hamburger>
        <Nav></Nav>
        <Page>{children}</Page>
      </Layout>
      <Footer></Footer>
    </>
  )
}