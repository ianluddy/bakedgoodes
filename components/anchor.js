import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from './button';

const AnchorWrapper = styled.a`
  transition: opacity ${theme.transitionTime};
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-weight: ${(props) => (props.active || props.bold ? 500 : 300)};
  &:hover {
    opacity: ${theme.opacity};
  }
`;

const SidebarAnchorWrapper = styled(AnchorWrapper)`
  font-weight: 400;
  font-size: 1.1rem;
  color: ${(props) => (props.active ? theme.primary : theme.midGrey)};
`;

const NavAnchorWrapper = styled(AnchorWrapper)`
  font-weight: 700;
  font-family: ${theme.fontNav};
  font-size: 1.4rem;
  padding-bottom: 1rem;
  &:before,
  &:after {
    content: ${(props) => (props.active ? "'•'" : "''")};
    width: 1rem;
    display: inline-block;
  }
  @media (${theme.devices.md}) {
    font-size: 1.5rem;
  }
`;

const IconAnchorWrapper = styled(AnchorWrapper)`
  font-size: ${(props) => props.size || '1.9rem'};
  padding: 0.35rem;
  color: ${(props) => props.color || theme.text};
`;

export function Anchor({ href, children, color, bold, onClick }) {
  return (
    <AnchorWrapper onClick={onClick} href={href} color={color} bold={bold}>
      {children}
    </AnchorWrapper>
  );
}

export function SidebarAnchor({ href, children }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <SidebarAnchorWrapper active={router.pathname == href}>
        {children}
      </SidebarAnchorWrapper>
    </Link>
  );
}

export function PrimaryNavAnchor({ href, active, children, hrefList = [] }) {
  const router = useRouter();
  const isActive =
    router.pathname == href || hrefList.indexOf(router.pathname) != -1;
  return (
    <Link href={href}>
      <NavAnchorWrapper
        active={isActive}
        color={isActive ? theme.primary : theme.lightGrey}
      >
        {children}
      </NavAnchorWrapper>
    </Link>
  );
}

export function SecondaryNavAnchor({ href, active, children, hrefList = [] }) {
  const router = useRouter();
  const isActive =
    router.pathname == href || hrefList.indexOf(router.pathname) != -1;
  return (
    <Link href={href}>
      <NavAnchorWrapper
        active={isActive}
        color={isActive ? theme.darkGrey : theme.body}
      >
        {children}
      </NavAnchorWrapper>
    </Link>
  );
}

export function ButtonAnchor({ href, text, onClick, secondary, large, wide }) {
  return (
    <Link href={href}>
      <div>
        <Button
          href="#"
          text={text}
          onClick={onClick}
          large={large}
          secondary={secondary}
          wide={wide}
        />
      </div>
    </Link>
  );
}

export function IconAnchor({ href, children, onClick, color, size }) {
  return (
    <IconAnchorWrapper href={href} onClick={onClick} color={color} size={size}>
      {children}
    </IconAnchorWrapper>
  );
}
