import styled from 'styled-components';
import theme from '../themes/default';
import NavAnchor from './navAnchor';
import { PrimarySquiggle, SecondarySquiggle } from './squiggle';

const NavWrapper = styled.div`
  text-align: center;
  padding: 4rem 0 1rem 0;
  border-top: ${theme.fatBorder} ${theme.primary};
  
  @media (${theme.devices.md}) {
    padding: 3rem 0 0 0;
  }
`
const NavLinkWrapper = styled.div`
  text-align: center;
  align-items: center;
  display: inline-block;
  margin: 0 auto 1.5rem auto;
`;

const Nav = styled.div`
  display: none;
  height: 2rem;
  align-items: center;
  flex-direction: row;

  @media (${theme.devices.md}) {
    display: flex;
  }
`;

const NavLink = styled.div`
  text-align: center;
  flex-grow: 1;
  width: auto;

  @media (${theme.devices.md}) {
    padding: 0 1rem;
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
  text-shadow: 1px 1px ${theme.shadow};
  font-family: ${theme.fontLogo};
  font-size: 3rem;
  color: ${theme.primary};
  margin-bottom: -1rem;
  
  @media (${theme.devices.xs}) {
    font-size: 3.7em;
  }
  @media (${theme.devices.md}) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`

export default function () {  
  return (
    <NavWrapper>
      <Title>
        Baked Goodes 
      </Title>
      <NavLinkWrapper>
        <Nav>
          <NavLink>
            <NavAnchor href="/">Home</NavAnchor>
          </NavLink>
          <NavLink>          
            <NavAnchor href="/cakes">Cakes</NavAnchor>
          </NavLink>
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