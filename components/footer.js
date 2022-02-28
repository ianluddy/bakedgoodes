import styled from 'styled-components';
import theme from '../themes/default';
import { Instagram, Facebook } from './socials';
import { Anchor } from './anchor';
import { SecondarySquiggle } from './squiggle';
import { RiCake3Line } from "react-icons/ri";

const Footer = styled.div`
  text-align: center;
  margin: 0;
  padding: 1rem 0;
  color: ${theme.text};
`;

const Signature = styled.span`
  display: block;
  margin: 0 0.25rem 1rem 0.25rem;
  font-size: 0.9rem;
  svg {
    font-size: 1.4rem;
    position: relative;
    top: 0.3rem;
  }
`;

const Break = styled.div`
  display: none;
  padding-bottom: 2rem;
`;

const Socials = styled.div`
`;

export default function () {
  return (
    <Footer>
      <Break/>
      <SecondarySquiggle/>
      <Signature>© {new Date().getFullYear()} Baked Goodes</Signature>
      <Signature>
        <RiCake3Line/> Baked in Inchicore, Dublin 8
      </Signature>
      <Signature>
        Baked Goodes bakes with nuts and nut products. <br/>
        We are not a nut free bakery.<br/>
      </Signature>
      <Signature>
        <Anchor href="mailto:order@bakedgoodes.ie" color={theme.primary} bold>order@bakedgoodes.ie</Anchor>
      </Signature>
      <Socials>
        <Instagram/>
        <Facebook/>
      </Socials>
    </Footer>
  )
}