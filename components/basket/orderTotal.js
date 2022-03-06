import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import theme from '../../themes/default';
import { OrderContext } from './orderProvider';
import Price from '../price';

const Wrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  font-size: 1.2rem;  
  span:last-of-type {
    margin-left: 0.5rem;
    color: ${theme.primary};
  }
`;

export default function ({ children }) {
  const {addOrder, removeOrder, orders} = useContext(OrderContext);
  return (
    <>
      <Wrapper visible={orders && orders.length}>
        <span>Total</span>
        <Price value={
          orders && orders.length && orders.reduce(
            (prev, next) => prev + next.quantity * next.variant.price
          , 0) || 0
        }/>
      </Wrapper>
    </>
  )
};