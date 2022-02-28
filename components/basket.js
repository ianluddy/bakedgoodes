import styled from 'styled-components';
import theme from '../themes/default';
import { useState } from "react";
import Anchor from './anchor';
import { BsFillBasket2Fill } from "react-icons/bs";
import { HiX } from "react-icons/hi";

const Button = styled.div`
  position: absolute;
  top: 1.6rem;
  font-size: 1.8rem;
  cursor: pointer;
  right: 1rem;
`;

const OpenButton = styled(Button)`
  @media (${theme.devices.md}) {
    top: 2rem;
    right: 2rem;
    font-size: 2.1rem;
  }
`;

const CloseButton = styled(Button)`
`;

const Basket = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${theme.primary};
  color: ${theme.body};
  transition: transform 0.5s ease-in-out;  
  transform: translate(0, calc(100% - 10px));
  transform: ${props => props.active ? 'translate(0)' : 'translate(0, calc(100% - 10px));'};
`;

const Counter = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.1rem;
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
    right: 1rem;
  }
`;

export default function () {
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  
  const handleClick = (e) => {
    e.preventDefault();
    document.body.style.overflow = active ? 'unset' : 'hidden';
    setActive(!active);
  }
  
  return (
    <>
      <OpenButton>
        <Anchor href="#" onClick={handleClick}>
          <BsFillBasket2Fill/>
        </Anchor>
      </OpenButton>
      <Counter>
        {products.length + 22}
      </Counter>
      <Basket active={active}>
        <CloseButton>
          <Anchor href="#" color={theme.body} onClick={handleClick}>
            <HiX/>
          </Anchor>
        </CloseButton>
      </Basket>
    </>
  )
};