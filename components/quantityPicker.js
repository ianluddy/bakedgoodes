import styled from 'styled-components';
import theme from '../themes/default';
import { useState, useEffect, useContext } from 'react';
import { OrderContext } from './orderProvider';
import { FaMinusSquare, FaMinusCircle, FaPlusSquare, FaPlusCircle } from "react-icons/fa";


const Wrapper = styled.div`
  display: inline-block;
  float: right;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  color: ${theme.grey};
  svg {
    color: ${theme.midGrey};
    cursor: pointer;
    font-size: 1rem;
    opacity: 1;
    transition: opacity ${theme.transitionTime};
    &:hover {
      opacity: ${theme.opacity};
    }
  }
`;

const Value = styled.span`
  padding: 0 0.5rem;
  font-size: 1.2rem;
`;

export default function ({ order, index }) {
  const { updateOrder } = useContext(OrderContext);
  const [value, setValue] = useState(order.quantity);
  
  useEffect(() => {
    updateOrder(index, value);
  }, [value]);
  
  return (
    <Wrapper>
      <FaMinusCircle onClick={() => {setValue(value > 0 ? value - 1 : 0)}}/>
      <Value>{value}</Value>
      <FaPlusCircle onClick={() => {setValue(value + 1)}}/>
    </Wrapper>
  )
};