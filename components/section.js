import theme from '../themes/default';
import styled from 'styled-components';

const Section = styled.section`
  display: ${props => props.hide ? 'none' : 'block' };
  padding: ${props => props.padding || '0 0 2rem 0'};
  @media (${theme.devices.md}) {
    padding: ${props => props.padding || '2rem 0'};
  }
`;

export default function({ children, hide, padding }) {  
  return (
    <Section hide={hide} padding={padding}>
      {children}
    </Section>
  )
}