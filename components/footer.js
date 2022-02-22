import styled from 'styled-components';
import theme from '../themes/default';
import Socials from './socials';
import Anchor from './anchor';
import { SecondarySquiggle } from './squiggle';

const Footer = styled.div`
  text-align: center;
  margin: 2rem 0 0 0;
  padding-bottom: 2rem;
  background-color: ${theme.secondary};
  width: 100vw;
  position: relative;
  right: 0.5rem;
  top: 8px;
  max-width: ${theme.breakpoints.lg};  

  @media (${theme.devices.md}) {
    margin: 2rem auto 0 auto;
    position: static;
    width: auto;
    background-color: transparent;
    padding: 2rem 1rem;
  }
`;

const Signature = styled.span`
  display: block;
  margin: 0 2rem 1rem 2rem;
`;

const Break = styled.div`
  display: block;
  padding-bottom: 2rem;
  border-top: ${theme.fatBorder} ${theme.text};
  @media (${theme.devices.md}) {
    display: none;
    border-top: ${theme.border} ${theme.text};
  }  
`;

export default function () {  
  return (
    <Footer>
      <Break></Break>
      <SecondarySquiggle></SecondarySquiggle>
      <Signature>© {new Date().getFullYear()} Baked Goodes</Signature>
      <Signature>
        Baked in Inchicore, Dublin 8
      </Signature>
      <Signature>
        <Anchor href="mailto:order@bakedgoodes.ie"> order@bakedgoodes.ie </Anchor>
      </Signature>
      <Socials text></Socials>
    </Footer>
  )
}