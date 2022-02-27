import styled from 'styled-components';
import theme from '../themes/default';

const Anchor = styled.a`
  transition: opacity ${theme.transitionTime};
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.color || theme.text};
  opacity: 1;
  &:hover {
    opacity: ${theme.opacity};
  }
`;

export default function ({ href, children, color }) {
  return (
    <Anchor href={href} color={color}>
      {children}
    </Anchor>
  )
}