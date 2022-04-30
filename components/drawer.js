import styled from 'styled-components';
import theme from '../themes/default';
import { useState } from 'react';
import { IconAnchor } from './anchor';
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi';
import { BsFillBasket2Fill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

const Drawer = styled.div`
  position: fixed;
  width: ${theme.drawerWidth};
  max-width: ${theme.drawerMaxWidth};
  top: 0;
  bottom: 0;
  z-index: 3;
  transition: transform ${theme.transitionTime};
  transform: ${(props) => (props.visible ? 'translate(-400px)' : 'unset')};
  overflow: hidden;
`;

const Right = styled(Drawer)`
  transform: ${(props) => (props.visible ? 'translate(-400px)' : 'unset')};
  right: -400px;
  background-color: ${theme.darkGrey};
  box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px,
    rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
`;

const Left = styled(Drawer)`
  transform: ${(props) => (props.visible ? 'translate(400px)' : 'unset')};
  left: -400px;
  background-color: ${theme.primary};
  box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px,
    rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
`;

const Close = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  z-index: 4;
`;

const OpenRight = styled.div`
  position: absolute;
  right: 1rem;
  z-index: 1;
  top: 1.8rem;
  a {
    font-size: 1.4rem;
  }
  @media (${theme.devices.xs}) {
    a {
      font-size: 1.8rem;
    }
  }
  @media (${theme.devices.sm}) {
    top: 2rem;
    a {
      font-size: 1.9rem;
    }
  }
  @media (${theme.devices.md}) {
    right: 2rem;
  }
`;

const OpenLeft = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1rem;
  a {
    font-size: 1.4rem;
  }
  @media (${theme.devices.xs}) {
    top: 1.7rem;
    a {
      font-size: 1.8rem;
    }
  }
  @media (${theme.devices.sm}) {
    top: 2rem;
    a {
      font-size: 1.9rem;
    }
  }
  @media (${theme.devices.md}) {
    display: none;
  }
`;

function CloseButton(setOpen) {
  return (
    <Close>
      <IconAnchor
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
        color={theme.body}
      >
        <HiX />
      </IconAnchor>
    </Close>
  );
}

export function LeftDrawer({ children, open, setOpen }) {
  return (
    <Left visible={open}>
      {CloseButton(setOpen)}
      {children}
    </Left>
  );
}

export function LeftDrawerOpen({ children, setOpen }) {
  return (
    <OpenLeft>
      <IconAnchor href="#" onClick={setOpen}>
        <HiOutlineMenuAlt1 />
      </IconAnchor>
    </OpenLeft>
  );
}

export function RightDrawer({ children, open, setOpen }) {
  return (
    <Right visible={open}>
      {CloseButton(setOpen)}
      {children}
    </Right>
  );
}

export function RightDrawerOpen({ children, setOpen }) {
  return (
    <OpenRight>
      <IconAnchor
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <BsFillBasket2Fill />
      </IconAnchor>
    </OpenRight>
  );
}
