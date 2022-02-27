import styled from 'styled-components';
import Anchor from './anchor';
import theme from '../themes/default';
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Socials = styled.div`
  a {
    font-size: 2rem;
    padding: 0.35rem;    
  }
  position: ${props => props.header ? 'absolute' : 'static'};
  top: ${props => props.header ? '25px' : '0'};
  right: ${props => props.header ? '35px' : '0'};
  
  display: ${props => props.header ? 'none' : 'block'};
  @media (${theme.devices.md}) {
    display: block;
  }
`;

export const Instagram = () => {
  return (
    <Anchor href="https://www.instagram.com/baked_goodes/">
      <BsInstagram/>
    </Anchor>
  )
}

export const Facebook = () => {
  return (
    <Anchor href="https://www.facebook.com/claire.goode.3">
      <BsFacebook/>
    </Anchor>
  )
}

export const FooterSocials = () => {
  return (
    <Socials>
      <Instagram/>
      <Facebook/>
    </Socials>
  )
}

export const HeaderSocials = () => {
  return (
    <Socials header>
      <Instagram/>
    </Socials>
  )
}

