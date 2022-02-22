import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from "next/router";
import Link from 'next/link';

const NavAnchor = styled.a`
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 1rem;
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
    margin-bottom: 0;
  }
  @media (${theme.devices.lg}) {
    font-size: 1.2rem;
  }
`

export default function ({ href, active, children }) {  
  const router = useRouter();
  return (
    <Link href={href}>
      <NavAnchor active={router.pathname == href}>{children}</NavAnchor>
    </Link>
  )
}