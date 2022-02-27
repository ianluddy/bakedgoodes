import styled from 'styled-components';
import theme from '../themes/default';
import Anchor from './anchor';
import { BsFillBasket2Fill } from "react-icons/bs";

const Basket = styled.div`
`;

const Button = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1rem;
  font-size: 1.8rem;
  cursor: pointer;
  
  @media (${theme.devices.md}) {
    top: 24px;
    right: 2rem;
    left: unset;
    font-size: 2.1rem;
  }
`;

export default function () {  
  return (
    <>
      <Button>
        <Anchor href="#">
          <BsFillBasket2Fill/>
        </Anchor>
      </Button>
      <Basket>
      </Basket>
    </>
  )
};