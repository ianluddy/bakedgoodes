import styled from 'styled-components';
import theme from '../../themes/default';
import { useState } from "react";
import { OrderContext } from './orderProvider';
import OrderSummary from './OrderSummary';
import Counter from './counter';
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

export default function ({ children }) {
  const [open, setOpen] = useState(false);
  
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
      <Counter/>
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