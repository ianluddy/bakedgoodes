import styled from 'styled-components';
import Anchor from './anchor';
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Socials = styled.div`
  a {
    font-size: 2rem;
    padding: 0.35rem;    
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

export default function (props) {
  return (
    <Socials>
      <Instagram/>
      <Facebook/>
    </Socials>
  )
}
