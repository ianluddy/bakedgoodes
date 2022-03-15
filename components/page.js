import styled from 'styled-components';
import theme from '../themes/default';

const Page = styled.div`  
  text-align: center;
  min-height: 60vh;  
  font-size: 1.1em;
  letter-spacing: 0.04em;
  font-weight: 200;
    
  p {
    padding: 0 0 1.5rem 0;
    max-width: ${theme.textMaxWidth};
    margin: 0 auto;    
    @media (${theme.devices.md}) {
      margin: 0;
    }
  }
    
  @media (${theme.devices.md}) {
    text-align: left;
  }
`

export default function ({ children }) {
  return (
    <Page>{children}</Page>
  )
}