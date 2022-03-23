import styled from 'styled-components';
import theme from '../themes/default';
import { PrimaryNavAnchor, SecondaryNavAnchor } from './anchor';
import { PrimarySquiggle } from './squiggle';
import Link from 'next/link';

const PrimaryWrapper = styled.div`
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
const LinkWrapper = styled.div`
  text-align: center;
  align-items: center;
  display: inline-block;
  margin: 0 auto 1.5rem auto;
`;

const LinkInner = styled.div`
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
    padding: 0 0.3rem;
  }
`

const Title = styled.div`
  flex-grow: 1;
  text-shadow: 1px 1px ${theme.shadow};
  font-family: ${theme.fontLogo};
  font-size: 2rem;
  line-height: 2.2rem;
  padding-top: 0.5rem;
  margin-bottom: -1rem;

  a {
    color: ${theme.primary};
    text-decoration: none;
  }

  @media (${theme.devices.xs}) {
    font-size: 2.4rem;
  }
  
  @media (${theme.devices.sm}) {
    font-size: 3rem;
    line-height: initial;
    padding-top: 0.25rem;
  }
  
  @media (${theme.devices.md}) {
    padding-top: 0;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`;

const SecondaryWrapper = styled.div`
  display: none;
  position: absolute;
  z-index: 1;  
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: ${theme.body};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SecondaryInner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

export function SecondaryNav({ setOpen }) {
  return (
    <>
      <SecondaryWrapper>
        <SecondaryInner onClick={() => {setOpen(false);}}>
          <SecondaryNavAnchor href="/">Home</SecondaryNavAnchor>
          <SecondaryNavAnchor href="/cakes">Cakes</SecondaryNavAnchor>
          <SecondaryNavAnchor href="/cupcakes">Cupcakes</SecondaryNavAnchor>
          <SecondaryNavAnchor href="/weddings">Weddings</SecondaryNavAnchor>
          <SecondaryNavAnchor href="/contact">Contact</SecondaryNavAnchor>
        </SecondaryInner>
      </SecondaryWrapper>
    </>
  )
}

export function PrimaryNav() {
  return (
    <PrimaryWrapper>
      <Title>
        <Link href="/">
          Baked Goodes
        </Link>
      </Title>
      <LinkWrapper>
        <LinkInner>
          <NavLink>
            <PrimaryNavAnchor href="/">Home</PrimaryNavAnchor>
          </NavLink>
          <NavLink>          
            <PrimaryNavAnchor href="/cakes">Cakes</PrimaryNavAnchor>
          </NavLink>
          <NavLink>
            <PrimaryNavAnchor href="/cupcakes">Cupcakes</PrimaryNavAnchor>
          </NavLink>
          <NavLink>
            <PrimaryNavAnchor href="/weddings">Weddings</PrimaryNavAnchor>
          </NavLink>
          <NavLink>
            <PrimaryNavAnchor href="/contact">Contact</PrimaryNavAnchor>
          </NavLink>
        </LinkInner>
      </LinkWrapper>
      <PrimarySquiggle hideMobile/>
    </PrimaryWrapper>
  )
}