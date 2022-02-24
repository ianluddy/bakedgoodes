import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from "next/router";
import Link from 'next/link';

const NavAnchor = styled.a`
  cursor: pointer;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;  
  transition: opacity ${theme.transitionTime};
  font-weight: ${props => props.active ? 'bold' : 300 };
  @media (${theme.devices.md}) {
    font-size: 1.3rem;
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