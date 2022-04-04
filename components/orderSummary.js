import styled from 'styled-components';
import theme from '../themes/default';
import { useState, useContext } from "react";
import { OrderContext } from './orderProvider';
import OrderTotal from './orderTotal';
import Order from './order';
import QuantityPicker from './quantityPicker';
import { IconAnchor, ButtonAnchor } from './anchor';
import Price from './price';
import Image from './image';
import { AiOutlineDelete } from "react-icons/ai";

const TotalWrapper = styled.div`
  padding: 1rem 0;
  margin: 0;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 6rem;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: row;
  align-items: center;
  color: ${theme.body};  
  div {
    width: 100%;
  }
`;

const Summary = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  overflow: auto;
  position: absolute;
  top: 6rem;
  right: 1rem;
  left: 2rem;
  bottom: 8rem;
  padding: 1rem 0;
  color: ${theme.grey};
`;

const Header = styled.h2`
  color: ${theme.body};
  position: absolute;
  top: 0;
  height: 2rem;
  padding: 2rem 0;
  margin: 0;
  right: 2rem;
  left: 2rem;
`;

const Footer = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  color: ${theme.body};
  bottom: 0;
  height: 8rem;
  right: 2rem;
  left: 2rem;
`;

export default function ({ children, setOpen }) {
  const { orders, count } = useContext(OrderContext);
  return (
    <>
      <Header>
        Your basket
      </Header>
      <Placeholder visible={!count}>
        <div>Your basket is empty :(</div>
      </Placeholder>
      <Summary visible={count}>
        {
          orders && orders.length ? orders.map((order, i) => Order(order, i)) : null
        }
      </Summary>
      <Footer visible={count}>
        <TotalWrapper>
          <OrderTotal/>
        </TotalWrapper>
        <ButtonAnchor 
          href="/checkout" 
          text={"Checkout"} 
          onClick={() => { setOpen(false); }}
          large
          secondary
          wide
        />
      </Footer>
    </>
  )
};