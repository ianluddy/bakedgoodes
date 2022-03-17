import theme from '../themes/default';
import { useState, useEffect, useContext, useRef } from "react";
import styled from 'styled-components';
import Footer from './footer';
import Scroller from './scroller';
import Counter from './orderCounter';
import OrderSummary from './orderSummary';
import { OrderContext } from './orderProvider';
import OrderTotal from './orderTotal';
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
  @media (${theme.devices.md}) {
    padding: 3rem 2rem 0 2rem;
    transform: ${props => props.rightDrawerOpen && "translate(-400px)"};
    transform: ${props => props.leftDrawerOpen && "translate(400px)"};  
    overflow: ${props => props.leftDrawerOpen || props.rightDrawerOpen ? "hidden" : "unset"};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 10px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  transform: opacity ${theme.transitionTime};
  opacity: ${props => props.visible ? "0.1" : "0"};
  display: ${props => props.visible ? "block" : "none"};
`;

export default function ({ children }) {
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const { orders } = useContext(OrderContext);
  const orderRef = useRef();

  useEffect(() => {
    if( orderRef.current && orderRef.current.length < orders.length ) {
      setRightDrawerOpen(true);
    }
    orderRef.current = orders;
  }, [orders]);

  useEffect(() => {
    document.body.style.overflow = 
      leftDrawerOpen || rightDrawerOpen ? 'hidden' : 'unset';
  }, [leftDrawerOpen, rightDrawerOpen]);
  
  return (
    <>
      <LeftDrawer open={leftDrawerOpen} setOpen={setLeftDrawerOpen}>
        <SecondaryNav setOpen={setLeftDrawerOpen}/>
      </LeftDrawer>
      <RightDrawer open={rightDrawerOpen} setOpen={setRightDrawerOpen}>
        <OrderSummary setOpen={setRightDrawerOpen}/>
      </RightDrawer>
      <Overlay 
        visible={rightDrawerOpen || leftDrawerOpen} 
        onClick={() => {setLeftDrawerOpen(false); setRightDrawerOpen(false);}}/>
      <Layout rightDrawerOpen={rightDrawerOpen} leftDrawerOpen={leftDrawerOpen}>
        <RightDrawerOpen setOpen={setRightDrawerOpen}/>
        <LeftDrawerOpen setOpen={setLeftDrawerOpen}/>
        <Counter/>
        <PrimaryNav/>
        <Page>{children}</Page>
        <Scroller/>
        <Footer/>
      </Layout>
    </>
  )
}