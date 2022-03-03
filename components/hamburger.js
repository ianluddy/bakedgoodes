import styled from 'styled-components';
import theme from '../themes/default';
import { useState } from "react";
import { NavAnchor, IconAnchor } from './anchor';
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";

const OpenButton = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1rem;
  @media (${theme.devices.md}) {
    display: none;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1.6rem;
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
  transition: transform ${theme.transitionTime} ease-in-out;  
  transform: translate(0, -100%);
  transform: ${props => props.active ? 'translate(0)' : 'translate(0, -100%);'};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (${theme.devices.md}) {
    display: none;
  }
`

const AnchorWrapper = styled.div`
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
        <IconAnchor href="#" onClick={handleClick}>
          <HiOutlineMenuAlt1/>
        </IconAnchor>
      </OpenButton>
      <Menu active={active}>
        <CloseButton>
          <IconAnchor href="#" color={theme.body} onClick={handleClick}>
            <HiX/>
          </IconAnchor>
        </CloseButton>
        <AnchorWrapper onClick={handleClick}>
          <NavAnchor href="/" color={theme.body}>Home</NavAnchor>
          <NavAnchor href="/cakes" color={theme.body}>Cakes</NavAnchor>
          <NavAnchor href="/cupcakes" color={theme.body}>Cupcakes</NavAnchor>
          <NavAnchor href="/weddings" color={theme.body}>Weddings</NavAnchor>
        </AnchorWrapper>
      </Menu>
    </>
  )
}