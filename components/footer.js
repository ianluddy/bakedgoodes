import styled from 'styled-components';
import theme from '../themes/default';
import { FooterSocials } from './socials';
import Anchor from './anchor';
import { SecondarySquiggle } from './squiggle';

const Footer = styled.div`
  text-align: center;
  margin: 2rem 0 0 0;
  padding-bottom: 2rem;
  color: ${theme.text};
  max-width: ${theme.breakpoints.lg};  

  @media (${theme.devices.md}) {
    margin: 2rem auto 0 auto;
    position: static;
    width: auto;
    padding: 2rem 1rem;
  }
`;

const Signature = styled.span`
  display: block;
  margin: 0 2rem 1rem 2rem;
`;

const Break = styled.div`
  display: none;
  padding-bottom: 2rem;
`;

export default function () {  
  return (
    <Footer>
      <Break/>
      <SecondarySquiggle/>
      <Signature>© {new Date().getFullYear()} Baked Goodes</Signature>
      <Signature>
        Baked in Inchicore, Dublin 8
      </Signature>      
      <Signature>
        Baked Goodes bakes with nuts and nut products. <br/>
        We are not a nut free bakery.<br/>
      </Signature>
      <Signature>
        <Anchor href="mailto:order@bakedgoodes.ie"> order@bakedgoodes.ie </Anchor>
      </Signature>
      <FooterSocials/>
    </Footer>
  )
}