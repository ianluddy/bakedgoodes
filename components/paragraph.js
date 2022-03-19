import styled from 'styled-components';
import theme from '../themes/default';

const Paragraph = styled.p`
  padding: 0 0 1.5rem 0;
  max-width: ${theme.textMaxWidth};
  margin: 0 auto;
  @media (${theme.devices.md}) {
    margin: ${props => props.centred ? '0 auto' : '0'};
  }
`;

export default function ({ children, centred }) {
  return (
    <Paragraph 
      centred={centred}
    >
      {children}
    </Paragraph>
  )
}