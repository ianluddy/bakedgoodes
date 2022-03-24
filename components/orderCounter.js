import styled from 'styled-components';
import theme from '../themes/default';
import { useContext } from "react";
import { OrderContext } from './orderProvider';
import { IconAnchor } from './anchor';

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
  z-index: 2;
  @media (${theme.devices.xs}) {
    top: 1rem;
    right: 0.5rem;
  }
  @media (${theme.devices.sm}) {
    top: 1.3rem;
    right: 0.5rem;
  }
  @media (${theme.devices.md}) {
    right: 1.4rem;
  }
`;

export default function ({ children }) {
  const { count } = useContext(OrderContext);
  return (
    <Counter visible={count}>
      {count}
    </Counter>
  )
};