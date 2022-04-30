import styled from 'styled-components';
import theme from '../themes/default';
import { useContext } from 'react';
import { OrderContext } from './orderProvider';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const Wrapper = styled.div`
  display: inline-block;
  float: right;
  display: flex;
  align-items: center;
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
  font-size: 1.1rem;
`;

export default function ({ order, index }) {
  const { updateOrder } = useContext(OrderContext);

  return (
    <Wrapper>
      <FaMinusCircle onClick={() => updateOrder(index, order.quantity - 1)} />
      <Value>{order.quantity}</Value>
      <FaPlusCircle onClick={() => updateOrder(index, order.quantity + 1)} />
    </Wrapper>
  );
}
