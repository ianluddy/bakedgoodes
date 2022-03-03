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
  font-size: 1.1em;
  letter-spacing: 0.02em;
    
  p {
    padding: 1rem 1rem 0 1rem;
    max-width: ${theme.textMaxWidth};
  }
  
  img {
    border-radius: 8px;
  }
  
  h1 {
    font-size: 1.7rem;
    margin: 0 auto;
    display: inline-block;
  }
  
  @media (${theme.devices.md}) {
    padding: 3rem 2rem 0 2rem;
    
    h1 {
      border-bottom: none;
      padding: 0;
      display: none;
      margin: 3rem;
      text-align: center;
    }    
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