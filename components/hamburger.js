import styled from 'styled-components';
import theme from '../themes/default';
import { useState } from "react";
import NavAnchor from './navAnchor';
import Anchor from './anchor';
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";

const Button = styled.div`
  position: absolute;
  top: 1.6rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

const OpenButton = styled(Button)`
  left: 1rem;
  @media (${theme.devices.md}) {
    display: none;
  }
`;

const CloseButton = styled(Button)`
  right: 1rem;
`;

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
  transition: transform 0.5s ease-in-out;  
  transform: translate(0, calc(-100% + 10px));
  transform: ${props => props.active ? 'translate(0)' : 'translate(0, calc(-100% + 10px));'};
  display: flex;
  flex-direction: row;
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
  
  const handleClick = (e) => {
    e.preventDefault();    
    document.body.style.overflow = active ? 'unset' : 'hidden';
    setActive(!active);
  }

  return (
    <>
      <OpenButton>
        <Anchor href="#" onClick={handleClick}>
          <HiOutlineMenuAlt1/>
        </Anchor>
      </OpenButton>
      <Menu active={active}>
        <CloseButton>
          <Anchor href="#" color={theme.body} onClick={handleClick}>
            <HiX/>
          </Anchor>
        </CloseButton>
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