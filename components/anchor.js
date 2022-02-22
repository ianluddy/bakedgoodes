import styled from 'styled-components';
import theme from '../themes/default';

const Anchor = styled.a`
  transition: opacity ${theme.transitionTime};
  text-decoration: none;
  cursor: pointer;
  color: ${theme.text};
  opacity: 1;
  &:hover {
    opacity: ${theme.opacity};
  }
`;

export default function ({ href, children }) {
  return (
    <Anchor href={href}>
      {children}
    </Anchor>
  )
}