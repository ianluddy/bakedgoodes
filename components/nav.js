import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from "next/router";
import Socials from './socials';
import Link from 'next/link';

const NavWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
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

const NavAnchor = styled.a`
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;  
  transition: opacity ${theme.transitionTime};
  font-weight: ${props => props.active ? 'bold' : 300 };
  &:hover {
    opacity: ${props => props.active ? 1 : theme.opacity };
  }
  &:after {
    content: ${props => props.active ? "' • '" : "" };
  }
  &:before {
    content: ${props => props.active ? "' • '" : "" };
  }
  @media (${theme.devices.md}) {
    font-size: 1rem;
  }
  @media (${theme.devices.lg}) {
    font-size: 1.2rem;
  }
`

const Title = styled.h1`
  flex-grow: 1;
  text-shadow: 1.5px 1.5px ${theme.darkPink};
  font-family: ${theme.fontParisienne};
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: 2.4rem;
  line-height: 3rem;
  color: ${theme.offWhite};
  
  @media (${theme.devices.sm}) {
    font-size: 2.9rem;
  }  
  @media (${theme.devices.md}) {
    font-size: 3.3rem;
  }
  @media (${theme.devices.lg}) {
    font-size: 4rem;
  }  
`

const Logo = styled.img`
  height: 90px;
  position: relative;
  @media (${theme.devices.md}) {
    height: 100px;
  }
  @media (${theme.devices.lg}) {
    height: 120px;
  }  
  /* top: 1rem; */
`
// TODO - use Image optimiser

export default function () {  
  const router = useRouter();
  return (
    <NavWrapper>
      <Logo src="images/cake.jpg"/>
      <NavLinkWrapper>
        <Nav>
          <NavLink>
            <Link href="/">
              <NavAnchor active={router.pathname == "/"}>Home</NavAnchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/cakes">
              <NavAnchor active={router.pathname == "/cakes"}>Cakes</NavAnchor>
            </Link>
          </NavLink>        
        </Nav>
        <Title> Baked Goodes </Title>
        <Nav>
          <NavLink>
            <Link href="/cupcakes">
              <NavAnchor active={router.pathname == "/cupcakes"}>Cupcakes</NavAnchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/weddings">
              <NavAnchor active={router.pathname == "/weddings"}>Weddings</NavAnchor>
            </Link>
          </NavLink>
        </Nav>
      </NavLinkWrapper>
      <Socials></Socials>
    </NavWrapper>
  )
}