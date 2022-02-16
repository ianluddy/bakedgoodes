import styled from 'styled-components';
import Canopy from './canopy';
import Footer from './footer';
import Nav from './nav';
import Hamburger from './hamburger';
import theme from '../themes/default';

const Layout = styled.div`
  max-width: ${theme.breakpoints.lg};
  margin: 0 auto;
  padding: 0 16px;
`;

export default function ({ children }) {
  return (
    <Layout>
      <Canopy></Canopy>
      <Hamburger></Hamburger>
      <Nav></Nav>
      <main>{children}</main>
      <Footer></Footer>
    </Layout>
  )
}