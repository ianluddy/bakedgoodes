import styled from 'styled-components';
import theme from '../themes/default';
import { useState } from "react";
import NavAnchor from './navAnchor';

const Button = styled.div`
  height: 26px;
  width: 32px;
  position: absolute;
  top: 25px;
  right: 15px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  cursor: pointer;
  
  .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: ${theme.text};
  }

  .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
    transform: ${props => props.active ? 'rotate(45deg)' : 'rotate(0deg)'};
  }

  .line2 {
    transition: transform 0.2s ease-in-out;
    transform: ${props => props.active ? 'scaleY(0)' : ''};
  }

  .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
    transform: ${props => props.active ? 'rotate(-45deg)' : 'rotate(0deg)'};
  }
  
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
  background-color: ${theme.secondary};
  transform: translate(-150%);
  transform: ${props => props.active ? 'translate(0)' : 'translate(-150%)'};
  display: flex;
  flex-direction: row;
  transition: transform 0.5s ease-in-out;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
  
  @media (${theme.devices.md}) {
    display: none;
  }
`

export default function () {  
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    document.body.style.overflow = active ? 'unset' : 'hidden';
    setActive(!active);
  }

  return (
    <>
      <Button active={active} onClick={handleClick}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </Button>
      <Menu active={active}>
        <div onClick={handleClick}>
          <NavAnchor href="/">Home</NavAnchor>
          <NavAnchor href="/cakes">Cakes</NavAnchor>
          <NavAnchor href="/cupcakes">Cupcakes</NavAnchor>
          <NavAnchor href="/weddings">Weddings</NavAnchor>
        </div>
      </Menu>
    </>
  )
}