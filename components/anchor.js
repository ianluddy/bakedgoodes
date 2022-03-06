import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from "next/router";
import Link from 'next/link';
import Button from './button';

const AnchorWrapper = styled.a`
  transition: opacity ${theme.transitionTime};
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.color || theme.text};
  font-weight: ${props => props.active || props.bold ? 'bold' : 300 };
  opacity: 1;
  &:hover {
    opacity: ${theme.opacity};
  }
`;

const NavAnchorWrapper = styled(AnchorWrapper)`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  @media (${theme.devices.md}) {
    font-size: 1.3rem;
  }
`;

const IconAnchorWrapper = styled(AnchorWrapper)`
  font-size: ${props => props.size || "1.9rem"};
  padding: 0.35rem;
`;

export function Anchor({ href, children, color, bold, onClick }) {
  return (
    <AnchorWrapper onClick={onClick} href={href} color={color} bold={bold}>
      {children}
    </AnchorWrapper>
  )
}

export function NavAnchor({ href, active, children, color }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <NavAnchorWrapper active={router.pathname == href} color={color}>
        {children}
      </NavAnchorWrapper>
    </Link>
  )
}

export function ButtonAnchor({ href, text, onClick }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <Button text={text} onClick={onClick} large/>
    </Link>
  )
}

export function IconAnchor({ href, children, onClick, color, size }) {
  return (
    <IconAnchorWrapper href={href} onClick={onClick} color={color} size={size}>
      {children}
    </IconAnchorWrapper>
  )
}