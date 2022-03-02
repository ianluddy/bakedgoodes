import styled from 'styled-components';
import theme from '../themes/default';
import { useState, useContext } from "react";
import { OrderContext } from './order';
import { IconAnchor } from './anchor';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { BsFillBasket2Fill } from "react-icons/bs";
import { HiX } from "react-icons/hi";

const Button = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1rem;
  z-index: 100;
  @media (${theme.devices.md}) {
    top: 2rem;
    right: 2rem;
  }
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

const BasketWrapper = styled.div`
  padding-top: 3rem;
`;

const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
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
      <Button>
        <IconAnchor href="#" onClick={handleClick}>
          <BsFillBasket2Fill/>
        </IconAnchor>
      </Button>
      <Counter visible={orders.length > 0}>
        {orders.length}
      </Counter>
      <Rodal visible={open} onClose={handleClick} showCloseButton={false}>
        <Close>
          <IconAnchor href="#" onClick={handleClick}>
            <HiX/>
          </IconAnchor>
        </Close>
        <BasketWrapper>
        </BasketWrapper>
      </Rodal>
    </>
  )
};