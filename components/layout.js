import theme from '../themes/default';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import Footer from './footer';
import Scroller from './scroller';
import Counter from './orderCounter';
import OrderSummary from './orderSummary';
import { RightDrawer, RightDrawerOpen, LeftDrawer, LeftDrawerOpen } from './drawer';
import { PrimaryNav, SecondaryNav } from './nav';
import Page from './page';
import { ButtonAnchor, IconAnchor } from './anchor';
import { BsFillBasket2Fill } from "react-icons/bs";

const Layout = styled.div`
  max-width: ${theme.breakpoints.lg};
  margin: 0 auto;
  padding: 8rem 1rem 0 1rem;
  position: relative;
  transition: transform ${theme.transitionTime};
  transform: ${props => props.basketOpen && "translate(-400px)"};
  transform: ${props => props.burgerOpen && "translate(400px)"};  
  overflow: ${props => props.burgerOpen || props.basketOpen ? "hidden" : "unset"};

  @media (${theme.devices.md}) {
    padding: 3rem 2rem 0 2rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 10px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  opacity: 0.2;
  display: ${props => props.visible ? "block" : "none"};
`;

export default function ({ children }) {
  const [basketOpen, setBasketOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 
      burgerOpen || basketOpen ? 'hidden' : 'unset';
  }, [burgerOpen, basketOpen]);
  
  return (
    <>
      <LeftDrawer open={burgerOpen} setOpen={setBurgerOpen}>
        <SecondaryNav setOpen={setBurgerOpen}/>
      </LeftDrawer>
      <RightDrawer open={basketOpen} setOpen={setBasketOpen}>
        <OrderSummary/>
      </RightDrawer>
      <Overlay 
        visible={basketOpen || burgerOpen} 
        onClick={() => {setBurgerOpen(false); setBasketOpen(false);}}/>
      <Layout basketOpen={basketOpen} burgerOpen={burgerOpen}>
        <RightDrawerOpen setOpen={setBasketOpen}/>
        <LeftDrawerOpen setOpen={setBurgerOpen}/>
        <Counter/>
        <PrimaryNav/>
        <Page>{children}</Page>
        <Scroller/>
        <Footer/>
      </Layout>
    </>
  )
}