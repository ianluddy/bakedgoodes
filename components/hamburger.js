import styled from 'styled-components';
import theme from '../themes/default';
import { useState } from "react";
import NavAnchor from './navAnchor';
import Anchor from './anchor';
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";

const Button = styled.div`
  position: absolute;
  top: 1.6rem;
  left: ${props => props.right ? 'unset' : '1rem'};
  right: ${props => props.right ? '1rem' : 'unset'};
  font-size: 1.8rem;
  cursor: pointer;
  @media (${theme.devices.md}) {
    display: none;
  }
`

const Menu = styled.div`
  display: none;
  position: fixed;
  z-index: 1;  
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${theme.primary};
  color: ${theme.body};
  transform: translate(-150%);
  transform: ${props => props.active ? 'translate(0)' : 'translate(-150%)'};
  display: flex;
  flex-direction: row;
  transition: transform 0.5s ease-in-out;
  align-items: center;

  @media (${theme.devices.md}) {
    display: none;
  }
`

const NavAnchorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

export default function () {  
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    document.body.style.overflow = active ? 'unset' : 'hidden';
    setActive(!active);
  }

  return (
    <>
      <Button onClick={handleClick}>
        <Anchor href="#">
          <HiOutlineMenuAlt1/>
        </Anchor>
      </Button>
      <Menu active={active}>
        <Button onClick={handleClick} right>
          <Anchor href="#" color={theme.body}>
            <HiX/>
          </Anchor>
        </Button>
        <NavAnchorWrapper onClick={handleClick}>
          <NavAnchor href="/">Home</NavAnchor>
          <NavAnchor href="/cakes">Cakes</NavAnchor>
          <NavAnchor href="/cupcakes">Cupcakes</NavAnchor>
          <NavAnchor href="/weddings">Weddings</NavAnchor>
        </NavAnchorWrapper>
      </Menu>
    </>
  )
}