import styled from 'styled-components';
import theme from '../themes/default';

const Page = styled.div`  
  text-align: center;
  min-height: 60vh;  
  font-size: 1.1em;
  letter-spacing: 0.02em;
    
  p {
    padding: 1rem 1rem 0 1rem;
    max-width: ${theme.textMaxWidth};
  }
    
  h1 {
    font-size: 1.7rem;
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