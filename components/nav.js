import styled from 'styled-components';
import theme from '../themes/default';
import { NavAnchor } from './anchor';
import { PrimarySquiggle, SecondarySquiggle } from './squiggle';
import Link from 'next/link';

const NavWrapper = styled.div`
  position: absolute;
  left: 3.5rem;
  right: 3.5rem;
  top: 1rem;
  padding: 0;
  text-align: center;

  @media (${theme.devices.md}) {
    position: static;
    padding: 0;
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
  font-size: 2.4rem;
  line-height: 2.2rem;
  padding-top: 0.5rem;
  margin-bottom: -1rem;

  a {
    color: ${theme.primary};
    text-decoration: none;
  }
  
  @media (${theme.devices.sm}) {
    font-size: 3rem;
    line-height: initial;
    padding-top: 0.5rem;    
  }
  
  @media (${theme.devices.md}) {
    padding-top: 0;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`

export default function () {  
  return (
    <NavWrapper>
      <Title>
        <Link href="/">
          Baked Goodes
        </Link>
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