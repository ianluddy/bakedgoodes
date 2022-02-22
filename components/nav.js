import styled from 'styled-components';
import theme from '../themes/default';
import Socials from './socials';
import NavAnchor from './navAnchor';
import { PrimarySquiggle, SecondarySquiggle } from './squiggle';

const NavWrapper = styled.div`
  text-align: center;
  margin: 4rem 0 1rem 0;
  color: ${theme.text};
  
  @media (${theme.devices.md}) {
    margin: 2rem 0;
  }
`
const NavLinkWrapper = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  margin: 0 auto 0.5rem auto;
`;

const Nav = styled.div`
  display: none;
  height: 2rem;
  align-items: center;
  flex-direction: row;
  border-bottom: ${theme.border};
  border-top: ${theme.border};
  
  @media (${theme.devices.md}) {
    display: flex;
  }
`;

const NavLink = styled.div`
  text-align: center;
  flex-grow: 1;
  width: auto;

  @media (${theme.devices.md}) {
    width: 130px;
  }
  @media (${theme.devices.lg}) {
    width: 160px;
  }
`

const SocialWrapper = styled.div`
  display: none;
  @media (${theme.devices.md}) {
    display: block;
  }
`

const Title = styled.div`
  flex-grow: 1;
  text-shadow: 1.5px 1.5px ${theme.secondary};
  font-family: ${theme.fontParisienne};
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.tertiary};
  
  @media (${theme.devices.xs}) {
    font-size: 3.7em;
  }
  @media (${theme.devices.md}) {
    padding: 0.5rem 1rem;
    font-size: 3.3rem;
    line-height: 3rem;
  }
  @media (${theme.devices.lg}) {
    font-size: 4rem;
  }  
`

const Logo = styled.img`
  height: 90px;
  position: relative;
  display: none;
  align-self: center;
  
  @media (${theme.devices.md}) {
    display: inline-block;    
    height: 100px;
  }
  @media (${theme.devices.lg}) {
    height: 120px;
  }
`

// TODO - use Image optimiser

export default function () {  
  return (
    <NavWrapper>
      <Logo src="images/cake.jpg"/>
      <NavLinkWrapper>
        <Nav>
          <NavLink>
            <NavAnchor href="/">Home</NavAnchor>
          </NavLink>
          <NavLink>          
            <NavAnchor href="/cakes">Cakes</NavAnchor>
          </NavLink>
        </Nav>
        <Title> 
          Baked Goodes 
        </Title>
        <Nav>
          <NavLink>
            <NavAnchor href="/cupcakes">Cupcakes</NavAnchor>
          </NavLink>
          <NavLink>
            <NavAnchor href="/weddings">Weddings</NavAnchor>
          </NavLink>
        </Nav>
      </NavLinkWrapper>
      <PrimarySquiggle></PrimarySquiggle>
    </NavWrapper>
  )
}
