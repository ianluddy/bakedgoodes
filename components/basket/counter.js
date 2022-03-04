import styled from 'styled-components';
import theme from '../../themes/default';
import { useContext } from "react";
import { OrderContext } from './orderProvider';
import { IconAnchor } from '../anchor';

const Counter = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  top: 0.8rem;
  right: 0.3rem;
  width: 22px;
  height: 22px;
  border-radius: 30px;
  background: ${theme.red};
  color: ${theme.body};
  font-size: 0.8rem;
  line-height: 22px;
  text-align: center;
  @media (${theme.devices.md}) {
    top: 1.5rem;
    right: 1.2rem;
  }
`;

export default function ({ children }) {
  const {addOrder, removeOrder, orders} = useContext(OrderContext);
  return (
    <Counter visible={orders && orders.length > 0}>
      {orders && orders.length}
    </Counter>
  )
};