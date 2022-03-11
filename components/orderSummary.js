import styled from 'styled-components';
import theme from '../themes/default';
import { useState, useContext } from "react";
import { OrderContext } from './orderProvider';
import OrderTotal from './orderTotal';
import QuantityPicker from './quantityPicker';
import { IconAnchor, ButtonAnchor } from './anchor';
import Price from './price';
import Image from './image';
import { AiOutlineDelete } from "react-icons/ai";

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
  right: 2rem;
  left: 2rem;
  bottom: 8rem;
  padding: 1rem 0;
`;

const Header = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${theme.body};
  position: absolute;
  top: 0;
  height: 2rem;
  padding: 2rem 0;
  right: 2rem;
  left: 2rem;
`;

const Footer = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  bottom: 0;
  height: 8rem;
  right: 2rem;
  left: 2rem;
`;

const TotalWrapper = styled.div`
  padding: 1rem 0;
  font-size: 1.2rem;
  color: ${theme.body};
  span:last-of-type {
    float: right;
  }
`;

const OrderWrapper = styled.div`
  padding-bottom: 0.5rem;
  display: ${props => props.visible ? "block" : "none"}
`;

const Meta = styled.div`
  display: inline-block;
  padding: 0.3rem 0 0 1rem;
  font-weight: 400;
  vertical-align: top;
`;

const Title = styled.div`
  font-weight: 400;
  color: ${theme.grey};
  font-size: 1.1rem;
`;

const Variant = styled.div`
  font-weight: 100;
  color: ${theme.midGrey};
  font-size: 1rem;
`;

export function Order(order, index) {
  return (
    <OrderWrapper key={index} visible={order.quantity > 0}>
      <Image width={"80px"} src={order.product.src} inline/>
      <Meta>
        <Title>{order.product.title}</Title>
        <Variant>{order.variant.title}</Variant>
        <Price weight={600} color={theme.secondary} value={order.variant.price * order.quantity}></Price>
      </Meta>
      <QuantityPicker order={order} index={index}/>
    </OrderWrapper>
  )
}

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
          <span>Subtotal</span>
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