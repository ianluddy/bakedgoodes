import styled from 'styled-components';
import theme from '../themes/default';

const Page = styled.div`  
  text-align: center;
  
  h2 {
    margin: 0 auto 2rem auto;
    display: inline-block;
    padding: 0 1rem;
  }
  
  @media (${theme.devices.md}) {
    text-align: left;
    h2 {
      border-bottom: none;
      padding: 0;
      display: block;
    }
  }
`

export default function ({ children }) {
  return (
    <Page>{children}</Page>
  )
}