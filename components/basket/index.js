import styled from 'styled-components';
import theme from '../../themes/default';
import { useState, useContext } from "react";
import { OrderContext } from './orderProvider';
import OrderSummary from './OrderSummary';
import { IconAnchor } from '../anchor';
import Price from '../price';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { HiX } from "react-icons/hi";

const OpenButton = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1rem;
  z-index: 100;
  @media (${theme.devices.md}) {
    top: 2rem;
    right: 2rem;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

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
  const [open, setOpen] = useState(false);
  const {addOrder, removeOrder, orders} = useContext(OrderContext);
  
  const handleClick = (e) => {
    e.preventDefault();
    document.body.style.overflow = open ? 'unset' : 'hidden';
    setOpen(!open);
  }

  return (
    <>
      <OpenButton>
        <IconAnchor href="#" onClick={handleClick}>
          <BsFillBasket2Fill/>
        </IconAnchor>
      </OpenButton>      
      <Counter visible={orders && orders.length > 0}>
        {orders && orders.length}
      </Counter>
      <Rodal width={600} height={500} visible={open} onClose={handleClick} showCloseButton={false}>
        <CloseButton>
          <IconAnchor href="#" onClick={handleClick}>
            <HiX/>
          </IconAnchor>
        </CloseButton>
        <OrderSummary/>
      </Rodal>
    </>
  )
};