import styled from 'styled-components';
import theme from '../themes/default';
import Anchor from './anchor';
import { BsFillBasket2Fill } from "react-icons/bs";

const Basket = styled.div`
`;

const Button = styled.div`
  position: absolute;
  top: 25px;
  left: 15px;
  font-size: 2.2rem;
  
  @media (${theme.devices.md}) {
    left: 40px;
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