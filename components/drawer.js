import styled from 'styled-components';
import theme from '../themes/default';
import { useState } from "react";
import { IconAnchor } from './anchor';
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Drawer = styled.div`
  position: fixed;
  width: ${theme.drawerWidth};
  max-width: ${theme.drawerMaxWidth};
  top: 10px;
  bottom: 0;
  z-index: 3;
  transition: transform ${theme.transitionTime};
  transform: ${props => props.visible ? "translate(-400px)" : "unset"};
`;

const Right = styled(Drawer)`
  transform: ${props => props.visible ? "translate(-400px)" : "unset"};
  right: -400px;
  background-color: ${theme.darkGrey};
`;

const Left = styled(Drawer)`
  transform: ${props => props.visible ? "translate(400px)" : "unset"};
  left: -400px;
  background-color: ${theme.primary};
`;

const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 4;
`;

const OpenRight = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1rem;
  z-index: 1;
  @media (${theme.devices.md}) {
    top: 2rem;
    right: 2rem;
  }
`;

const OpenLeft = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1rem;
  @media (${theme.devices.md}) {
    display: none;
  }
`;

function CloseButton(setOpen) {
  return (
    <Close>
      <IconAnchor href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }} color={theme.body}>
        <HiX/>
      </IconAnchor>
    </Close>
  );
}

export function LeftDrawer ({ children, open, setOpen }) {
  return (
    <Left visible={open}>
      {CloseButton(setOpen)}
      { children }
    </Left>
  );
}

export function LeftDrawerOpen ({ children, setOpen }) {
  return (
    <OpenLeft>
      <IconAnchor href="#" onClick={setOpen}>
        <HiOutlineMenuAlt1/>
      </IconAnchor>
    </OpenLeft>
  );
}

export function RightDrawer ({ children, open, setOpen }) {
  return (
    <Right visible={open}>
      {CloseButton(setOpen)}
      { children }
    </Right>
  );
}

export function RightDrawerOpen ({ children, setOpen }) {
  return (
    <OpenRight>
      <IconAnchor href="#" onClick={(e) => { e.preventDefault(); setOpen(true); }}>
        <BsFillBasket2Fill/>
      </IconAnchor>
    </OpenRight>
  );
}